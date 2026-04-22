import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
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
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative px-6 py-20 sm:py-24 lg:px-8 lg:py-28 ${
        dark
          ? "bg-ink-950 text-white bg-diag-lines-dark overflow-hidden"
          : ""
      } ${className}`}
    >
      {dark && (
        <>
          {/* Single off-axis brand glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-[0.18]"
            style={{
              background:
                "radial-gradient(circle, var(--color-brand-400), transparent 65%)",
            }}
          />
          {/* Secondary subtle glow bottom-left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-[380px] w-[380px] rounded-full blur-3xl opacity-[0.10]"
            style={{
              background:
                "radial-gradient(circle, var(--color-brand-500), transparent 60%)",
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
