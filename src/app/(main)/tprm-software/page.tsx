import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "TPRM Software | Third-Party Risk Management Platform | CheckFirst",
  description:
    "Evaluate modern TPRM software for vendor assessments, supplier due diligence, continuous monitoring, and AI-assisted third-party risk workflows.",
  keywords: [
    "tprm software",
    "third-party risk management software",
    "vendor risk management software",
    "vendor assessment software",
    "supplier due diligence software",
    "tprm platform",
  ],
  openGraph: {
    title: "TPRM Software | Third-Party Risk Management Platform | CheckFirst",
    description:
      "Evaluate modern TPRM software for vendor assessments, supplier due diligence, continuous monitoring, and AI-assisted third-party risk workflows.",
    url: "https://checkfirst.io/tprm-software",
    siteName: "CheckFirst",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TPRM Software | Third-Party Risk Management Platform | CheckFirst",
    description:
      "Evaluate modern TPRM software for vendor assessments, supplier due diligence, continuous monitoring, and AI-assisted third-party risk workflows.",
  },
  alternates: {
    canonical: "/tprm-software",
  },
};

const checklist = [
  "Vendor inventory and tiering workflows",
  "Assessment automation and questionnaire orchestration",
  "External attack-surface and evidence collection",
  "Framework mapping and defensible reporting",
  "Remediation tracking and reassessment cadence",
  "Cross-functional visibility for security, procurement, and compliance",
];

const buyerSignals = [
  {
    title: "Replace fragmented vendor review workflows",
    description:
      "TPRM software should connect intake, questionnaires, document review, external scanning, and decisions in one system instead of forcing teams to stitch together email, spreadsheets, and ticket queues.",
  },
  {
    title: "Accelerate supplier due diligence without lowering standards",
    description:
      "The right platform reduces analyst admin, surfaces evidence faster, and helps reviewers focus on material risk gaps rather than manually chasing every answer.",
  },
  {
    title: "Give procurement and security one shared operating picture",
    description:
      "Buyers need vendor status, blockers, risk decisions, and remediation paths in one place so onboarding can move without losing governance discipline.",
  },
];

const evaluationCriteria = [
  {
    title: "Assessment depth",
    description:
      "Can the platform support tiered questionnaires, evidence requests, framework mapping, and reviewer guidance rather than acting like a static form builder?",
  },
  {
    title: "Workflow speed",
    description:
      "Does it remove manual follow-up and review bottlenecks, or does it just centralise the same slow process in a prettier dashboard?",
  },
  {
    title: "Commercial fit",
    description:
      "Can the system support both security rigor and procurement responsiveness, especially for teams under pressure to move vendors through onboarding faster?",
  },
  {
    title: "AI and automation quality",
    description:
      "If AI is involved, does it create reviewable outputs with human oversight, or does it make opaque claims buyers cannot trust?",
  },
  {
    title: "Program visibility",
    description:
      "Strong TPRM software should show reassessment cadence, remediation status, vendor tiering, and portfolio-level visibility for leadership.",
  },
  {
    title: "Scalability",
    description:
      "The platform should help a team manage more vendors with the same headcount, not require more manual coordination as volume grows.",
  },
];

const whyCheckFirst = [
  {
    title: "Assessment-first workflow",
    description:
      "CheckFirst is built around the practical work of third-party review: intake, adaptive questionnaires, evidence analysis, and decision-ready reporting.",
  },
  {
    title: "AI with human approval",
    description:
      "AI helps analyse questionnaires, documents, and supplier context, but final risk decisions remain reviewable and human-owned.",
  },
  {
    title: "Built for modern TPRM teams",
    description:
      "Security, procurement, compliance, and business owners can all work from one structured workflow instead of relying on disconnected tools.",
  },
];

const relatedCommercialPages = [
  {
    href: "/",
    title: "CheckFirst platform overview",
    description:
      "Start with the homepage if you want the broader category story and product positioning before the software detail page.",
  },
  {
    href: "/assessments",
    title: "Vendor security assessment software",
    description:
      "A deeper commercial page for teams prioritizing assessment execution, questionnaires, and evidence review.",
  },
  {
    href: "/managed-tprm",
    title: "Managed TPRM services",
    description:
      "For buyers who need outsourced operational support in addition to the platform itself.",
  },
  {
    href: "/ai-engine",
    title: "AI vendor risk assessment engine",
    description:
      "Shows how CheckFirst uses AI to accelerate due diligence and questionnaire analysis inside the platform.",
  },
];

const survivorLinks = [
  {
    href: "/blog/best-tprm-tool-2026/",
    title: "Best TPRM Software in 2026",
    description: "Comparison page supporting category-level software intent.",
  },
  {
    href: "/blog/3rd-party-risk-management-program/",
    title: "Build a TPRM Program",
    description: "Operational guide for teams moving from tooling to program execution.",
  },
  {
    href: "/blog/vendor-security-assessment-guide-2026/",
    title: "Vendor Security Assessment Guide",
    description: "Shows how the software category supports actual assessment workflows.",
  },
];

const faqItems = [
  {
    question: "What is TPRM software used for?",
    answer:
      "TPRM software helps organisations assess, approve, monitor, and reassess third-party vendors. It typically combines vendor intake, risk tiering, questionnaires, evidence collection, remediation tracking, and reporting in one workflow.",
  },
  {
    question: "What should buyers look for in third-party risk management software?",
    answer:
      "Buyers should prioritise workflow speed, assessment depth, evidence handling, stakeholder visibility, framework alignment, and the ability to scale vendor reviews without adding large amounts of manual work.",
  },
  {
    question: "How is CheckFirst different from a generic questionnaire platform?",
    answer:
      "CheckFirst is designed around full vendor review workflows, not just questionnaire collection. It combines intake, scanning, AI-supported review, evidence analysis, and decision-ready reporting so teams can move from request to decision faster.",
  },
  {
    question: "Can CheckFirst support both software-only and managed delivery?",
    answer:
      "Yes. Teams can use CheckFirst as a platform for internal execution, or combine it with managed TPRM services when internal analyst bandwidth is the main bottleneck.",
  },
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "TPRM Software",
      url: "https://checkfirst.io/tprm-software",
      description:
        "Evaluate modern TPRM software for vendor assessments, supplier due diligence, continuous monitoring, and AI-assisted third-party risk workflows.",
      isPartOf: {
        "@type": "WebSite",
        name: "CheckFirst",
        url: "https://checkfirst.io",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "CheckFirst",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://checkfirst.io/tprm-software",
      description:
        "Third-party risk management software for vendor assessments, supplier due diligence, AI-assisted review, remediation tracking, and continuous monitoring.",
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
          name: "TPRM Software",
          item: "https://checkfirst.io/tprm-software",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
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

export default function TPRMSoftwarePage() {
  return (
    <>
      <Script
        id="tprm-software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-block rounded-full bg-brand-50 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-700">
            TPRM software
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Third-party risk management software
            <br />
            <span className="text-brand-700">built for modern vendor review teams</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            CheckFirst helps teams manage vendor assessments, supplier due diligence,
            AI-supported review, and remediation tracking in one third-party risk management platform.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">Book a demo</Button>
            <Button href="/blog/best-tprm-tool-2026/" variant="secondary" size="lg">See category comparison</Button>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="Buyer intent"
          title="What category buyers actually need from TPRM software"
          description="The goal is not just storing questionnaires. It is reducing vendor-review friction while improving the quality of risk decisions."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {buyerSignals.map((item) => (
            <Card key={item.title}>
              <h2 className="font-display text-lg font-bold text-slate-900">{item.title}</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          tag="What to look for"
          title="What modern TPRM software should help you do"
          description="Category buyers need more than a questionnaire repository. They need a workflow system for third-party risk review."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {checklist.map((item) => (
            <Card key={item}>
              <h2 className="font-display text-lg font-bold text-slate-900">{item}</h2>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="Evaluation criteria"
          title="How buyers should evaluate third-party risk management platforms"
          description="These are the practical criteria that separate a real TPRM operating system from a form collection tool."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {evaluationCriteria.map((item) => (
            <Card key={item.title}>
              <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          tag="Why CheckFirst"
          title="Why CheckFirst fits the modern TPRM software category"
          description="CheckFirst is designed for teams that need assessment throughput, better evidence, and stronger stakeholder visibility without adding process chaos."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {whyCheckFirst.map((item) => (
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
          title="Supporting pages for category evaluation"
          description="These canonical pages strengthen the commercial software narrative around CheckFirst."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {survivorLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-[16px] border border-slate-200/80 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover">
              <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{item.description}</p>
              <span className="mt-4 inline-flex font-display text-sm font-semibold text-brand-700">Read article →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="FAQ"
          title="Common questions about TPRM software"
          description="The practical questions buyers ask when comparing third-party risk management platforms."
        />
        <FAQ items={faqItems} />
      </Section>

      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Want to see CheckFirst in a real vendor-review workflow?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            We&apos;ll walk through how the platform handles intake, assessment automation,
            evidence review, and decision support across the full third-party risk workflow.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">Book a demo</Button>
            <Button href="/managed-tprm" variant="ghost-dark" size="lg">Need managed support?</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
