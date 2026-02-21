"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

function FAQEntry({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-brand-700"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-slate-900">
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          <path
            d="M10 4v12M4 10h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-200 ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-body text-base leading-relaxed text-slate-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ items }: FAQProps) {
  return (
    <div className="mx-auto max-w-3xl divide-slate-200 rounded-[20px] border border-slate-200/80 bg-white px-8 shadow-card">
      {items.map((item) => (
        <FAQEntry key={item.question} {...item} />
      ))}
    </div>
  );
}
