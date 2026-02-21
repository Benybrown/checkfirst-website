import type { Metadata } from "next";
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
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full bg-brand-50 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-700">
            AI Engine
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            AI that actually
            <br />
            <span className="text-brand-700">understands security</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Not just AI-assisted. Four specialised engines that analyse security
            posture against real frameworks, with real citations and real
            confidence scores. Every output is designed to be reviewed, verified,
            and trusted.
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
              JinoXtreme CSA
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

      {/* Jino 360 */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 space-y-4">
            {[
              "Multi-provider scraping with automatic failover",
              "Circuit breaker pattern prevents cascading failures",
              "Concurrency-limited to prevent rate limiting",
              "Synthesises raw web data into structured security profiles",
              "4 scraping providers: ScrapingBee, Scrapfly, BrightData, Jina Reader",
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
          <div className="order-1 lg:order-2">
            <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-0.5 font-display text-xs font-semibold text-brand-700">
              Vendor Research
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Jino 360
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-slate-600">
              AI-powered vendor intelligence engine with an intelligent web
              scraping pipeline. Gathers information from supplier websites,
              news, security incidents, compliance certifications, and public
              filings — then synthesises it into actionable profiles.
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
            {[
              { title: "Completeness", desc: "Does it fully address the question?" },
              { title: "Specificity", desc: "Concrete details vs. vague statements?" },
              { title: "Consistency", desc: "Do answers contradict each other?" },
              { title: "Compliance", desc: "Do answers demonstrate adequate controls?" },
            ].map((item) => (
              <Card key={item.title} hover={false} className="p-5">
                <h4 className="font-display text-sm font-bold text-slate-900">
                  {item.title}
                </h4>
                <p className="mt-1 font-body text-xs text-slate-500">
                  {item.desc}
                </p>
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

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Tools Table */}
          <div className="overflow-x-auto rounded-[16px] border border-slate-200/80 bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="px-5 py-3 text-left font-display text-xs font-bold uppercase tracking-wider text-slate-500">
                    Tool
                  </th>
                  <th className="px-5 py-3 text-left font-display text-xs font-bold uppercase tracking-wider text-slate-500">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                {agentXTools.map((t) => (
                  <tr key={t.tool} className="border-b border-slate-50">
                    <td className="px-5 py-2.5 font-body text-xs font-semibold text-brand-700">
                      {t.tool}
                    </td>
                    <td className="px-5 py-2.5 font-body text-xs text-slate-600">
                      {t.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            "Executive summary",
            "Methodology description",
            "Per-section findings",
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

      {/* What Stays Human */}
      <Section>
        <SectionHeader
          tag="Our philosophy"
          title="AI amplifies your team. It doesn't replace it."
        />
        <div className="mx-auto max-w-3xl space-y-8">
          {[
            {
              title: "Every AI output is reviewable",
              desc: "Assessment reports highlight confidence levels so you know exactly where to focus manual review. Nothing is a black box.",
            },
            {
              title: "Risk decisions require human approval",
              desc: "Treatment decisions (Accept, Mitigate, Transfer, Avoid) require documented rationale and human sign-off. AI recommends, your team decides.",
            },
            {
              title: "No automated actions without oversight",
              desc: "Every automation in CheckFirst runs within guardrails your team configures. The AI works for you, not the other way around.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-brand-50 text-brand-700">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
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
