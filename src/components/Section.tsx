import { type ReactNode } from "react";
import colors from "./SectionColors.module.css";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  tone?: "indigo" | "blue" | "cyan" | "finale";
  bleed?: boolean; // remove max-width container (for hero-type content)
}

/*
  Section — editorial rhythm, warm canvas default, distinctive dark treatment.
  Dark sections layer ink-950 + diagonal hairlines + a single off-axis brand glow.
*/
export function Section({
  children,
  className = "",
  id,
  dark,
  tone,
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`vox-section relative px-6 lg:px-8 ${
        dark
          ? "vox-section-dark overflow-hidden text-white"
          : ""
      } ${tone ? `${colors.band} ${colors[tone]}` : ""} ${className}`}
    >
      {dark && (
        <>
          {/* Primary brand glow (magenta) top-right */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-[0.22]"
            style={{
              background:
                "radial-gradient(circle, var(--color-brand-magenta), transparent 65%)",
            }}
          />
          {/* Secondary brand glow (blue) bottom-left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-[0.16]"
            style={{
              background:
                "radial-gradient(circle, var(--color-brand-blue), transparent 62%)",
            }}
          />
        </>
      )}
      <div
        className={`relative ${
          bleed ? "w-full" : "mx-auto max-w-[1200px]"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
