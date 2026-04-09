"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/Card";

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

  // Check for success/canceled in URL (client-side only to avoid hydration mismatch)
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

      // Redirect to Stripe Checkout
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
        <div className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center">
          <p className="font-display text-lg font-bold text-emerald-800">
            Payment successful!
          </p>
          <p className="mt-1 font-body text-sm text-emerald-600">
            Your instance is being provisioned. You&apos;ll receive an email
            when it&apos;s ready.
          </p>
        </div>
      )}
      {banner === "canceled" && (
        <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
          <p className="font-display text-sm font-semibold text-amber-800">
            Checkout was canceled. You can try again whenever you&apos;re ready.
          </p>
        </div>
      )}

      {/* Plan cards */}
      <div className="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            hover={false}
            className={`flex flex-col ${plan.highlight ? "relative ring-2 ring-brand-600" : ""}`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-700 px-3 py-0.5 font-display text-xs font-semibold text-white">
                Most popular
              </span>
            )}
            <h3 className="font-display text-lg font-bold text-slate-900">
              {plan.name}
            </h3>
            <p className="mt-1 font-body text-sm text-slate-500">
              {plan.description}
            </p>
            <p className="mt-6 font-display text-3xl font-extrabold tracking-tight text-slate-900">
              {plan.price}
              <span className="text-base font-medium text-slate-400">
                {plan.period}
              </span>
            </p>
            <p className="mt-1 font-body text-sm text-slate-400">
              {plan.yearly}
              {plan.period ? " billed annually" : ""}
            </p>
            <div className="mt-8">
              {plan.checkout ? (
                <button
                  onClick={() => setModalPlan(plan)}
                  className={`inline-flex w-full items-center justify-center rounded-[12px] px-5 py-2.5 font-display text-sm font-semibold transition-all duration-200 ${
                    plan.highlight
                      ? "bg-brand-700 text-white shadow-button hover:bg-brand-800 hover:shadow-md"
                      : "bg-white text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300"
                  }`}
                >
                  {plan.cta}
                </button>
              ) : (
                <a
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-[12px] bg-white px-5 py-2.5 font-display text-sm font-semibold text-slate-800 ring-1 ring-slate-200 transition-all duration-200 hover:bg-slate-50 hover:ring-slate-300"
                >
                  {plan.cta}
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Pre-checkout modal */}
      {modalPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative mx-4 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => {
                setModalPlan(null);
                setError("");
              }}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M5 5l10 10M15 5L5 15" />
              </svg>
            </button>

            <h3 className="font-display text-xl font-bold text-slate-900">
              {modalPlan.name} Plan — {modalPlan.yearly}
            </h3>
            <p className="mt-1 font-body text-sm text-slate-500">
              Enter your details to proceed to secure checkout.
            </p>

            <form onSubmit={handleCheckout} className="mt-6 space-y-4">
              <div>
                <label className="block font-body text-sm font-medium text-slate-700">
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  value={form.companyName}
                  onChange={(e) =>
                    setForm({ ...form, companyName: e.target.value })
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 font-body text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-slate-700">
                  Company Domain
                </label>
                <input
                  type="text"
                  required
                  value={form.domain}
                  onChange={(e) =>
                    setForm({ ...form, domain: e.target.value })
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 font-body text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="acme.com"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-slate-700">
                  Contact Name
                </label>
                <input
                  type="text"
                  required
                  value={form.contactName}
                  onChange={(e) =>
                    setForm({ ...form, contactName: e.target.value })
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 font-body text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-slate-700">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 font-body text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="jane@acme.com"
                />
              </div>

              {error && (
                <p className="font-body text-sm text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-[12px] bg-brand-700 px-5 py-3 font-display text-sm font-semibold text-white shadow-button transition-all duration-200 hover:bg-brand-800 hover:shadow-md disabled:opacity-50"
              >
                {loading ? "Redirecting to checkout..." : "Continue to payment"}
              </button>
            </form>

            <p className="mt-4 text-center font-body text-xs text-slate-400">
              Secure payment powered by Stripe. Yearly subscription, cancel
              anytime.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
