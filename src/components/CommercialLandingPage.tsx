import Link from "next/link";
import Script from "next/script";
import { type ReactNode } from "react";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { FAQ } from "@/components/FAQ";
import {
  buyerPages,
  resourceLinks,
  type CommercialPageContent,
  type LinkCard,
  type TextPair,
} from "@/lib/commercial-content";

function Pill({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white bg-white/75 px-3.5 py-2 shadow-[0_6px_18px_-12px_rgba(15,23,42,0.3),inset_0_1px_0_white]">
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-100 bg-gradient-to-b from-blue-50 to-white text-blue-500 shadow-[inset_0_1px_0_white]">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M12 3l7 3v5c0 4.5-2.8 8.6-7 10-4.2-1.4-7-5.5-7-10V6l7-3Z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      </span>
      <span className="font-mono text-xs font-medium tracking-[-0.04em] text-slate-500">{children}</span>
    </div>
  );
}

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function RouteVisual({ label }: { label: string }) {
  const rows = ["Intake", "Evidence", "Scan", "Review", "Decision"];

  return (
    <div className="rounded-[2.25rem] border border-white bg-white/72 p-5 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.45),inset_0_1px_0_white]">
      <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="flex items-center justify-between border-b border-slate-200/80 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <p className="font-mono text-xs uppercase tracking-[-0.04em] text-slate-400">{label}</p>
        </div>
        <div className="grid gap-4 p-6">
          {rows.map((item, i) => (
            <div
              key={item}
              className="grid grid-cols-[3rem_1fr_auto] items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-[inset_0_1px_0_white]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm text-blue-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-slate-700">{item}</span>
              <span className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
                <span className="block h-full rounded-full bg-blue-500" style={{ width: `${45 + i * 11}%` }} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoGrid({ items }: { items: TextPair[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title}>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-500 shadow-[inset_0_1px_0_white]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 3l7 3v5c0 4.5-2.8 8.6-7 10-4.2-1.4-7-5.5-7-10V6l7-3Z" />
              <path d="m9 12 2 2 4-5" />
            </svg>
          </div>
          <h3 className="font-display text-[22px] leading-[1.15] tracking-[-0.02em] text-ink-900">
            {item.title}
          </h3>
          <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-ink-500">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}

function LinkGrid({ items }: { items: LinkCard[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <SmartLink
          key={item.href}
          href={item.href}
          className="group rounded-[2rem] border border-white bg-white/72 p-6 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/90"
        >
          <h3 className="font-display text-[19px] leading-[1.2] tracking-[-0.02em] text-ink-900">{item.title}</h3>
          <p className="mt-3 font-body text-[14px] leading-[1.6] text-ink-500">{item.description}</p>
          <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-blue-600">
            Visit page
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5">
              <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </SmartLink>
      ))}
    </div>
  );
}

function CheckRow({ children }: { children: string }) {
  return (
    <div className="flex items-start gap-3 font-body text-[14.5px] leading-7 text-slate-700">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="mt-1 shrink-0 text-blue-500">
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <span>{children}</span>
    </div>
  );
}

function buildSchema(page: CommercialPageContent) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: page.metadataTitle,
        url: `https://checkfirst.io${page.path}`,
        description: page.metadataDescription,
        isPartOf: {
          "@type": "WebSite",
          name: "CheckFirst",
          url: "https://checkfirst.io",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "SoftwareApplication",
        name: "CheckFirst",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `https://checkfirst.io${page.path}`,
        description: page.metadataDescription,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };
}

export function CommercialLandingPage({ page }: { page: CommercialPageContent }) {
  return (
    <>
      <Script
        id={`${page.path.replaceAll("/", "-").replace(/^-/, "")}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(page)) }}
      />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Pill>{page.eyebrow.toUpperCase()}</Pill>
            <h1 className="mt-8 font-display text-[40px] leading-[1.04] tracking-[-0.04em] text-ink-900 md:text-[56px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl font-body text-[17px] leading-[1.7] text-ink-500 md:text-[18px]">
              {page.lead}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                {page.cta}
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                View pricing
              </Button>
            </div>
          </div>
          <RouteVisual label={page.eyebrow} />
        </div>
      </section>

      <Section>
        <SectionHeader tag="WHAT YOU CAN MANAGE" title={page.coverageTitle} description={page.coverageText} align="left" />
        <InfoGrid items={page.sections} />
      </Section>

      <Section className="bg-canvas-raised">
        <SectionHeader tag="AUDIT EVIDENCE" title={page.evidenceTitle} description={page.evidenceText} align="left" />
        <InfoGrid items={page.evidence} />
      </Section>

      <Section>
        <SectionHeader tag="WORKFLOW" title="How the workflow moves from intake to decision" />
        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {page.workflow.map((item) => (
            <Card key={`${item.step}-${item.title}`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 font-mono text-sm text-blue-600">
                {item.step}
              </span>
              <h3 className="mt-5 font-display text-[20px] leading-[1.2] tracking-[-0.02em] text-ink-900">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-ink-500">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-canvas-raised">
        <div className="grid items-start gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <SectionHeader tag="BEST FIT" title={page.buyerTitle} description={page.buyerText} align="left" />
          <div className="rounded-[2rem] border border-white bg-white/76 p-6 shadow-card backdrop-blur">
            <div className="grid gap-4">
              {page.buyerPoints.map((item) => (
                <CheckRow key={item}>{item}</CheckRow>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          tag="RELATED PAGES"
          title="Find the workflow that fits your vendor-risk program"
          description="Compare CheckFirst paths for TPRM software, SOC 2 and ISO 27001 audit evidence, vendor assessments, and managed TPRM support."
          align="left"
        />
        <LinkGrid items={buyerPages} />
      </Section>

      <Section className="bg-canvas-raised">
        <SectionHeader
          tag="GUIDES"
          title="Keep building your vendor-risk evidence plan"
          description="Use these related guides to compare TPRM software, vendor assessments, AI review, and program maturity."
          align="left"
        />
        <LinkGrid items={resourceLinks} />
      </Section>

      <Section id="faq">
        <SectionHeader tag="FAQ" title="Common questions" />
        <FAQ items={page.faqs} />
      </Section>

      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow-dark mb-6 justify-center">GET STARTED</span>
          <h2 className="font-display text-[34px] leading-[1.08] tracking-[-0.028em] text-white sm:text-[44px] lg:text-[56px]">
            Start with the vendors your auditor will ask about first.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-[17px] leading-[1.65] text-white/70">
            Build a clean evidence trail for SOC 2, ISO 27001, and broader third-party risk decisions without rebuilding every review in spreadsheets.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary" size="lg" className="!bg-white !text-ink-950 hover:!bg-ink-100">
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
