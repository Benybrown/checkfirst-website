import Link from "next/link";
import { type ReactNode } from "react";

const footerLinks = {
  "Audit pages": [
    { href: "/soc-2-vendor-risk", label: "SOC 2 vendor risk" },
    { href: "/iso-27001-supplier-risk", label: "ISO 27001 supplier risk" },
    { href: "/assessments", label: "Vendor security assessments" },
    { href: "/managed-tprm", label: "Managed TPRM" },
  ],
  Platform: [
    { href: "/tprm-software", label: "TPRM software" },
    { href: "/ai-engine", label: "AI engine" },
    { href: "/vanta-vendor-risk-alternative", label: "Vanta alternative" },
    { href: "/drata-vendor-risk-alternative", label: "Drata alternative" },
    { href: "/pricing", label: "Pricing" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "https://checkfirst.io/blog/", label: "Blog" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "https://www.linkedin.com/company/checkfirstsecurity/", label: "LinkedIn" },
  ],
};

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white bg-white/72 shadow-[0_-18px_55px_-40px_rgba(15,23,42,0.45),inset_0_1px_0_white] backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr] lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link href="/" className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-mark.svg" alt="" width={40} height={40} className="h-10 w-10 shrink-0 scale-[2.25] object-contain" />
              <span className="cf-logo-power text-sm font-semibold"><span className="cf-logo-power-check">Check</span><span className="cf-logo-power-first">First</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm font-light leading-6 text-slate-500">
              Vendor risk evidence for SOC 2 and ISO 27001 audits, with the broader TPRM workflows teams need after the audit.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs text-blue-600 shadow-[inset_0_1px_0_white]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Built for busy risk teams
            </div>
          </div>

          <div className="grid gap-8 text-center sm:grid-cols-3 sm:text-left">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">
                  {heading}
                </p>
                <div className="flex flex-col gap-3 text-sm font-light text-slate-500">
                  {links.map((link) => (
                    <SmartLink key={link.href} href={link.href} className="transition-colors hover:text-blue-600">
                      {link.label}
                    </SmartLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-6 md:flex-row">
          <p className="text-xs font-light text-slate-400">
            &copy; {new Date().getFullYear()} CheckFirst. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-light text-slate-400">
            <Link href="/terms" className="transition-colors hover:text-blue-600">
              Terms
            </Link>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <Link href="/privacy" className="transition-colors hover:text-blue-600">
              Privacy
            </Link>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <Link href="/contact" className="transition-colors hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
