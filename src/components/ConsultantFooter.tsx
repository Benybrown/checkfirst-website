import Link from "next/link";

export function ConsultantFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white/65">
      <div aria-hidden="true" className="absolute inset-0 bg-diag-lines-dark opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[10%] h-[360px] w-[360px] rounded-full blur-3xl opacity-10"
        style={{
          background: "radial-gradient(circle, var(--color-brand-400), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Link
              href="https://checkfirst.io"
              className="group inline-flex items-center gap-2.5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-mark.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 transition-transform duration-200 group-hover:scale-105"
              />
              <span className="inline-flex items-center font-display text-[22px] font-semibold tracking-[-0.03em] text-white">
                <span>Check</span>
                <span className="italic">First</span>
              </span>
            </Link>
            <p className="mt-3 font-body text-[14px] leading-[1.55] text-white/60">
              AI-powered security assessments for independent consultants.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="https://checkfirst.io/pricing"
              className="font-body text-[14px] text-white/65 transition-colors hover:text-white"
            >
              Full platform
            </Link>
            <Link
              href="https://checkfirst.io/contact"
              className="font-body text-[14px] text-white/65 transition-colors hover:text-white"
            >
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/company/checkfirstsecurity/"
              rel="me"
              target="_blank"
              className="font-body text-[14px] text-white/65 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/40">
            &copy; {new Date().getFullYear()} CheckFirst · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
