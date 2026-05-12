import Link from "next/link";

const footerLinks = {
  Platform: [
    { href: "/assessments", label: "Security Assessments" },
    { href: "/tprm-software", label: "TPRM Software" },
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
  Contact: [{ href: "/contact", label: "Book a demo" }],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white/70">
      {/* Subtle diagonal hairline pattern */}
      <div aria-hidden="true" className="absolute inset-0 bg-diag-lines-dark opacity-60" />
      {/* Single off-axis brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[10%] h-[420px] w-[420px] rounded-full blur-3xl opacity-10"
        style={{
          background: "radial-gradient(circle, var(--color-brand-400), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 pt-20 pb-10 lg:px-8 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_3fr]">
          {/* Brand block */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-mark.svg"
                alt="CheckFirst"
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 transition-transform duration-200 group-hover:scale-105"
              />
              <span className="inline-flex items-center font-display text-[24px] font-semibold tracking-[-0.03em] text-white">
                <span>Check</span>
                <span className="italic">First</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs font-body text-[15px] leading-[1.65] text-white/60">
              AI-powered third-party risk management.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="relative flex h-2.5 w-2.5 items-center justify-center"
              >
                <span className="absolute inset-0 rounded-full bg-signal/30 animate-signal" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-signal" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                Enterprise TPRM · Operational
              </span>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="eyebrow eyebrow-dark mb-5">{heading}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-body text-[14px] text-white/65 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/40">
            &copy; {new Date().getFullYear()} CheckFirst · All rights reserved
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/privacy"
              className="font-body text-[13px] text-white/55 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-body text-[13px] text-white/55 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
            <a
              href="https://www.linkedin.com/company/checkfirstsecurity/"
              rel="me"
              target="_blank"
              className="font-body text-[13px] text-white/55 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
