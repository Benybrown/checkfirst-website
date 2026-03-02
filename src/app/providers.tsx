"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect, useState } from "react";

export function PHProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: "identified_only",
      capture_pageview: false,
      persistence: consent === "accepted" ? "localStorage+cookie" : "memory",
      opt_out_capturing_by_default: consent !== "accepted",
      loaded: (ph) => {
        if (consent === "accepted") {
          ph.opt_in_capturing();
        }
      },
    });
    setReady(true);
  }, []);

  if (!ready) return <>{children}</>;

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
