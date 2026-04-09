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
      description: "Buyer-intent page for supplier assessment workflows, questionnaires, due diligence, and evidence review.",
    },
    {
      href: "/managed-tprm",
      title: "Managed TPRM services",
      description: "For teams that need outsourced third-party risk management support without building extra headcount.",
    },
    {
      href: "/ai-engine",
      title: "AI vendor risk assessment engine",
      description: "How CheckFirst uses AI for supplier due diligence, questionnaire analysis, and structured risk review.",
    },
    {
      href: "/tprm-software",
      title: "TPRM software overview",
      description: "Category page for buyers comparing third-party risk management platforms, workflows, and evaluation criteria.",
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
      description: "Process-level support page for teams improving assessment workflow and review quality.",
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
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-slate-900 px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-brand-600/10 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-brand-400/8 blur-[100px]"
        />

        <div className="relative mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full bg-brand-900/40 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-brand-300">
              {t(tx.hero.badge, lang)}
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[64px] lg:leading-[1.08]">
              {lang === "en" ? "TPRM software for faster vendor security assessments." : t(tx.hero.titleLine1, lang)}
              <br />
              <span className="text-brand-400">
                {lang === "en" ? "AI-assisted due diligence and managed TPRM in one platform." : t(tx.hero.titleLine2, lang)}
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">
              {lang === "en"
                ? "CheckFirst helps security, procurement, and compliance teams run vendor security assessments, supplier due diligence, and third-party risk management workflows without the spreadsheet bottleneck."
                : t(tx.hero.description, lang)}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                {t(tx.hero.ctaPrimary, lang)}
              </Button>
              <Button href="/tprm-software" variant="secondary" size="lg">
                Explore TPRM software
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400">
              <Link href="/assessments" className="rounded-full bg-white/5 px-3 py-1 transition hover:bg-white/10">
                Vendor security assessment software
              </Link>
              <Link href="/tprm-software" className="rounded-full bg-white/5 px-3 py-1 transition hover:bg-white/10">
                Third-party risk management software
              </Link>
              <Link href="/managed-tprm" className="rounded-full bg-white/5 px-3 py-1 transition hover:bg-white/10">
                Outsourced TPRM services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics Bar ── */}
      <section className="border-b border-slate-200/60 bg-slate-50/50 px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-display text-3xl font-extrabold tracking-tight text-brand-700">
                {m.value}
              </p>
              <p className="mt-1 font-body text-sm text-slate-600">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Commercial intent strip ── */}
      <section className="border-b border-slate-200/60 bg-white px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
          <span className="font-display font-semibold text-slate-900">Popular evaluation paths:</span>
          <Link href="/tprm-software" className="rounded-full bg-slate-100 px-3 py-1 transition hover:bg-slate-200">
            TPRM software
          </Link>
          <Link href="/assessments" className="rounded-full bg-slate-100 px-3 py-1 transition hover:bg-slate-200">
            Vendor security assessment software
          </Link>
          <Link href="/managed-tprm" className="rounded-full bg-slate-100 px-3 py-1 transition hover:bg-slate-200">
            Managed TPRM services
          </Link>
          <Link href="/ai-engine" className="rounded-full bg-slate-100 px-3 py-1 transition hover:bg-slate-200">
            AI vendor risk assessment
          </Link>
        </div>
      </section>

      {/* ── The Problem ── */}
      <Section>
        <SectionHeader
          tag={t(tx.problem.tag, lang)}
          title={t(tx.problem.title, lang)}
          description=""
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {problemPoints.map((p) => (
            <Card key={p.who}>
              <p className="font-body text-base leading-relaxed text-slate-700">
                <span className="font-display font-bold text-slate-900">
                  {p.who}
                </span>{" "}
                {p.pain}.
              </p>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center font-body text-base leading-relaxed text-slate-600">
          <strong className="font-display text-slate-900">
            {t(tx.problem.conclusion, lang)}
          </strong>{" "}
          {t(tx.problem.conclusionBody, lang)}
        </p>
      </Section>

      {/* ── Core Capabilities ── */}
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag={t(tx.capabilities.tag, lang)}
          title={t(tx.capabilities.title, lang)}
          description={t(tx.capabilities.description, lang)}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <Card key={c.name}>
              <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-0.5 font-display text-xs font-semibold text-brand-700">
                {c.tag}
              </span>
              <h3 className="font-display text-lg font-bold text-slate-900">
                {c.name}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                {c.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── Platform Modules ── */}
      <Section>
        <SectionHeader
          tag={t(tx.platform.tag, lang)}
          title={t(tx.platform.title, lang)}
          description=""
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platformModules.map((m) => (
            <div key={m.title} className="rounded-[16px] border border-slate-200/80 bg-white p-6">
              <h3 className="font-display text-base font-bold text-slate-900">
                {m.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How It Works ── */}
      <Section id="how-it-works" className="bg-slate-50/60">
        <SectionHeader
          tag={t(tx.howItWorks.tag, lang)}
          title={t(tx.howItWorks.title, lang)}
          description=""
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksItems.map((item) => (
            <div key={item.step}>
              <span aria-hidden="true" className="font-display text-5xl font-extrabold text-brand-600">
                {item.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section>
        <SectionHeader
          tag={t(tx.testimonials.tag, lang)}
          title={t(tx.testimonials.title, lang)}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialItems.map((item) => (
            <Testimonial key={item.name} {...item} />
          ))}
        </div>
      </Section>

      {/* ── Pricing Teaser ── */}
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag={t(tx.pricing.tag, lang)}
          title={t(tx.pricing.title, lang)}
          description={t(tx.pricing.description, lang)}
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlight ? "ring-2 ring-brand-600 relative" : ""}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-700 px-3 py-0.5 font-display text-xs font-semibold text-white">
                  {t(tx.pricing.mostPopular, lang)}
                </span>
              )}
              <h3 className="font-display text-base font-bold text-slate-900">
                {plan.name}
              </h3>
              <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900">
                {plan.price}
              </p>
              <p className="mt-1 font-body text-sm text-slate-500">
                {plan.note}
              </p>
              <div className="mt-6">
                <Button
                  href="/pricing"
                  variant={plan.highlight ? "primary" : "secondary"}
                  className="w-full"
                >
                  {t(tx.pricing.seePlan, lang)} {plan.name} {t(tx.pricing.plan, lang)}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── Buyer Pages ── */}
      <Section>
        <SectionHeader
          tag="Explore the platform"
          title="Choose the buying path that fits your TPRM team"
          description="Commercial pages for software buyers, managed-service buyers, and teams evaluating AI-led vendor review."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {buyerPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-[16px] border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">{page.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{page.description}</p>
              <span className="mt-4 inline-flex font-display text-sm font-semibold text-brand-700">
                Visit page →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Canonical Resources ── */}
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag="Learn more"
          title="Canonical resources that support the core commercial pages"
          description="Internal links to the survivor blog assets that reinforce category, process, and AI intent."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {survivorLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[16px] border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{item.description}</p>
              <span className="mt-4 inline-flex font-display text-sm font-semibold text-brand-700">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section id="faq">
        <SectionHeader
          tag={t(tx.faq.tag, lang)}
          title={t(tx.faq.title, lang)}
          description={t(tx.faq.description, lang)}
        />
        <FAQ items={faqItems} />
      </Section>

      {/* ── Final CTA ── */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t(tx.cta.title, lang)}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            {t(tx.cta.description, lang)}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              {t(tx.cta.ctaPrimary, lang)}
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
