"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import posthog from "posthog-js";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    window.gtag?.("consent", "update", {
      analytics_storage: "granted",
    });
    posthog.opt_in_capturing();
    posthog.set_config({ persistence: "localStorage+cookie" });
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    posthog.opt_out_capturing();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 animate-fade-in-up"
      role="alert"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-3xl rounded-xl bg-white/95 backdrop-blur-sm border border-gray-200 shadow-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="font-body text-sm text-gray-600 flex-1">
          We use cookies to improve your experience and analyze site traffic.{" "}
          <Link
            href="/privacy"
            className="text-brand-600 underline underline-offset-2 hover:text-brand-700"
          >
            Privacy policy
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 rounded-lg transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-lg shadow-button transition-colors cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
