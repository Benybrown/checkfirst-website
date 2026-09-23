"use client";

import { useEffect, useState, useRef, useId, type ReactNode } from "react";
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
      <span className="flex leading-none">
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
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => { if (!ref.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);
  return (
    <div ref={ref} className="relative" onKeyDown={(event) => {
      if (event.key === "Escape") { setOpen(false); ref.current?.querySelector("button")?.focus(); }
    }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 py-3 text-xs text-muted transition-colors hover:text-white">
        {label}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={open ? "rotate-180" : ""}>
          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div id={id} className="vox-dropdown" hidden={!open}>
        <div className="vox-dropdown-panel">
          {links.map((link) => (
            <SmartLink key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="flex rounded-md px-3 py-3 text-sm text-muted transition-colors hover:bg-surface-high hover:text-white">
              {link.label}
            </SmartLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  return (
    <header className="vox-nav fixed left-0 right-0 top-0 z-50" onKeyDown={(event) => { if (event.key === "Escape") { setMobileOpen(false); document.getElementById("mobile-menu-toggle")?.focus(); } }}>
      <nav className="vox-nav-inner" aria-label="Main navigation">
        <div className="relative overflow-visible">
          <div className="relative z-10 flex items-center justify-between gap-4">
            <Wordmark />

            <div className="hidden items-center gap-5 xl:flex">
              {Object.entries(navGroups).map(([group, links]) => (
                <NavDropdown key={group} label={group} links={links} />
              ))}
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <LanguageSwitcher />
              <Link href="/pricing" className="vox-button vox-button-secondary px-4 py-2.5 text-xs">
                View pricing
              </Link>
              <Link href="/contact" className="vox-button vox-button-primary px-5 py-2.5 text-xs">
                Book a demo
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-foreground xl:hidden"
              id="mobile-menu-toggle" aria-controls="mobile-navigation" aria-label="Toggle menu"
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
            <div id="mobile-navigation" className="vox-mobile-menu absolute left-0 right-0 top-[calc(100%+1.2rem)] rounded-lg border border-line bg-surface p-4 shadow-float xl:hidden">
              {Object.entries(navGroups).map(([group, links]) => (
                <div key={group} className="border-b border-line py-3 last:border-0">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{group}</p>
                  <div className="grid gap-1">
                    {links.map((link) => (
                      <SmartLink
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
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
              <div className="border-b border-line py-3">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">Language</p>
                <LanguageSwitcher />
              </div>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="vox-button vox-button-primary mt-3 w-full px-5 py-3 text-sm">
                Book a demo
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
