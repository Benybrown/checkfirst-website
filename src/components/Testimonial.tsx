import { Card } from "./Card";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export function Testimonial({ quote, name, role, company }: TestimonialProps) {
  return (
    <Card variant="proof" className="flex h-full flex-col p-8">
      {/* Minimal quote mark — top-left, mono style */}
      <span
        aria-hidden="true"
        className="font-display text-[56px] leading-none text-ink-200 -mt-2 mb-2 select-none"
      >
        &ldquo;
      </span>
      <p className="font-display text-[19px] leading-[1.45] tracking-[-0.01em] text-ink-800">
        {quote}
      </p>
      <div className="mt-auto pt-8">
        <div className="mb-4 h-px w-8 bg-ink-300" />
        <p className="font-body text-[14px] font-medium text-ink-900">
          {name}
        </p>
        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-400">
          {role} · {company}
        </p>
      </div>
    </Card>
  );
}
