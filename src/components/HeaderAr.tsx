"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const navGroups = {
  "المنصة": [
    { href: "/ar/assessments", label: "تقييمات الأمان" },
    { href: "/ar/ai-engine", label: "محرك الذكاء الاصطناعي" },
    { href: "/ar#how-it-works", label: "كيف يعمل" },
  ],
  "الخدمات": [
    { href: "/ar/managed-tprm", label: "إدارة TPRM" },
    { href: "/ar/pricing", label: "الأسعار" },
  ],
  "الشركة": [
    { href: "/ar/about", label: "من نحن" },
    { href: "/ar/contact", label: "اتصل بنا" },
    { href: "/blog", label: "المدونة" },
  ],
};

function NavDropdown({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string }[];
}) {
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
        className="group/nav inline-flex items-center gap-1.5 font-body text-[13.5px] font-medium text-ink-600 transition-colors duration-200 hover:text-ink-900"
        aria-expanded={open}
      >
        {label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          className={`opacity-60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-3 w-60 overflow-hidden rounded-[12px] border border-ink-200 bg-canvas-raised p-1.5 shadow-float animate-fade-in" style={{ animationDuration: "140ms" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-3 rounded-[8px] px-3 py-2.5 font-body text-[13.5px] text-ink-700 transition-colors hover:bg-ink-50 hover:text-ink-900"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function HeaderAr() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/80 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-6 lg:px-8">
        <Link
          href="/ar"
          className="group inline-flex items-center gap-2 font-display text-[22px] font-semibold tracking-[-0.03em] text-ink-900"
        >
          <span>Check</span>
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-brand-500 transition-transform duration-200 group-hover:scale-125"
          />
          <span className="italic">First</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {Object.entries(navGroups).map(([group, links]) => (
            <NavDropdown key={group} label={group} links={links} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/ar/contact"
            className="group inline-flex h-10 items-center gap-2 rounded-[10px] bg-ink-950 px-4 font-body text-[13.5px] font-medium text-white shadow-button ring-1 ring-inset ring-ink-950 transition-all duration-200 hover:bg-ink-800 hover:ring-ink-800"
          >
            احجز عرضاً تجريبياً
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-ink-200 text-ink-700 transition-colors hover:border-ink-900 hover:text-ink-900 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="القائمة"
        >
          {mobileOpen ? (
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-ink-200 bg-canvas px-6 py-6 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-5">
            {Object.entries(navGroups).map(([group, links]) => (
              <div key={group}>
                <p className="eyebrow mb-2 px-1">{group}</p>
                <div className="flex flex-col">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-[10px] px-3 py-3 font-body text-[15px] text-ink-800 transition-colors hover:bg-ink-50"
                    >
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/ar/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-ink-950 font-body text-[14.5px] font-medium text-white transition-all duration-200 hover:bg-ink-800"
            >
              احجز عرضاً تجريبياً
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
