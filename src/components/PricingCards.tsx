"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$249",
    period: "/mo",
    yearly: "$2,988/yr",
    description:
      "For teams getting started with structured vendor risk management.",
    highlight: false,
    cta: "Get started",
    checkout: true,
  },
  {
    id: "professional",
    name: "Professional",
    price: "$499",
    period: "/mo",
    yearly: "$5,988/yr",
    description:
      "For growing security teams that need the full assessment engine.",
    highlight: false,
    cta: "Get started",
    checkout: true,
  },
  {
    id: "scale",
    name: "Scale",
    price: "$999",
    period: "/mo",
    yearly: "$11,988/yr",
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

  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!modalPlan) return;
    const previous = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    const focusable = () => Array.from(dialog?.querySelectorAll<HTMLElement>('button, input, a[href], [tabindex="0"]') ?? []);
    focusable()[0]?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setModalPlan(null); setError(""); }
      if (event.key === "Tab") {
        const items = focusable(); const first = items[0]; const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", keydown);
    const overflow = document.body.style.overflow; document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", keydown); document.body.style.overflow = overflow; previous?.focus(); };
  }, [modalPlan]);

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
        <div className="mb-10 flex items-start gap-4 rounded-lg border border-accent/25 bg-accent/10 p-5">
          <span className="relative mt-1 flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-accent/35 animate-signal" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-brand-600" />
          </span>
          <div>
            <p className="font-display text-[18px] tracking-[-0.015em] text-accent">
              Payment successful
            </p>
            <p className="mt-1 font-body text-[14px] text-accent">
              Your instance is being provisioned. You&apos;ll receive an email when it&apos;s ready.
            </p>
          </div>
        </div>
      )}
      {banner === "canceled" && (
        <div className="mb-10 rounded-[14px] border border-line bg-canvas-raised p-5">
          <p className="font-display text-[15px] tracking-[-0.01em] text-foreground">
            Checkout was canceled. You can try again whenever you&apos;re ready.
          </p>
        </div>
      )}

      {/* Plan cards — editorial grid with hairline dividers */}
      <div className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => {
          const isHighlight = plan.highlight;
          return (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-lg p-7 transition-colors ${
                isHighlight
                  ? "border border-accent/40 bg-gradient-to-b from-indigo-950 to-surface text-white shadow-card"
                  : "border border-line bg-surface shadow-card backdrop-blur hover:bg-surface"
              }`}
            >
              {isHighlight && (
                <span className="absolute -top-2.5 left-7 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white">
                  <span className="h-1 w-1 rounded-full bg-surface animate-signal" />
                  Most popular
                </span>
              )}

              <h3
                className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
                  isHighlight ? "text-muted" : "text-muted"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-3 font-body text-[13.5px] leading-[1.5] min-h-[42px] ${
                  isHighlight ? "text-white/70" : "text-muted"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className={`font-display text-[40px] tabular-nums leading-none tracking-[-0.03em] ${
                    isHighlight ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`font-body text-[14px] ${
                    isHighlight ? "text-muted" : "text-muted"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mt-2 font-mono text-[11px] uppercase tracking-[0.1em] ${
                  isHighlight ? "text-muted" : "text-muted"
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
                        ? "vox-button vox-button-primary"
                        : "vox-button vox-button-primary"
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
                    className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-line bg-surface px-4 font-body text-[13.5px] font-medium text-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
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
      {modalPlan && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/60 p-4 backdrop-blur-sm"
          onClick={() => setModalPlan(null)}
        >
          <div
            ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="checkout-title"
            className="relative max-h-[90dvh] overflow-y-auto w-full max-w-md rounded-lg border border-line bg-canvas-raised p-8 shadow-float animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setModalPlan(null);
                setError("");
              }}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-ink-900 hover:text-foreground"
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
            <h3 id="checkout-title" className="font-display text-[24px] leading-[1.15] tracking-[-0.02em] text-foreground">
              {modalPlan.name} · <span className="italic text-muted">{modalPlan.yearly}</span>
            </h3>
            <p className="mt-2 font-body text-[14px] text-muted">
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
                  <label htmlFor={`checkout-${f.key}`} className="font-mono block text-[10.5px] uppercase tracking-[0.12em] text-muted">
                    {f.label}
                  </label>
                  <input
                    id={`checkout-${f.key}`}
                    type={f.type}
                    required
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="mt-1.5 w-full rounded-[10px] border border-line bg-canvas-raised px-3.5 py-2.5 font-body text-[14px] text-foreground outline-none transition-colors placeholder:text-muted focus:border-ink-900 focus:ring-2 focus:ring-brand-500/15"
                    placeholder={f.placeholder}
                  />
                </div>
              ))}

              {error && (
                <p role="alert" className="font-body text-[13px] text-red-300">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex h-12 w-full items-center justify-center gap-2 vox-button vox-button-primary font-body text-[14px] font-medium disabled:opacity-50"
              >
                {loading ? "Redirecting to checkout…" : "Continue to payment"}
                {!loading && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                    <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </form>

            <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
              Secure payment · Stripe · Yearly subscription · Cancel anytime
            </p>
          </div>
        </div>, document.body
      )}
    </>
  );
}
