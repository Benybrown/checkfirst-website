import { proxyBlogRequest } from "../_lib/blog-proxy";

export const onRequest: PagesFunction = async ({ request }) => proxyBlogRequest(request);
