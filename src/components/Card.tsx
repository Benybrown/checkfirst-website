import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "content" | "data" | "proof";
}

/*
  Card variants:
  - content — off-white raised surface, hairline, generous padding
  - data    — dark ink surface, used in the dark "capabilities" section
  - proof   — light surface, refined for testimonials
*/
export function Card({
  children,
  className = "",
  hover = true,
  variant = "content",
}: CardProps) {
  const base =
    "relative rounded-[14px] p-7 transition-all duration-200 ease-out";

  const variants = {
    content: `bg-canvas-raised border border-ink-200 ${
      hover ? "hover:border-ink-900 hover:-translate-y-0.5 hover:shadow-card-hover" : ""
    }`,
    data: `bg-ink-800 border border-white/[0.06] text-white ${
      hover ? "hover:border-white/20 hover:-translate-y-0.5" : ""
    }`,
    proof: `bg-canvas-raised border border-ink-200 ${
      hover ? "hover:border-ink-300" : ""
    }`,
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
