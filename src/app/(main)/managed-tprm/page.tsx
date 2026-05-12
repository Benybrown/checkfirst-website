import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FAQ } from "@/components/FAQ";
import { defaultOgImage, defaultTwitterImages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Managed TPRM Services | CheckFirst",
  description:
    "Outsource third-party risk management to CheckFirst with dedicated analysts, AI-assisted assessments, vendor follow-up, and executive reporting.",
  keywords: [
    "managed tprm",
    "outsourced third-party risk management",
    "managed vendor risk management",
    "tprm as a service",
    "third-party risk management service",
  ],
  openGraph: {
    title: "Managed TPRM Services | CheckFirst",
    description:
      "Outsource third-party risk management to CheckFirst with dedicated analysts, AI-assisted assessments, vendor follow-up, and executive reporting.",
    url: "https://checkfirst.io/managed-tprm",
    siteName: "CheckFirst",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed TPRM Services | CheckFirst",
    description:
      "Outsource third-party risk management to CheckFirst with dedicated analysts, AI-assisted assessments, vendor follow-up, and executive reporting.",
    images: defaultTwitterImages,
  },
  alternates: {
    canonical: "/managed-tprm",
  },
};

const painPoints = [
  {
    title: "Backlogged vendor reviews",
    description:
      "Your internal team is balancing incidents, architecture reviews, audits, and vendor onboarding, so assessments slip and procurement waits.",
  },
  {
    title: "Vendors need constant chasing",
    description:
      "Questionnaires, evidence requests, and follow-ups drag on for weeks unless someone owns the process end to end.",
  },
  {
    title: "DIY programs are hard to scale",
    description:
      "As vendor volume grows, spreadsheet-based TPRM creates inconsistent depth, uneven documentation, and limited executive visibility.",
  },
];

const serviceFit = [
  {
    title: "For lean internal security teams",
    description:
      "Managed TPRM is a strong fit when your team owns risk decisions but lacks the analyst bandwidth to run every intake, follow-up, and assessment cycle internally.",
  },
  {
    title: "For teams stuck in spreadsheet operations",
    description:
      "If vendor reviews live in inboxes, spreadsheets, and scattered reminders, managed TPRM gives you a real operating layer instead of more admin overhead.",
  },
  {
    title: "For procurement-heavy onboarding environments",
    description:
      "When deal speed matters, outsourced operational ownership helps prevent vendor review queues from becoming a revenue blocker.",
  },
  {
    title: "For scaling vendor ecosystems",
    description:
      "As third-party count grows, managed service delivery helps teams add operating capacity without committing to a larger permanent headcount model.",
  },
];

const offerings = [
  {
    title: "Dedicated TPRM analysts",
    description:
      "Get an operating layer for intake, outreach, evidence collection, assessment coordination, and follow-up. Your team stays in control of decisions while we keep work moving.",
  },
  {
    title: "AI-powered assessment execution",
    description:
      "ProvEye, JinoXtreme, Jino 360, Jino-QA, and document analysis accelerate the heavy lifting behind every review so analysts spend less time on manual admin.",
  },
  {
    title: "Program-level reporting",
    description:
      "Receive stakeholder-ready summaries, vendor status visibility, remediation tracking, and recurring leadership reporting instead of rebuilding updates from scratch.",
  },
  {
    title: "Flexible capacity without headcount risk",
    description:
      "Scale support during procurement waves, board reviews, customer due diligence spikes, or audit periods without hiring and training a larger in-house team.",
  },
];

const steps = [
  {
    number: "01",
    title: "Program intake",
    description:
      "We map your vendor population, criticality model, approval path, and required framework coverage so assessments align with your actual operating model.",
  },
  {
    number: "02",
    title: "Assessment operations",
    description:
      "Our team drives outreach, questionnaire distribution, scan execution, document follow-up, and exception management with CheckFirst running underneath.",
  },
  {
    number: "03",
    title: "Review and escalation",
    description:
      "We package findings, surface high-risk issues, and route clear recommendations to your decision-makers instead of dumping raw questionnaire data on them.",
  },
  {
    number: "04",
    title: "Ongoing monitoring",
    description:
      "Vendors do not disappear after onboarding. We help maintain reassessment rhythm, remediation follow-up, and current program visibility.",
  },
];

const comparison = [
  { label: "Time to first operational coverage", diy: "Months", managed: "Weeks" },
  { label: "Vendor outreach ownership", diy: "Internal team", managed: "CheckFirst analysts" },
  { label: "Assessment consistency", diy: "Depends on bandwidth", managed: "Standardised workflow" },
  { label: "Executive reporting", diy: "Manual prep", managed: "Built into delivery" },
  { label: "Scale during busy periods", diy: "Hire or delay", managed: "Flexible analyst capacity" },
];

const relatedCommercialPages = [
  {
    href: "/",
    title: "CheckFirst platform overview",
    description:
      "Start here for the top-level product narrative before evaluating whether you need platform-only or managed delivery.",
  },
  {
    href: "/assessments",
    title: "Vendor security assessment software",
    description:
      "Shows the operational workflow behind supplier reviews, questionnaires, and evidence collection.",
  },
  {
    href: "/ai-engine",
    title: "AI vendor risk assessment engine",
    description:
      "Explains how CheckFirst compresses review time with AI while keeping human approval in the loop.",
  },
  {
    href: "/tprm-software",
    title: "TPRM software overview",
    description:
      "Useful when managed-service buyers also need the broader platform category and evaluation story.",
  },
];

const survivorLinks = [
  {
    href: "/blog/3rd-party-risk-management-program/",
    title: "How to Build a Third-Party Risk Management Program",
    description:
      "Helpful for buyers comparing outsourced support with building the whole TPRM operating model in-house.",
  },
  {
    href: "/blog/vendor-security-assessment-guide-2026/",
    title: "Vendor Security Assessment Guide",
    description:
      "A process-oriented resource that shows the assessment workload managed programs need to absorb.",
  },
  {
    href: "/blog/tprm-agentic-ai-assessment/",
    title: "AI Vendor Risk Assessment",
    description:
      "Explains how AI can accelerate managed delivery without removing human oversight from risk decisions.",
  },
];

const faqItems = [
  {
    question: "Who is managed TPRM best suited for?",
    answer:
      "Managed TPRM is ideal for teams with growing vendor volume, limited internal analyst capacity, urgent onboarding pressure, or inconsistent follow-through on vendor reviews and remediation.",
  },
  {
    question: "Do we still keep visibility and decision control?",
    answer:
      "Yes. CheckFirst acts as your operating layer, not a black box. You keep access to the platform, dashboards, reports, and risk decisions while our analysts handle execution overhead.",
  },
  {
    question: "How quickly can we launch?",
    answer:
      "Most clients can launch within a few weeks once vendor inventory, scoping, workflows, and stakeholder expectations are aligned. The exact timeline depends on vendor volume and process complexity.",
  },
  {
    question: "Can managed support scale with our vendor count?",
    answer:
      "Yes. The service is designed to expand around vendor growth, busy procurement windows, and audit-heavy periods without forcing you to hire ahead of demand.",
  },
];

const managedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Managed TPRM Services",
      url: "https://checkfirst.io/managed-tprm",
      description:
        "Outsource third-party risk management to CheckFirst. Get a dedicated analyst team, AI-assisted assessments, vendor follow-up, and executive reporting without building headcount.",
    },
    {
      "@type": "Service",
      name: "Managed TPRM Services",
      serviceType: "Third-Party Risk Management Service",
      provider: {
        "@type": "Organization",
        name: "CheckFirst",
        url: "https://checkfirst.io",
      },
      areaServed: "Global",
      url: "https://checkfirst.io/managed-tprm",
      description:
        "Outsourced third-party risk management combining analyst execution, vendor follow-up, AI-assisted assessments, and executive reporting.",
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
          name: "Managed TPRM",
          item: "https://checkfirst.io/managed-tprm",
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

export default function ManagedTPRM() {
  return (
    <>
      <Script
        id="managed-tprm-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(managedSchema) }}
      />

      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow mb-6 justify-center">
            Managed TPRM services
          </span>
          <h1 className="font-display text-[30px] leading-[1.08] tracking-[-0.025em] text-ink-900 [text-wrap:balance] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[58px]">
            Outsource third-party risk management
            <br />
            <span className="italic text-ink-500">without losing control of the program</span>
          </h1>
          <p className="mx-auto mt-7 max-w-[60ch] font-body text-[17px] leading-[1.65] text-ink-500 sm:text-[18px]">
            CheckFirst combines dedicated analysts with an AI-powered assessment platform so your
            team can run a more responsive TPRM program without building a larger internal operation.
            This is built for buyers replacing backlog, spreadsheet coordination, and vendor chasing with one managed workflow.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Book a consultation
            </Button>
            <Button href="/assessments" variant="secondary" size="lg">
              See the platform workflow
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-ink-400">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-canvas-raised px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-500">Outsourced third-party risk management</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-canvas-raised px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-500">Managed vendor risk management</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-canvas-raised px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-500">TPRM as a service</span>
          </div>
        </div>
      </Section>

      <Section className="bg-canvas-raised">
        <SectionHeader
          tag="Service fit"
          title="When managed TPRM is the right commercial move"
          description="This page is for teams whose main bottleneck is execution capacity, not just software access."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceFit.map((item) => (
            <Card key={item.title}>
              <h2 className="font-display text-lg font-bold text-ink-900">{item.title}</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-canvas-raised">
        <SectionHeader
          tag="Why outsourced TPRM"
          title="When internal bandwidth is the bottleneck, managed delivery wins"
          description="The goal is not to replace your program. It is to make sure the program actually runs at the pace the business needs."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {painPoints.map((point) => (
            <Card key={point.title}>
              <h2 className="font-display text-lg font-bold text-ink-900">{point.title}</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">{point.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          tag="What you get"
          title="A managed third-party risk management operating layer"
          description="Designed for teams that need assessment throughput, vendor accountability, and better reporting without a headcount-heavy rebuild."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {offerings.map((item) => (
            <Card key={item.title}>
              <h2 className="font-display text-lg font-bold text-ink-900">{item.title}</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-canvas-raised" id="how-it-works">
        <SectionHeader
          tag="Delivery model"
          title="How managed TPRM works with CheckFirst"
          description="A practical four-step service model focused on getting assessments completed and leadership informed."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-[16px] border border-ink-200 bg-white p-6">
              <span className="font-display text-4xl font-extrabold text-brand-200">{step.number}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink-900">{step.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          tag="Comparison"
          title="Managed support vs. building everything yourself"
          description="A commercial view of the tradeoff buyers usually need to justify internally."
        />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[16px] border border-ink-200 bg-white shadow-card">
          <div className="grid grid-cols-3 border-b border-ink-200 bg-canvas-raised px-6 py-4">
            <div className="font-display text-sm font-semibold text-ink-400" />
            <div className="text-center font-display text-sm font-semibold text-ink-400">DIY program</div>
            <div className="text-center font-display text-sm font-semibold text-brand-700">Managed by CheckFirst</div>
          </div>
          {comparison.map((row, index) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 items-center px-6 py-4 ${index < comparison.length - 1 ? "border-b border-ink-100" : ""}`}
            >
              <div className="font-body text-sm font-medium text-ink-900">{row.label}</div>
              <div className="text-center font-body text-sm text-ink-400">{row.diy}</div>
              <div className="text-center font-display text-sm font-semibold text-brand-700">{row.managed}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-canvas-raised">
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
              className="rounded-[16px] border border-ink-200 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <h3 className="font-display text-lg font-bold text-ink-900">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">{item.description}</p>
              <span className="mt-4 inline-flex font-display text-sm font-semibold text-brand-700">Visit page →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-canvas-raised">
        <SectionHeader
          tag="Support resources"
          title="Internal links for buyers evaluating managed TPRM"
          description="These supporting pages connect the service offer to the broader CheckFirst category and process narrative."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {survivorLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[16px] border border-ink-200 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <h3 className="font-display text-lg font-bold text-ink-900">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">{item.description}</p>
              <span className="mt-4 inline-flex font-display text-sm font-semibold text-brand-700">Read article →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          tag="FAQ"
          title="Frequently asked questions"
          description="The practical questions buyers ask before moving from software evaluation to managed-service adoption."
        />
        <FAQ items={faqItems} />
      </Section>

      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow-dark mb-6 justify-center">Talk to us</span>
          <h2 className="font-display text-[34px] leading-[1.08] tracking-[-0.028em] text-white sm:text-[44px] lg:text-[52px]">
            Need a TPRM program that actually keeps up?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-[17px] leading-[1.65] text-white/70">
            Let&apos;s review your vendor volume, current bottlenecks, and service model.
            We&apos;ll show how CheckFirst can combine platform software with managed analyst capacity.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary" size="lg" className="!bg-white !text-ink-950 !ring-white hover:!bg-ink-100">
              Book a consultation
            </Button>
            <Button href="/ai-engine" variant="ghost-dark" size="lg">
              Explore the AI layer
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
