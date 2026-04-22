import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  skipTrailingSlashRedirect: true,
  // Pin Turbopack to this project root so it doesn't walk up to the _SEO-sites
  // parent folder and fail to resolve tailwindcss / posthog / etc.
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      // Canonical root aliases for blog sitemaps
      {
        source: "/sitemap_index.xml",
        destination: "/blog/sitemap_index.xml",
        permanent: true,
      },
      {
        source: "/post-sitemap.xml",
        destination: "/blog/post-sitemap.xml",
        permanent: true,
      },
      {
        source: "/page-sitemap.xml",
        destination: "/blog/page-sitemap.xml",
        permanent: true,
      },
      {
        source: "/category-sitemap.xml",
        destination: "/blog/category-sitemap.xml",
        permanent: true,
      },
      // Dead URLs Google found — redirect to relevant pages
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/comments/feed/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/test-only",
        destination: "/",
        permanent: true,
      },
      {
        source: "/test-only/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/support/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/blog", destination: "https://blog.checkfirst.io/blog/" },
      { source: "/blog/", destination: "https://blog.checkfirst.io/blog/" },
      {
        source: "/blog/:path*/",
        destination: "https://blog.checkfirst.io/blog/:path*/",
      },
      {
        source: "/blog/:path*",
        destination: "https://blog.checkfirst.io/blog/:path*",
      },
    ];
  },
};

export default nextConfig;
