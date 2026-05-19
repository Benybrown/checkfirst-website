"use client";

import Link from "next/link";
import { type ReactNode } from "react";
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

function Pill({ children }: { children: ReactNode }) {
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

function FloatingIcon({ type }: { type: "radar" | "shield" | "chart" }) {
  if (type === "shield") {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 3l7 3v5c0 4.5-2.8 8.6-7 10-4.2-1.4-7-5.5-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }
  if (type === "chart") {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15v-4" />
        <path d="M12 15V8" />
        <path d="M16 15v-6" />
      </svg>
    );
  }
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="3" />
      <path d="M4.9 4.9a10 10 0 0 0 0 14.2" />
      <path d="M19.1 4.9a10 10 0 0 1 0 14.2" />
    </svg>
  );
}

function HeroDashboard() {
  const cards: [string, string, "radar" | "shield" | "chart"][] = [
    ["Live assessment", "Public posture view", "radar"],
    ["Security score", "Detailed report", "shield"],
    ["Findings grouped", "74 items classified", "chart"],
  ];

  return (
    <div className="relative lg:pl-4">
      <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-200/40 via-white/20 to-cyan-200/30 blur-3xl" />
      <div className="relative rounded-[2rem] border border-white bg-[#f8fafc] p-3 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35),inset_0_2px_0_rgba(255,255,255,1)] sm:p-4">
        <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
          {cards.map(([title, subtitle, icon], index) => (
            <div
              key={title}
              className={`absolute ${
                index === 0
                  ? "right-[-1.75rem] top-8"
                  : index === 1
                    ? "right-[-1.75rem] top-[42%]"
                    : "left-8 bottom-[-1.25rem]"
              } min-w-[12rem] rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white] backdrop-blur`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                  <FloatingIcon type={icon} />
                </div>
                <div>
                  <p className="text-xs text-slate-900">{title}</p>
                  <p className="text-xs font-light text-slate-400">{subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[inset_0_1px_0_white]">
          <div className="relative aspect-[1.1/1] bg-slate-100 md:aspect-[1.16/1]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/checkfirst-hero-assessment.png"
              alt="CheckFirst public posture assessment dashboard showing risk rating, security score, and grouped findings"
              className="h-full w-full object-cover object-left-top"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
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
      href: "/soc-2-vendor-risk",
      title: "SOC 2 vendor risk software",
      description:
        "Audit-ready vendor evidence for SOC 2 CC9.2 without spreadsheet chaos.",
    },
    {
      href: "/iso-27001-supplier-risk",
      title: "ISO 27001 supplier risk",
      description:
        "Supplier relationship evidence for ISO 27001 A.5.19-A.5.23.",
    },
    {
      href: "/assessments",
      title: "Vendor security assessment workflow",
      description:
        "Questionnaires, scans, documents, and reviewer decisions in one flow.",
    },
    {
      href: "/managed-tprm",
      title: "Managed TPRM support",
      description:
        "Analyst capacity for vendor follow-up, remediation, and reporting.",
    },
    {
      href: "/tprm-software",
      title: "TPRM software",
      description:
        "A complete third-party risk workflow for vendor reviews and audit readiness.",
    },
  ];

  const survivorLinks = [
    {
      href: "https://checkfirst.io/blog/best-tprm-tool-2026/",
      title: "Best TPRM Software in 2026",
      description: "Compare TPRM software options and category buying criteria.",
    },
    {
      href: "https://checkfirst.io/blog/vendor-security-assessment-guide-2026/",
      title: "Vendor Security Assessment Guide",
      description:
        "Process-level support page for teams improving assessment workflow and review quality.",
    },
    {
      href: "https://checkfirst.io/blog/3rd-party-risk-management-program/",
      title: "Third-Party Risk Management Program Guide",
      description: "Operational guide for building a repeatable TPRM program around assessment findings.",
    },
    {
      href: "https://checkfirst.io/blog/tprm-agentic-ai-assessment/",
      title: "AI Vendor Risk Assessment",
      description: "Use AI to accelerate supplier reviews without removing human oversight.",
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

  const englishFaqItems = [
    {
      question: "What can we manage in CheckFirst?",
      answer:
        "You can manage vendor intake, risk tiering, questionnaires, document review, external scans, remediation, approvals, reassessments, and audit-ready evidence records.",
    },
    {
      question: "Can CheckFirst help with SOC 2 and ISO 27001?",
      answer:
        "Yes. CheckFirst helps organize vendor-risk evidence for SOC 2 and supplier-risk records for ISO 27001, while still supporting broader third-party risk management workflows.",
    },
    {
      question: "Do vendors need an account to respond?",
      answer:
        "No. Vendors can answer questionnaires and provide evidence through secure links, while your team keeps the review record inside CheckFirst.",
    },
    {
      question: "Can we keep our existing compliance platform?",
      answer:
        "Yes. Teams can use CheckFirst alongside Vanta, Drata, a consultant, or an internal compliance program when vendor risk needs a more focused workflow.",
    },
    {
      question: "How quickly can we start?",
      answer:
        "Most teams can begin with a small set of critical vendors, prove the workflow, and then expand to more suppliers, frameworks, and reassessment cycles.",
    },
  ];

  const translatedFaqItems = tx.faq.items.map((item) => ({
    question: t(item.question, lang),
    answer: t(item.answer, lang),
  }));

  const faqItems = lang === "en" ? englishFaqItems : translatedFaqItems;

  return (
    <>
      {/* ─────────────────────── HERO ─────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-8 md:pb-20 md:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <Pill>{t(tx.hero.badge, lang)}</Pill>
            <h1 className="mx-auto mt-8 max-w-5xl text-[2.35rem] font-light leading-[0.98] tracking-[-0.07em] text-slate-950 sm:text-[3.2rem] md:text-[3.85rem] lg:mx-0 lg:text-[4.35rem]">
              <span className="block">AI-powered TPRM for</span>
              <span className="mx-auto mt-4 inline-flex whitespace-nowrap rounded-[1.35rem] border border-blue-700 bg-gradient-to-b from-blue-400 to-blue-600 px-4 pb-2.5 pt-1.5 text-[0.68em] font-normal text-white shadow-[0_18px_38px_-20px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.38)] sm:text-[0.74em] md:text-[0.78em] lg:mx-0">
                SOC 2 + ISO 27001{" "}
              </span>
              <span className="mt-4 block">Audit-ready vendor risk</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-slate-600 md:text-lg lg:mx-0">
              {lang === "en"
                ? "Collect vendor evidence, assess suppliers, and keep audit-ready records for SOC 2, ISO 27001, and modern third-party risk programs."
                : t(tx.hero.description, lang)}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Button href="/contact" variant="primary" size="lg">
                {t(tx.hero.ctaPrimary, lang)}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Button>
              <Button href="/tprm-software" variant="secondary" size="lg">
                Explore TPRM software
              </Button>
            </div>
            <div className="mt-9 flex flex-wrap justify-center gap-2 lg:justify-start">
              {buyerPages.slice(0, 3).map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="rounded-full border border-white bg-white/72 px-3 py-1.5 text-xs text-slate-600 shadow-[inset_0_1px_0_white] transition hover:text-blue-600"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
          <HeroDashboard />
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
            href="/soc-2-vendor-risk"
            className="font-body text-[13.5px] text-ink-700 transition-colors hover:text-brand-600"
          >
            SOC 2 vendor risk
          </Link>
          <span className="text-ink-200">·</span>
          <Link
            href="/iso-27001-supplier-risk"
            className="font-body text-[13.5px] text-ink-700 transition-colors hover:text-brand-600"
          >
            ISO 27001 supplier risk
          </Link>
          <span className="text-ink-200">·</span>
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
          title="Find the workflow that fits your vendor-risk program"
          description="Compare CheckFirst paths for TPRM software, SOC 2 and ISO 27001 audit evidence, vendor assessments, and managed TPRM support."
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
                {String(idx + 1).padStart(2, "0")} · Workflow
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
          title="Keep building your vendor-risk evidence plan"
          description="Use these guides to compare TPRM software, improve assessments, and build a repeatable third-party risk program."
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
