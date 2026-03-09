import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/blog/feed/",
        "/blog/comments/",
        "/blog/category/*/feed/",
        "/blog/wp-includes/",
        "/blog/wp-admin/",
        "/blog/wp-json/",
      ],
    },
    sitemap: [
      "https://checkfirst.io/sitemap.xml",
      "https://checkfirst.io/blog/sitemap_index.xml",
    ],
  };
}
