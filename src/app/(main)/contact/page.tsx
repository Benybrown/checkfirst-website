import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book a Demo or Contact Us — CheckFirst",
  description:
    "See CheckFirst in action with a personalised demo. We'll walk you through assessments, ProvEye scanning, and AI capabilities.",
  alternates: {
    canonical: "/contact",
  },
};

const contactMethods = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
    label: "Email",
    value: "support@checkfirst.io",
    href: "mailto:support@checkfirst.io",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    label: "Response time",
    value: "Within 1 business day",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "International",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "LinkedIn",
    value: "Follow us",
    href: "https://www.linkedin.com/company/checkfirstsecurity/",
  },
];

const demoExpectations = [
  "Live walkthrough of JinoXtreme CSA, ProvEye scanning, and AgentX",
  "Custom setup based on your industry and frameworks",
  "Answers to your specific questions — pricing, security, anything",
  "15 minutes, focused on your use case",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero header strip */}
      <section className="relative overflow-hidden bg-canvas px-6 pt-16 pb-6 sm:pt-20 lg:px-8 lg:pt-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.9]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] h-[380px] w-[380px] rounded-full blur-3xl opacity-[0.14]"
          style={{ background: "radial-gradient(circle, var(--color-brand-400), transparent 62%)" }}
        />
        <div className="relative mx-auto max-w-[1200px]">
          <span className="eyebrow mb-6">Get started</span>
          <h1 className="font-display text-[30px] leading-[1.08] tracking-[-0.025em] text-ink-900 [text-wrap:balance] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[58px]">
            See CheckFirst in action
          </h1>
          <p className="mt-6 max-w-2xl font-body text-[17px] leading-[1.65] text-ink-500 sm:text-[18px]">
            Book a personalised demo with our team. We&apos;ll walk you through
            the platform, run a live assessment, and answer your questions.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left: Info */}
          <div>
            {/* What to Expect */}
            <div>
              <span className="eyebrow mb-5">What to expect</span>
              <ul className="space-y-3.5 border-t border-ink-200 pt-5">
                {demoExpectations.map((item) => (
                  <li key={item} className="flex items-start gap-3">
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
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-body text-[15px] leading-[1.55] text-ink-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Methods — editorial grid */}
            <div className="mt-12">
              <span className="eyebrow mb-5">Other ways to reach us</span>
              <div className="grid gap-px overflow-hidden rounded-[14px] border border-ink-200 bg-ink-200 sm:grid-cols-2">
                {contactMethods.map((method) => (
                  <div
                    key={method.label}
                    className="flex items-start gap-4 bg-canvas-raised p-5 transition-colors hover:bg-canvas"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-ink-200 bg-canvas text-ink-700">
                      {method.icon}
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
                        {method.label}
                      </p>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="mt-1 block font-body text-[14.5px] text-ink-900 transition-colors hover:text-brand-600"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-body text-[14.5px] text-ink-700">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-[18px] border border-ink-200 bg-canvas-raised p-7 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
