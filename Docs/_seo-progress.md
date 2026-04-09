# CheckFirst — SEO Progress

> Last updated: April 9, 2026

## Apr 9, 2026 Implementation Proof
- Added homepage `FAQPage` JSON-LD in `src/app/(main)/page.tsx` to strengthen homepage structured-data coverage for platform-intent queries.
- Added a new commercial-intent internal-link strip on the homepage in `src/components/HomeContent.tsx` pointing directly to:
  - `/tprm-software`
  - `/assessments`
  - `/managed-tprm`
  - `/ai-engine`
- Tightened root metadata in `src/app/layout.tsx` to align title/description with `TPRM software`, `vendor security assessments`, and `managed TPRM` intent.
- Tightened homepage hero copy in `src/components/HomeContent.tsx` so English primary messaging now leads with category and commercial-intent language.
- Strengthened `/tprm-software` metadata and buyer framing in `src/app/(main)/tprm-software/page.tsx`.
- Strengthened `/assessments` hero copy and buyer framing in `src/app/(main)/assessments/page.tsx`.
- Strengthened `/managed-tprm` hero copy and buyer framing in `src/app/(main)/managed-tprm/page.tsx`.
- Strengthened `/ai-engine` hero copy and buyer framing in `src/app/(main)/ai-engine/page.tsx`.
- Purpose: concentrate internal-link equity on the 4 commercial pages we want to push, improve homepage/category intent, and make all four commercial pages more page-one ready.
- Verification: code edits completed in the CheckFirst site repo at `/home/node/.openclaw/workspace/projects/checkfirst-website/`.

---

---

## GSC Performance (28d as of Mar 15, 2026)

| Metric | Mar 13 | Mar 15 | Change |
|--------|--------|--------|--------|
| Impressions (28d) | 1,434 | **1,996** | **+39%** |
| Clicks | 3 | **3** | Same |
| Avg Position | 8.1 | 8.4 | Wider query set |
| Keywords | 50+ | **100+** | **+100% (doubled!)** |
| Pages in SERPs | 20 | **22+** | +2 |
| Indexed pages | 19/22 | **22/22** | **ALL INDEXED** |

### Mar 15 Highlights
- **ALL 22 pages now indexed** — 0 pending, 0 issues. 3 Mar 8 posts indexed on Mar 13. /ai-engine, /assessments, /contact indexed since Mar 9.
- **Nearly 2,000 impressions** in 28 days (was 136 on Feb 26 — 15x growth in 3 weeks)
- Mar 12 (291 impressions) and Mar 13 (271) were biggest days ever
- **100+ unique keywords** — doubled from 50+ in 2 days
- Homepage is now #1 page by impressions (534, pos 5.3) with 1 click
- `/pricing` has best CTR at 1.56% (64 impressions, 1 click, pos 3.6)
- Brand queries ("check first" + "checkfirst") = 178+ impressions, 0 clicks — CTR issue
- **Still NOT in top 10 for any of 5 target keywords** (competitive head terms)
- Top blog post `best-ai-security-assessment-tools-2026`: 443 impressions at pos 9.1
- `security-questionnaire-automation-ai-2026`: 246 impressions but pos 12.8 (page 2)

### Mar 13 Highlights (previous)
- **Mar 11 was biggest day ever: 232 impressions + 1 click** — smashed the Mar 3 record (187)
- **Homepage got its FIRST CLICK** (468 impressions, 0.21% CTR)
- `best-ai-security-assessment-tools-2026`: 80 → **192 impressions (+140%)** — fastest growing page
- `security-questionnaire-automation-ai-2026`: 12 → **78 impressions (+550%)** — explosive growth
- `/assessments` and `/vendor-security-assessment-guide-2026/` now in SERPs (NEW)
- Brand queries: **140+ combined** ("check first" 88 + "checkfirst" 52), up from 111
- "ai tech vendor security assessment software reviews" at **position 1.0** — another #1 ranking
- "best ai tools for vendor security risk assessment" at pos 5.7 (NEW)
- 50+ keywords total (was 13 on Feb 26 — 4x growth in 2 weeks)
- 3 Mar 8 posts still unindexed (5 days) — need Request Indexing

### Mar 12 Highlights (previous)
- 1,202 impressions, +118 from previous day
- `best-ai-security-assessment-tools-2026`: 16 → 80 impressions (+400%)
- `vendor-security-assessment-guide-2026` confirmed indexed (crawled Mar 11)
- All 13 original blog posts fully indexed

### Mar 11 Highlights (previous)
- **7 new keywords in one day** (33 → 40) — fastest keyword growth yet
- **"tprm maturity model" at position 1.0** — first #1 ranking for checkfirst.io!
- `security-questionnaire-automation-ai-2026` indexed (crawled Mar 10) — 2 of 3 Mar 1 posts now indexed
- Brand queries: 111 combined ("check first" 71 + "checkfirst" 40), up from 96
- Homepage: 400 impressions at pos 5.5 (top page)
- `/blog/best-ai-security-assessment-tools-2026/` now showing 16 impressions at pos 7.6 (newly indexed)
- `/about` up to 13 impressions at pos 8.5
- ~~Only 1 Mar 1 blog post remains unindexed: `vendor-security-assessment-guide-2026`~~ **NOW INDEXED (Mar 12)** — all 3 Mar 1 posts done

### Mar 12 Update
- **`vendor-security-assessment-guide-2026/` now indexed** — confirmed via GSC URL Inspection ("URL is on Google")
- **All 13 original blog posts (Feb 22 + Mar 1) are now fully indexed**
- Only 3 Mar 8 posts remain unindexed (4 days old, expected to index within 1-2 weeks)
- 3 Mar 8 posts still unknown (3 days old, expected)
- **Live ranking check**: still NOT in top 10 for any target keyword

### Previous: Mar 10 Highlights
- INDEXING BREAKTHROUGH: 6 previously unindexed URLs indexed on Mar 9 after GSC "Request Indexing"
- All 9 main site pages now indexed

### Crawl Budget Fixes (deployed Mar 9-10)
- robots.txt: Disallow /blog/feed/, /blog/comments/, /blog/category/*/feed/, /blog/wp-includes/, /blog/wp-admin/, /blog/wp-json/
- WP emoji script disabled (mu-plugin)
- Rank Math SearchAction removed from JSON-LD (was causing /?s={search_term_string} crawls)

### Dead URL Redirects (deployed Mar 7)
- `/feed/`, `/comments/feed/`, `/test-only/`, `/support/*` → 308 → `/` (Next.js)
- `/blog/resilient-supply-chain` → 301 → `/blog/tprm-csa-ccm-framework/` (WP .htaccess)
- `/blog/*` → 301 → `/blog/` (WP .htaccess)

### Indexing API Investigation (Mar 9)
- **Confirmed: Google Indexing API does NOT work for checkfirst.io** — it only processes JobPosting/BroadcastEvent pages
- `getMetadata()` returns 404 for ALL checkfirst.io URLs (even indexed ones)
- All previously indexed pages were discovered via sitemaps and internal links, NOT the Indexing API
- **GSC "Request Indexing" (manual) is what actually works** — proved by 6 pages indexed within 24hrs of submission

---

## FAQ Schema Added to Top 5 Posts (Mar 5, 2026)

Added Rank Math FAQ blocks (with auto-generated FAQPage JSON-LD) to the 5 highest-impression blog posts. Each post got 4 FAQ questions/answers relevant to its topic.

| Post (ID) | Impressions | FAQ Questions |
|------------|-------------|---------------|
| best-tprm-tool-2026 (12) | 178 | What is the best TPRM tool? / How much do TPRM platforms cost? / What features to look for? / Can AI replace manual assessments? |
| 3rd-party-risk-management-maturity-framework (11) | 76 | What are the 5 maturity levels? / How to assess maturity? / How long to advance a level? / Why programs stall at Level 2? |
| tprm-agentic-ai-assessment (10) | 49 | What is agentic AI in TPRM? / How much time does it save? / Is it accurate enough? / Difference vs traditional AI? |
| tprm-csa-ccm-framework (14) | 42 | What is CSA CCM? / How to map controls to TPRM? / Is compliance mandatory? / How does CCM compare to SOC 2/ISO 27001? |
| dora-ready-tprm-supplier-assessment (15) | 25 | What is DORA? / What assessments does DORA require? / How to become DORA-compliant? / Does DORA apply to non-EU? |

### Verification
- FAQ blocks render as visible Q&A sections on the page
- Rank Math auto-generates `FAQPage` JSON-LD schema in `@graph`
- New meta titles from Mar 4 confirmed rendering in schema (`"name": "Best TPRM Tool 2026: 7 Platforms Compared (Honest Review)"`)
- Google Rich Results Test should validate the schema

### Expected Impact
- FAQ rich results can appear as expandable Q&A under the SERP listing
- Increased SERP real estate → higher CTR
- FAQ-targeted queries may trigger featured snippets

---

## Indexing Resubmission (Mar 5, 2026)

Resubmitted the same 6 unindexed URLs (still unknown to Google after Mar 4 submission):
- Google Indexing API: all 6 OK
- IndexNow: HTTP 202

---

## Cloudflare WAF Fix (Feb 24, 2026)

### Problem
Google was getting **403 Forbidden** on all non-blog pages (including `/sitemap.xml`, `/`, `/about`, `/pricing`, etc.). GSC URL Inspection showed "Failed: Blocked due to access forbidden (403)".

### Root Cause
The custom WAF challenge rule (`e51fc3f7d6aa40f8a70ea1738488884c`) had two bugs:

1. **`cf.verified_bot_category` doesn't work on Cloudflare Free plan** — requires Bot Management (Enterprise). The field is always empty on Free, so the "exclude search engines" check never fired.
2. **`cf.client.bot` was used backwards** — it means "known good bot" (Googlebot, Bingbot), but was placed in the trigger condition `(cf.client.bot) OR (cf.threat_score gt 30)`, actively challenging good bots.

### How We Found It
Used Cloudflare GraphQL Analytics API to query `firewallEventsAdaptive` — confirmed every block was:
- Source: `firewallCustom`
- Rule: `e51fc3f7d6aa40f8a70ea1738488884c`
- Clients: Googlebot and Google-InspectionTool from GOOGLE ASN

### Fix Applied
Updated the WAF challenge rule expression.

**Before (broken):**
```
(not cf.verified_bot_category in {"search_engine" "social_media" "page_preview" "monitoring" "academic_research" "security" "accessibility"})
and (not starts_with(http.request.uri.path, "/blog"))
and ((cf.client.bot) or (cf.threat_score gt 30))
```

**After (working):**
```
(not cf.client.bot)
and (not starts_with(http.request.uri.path, "/blog"))
and (cf.threat_score gt 30)
```

Key changes:
- `cf.client.bot` (Free plan compatible) replaces `cf.verified_bot_category` (Enterprise only)
- Removed `cf.client.bot` from the trigger condition — good bots are now excluded, not targeted

### Result
- Both sitemaps resubmitted and showing **Success** in GSC
- `sitemap.xml`: 9 pages discovered
- `blog/sitemap_index.xml`: 14 pages discovered
- All main site pages now crawlable by Google

### Lesson Learned
**Never use `cf.verified_bot_category` on Cloudflare Free plan** — it silently fails. Always use `cf.client.bot` instead.

---

## Current WAF Rules (Ruleset `e4f238cb...`)

| # | Action | Description | Rule ID |
|---|--------|-------------|---------|
| 1 | Challenge | High-threat visitors (skip verified bots + /blog) | `e51fc3f7...` |
| 2 | Block | Common attack patterns (except /blog/wp-admin) | `5a7d4dbe...` |
| 3 | Block | SQL injection attempts | `b2d71672...` |

## Config Settings (Ruleset `a9ffd81c...`)

- Security level set to `essentially_off` + BIC disabled for: `/`, `/about`, `/pricing`, `/assessments`, `/ai-engine`, `/managed-tprm`, `/contact`, `/privacy`, `/terms`, `/sitemap.xml`, `/robots.txt`, `/blog/*`, `/_next/*`

## Zone Settings

- Global security level: **high**
- Bot Fight Mode: **off**
- AI bots protection: **disabled**
- Crawler protection: **disabled**

---

## Sitemaps

| Sitemap | Type | Status | Pages |
|---------|------|--------|-------|
| `checkfirst.io/sitemap.xml` | Next.js pages | Success | 9 |
| `checkfirst.io/blog/sitemap_index.xml` | WordPress blog | Success | 14 |

## GSC Property

- Property: `sc-domain:checkfirst.io`
- Verified via: Cloudflare DNS TXT record
- Service account: `gsc-mcp@seo-sites-488114.iam.gserviceaccount.com` (Full user)

## IndexNow

- Key: `eb9faf68fc5cbe8b5de8ffbb2b5acb46`

---

## robots.txt & sitemap.xml Fix (Feb 25, 2026)

### Problem
`/robots.txt` was returning Cloudflare's "Content Signals Policy" boilerplate instead of the Next.js `robots.ts` output. Google had no `User-agent`, `Allow`, or `Sitemap` directives — meaning no automated sitemap discovery via robots.txt.

### Root Causes (two issues)

1. **Cloudflare `cf_robots_variant: policy_only`** — Cloudflare was injecting its AI content signals into robots.txt, overriding the origin response.
2. **`robots.ts` and `sitemap.ts` were inside `(main)/` route group** — Next.js only serves these special metadata files from the app root (`src/app/`), not from inside route groups like `src/app/(main)/`.

### Fixes Applied

1. **Disabled Cloudflare content signals injection** via API:
   ```
   PUT /zones/{zone_id}/bot_management
   {"cf_robots_variant": "off"}
   ```
2. **Moved `robots.ts` and `sitemap.ts`** from `src/app/(main)/` to `src/app/` (app root)
3. **Fixed TypeScript build error** — consultant page had `topLabel`/`bottomLabel` dynamic property checks causing `Type 'unknown' is not assignable to ReactNode`

### Result
- `checkfirst.io/robots.txt` now returns proper crawl directives + both sitemap URLs
- `checkfirst.io/sitemap.xml` serves correctly (9 pages)
- Build passes, deployed successfully to Coolify

### Lesson Learned
- **Next.js `robots.ts` and `sitemap.ts` must be at `src/app/` root**, not inside route groups like `(main)/`
- **Cloudflare `cf_robots_variant`** on Free plan defaults to `policy_only` which injects content signals. Set to `off` if you serve your own robots.txt from origin.

---

## Cloudflare Bot Management Settings (current)

```json
{
  "enable_js": false,
  "fight_mode": false,
  "ai_bots_protection": "disabled",
  "crawler_protection": "disabled",
  "is_robots_txt_managed": false,
  "cf_robots_variant": "off"
}
```

---

## IndexNow Pings Sent (Feb 25, 2026)

Sent batch ping (HTTP 202 accepted) for:
- `checkfirst.io/pricing`
- `checkfirst.io/about`
- `checkfirst.io/assessments`
- `checkfirst.io/ai-engine`
- `checkfirst.io/contact`

---

## Internal Links Added to Blog Posts (Feb 25, 2026)

Added contextual internal links from all 10 WordPress blog posts to the 5 unindexed main site pages. Purpose: help Google discover and index main pages faster via links from already-indexed blog content.

| Target Page | Total Links Added |
|-------------|-------------------|
| `/assessments` | 18 |
| `/pricing` | 14 |
| `/ai-engine` | 14 |
| `/managed-tprm` | 10 |
| `/about` | 10 |

Each post received:
- 2-3 contextual in-body links where topics naturally match
- A CTA paragraph at the bottom linking to `/assessments`, `/pricing`, and `/managed-tprm`
- All links use absolute URLs, `target="_blank"`, varied anchor text

---

## Sitemaps Resubmitted (Feb 25, 2026)

Both sitemaps resubmitted via GSC API after robots.txt fix:
- `checkfirst.io/sitemap.xml` — pending processing
- `checkfirst.io/blog/sitemap_index.xml` — pending processing

---

## Indexing Status (Feb 25, 2026)

| URL | Status | Last Crawled |
|-----|--------|-------------|
| `checkfirst.io/` | Indexed | Feb 25 |
| `checkfirst.io/managed-tprm` | Indexed | Feb 25 |
| `checkfirst.io/blog/best-tprm-tool-2026/` | Indexed | Feb 22 |
| `checkfirst.io/blog/tprm-csa-ccm-framework/` | Indexed | Feb 22 |
| `checkfirst.io/blog/why-checkfirst-ai-tprm-platform/` | Indexed | Feb 22 |
| `checkfirst.io/blog/3rd-party-risk-management-maturity-framework/` | Indexed | Feb 22 |
| `checkfirst.io/blog/dora-ready-tprm-supplier-assessment/` | Indexed | Feb 22 |
| `checkfirst.io/pricing` | Discovered, not indexed | Never |
| `checkfirst.io/about` | Discovered, not indexed | Never |
| `checkfirst.io/ai-engine` | Discovered, not indexed | Never |
| `checkfirst.io/assessments` | Unknown to Google | Never |
| `checkfirst.io/contact` | Unknown to Google | Never |

### GSC Performance (28d as of Feb 25)

- **Impressions**: 17
- **Clicks**: 0
- **Avg position**: 7.9
- **Keywords showing**: 8 (incl. "top tprm platforms 2026", "proveye", "best tprm tools 2026")

---

## GSC Performance Update (Feb 26, 2026)

**Massive growth since last check (Feb 25):**

| Metric | Feb 25 | Feb 26 | Change |
|--------|--------|--------|--------|
| Impressions (28d) | 17 | 136 | +700% |
| Clicks | 0 | 0 | — |
| Avg Position | 7.9 | 9.4 | Wider query set |
| Keywords | 8 | 13 | +63% |
| Pages in SERPs | ~3 | 9 | +200% |

### Top Pages by Impressions (Feb 26)

| Page | Impressions | Avg Position |
|------|-------------|-------------|
| `/blog/best-tprm-tool-2026/` | 57 | 9.0 |
| `/blog/3rd-party-risk-management-maturity-framework/` | 32 | 7.8 |
| `/blog/tprm-agentic-ai-assessment/` | 20 | 6.8 |
| `/blog/tprm-csa-ccm-framework/` | 14 | 7.8 |
| `/blog/best-tprm-tool-with-ai-2026/` | 9 | 6.4 |
| `/blog/why-checkfirst-ai-tprm-platform/` | 5 | 3.6 |

### Quick Wins Identified

| Page | Position | Action |
|------|----------|--------|
| `/blog/best-tprm-tool-2026/` | 9.0 (57 imps) | Biggest ROI — optimize title/content to break top 5 |
| `/blog/best-tprm-tool-with-ai-2026/` | 6.4 | Already strong — small push could hit top 3 |
| `/blog/tprm-agentic-ai-assessment/` | 6.8 | Good position, optimize for "agentic AI TPRM" |

### Assessment Summary
- Blog is driving ALL visibility — 9 blog posts appearing in SERPs
- Impressions growing rapidly (0 → 136 in ~4 days)
- WAF fix from Feb 24 is working — pages crawlable
- Main site pages still not indexed (pricing, about, ai-engine, assessments, contact)
- Zero clicks — need title/meta description optimization on top posts

---

## Meta Titles & Descriptions Optimized (Mar 4, 2026)

Updated all 13 blog posts with CTR-optimized Rank Math meta titles and descriptions. Previously 11 of 13 posts had **no meta description** and titles were generic/dry.

### Changes Applied

| Post (ID) | Old Title | New Title | Description Added |
|------------|-----------|-----------|-------------------|
| best-tprm-tool-2026 (12) | Best TPRM Tool 2026: Buyer Guide \| CheckFirst | Best TPRM Tool 2026: 7 Platforms Compared (Honest Review) | Yes |
| 3rd-party-risk-management-maturity-framework (11) | 3rd Party Risk Maturity Framework \| CheckFirst | 3rd Party Risk Maturity Framework: 5 Levels Explained (2026) | Yes |
| tprm-agentic-ai-assessment (10) | TPRM Agentic AI Assessment Guide 2026 \| CheckFirst | TPRM Agentic AI: Cut Vendor Assessments From Weeks to Minutes | Yes |
| tprm-csa-ccm-framework (14) | TPRM CSA CCM Framework Guide \| CheckFirst | TPRM + CSA CCM: The Complete Implementation Guide (2026) | Yes |
| dora-ready-tprm-supplier-assessment (15) | DORA TPRM Supplier Assessment \| CheckFirst | DORA-Ready TPRM: Supplier Assessment Checklist (2026) | Yes |
| best-tprm-tool-with-ai-2026 (13) | Best AI-Powered TPRM Tool 2026 \| CheckFirst | Best AI TPRM Tool 2026: Which Platform Actually Delivers? | Yes |
| why-checkfirst-ai-tprm-platform (8) | Why CheckFirst: AI-Powered TPRM Platform \| CheckFirst Blog | Why CheckFirst? 5 AI Engines, 45+ Frameworks, 85% Faster | Already had desc |
| 3rd-party-risk-management-program (16) | Build a 3rd Party Risk Program \| CheckFirst | Build a 3rd Party Risk Program That Actually Works (2026) | Yes |
| nis2-tprm-supplier-assessment (18) | NIS2 TPRM Supplier Assessment \| CheckFirst | NIS2 TPRM Supplier Assessment: Compliance Playbook (2026) | Yes |
| tprm-risk-management-maturity (17) | TPRM Risk Maturity Roadmap 2026 \| CheckFirst | TPRM Risk Maturity: 5-Step Roadmap to Confident Decisions | Yes |
| best-ai-security-assessment-tools-2026 (50) | *(none)* | Best AI Security Assessment Tools 2026: Stop Manual Reviews | Yes + focus keyword |
| security-questionnaire-automation-ai-2026 (51) | *(none)* | Security Questionnaire Automation: AI Cuts 87% of Manual Work | Yes + focus keyword |
| vendor-security-assessment-guide-2026 (52) | *(none)* | Fix Your Broken Vendor Security Assessments (2026 Guide) | Yes + focus keyword |

### Optimization Strategy
- Added **power words** (honest review, actually delivers, fix your broken)
- Added **numbers** (5 levels, 87%, 243 controls, 7 platforms)
- Used **curiosity hooks** and **second person** language in descriptions
- All descriptions target ~150 characters with clear value propositions

### Expected Impact
- CTR improvement expected within 1-2 weeks as Google recrawls and updates SERP snippets
- Currently 466 impressions / 0 clicks (0% CTR) — any improvement is significant

---

## Indexing Submissions (Mar 4, 2026)

Submitted 6 unindexed URLs via Google Indexing API + IndexNow (HTTP 202):
- `checkfirst.io/ai-engine`
- `checkfirst.io/assessments`
- `checkfirst.io/contact`
- `checkfirst.io/blog/best-ai-security-assessment-tools-2026/`
- `checkfirst.io/blog/security-questionnaire-automation-ai-2026/`
- `checkfirst.io/blog/vendor-security-assessment-guide-2026/`

---

## Indexing Status (Mar 4, 2026)

| URL | Status | Last Crawled |
|-----|--------|-------------|
| `checkfirst.io/` | Indexed | Mar 4 |
| `checkfirst.io/pricing` | Indexed | Feb 27 |
| `checkfirst.io/about` | Indexed | Feb 27 |
| `checkfirst.io/managed-tprm` | Indexed | Feb 25 |
| `checkfirst.io/blog/` | Indexed | Feb 23 |
| `checkfirst.io/blog/best-tprm-tool-2026/` | Indexed | Feb 22 |
| `checkfirst.io/blog/tprm-agentic-ai-assessment/` | Indexed | Feb 22 |
| `checkfirst.io/blog/3rd-party-risk-management-maturity-framework/` | Indexed | Feb 22 |
| `checkfirst.io/blog/best-tprm-tool-with-ai-2026/` | Indexed | Feb 27 |
| `checkfirst.io/blog/tprm-csa-ccm-framework/` | Indexed | Feb 22 |
| `checkfirst.io/blog/dora-ready-tprm-supplier-assessment/` | Indexed | Feb 22 |
| `checkfirst.io/blog/nis2-tprm-supplier-assessment/` | Indexed | Feb 24 |
| `checkfirst.io/blog/tprm-risk-management-maturity/` | Indexed | Feb 24 |
| `checkfirst.io/blog/3rd-party-risk-management-program/` | Indexed | Feb 23 |
| `checkfirst.io/blog/why-checkfirst-ai-tprm-platform/` | Indexed | Mar 3 |
| `checkfirst.io/ai-engine` | **Unknown to Google** | Never |
| `checkfirst.io/assessments` | **Unknown to Google** | Never |
| `checkfirst.io/contact` | **Unknown to Google** | Never |
| `checkfirst.io/blog/best-ai-security-assessment-tools-2026/` | **Unknown to Google** | Never |
| `checkfirst.io/blog/security-questionnaire-automation-ai-2026/` | **Unknown to Google** | Never |
| `checkfirst.io/blog/vendor-security-assessment-guide-2026/` | **Unknown to Google** | Never |

**14 indexed / 6 pending** (submitted via Indexing API Mar 4)

---

## GSC Performance (28d as of Mar 4, 2026)

| Metric | Feb 26 | Mar 4 | Change |
|--------|--------|-------|--------|
| Impressions (28d) | 136 | 466 | +243% |
| Clicks | 0 | 0 | — |
| Avg Position | 9.4 | 9.7 | Wider query set |
| Keywords | 13 | 24 | +85% |
| Pages in SERPs | 9 | 13 | +44% |

### Top Pages by Impressions (Mar 4)

| Page | Impressions | Avg Position |
|------|-------------|-------------|
| `/blog/best-tprm-tool-2026/` | 163 | 9.4 |
| `/` (homepage) | 85 | 5.3 |
| `/blog/3rd-party-risk-management-maturity-framework/` | 71 | 8.7 |
| `/blog/tprm-agentic-ai-assessment/` | 48 | 6.9 |
| `/blog/tprm-csa-ccm-framework/` | 34 | 8.5 |
| `/blog/dora-ready-tprm-supplier-assessment/` | 24 | 9.2 |
| `/blog/best-tprm-tool-with-ai-2026/` | 21 | 6.3 |
| `/blog/why-checkfirst-ai-tprm-platform/` | 15 | 5.3 |

---

## TODO

### Quick Wins (Mar 4 — completed)
- [x] Optimize title/meta for all 13 blog posts (done Mar 4)
- [x] Submit 6 unindexed URLs via Indexing API + IndexNow (done Mar 4)

### Ongoing
- [ ] Monitor GSC over next 1-2 weeks — expect main pages to get indexed now that robots.txt + internal links are fixed
- [ ] Check if Cloudflare content signals stay off (verify robots.txt periodically)
- [ ] Add structured data: Organization schema (homepage), SoftwareApplication schema, FAQ schema (pricing page)
- [ ] Get backlinks: submit to G2, Capterra, CSA partner pages, Product Hunt
- [ ] Create Google Business Profile for brand queries
- [ ] Write more targeted blog content for bottom-of-funnel keywords
- [ ] Consider pillar page optimization for `/assessments` and `/ai-engine`
