"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navGroups = {
  "Audit Evidence": [
    { href: "/soc-2-vendor-risk", label: "SOC 2 vendor risk" },
    { href: "/iso-27001-supplier-risk", label: "ISO 27001 supplier risk" },
    { href: "/assessments", label: "Security Assessments" },
  ],
  Compare: [
    { href: "/vanta-vendor-risk-alternative", label: "Vanta alternative" },
    { href: "/drata-vendor-risk-alternative", label: "Drata alternative" },
    { href: "/pricing", label: "Pricing" },
  ],
  Platform: [
    { href: "/tprm-software", label: "TPRM Software" },
    { href: "/ai-engine", label: "AI Engine" },
    { href: "/managed-tprm", label: "Managed TPRM" },
    { href: "/pricing", label: "Pricing" },
    { href: "/#how-it-works", label: "How it works" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "https://checkfirst.io/blog/", label: "Blog" },
  ],
};

function SmartLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function Wordmark() {
  return (
    <Link href="/" className="group flex items-center gap-2" aria-label="CheckFirst home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark.svg"
        alt=""
        width={40}
        height={40}
        className="h-8 w-8 shrink-0 scale-[1.85] object-contain"
      />
      <span className="hidden items-start leading-none sm:flex">
        <span className="cf-logo-clean text-sm font-normal uppercase tracking-[0.08em]">CheckFirst</span>
        <span className="ml-1.5 mt-0.5 h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.55)]" />
      </span>
    </Link>
  );
}

function NavDropdown({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 text-sm font-normal text-zinc-400 transition-colors hover:text-white"
      >
        {label}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:rotate-180">
          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 translate-y-2 rounded-lg border border-white/10 bg-zinc-950/95 p-2 opacity-0 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {links.map((link) => (
          <SmartLink
            key={link.href}
            href={link.href}
            className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            <span>{link.label}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
              <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </SmartLink>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black/72 backdrop-blur-xl">
      <nav className="mx-auto max-w-[1400px] border-b border-white/10 px-6 py-6 md:px-8">
        <div className="relative overflow-visible">
          <div className="relative z-10 flex items-center justify-between gap-4">
            <Wordmark />

            <div className="hidden items-center gap-8 lg:flex">
              {Object.entries(navGroups).map(([group, links]) => (
                <NavDropdown key={group} label={group} links={links} />
              ))}
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <LanguageSwitcher />
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm text-zinc-300 transition-colors hover:text-white">
                View pricing
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/60 bg-gradient-to-b from-[#f0f0f0] to-[#c8c8c8] px-4 py-2 text-sm text-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_8px_16px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-0.5 hover:from-white hover:to-[#e0e0e0]">
                Book a demo
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-100 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>

          {mobileOpen && (
            <div className="absolute left-0 right-0 top-[calc(100%+1rem)] rounded-lg border border-white/10 bg-zinc-950/95 p-4 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl lg:hidden">
              {Object.entries(navGroups).map(([group, links]) => (
                <div key={group} className="border-b border-slate-100 py-3 last:border-0">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">{group}</p>
                  <div className="grid gap-1">
                    {links.map((link) => (
                      <SmartLink
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        <span>{link.label}</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
                          <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </SmartLink>
                    ))}
                  </div>
                </div>
              ))}
              <div className="border-b border-slate-100 py-3">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">Language</p>
                <LanguageSwitcher />
              </div>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm text-black">
                Book a demo
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
