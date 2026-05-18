import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://checkfirst.io";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/soc-2-vendor-risk`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/iso-27001-supplier-risk`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/vanta-vendor-risk-alternative`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/drata-vendor-risk-alternative`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/assessments`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tprm-software`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ai-engine`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/managed-tprm`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
