// Proxies /blog/* to the dedicated checkfirst-blog-pages Cloudflare Pages
// project so the app project (this one) and the blog project can be deployed
// and rolled back completely independently. A blog publish can never again
// overwrite the main site — see docs/static-pages-publication-runbook.md in
// the flowseo repo (Benybrown/flowseo) for why this exists.
const BLOG_ORIGIN = "https://checkfirst-blog-pages.pages.dev";

export async function proxyBlogRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const originUrl = new URL(url.pathname + url.search, BLOG_ORIGIN);

  const originRequest = new Request(originUrl.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
    redirect: "manual",
  });

  const originResponse = await fetch(originRequest);
  const headers = new Headers(originResponse.headers);
  headers.delete("content-security-policy");

  return new Response(originResponse.body, {
    status: originResponse.status,
    statusText: originResponse.statusText,
    headers,
  });
}
