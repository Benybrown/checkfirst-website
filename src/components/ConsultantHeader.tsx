import Link from "next/link";

export function ConsultantHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/60">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-tight text-slate-900"
        >
          Check<span className="text-brand-700">First</span>
          <span className="ml-2 text-sm font-medium text-slate-400">
            for Consultants
          </span>
        </Link>

        <a
          href="#pricing"
          className="inline-flex items-center rounded-[12px] bg-brand-700 px-5 py-2.5 font-display text-sm font-semibold text-white shadow-button transition-all duration-200 hover:bg-brand-800 hover:shadow-md"
        >
          Get promo code
        </a>
      </div>
    </header>
  );
}
