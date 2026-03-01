import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "AI Security Assessments — ProvEye Scanning, CSA CCM, Smart Questionnaires | CheckFirst",
  description:
    "Run complete vendor security assessments in minutes with AI-powered analysis, external ProvEye scanning, and 243-control CSA CCM evaluation. 45+ frameworks supported.",
  alternates: {
    canonical: "/assessments",
  },
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
      "Run an external security scan on the vendor's domain. ProvEye independently analyses DNS health (SPF, DKIM, DMARC), SSL/TLS status, open ports, security headers (HSTS, CSP), and known vulnerabilities. No questionnaire needed. Results in 30–60 seconds.",
  },
  {
    step: "03",
    title: "AI-powered assessment",
    description:
      "Launch a JinoXtreme CSA assessment to evaluate the vendor against all 243 CSA Cloud Controls Matrix controls across 18 security domains. The AI produces per-control compliance ratings (Compliant, Partially Compliant, Non-Compliant) with evidence-based justifications.",
  },
  {
    step: "04",
    title: "Send Smart Questionnaires",
    description:
      "Generate targeted questionnaires using AI that adapts questions to the vendor's profile and risk level. Jino-QA analyses responses for completeness, quality, consistency, and compliance alignment.",
  },
  {
    step: "05",
    title: "Research with Jino 360",
    description:
      "Automatically gather vendor intelligence from multiple web sources — company website, news, security incidents, compliance certifications, public filings. AI synthesises findings into a structured profile.",
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

      {/* Steps */}
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="How assessments work"
          title="Six steps to a complete vendor assessment"
        />
        <div className="space-y-8">
          {steps.map((s) => (
            <div
              key={s.step}
              className="grid items-start gap-6 rounded-[16px] border border-slate-200/80 bg-white p-8 sm:grid-cols-[80px_1fr]"
            >
              <span aria-hidden="true" className="font-display text-4xl font-extrabold text-brand-600">
                {s.step}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 font-body text-base leading-relaxed text-slate-600">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Assessment Types Table */}
      <Section>
        <SectionHeader
          tag="Assessment types"
          title="Five engines, one platform"
          description="Each assessment type attacks vendor risk from a different angle. Together, they give you complete coverage."
        />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="pb-4 text-left font-display text-sm font-bold text-slate-900">
                  Assessment Type
                </th>
                <th className="pb-4 text-left font-display text-sm font-bold text-slate-900">
                  What It Does
                </th>
                <th className="pb-4 text-left font-display text-sm font-bold text-slate-900">
                  Speed
                </th>
              </tr>
            </thead>
            <tbody>
              {assessmentTypes.map((a) => (
                <tr key={a.name} className="border-b border-slate-100">
                  <td className="py-4 font-display text-sm font-semibold text-slate-900">
                    {a.name}
                  </td>
                  <td className="py-4 font-body text-sm text-slate-600">
                    {a.what}
                  </td>
                  <td className="py-4">
                    <span className="inline-block rounded-full bg-brand-50 px-3 py-0.5 font-display text-xs font-semibold text-brand-700">
                      {a.speed}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Frameworks */}
      <Section id="frameworks" className="bg-slate-50/60">
        <SectionHeader
          tag="Built-in frameworks"
          title="45+ security and compliance frameworks"
          description="CheckFirst supports the frameworks your auditors and customers care about."
        />
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {frameworks.map((f) => (
            <div
              key={f}
              className="flex items-center gap-3 rounded-[12px] border border-slate-200/80 bg-white px-5 py-4"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-brand-600"
              >
                <path
                  d="M3.5 8.5L6.5 11.5L12.5 4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-body text-sm text-slate-700">{f}</span>
            </div>
          ))}
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
