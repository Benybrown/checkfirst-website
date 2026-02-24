"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navGroups = {
  Platform: [
    { href: "/assessments", label: "Security Assessments" },
    { href: "/ai-engine", label: "AI Engine" },
    { href: "/#how-it-works", label: "How it works" },
  ],
  Services: [
    { href: "/managed-tprm", label: "Managed TPRM" },
    { href: "/pricing", label: "Pricing" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ],
};

function NavDropdown({ label, links }: { label: string; links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 font-body text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900"
        aria-expanded={open}
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M3 4.5l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-52 rounded-[12px] border border-slate-200/80 bg-white py-1 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 font-body text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/60">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-tight text-slate-900"
        >
          Check<span className="text-brand-700">First</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {Object.entries(navGroups).map(([group, links]) => (
            <NavDropdown key={group} label={group} links={links} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="inline-flex items-center rounded-[12px] bg-brand-700 px-5 py-2.5 font-display text-sm font-semibold text-white shadow-button transition-all duration-200 hover:bg-brand-800 hover:shadow-md"
          >
            Book a demo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-[8px] p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-slate-200/60 bg-white px-6 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {Object.entries(navGroups).map(([group, links]) => (
              <div key={group}>
                <p className="px-3 pt-4 pb-1 font-display text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {group}
                </p>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-[8px] px-3 py-2 font-body text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
            <hr className="my-2 border-slate-200" />
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-[12px] bg-brand-700 px-5 py-2.5 font-display text-sm font-semibold text-white shadow-button transition-all duration-200 hover:bg-brand-800"
            >
              Book a demo
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
