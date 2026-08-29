"use client";

import Link from "next/link";
import { type ReactNode, useEffect } from "react";
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

const heroMetrics = [
  ["Vendor intake", "Triage"],
  ["AI evidence review", "Assist"],
  ["SOC 2 + ISO 27001", "Audit"],
];

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 19 6v5c0 4.5-2.8 8.6-7 10-4.2-1.4-7-5.5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19V5M4 19h16M8 15v-4M12 15V8M16 15V6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function AetherCanvas() {
  useEffect(() => {
    const canvas = document.getElementById("aether-canvas") as HTMLCanvasElement | null;
    const gl = canvas?.getContext("webgl");
    if (!canvas || !gl) return;

    const vertexSource = `
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `;
    const fragmentSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;
        p.y += 0.58;

        float radius = 1.46 + sin(u_time * 0.35) * 0.04;
        float thickness = 0.42;
        float r = length(p);
        float a = atan(p.y, p.x);
        float dist = abs(r - radius);
        float warp = sin(r * 4.0 - u_time * 0.65) * 0.34;
        float lines = sin((a + warp) * 82.0 + u_time * 2.4);
        lines = smoothstep(0.84, 1.0, lines);

        float mask = smoothstep(thickness, 0.0, dist);
        float coreGlow = 0.052 / (dist * dist + 0.045);
        vec3 blue = vec3(0.14, 0.48, 1.0);
        vec3 violet = vec3(0.55, 0.28, 1.0);
        vec3 cyan = vec3(0.56, 0.76, 1.0);
        vec3 baseColor = mix(blue, violet, sin(a * 2.0 + u_time * 0.55) * 0.5 + 0.5);
        vec3 lineColor = mix(baseColor, cyan, 0.34);
        vec3 finalColor = lineColor * lines * mask * 2.7 + baseColor * coreGlow * 1.45;
        finalColor *= smoothstep(1.55, -0.55, p.y);
        finalColor *= smoothstep(3.0, 1.0, r);

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const loadShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = loadShader(gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = loadShader(gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    if (!vertexShader || !fragmentShader || !program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    const positions = new Float32Array([-1, 1, 1, 1, -1, -1, 1, -1]);
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const vertexPosition = gl.getAttribLocation(program, "aVertexPosition");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    let frame = 0;

    const render = (time: number) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(vertexPosition);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time * 0.001);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas id="aether-canvas" className="absolute inset-0 h-full w-full" aria-hidden="true" />;
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
      title: "Security questionnaire automation",
      description:
        "Send questionnaires, review evidence with AI assistance, and keep human sign-off on every vendor decision.",
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
      href: "https://checkfirst.io/blog/security-questionnaire-automation-ai-2026/",
      title: "Security Questionnaire Automation",
      description:
        "Support guide for teams cutting vendor review time with AI-assisted questionnaires and human sign-off.",
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
      <section className="relative z-10 -mt-28 bg-gradient-to-b from-[#111111] to-black px-4 pb-8 pt-28 md:px-8 md:pb-12">
        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-[1400px] flex-col overflow-hidden rounded-[2rem] border border-[#333]/50 bg-gradient-to-b from-[#1e1e1e] to-[#0a0a0a] p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,1),inset_0_1px_2px_rgba(255,255,255,0.08),inset_0_-3px_12px_rgba(0,0,0,0.9)] md:p-12">
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }}
          />
          <AetherCanvas />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />

          <header className="relative z-10 flex justify-start">
            <div className="flex items-center gap-2 rounded-full border border-black bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] px-4 py-2 shadow-[inset_0_2px_6px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.05)]">
              <span className="flex h-4 w-4 items-center justify-center text-blue-400 drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
              <ShieldIcon />
            </span>
              <span className="font-mono text-xs font-normal uppercase tracking-[0.18em] text-zinc-400 [text-shadow:0_1px_1px_rgba(0,0,0,1)]">
                Initiate evidence flow
              </span>
            </div>
          </header>

          <div className="relative z-10 mt-auto flex w-full flex-1 flex-col items-start justify-end pt-24">
            <h1 className="mb-6 max-w-3xl text-[2.55rem] font-normal leading-tight tracking-normal text-zinc-100 [text-shadow:0_2px_4px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.1)] sm:text-[3.6rem] lg:text-[4rem]">
              Launch audit-ready vendor reviews now.
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-zinc-400 [text-shadow:0_1px_1px_rgba(0,0,0,0.8)] md:text-lg">
              Route supplier evidence, AI-assisted questionnaire review, and SOC 2 or ISO 27001 decisions through one controlled third-party risk workflow.
            </p>

            <div className="mb-12 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/60 bg-gradient-to-b from-[#f0f0f0] to-[#c8c8c8] px-6 py-2.5 text-sm font-normal text-[#111111] shadow-[0_8px_16px_rgba(0,0,0,0.6),inset_0_2px_3px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-all hover:from-white hover:to-[#e0e0e0] active:translate-y-px active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)]"
              >
                Book a demo
              </Link>
              <Link
                href="/tprm-software"
                className="inline-flex items-center justify-center rounded-full border border-[#555]/30 bg-gradient-to-b from-[#3a3a3a] to-[#222] px-6 py-2.5 text-sm font-normal text-zinc-100 shadow-[0_8px_16px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_5px_rgba(0,0,0,0.6)] transition-all hover:from-[#444] hover:to-[#2a2a2a] active:translate-y-px"
              >
                Explore TPRM software
              </Link>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 border-t border-black pt-8 shadow-[0_1px_0_rgba(255,255,255,0.05)] md:grid-cols-3 md:gap-12">
              {heroMetrics.map(([title, subtitle], index) => (
                <div key={title} className="flex flex-col gap-3">
                  <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-black bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-zinc-200 shadow-[inset_0_4px_8px_rgba(0,0,0,0.9),0_1px_1px_rgba(255,255,255,0.08)]">
                    {index === 1 ? <SignalIcon /> : <ShieldIcon />}
                  </div>
                  <h3 className="text-base font-normal tracking-normal text-zinc-100 [text-shadow:0_1px_1px_rgba(0,0,0,0.8)]">{title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500 [text-shadow:0_1px_1px_rgba(0,0,0,0.8)]">{subtitle}</p>
              </div>
              ))}
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
            Security questionnaire automation
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
