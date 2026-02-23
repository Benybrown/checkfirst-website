import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FAQ } from "@/components/FAQ";
import { Testimonial } from "@/components/Testimonial";

/* ─── Data ─── */

const problemPoints = [
  {
    who: "Buyers",
    pain: "waste weeks sending spreadsheet questionnaires and chasing vendor responses",
  },
  {
    who: "Vendors",
    pain: "answer the same 300 questions over and over, for every prospect",
  },
  {
    who: "Security teams",
    pain: "are buried in manual review work that doesn't scale",
  },
  {
    who: "Deals",
    pain: "stall because security assessments take 4–8 weeks to complete",
  },
];

const metrics = [
  { value: "85%", label: "Faster assessments" },
  { value: "243", label: "CSA CCM controls" },
  { value: "40+", label: "Frameworks supported" },
  { value: "99.9%", label: "Platform uptime" },
];

const capabilities = [
  {
    name: "JinoXtreme",
    tag: "AI Assessment",
    description:
      "Evaluates vendors against all 243 Cloud Security Controls across 18 security domains — with evidence-based compliance ratings.",
  },
  {
    name: "ProvEye",
    tag: "External Scanning",
    description:
      "Independently public scans of vendor infrastructure — DNS, SSL, open ports, security headers, known vulnerabilities.",
  },
  {
    name: "Jino 360",
    tag: "Vendor Research",
    description:
      "AI-powered intelligence gathering from multiple web sources — company website, news, security incidents, certifications, public filings.",
  },
  {
    name: "Smart Questionnaires",
    tag: "Adaptive Surveys",
    description:
      "Intelligent questionnaires that adapt to vendor context and risk profile. Questionnaires are presented depending on supplier answers for a dynamic assessment.",
  },
  {
    name: "JinoQA",
    tag: "Q&A Assessment",
    description:
      "AI specialized tool for assessing supplier feedbacks. Just upload all supplier Questions & Answers file and get a detailed report and security profile.",
  },
  {
    name: "JinoDocs",
    tag: "Document Assessment",
    description:
      "AI specialized tool for assessing supplier documentations. Just upload all supplier documentations PDF files and get a detailed report and security profile.",
  },
];

const platformModules = [
  {
    title: "Supplier Management",
    description:
      "9-stage lifecycle tracking from onboarding to offboarding. Full risk classification, compliance status, and assessment history per vendor.",
  },
  {
    title: "Risk Management",
    description:
      "5×5 risk matrix with 4-stage workflow: Identification → Assessment → Treatment → Monitoring. Accept, Mitigate, Transfer, or Avoid — each with documented rationale.",
  },
  {
    title: "Questionnaire System",
    description:
      "Three types: Triage (quick screening), Standard (full custom), and Smart (AI-generated). Built-in CSA CAIQ template. Semantic response analysis via Jino-QA.",
  },
  {
    title: "Document Vault",
    description:
      "Centralised storage for SOC 2 reports, ISO certificates, policies, NDAs. Linked to specific suppliers, assessments, or questionnaires for cross-referencing.",
  },
  {
    title: "Task Management",
    description:
      "Remediation tracking with priority levels, due dates, and assignees. Tasks auto-link to risks, assessments, and suppliers. Overdue alerts keep things moving.",
  },
  {
    title: "CSA Framework",
    description:
      "Full CSA Cloud Controls Matrix implementation — 18 security domains, 243 controls. Map vendor gaps against industry standards and generate compliance reports.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Add your vendors",
    description:
      "Create supplier profiles or use the intake portal for self-registration. Import existing vendor lists. No spreadsheets needed.",
  },
  {
    step: "02",
    title: "Scan with ProvEye",
    description:
      "Run an external security scan on any vendor domain. DNS, SSL, ports, headers, vulnerabilities — in 30–60 seconds, no vendor cooperation required.",
  },
  {
    step: "03",
    title: "AI assesses risk",
    description:
      "JinoXtreme CSA evaluates against all 243 CSA controls. Jino 360 researches across the web. Smart Questionnaires adapt to each vendor's profile.",
  },
  {
    step: "04",
    title: "Review and decide",
    description:
      "All data feeds into a unified risk profile with 5×5 matrix scoring. AI-generated reports with executive summaries, findings, and prioritised recommendations.",
  },
];

const testimonials = [
  {
    quote:
      "We cut our vendor assessment cycle from three weeks to two days. The AI findings are surprisingly thorough — it catches things our team used to miss.",
    name: "Sarah Mitchell",
    role: "Head of Security",
    company: "Meridian Financial",
  },
  {
    quote:
      "CheckFirst replaced four different tools for us. The CSA mapping alone saved our compliance team hundreds of hours per audit cycle.",
    name: "James Okafor",
    role: "CISO",
    company: "HealthBridge Systems",
  },
  {
    quote:
      "The smart questionnaires are a game-changer. Our vendors actually complete them because they only see relevant questions.",
    name: "Laura Chen",
    role: "Vendor Risk Manager",
    company: "Ascend Cloud",
  },
];

const pricingTeaser = [
  { name: "Starter", price: "Contact us", note: "25 ProvEye scans/mo", highlight: false },
  { name: "Professional", price: "Contact us", note: "Unlimited assessments", highlight: true },
  { name: "Enterprise", price: "Custom", note: "Dedicated instance", highlight: false },
];

const faqItems = [
  {
    question: "How does the AI assessment work?",
    answer:
      "JinoXtreme CSA evaluates your vendor against all 243 CSA Cloud Controls Matrix controls across 18 security domains. It combines data from the vendor profile, ProvEye scan results, questionnaire responses, and web research to produce per-control compliance ratings with evidence-based justifications.",
  },
  {
    question: "What frameworks do you support?",
    answer:
      "CheckFirst supports 40+ security and compliance frameworks including CSA CCM v4.0, SOC 2, ISO 27001/27002/27017/27018, NIST CSF, GDPR, DORA, NIS2, PCI DSS, HIPAA/HITRUST, CIS Controls, and more. Custom framework templates are available on Enterprise plans.",
  },
  {
    question: "Can vendors fill out assessments themselves?",
    answer:
      "Yes. Send questionnaires directly to vendors via a secure link. They respond in their browser — no account needed. Jino-QA then semantically analyses their responses for completeness, quality, consistency, and compliance alignment.",
  },
  {
    question: "How long does an assessment take?",
    answer:
      "ProvEye external scans complete in 30–60 seconds. JinoXtreme CSA assessments with full 243-control evaluation typically finish in minutes. Jino 360 web research runs concurrently. Most vendors are fully assessed within 10 minutes.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Each customer gets a fully isolated instance with their own database. Data is encrypted at rest and in transit. We support two-factor authentication, 4-layer role-based access control, SSO, and SCIM provisioning.",
  },
  {
    question: "What does ProvEye scan?",
    answer:
      "ProvEye independently analyses vendor infrastructure: DNS health (SPF, DKIM, DMARC), SSL/TLS status, open ports, security headers (HSTS, CSP), and known vulnerabilities (CVE lookups). No vendor cooperation needed.",
  },
];

/* ─── Page ─── */

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
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
              AI-Powered TPRM Platform
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[64px] lg:leading-[1.08]">
              Stop chasing spreadsheets.
              <br />
              <span className="text-brand-400">Assess vendors in minutes.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">
              CheckFirst replaces slow, manual vendor security assessments with
              instant AI analysis. Evaluate vendors, scan infrastructure, and
              manage risk end-to-end.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                Book a demo
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                View pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics Bar ── */}
      <section className="border-b border-slate-200/60 bg-slate-50/50 px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-display text-3xl font-extrabold tracking-tight text-brand-700">
                {m.value}
              </p>
              <p className="mt-1 font-body text-sm text-slate-600">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Problem ── */}
      <Section>
        <SectionHeader
          tag="The problem"
          title="Security assessments are broken"
          description=""
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {problemPoints.map((p) => (
            <Card key={p.who}>
              <p className="font-body text-base leading-relaxed text-slate-700">
                <span className="font-display font-bold text-slate-900">
                  {p.who}
                </span>{" "}
                {p.pain}.
              </p>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center font-body text-base leading-relaxed text-slate-600">
          <strong className="font-display text-slate-900">
            CheckFirst takes a different approach.
          </strong>{" "}
          A unified platform that serves both buyers assessing vendors and
          vendors proving their security.
        </p>
      </Section>

      {/* ── Core Capabilities ── */}
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="What you get"
          title="Five engines. One platform. Complete coverage."
          description="Named tools that do specific things — not vague promises about AI."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <Card key={c.name}>
              <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-0.5 font-display text-xs font-semibold text-brand-700">
                {c.tag}
              </span>
              <h3 className="font-display text-lg font-bold text-slate-900">
                {c.name}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                {c.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── Platform Modules ── */}
      <Section>
        <SectionHeader
          tag="The platform"
          title="Everything connects"
          description=""
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platformModules.map((m) => (
            <div key={m.title} className="rounded-[16px] border border-slate-200/80 bg-white p-6">
              <h3 className="font-display text-base font-bold text-slate-900">
                {m.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How It Works ── */}
      <Section id="how-it-works" className="bg-slate-50/60">
        <SectionHeader
          tag="How it works"
          title="From vendor intake to ongoing monitoring"
          description=""
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item) => (
            <div key={item.step}>
              <span aria-hidden="true" className="font-display text-5xl font-extrabold text-brand-600">
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

      {/* ── Testimonials ── */}
      <Section>
        <SectionHeader
          tag="What teams are saying"
          title="Built for security teams that ship"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Testimonial key={t.name} {...t} />
          ))}
        </div>
      </Section>

      {/* ── Pricing Teaser ── */}
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="Pricing"
          title="Simple, transparent pricing"
          description="Clear plans. No surprises."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {pricingTeaser.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlight ? "ring-2 ring-brand-600 relative" : ""}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-700 px-3 py-0.5 font-display text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-base font-bold text-slate-900">
                {plan.name}
              </h3>
              <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900">
                {plan.price}
              </p>
              <p className="mt-1 font-body text-sm text-slate-500">
                {plan.note}
              </p>
              <div className="mt-6">
                <Button
                  href="/pricing"
                  variant={plan.highlight ? "primary" : "secondary"}
                  className="w-full"
                >
                  See {plan.name} plan
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section id="faq">
        <SectionHeader
          tag="FAQ"
          title="Common questions"
          description="Everything you need to know about getting started."
        />
        <FAQ items={faqItems} />
      </Section>

      {/* ── Final CTA ── */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to take control of vendor risk?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            See how CheckFirst can replace your spreadsheets, emails, and
            guesswork with a single AI-powered platform.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Book a demo
            </Button>
            <Button href="/pricing" variant="ghost-dark" size="lg">
              View pricing
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
