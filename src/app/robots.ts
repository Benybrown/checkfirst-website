import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://checkfirst.io/sitemap.xml",
      "https://checkfirst.io/blog/sitemap_index.xml",
    ],
  };
}
