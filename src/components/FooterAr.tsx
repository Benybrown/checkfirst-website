import Link from "next/link";

const footerLinks = {
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
  "تواصل": [
    { href: "/ar/contact", label: "احجز عرضاً تجريبياً" },
  ],
};

export function FooterAr() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div>
            <Link
              href="/ar"
              className="font-display text-xl font-extrabold tracking-tight text-white"
            >
              Check<span className="text-brand-400">First</span>
            </Link>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-slate-400">
              إدارة مخاطر الأطراف الثالثة بالذكاء الاصطناعي.
            </p>
          </div>

          <div className="flex gap-16">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-200">
                  {heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-body text-sm text-slate-400 transition-colors duration-200 hover:text-white"
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

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="font-body text-xs text-slate-400">
            &copy; {new Date().getFullYear()} CheckFirst. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-body text-xs text-slate-400 transition-colors hover:text-slate-200"
            >
              سياسة الخصوصية
            </Link>
            <Link
              href="/terms"
              className="font-body text-xs text-slate-400 transition-colors hover:text-slate-200"
            >
              شروط الخدمة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
