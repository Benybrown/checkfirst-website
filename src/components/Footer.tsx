import Link from "next/link";

const footerLinks = {
  Platform: [
    { href: "/assessments", label: "Security Assessments" },
    { href: "/ai-engine", label: "AI Engine" },
    { href: "/#how-it-works", label: "How it works" },
    { href: "/pricing", label: "Pricing" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/contact", label: "Book a demo" },
    { href: "#", label: "Blog", external: true },
  ],
  Frameworks: [
    { href: "/assessments#frameworks", label: "CSA CCM v4.0" },
    { href: "/assessments#frameworks", label: "SOC 2" },
    { href: "/assessments#frameworks", label: "ISO 27001" },
    { href: "/assessments#frameworks", label: "45+ more" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-xl font-extrabold tracking-tight text-white"
            >
              Check<span className="text-brand-400">First</span>
            </Link>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-slate-400">
              AI-powered third-party risk management. Assess vendor security
              against 243 CSA controls in minutes, not weeks.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-200">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="font-body text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="font-body text-xs text-slate-400">
            &copy; {new Date().getFullYear()} CheckFirst. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="font-body text-xs text-slate-400 transition-colors hover:text-slate-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-body text-xs text-slate-400 transition-colors hover:text-slate-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
