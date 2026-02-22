import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  skipTrailingSlashRedirect: true,
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
