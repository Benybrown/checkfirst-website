import type { Metadata } from "next";
import Script from "next/script";
import { HomeContent } from "@/components/HomeContent";
import { defaultOgImage, defaultTwitterImages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CheckFirst TPRM — AI Vendor Security Assessment Platform",
  description:
    "Cut vendor security reviews from weeks to hours. AI-powered TPRM platform for questionnaire automation, evidence analysis, and continuous monitoring.",
  keywords: [
    "tprm software",
    "third-party risk management",
    "vendor security assessment software",
    "supplier due diligence",
    "managed tprm",
    "ai vendor risk assessment",
  ],
  openGraph: {
    title: "CheckFirst TPRM — AI Vendor Security Assessment Platform",
    description:
      "Cut vendor security reviews from weeks to hours. AI-powered TPRM platform for questionnaire automation, evidence analysis, and continuous monitoring.",
    url: "https://checkfirst.io/",
    siteName: "CheckFirst TPRM",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckFirst TPRM — AI Vendor Security Assessment Platform",
    description:
      "Cut vendor security reviews from weeks to hours. AI-powered TPRM platform for questionnaire automation, evidence analysis, and continuous monitoring.",
    images: defaultTwitterImages,
  },
  alternates: {
    canonical: "/",
  },
};

const homepageFaqs = [
  {
    question: "What does CheckFirst help teams do?",
    answer:
      "CheckFirst helps teams run vendor security assessments, supplier due diligence, AI-assisted review, remediation tracking, and managed third-party risk management workflows in one platform.",
  },
  {
    question: "Who is CheckFirst built for?",
    answer:
      "CheckFirst is built for security, procurement, compliance, and risk teams that need to review more vendors without slowing onboarding or lowering assessment quality.",
  },
  {
    question: "Does CheckFirst support both software and managed delivery?",
    answer:
      "Yes. Teams can use CheckFirst as TPRM software for internal execution, or combine it with managed TPRM services when internal analyst capacity is the bottleneck.",
  },
  {
    question: "How does AI fit into the CheckFirst workflow?",
    answer:
      "CheckFirst uses AI to help with supplier research, questionnaire analysis, document review, and framework-based assessment support, while keeping final risk decisions with human reviewers.",
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
