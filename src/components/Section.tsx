import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className = "", id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 py-24 lg:px-8 lg:py-32 ${
        dark ? "bg-slate-900 text-white" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}
