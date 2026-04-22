import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { OrchestrationGrid } from "@/components/OrchestrationGrid";

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
    title: "A safer alternative to manual triage",
    description:
      "Instead of burying analysts in repetitive first-pass review work, use AI to structure evidence and surface exceptions that actually need human judgment.",
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

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-canvas px-6 pt-16 pb-24 sm:pt-20 lg:px-8 lg:pt-28 lg:pb-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.9]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl opacity-[0.18]"
          style={{ background: "radial-gradient(circle, var(--color-brand-400), transparent 62%)" }}
        />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <div className="eyebrow mb-6">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-brand-500/35 animate-signal" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-brand-600" />
                </span>
                <span>AI vendor risk assessment engine</span>
              </div>
              <h1 className="font-display text-[30px] leading-[1.08] tracking-[-0.025em] text-ink-900 [text-wrap:balance] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[58px]">
                AI for supplier due diligence{" "}
                <span className="italic text-ink-500">
                  that your security team can actually trust
                </span>
              </h1>
              <p className="mt-7 max-w-[58ch] font-body text-[17px] leading-[1.65] text-ink-500 sm:text-[18px]">
                CheckFirst uses specialised AI engines to accelerate vendor risk assessment,
                security questionnaire review, document analysis, and supplier research.
                This is built for buyers who want faster due diligence and clearer risk signals without handing final decisions to a black box.
              </p>
              <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Button href="/contact" variant="primary" size="lg">
                  Book a demo
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Button>
                <Button href="/assessments" variant="secondary" size="lg">
                  See assessment workflow
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "AI vendor risk assessment",
                  "Automated supplier due diligence",
                  "Security questionnaire automation",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-canvas-raised px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-500"
                  >
                    <span className="h-1 w-1 rounded-full bg-ink-300" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Motif */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[5/4] w-full rounded-[14px] border border-ink-200 bg-canvas-raised p-5 shadow-card">
                <div className="mb-4 flex items-center justify-between border-b border-ink-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2 items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-brand-500/35 animate-signal" />
                      <span className="relative h-1 w-1 rounded-full bg-brand-600" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
                      Jino Engines · Streaming
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">
                    3 active
                  </span>
                </div>
                <OrchestrationGrid variant="light" />
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-ink-100 pt-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-400">CSA</div>
                    <div className="mt-1 font-display text-[20px] tabular-nums tracking-[-0.02em] text-ink-900">243</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-400">Domains</div>
                    <div className="mt-1 font-display text-[20px] tabular-nums tracking-[-0.02em] text-ink-900">18</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-400">HITL</div>
                    <div className="mt-1 font-display text-[20px] tabular-nums tracking-[-0.02em] text-brand-600">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGINE BLOCKS ── */}
      <Section>
        <SectionHeader
          tag="Why this matters"
          title="AI should reduce review time, not create new trust problems"
          description="The CheckFirst AI layer is designed for commercial buyers who need faster decisions and technical reviewers who still need defensible outputs."
          align="left"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {engineBlocks.map((block, idx) => (
            <div
              key={block.title}
              className="group relative flex h-full flex-col rounded-[14px] border border-ink-200 bg-canvas-raised p-7 transition-all hover:border-ink-900 hover:-translate-y-0.5"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
                  {String(idx + 1).padStart(2, "0")} · {block.tag}
                </span>
                <span className="h-px w-8 bg-brand-500" />
              </div>
              <h2 className="font-display text-[24px] leading-[1.15] tracking-[-0.02em] text-ink-900">
                {block.title}
              </h2>
              <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-ink-500">
                {block.description}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-ink-100 pt-5">
                {block.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 font-body text-[13.5px] leading-[1.55] text-ink-700"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 shrink-0 text-brand-600"
                    >
                      <path
                        d="M3.5 8.5L6.5 11.5L12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── USE CASES ── */}
      <Section className="bg-canvas-raised">
        <SectionHeader
          tag="Commercial use cases"
          title="Where the AI engine creates immediate buyer value"
          description="Built around the buyer-intent problems teams actually pay to solve."
          align="left"
        />
        <div className="grid gap-px overflow-hidden rounded-[14px] border border-ink-200 bg-ink-200 sm:grid-cols-2">
          {useCases.map((item, idx) => (
            <div
              key={item.title}
              className="group relative bg-canvas-raised p-7 transition-colors hover:bg-canvas"
            >
              <span className="mb-5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
                {String(idx + 1).padStart(2, "0")} · Use case
              </span>
              <h3 className="font-display text-[20px] leading-[1.2] tracking-[-0.02em] text-ink-900">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-ink-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── REVIEW PRINCIPLES (DARK) ── */}
      <Section dark>
        <SectionHeader
          tag="Review model"
          title="What stays human in the loop"
          description="AI can accelerate the heavy lifting, but risk decisions still need accountable review."
          dark
          align="left"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {reviewPrinciples.map((item, idx) => (
            <Card key={item.title} variant="data" className="flex h-full flex-col">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                  {String(idx + 1).padStart(2, "0")} · Principle
                </span>
                <span className="h-px w-8 bg-brand-400/60" />
              </div>
              <h3 className="font-display text-[22px] leading-[1.15] tracking-[-0.02em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-white/65">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── RELATED COMMERCIAL PAGES ── */}
      <Section>
        <SectionHeader
          tag="Related commercial pages"
          title="Explore the full CheckFirst commercial path"
          description="These internal links connect software, managed service, AI, and platform-intent pages so buyers can move to the next relevant evaluation step."
          align="left"
        />
        <div className="grid gap-px overflow-hidden rounded-[14px] border border-ink-200 bg-ink-200 md:grid-cols-2">
          {relatedCommercialPages.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex flex-col bg-canvas-raised p-7 transition-colors hover:bg-canvas"
            >
              <h3 className="font-display text-[19px] leading-[1.2] tracking-[-0.02em] text-ink-900">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-[14px] leading-[1.6] text-ink-500">
                {item.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-900">
                Visit page
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── SUPPORT RESOURCES ── */}
      <Section className="bg-canvas-raised">
        <SectionHeader
          tag="Support resources"
          title="Internal links for deeper AI evaluation"
          description="These canonical blog pages strengthen topical support around AI-led TPRM and category fit."
          align="left"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {survivorLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-[14px] border border-ink-200 bg-canvas p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-900"
            >
              <span className="mb-5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
                Article
              </span>
              <h3 className="font-display text-[19px] leading-[1.2] tracking-[-0.02em] text-ink-900">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 font-body text-[14px] leading-[1.6] text-ink-500">
                {item.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-900">
                Read article
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow-dark mb-6 justify-center">See it live</span>
          <h2 className="font-display text-[34px] leading-[1.08] tracking-[-0.028em] text-white sm:text-[44px] lg:text-[52px]">
            Want to see the AI layer against a real supplier?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-[17px] leading-[1.65] text-white/70">
            We&apos;ll show how CheckFirst uses AI to compress assessment time,
            structure evidence, and support defensible vendor risk decisions.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary" size="lg" className="!bg-white !text-ink-950 !ring-white hover:!bg-ink-100">
              Book a demo
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
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
