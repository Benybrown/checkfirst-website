import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { FAQ } from "@/components/FAQ";
import { EmailOptIn } from "@/components/EmailOptIn";

export const metadata: Metadata = {
  title: "CheckFirst for Consultants — AI Security Tools at $99/month",
  description:
    "Scan vendor infrastructure with ProvEye, run CSA assessments, and analyze vendor documents with 4 AI tools. Built for independent security consultants. $99/month flat.",
  openGraph: {
    title: "CheckFirst for Consultants — AI Security Tools at $99/month",
    description:
      "4 AI tools for security consultants. Scan vendor infrastructure, assess against 243 CSA controls, analyze documents. $99/month flat.",
    type: "website",
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
      <section className="relative overflow-hidden bg-slate-900 px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-brand-600/10 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-brand-400/8 blur-[100px]"
        />

        <div className="relative mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full bg-brand-900/40 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-300">
              For Security Consultants
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[64px] lg:leading-[1.08]">
              Your AI-powered
              <br />
              security practice.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">
              Scan vendor infrastructure, run CSA assessments, analyze
              documents, and generate professional reports — no enterprise
              contract, no per-assessment fees.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-[12px] bg-brand-700 px-7 py-3.5 font-display text-base font-semibold text-white shadow-button transition-all duration-200 hover:bg-brand-800 hover:shadow-md"
              >
                Get your promo code
              </a>
              <a
                href="#tools"
                className="inline-flex items-center justify-center rounded-[12px] bg-white px-7 py-3.5 font-display text-base font-semibold text-slate-800 ring-1 ring-slate-200 transition-all duration-200 hover:bg-slate-50 hover:ring-slate-300"
              >
                See what&apos;s included
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Metrics Bar ── */}
      <section className="border-b border-slate-200/60 bg-slate-50/50 px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "4", label: "AI tools" },
            { value: "243", label: "CSA controls" },
            { value: "$99", label: "with promo code" },
            { value: "∞", label: "Unlimited usage" },
          ].map((m) => (
            <div key={m.value} className="text-center">
              <p className="font-display text-3xl font-extrabold tracking-tight text-brand-700">
                {m.value}
              </p>
              <p className="mt-1 font-body text-sm text-slate-400">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. The Problem ── */}
      <Section>
        <SectionHeader
          tag="The problem"
          title="Security consulting shouldn't mean juggling 10 tools"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {painPoints.map((p) => (
            <Card key={p.title}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[10px] bg-brand-50">
                {p.icon}
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                {p.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                {p.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── 4. AI Toolkit ── */}
      <Section id="tools" className="bg-slate-50/60">
        <SectionHeader
          tag="What you get"
          title="Four AI tools. One subscription. No limits."
          description="The same AI engine that powers enterprise CheckFirst — plus ProvEye infrastructure scanning. Everything consultants need."
        />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {aiTools.map((tool) => (
            <Card key={tool.name} className="h-full">
              <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-0.5 font-display text-xs font-semibold text-brand-700">
                {tool.tag}
              </span>
              <h3 className="font-display text-lg font-bold text-slate-900">
                {tool.name}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                {tool.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── 5. How It Works ── */}
      <Section>
        <SectionHeader
          tag="How it works"
          title="From client brief to delivered report"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item) => (
            <div key={item.step}>
              <span
                aria-hidden="true"
                className="font-display text-5xl font-extrabold text-brand-600"
              >
                {item.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
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
          {/* Pricing card */}
          <Card hover={false} className="ring-2 ring-brand-600">
            <div className="mb-6">
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-brand-700">
                Consultant Plan
              </span>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-5xl font-extrabold tracking-tight text-slate-900">
                  $99
                </span>
                <span className="font-body text-base text-slate-500">
                  /month
                </span>
              </div>
              <p className="mt-1 font-body text-sm text-slate-400">
                <span className="line-through">$399/month</span>{" "}
                — consultant discount
              </p>
            </div>

            <ul className="space-y-3">
              {pricingFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 shrink-0 text-brand-600"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-body text-sm text-slate-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Email opt-in */}
          <EmailOptIn />
        </div>
      </Section>

      {/* ── 8. FAQ ── */}
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="FAQ"
          title="Common questions"
          description="Everything you need to know about the Consultant plan."
        />
        <FAQ items={faqItems} />
      </Section>

      {/* ── 9. Final CTA ── */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to 10x your consulting output?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Get the same AI tools enterprise teams use — at a price that makes
            sense for independent consultants.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-[12px] bg-brand-700 px-7 py-3.5 font-display text-base font-semibold text-white shadow-button transition-all duration-200 hover:bg-brand-800 hover:shadow-md"
            >
              Get your promo code
            </a>
            <a
              href="https://checkfirst.io"
              className="inline-flex items-center justify-center rounded-[12px] px-7 py-3.5 font-display text-base font-semibold text-slate-300 transition-all duration-200 hover:text-white hover:bg-slate-800"
            >
              Visit checkfirst.io
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
