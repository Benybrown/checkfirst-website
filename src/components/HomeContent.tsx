"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { translations, type Lang } from "@/lib/homepage-translations";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FAQ } from "@/components/FAQ";
import { Testimonial } from "@/components/Testimonial";
import { OrchestrationGrid } from "@/components/OrchestrationGrid";

function t(obj: Record<Lang, string>, lang: Lang) {
  return obj[lang];
}

export function HomeContent() {
  const { language: lang } = useLanguage();
  const tx = translations;

  const problemPoints = [
    { who: t(tx.problem.buyers, lang), pain: t(tx.problem.buyersPain, lang) },
    { who: t(tx.problem.vendors, lang), pain: t(tx.problem.vendorsPain, lang) },
    { who: t(tx.problem.securityTeams, lang), pain: t(tx.problem.securityTeamsPain, lang) },
    { who: t(tx.problem.deals, lang), pain: t(tx.problem.dealsPain, lang) },
  ];

  const metrics = [
    { value: "85%", label: t(tx.metrics.fasterAssessments, lang) },
    { value: "243", label: t(tx.metrics.csaControls, lang) },
    { value: "45+", label: t(tx.metrics.frameworksSupported, lang) },
    { value: "99.9%", label: t(tx.metrics.platformUptime, lang) },
  ];

  const buyerPages = [
    {
      href: "/assessments",
      title: "Vendor security assessment software",
      description:
        "Buyer-intent page for supplier assessment workflows, questionnaires, due diligence, and evidence review.",
    },
    {
      href: "/managed-tprm",
      title: "Managed TPRM services",
      description:
        "For teams that need outsourced third-party risk management support without building extra headcount.",
    },
    {
      href: "/ai-engine",
      title: "AI vendor risk assessment engine",
      description:
        "How CheckFirst uses AI for supplier due diligence, questionnaire analysis, and structured risk review.",
    },
    {
      href: "/tprm-software",
      title: "TPRM software overview",
      description:
        "Category page for buyers comparing third-party risk management platforms, workflows, and evaluation criteria.",
    },
  ];

  const survivorLinks = [
    {
      href: "/blog/best-tprm-tool-2026/",
      title: "Best TPRM Software in 2026",
      description: "Commercial comparison page for category buyers evaluating software options.",
    },
    {
      href: "/blog/vendor-security-assessment-guide-2026/",
      title: "Vendor Security Assessment Guide",
      description:
        "Process-level support page for teams improving assessment workflow and review quality.",
    },
    {
      href: "/blog/3rd-party-risk-management-program/",
      title: "Third-Party Risk Management Program Guide",
      description: "Operational guide for building a repeatable TPRM program around assessment findings.",
    },
    {
      href: "/blog/tprm-agentic-ai-assessment/",
      title: "AI Vendor Risk Assessment",
      description: "Canonical support page for AI in supplier due diligence and risk review.",
    },
  ];

  const capabilities = tx.capabilities.items.map((c) => ({
    name: typeof c.name === "string" ? c.name : t(c.name, lang),
    tag: t(c.tag, lang),
    description: t(c.description, lang),
  }));

  const platformModules = tx.platform.modules.map((m) => ({
    title: t(m.title, lang),
    description: t(m.description, lang),
  }));

  const howItWorksItems = tx.howItWorks.steps.map((s) => ({
    step: s.step,
    title: t(s.title, lang),
    description: t(s.description, lang),
  }));

  const testimonialItems = tx.testimonials.items.map((item) => ({
    quote: t(item.quote, lang),
    name: item.name,
    role: typeof item.role === "string" ? item.role : t(item.role, lang),
    company: item.company,
  }));

  const pricingPlans = tx.pricing.plans.map((p) => ({
    name: t(p.name, lang),
    price: t(p.price, lang),
    note: t(p.note, lang),
    highlight: p.highlight,
  }));

  const faqItems = tx.faq.items.map((item) => ({
    question: t(item.question, lang),
    answer: t(item.answer, lang),
  }));

  return (
    <>
      {/* ─────────────────────── HERO ─────────────────────── */}
      <section className="relative overflow-hidden bg-canvas px-6 pt-16 pb-24 sm:pt-20 lg:px-8 lg:pt-28 lg:pb-32">
        {/* Dot-grid backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.9]"
        />
        {/* Single off-axis brand glow, top-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl opacity-[0.18]"
          style={{
            background: "radial-gradient(circle, var(--color-brand-400), transparent 62%)",
          }}
        />
        {/* Hairline frame at bottom to suggest editorial page */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent"
        />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            {/* ── Left column: text ── */}
            <div>
              {/* Eyebrow with animated live dot */}
              <div className="eyebrow mb-6 animate-slide-up">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-brand-500/35 animate-signal" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-brand-600" />
                </span>
                <span>{t(tx.hero.badge, lang)}</span>
              </div>

              {/* H1 — SEO copy preserved exactly */}
              <h1 className="font-display text-[30px] leading-[1.08] tracking-[-0.025em] text-ink-900 [text-wrap:balance] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[58px]">
                <span className="block animate-slide-up animate-delay-100">
                  {lang === "en"
                    ? "TPRM software for faster vendor security assessments."
                    : t(tx.hero.titleLine1, lang)}
                </span>
                <span className="mt-1.5 block font-display italic text-ink-500 animate-slide-up animate-delay-200">
                  {lang === "en"
                    ? "AI-assisted due diligence and managed TPRM in one platform."
                    : t(tx.hero.titleLine2, lang)}
                </span>
              </h1>

              {/* Subhead */}
              <p className="mt-7 max-w-[56ch] font-body text-[16px] leading-[1.65] text-ink-500 sm:text-[17.5px] animate-slide-up animate-delay-300">
                {lang === "en"
                  ? "CheckFirst helps security, procurement, and compliance teams run vendor security assessments, supplier due diligence, and third-party risk management workflows without the spreadsheet bottleneck."
                  : t(tx.hero.description, lang)}
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center animate-slide-up animate-delay-400">
                <Button href="/contact" variant="primary" size="lg">
                  {t(tx.hero.ctaPrimary, lang)}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M4.5 3l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </Button>
                <Button href="/tprm-software" variant="secondary" size="lg">
                  Explore TPRM software
                </Button>
              </div>

              {/* Quick-path chips */}
              <div className="mt-10 flex flex-wrap gap-2 animate-fade-in animate-delay-500">
                {[
                  { href: "/assessments", label: "Vendor security assessment software" },
                  { href: "/tprm-software", label: "Third-party risk management software" },
                  { href: "/managed-tprm", label: "Outsourced TPRM services" },
                ].map((chip) => (
                  <Link
                    key={chip.href}
                    href={chip.href}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-canvas-raised px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-500 transition-all duration-200 hover:border-ink-900 hover:text-ink-900"
                  >
                    <span className="h-1 w-1 rounded-full bg-ink-300 transition-colors group-hover:bg-brand-500" />
                    {chip.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Right column: orchestration grid motif ── */}
            <div className="relative hidden lg:block animate-fade-in animate-delay-300">
              {/* Framed card with motif */}
              <div className="relative aspect-[5/4] w-full rounded-[14px] border border-ink-200 bg-canvas-raised p-5 shadow-card">
                {/* Card header with mono labels */}
                <div className="mb-4 flex items-center justify-between border-b border-ink-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2 items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-brand-500/35 animate-signal" />
                      <span className="relative h-1 w-1 rounded-full bg-brand-600" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
                      Assessment Engine · Live
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">
                    v2.4
                  </span>
                </div>

                <OrchestrationGrid variant="light" />

                {/* Footer labels */}
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-ink-100 pt-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-400">
                      Controls
                    </div>
                    <div className="mt-1 font-display text-[22px] tabular-nums tracking-[-0.02em] text-ink-900">
                      243
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-400">
                      Frameworks
                    </div>
                    <div className="mt-1 font-display text-[22px] tabular-nums tracking-[-0.02em] text-ink-900">
                      45+
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-400">
                      Faster
                    </div>
                    <div className="mt-1 font-display text-[22px] tabular-nums tracking-[-0.02em] text-brand-600">
                      85%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── METRICS BAR ─────────────────────── */}
      <section className="border-y border-ink-200 bg-canvas-raised px-6 py-10 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-[1200px] divide-ink-200 gap-0 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {metrics.map((m, idx) => (
            <div
              key={m.label}
              className={`flex flex-col gap-2 py-4 sm:py-2 sm:px-6 ${
                idx === 0 ? "sm:pl-0" : ""
              } ${idx === metrics.length - 1 ? "sm:pr-0" : ""}`}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
                {m.label}
              </span>
              <span className="font-display text-[40px] tabular-nums leading-none tracking-[-0.03em] text-ink-900 sm:text-[44px]">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────── COMMERCIAL INTENT STRIP ─────────────────────── */}
      <section className="border-b border-ink-200 bg-canvas px-6 py-6 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-500">
          <span className="eyebrow">Evaluation paths</span>
          <Link
            href="/tprm-software"
            className="font-body text-[13.5px] text-ink-700 transition-colors hover:text-brand-600"
          >
            TPRM software
          </Link>
          <span className="text-ink-200">·</span>
          <Link
            href="/assessments"
            className="font-body text-[13.5px] text-ink-700 transition-colors hover:text-brand-600"
          >
            Vendor security assessment software
          </Link>
          <span className="text-ink-200">·</span>
          <Link
            href="/managed-tprm"
            className="font-body text-[13.5px] text-ink-700 transition-colors hover:text-brand-600"
          >
            Managed TPRM services
          </Link>
          <span className="text-ink-200">·</span>
          <Link
            href="/ai-engine"
            className="font-body text-[13.5px] text-ink-700 transition-colors hover:text-brand-600"
          >
            AI vendor risk assessment
          </Link>
        </div>
      </section>

      {/* ─────────────────────── THE PROBLEM ─────────────────────── */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <span className="eyebrow mb-6">{t(tx.problem.tag, lang)}</span>
            <h2 className="font-display text-[32px] leading-[1.08] tracking-[-0.028em] text-ink-900 sm:text-[40px] lg:text-[48px]">
              {t(tx.problem.title, lang)}
            </h2>
            <p className="mt-6 max-w-md font-body text-[16px] leading-[1.7] text-ink-500">
              <strong className="font-display italic text-ink-900">
                {t(tx.problem.conclusion, lang)}
              </strong>{" "}
              {t(tx.problem.conclusionBody, lang)}
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[14px] border border-ink-200 bg-ink-200 sm:grid-cols-2">
            {problemPoints.map((p) => (
              <div
                key={p.who}
                className="bg-canvas-raised p-7 transition-colors hover:bg-canvas"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-px w-6 bg-brand-500" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-600">
                    Pain
                  </span>
                </div>
                <p className="font-body text-[15.5px] leading-[1.6] text-ink-700">
                  <span className="font-display text-[18px] font-medium text-ink-900">
                    {p.who}
                  </span>{" "}
                  <span className="block mt-1.5 text-ink-500">{p.pain}.</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────────────── CORE CAPABILITIES — BRAND MOMENT (DARK) ─────────────────────── */}
      <Section dark>
        <div className="mb-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <span className="eyebrow eyebrow-dark mb-6">
              {t(tx.capabilities.tag, lang)}
            </span>
            <h2 className="font-display text-[32px] leading-[1.08] tracking-[-0.028em] text-white sm:text-[40px] lg:text-[52px]">
              {t(tx.capabilities.title, lang)}
            </h2>
          </div>
          <p className="max-w-md font-body text-[17px] leading-[1.7] text-white/65">
            {t(tx.capabilities.description, lang)}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, idx) => (
            <Card
              key={c.name}
              variant="data"
              className="flex h-full flex-col"
            >
              {/* Index + tag row */}
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                  {String(idx + 1).padStart(2, "0")} · {c.tag}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-brand-300"
                >
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="font-display text-[22px] leading-[1.15] tracking-[-0.02em] text-white">
                {c.name}
              </h3>
              <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-white/65">
                {c.description}
              </p>
              <div className="mt-auto pt-6">
                <div className="h-px w-full bg-gradient-to-r from-white/15 via-brand-400/30 to-transparent" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─────────────────────── PLATFORM MODULES ─────────────────────── */}
      <Section>
        <SectionHeader
          tag={t(tx.platform.tag, lang)}
          title={t(tx.platform.title, lang)}
          align="left"
        />
        <div className="grid gap-px overflow-hidden rounded-[14px] border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
          {platformModules.map((m, idx) => (
            <div
              key={m.title}
              className="group relative bg-canvas-raised p-7 transition-colors hover:bg-canvas"
            >
              <span className="mb-5 flex h-8 w-8 items-center justify-center rounded-[8px] border border-ink-200 bg-canvas font-mono text-[11px] text-ink-500 transition-colors group-hover:border-ink-900 group-hover:text-ink-900">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-[20px] leading-[1.2] tracking-[-0.02em] text-ink-900">
                {m.title}
              </h3>
              <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-ink-500">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────── HOW IT WORKS ─────────────────────── */}
      <Section id="how-it-works" className="bg-canvas-raised">
        <SectionHeader
          tag={t(tx.howItWorks.tag, lang)}
          title={t(tx.howItWorks.title, lang)}
        />
        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Hairline connector — desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[6%] right-[6%] top-[26px] hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block"
          />
          {howItWorksItems.map((item, idx) => (
            <div key={item.step} className="relative">
              <div className="mb-5 flex items-center justify-between">
                <span className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full border border-ink-200 bg-canvas font-mono text-[13px] text-ink-700">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {idx < howItWorksItems.length - 1 && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-300 lg:hidden">
                    Next →
                  </span>
                )}
              </div>
              <h3 className="font-display text-[20px] leading-[1.2] tracking-[-0.02em] text-ink-900">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xs font-body text-[14.5px] leading-[1.65] text-ink-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────── TESTIMONIALS ─────────────────────── */}
      <Section>
        <SectionHeader
          tag={t(tx.testimonials.tag, lang)}
          title={t(tx.testimonials.title, lang)}
          align="left"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialItems.map((item) => (
            <Testimonial key={item.name} {...item} />
          ))}
        </div>
      </Section>

      {/* ─────────────────────── PRICING TEASER ─────────────────────── */}
      <Section className="bg-canvas-raised">
        <SectionHeader
          tag={t(tx.pricing.tag, lang)}
          title={t(tx.pricing.title, lang)}
          description={t(tx.pricing.description, lang)}
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[14px] border p-7 transition-all duration-200 ${
                plan.highlight
                  ? "border-ink-900 bg-ink-950 text-white"
                  : "border-ink-200 bg-canvas-raised hover:border-ink-900"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-2.5 left-7 inline-flex items-center gap-1.5 rounded-full border border-brand-400/40 bg-ink-900 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-300">
                  <span className="h-1 w-1 rounded-full bg-brand-400 animate-signal" />
                  {t(tx.pricing.mostPopular, lang)}
                </span>
              )}
              <h3
                className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
                  plan.highlight ? "text-white/60" : "text-ink-400"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-4 font-display text-[40px] tabular-nums leading-none tracking-[-0.03em] ${
                  plan.highlight ? "text-white" : "text-ink-900"
                }`}
              >
                {plan.price}
              </p>
              <p
                className={`mt-2 font-body text-[13.5px] ${
                  plan.highlight ? "text-white/60" : "text-ink-500"
                }`}
              >
                {plan.note}
              </p>
              <div className="mt-7">
                <Button
                  href="/pricing"
                  variant={plan.highlight ? "ghost-dark" : "secondary"}
                  className="w-full"
                >
                  {t(tx.pricing.seePlan, lang)} {plan.name} {t(tx.pricing.plan, lang)}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────── BUYER PAGES ─────────────────────── */}
      <Section>
        <SectionHeader
          tag="Explore the platform"
          title="Choose the buying path that fits your TPRM team"
          description="Commercial pages for software buyers, managed-service buyers, and teams evaluating AI-led vendor review."
          align="left"
        />
        <div className="grid gap-px overflow-hidden rounded-[14px] border border-ink-200 bg-ink-200 md:grid-cols-2 xl:grid-cols-4">
          {buyerPages.map((page, idx) => (
            <Link
              key={page.href}
              href={page.href}
              className="group relative flex flex-col bg-canvas-raised p-7 transition-colors hover:bg-canvas"
            >
              <span className="mb-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
                {String(idx + 1).padStart(2, "0")} · Page
              </span>
              <h3 className="font-display text-[19px] leading-[1.2] tracking-[-0.02em] text-ink-900">
                {page.title}
              </h3>
              <p className="mt-3 flex-1 font-body text-[14px] leading-[1.6] text-ink-500">
                {page.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-900">
                Visit page
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path
                    d="M4.5 3l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ─────────────────────── CANONICAL RESOURCES ─────────────────────── */}
      <Section className="bg-canvas-raised">
        <SectionHeader
          tag="Learn more"
          title="Canonical resources that support the core commercial pages"
          description="Internal links to the survivor blog assets that reinforce category, process, and AI intent."
          align="left"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {survivorLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-start gap-5 rounded-[14px] border border-ink-200 bg-canvas p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-900"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
                Article
              </span>
              <div className="flex-1">
                <h3 className="font-display text-[19px] leading-[1.2] tracking-[-0.02em] text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.6] text-ink-500">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-900">
                  Read article
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M4.5 3l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ─────────────────────── FAQ ─────────────────────── */}
      <Section id="faq">
        <SectionHeader
          tag={t(tx.faq.tag, lang)}
          title={t(tx.faq.title, lang)}
          description={t(tx.faq.description, lang)}
        />
        <FAQ items={faqItems} />
      </Section>

      {/* ─────────────────────── FINAL CTA ─────────────────────── */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow-dark mb-6 justify-center">
            Get started
          </span>
          <h2 className="font-display text-[34px] leading-[1.08] tracking-[-0.028em] text-white sm:text-[44px] lg:text-[56px]">
            {t(tx.cta.title, lang)}
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-[17px] leading-[1.65] text-white/70">
            {t(tx.cta.description, lang)}
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary" size="lg" className="!bg-white !text-ink-950 !ring-white hover:!bg-ink-100">
              {t(tx.cta.ctaPrimary, lang)}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M4.5 3l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
            <Button href="/pricing" variant="ghost-dark" size="lg">
              {t(tx.cta.ctaSecondary, lang)}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
