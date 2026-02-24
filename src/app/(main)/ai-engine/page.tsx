import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "AI Security Assessment Engine — JinoXtreme CSA, Jino 360, AgentX | CheckFirst",
  description:
    "CheckFirst's AI engines analyse vendor security against 243 CSA controls, research suppliers across the web, and semantically evaluate questionnaire responses. Real analysis, not just summaries.",
};

const agentXTools = [
  { tool: "web_search", purpose: "Search the internet for security news and information" },
  { tool: "scrape_url", purpose: "Extract content from specific web pages" },
  { tool: "security_lookup", purpose: "Look up CVEs, vulnerabilities, and security advisories" },
  { tool: "supplier_queries", purpose: "Query the supplier database" },
  { tool: "risk_analysis", purpose: "Analyse and assess risk data" },
  { tool: "questionnaire_help", purpose: "Assist with questionnaire creation and analysis" },
  { tool: "assessment_guidance", purpose: "Guide users through assessment processes" },
  { tool: "document_search", purpose: "Search uploaded documents" },
  { tool: "task_management", purpose: "Create and manage tasks" },
  { tool: "csa_lookup", purpose: "Look up CSA CCM controls and domains" },
  { tool: "general_knowledge", purpose: "Answer general TPRM and security questions" },
];

const agentXExamples = [
  "What's the risk status of Supplier X?",
  "Search for recent vulnerabilities in Log4j",
  "Create a task to follow up with Acme Corp by Friday",
  "Explain CSA control DSP-01",
];

export default function AIEnginePage() {
  return (
    <>
      {/* Hero */}
      <Section>
        {/* AI tools screenshot — first */}
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-200/30 via-transparent to-brand-100/20 blur-sm" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <Image
                src="/ai-tools-screenshot.png"
                alt="CheckFirst AI engines — JinoXtreme, Jino-QA, Jino-Docs, and AI Reports"
                width={900}
                height={200}
                className="block w-full"
                priority
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            AI that actually
            <br />
            <span className="text-brand-700">understands security</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Not just AI-assisted. Four specialised engines that analyse security
            posture against real frameworks, with real citations and real
            confidence scores.
          </p>
        </div>
      </Section>

      {/* JinoXtreme CSA */}
      <Section className="bg-slate-50/60">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-0.5 font-display text-xs font-semibold text-brand-700">
              Flagship Engine
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              JinoXtreme
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-slate-600">
              Comprehensive security assessment against the full CSA Cloud
              Controls Matrix — all 18 domains, all 243 controls. Combines data
              from multiple sources and produces per-control compliance ratings
              with evidence-based justifications.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Evaluates against every single CSA CCM control — not a subset",
              "Evidence-based compliance ratings, not just pass/fail",
              "Generates remediation recommendations for non-compliant controls",
              "Domain-level summaries and overall security scores",
              "Concurrency-managed processing for reliability",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-1 shrink-0 text-brand-600"
                >
                  <path
                    d="M3.5 8.5L6.5 11.5L12.5 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-body text-sm text-slate-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Jino Website & Jino 360 */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-0.5 font-display text-xs font-semibold text-brand-700">
              Vendor Research
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Jino Website
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-slate-600">
              AI-powered vendor intelligence engine with an intelligent web
              scraping pipeline. Gathers information from supplier websites,
              trust-centers, compliance certifications.
            </p>
          </div>
          <div>
            <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-0.5 font-display text-xs font-semibold text-brand-700">
              Vendor Research
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Jino 360
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-slate-600">
              AI-powered vendor intelligence engine with an intelligent web
              scraping pipeline. Gathers information from web researches, news,
              security incidents, then synthesises it into actionable profiles.
            </p>
          </div>
        </div>
      </Section>

      {/* Jino-QA */}
      <Section className="bg-slate-50/60">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-0.5 font-display text-xs font-semibold text-brand-700">
              Questionnaire Analysis
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Jino-QA
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-slate-600">
              Goes beyond keyword matching to semantically understand
              questionnaire responses. Generates per-question quality scores
              plus an overall analysis summary.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Completeness", "Specificity", "Consistency", "Compliance"].map((title) => (
              <Card key={title} hover={false} className="p-5">
                <h4 className="font-display text-sm font-bold text-slate-900">
                  {title}
                </h4>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* AgentX */}
      <Section>
        <SectionHeader
          tag="AI Assistant"
          title="AgentX"
          description="Conversational AI assistant accessible from any page. Uses intent classification, capability routing, and 11 specialised tools to answer questions, search data, and perform actions through natural language."
        />

        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* AgentX screenshot */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <Image
              src="/agentx-screenshot.png"
              alt="AgentX — Supplier Assessment Assistant with conversational AI interface"
              width={700}
              height={500}
              className="block w-full"
            />
          </div>

          {/* Examples */}
          <div>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Talk to it like a colleague
            </h3>
            <p className="mt-2 font-body text-sm text-slate-600">
              AgentX understands natural language. No special syntax needed.
            </p>
            <div className="mt-6 space-y-3">
              {agentXExamples.map((ex) => (
                <div
                  key={ex}
                  className="rounded-[12px] border border-slate-200/80 bg-slate-50 px-5 py-3"
                >
                  <p className="font-body text-sm italic text-slate-700">
                    &ldquo;{ex}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* AI Reports */}
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="AI Reports"
          title="Structured, professional reports"
          description="After any assessment completes, AI compiles all findings into a structured report ready for stakeholders."
        />
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Executive reports",
            "Detailed reports",
            "Security posture",
            "Risk ratings",
            "Remediation priorities",
            "Export to PDF",
          ].map((item) => (
            <div
              key={item}
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
              <span className="font-body text-sm text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            See the AI in action
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Book a demo and we&apos;ll run a live JinoXtreme assessment on one
            of your vendors.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Book a demo
            </Button>
            <Button href="/assessments" variant="ghost-dark" size="lg">
              See assessment flow
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
