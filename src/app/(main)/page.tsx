import type { Metadata } from "next";
import Script from "next/script";
import { HomeContent } from "@/components/HomeContent";
import { defaultOgImage, defaultTwitterImages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CheckFirst TPRM Software - SOC 2 & ISO 27001 Vendor Risk",
  description:
    "AI-powered TPRM platform for vendor security assessments, supplier due diligence, SOC 2 vendor evidence, ISO 27001 supplier controls, external scans, and remediation tracking.",
  keywords: [
    "tprm software",
    "third-party risk management",
    "vendor security assessment software",
    "supplier due diligence",
    "managed tprm",
    "ai vendor risk assessment",
  ],
  openGraph: {
    title: "CheckFirst TPRM Software - SOC 2 & ISO 27001 Vendor Risk",
    description:
      "AI-powered TPRM platform for vendor security assessments, supplier due diligence, SOC 2 vendor evidence, ISO 27001 supplier controls, external scans, and remediation tracking.",
    url: "https://checkfirst.io/",
    siteName: "CheckFirst TPRM",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckFirst TPRM Software - SOC 2 & ISO 27001 Vendor Risk",
    description:
      "AI-powered TPRM platform for vendor security assessments, supplier due diligence, SOC 2 vendor evidence, ISO 27001 supplier controls, external scans, and remediation tracking.",
    images: defaultTwitterImages,
  },
  alternates: {
    canonical: "/",
  },
};

const homepageFaqs = [
  {
    question: "What can we manage in CheckFirst?",
    answer:
      "You can manage vendor intake, risk tiering, questionnaires, document review, external scans, remediation, approvals, reassessments, and audit-ready evidence records.",
  },
  {
    question: "Can CheckFirst help with SOC 2 and ISO 27001?",
    answer:
      "Yes. CheckFirst helps organize vendor-risk evidence for SOC 2 and supplier-risk records for ISO 27001, while still supporting broader third-party risk management workflows.",
  },
  {
    question: "Do vendors need an account to respond?",
    answer:
      "No. Vendors can answer questionnaires and provide evidence through secure links, while your team keeps the review record inside CheckFirst.",
  },
  {
    question: "Can we keep our existing compliance platform?",
    answer:
      "Yes. Teams can use CheckFirst alongside Vanta, Drata, a consultant, or an internal compliance program when vendor risk needs a more focused workflow.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "Most teams can begin with a small set of critical vendors, prove the workflow, and then expand to more suppliers, frameworks, and reassessment cycles.",
  },
];

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
    {
      "@type": "FAQPage",
      mainEntity: homepageFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
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
