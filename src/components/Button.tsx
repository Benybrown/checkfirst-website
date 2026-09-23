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
  primary: "vox-button-primary",
  secondary: "vox-button-secondary",
  ghost: "vox-button-ghost",
  "ghost-dark": "vox-button-secondary",
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
        className={`vox-button relative font-body ${variants[variant]} ${sizes[size]} ${className}`}
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
      className={`vox-button relative font-body ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-1.5">
        {children}
      </span>
    </Link>
  );
}
