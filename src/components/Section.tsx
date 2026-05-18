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
          ? "mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-b from-[#172033] to-[#101827] text-white shadow-[0_40px_90px_-45px_rgba(15,23,42,0.78),inset_0_1px_0_rgba(255,255,255,0.14)]"
          : ""
      } ${className}`}
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
