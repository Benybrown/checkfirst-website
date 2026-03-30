import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "TPRM Software | Third-Party Risk Management Platform | CheckFirst",
  description:
    "Evaluate modern TPRM software for vendor assessments, supplier due diligence, continuous monitoring, and AI-assisted third-party risk workflows.",
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

export default function TPRMSoftwarePage() {
  return (
    <>
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
    </>
  );
}
