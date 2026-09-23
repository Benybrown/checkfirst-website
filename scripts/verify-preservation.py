"""Compare a candidate site against a recorded public-page preservation baseline."""
import argparse, collections, concurrent.futures, json, re, urllib.request, urllib.error
from html.parser import HTMLParser
from pathlib import Path

class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.title=[]; self.headings=[]; self.meta=[]; self.links=[]; self.anchors=[]; self.images=[]; self.jsonld=[]; self.text=[]; self.cap=None; self.buf=[]; self.skip=0
    def handle_starttag(self,t,a):
        d=dict(a)
        if t=='meta': self.meta.append(d)
        if t=='link': self.links.append(d)
        if t=='a' and 'href' in d: self.anchors.append(d['href'])
        if t=='img': self.images.append(d)
        if t in ['title','h1','h2','h3'] or (t=='script' and d.get('type')=='application/ld+json'): self.cap=t; self.buf=[]
        if t in ['script','style']: self.skip+=1
    def handle_data(self,d):
        if self.cap: self.buf.append(d)
        if not self.skip and d.strip(): self.text.append(d.strip())
    def handle_endtag(self,t):
        if self.cap==t:
            s=' '.join(' '.join(self.buf).split())
            if t=='title': self.title.append(s)
            elif t=='script': self.jsonld.append(s)
            else: self.headings.append([t,s])
            self.cap=None; self.buf=[]
        if t in ['script','style']: self.skip=max(0,self.skip-1)

def decode_cloudflare_link(link):
    if '/cdn-cgi/l/email-protection#' not in link: return link
    encoded=bytes.fromhex(link.split('#')[-1]); return 'mailto:'+''.join(chr(b ^ encoded[0]) for b in encoded[1:])
def normalized_text(parts, links):
    emails={decode_cloudflare_link(a).removeprefix('mailto:') for a in links if '/cdn-cgi/l/email-protection#' in a}
    if len(emails)==1:
        email=emails.pop(); return [re.sub(r'\[email\s+protected\]',lambda _:email,part) for part in parts]
    return parts

def tokens(parts): return collections.Counter(re.findall(r'\w+|[^\w\s]', ' '.join(parts)))
def metas(items): return sorted((x.get('name') or x.get('property') or x.get('http-equiv',''),x.get('content','')) for x in items)
def headlinks(items): return sorted((x.get('rel',''),x.get('href',''),x.get('hreflang','')) for x in items if x.get('rel') in ['canonical','alternate','icon','apple-touch-icon'])
def schemas(items): return sorted(json.dumps(json.loads(x),sort_keys=True,ensure_ascii=False) for x in items)
def verify(row):
    path=row['url'].removeprefix('https://checkfirst.io') or '/'
    url=args.origin.rstrip('/')+path
    try:
        with urllib.request.urlopen(urllib.request.Request(url,headers={"User-Agent":args.user_agent}) if args.user_agent else url,timeout=40) as r: status=r.status; raw=r.read().decode(); robots=r.headers.get('X-Robots-Tag')
    except urllib.error.HTTPError as e: status=e.code; raw=e.read().decode(); robots=e.headers.get('X-Robots-Tag')
    p=Page(); p.feed(raw); issues={}
    if status!=row['status']: issues['status']=[row['status'],status]
    if p.title!=row['title']: issues['title']=[row['title'],p.title]
    if p.headings!=row['headings']:
        # WordPress can reorder equal-date cards; retain exact headings and H1 count.
        archive_reorder = '/blog/category/' in path and collections.Counter(map(tuple,p.headings)) == collections.Counter(map(tuple,row['headings']))
        if not archive_reorder: issues['headings']=[row['headings'],p.headings]
    if metas(p.meta)!=metas(row['meta']): issues['meta']=[metas(row['meta']),metas(p.meta)]
    if headlinks(p.links)!=headlinks(row['head_links']): issues['head_links']=[headlinks(row['head_links']),headlinks(p.links)]
    if schemas(p.jsonld)!=schemas(row['jsonld']): issues['schema_changed']=True
    before=tokens(normalized_text(row['text'],row['anchors'])); after=tokens(normalized_text(p.text,p.anchors))
    if args.voxaura_blog_navigation and '/blog' in path and status==200:
        after.subtract(tokens(['CheckFirst TPRM software Pricing Book a demo']))
        after=+after
    if before!=after: issues['text_tokens']={'removed':dict(before-after),'added':dict(after-before)}
    missing={decode_cloudflare_link(a) for a in row['anchors']}-{decode_cloudflare_link(a) for a in p.anchors}
    if missing: issues['missing_links']=sorted(missing)
    missing_images={(x.get('src'),x.get('alt','')) for x in row['images']}-{(x.get('src'),x.get('alt','')) for x in p.images}
    # Explicit user request on 23 September: expose the template animation.
    if args.hero_image_removed and path=='/':
        missing_images.discard(('/checkfirst-hero-assessment.png','CheckFirst public posture assessment dashboard showing risk rating, security score, and grouped findings'))
    if missing_images: issues['missing_images']=sorted(missing_images)
    if row.get('x_robots_tag')!=robots: issues['robots_header']=[row.get('x_robots_tag'),robots]
    return {'path':path,'status':status,'issues':issues}

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--baseline',required=True);parser.add_argument('--origin',required=True);parser.add_argument('--output',required=True);parser.add_argument('--user-agent');parser.add_argument('--include-blog',action='store_true');parser.add_argument('--voxaura-blog-navigation',action='store_true');parser.add_argument('--hero-image-removed',action='store_true');args=parser.parse_args()
    d=json.loads(Path(args.baseline).read_text()); rows=d['pages']+d.get('additional_linked_pages',[])
    rows=[r for r in rows if args.include_blog or '/blog' not in r['url']]
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool: report=list(pool.map(verify,rows))
    Path(args.output).write_text(json.dumps(report,ensure_ascii=False,indent=2))
    print(json.dumps({'checked':len(report),'passed':sum(not r['issues'] for r in report),'differences':[{'path':r['path'],'status':r['status'],'checks':list(r['issues'])} for r in report if r['issues']]},ensure_ascii=False,indent=2))
    raise SystemExit(1 if any(r['issues'] for r in report) else 0)
