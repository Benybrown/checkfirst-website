"use client";

import { useState, type FormEvent } from "react";

const inputClasses =
  "w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 font-body text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

const labelClasses = "block font-display text-sm font-semibold text-slate-800 mb-2";

export function ContactForm() {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          company: formData.get("company"),
          vendors: formData.get("vendors"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
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
        <h3 className="font-display text-xl font-bold text-slate-900">
          Thanks for reaching out
        </h3>
        <p className="mt-2 font-body text-sm text-slate-600">
          We&apos;ll get back to you within one business day to schedule your
          demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className={inputClasses}
            placeholder="Sarah"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className={inputClasses}
            placeholder="Mitchell"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses}
          placeholder="sarah@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className={labelClasses}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className={inputClasses}
          placeholder="Acme Corp"
        />
      </div>

      <div>
        <label htmlFor="vendors" className={labelClasses}>
          How many vendors do you manage?
        </label>
        <select
          id="vendors"
          name="vendors"
          required
          className={inputClasses}
          defaultValue=""
        >
          <option value="" disabled>
            Select a range
          </option>
          <option value="1-10">1–10</option>
          <option value="11-50">11–50</option>
          <option value="51-200">51–200</option>
          <option value="200+">200+</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Anything else? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className={inputClasses}
          placeholder="Tell us about your current TPRM process or what you're looking for..."
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
        {loading ? "Sending..." : "Book a demo"}
      </button>

      <p className="text-center font-body text-xs text-slate-400">
        No commitment. We&apos;ll set up a 30-minute call to walk through
        CheckFirst.
      </p>
    </form>
  );
}
