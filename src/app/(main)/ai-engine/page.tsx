import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "AI Vendor Risk Assessment Engine | Automated Supplier Due Diligence | CheckFirst",
  description:
    "See how CheckFirst uses AI for vendor risk assessment, questionnaire review, document analysis, and supplier due diligence while keeping human approval in the loop.",
  keywords: [
    "ai vendor risk assessment",
    "security questionnaire automation",
    "supplier due diligence automation",
    "ai risk assessment",
    "vendor security assessment ai",
  ],
  openGraph: {
    title: "AI Vendor Risk Assessment Engine | Automated Supplier Due Diligence | CheckFirst",
    description:
      "See how CheckFirst uses AI for vendor risk assessment, questionnaire review, document analysis, and supplier due diligence while keeping human approval in the loop.",
    url: "https://checkfirst.io/ai-engine",
    siteName: "CheckFirst",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Vendor Risk Assessment Engine | Automated Supplier Due Diligence | CheckFirst",
    description:
      "See how CheckFirst uses AI for vendor risk assessment, questionnaire review, document analysis, and supplier due diligence while keeping human approval in the loop.",
  },
  alternates: {
    canonical: "/ai-engine",
  },
};

const engineBlocks = [
  {
    tag: "CSA assessment engine",
    title: "JinoXtreme CSA",
    description:
      "Evaluate suppliers against the full CSA Cloud Controls Matrix with evidence-based scoring, prioritised findings, and clearer remediation direction.",
    bullets: [
      "Assess all 243 CSA CCM controls across 18 domains",
      "Produce evidence-based compliance ratings instead of simple pass/fail labels",
      "Highlight non-compliant controls with remediation guidance",
      "Package findings into a reviewable risk summary for your team",
    ],
  },
  {
    tag: "Supplier intelligence",
    title: "Jino 360",
    description:
      "Research supplier posture across websites, incidents, certifications, and public records so your team does not start from a blank page every time.",
    bullets: [
      "Aggregate public intelligence from multiple sources",
      "Support faster due diligence before questionnaire completion",
      "Surface relevant incidents, certifications, and context",
      "Turn raw web data into structured supplier insights",
    ],
  },
  {
    tag: "Questionnaire and document analysis",
    title: "Jino-QA + JinoDocs",
    description:
      "Analyse questionnaires and supporting evidence for completeness, specificity, consistency, and control alignment so your reviewers can focus on exceptions.",
    bullets: [
      "Identify weak or vague supplier answers",
      "Check whether evidence supports the response narrative",
      "Flag missing detail and contradictory statements",
      "Speed up analyst review without removing human sign-off",
    ],
  },
];

const useCases = [
  {
    title: "AI vendor risk assessment",
    description:
      "Accelerate first-pass risk reviews by combining external scanning, supplier intelligence, questionnaire analysis, and framework mapping.",
  },
  {
    title: "Automated supplier due diligence",
    description:
      "Shorten onboarding bottlenecks by gathering public evidence and structuring findings before your team performs final review.",
  },
  {
    title: "Security questionnaire automation",
    description:
      "Route suppliers into the right questionnaire path and use AI to interpret response quality, not just collect answers.",
  },
  {
    title: "Evidence review at scale",
    description:
      "Analyse policies, reports, and attachments more consistently when vendor volume grows faster than internal security headcount.",
  },
];

const reviewPrinciples = [
  {
    title: "Every output is reviewable",
    description:
      "The system is designed to produce structured outputs your team can validate, challenge, and approve rather than opaque black-box conclusions.",
  },
  {
    title: "Human approval stays in control",
    description:
      "Risk treatment and acceptance decisions remain human-owned. CheckFirst helps your team reach those decisions faster with better evidence.",
  },
  {
    title: "AI supports workflows, not reckless automation",
    description:
      "The goal is faster, more defensible vendor risk review. Not autonomous decision-making without accountability.",
  },
];

const relatedCommercialPages = [
  {
    href: "/",
    title: "CheckFirst platform overview",
    description:
      "Start with the main platform page if you need the broader product story beyond the AI layer alone.",
  },
  {
    href: "/assessments",
    title: "Vendor security assessment software",
    description:
      "Shows where AI fits inside the end-to-end supplier assessment workflow, from intake through decision support.",
  },
  {
    href: "/managed-tprm",
    title: "Managed TPRM services",
    description:
      "Useful for teams that want analyst capacity plus automation instead of software-only adoption.",
  },
  {
    href: "/tprm-software",
    title: "TPRM software overview",
    description:
      "Helps category buyers compare AI-led execution against broader third-party risk management platform requirements.",
  },
];

const survivorLinks = [
  {
    href: "/blog/tprm-agentic-ai-assessment/",
    title: "AI Vendor Risk Assessment Guide",
    description:
      "The canonical supporting piece for buyers evaluating AI in TPRM and supplier assessments.",
  },
  {
    href: "/blog/vendor-security-assessment-guide-2026/",
    title: "Vendor Security Assessment Guide",
    description:
      "Shows how the AI layer fits into a broader vendor assessment workflow instead of acting as a disconnected feature.",
  },
  {
    href: "/blog/best-tprm-tool-2026/",
    title: "Best TPRM Software Comparison",
    description:
      "Useful for category buyers comparing platforms and looking for AI-specific differentiation.",
  },
];

const aiEngineSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "AI Vendor Risk Assessment Engine",
      url: "https://checkfirst.io/ai-engine",
      description:
        "See how CheckFirst uses AI for vendor risk assessment, questionnaire review, document analysis, and supplier due diligence while keeping human approval in the loop.",
    },
    {
      "@type": "SoftwareApplication",
      name: "CheckFirst AI Engine",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://checkfirst.io/ai-engine",
      description:
        "AI-assisted vendor risk assessment, security questionnaire analysis, supplier due diligence, and evidence review for third-party risk workflows.",
      publisher: {
        "@type": "Organization",
        name: "CheckFirst",
        url: "https://checkfirst.io",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://checkfirst.io/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI Engine",
          item: "https://checkfirst.io/ai-engine",
        },
      ],
    },
  ],
};

export default function AIEnginePage() {
  return (
    <>
      <Script
        id="ai-engine-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiEngineSchema) }}
      />
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-block rounded-full bg-brand-50 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-700">
            AI vendor risk assessment engine
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            AI for supplier due diligence
            <br />
            <span className="text-brand-700">that your security team can actually trust</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            CheckFirst uses specialised AI engines to accelerate vendor risk assessment,
            security questionnaire review, document analysis, and supplier research.
            The result is faster assessment throughput with better structure, evidence, and human oversight.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Book a demo
            </Button>
            <Button href="/assessments" variant="secondary" size="lg">
              See assessment workflow
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="Why this matters"
          title="AI should reduce review time, not create new trust problems"
          description="The CheckFirst AI layer is designed for commercial buyers who need faster decisions and technical reviewers who still need defensible outputs."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {engineBlocks.map((block) => (
            <Card key={block.title}>
              <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-0.5 font-display text-xs font-semibold text-brand-700">
                {block.tag}
              </span>
              <h2 className="font-display text-xl font-bold text-slate-900">{block.title}</h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">{block.description}</p>
              <ul className="mt-4 space-y-3">
                {block.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm text-slate-600">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          tag="Commercial use cases"
          title="Where the AI engine creates immediate buyer value"
          description="Built around the buyer-intent problems teams actually pay to solve."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {useCases.map((item) => (
            <Card key={item.title}>
              <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="Review model"
          title="What stays human in the loop"
          description="AI can accelerate the heavy lifting, but risk decisions still need accountable review."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {reviewPrinciples.map((item) => (
            <Card key={item.title}>
              <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="Related commercial pages"
          title="Explore the full CheckFirst commercial path"
          description="These internal links connect software, managed service, AI, and platform-intent pages so buyers can move to the next relevant evaluation step."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {relatedCommercialPages.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[16px] border border-slate-200/80 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{item.description}</p>
              <span className="mt-4 inline-flex font-display text-sm font-semibold text-brand-700">Visit page →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          tag="Support resources"
          title="Internal links for deeper AI evaluation"
          description="These canonical blog pages strengthen topical support around AI-led TPRM and category fit."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {survivorLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[16px] border border-slate-200/80 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{item.description}</p>
              <span className="mt-4 inline-flex font-display text-sm font-semibold text-brand-700">Read article →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Want to see the AI layer against a real supplier?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            We&apos;ll show how CheckFirst uses AI to compress assessment time,
            structure evidence, and support defensible vendor risk decisions.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Book a demo
            </Button>
            <Button href="/managed-tprm" variant="ghost-dark" size="lg">
              Need a managed service?
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
