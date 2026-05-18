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
    <Link href="/" className="group flex items-center gap-3" aria-label="CheckFirst home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark.svg"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 scale-[2.25] object-contain"
      />
      <span className="hidden leading-none sm:flex">
        <span className="cf-logo-clean text-[2.15rem] font-normal tracking-normal">CheckFirst</span>
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
        className="inline-flex items-center gap-1.5 text-xs font-normal text-slate-600 transition-colors hover:text-blue-600"
      >
        {label}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:rotate-180">
          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 translate-y-2 rounded-2xl border border-white bg-white/95 p-2 opacity-0 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {links.map((link) => (
          <SmartLink
            key={link.href}
            href={link.href}
            className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
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
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 pt-5 sm:px-6">
        <div className="relative overflow-visible rounded-full border border-white/90 bg-white/84 px-4 py-3 shadow-[0_14px_38px_-22px_rgba(15,23,42,0.42),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-2xl">
          <div className="relative z-10 flex items-center justify-between gap-4">
            <Wordmark />

            <div className="hidden items-center gap-7 lg:flex">
              {Object.entries(navGroups).map(([group, links]) => (
                <NavDropdown key={group} label={group} links={links} />
              ))}
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <LanguageSwitcher />
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/78 px-4 py-2 text-xs text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-blue-600">
                View pricing
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-blue-700 bg-gradient-to-b from-blue-500 to-blue-600 px-4 py-2 text-xs text-white shadow-[0_5px_14px_rgba(59,130,246,0.28),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-400 hover:to-blue-500">
                Book a demo
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
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
            <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] rounded-[1.5rem] border border-white bg-white/95 p-4 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl lg:hidden">
              {Object.entries(navGroups).map(([group, links]) => (
                <div key={group} className="border-b border-slate-100 py-3 last:border-0">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">{group}</p>
                  <div className="grid gap-1">
                    {links.map((link) => (
                      <SmartLink
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
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
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">Language</p>
                <LanguageSwitcher />
              </div>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm text-white">
                Book a demo
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
