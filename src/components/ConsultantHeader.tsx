import Link from "next/link";

export function ConsultantHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] py-3 max-w-[1280px] flex-wrap items-center justify-between gap-2 px-4 lg:px-8">
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
          <span className="inline-flex items-baseline font-display text-[22px] font-semibold tracking-[-0.03em] text-foreground">
            <span>Check</span>
            <span className="italic">First</span>
            <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted not-italic">
              for Consultants
            </span>
          </span>
        </Link>

        <a
          href="#pricing"
          className="group relative inline-flex h-10 items-center gap-2 vox-button vox-button-primary px-4 font-body text-[13.5px] font-medium"
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
