import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "ghost-dark";
  size?: "md" | "lg";
  className?: string;
}

const variants = {
  primary:
    "bg-brand-700 text-white shadow-button hover:bg-brand-800 hover:shadow-md",
  secondary:
    "bg-white text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300",
  ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
  "ghost-dark": "text-slate-300 hover:text-white hover:bg-slate-800",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
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
      className={`inline-flex items-center justify-center rounded-[12px] font-display font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
