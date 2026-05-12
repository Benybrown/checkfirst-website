import Link from "next/link";

export function ConsultantHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/80 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-mark.svg"
            alt="CheckFirst"
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="inline-flex items-baseline font-display text-[22px] font-semibold tracking-[-0.03em] text-ink-900">
            <span>Check</span>
            <span className="italic">First</span>
            <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-400 not-italic">
              for Consultants
            </span>
          </span>
        </Link>

        <a
          href="#pricing"
          className="group relative inline-flex h-10 items-center gap-2 rounded-[10px] bg-ink-950 px-4 font-body text-[13.5px] font-medium text-white shadow-button ring-1 ring-inset ring-ink-950 transition-all duration-200 hover:bg-ink-800 hover:ring-ink-800"
        >
          Get promo code
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
            <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}
