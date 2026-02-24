import { NextRequest, NextResponse } from "next/server";

const CONSULTANT_HOSTS = [
  "consultant.checkfirst.io",
  "consultant.localhost",
];

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (!CONSULTANT_HOSTS.includes(host)) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Root → rewrite to /consultant (served by (consultant)/consultant/page.tsx)
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/consultant";
    return NextResponse.rewrite(url);
  }

  // API routes needed by the consultant page
  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Any other path → redirect to main site
  const mainUrl = new URL(pathname, "https://checkfirst.io");
  mainUrl.search = request.nextUrl.search;
  return NextResponse.redirect(mainUrl, 308);
}

export const config = {
  matcher: [
    // Skip Next.js internals and static assets
    "/((?!_next/|favicon\\.svg|.*\\.(?:png|jpg|jpeg|gif|webp|ico|svg|woff2?|ttf|eot)).*)",
  ],
};
