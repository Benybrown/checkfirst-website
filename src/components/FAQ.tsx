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
    <div className="border-b border-ink-200/80 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors sm:py-7"
        aria-expanded={open}
      >
        <span className="font-display text-[19px] leading-tight tracking-[-0.015em] text-ink-900 sm:text-[21px]">
          {question}
        </span>
        <span
          className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-all duration-200 group-hover:border-ink-900 group-hover:text-ink-900 ${
            open ? "rotate-45 bg-ink-900 border-ink-900 text-white group-hover:text-white" : ""
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 4v12M4 10h12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[58ch] font-body text-[16px] leading-[1.7] text-ink-500">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ items }: FAQProps) {
  return (
    <div className="mx-auto max-w-3xl border-y border-ink-200">
      {items.map((item) => (
        <FAQEntry key={item.question} {...item} />
      ))}
    </div>
  );
}
