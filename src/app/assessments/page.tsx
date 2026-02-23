import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "AI Security Assessments — ProvEye Scanning, CSA CCM, Smart Questionnaires | CheckFirst",
  description:
    "Run complete vendor security assessments in minutes with AI-powered analysis, external ProvEye scanning, and 243-control CSA CCM evaluation. 45+ frameworks supported.",
};

const steps = [
  {
    step: "01",
    title: "Add your vendor",
    description:
      "Create a supplier profile with basic details — name, website, industry, criticality tier. The 9-stage lifecycle tracking begins automatically.",
  },
  {
    step: "02",
    title: "Scan with ProvEye",
    description:
      "Run an external security scan on the vendor's domain with our ProvEye public scanner in minutes.",
  },
  {
    step: "03",
    title: "AI-powered assessment",
    description:
      "Launch JinoXtreme AI agents assessment to evaluate the vendor against all 243 security controls.",
  },
  {
    step: "04",
    title: "Send Smart Questionnaires",
    description:
      "Generate smart questionnaires that adapts questions to the vendor's profile and risk level.",
  },
  {
    step: "05",
    title: "Research with Jino 360",
    description:
      "Automatically gather vendor intelligence from deep web researches or company website resources.",
  },
  {
    step: "06",
    title: "Review, score, decide",
    description:
      "All data feeds into a unified risk profile with 5×5 matrix scoring. Review AI-generated reports with executive summaries, detailed findings, and prioritised recommendations.",
  },
];

const assessmentTypes = [
  {
    name: "ProvEye Scan",
    what: "External infrastructure security analysis",
    speed: "30–60 seconds",
  },
  {
    name: "JinoXtreme CSA",
    what: "Full 243-control CSA CCM compliance evaluation",
    speed: "Minutes",
  },
  {
    name: "Jino 360",
    what: "Multi-source web intelligence gathering",
    speed: "Minutes",
  },
  {
    name: "Jino-QA",
    what: "Semantic questionnaire response analysis",
    speed: "Minutes",
  },
  {
    name: "Smart Questionnaire",
    what: "AI-generated targeted questionnaire",
    speed: "Instant creation",
  },
];

const frameworks = [
  "CSA CCM v4.0 (243 controls)",
  "SOC 2 Type I & II",
  "ISO 27001 / 27002 / 27017 / 27018",
  "NIST Cybersecurity Framework",
  "GDPR, DORA, NIS2",
  "PCI DSS",
  "HIPAA / HITRUST",
  "CIS Controls",
];

export default function AssessmentsPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full bg-brand-50 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-700">
            Security Assessments
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Vendor assessments that take
            <br />
            <span className="text-brand-700">minutes, not months</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Automate the painful parts of vendor assessment while keeping your
            team in control. CheckFirst combines AI analysis, external scanning,
            and structured frameworks to give you a complete picture of vendor
            security — fast.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Book a demo
            </Button>
            <Button href="/ai-engine" variant="secondary" size="lg">
              Explore AI engines
            </Button>
          </div>
        </div>
      </Section>

      {/* Steps — visual process flow */}
      <Section className="overflow-hidden bg-slate-50/60">
        <SectionHeader
          tag="How it works"
          title="Six steps to a complete vendor assessment"
        />

        {/* ── Step 1 — full-width intro card ── */}
        <div className="mx-auto mb-12 max-w-2xl animate-fade-in-up">
          <div className="relative rounded-2xl border border-brand-200/60 bg-gradient-to-br from-brand-50 to-white p-8 shadow-card text-center">
            <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 font-display text-lg font-extrabold text-white shadow-md">
              1
            </span>
            <h3 className="font-display text-xl font-bold text-slate-900">
              {steps[0].title}
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
              {steps[0].description}
            </p>
            {/* Down arrow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none" className="text-brand-400">
                <path d="M12 0v26m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Middle: 2×2 card grid with overlapping screenshot ── */}
        <div className="relative mt-16">
          {/* 2×2 grid of step cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Step 2 — top left */}
            <div className="animate-fade-in-up animate-delay-100 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover lg:pr-[45%]">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 font-display text-sm font-extrabold text-brand-700">
                  02
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {steps[1].title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-slate-600">
                    {steps[1].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 — top right */}
            <div className="animate-fade-in-up animate-delay-200 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover lg:pl-[45%]">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 font-display text-sm font-extrabold text-brand-700">
                  04
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {steps[3].title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-slate-600">
                    {steps[3].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 — bottom left */}
            <div className="animate-fade-in-up animate-delay-300 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover lg:pr-[45%]">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 font-display text-sm font-extrabold text-brand-700">
                  03
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {steps[2].title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-slate-600">
                    {steps[2].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 — bottom right */}
            <div className="animate-fade-in-up animate-delay-400 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover lg:pl-[45%]">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 font-display text-sm font-extrabold text-brand-700">
                  05
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {steps[4].title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-slate-600">
                    {steps[4].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Centered overlapping screenshot */}
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
            <div className="pointer-events-auto relative animate-fade-in-up animate-delay-200">
              {/* Glow behind screenshot */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-200/40 via-white/80 to-brand-100/30 blur-md" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-white bg-white shadow-2xl ring-1 ring-slate-200/60">
                <Image
                  src="/app-screenshot.png"
                  alt="CheckFirst security posture dashboard showing vendor scores across ProvEye, Jino Website, Jino 360, AI Q&A, and AI Reports assessments"
                  width={480}
                  height={330}
                  className="block"
                  priority
                />
              </div>
              {/* Floating label */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-brand-200 bg-white px-4 py-1.5 font-display text-xs font-semibold text-brand-700 shadow-lg">
                Unified Security Posture
              </div>
            </div>
          </div>

          {/* Mobile-only screenshot (shown below cards) */}
          <div className="mt-8 flex justify-center lg:hidden">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <Image
                  src="/app-screenshot.png"
                  alt="CheckFirst security posture dashboard"
                  width={480}
                  height={330}
                  className="block"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-brand-200 bg-white px-4 py-1.5 font-display text-xs font-semibold text-brand-700 shadow-md">
                Unified Security Posture
              </div>
            </div>
          </div>
        </div>

        {/* ── Step 6 — full-width conclusion card ── */}
        <div className="mx-auto mt-16 max-w-2xl animate-fade-in-up animate-delay-500">
          {/* Down arrow */}
          <div className="mb-6 flex justify-center">
            <svg width="24" height="32" viewBox="0 0 24 32" fill="none" className="text-brand-400">
              <path d="M12 0v26m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="rounded-2xl border-2 border-brand-300/60 bg-gradient-to-br from-brand-50 via-white to-brand-50 p-8 text-center shadow-card">
            <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 font-display text-lg font-extrabold text-white shadow-md">
              6
            </span>
            <h3 className="font-display text-xl font-bold text-slate-900">
              {steps[5].title}
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
              {steps[5].description}
            </p>
          </div>
        </div>
      </Section>

      {/* Assessment Types */}
      <Section>
        <span className="mb-6 block text-center">
          <span className="inline-block rounded-full bg-brand-50 px-3.5 py-1 font-display text-xs font-semibold uppercase tracking-wider text-brand-700">
            Assessment types
          </span>
        </span>

        {/* 3 questionnaire buttons image */}
        <div className="mx-auto mb-4 max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            <Image
              src="/assessment-types-buttons.png"
              alt="Three assessment types — Standard Questionnaire, Smart Questionnaire, and Triage Questionnaire"
              width={800}
              height={100}
              className="block w-full"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-slate-600">
            Each assessment type attacks vendor risk from a different angle.
            Together, they give you complete coverage.
          </p>
        </div>

        {/* 3 overlapping screenshots — smaller on sides, bigger in center */}
        <div className="relative mx-auto max-w-5xl">
          {/* Center — CCM Lite (largest) */}
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <Image
                src="/assessment-ccm-lite.png"
                alt="CCM Lite standard questionnaire with security domains and questions"
                width={900}
                height={600}
                className="block w-full"
              />
            </div>
          </div>

          {/* Bottom center — Decision Tree Flow (smaller, overlapping) */}
          <div className="absolute -bottom-12 left-1/2 z-10 hidden w-[45%] -translate-x-1/2 lg:block">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg ring-4 ring-white">
              <Image
                src="/assessment-decision-tree.png"
                alt="Decision Tree Flow for triage questionnaires with conditional logic"
                width={500}
                height={400}
                className="block w-full"
              />
            </div>
          </div>

          {/* Top center — Assessment types list (smaller, overlapping) */}
          <div className="absolute -top-10 left-1/2 z-10 hidden w-[40%] -translate-x-1/2 lg:block">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg ring-4 ring-white">
              <Image
                src="/assessment-types-list.png"
                alt="Assessment types — Triage, Smart, and Standard questionnaires"
                width={500}
                height={200}
                className="block w-full"
              />
            </div>
          </div>

          {/* Mobile fallback — show all 3 stacked */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:hidden">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
              <Image
                src="/assessment-decision-tree.png"
                alt="Decision Tree Flow"
                width={500}
                height={400}
                className="block w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
              <Image
                src="/assessment-types-list.png"
                alt="Assessment types list"
                width={500}
                height={200}
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Frameworks */}
      <Section id="frameworks" className="bg-slate-50/60">
        <SectionHeader
          tag="Built-in frameworks"
          title="Security and Compliance Frameworks"
          description="CheckFirst supports the frameworks your auditors and customers care about."
        />
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            <Image
              src="/frameworks-screenshot.png"
              alt="Security and compliance frameworks — Security Triage, CSA, NIST, ISO 27001, SOC 2, PCI DSS"
              width={1000}
              height={600}
              className="block w-full"
            />
          </div>
        </div>
        <p className="mt-8 text-center font-body text-sm text-slate-500">
          Plus COBIT, ENISA, FedRAMP, SOX, and many more. Custom frameworks on Enterprise plans.
        </p>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            See assessments in action
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Book a demo and we&apos;ll run a live assessment on one of your
            actual vendors.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary" size="lg">
              Book a demo
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
