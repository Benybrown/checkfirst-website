import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Managed TPRM — CheckFirst",
  description:
    "Let CheckFirst run your entire third-party risk management program. Dedicated analysts plus AI-powered assessments — launch in weeks, not months.",
  alternates: {
    canonical: "/managed-tprm",
  },
};

const painPoints = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 8v4l3 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Overwhelmed security teams",
    description:
      "Your team is juggling 100+ vendors while handling security operations, incident response, and compliance — vendor assessments keep falling to the bottom of the pile.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Slow vendor response cycles",
    description:
      "Vendors take weeks to return questionnaires, delaying procurement decisions and stalling deals that your business depends on.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Point-in-time assessments",
    description:
      "Annual questionnaires create a false sense of security. Vendor risk changes continuously, but your assessments don't.",
  },
];

const offerings = [
  {
    title: "Dedicated TPRM Analyst",
    description:
      "End-to-end vendor assessment management — vendor outreach, document collection, follow-ups, and escalation. Your analyst becomes an extension of your team.",
  },
  {
    title: "Full AI Platform Access",
    description:
      "ProvEye, JinoXtreme (243 controls), Jino 360, Smart Questionnaires, Jino-QA, and AgentX — all working behind the scenes to accelerate every assessment.",
  },
  {
    title: "Executive Reporting",
    description:
      "Quarterly risk reviews, executive summaries, and remediation tracking. Board-ready reports delivered on schedule, every time.",
  },
  {
    title: "Vendor Communication",
    description:
      "We handle all vendor outreach, questionnaire distribution, and follow-up. Your team never has to chase a vendor again.",
  },
];

const steps = [
  {
    number: "01",
    title: "Onboarding",
    description:
      "We map your vendor landscape, categorise vendors by criticality, and build your assessment calendar.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "AI-powered scans and analyst-led questionnaires run across all vendors — simultaneously, not sequentially.",
  },
  {
    number: "03",
    title: "Reporting",
    description:
      "Executive risk reports with clear findings, risk ratings, and actionable remediation plans.",
  },
  {
    number: "04",
    title: "Continuous monitoring",
    description:
      "Ongoing reassessment cycles and real-time risk updates keep your program current, not stale.",
  },
];

const comparison = [
  {
    label: "Time to first assessment",
    diy: "Weeks",
    managed: "Days",
  },
  {
    label: "Vendor follow-up",
    diy: "Your team",
    managed: "Our analysts",
  },
  {
    label: "Assessment depth",
    diy: "Varies",
    managed: "243 CSA controls every time",
  },
  {
    label: "Monitoring",
    diy: "Manual",
    managed: "Continuous",
  },
  {
    label: "Reporting",
    diy: "Build your own",
    managed: "Executive-ready",
  },
];

const faqItems = [
  {
    question: "How quickly can we launch?",
    answer:
      "Most clients are fully onboarded within two weeks. We start with a vendor inventory workshop, configure the platform, and begin assessments immediately after.",
  },
  {
    question: "How many vendors can you manage?",
    answer:
      "There's no hard limit. Our managed service scales from 50 to 5,000+ vendors. We adjust analyst capacity and AI throughput based on your portfolio size.",
  },
  {
    question: "Do we still get platform access?",
    answer:
      "Absolutely. You get full access to the CheckFirst platform — dashboards, reports, and real-time risk data. The managed service adds analyst capacity on top, it doesn't replace your visibility.",
  },
  {
    question: "What's the typical assessment turnaround?",
    answer:
      "AI-powered assessments complete in minutes. Full analyst-reviewed assessments, including vendor outreach and document review, typically take 3–5 business days.",
  },
  {
    question: "Can we scale up or down?",
    answer:
      "Yes. The managed service is flexible — scale up during vendor onboarding waves or audit seasons, and scale back when things quiet down. No long-term lock-in.",
  },
];

export default function ManagedTPRM() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full bg-brand-50 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-700">
            Managed Service
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Your entire TPRM program —{" "}
            <span className="text-brand-700">handled</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Dedicated analysts backed by CheckFirst&apos;s full AI toolkit. We
            run your vendor assessments end-to-end so your team can focus on what
            matters. Launch in weeks, not months.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Book a consultation
            </Button>
            <Button href="#how-it-works" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>
        </div>
      </Section>

      {/* Pain Points */}
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="The challenge"
          title="Why vendor assessments stall"
          description="Security teams are stretched thin. These are the problems we hear every day."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => (
            <Card key={point.title}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-brand-50 text-brand-700">
                {point.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                {point.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                {point.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* What You Get */}
      <Section>
        <SectionHeader
          tag="What you get"
          title="A complete TPRM team, on demand"
          description="Everything you need to run a world-class vendor risk program — without hiring a single person."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {offerings.map((item) => (
            <Card key={item.title}>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.5 8.5L6.5 11.5L12.5 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-slate-50/60" id="how-it-works">
        <SectionHeader
          tag="Process"
          title="How it works"
          description="From onboarding to continuous monitoring — four steps to a fully managed program."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center lg:text-left">
              <span className="font-display text-4xl font-extrabold text-brand-200">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section>
        <SectionHeader
          tag="Comparison"
          title="Why managed beats DIY"
          description="See the difference between running TPRM yourself and letting CheckFirst handle it."
        />
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[16px] border border-slate-200/80 bg-white shadow-card">
          {/* Header row */}
          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 px-6 py-4">
            <div className="font-display text-sm font-semibold text-slate-500" />
            <div className="text-center font-display text-sm font-semibold text-slate-500">
              Do it yourself
            </div>
            <div className="text-center font-display text-sm font-semibold text-brand-700">
              Managed by CheckFirst
            </div>
          </div>
          {/* Rows */}
          {comparison.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 items-center px-6 py-4 ${
                i < comparison.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <div className="font-body text-sm font-medium text-slate-900">
                {row.label}
              </div>
              <div className="text-center font-body text-sm text-slate-500">
                {row.diy}
              </div>
              <div className="text-center font-display text-sm font-semibold text-brand-700">
                {row.managed}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about the managed TPRM service."
        />
        <FAQ items={faqItems} />
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let us handle your vendor risk
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Stop chasing vendors and building spreadsheets. Get a dedicated team
            and AI-powered platform managing your entire TPRM program.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Book a consultation
            </Button>
            <Button href="#how-it-works" variant="ghost-dark" size="lg">
              See how it works
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
