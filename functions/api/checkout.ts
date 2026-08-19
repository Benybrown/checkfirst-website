type Env = {
  STRIPE_SECRET_KEY?: string;
  STRIPE_PRICE_STARTER?: string;
  STRIPE_PRICE_PROFESSIONAL?: string;
  STRIPE_PRICE_SCALE?: string;
};

type CheckoutData = {
  plan?: string;
  companyName?: string;
  domain?: string;
  contactName?: string;
  email?: string;
};

const STRIPE_CHECKOUT_SESSIONS_URL = "https://api.stripe.com/v1/checkout/sessions";
const ALLOWED_ORIGINS = new Set([
  "https://checkfirst.io",
  "https://www.checkfirst.io",
  "https://consultant.checkfirst.io",
]);

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function safeOrigin(request: Request) {
  const requestOrigin = new URL(request.url).origin;
  const originHeader = request.headers.get("Origin");

  if (originHeader && ALLOWED_ORIGINS.has(originHeader)) return originHeader;
  if (ALLOWED_ORIGINS.has(requestOrigin)) return requestOrigin;

  return "https://checkfirst.io";
}

function priceForPlan(plan: string, env: Env) {
  const prices: Record<string, string | undefined> = {
    starter: env.STRIPE_PRICE_STARTER,
    professional: env.STRIPE_PRICE_PROFESSIONAL,
    scale: env.STRIPE_PRICE_SCALE,
  };

  return prices[plan];
}

export const onRequest = () => json({ error: "Method not allowed" }, 405);

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  try {
    if (!env.STRIPE_SECRET_KEY) {
      console.error("STRIPE_SECRET_KEY is not configured");
      return json({ error: "Payment service not configured" }, 500);
    }

    const body = (await request.json()) as CheckoutData;
    const plan = body.plan?.trim() || "";
    const companyName = body.companyName?.trim() || "";
    const domain = body.domain?.trim() || "";
    const contactName = body.contactName?.trim() || "";
    const email = body.email?.trim() || "";

    if (!plan || !companyName || !domain || !contactName || !email) {
      return json({ error: "All fields are required" }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: "Valid email is required" }, 400);
    }

    const priceId = priceForPlan(plan, env);
    if (!priceId) {
      return json({ error: "Invalid plan selected" }, 400);
    }

    const origin = safeOrigin(request);
    const params = new URLSearchParams();
    params.set("mode", "subscription");
    params.set("line_items[0][price]", priceId);
    params.set("line_items[0][quantity]", "1");
    params.set("customer_email", email);
    params.set("metadata[plan_code]", plan);
    params.set("metadata[company_name]", companyName);
    params.set("metadata[domain]", domain);
    params.set("metadata[contact_name]", contactName);
    params.set("metadata[source]", "website");
    params.set("subscription_data[metadata][plan_code]", plan);
    params.set("subscription_data[metadata][company_name]", companyName);
    params.set("subscription_data[metadata][domain]", domain);
    params.set("subscription_data[metadata][contact_name]", contactName);
    params.set("success_url", `${origin}/pricing?success=true&plan=${encodeURIComponent(plan)}`);
    params.set("cancel_url", `${origin}/pricing?canceled=true`);

    const response = await fetch(STRIPE_CHECKOUT_SESSIONS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const result = (await response.json().catch(() => ({}))) as { url?: string };

    if (!response.ok || !result.url) {
      console.error("Stripe checkout error", response.status);
      return json({ error: "Failed to create checkout session" }, 502);
    }

    return json({ url: result.url });
  } catch (error) {
    console.error("Checkout error", error);
    return json({ error: "Failed to create checkout session" }, 500);
  }
};
