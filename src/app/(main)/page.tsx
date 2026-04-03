import type { Metadata } from "next";
import Script from "next/script";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "CheckFirst | TPRM Software, Vendor Security Assessments & Managed TPRM",
  description:
    "CheckFirst helps teams run vendor security assessments, supplier due diligence, AI-assisted review, and managed third-party risk management from one platform.",
  keywords: [
    "tprm software",
    "third-party risk management",
    "vendor security assessment software",
    "supplier due diligence",
    "managed tprm",
    "ai vendor risk assessment",
  ],
  openGraph: {
    title: "CheckFirst | TPRM Software, Vendor Security Assessments & Managed TPRM",
    description:
      "CheckFirst helps teams run vendor security assessments, supplier due diligence, AI-assisted review, and managed third-party risk management from one platform.",
    url: "https://checkfirst.io/",
    siteName: "CheckFirst",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckFirst | TPRM Software, Vendor Security Assessments & Managed TPRM",
    description:
      "CheckFirst helps teams run vendor security assessments, supplier due diligence, AI-assisted review, and managed third-party risk management from one platform.",
  },
  alternates: {
    canonical: "/",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "CheckFirst",
      url: "https://checkfirst.io",
      description:
        "CheckFirst provides TPRM software, vendor security assessment workflows, AI-assisted due diligence, and managed third-party risk management services.",
    },
    {
      "@type": "WebSite",
      name: "CheckFirst",
      url: "https://checkfirst.io",
    },
    {
      "@type": "SoftwareApplication",
      name: "CheckFirst",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://checkfirst.io",
      description:
        "Third-party risk management software for vendor security assessments, supplier due diligence, AI-assisted review, and managed TPRM workflows.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
      publisher: {
        "@type": "Organization",
        name: "CheckFirst",
        url: "https://checkfirst.io",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HomeContent />
    </>
  );
}
