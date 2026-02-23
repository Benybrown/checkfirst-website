import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "CheckFirst Pricing — Transparent Plans | Security Assessments",
  description:
    "Transparent pricing for AI security assessment software. Compare features across Core, Professional, and Enterprise plans — starting at $1,199/month.",
};

const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-brand-600">
    <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const dashIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-slate-300">
    <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

type FeatureSection = {
  section: string;
  rows: { feature: string; core: boolean | string; pro: boolean | string; enterprise: boolean | string }[];
};

const featureSections: FeatureSection[] = [
  {
    section: "Platform",
    rows: [
      { feature: "Vendors", core: "100", pro: "300", enterprise: "Unlimited" },
      { feature: "Users", core: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
      { feature: "Core risk assessments", core: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
      { feature: "Smart Questionnaires", core: true, pro: true, enterprise: true },
      { feature: "Continuous Monitoring 360", core: true, pro: true, enterprise: true },
      { feature: "Security ratings/scoring", core: true, pro: true, enterprise: true },
      { feature: "AI Agents (4 tools)", core: true, pro: true, enterprise: true },
      { feature: "Task Management Module", core: true, pro: true, enterprise: true },
      { feature: "Dedicated Instance & DB", core: true, pro: true, enterprise: true },
      { feature: "Onboarding assistance", core: true, pro: true, enterprise: true },
    ],
  },
  {
    section: "Customisation",
    rows: [
      { feature: "Custom assessment templates", core: false, pro: true, enterprise: true },
      { feature: "Custom branding", core: false, pro: true, enterprise: true },
      { feature: "Custom advanced framework", core: false, pro: false, enterprise: true },
    ],
  },
  {
    section: "Add-ons & Integrations",
    rows: [
      { feature: "AgentX AI Assistant", core: "Add-on", pro: true, enterprise: true },
      { feature: "Trust-center page", core: "Add-on", pro: "Add-on", enterprise: true },
      { feature: "SSO/SAML", core: "Add-on", pro: "Add-on", enterprise: true },
      { feature: "HIPAA Eligible", core: "Add-on", pro: "Add-on", enterprise: "Add-on" },
    ],
  },
  {
    section: "Support & SLA",
    rows: [
      { feature: "Support", core: "Email", pro: "Priority", enterprise: "2-hour SLA" },
      { feature: "Quarterly business reviews", core: false, pro: false, enterprise: true },
      { feature: "Dedicated CSM", core: false, pro: false, enterprise: true },
    ],
  },
];

const hostingCore = [
  "SOC 2 Type II & SOC 3 & CSA certified infrastructure",
  "GDPR compliant",
  "99.99% uptime SLA",
  "TLS/SSL encryption in transit",
  "Encryption at rest",
  "Daily automated backups (7-day retention)",
];

const hostingEnterprise = [
  "All Professional certifications PLUS:",
  "Cloudflare Protection \u2014 Advanced",
  "Daily automated backups (30-day retention)",
  "Multi-region High-availability",
  "Clustered instances",
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    if (value === "Add-on") {
      return <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 font-display text-xs font-medium text-slate-500">Add-on</span>;
    }
    return <span className="font-body text-sm text-slate-700">{value}</span>;
  }
  return value ? checkIcon : dashIcon;
}

const pricingFaq = [
  {
    question: "Can I upgrade or downgrade at any time?",
    answer:
      "Yes. Changes take effect on your next billing cycle. Upgrades are immediate, downgrades apply at period end. We never cut off access to existing assessments.",
  },
  {
    question: "What counts as a supplier?",
    answer:
      "Any third-party vendor you create in CheckFirst. Active and inactive suppliers both count toward your plan limit.",
  },
  {
    question: "Do you offer annual billing?",
    answer:
      "Yes. Annual plans save 20% compared to monthly billing. Enterprise plans include custom terms.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Major credit cards for Core and Professional plans. Enterprise customers can pay by invoice with net-30 terms.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <SectionHeader
          tag="Pricing"
          title="Clear plans. No surprises."
          description="We believe transparency builds trust. If we're asking you to trust us with your security data, the least we can do is be upfront about what you get."
        />

        {/* Plan Cards */}
        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {[
            {
              name: "Core",
              price: "$1,199",
              period: "/month",
              highlight: false,
              cta: "Get started",
            },
            {
              name: "Professional",
              price: "$2,499",
              period: "/month",
              highlight: true,
              cta: "Book a demo",
            },
            {
              name: "Enterprise",
              price: "$3,999",
              period: "/month",
              highlight: false,
              cta: "Contact sales",
            },
          ].map((plan) => (
            <Card
              key={plan.name}
              hover={false}
              className={`flex flex-col items-center text-center ${plan.highlight ? "relative ring-2 ring-brand-600" : ""}`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-700 px-3 py-0.5 font-display text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50">
                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="text-brand-600">
                  <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900">
                {plan.price}
                <span className="text-base font-medium text-slate-400">{plan.period}</span>
              </p>
              <div className="mt-6 w-full">
                <Button
                  href="/contact"
                  variant={plan.highlight ? "primary" : "secondary"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto rounded-[16px] border border-slate-200/80 bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="px-6 py-4 text-left font-display text-sm font-bold text-slate-900">
                  Feature
                </th>
                <th className="px-6 py-4 text-center font-display text-sm font-bold text-slate-900">
                  Core
                </th>
                <th className="px-6 py-4 text-center font-display text-sm font-bold text-brand-700">
                  Professional
                </th>
                <th className="px-6 py-4 text-center font-display text-sm font-bold text-slate-900">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {featureSections.map((section) => (
                <>
                  <tr key={`section-${section.section}`} className="border-b border-slate-100 bg-slate-50/60">
                    <td colSpan={4} className="px-6 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-slate-400">
                      {section.section}
                    </td>
                  </tr>
                  {section.rows.map((row) => (
                    <tr key={row.feature} className="border-b border-slate-50">
                      <td className="px-6 py-3 font-body text-sm text-slate-700">
                        {row.feature}
                      </td>
                      <td className="px-6 py-3 text-center">
                        <CellValue value={row.core} />
                      </td>
                      <td className="px-6 py-3 text-center bg-brand-50/30">
                        <CellValue value={row.pro} />
                      </td>
                      <td className="px-6 py-3 text-center">
                        <CellValue value={row.enterprise} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
              {/* Hosting section */}
              <tr className="border-b border-slate-100 bg-slate-50/60">
                <td colSpan={4} className="px-6 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-slate-400">
                  Hosting &amp; Security
                </td>
              </tr>
              {/* Core + Professional hosting (same tier) */}
              <tr className="border-b border-slate-100 bg-brand-50/20">
                <td className="px-6 py-4 align-top font-body text-sm text-slate-700" rowSpan={1}>
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-600">Core &amp; Professional</span>
                </td>
                <td className="px-6 py-4 align-top" colSpan={3}>
                  <ul className="grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
                    {hostingCore.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-body text-xs leading-relaxed text-slate-600">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-brand-600">
                          <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
              {/* Enterprise hosting (elevated tier) */}
              <tr className="border-b border-slate-50 bg-slate-900">
                <td className="rounded-bl-lg px-6 py-4 align-top">
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-white">Enterprise</span>
                </td>
                <td className="rounded-br-lg px-6 py-4 align-top" colSpan={3}>
                  <p className="mb-2 font-body text-xs font-medium text-slate-300">Everything in Core &amp; Professional, plus:</p>
                  <ul className="grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
                    {hostingEnterprise.filter((_, i) => i > 0).map((item) => (
                      <li key={item} className="flex items-start gap-2 font-body text-xs leading-relaxed text-slate-300">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-brand-400">
                          <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-50/60">
        <SectionHeader tag="FAQ" title="Pricing questions" />
        <FAQ items={pricingFaq} />
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Not sure which plan fits?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Book a demo and we&apos;ll help you find the right plan based on
            your vendor volume and assessment needs.
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
