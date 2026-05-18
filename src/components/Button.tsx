import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "ghost-dark";
  size?: "md" | "lg";
  className?: string;
}

/*
  Button system — ink-950 default primary, brand teal as accent on hover.
  Radius tightens to 10px for a more enterprise feel.
  Secondary is a hairline-only button. Ghost variants for minimal use.
*/
const variants = {
  primary:
    "group/btn border border-blue-700 bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-button hover:from-blue-400 hover:to-blue-500",
  secondary:
    "group/btn border border-slate-200 bg-gradient-to-b from-white to-slate-50 text-slate-700 shadow-[0_4px_12px_rgba(15,23,42,0.05),inset_0_1px_0_white] hover:text-blue-600 hover:from-slate-50 hover:to-slate-100",
  ghost:
    "group/btn bg-transparent text-slate-700 hover:text-blue-600 hover:bg-blue-50",
  "ghost-dark":
    "group/btn bg-transparent text-white/70 ring-1 ring-inset ring-white/15 hover:text-white hover:ring-white/40 hover:bg-white/5",
};

const sizes = {
  md: "h-10 px-4 text-[13.5px]",
  lg: "h-12 px-6 text-[14.5px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative inline-flex items-center justify-center gap-2 rounded-full font-body font-medium tracking-[-0.005em] transition-all duration-300 ease-out hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${className}`}
      >
        <span className="relative z-10 inline-flex items-center gap-1.5">
          {children}
        </span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full font-body font-medium tracking-[-0.005em] transition-all duration-300 ease-out hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-1.5">
        {children}
      </span>
    </Link>
  );
}
