import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "About CheckFirst — Making Security Trust Instant and Accessible",
  description:
    "CheckFirst was founded to eliminate the friction in security assessments. Our AI-powered platform helps companies assess vendor risk and share their security posture in minutes.",
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
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full bg-brand-50 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-700">
            About CheckFirst
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Security trust shouldn&apos;t
            <br />
            <span className="text-brand-700">be this hard</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            We&apos;ve been on both sides of the security assessment table — as
            vendors drowning in questionnaires and as buyers waiting weeks for
            answers. We built CheckFirst because there had to be a better way.
          </p>
        </div>
      </Section>

      {/* Stats */}
      <section className="border-y border-slate-200/60 bg-slate-50/50 px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-extrabold tracking-tight text-brand-700">
                {stat.value}
              </p>
              <p className="mt-2 font-body text-sm text-slate-600">
                {stat.label}
              </p>
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
          <div className="space-y-5 font-body text-base leading-relaxed text-slate-600">
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
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="What we believe"
          title="Our values"
          description="These aren't poster slogans. They're the decisions we make every day."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {values.map((value) => (
            <Card key={value.title}>
              <h3 className="font-display text-lg font-bold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Want to see CheckFirst in action?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Book a demo and we&apos;ll show you how it works with your actual
            vendor list.
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
