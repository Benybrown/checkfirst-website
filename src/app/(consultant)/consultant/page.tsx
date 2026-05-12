import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { FAQ } from "@/components/FAQ";
import { EmailOptIn } from "@/components/EmailOptIn";
import { defaultOgImage, defaultTwitterImages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CheckFirst for Consultants — AI Security Tools at $99/month",
  description:
    "Scan vendor infrastructure with ProvEye, run CSA assessments, and analyze vendor documents with 4 AI tools. Built for independent security consultants. $99/month flat.",
  openGraph: {
    title: "CheckFirst for Consultants — AI Security Tools at $99/month",
    description:
      "4 AI tools for security consultants. Scan vendor infrastructure, assess against 243 CSA controls, analyze documents. $99/month flat.",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckFirst for Consultants — AI Security Tools at $99/month",
    description:
      "4 AI tools for security consultants. Scan vendor infrastructure, assess against 243 CSA controls, analyze documents. $99/month flat.",
    images: defaultTwitterImages,
  },
};

/* ─── Data ─── */

const painPoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Your time",
    description:
      "You spend hours compiling assessments manually when AI could do the heavy lifting in minutes.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Your clients wait",
    description:
      "Deliverables take days or weeks. Your clients need answers faster than your manual process allows.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Your credibility",
    description:
      "Without structured tooling, your reports look like Word documents — not enterprise-grade deliverables.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Your margins",
    description:
      "Enterprise tools cost $399+/month. You need the same AI capabilities without the platform overhead.",
  },
];

const aiTools = [
  {
    name: "ProvEye",
    tag: "External Scanning",
    description:
      "Scans vendor infrastructure in under 60 seconds — DNS health, SSL/TLS status, open ports, security headers, and known CVEs. No vendor cooperation needed.",
  },
  {
    name: "JinoXtreme",
    tag: "AI Assessment",
    description:
      "Evaluates vendors against all 243 CSA Cloud Controls across 18 security domains — with evidence-based compliance ratings and gap analysis.",
  },
  {
    name: "JinoQ&A",
    tag: "Questionnaire Analysis",
    description:
      "Upload vendor questionnaire responses and get instant semantic analysis. Checks completeness, consistency, and compliance alignment.",
  },
  {
    name: "JinoDocs",
    tag: "Document Intelligence",
    description:
      "Feed in SOC 2 reports, ISO certificates, security policies — JinoDocs extracts key findings, maps to controls, and flags gaps.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Get the brief",
    description:
      "Receive a client engagement. Collect vendor names, scope, and any documentation they provide.",
  },
  {
    step: "02",
    title: "Run the AI",
    description:
      "Scan vendor infrastructure with ProvEye, feed documents into JinoDocs, run JinoXtreme for CSA assessment. All in parallel.",
  },
  {
    step: "03",
    title: "Review and refine",
    description:
      "AI does 90% of the work. You review findings, add your expert judgement, and adjust recommendations.",
  },
  {
    step: "04",
    title: "Deliver with confidence",
    description:
      "Generate a polished, professional report via AI-Report. Your client gets enterprise-grade output.",
  },
];

const pricingFeatures = [
  "ProvEye — external infrastructure scanning (DNS, SSL, ports, CVEs)",
  "JinoXtreme — full 243-control CSA assessment",
  "JinoQ&A — questionnaire response analysis",
  "JinoDocs — document intelligence & extraction",
  "Unlimited usage — no per-assessment fees",
  "Same AI engine as the enterprise platform",
];

const faqItems = [
  {
    question: "What exactly is included in the $99/month plan?",
    answer:
      "You get access to four AI tools: ProvEye (external infrastructure scanning), JinoXtreme (CSA assessment), JinoQ&A (questionnaire analysis), and JinoDocs (document intelligence). Usage is unlimited — no per-assessment or per-report fees.",
  },
  {
    question: "How is this different from the full CheckFirst platform?",
    answer:
      "The full platform ($399/month) includes everything in the Consultant plan plus AgentX AI research, supplier management, risk matrix, smart questionnaires, task management, and the document vault. The Consultant plan gives you four core AI tools — scanning, assessment, and analysis — without the platform overhead.",
  },
  {
    question: "Can I generate client-ready reports?",
    answer:
      "Yes. AI-Report generates professional assessment reports with executive summaries, detailed findings per security domain, and prioritised recommendations. They're designed to be delivered directly to clients.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "No. The Consultant plan is month-to-month. You can cancel anytime from your account settings. There are no setup fees or long-term commitments.",
  },
  {
    question: "Can I upgrade to the full platform later?",
    answer:
      "Yes. You can upgrade to any full platform plan at any time. Your existing assessments and data carry over. Just log in to your space and send us a request.",
  },
  {
    question: "How do I use the promo code?",
    answer:
      "Fill the form and request your promo code to use during checkout. It will automatically apply the Consultant plan pricing of $99/month and provide you with instant access.",
  },
];

/* ─── Page ─── */

export default function ConsultantPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden bg-ink-950 px-6 pt-16 pb-24 sm:pt-20 lg:px-8 lg:pt-28 lg:pb-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dotgrid-dark opacity-60" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-diag-lines-dark opacity-50" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full blur-3xl opacity-[0.18]"
          style={{ background: "radial-gradient(circle, var(--color-brand-400), transparent 62%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, var(--color-brand-500), transparent 60%)" }}
        />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow eyebrow-dark mb-6 justify-center">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-brand-500/35 animate-signal" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-brand-400" />
              </span>
              <span>For Security Consultants</span>
            </div>
            <h1 className="font-display text-[32px] leading-[1.08] tracking-[-0.025em] text-white [text-wrap:balance] sm:text-[42px] md:text-[48px] lg:text-[56px] xl:text-[62px]">
              Your AI-powered{" "}
              <span className="italic text-white/70">security practice.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl font-body text-[17px] leading-[1.65] text-white/70 sm:text-[18px]">
              Scan vendor infrastructure, run CSA assessments, analyze
              documents, and generate professional reports — no enterprise
              contract, no per-assessment fees.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="#pricing"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-white px-6 font-body text-[14.5px] font-medium text-ink-950 transition-all duration-200 hover:bg-ink-100"
              >
                Get your promo code
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="#tools"
                className="group inline-flex h-12 items-center justify-center rounded-[10px] bg-transparent px-6 font-body text-[14.5px] font-medium text-white/70 ring-1 ring-inset ring-white/15 transition-all duration-200 hover:text-white hover:ring-white/40 hover:bg-white/5"
              >
                See what&apos;s included
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Metrics Bar ── */}
      <section className="border-y border-ink-200 bg-canvas-raised px-6 py-10 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-[1200px] divide-ink-200 gap-0 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {[
            { value: "4", label: "AI tools" },
            { value: "243", label: "CSA controls" },
            { value: "$99", label: "with promo code" },
            { value: "∞", label: "Unlimited usage" },
          ].map((m, idx, arr) => (
            <div
              key={m.value}
              className={`flex flex-col gap-2 py-4 sm:py-2 sm:px-6 ${
                idx === 0 ? "sm:pl-0" : ""
              } ${idx === arr.length - 1 ? "sm:pr-0" : ""}`}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
                {m.label}
              </span>
              <span className="font-display text-[40px] tabular-nums leading-none tracking-[-0.03em] text-ink-900 sm:text-[44px]">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. The Problem ── */}
      <Section>
        <SectionHeader
          tag="The problem"
          title="Security consulting shouldn't mean juggling 10 tools"
          align="left"
        />
        <div className="grid gap-px overflow-hidden rounded-[14px] border border-ink-200 bg-ink-200 sm:grid-cols-2">
          {painPoints.map((p) => (
            <div
              key={p.title}
              className="bg-canvas-raised p-7 transition-colors hover:bg-canvas"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] border border-ink-200 bg-canvas text-ink-700">
                {p.icon}
              </div>
              <h3 className="font-display text-[19px] leading-[1.2] tracking-[-0.02em] text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 font-body text-[14px] leading-[1.6] text-ink-500">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 4. AI Toolkit ── */}
      <Section id="tools" className="bg-canvas-raised">
        <SectionHeader
          tag="What you get"
          title="Four AI tools. One subscription. No limits."
          description="The same AI engine that powers enterprise CheckFirst — plus ProvEye infrastructure scanning. Everything consultants need."
        />
        <div className="mx-auto grid max-w-3xl gap-px overflow-hidden rounded-[14px] border border-ink-200 bg-ink-200 sm:grid-cols-2">
          {aiTools.map((tool, idx) => (
            <div
              key={tool.name}
              className="group relative flex h-full flex-col bg-canvas-raised p-7 transition-colors hover:bg-canvas"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
                  {String(idx + 1).padStart(2, "0")} · {tool.tag}
                </span>
                <span className="h-px w-6 bg-brand-500" />
              </div>
              <h3 className="font-display text-[22px] leading-[1.15] tracking-[-0.02em] text-ink-900">
                {tool.name}
              </h3>
              <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-ink-500">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 5. How It Works ── */}
      <Section>
        <SectionHeader
          tag="How it works"
          title="From client brief to delivered report"
        />
        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[6%] right-[6%] top-[26px] hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block"
          />
          {howItWorks.map((item) => (
            <div key={item.step}>
              <div className="mb-5">
                <span
                  aria-hidden="true"
                  className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full border border-ink-200 bg-canvas font-mono text-[13px] text-ink-700"
                >
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-[20px] leading-[1.2] tracking-[-0.02em] text-ink-900">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xs font-body text-[14.5px] leading-[1.65] text-ink-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 7. Pricing + Email Opt-In ── */}
      <Section id="pricing">
        <SectionHeader
          tag="Pricing"
          title="One plan. Everything you need."
        />
        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Pricing card — dark ink surface with brand signal */}
          <div className="relative flex flex-col rounded-[18px] border border-ink-200 bg-ink-950 p-8 text-white">
            <span className="absolute -top-2.5 left-8 inline-flex items-center gap-1.5 rounded-full border border-brand-400/40 bg-ink-900 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-300">
              <span className="h-1 w-1 rounded-full bg-brand-400 animate-signal" />
              Consultant Plan
            </span>
            <div className="mb-8 mt-2">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[56px] tabular-nums leading-none tracking-[-0.03em] text-white">
                  $99
                </span>
                <span className="font-body text-[18px] text-white/60">
                  /month
                </span>
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">
                <span className="line-through">$399/month</span>{" "}
                · consultant discount
              </p>
            </div>

            <ul className="space-y-3 border-t border-white/10 pt-6">
              {pricingFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-1 shrink-0 text-brand-400"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-body text-[14px] leading-[1.55] text-white/80">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Email opt-in */}
          <EmailOptIn />
        </div>
      </Section>

      {/* ── 8. FAQ ── */}
      <Section className="bg-canvas-raised">
        <SectionHeader
          tag="FAQ"
          title="Common questions"
          description="Everything you need to know about the Consultant plan."
        />
        <FAQ items={faqItems} />
      </Section>

      {/* ── 9. Final CTA ── */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow-dark mb-6 justify-center">Get started</span>
          <h2 className="font-display text-[34px] leading-[1.08] tracking-[-0.028em] text-white sm:text-[44px] lg:text-[52px]">
            Ready to 10x your consulting output?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-[17px] leading-[1.65] text-white/70">
            Get the same AI tools enterprise teams use — at a price that makes
            sense for independent consultants.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-white px-6 font-body text-[14.5px] font-medium text-ink-950 transition-all duration-200 hover:bg-ink-100"
            >
              Get your promo code
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="https://checkfirst.io"
              className="inline-flex h-12 items-center justify-center rounded-[10px] bg-transparent px-6 font-body text-[14.5px] font-medium text-white/70 ring-1 ring-inset ring-white/15 transition-all duration-200 hover:text-white hover:ring-white/40 hover:bg-white/5"
            >
              Visit checkfirst.io
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
