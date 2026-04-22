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
    "group/btn bg-ink-950 text-white ring-1 ring-inset ring-ink-950 shadow-button hover:bg-ink-800 hover:ring-ink-800",
  secondary:
    "group/btn bg-transparent text-ink-900 ring-1 ring-inset ring-ink-200 hover:ring-ink-900 hover:bg-ink-50",
  ghost:
    "group/btn bg-transparent text-ink-700 hover:text-ink-900 hover:bg-ink-50",
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
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center gap-2 rounded-[10px] font-body font-medium tracking-[-0.005em] transition-all duration-200 ease-out ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-1.5">
        {children}
      </span>
    </Link>
  );
}
