"use client";

import { useState, type FormEvent } from "react";

const inputClasses =
  "w-full rounded-[10px] border border-ink-200 bg-canvas-raised px-4 py-3 font-body text-[14.5px] text-ink-900 placeholder:text-ink-300 transition-colors duration-200 focus:border-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500/15";

const labelClasses =
  "block font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-400 mb-2";

export function EmailOptIn() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/consultant-optin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          name: formData.get("name"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[18px] border border-ink-200 bg-canvas-raised p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-600"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <span className="eyebrow mb-2">Your promo code</span>
          <div className="mt-3 w-full rounded-[10px] border border-dashed border-brand-500/40 bg-brand-50/40 px-6 py-5">
            <p className="font-mono text-[22px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              tprmexpert
            </p>
          </div>
          <p className="mt-4 font-body text-[14px] leading-[1.6] text-ink-500">
            We&apos;ve also sent this code to your email. Use it at checkout
            to get the Consultant plan at <strong className="text-ink-900">$99/month</strong>.
          </p>
          <a
            href="https://buy.stripe.com/5kQ4gBctB8Ep9izazt7kc02"
            className="group mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-ink-950 px-6 font-body text-[14px] font-medium text-white ring-1 ring-inset ring-ink-950 transition-all duration-200 hover:bg-ink-800"
          >
            Subscribe now — $99/month
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
              <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[18px] border border-ink-200 bg-canvas-raised p-7 sm:p-8">
      <span className="eyebrow mb-5">Get your promo code</span>
      <h3 className="font-display text-[24px] leading-[1.15] tracking-[-0.02em] text-ink-900">
        Enter your email{" "}
        <span className="italic text-ink-500">— we&apos;ll send the code.</span>
      </h3>
      <p className="mt-3 font-body text-[14px] leading-[1.55] text-ink-500">
        Instant consultant discount and access link to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-4">
        <div>
          <label htmlFor="optin-name" className={labelClasses}>
            Name <span className="text-ink-300">(optional)</span>
          </label>
          <input
            id="optin-name"
            name="name"
            type="text"
            autoComplete="name"
            className={inputClasses}
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label htmlFor="optin-email" className={labelClasses}>
            Email
          </label>
          <input
            id="optin-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
            placeholder="you@consultancy.com"
          />
        </div>

        {error && (
          <p className="rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 font-body text-[13.5px] text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-ink-950 font-body text-[14.5px] font-medium text-white ring-1 ring-inset ring-ink-950 transition-all duration-200 hover:bg-ink-800 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending…" : "Send me the code"}
          {!loading && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
              <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>

        <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-400">
          No spam · Promo code only
        </p>
      </form>
    </div>
  );
}
