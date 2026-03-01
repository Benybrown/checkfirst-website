import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "CheckFirst Pricing — Transparent Plans | Security Assessments",
  description:
    "Clear plans for AI security assessment software. Compare features across Starter, Professional, and Enterprise tiers.",
  alternates: {
    canonical: "/pricing",
  },
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

const featureRows = [
  { feature: "ProvEye scans", starter: "25/month", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "AI assessments", starter: "50/month", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Frameworks", starter: "15", pro: "45+", enterprise: "All + Custom" },
  { feature: "Suppliers", starter: "Up to 50", pro: "Up to 500", enterprise: "Unlimited" },
  { feature: "JinoXtreme CSA", starter: true, pro: true, enterprise: true },
  { feature: "Jino 360 Research", starter: true, pro: true, enterprise: true },
  { feature: "Smart Questionnaires", starter: false, pro: true, enterprise: true },
  { feature: "AgentX AI Assistant", starter: false, pro: true, enterprise: true },
  { feature: "CSA CAIQ Template", starter: true, pro: true, enterprise: true },
  { feature: "Risk Management", starter: true, pro: true, enterprise: true },
  { feature: "Task Management", starter: true, pro: true, enterprise: true },
  { feature: "SSO", starter: false, pro: true, enterprise: true },
  { feature: "SCIM Provisioning", starter: false, pro: false, enterprise: true },
  { feature: "Dedicated Instance", starter: false, pro: false, enterprise: true },
  { feature: "Custom Branding", starter: false, pro: true, enterprise: true },
  { feature: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated CSM" },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
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
      "Major credit cards for Starter and Professional plans. Enterprise customers can pay by invoice with net-30 terms.",
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
              name: "Starter",
              price: "Contact us",
              description: "For teams getting started with structured vendor risk management.",
              highlight: false,
              cta: "Get started",
            },
            {
              name: "Professional",
              price: "Contact us",
              description: "For growing security teams that need the full assessment engine.",
              highlight: true,
              cta: "Book a demo",
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For large organisations and managed service providers.",
              highlight: false,
              cta: "Contact sales",
            },
          ].map((plan) => (
            <Card
              key={plan.name}
              hover={false}
              className={`flex flex-col ${plan.highlight ? "relative ring-2 ring-brand-600" : ""}`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-700 px-3 py-0.5 font-display text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-1 font-body text-sm text-slate-500">{plan.description}</p>
              <p className="mt-6 font-display text-3xl font-extrabold tracking-tight text-slate-900">
                {plan.price}
              </p>
              <div className="mt-8">
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
                  Starter
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
              {featureRows.map((row) => (
                <tr key={row.feature} className="border-b border-slate-50">
                  <td className="px-6 py-3 font-body text-sm text-slate-700">
                    {row.feature}
                  </td>
                  <td className="px-6 py-3 text-center">
                    <CellValue value={row.starter} />
                  </td>
                  <td className="px-6 py-3 text-center bg-brand-50/30">
                    <CellValue value={row.pro} />
                  </td>
                  <td className="px-6 py-3 text-center">
                    <CellValue value={row.enterprise} />
                  </td>
                </tr>
              ))}
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
