"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FAQ } from "@/components/FAQ";
import { Testimonial } from "@/components/Testimonial";
import { useLanguage } from "@/components/LanguageProvider";
import { translations, type Lang } from "@/lib/homepage-translations";

/* helper: pick current language value from a translated record */
function pick(t: Record<Lang, string>, lang: Lang) {
  return t[lang];
}

export default function HomePage() {
  const { language: lang } = useLanguage();
  const t = translations;

  const problemPoints = [
    { who: pick(t.problem.buyers, lang), pain: pick(t.problem.buyersPain, lang) },
    { who: pick(t.problem.vendors, lang), pain: pick(t.problem.vendorsPain, lang) },
    { who: pick(t.problem.securityTeams, lang), pain: pick(t.problem.securityTeamsPain, lang) },
    { who: pick(t.problem.deals, lang), pain: pick(t.problem.dealsPain, lang) },
  ];

  const metrics = [
    { value: "85%", label: pick(t.metrics.fasterAssessments, lang) },
    { value: "243", label: pick(t.metrics.csaControls, lang) },
    { value: "40+", label: pick(t.metrics.frameworksSupported, lang) },
    { value: "99.9%", label: pick(t.metrics.platformUptime, lang) },
  ];

  const capabilities = t.capabilities.items.map((c) => ({
    name: typeof c.name === "string" ? c.name : pick(c.name, lang),
    tag: pick(c.tag, lang),
    description: pick(c.description, lang),
  }));

  const platformModules = t.platform.modules.map((m) => ({
    title: pick(m.title, lang),
    description: pick(m.description, lang),
  }));

  const howItWorks = t.howItWorks.steps.map((s) => ({
    step: s.step,
    title: pick(s.title, lang),
    description: pick(s.description, lang),
  }));

  const testimonials = t.testimonials.items.map((item) => ({
    quote: pick(item.quote, lang),
    name: item.name,
    role: typeof item.role === "string" ? item.role : pick(item.role, lang),
    company: item.company,
  }));

  const pricingPlans = t.pricing.plans.map((plan) => ({
    name: pick(plan.name, lang),
    price: pick(plan.price, lang),
    note: pick(plan.note, lang),
    highlight: plan.highlight,
  }));

  const faqItems = t.faq.items.map((item) => ({
    question: pick(item.question, lang),
    answer: pick(item.answer, lang),
  }));

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
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
              {pick(t.hero.badge, lang)}
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[64px] lg:leading-[1.08]">
              {pick(t.hero.titleLine1, lang)}
              <br />
              <span className="text-brand-400">{pick(t.hero.titleLine2, lang)}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">
              {pick(t.hero.description, lang)}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                {pick(t.hero.ctaPrimary, lang)}
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                {pick(t.hero.ctaSecondary, lang)}
              </Button>
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

      {/* ── The Problem ── */}
      <Section>
        <SectionHeader
          tag={pick(t.problem.tag, lang)}
          title={pick(t.problem.title, lang)}
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
            {pick(t.problem.conclusion, lang)}
          </strong>{" "}
          {pick(t.problem.conclusionBody, lang)}
        </p>
      </Section>

      {/* ── Core Capabilities ── */}
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag={pick(t.capabilities.tag, lang)}
          title={pick(t.capabilities.title, lang)}
          description={pick(t.capabilities.description, lang)}
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
          tag={pick(t.platform.tag, lang)}
          title={pick(t.platform.title, lang)}
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
          tag={pick(t.howItWorks.tag, lang)}
          title={pick(t.howItWorks.title, lang)}
          description=""
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item) => (
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
          tag={pick(t.testimonials.tag, lang)}
          title={pick(t.testimonials.title, lang)}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Testimonial key={item.name} {...item} />
          ))}
        </div>
      </Section>

      {/* ── Pricing Teaser ── */}
      <Section className="bg-slate-50/60">
        <SectionHeader
          tag={pick(t.pricing.tag, lang)}
          title={pick(t.pricing.title, lang)}
          description={pick(t.pricing.description, lang)}
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlight ? "ring-2 ring-brand-600 relative" : ""}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-700 px-3 py-0.5 font-display text-xs font-semibold text-white">
                  {pick(t.pricing.mostPopular, lang)}
                </span>
              )}
              <h3 className="font-display text-base font-bold text-slate-900">
                {plan.name}
              </h3>
              <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900">
                {plan.price}
              </p>
              <div className="mt-6">
                <Button
                  href="/pricing"
                  variant={plan.highlight ? "primary" : "secondary"}
                  className="w-full"
                >
                  {pick(t.pricing.seePlan, lang)} {plan.name} {pick(t.pricing.plan, lang)}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section id="faq">
        <SectionHeader
          tag={pick(t.faq.tag, lang)}
          title={pick(t.faq.title, lang)}
          description={pick(t.faq.description, lang)}
        />
        <FAQ items={faqItems} />
      </Section>

      {/* ── Final CTA ── */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {pick(t.cta.title, lang)}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            {pick(t.cta.description, lang)}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              {pick(t.cta.ctaPrimary, lang)}
            </Button>
            <Button href="/pricing" variant="ghost-dark" size="lg">
              {pick(t.cta.ctaSecondary, lang)}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
