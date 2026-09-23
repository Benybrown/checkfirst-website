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
    <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 shadow-card">
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/25 bg-gradient-to-b from-blue-50 to-surface text-accent shadow-card">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M12 3l7 3v5c0 4.5-2.8 8.6-7 10-4.2-1.4-7-5.5-7-10V6l7-3Z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      </span>
      <span className="font-mono text-xs font-medium tracking-[-0.04em] text-muted">{children}</span>
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
    <div className="rounded-lg border border-line bg-surface p-5 shadow-card">
      <div className="overflow-hidden rounded-lg border border-line bg-gradient-to-b from-surface to-surface-high">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <p className="font-mono text-xs uppercase tracking-[-0.04em] text-muted">{label}</p>
        </div>
        <div className="grid gap-4 p-6">
          {rows.map((item, i) => (
            <div
              key={item}
              className="grid grid-cols-[2rem_minmax(0,1fr)_2rem] sm:grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-2 sm:gap-4 rounded-lg border border-line bg-surface p-4 shadow-card"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-foreground">{item}</span>
              <span className="h-2 w-8 sm:w-24 overflow-hidden rounded-full bg-surface-high">
                <span className="block h-full rounded-full bg-accent/100" style={{ width: `${45 + i * 11}%` }} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroProductVisual({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="rounded-lg border border-line bg-surface p-3 shadow-card sm:p-5">
      <div className="overflow-hidden rounded-lg border border-line bg-gradient-to-b from-surface to-surface-high">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <p className="font-mono text-xs uppercase tracking-[-0.04em] text-muted">{label}</p>
        </div>
        <div className="relative aspect-[16/11] bg-surface-high">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="h-full w-full object-cover object-left-top" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/60" />
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
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent shadow-card">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 3l7 3v5c0 4.5-2.8 8.6-7 10-4.2-1.4-7-5.5-7-10V6l7-3Z" />
              <path d="m9 12 2 2 4-5" />
            </svg>
          </div>
          <h3 className="font-display text-[22px] leading-[1.15] tracking-[-0.02em] text-foreground">
            {item.title}
          </h3>
          <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-muted">{item.description}</p>
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
          className="group rounded-lg border border-line bg-surface p-6 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:bg-surface"
        >
          <h3 className="font-display text-[19px] leading-[1.2] tracking-[-0.02em] text-foreground">{item.title}</h3>
          <p className="mt-3 font-body text-[14px] leading-[1.6] text-muted">{item.description}</p>
          <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
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
    <div className="flex items-start gap-3 font-body text-[14.5px] leading-7 text-foreground">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="mt-1 shrink-0 text-accent">
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
  const secondaryCta = page.secondaryCta ?? { href: "/pricing", label: "View pricing" };

  return (
    <>
      <Script
        id={`${page.path.replaceAll("/", "-").replace(/^-/, "")}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(page)) }}
      />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Pill>{page.eyebrow.toUpperCase()}</Pill>
            <h1 className="mt-8 font-display text-[40px] leading-[1.04] tracking-[-0.04em] text-foreground md:text-[56px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl font-body text-[17px] leading-[1.7] text-muted md:text-[18px]">
              {page.lead}
            </p>
            {page.heroBullets && page.heroBullets.length > 0 ? (
              <ul className="mt-8 grid max-w-xl gap-3">
                {page.heroBullets.map((bullet) => (
                  <li key={bullet}>
                    <CheckRow>{bullet}</CheckRow>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                {page.cta}
              </Button>
              <Button href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            </div>
          </div>
          {page.heroImage ? (
            <HeroProductVisual src={page.heroImage.src} alt={page.heroImage.alt} label={page.eyebrow} />
          ) : (
            <RouteVisual label={page.eyebrow} />
          )}
        </div>
      </section>

      {page.proofMetrics && page.proofMetrics.length > 0 ? (
        <section className="vox-color-metrics">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-3">
            {page.proofMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-line bg-surface px-6 py-5 shadow-card backdrop-blur"
              >
                <p className="font-display text-[34px] leading-none tracking-[-0.04em] text-foreground">
                  {metric.value}
                </p>
                <p className="mt-3 font-body text-[14px] leading-[1.5] text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {page.definition ? (
        <Section>
          <SectionHeader
            tag="CATEGORY"
            title={page.definition.title}
            description={page.definition.description}
            align="left"
          />
          {page.definition.comparison && page.definition.comparison.length > 0 ? (
            <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-card backdrop-blur">
              <div className="hidden grid-cols-[0.9fr_1.2fr_1.2fr] gap-4 border-b border-line bg-surface-high px-6 py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted md:grid">
                <span>Aspect</span>
                <span>Manual</span>
                <span>Automated</span>
              </div>
              <div className="divide-y divide-slate-200/80">
                {page.definition.comparison.map((row) => (
                  <div
                    key={row.aspect}
                    className="grid gap-3 px-6 py-5 md:grid-cols-[0.9fr_1.2fr_1.2fr] md:items-start md:gap-4"
                  >
                    <p className="font-display text-[17px] tracking-[-0.02em] text-foreground">{row.aspect}</p>
                    <div>
                      <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted md:hidden">
                        Manual
                      </p>
                      <p className="font-body text-[14.5px] leading-[1.6] text-muted">{row.manual}</p>
                    </div>
                    <div>
                      <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted md:hidden">
                        Automated
                      </p>
                      <p className="font-body text-[14.5px] leading-[1.6] text-foreground">{row.automated}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {page.definition.links && page.definition.links.length > 0 ? (
            <div className="mt-8">
              <LinkGrid items={page.definition.links} />
            </div>
          ) : null}
        </Section>
      ) : null}

      {page.differentiation ? (
        <Section tone="indigo">
          <SectionHeader
            tag="DIFFERENTIATION"
            title={page.differentiation.title}
            description={page.differentiation.description}
            align="left"
          />
          <InfoGrid items={page.differentiation.points} />
        </Section>
      ) : null}

      <Section>
        <SectionHeader tag="WHAT YOU CAN MANAGE" title={page.coverageTitle} description={page.coverageText} align="left" />
        <InfoGrid items={page.sections} />
      </Section>

      <Section tone="blue">
        <SectionHeader tag="AUDIT EVIDENCE" title={page.evidenceTitle} description={page.evidenceText} align="left" />
        <InfoGrid items={page.evidence} />
      </Section>

      <Section id="workflow">
        <SectionHeader tag="WORKFLOW" title="How the workflow moves from intake to decision" />
        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {page.workflow.map((item) => (
            <Card key={`${item.step}-${item.title}`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 font-mono text-sm text-accent">
                {item.step}
              </span>
              <h3 className="mt-5 font-display text-[20px] leading-[1.2] tracking-[-0.02em] text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="cyan">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <SectionHeader tag="BEST FIT" title={page.buyerTitle} description={page.buyerText} align="left" />
          <div className="rounded-lg border border-line bg-surface p-6 shadow-card backdrop-blur">
            <div className="grid gap-4">
              {page.buyerPoints.map((item) => (
                <CheckRow key={item}>{item}</CheckRow>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {page.internalLinks && page.internalLinks.length > 0 ? (
        <Section>
          <SectionHeader
            tag="INTERNAL LINKS"
            title="Continue into related CheckFirst workflows"
            description="Jump from questionnaire automation into AI review, full TPRM, audit-use cases, pricing, or a demo."
            align="left"
          />
          <LinkGrid items={page.internalLinks} />
        </Section>
      ) : null}

      <Section>
        <SectionHeader
          tag="RELATED PAGES"
          title="Find the workflow that fits your vendor-risk program"
          description="Compare CheckFirst paths for TPRM software, SOC 2 and ISO 27001 audit evidence, vendor assessments, and managed TPRM support."
          align="left"
        />
        <LinkGrid items={buyerPages} />
      </Section>

      <Section tone="indigo">
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

      <Section dark tone="finale">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow-dark mb-6 justify-center">GET STARTED</span>
          <h2 className="font-display text-[34px] leading-[1.08] tracking-[-0.028em] text-white sm:text-[44px] lg:text-[56px]">
            Start with the vendors your auditor will ask about first.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-[17px] leading-[1.65] text-white/70">
            Build a clean evidence trail for SOC 2, ISO 27001, and broader third-party risk decisions without rebuilding every review in spreadsheets.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary" size="lg" className="">
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
