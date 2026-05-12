import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { defaultOgImage, defaultTwitterImages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About CheckFirst — Making Security Trust Instant and Accessible",
  description:
    "CheckFirst helps companies remove friction from security assessments with AI-powered workflows for vendor risk review and trust sharing.",
  openGraph: {
    title: "About CheckFirst — Making Security Trust Instant and Accessible",
    description:
      "CheckFirst helps companies remove friction from security assessments with AI-powered workflows for vendor risk review and trust sharing.",
    url: "https://checkfirst.io/about",
    siteName: "CheckFirst",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CheckFirst — Making Security Trust Instant and Accessible",
    description:
      "CheckFirst helps companies remove friction from security assessments with AI-powered workflows for vendor risk review and trust sharing.",
    images: defaultTwitterImages,
  },
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "Transparency over gatekeeping",
    description:
      "Security information should be easy to share and easy to verify. We reject the old model where proving your security posture requires weeks of back-and-forth through email-attached spreadsheets.",
  },
  {
    title: "Access over exclusivity",
    description:
      "Enterprise-grade security assessment tools shouldn't require enterprise-grade budgets. Every plan gives real functionality — not a crippled demo designed to push you toward a call.",
  },
  {
    title: "AI as an amplifier, not a replacement",
    description:
      "Our AI exists to make your security team faster and more effective — not to replace human judgement. Every AI output is designed to be reviewed, verified, and overridden by your team.",
  },
  {
    title: "Automation over busywork",
    description:
      "Every feature we ship is measured against one question: does this save a security analyst time? If the answer is no, we don't build it.",
  },
];

const stats = [
  { value: "243", label: "CSA CCM controls assessed" },
  { value: "18", label: "Security domains covered" },
  { value: "45+", label: "Frameworks supported" },
  { value: "99.9%", label: "Platform uptime" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-canvas px-6 pt-16 pb-20 sm:pt-20 lg:px-8 lg:pt-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.9]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] h-[460px] w-[460px] rounded-full blur-3xl opacity-[0.16]"
          style={{ background: "radial-gradient(circle, var(--color-brand-400), transparent 62%)" }}
        />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6">About CheckFirst</span>
            <h1 className="font-display text-[30px] leading-[1.08] tracking-[-0.025em] text-ink-900 [text-wrap:balance] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[58px]">
              Security trust shouldn&apos;t{" "}
              <span className="italic text-ink-500">be this hard</span>
            </h1>
            <p className="mt-7 max-w-[60ch] font-body text-[17px] leading-[1.65] text-ink-500 sm:text-[18px]">
              We&apos;ve been on both sides of the security assessment table — as
              vendors drowning in questionnaires and as buyers waiting weeks for
              answers. We built CheckFirst because there had to be a better way.
            </p>
          </div>
        </div>
      </section>

      {/* Stats — editorial strip with hairlines */}
      <section className="border-y border-ink-200 bg-canvas-raised px-6 py-10 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-[1200px] divide-ink-200 gap-0 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-2 py-4 sm:py-2 sm:px-6 ${
                idx === 0 ? "sm:pl-0" : ""
              } ${idx === stats.length - 1 ? "sm:pr-0" : ""}`}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
                {stat.label}
              </span>
              <span className="font-display text-[40px] tabular-nums leading-none tracking-[-0.03em] text-ink-900 sm:text-[44px]">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            tag="Our mission"
            title="Make security trust instant, transparent, and accessible"
            align="left"
          />
          <div className="space-y-5 font-body text-base leading-relaxed text-ink-500">
            <p>
              The average enterprise works with hundreds of vendors, each one a
              potential entry point for security breaches, compliance failures,
              and operational disruptions. Yet most organisations still manage
              this risk with email threads and shared drives.
            </p>
            <p>
              CheckFirst brings structure to the chaos. JinoXtreme CSA does the
              compliance assessment, ProvEye scans infrastructure independently,
              Jino 360 researches across the web, and our workflow tools make
              sure nothing falls through the cracks. We designed it for the
              people who actually do this work: the security analysts, the
              compliance officers, the risk managers who are tired of
              context-switching between six different tools.
            </p>
            <p>
              We believe building trust between companies should be as easy as
              sharing a link. That means continuous monitoring, not annual
              check-ins. Automated discovery, not manual data entry. And giving
              security teams the confidence to say &quot;yes, we&apos;ve
              checked&quot; — and mean it.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-canvas-raised">
        <SectionHeader
          tag="What we believe"
          title="Our values"
          description="These aren't poster slogans. They're the decisions we make every day."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {values.map((value) => (
            <Card key={value.title}>
              <h3 className="font-display text-lg font-bold text-ink-900">
                {value.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow-dark mb-6 justify-center">Get started</span>
          <h2 className="font-display text-[34px] leading-[1.08] tracking-[-0.028em] text-white sm:text-[44px] lg:text-[52px]">
            Want to see CheckFirst in action?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-[17px] leading-[1.65] text-white/70">
            Book a demo and we&apos;ll show you how it works with your actual
            vendor list.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary" size="lg" className="!bg-white !text-ink-950 !ring-white hover:!bg-ink-100">
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
