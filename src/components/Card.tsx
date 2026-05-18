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
    "relative rounded-[2rem] p-7 transition-all duration-300 ease-out";

  const variants = {
    content: `bg-white/72 border border-white shadow-card backdrop-blur ${
      hover ? "hover:-translate-y-1 hover:bg-white/90 hover:shadow-card-hover" : ""
    }`,
    data: `bg-white/[0.065] border border-white/10 text-white ${
      hover ? "hover:border-white/20 hover:-translate-y-0.5" : ""
    }`,
    proof: `bg-white/72 border border-white shadow-card backdrop-blur ${
      hover ? "hover:bg-white/90" : ""
    }`,
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
