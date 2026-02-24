"use client";

import { useState, type FormEvent } from "react";

const inputClasses =
  "w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 font-body text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

const labelClasses =
  "block font-display text-sm font-semibold text-slate-800 mb-2";

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
      <div className="rounded-[20px] border border-slate-200/80 bg-white p-8 shadow-card">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-600"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 className="font-display text-lg font-bold text-slate-900">
            Your promo code
          </h3>
          <div className="mt-4 w-full rounded-[12px] border-2 border-dashed border-brand-300 bg-brand-50/50 px-6 py-4">
            <p className="font-display text-2xl font-extrabold tracking-wider text-brand-700">
              tprmexpert
            </p>
          </div>
          <p className="mt-4 font-body text-sm text-slate-600">
            We&apos;ve also sent this code to your email. Use it at checkout
            to get the Consultant plan at <strong>$99/month</strong>.
          </p>
          <a
            href="https://buy.stripe.com/5kQ4gBctB8Ep9izazt7kc02"
            className="mt-6 inline-flex items-center rounded-[12px] bg-brand-700 px-6 py-3 font-display text-sm font-semibold text-white shadow-button transition-all duration-200 hover:bg-brand-800 hover:shadow-md"
          >
            Subscribe now — $99/month
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[20px] border border-slate-200/80 bg-white p-8 shadow-card">
      <h3 className="font-display text-lg font-bold text-slate-900">
        Get your promo code
      </h3>
      <p className="mt-2 font-body text-sm text-slate-600">
        Enter your email to receive the consultant discount code and access link instantly.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="optin-name" className={labelClasses}>
            Name <span className="text-slate-400 font-normal">(optional)</span>
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
          <p className="rounded-[8px] bg-red-50 px-4 py-3 font-body text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-[12px] bg-brand-700 px-5 py-3.5 font-display text-sm font-semibold text-white shadow-button transition-all duration-200 hover:bg-brand-800 hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send me the code"}
        </button>

        <p className="text-center font-body text-xs text-slate-400">
          No spam. We&apos;ll send the promo code and nothing else.
        </p>
      </form>
    </div>
  );
}
