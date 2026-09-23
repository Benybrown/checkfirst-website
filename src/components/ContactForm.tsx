"use client";

import { useState, type FormEvent } from "react";

const inputClasses =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 font-body text-[14.5px] text-foreground placeholder:text-muted shadow-card transition-colors duration-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/15";

const labelClasses =
  "mb-2 block font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted";

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
      <div role="status" className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-accent/25 bg-accent/10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-[24px] tracking-[-0.04em] text-foreground">
          Thanks for reaching out
        </h3>
        <p className="mt-3 max-w-sm font-body text-[15px] leading-[1.55] text-muted">
          We&apos;ll get back to you within one business day to schedule your demo.
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
        <p role="alert" className="rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 font-body text-[13.5px] text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="vox-button vox-button-primary group h-12 w-full font-body text-[14.5px] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending…" : "Book a demo"}
        {!loading && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
            <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>

      <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
        No commitment · 30-minute call
      </p>
    </form>
  );
}
