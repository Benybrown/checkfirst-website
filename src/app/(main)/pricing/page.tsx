import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { FAQ } from "@/components/FAQ";
import { PricingCards } from "@/components/PricingCards";
import { defaultOgImage, defaultTwitterImages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CheckFirst Pricing — Transparent Plans | Security Assessments",
  description:
    "Clear plans for AI security assessment software. Compare features across Starter, Professional, Scale, and Enterprise tiers.",
  openGraph: {
    title: "CheckFirst Pricing — Transparent Plans | Security Assessments",
    description:
      "Clear plans for AI security assessment software. Compare features across Starter, Professional, Scale, and Enterprise tiers.",
    url: "https://checkfirst.io/pricing",
    siteName: "CheckFirst",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckFirst Pricing — Transparent Plans | Security Assessments",
    description:
      "Clear plans for AI security assessment software. Compare features across Starter, Professional, Scale, and Enterprise tiers.",
    images: defaultTwitterImages,
  },
  alternates: {
    canonical: "/pricing",
  },
};

const checkIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    className="shrink-0 text-brand-600"
  >
    <path
      d="M3.5 8.5L6.5 11.5L12.5 4.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const dashIcon = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 16 16"
    fill="none"
    className="shrink-0 text-ink-300"
  >
    <path d="M4 8h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const aiBadge = (
  <span className="mr-2 inline-flex items-center gap-1 rounded-[4px] border border-brand-500/30 bg-brand-50/70 px-1.5 py-0.5">
    <span className="h-1 w-1 rounded-full bg-brand-500 animate-signal" />
    <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-brand-700">
      AI
    </span>
  </span>
);

const featureRows: {
  feature: string;
  starter: boolean | string;
  pro: boolean | string;
  scale: boolean | string;
  enterprise: boolean | string;
  ai?: boolean;
}[] = [
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
  // Tier B
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
    return (
      <span className="font-body text-[13px] text-ink-700">
        {value}
      </span>
    );
  }
  return (
    <span className="inline-flex justify-center">
      {value ? checkIcon : dashIcon}
    </span>
  );
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
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <span className="eyebrow mb-6 justify-center">Pricing</span>
          <h1 className="font-display text-[32px] leading-[1.08] tracking-[-0.028em] text-ink-900 sm:text-[40px] lg:text-[52px]">
            Clear plans. No surprises.
          </h1>
          <p className="mt-5 text-[17px] leading-[1.65] text-ink-500 sm:text-[18px]">
            We believe transparency builds trust. If we&apos;re asking you to trust us with your security data, the least we can do is be upfront about what you get.
          </p>
        </div>

        <PricingCards />

        {/* Feature Comparison Table — editorial, hairline-driven */}
        <div className="mt-6 overflow-x-auto rounded-[14px] border border-ink-200 bg-canvas-raised">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-canvas-raised">
              <tr className="border-b border-ink-200">
                <th className="px-6 py-5 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                  Feature
                </th>
                <th className="px-6 py-5 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                  Starter
                </th>
                <th className="px-6 py-5 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                  Professional
                </th>
                <th className="bg-ink-950 px-6 py-5 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-brand-300">
                  Scale
                </th>
                <th className="px-6 py-5 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-ink-100 last:border-0 transition-colors hover:bg-canvas"
                >
                  <td className="px-6 py-4 font-body text-[14px] text-ink-800">
                    <span className="inline-flex items-center">
                      {row.ai && aiBadge}
                      {row.feature}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CellValue value={row.starter} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CellValue value={row.pro} />
                  </td>
                  <td className="bg-ink-950/[0.02] px-6 py-4 text-center">
                    <CellValue value={row.scale} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CellValue value={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-canvas-raised">
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <span className="eyebrow mb-6 justify-center">FAQ</span>
          <h2 className="font-display text-[32px] leading-[1.08] tracking-[-0.028em] text-ink-900 sm:text-[40px] lg:text-[52px]">
            Pricing questions
          </h2>
        </div>
        <FAQ items={pricingFaq} />
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow-dark mb-6 justify-center">
            Get started
          </span>
          <h2 className="font-display text-[34px] leading-[1.08] tracking-[-0.028em] text-white sm:text-[44px] lg:text-[52px]">
            Not sure which plan fits?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-[17px] leading-[1.65] text-white/70">
            Book a demo and we&apos;ll help you find the right plan based on
            your vendor volume and assessment needs.
          </p>
          <div className="mt-10">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="!bg-white !text-ink-950 !ring-white hover:!bg-ink-100"
            >
              Book a demo
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M4.5 3l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
