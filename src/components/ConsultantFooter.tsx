import Link from "next/link";

export function ConsultantFooter() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <Link
              href="https://checkfirst.io"
              className="font-display text-lg font-extrabold tracking-tight text-white"
            >
              Check<span className="text-brand-400">First</span>
            </Link>
            <p className="mt-1 font-body text-sm text-slate-500">
              AI-powered security assessments for independent consultants.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://checkfirst.io/pricing"
              className="font-body text-sm text-slate-400 transition-colors hover:text-white"
            >
              Full platform
            </Link>
            <Link
              href="https://checkfirst.io/contact"
              className="font-body text-sm text-slate-400 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center">
          <p className="font-body text-xs text-slate-500">
            &copy; {new Date().getFullYear()} CheckFirst. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
