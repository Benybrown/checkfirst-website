import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Vendor Security Assessment Software | AI Supplier Assessments | CheckFirst",
  description:
    "Run vendor security assessments faster with AI-powered supplier due diligence, external scanning, adaptive questionnaires, and evidence-based review workflows.",
  alternates: {
    canonical: "/assessments",
  },
};

const capabilities = [
  {
    title: "Supplier due diligence in one workflow",
    description:
      "Capture supplier context, criticality, data access, and business impact before you launch the assessment. Every review starts with the risk profile that matters.",
  },
  {
    title: "External validation before the questionnaire returns",
    description:
      "ProvEye scans the vendor's internet-facing footprint for DNS, SSL/TLS, exposed services, headers, and known vulnerabilities so your team gets immediate signals.",
  },
  {
    title: "Adaptive security questionnaires",
    description:
      "Send smarter questionnaires that change based on vendor type, risk tier, and prior answers, so suppliers only see relevant questions and your team gets cleaner data.",
  },
  {
    title: "Evidence-based AI analysis",
    description:
      "JinoXtreme CSA and Jino-QA score answers, controls, and documents with citations and confidence signals so reviewers can move faster without losing control.",
  },
  {
    title: "Built for buyer-ready review",
    description:
      "Turn questionnaires, scans, documents, and web research into one report your security, procurement, legal, and business owners can act on quickly.",
  },
  {
    title: "Continuous follow-up and remediation",
    description:
      "Track gaps, assign remediation, and revisit high-risk vendors on the right schedule instead of restarting from scratch every year.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Intake and triage the vendor",
    description:
      "Capture vendor details, criticality, data sensitivity, and business use case so the assessment starts with the right level of scrutiny.",
  },
  {
    step: "02",
    title: "Run external attack-surface checks",
    description:
      "Scan the vendor's domain and infrastructure with ProvEye to surface quick security signals before waiting on questionnaire responses.",
  },
  {
    step: "03",
    title: "Launch AI-powered assessment flows",
    description:
      "Evaluate suppliers against CSA CCM controls, gather public intelligence, and collect documentation in parallel instead of sequentially.",
  },
  {
    step: "04",
    title: "Send adaptive questionnaires",
    description:
      "Route vendors into the right questionnaire path and dynamically adjust questions based on profile, tier, and previous answers.",
  },
  {
    step: "05",
    title: "Review evidence, not just answers",
    description:
      "Use Jino-QA and JinoDocs to assess completeness, consistency, and supporting documents so your team can focus on real exceptions.",
  },
  {
    step: "06",
    title: "Decide and document",
    description:
      "Produce a unified risk profile, recommended treatment path, and stakeholder-ready summary for approve, escalate, or remediate decisions.",
  },
];

const buyerOutcomes = [
  {
    title: "Security teams",
    points: [
      "Reduce manual review hours",
      "Standardise assessment depth",
      "Escalate only real risk issues",
    ],
  },
  {
    title: "Procurement teams",
    points: [
      "Shorten vendor onboarding delays",
      "Stop chasing spreadsheet questionnaires",
      "Keep deals moving with clear status visibility",
    ],
  },
  {
    title: "Compliance leaders",
    points: [
      "Map findings to recognised frameworks",
      "Keep audit-ready evidence in one place",
      "Track remediation with documented rationale",
    ],
  },
];

const relatedCommercialPages = [
  {
    href: "/",
    title: "CheckFirst platform overview",
    description:
      "Start with the homepage if you need the high-level TPRM platform narrative before drilling into assessment workflows.",
  },
  {
    href: "/managed-tprm",
    title: "Managed TPRM services",
    description:
      "For teams that need outsourced analyst capacity to keep vendor reviews moving without building more headcount.",
  },
  {
    href: "/ai-engine",
    title: "AI vendor risk assessment engine",
    description:
      "See how CheckFirst applies AI to supplier due diligence, questionnaire review, and evidence analysis.",
  },
  {
    href: "/tprm-software",
    title: "TPRM software overview",
    description:
      "Useful for category buyers comparing CheckFirst against broader third-party risk management software options.",
  },
];

const survivorLinks = [
  {
    href: "/blog/vendor-security-assessment-guide-2026/",
    title: "Vendor Security Assessment Guide",
    description:
      "Process, checklist, and best practices for building a stronger vendor assessment workflow.",
  },
  {
    href: "/blog/3rd-party-risk-management-program/",
    title: "Third-Party Risk Management Program Guide",
    description:
      "How to operationalise assessment findings inside a repeatable TPRM program.",
  },
  {
    href: "/blog/tprm-agentic-ai-assessment/",
    title: "AI Vendor Risk Assessment",
    description:
      "How AI can accelerate supplier reviews without removing human oversight.",
  },
  {
    href: "/blog/best-tprm-tool-2026/",
    title: "Best TPRM Software in 2026",
    description:
      "Commercial comparison page for teams evaluating the software category and alternatives.",
  },
];

const faqItems = [
  {
    question: "What makes CheckFirst different from a standard questionnaire tool?",
    answer:
      "CheckFirst combines supplier intake, external scanning, adaptive questionnaires, AI document analysis, web research, and framework-based scoring in one workflow. Instead of collecting answers and leaving the review to your team, the platform helps your reviewers interpret evidence faster.",
  },
  {
    question: "Can we use CheckFirst for high-risk vendors and lighter-tier suppliers?",
    answer:
      "Yes. You can route vendors by criticality and risk profile, use lighter triage flows where appropriate, and apply deeper evidence collection for higher-risk suppliers.",
  },
  {
    question: "Which frameworks can we align assessments to?",
    answer:
      "CheckFirst supports 45+ frameworks including CSA CCM, SOC 2, ISO 27001 family controls, NIST CSF, GDPR, DORA, NIS2, PCI DSS, HIPAA/HITRUST, and more, with custom framework support available for enterprise programs.",
  },
  {
    question: "How quickly can a vendor assessment be completed?",
    answer:
      "External scans complete in 30–60 seconds, while AI-supported assessment and review workflows run in minutes. Full turnaround still depends on vendor responsiveness and document quality, but the internal review bottleneck is dramatically reduced.",
  },
];

export default function AssessmentsPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-block rounded-full bg-brand-50 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-700">
            Vendor security assessment software
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Run vendor security assessments faster
            <br />
            <span className="text-brand-700">without sacrificing review quality</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            CheckFirst gives security and procurement teams a faster way to complete
            vendor security assessments, supplier due diligence, and control reviews.
            Combine external scanning, adaptive questionnaires, AI evidence analysis,
            and framework-based scoring in one platform.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Book a demo
            </Button>
            <Button href="/ai-engine" variant="secondary" size="lg">
              See the AI engine
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-slate-100 px-3 py-1">Supplier assessment software</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Vendor due diligence automation</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">CSA-aligned review workflows</span>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="Why teams switch"
          title="Turn a slow vendor review process into an operational workflow"
          description="Built for buyers who need faster vendor onboarding, clearer risk decisions, and better evidence than spreadsheets can provide."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <Card key={item.title}>
              <h2 className="font-display text-lg font-bold text-slate-900">{item.title}</h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          tag="Assessment workflow"
          title="How CheckFirst handles vendor security assessments"
          description="A buyer-intent workflow designed to shorten turnaround, improve evidence collection, and keep stakeholders aligned."
        />
        <div className="space-y-6">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="grid items-start gap-6 rounded-[16px] border border-slate-200/80 bg-white p-8 sm:grid-cols-[72px_1fr]"
            >
              <span className="font-display text-4xl font-extrabold text-brand-600">{item.step}</span>
              <div>
                <h2 className="font-display text-xl font-bold text-slate-900">{item.title}</h2>
                <p className="mt-2 font-body text-base leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="Who it helps"
          title="Built for cross-functional buying and review teams"
          description="Security owns the decision, but procurement, legal, compliance, and the business need the process to move."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {buyerOutcomes.map((group) => (
            <Card key={group.title}>
              <h3 className="font-display text-lg font-bold text-slate-900">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-slate-600">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
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
          title="Internal links for deeper evaluation"
          description="These supporting assets reinforce the core assessments page and help buyers validate process, category fit, and AI workflow maturity."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {survivorLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[16px] border border-slate-200/80 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{item.description}</p>
              <span className="mt-4 inline-flex font-display text-sm font-semibold text-brand-700">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="FAQ"
          title="Common questions about assessment software"
          description="Everything buyers typically need before moving into a live evaluation."
        />
        <FAQ items={faqItems} />
      </Section>

      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            See how fast your vendor reviews could move
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Book a demo and we&apos;ll walk through a real vendor security assessment workflow,
            from intake and scanning to review and decision support.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Book a demo
            </Button>
            <Button href="/managed-tprm" variant="ghost-dark" size="lg">
              Need outsourced support?
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
