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
  return (
    <div className={`vox-card ${hover ? "vox-card-hover" : ""} ${variant === "data" ? "!bg-white/[0.025]" : ""} ${className}`}>
      {children}
    </div>
  );
}
