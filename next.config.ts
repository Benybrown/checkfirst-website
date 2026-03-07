import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
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
