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
];

const demoExpectations = [
  "Live walkthrough of JinoXtreme CSA, ProvEye scanning, and AgentX",
  "Custom setup based on your industry and frameworks",
  "Answers to your specific questions — pricing, security, anything",
  "15 minutes, focused on your use case",
];

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left: Info */}
        <div>
          <span className="mb-4 inline-block rounded-full bg-brand-50 px-3.5 py-1 font-display text-xs font-semibold uppercase tracking-wider text-brand-700">
            Get started
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            See CheckFirst in action
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-600">
            Book a personalised demo with our team. We&apos;ll walk you through
            the platform, run a live assessment, and answer your questions.
          </p>

          {/* What to Expect */}
          <div className="mt-10">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-500">
              What to expect
            </h2>
            <ul className="mt-4 space-y-3">
              {demoExpectations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="mt-0.5 shrink-0 text-brand-600"
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
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Methods */}
          <div className="mt-12 space-y-6">
            {contactMethods.map((method) => (
              <div key={method.label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-brand-50 text-brand-600">
                  {method.icon}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-slate-900">
                    {method.label}
                  </p>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="font-body text-sm text-brand-700 transition-colors hover:text-brand-800"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="font-body text-sm text-slate-600">
                      {method.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <Card hover={false} className="p-8 lg:p-10">
          <ContactForm />
        </Card>
      </div>
    </Section>
  );
}
