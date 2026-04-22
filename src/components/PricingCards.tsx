"use client";

import { useState, useEffect } from "react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$149",
    period: "/mo",
    yearly: "$1,490/yr",
    description:
      "For teams getting started with structured vendor risk management.",
    highlight: false,
    cta: "Get started",
    checkout: true,
  },
  {
    id: "professional",
    name: "Professional",
    price: "$399",
    period: "/mo",
    yearly: "$3,990/yr",
    description:
      "For growing security teams that need the full assessment engine.",
    highlight: false,
    cta: "Get started",
    checkout: true,
  },
  {
    id: "scale",
    name: "Scale",
    price: "$799",
    period: "/mo",
    yearly: "$7,990/yr",
    description:
      "For teams managing a large vendor portfolio with full AI capabilities.",
    highlight: true,
    cta: "Get started",
    checkout: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    yearly: "Starting at $18,000/yr",
    description: "For large organisations and managed service providers.",
    highlight: false,
    cta: "Contact sales",
    checkout: false,
  },
];

export function PricingCards() {
  const [modalPlan, setModalPlan] = useState<(typeof plans)[0] | null>(null);
  const [form, setForm] = useState({
    companyName: "",
    domain: "",
    contactName: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [banner, setBanner] = useState<string | null>(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success")) setBanner("success");
    else if (params.get("canceled")) setBanner("canceled");
  }, []);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalPlan) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: modalPlan.id,
          ...form,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Failed to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Success/Canceled banner */}
      {banner === "success" && (
        <div className="mb-10 flex items-start gap-4 rounded-[14px] border border-brand-500/30 bg-brand-50 p-5">
          <span className="relative mt-1 flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-brand-500/35 animate-signal" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-brand-600" />
          </span>
          <div>
            <p className="font-display text-[18px] tracking-[-0.015em] text-brand-900">
              Payment successful
            </p>
            <p className="mt-1 font-body text-[14px] text-brand-800">
              Your instance is being provisioned. You&apos;ll receive an email when it&apos;s ready.
            </p>
          </div>
        </div>
      )}
      {banner === "canceled" && (
        <div className="mb-10 rounded-[14px] border border-ink-200 bg-canvas-raised p-5">
          <p className="font-display text-[15px] tracking-[-0.01em] text-ink-800">
            Checkout was canceled. You can try again whenever you&apos;re ready.
          </p>
        </div>
      )}

      {/* Plan cards — editorial grid with hairline dividers */}
      <div className="mb-16 grid gap-px overflow-hidden rounded-[14px] border border-ink-200 bg-ink-200 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => {
          const isHighlight = plan.highlight;
          return (
            <div
              key={plan.name}
              className={`relative flex flex-col p-7 transition-colors ${
                isHighlight
                  ? "bg-ink-950 text-white"
                  : "bg-canvas-raised hover:bg-canvas"
              }`}
            >
              {isHighlight && (
                <span className="absolute -top-2.5 left-7 inline-flex items-center gap-1.5 rounded-full border border-brand-400/40 bg-ink-900 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-300">
                  <span className="h-1 w-1 rounded-full bg-brand-400 animate-signal" />
                  Most popular
                </span>
              )}

              <h3
                className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
                  isHighlight ? "text-white/60" : "text-ink-400"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-3 font-body text-[13.5px] leading-[1.5] min-h-[42px] ${
                  isHighlight ? "text-white/70" : "text-ink-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className={`font-display text-[40px] tabular-nums leading-none tracking-[-0.03em] ${
                    isHighlight ? "text-white" : "text-ink-900"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`font-body text-[14px] ${
                    isHighlight ? "text-white/60" : "text-ink-400"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mt-2 font-mono text-[11px] uppercase tracking-[0.1em] ${
                  isHighlight ? "text-white/55" : "text-ink-400"
                }`}
              >
                {plan.yearly}
                {plan.period ? " · billed annually" : ""}
              </p>

              <div className="mt-auto pt-8">
                {plan.checkout ? (
                  <button
                    onClick={() => setModalPlan(plan)}
                    className={`group inline-flex h-11 w-full items-center justify-center gap-2 rounded-[10px] font-body text-[13.5px] font-medium transition-all duration-200 ${
                      isHighlight
                        ? "bg-white text-ink-950 hover:bg-ink-100"
                        : "bg-ink-950 text-white ring-1 ring-inset ring-ink-950 hover:bg-ink-800"
                    }`}
                  >
                    {plan.cta}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                      <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                ) : (
                  <a
                    href="/contact"
                    className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-[10px] bg-transparent ring-1 ring-inset ring-ink-200 px-4 font-body text-[13.5px] font-medium text-ink-900 transition-all duration-200 hover:ring-ink-900 hover:bg-ink-50"
                  >
                    {plan.cta}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                      <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pre-checkout modal */}
      {modalPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/60 p-4 backdrop-blur-sm"
          onClick={() => setModalPlan(null)}
        >
          <div
            className="relative w-full max-w-md rounded-[18px] border border-ink-200 bg-canvas-raised p-8 shadow-float animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setModalPlan(null);
                setError("");
              }}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-colors hover:border-ink-900 hover:text-ink-900"
              aria-label="Close"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <path d="M5 5l10 10M15 5L5 15" />
              </svg>
            </button>

            <span className="eyebrow mb-4">Checkout</span>
            <h3 className="font-display text-[24px] leading-[1.15] tracking-[-0.02em] text-ink-900">
              {modalPlan.name} · <span className="italic text-ink-500">{modalPlan.yearly}</span>
            </h3>
            <p className="mt-2 font-body text-[14px] text-ink-500">
              Enter your details to proceed to secure checkout.
            </p>

            <form onSubmit={handleCheckout} className="mt-7 space-y-4">
              {[
                { key: "companyName", label: "Company Name", placeholder: "Acme Corp", type: "text" },
                { key: "domain", label: "Company Domain", placeholder: "acme.com", type: "text" },
                { key: "contactName", label: "Contact Name", placeholder: "Jane Smith", type: "text" },
                { key: "email", label: "Work Email", placeholder: "jane@acme.com", type: "email" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="font-mono block text-[10.5px] uppercase tracking-[0.12em] text-ink-400">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    required
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="mt-1.5 w-full rounded-[10px] border border-ink-200 bg-canvas-raised px-3.5 py-2.5 font-body text-[14px] text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-ink-900 focus:ring-2 focus:ring-brand-500/15"
                    placeholder={f.placeholder}
                  />
                </div>
              ))}

              {error && (
                <p className="font-body text-[13px] text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-ink-950 font-body text-[14px] font-medium text-white ring-1 ring-inset ring-ink-950 transition-all duration-200 hover:bg-ink-800 disabled:opacity-50"
              >
                {loading ? "Redirecting to checkout…" : "Continue to payment"}
                {!loading && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                    <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </form>

            <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-ink-400">
              Secure payment · Stripe · Yearly subscription · Cancel anytime
            </p>
          </div>
        </div>
      )}
    </>
  );
}
