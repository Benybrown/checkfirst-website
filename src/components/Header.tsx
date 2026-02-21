"use client";

import { useState } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

const navLinks: NavLink[] = [
  { href: "/assessments", label: "Assessments" },
  { href: "/ai-engine", label: "AI Engine" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "#", label: "Blog", external: true },
];

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
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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
          <div className="flex flex-col gap-3">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-[8px] px-3 py-2 font-body text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-[8px] px-3 py-2 font-body text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              )
            )}
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
