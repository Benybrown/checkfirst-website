import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { FAQ } from "@/components/FAQ";
import { PricingCards } from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "CheckFirst Pricing — Transparent Plans | Security Assessments",
  description:
    "Clear plans for AI security assessment software. Compare features across Starter, Professional, Scale, and Enterprise tiers.",
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

const aiBadge = (
  <span className="mr-1.5 inline-flex items-center gap-1 rounded-md bg-violet-50 px-2 py-0.5">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-violet-500">
      <path d="M9 2l1.5 3.5L14 7l-3.5 1.5L9 12l-1.5-3.5L4 7l3.5-1.5L9 2z"/>
      <path d="M18 8l1 2.5L21.5 12l-2.5 1-1 2.5-1-2.5L14.5 12l2.5-1L18 8z"/>
      <path d="M9 15l.75 1.75L11.5 17.5l-1.75.75L9 20l-.75-1.75L6.5 17.5l1.75-.75L9 15z"/>
    </svg>
    <span className="font-display text-[11px] font-bold uppercase tracking-wide text-violet-600">AI</span>
  </span>
);

const featureRows: { feature: string; starter: boolean | string; pro: boolean | string; scale: boolean | string; enterprise: boolean | string; ai?: boolean }[] = [
  // Limits
  { feature: "Vendors", starter: "Up to 10", pro: "Up to 35", scale: "Up to 100", enterprise: "Unlimited" },
  { feature: "Users", starter: "Up to 3", pro: "Up to 10", scale: "Unlimited", enterprise: "Unlimited" },
  { feature: "Templates", starter: "Up to 3", pro: "Up to 10", scale: "Unlimited", enterprise: "Unlimited" },
  // Tier A — All plans
  { feature: "Core Assessments", starter: true, pro: true, scale: true, enterprise: true },
  { feature: "Smart Questionnaires", starter: true, pro: true, scale: true, enterprise: true },
  { feature: "Security Ratings", starter: true, pro: true, scale: true, enterprise: true },
  { feature: "Dedicated Instance", starter: true, pro: true, scale: true, enterprise: true },
  { feature: "Onboarding", starter: true, pro: true, scale: true, enterprise: true },
  { feature: "LLM BYOK", starter: true, pro: true, scale: true, enterprise: true },
  { feature: "Jino Reports", starter: true, pro: true, scale: true, enterprise: true, ai: true },
  { feature: "Jino QA", starter: true, pro: true, scale: true, enterprise: true, ai: true },
  // Tier B — Professional+ or Scale+
  { feature: "Jino Docs", starter: "Add-on", pro: true, scale: true, enterprise: true, ai: true },
  { feature: "Jino Xtreme (Supplier)", starter: "Add-on", pro: "Add-on", scale: true, enterprise: true, ai: true },
  { feature: "Jino Xtreme (Web)", starter: "Add-on", pro: "Add-on", scale: true, enterprise: true, ai: true },
  { feature: "Unified Report", starter: "Add-on", pro: "Add-on", scale: true, enterprise: true, ai: true },
  { feature: "Task Management", starter: false, pro: false, scale: true, enterprise: true },
  { feature: "Custom Branding", starter: false, pro: false, scale: true, enterprise: true },
  { feature: "ProvEye Monitoring", starter: false, pro: true, scale: true, enterprise: true },
  // Tier C — Enterprise only
  { feature: "Custom Framework", starter: "Add-on", pro: "Add-on", scale: "Add-on", enterprise: true },
  { feature: "Trust Center", starter: false, pro: false, scale: false, enterprise: true },
  { feature: "SSO / SAML", starter: false, pro: false, scale: false, enterprise: true },
  { feature: "HIPAA Compliance", starter: false, pro: false, scale: false, enterprise: true },
  { feature: "White Label", starter: false, pro: false, scale: false, enterprise: true },
  // Support
  { feature: "Support", starter: "Email", pro: "Priority", scale: "Priority", enterprise: "Dedicated CSM" },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="font-body text-sm text-slate-700">{value}</span>;
  }
  return <span className="inline-flex justify-center">{value ? checkIcon : dashIcon}</span>;
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
      "Yes. All plans are billed annually. Enterprise customers can arrange custom billing terms.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Major credit cards for Starter, Professional, and Scale plans. Enterprise customers can pay by invoice with net-30 terms.",
  },
  {
    question: "What are add-ons?",
    answer:
      "Some advanced features like Jino Xtreme, Unified Report, and Custom Framework are available as paid add-ons for plans that don't include them by default. Contact us for add-on pricing.",
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

        {/* Plan Cards — client component with checkout modal */}
        <PricingCards />

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
                <th className="px-6 py-4 text-center font-display text-sm font-bold text-slate-900">
                  Professional
                </th>
                <th className="px-6 py-4 text-center font-display text-sm font-bold text-brand-700">
                  Scale
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
                    <span className="inline-flex items-center">
                      {row.ai && aiBadge}
                      {row.feature}
                    </span>
                  </td>
                  <td className={`px-6 py-3 text-center ${row.ai ? "bg-violet-50/40" : ""}`}>
                    <CellValue value={row.starter} />
                  </td>
                  <td className={`px-6 py-3 text-center ${row.ai ? "bg-violet-50/40" : ""}`}>
                    <CellValue value={row.pro} />
                  </td>
                  <td className={`px-6 py-3 text-center ${row.ai ? "bg-violet-50/40" : "bg-brand-50/30"}`}>
                    <CellValue value={row.scale} />
                  </td>
                  <td className={`px-6 py-3 text-center ${row.ai ? "bg-violet-50/40" : ""}`}>
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
