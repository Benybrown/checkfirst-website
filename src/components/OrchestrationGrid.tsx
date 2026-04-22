/*
  OrchestrationGrid — the AI-native signature motif.
  10×6 grid of small squares. A few cells are highlighted as active /
  pulsing / signal. Pure CSS motion. Server-renderable (no "use client").
*/

interface Props {
  variant?: "light" | "dark";
  className?: string;
}

const COLS = 10;
const ROWS = 6;

const ACTIVE_CELLS = new Set<number>([8, 15, 24, 33, 42]);
const PULSE_CELLS = new Set<number>([11, 28, 47]);
const SIGNAL_CELLS = new Set<number>([22, 39]);

export function OrchestrationGrid({ variant = "light", className = "" }: Props) {
  const isDark = variant === "dark";
  const total = COLS * ROWS;

  return (
    <div
      aria-hidden="true"
      className={`relative select-none ${className}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
        gap: "10px",
      }}
    >
      {Array.from({ length: total }).map((_, i) => {
        const isActive = ACTIVE_CELLS.has(i);
        const isPulse = PULSE_CELLS.has(i);
        const isSignal = SIGNAL_CELLS.has(i);

        const base = "aspect-square rounded-[3px]";
        const inactiveBg = isDark
          ? "bg-white/[0.04] border border-white/[0.06]"
          : "bg-ink-900/[0.04] border border-ink-900/10";
        const activeBg = isDark
          ? "bg-brand-400/70 border border-brand-300/50"
          : "bg-brand-500/80 border border-brand-400/50";
        const pulseBg = isDark
          ? "bg-brand-500/40 border border-brand-400/30 animate-signal"
          : "bg-brand-500/35 border border-brand-500/30 animate-signal";
        const signalBg = isDark
          ? "bg-signal/70 border border-signal/40 animate-signal"
          : "bg-signal/70 border border-signal/30 animate-signal";

        let classes = `${base} ${inactiveBg}`;
        let style: React.CSSProperties = {};

        if (isSignal) {
          classes = `${base} ${signalBg}`;
          style.animationDelay = `${(i % 4) * 300}ms`;
        } else if (isActive) {
          classes = `${base} ${activeBg}`;
        } else if (isPulse) {
          classes = `${base} ${pulseBg}`;
          style.animationDelay = `${(i % 3) * 400}ms`;
        }

        return <div key={i} className={classes} style={style} />;
      })}

      {/* Soft radial glow behind the grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: isDark
            ? "radial-gradient(circle at 65% 40%, rgba(20,184,166,0.18), transparent 60%)"
            : "radial-gradient(circle at 65% 40%, rgba(20,184,166,0.12), transparent 55%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}
