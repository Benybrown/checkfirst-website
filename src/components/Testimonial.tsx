import { Card } from "./Card";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export function Testimonial({ quote, name, role, company }: TestimonialProps) {
  return (
    <Card>
      <svg
        className="mb-4 text-brand-300"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M6 18h4l-2 6h4l2-6V8H6v10zm14 0h4l-2 6h4l2-6V8H20v10z" />
      </svg>
      <p className="font-body text-base leading-relaxed text-slate-700">
        {quote}
      </p>
      <div className="mt-6 border-t border-slate-100 pt-4">
        <p className="font-display text-sm font-semibold text-slate-900">{name}</p>
        <p className="font-body text-sm text-slate-500">
          {role}, {company}
        </p>
      </div>
    </Card>
  );
}
