import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const PRICE_ENV_BY_PLAN: Record<string, string> = {
  starter: "STRIPE_PRICE_STARTER",
  professional: "STRIPE_PRICE_PROFESSIONAL",
  scale: "STRIPE_PRICE_SCALE",
};

function getStripeClient(): Stripe | null {
  const secretKey = process.env.STRIPE_SECRET_KEY?.trim();
  if (!secretKey) {
    return null;
  }
  return new Stripe(secretKey);
}

function getPriceId(plan: string): string | undefined {
  const envName = PRICE_ENV_BY_PLAN[plan];
  if (!envName) {
    return undefined;
  }
  const priceId = process.env[envName]?.trim();
  return priceId || undefined;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { plan, companyName, domain, contactName, email } = body;

    if (!plan || !companyName || !domain || !contactName || !email) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const stripe = getStripeClient();
    if (!stripe) {
      console.error("STRIPE_SECRET_KEY not configured");
      return NextResponse.json(
        { error: "Checkout is temporarily unavailable" },
        { status: 503 }
      );
    }

    if (!(plan in PRICE_ENV_BY_PLAN)) {
      return NextResponse.json(
        { error: "Invalid plan selected" },
        { status: 400 }
      );
    }

    const priceId = getPriceId(plan);
    if (!priceId) {
      console.error(`Missing Stripe price env for plan: ${plan}`);
      return NextResponse.json(
        { error: "Checkout is temporarily unavailable for this plan" },
        { status: 503 }
      );
    }

    // Determine the base URL from the request
    const origin = req.headers.get("origin") || "https://www.checkfirst.io";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: email,
      metadata: {
        plan_code: plan,
        company_name: companyName,
        domain: domain,
        contact_name: contactName,
        source: "website",
      },
      subscription_data: {
        metadata: {
          plan_code: plan,
          company_name: companyName,
          domain: domain,
          contact_name: contactName,
        },
      },
      success_url: `${origin}/pricing?success=true&plan=${plan}`,
      cancel_url: `${origin}/pricing?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
