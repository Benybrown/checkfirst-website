type Env = {
  ZEPTOMAIL_API_KEY?: string;
  ZEPTOMAIL_FROM_EMAIL?: string;
  ZEPTOMAIL_FROM_NAME?: string;
};

type OptInData = {
  email?: string;
  name?: string;
};

const ZEPTOMAIL_API_URL = "https://api.zeptomail.eu/v1.1/email";
const NOTIFY_EMAIL = "support@checkfirst.io";
const PROMO_CODE = "tprmexpert";

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function emailToken(raw?: string) {
  if (!raw) return "";
  return raw.startsWith("Zoho-enczapikey") ? raw : `Zoho-enczapikey ${raw}`;
}

async function sendZeptoMail(env: Env, payload: unknown) {
  return fetch(ZEPTOMAIL_API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: emailToken(env.ZEPTOMAIL_API_KEY),
    },
    body: JSON.stringify(payload),
  });
}

export const onRequest = () => json({ error: "Method not allowed" }, 405);

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  try {
    const body = (await request.json()) as OptInData;
    const email = body.email?.trim() || "";
    const name = body.name?.trim() || "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: "Valid email is required" }, 400);
    }

    if (!env.ZEPTOMAIL_API_KEY) {
      console.error("ZEPTOMAIL_API_KEY is not configured");
      return json({ error: "Email service not configured" }, 500);
    }

    const from = {
      address: env.ZEPTOMAIL_FROM_EMAIL || "noreply@checkfirst.io",
      name: env.ZEPTOMAIL_FROM_NAME || "CheckFirst TPRM",
    };
    const safeName = escapeHtml(name);

    const userEmailHtml = `<!DOCTYPE html>
<html>
  <body style="font-family:Arial,sans-serif;line-height:1.6;color:#333;">
    <div style="max-width:600px;margin:0 auto;padding:20px;">
      <div style="background:#0f766e;color:white;padding:24px;text-align:center;border-radius:8px 8px 0 0;">
        <h1 style="margin:0;">Your CheckFirst Consultant Code</h1>
      </div>
      <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;">
        <p>Hi${safeName ? ` ${safeName}` : ""},</p>
        <p>Thanks for your interest in CheckFirst for Consultants. Here's your promo code for the Consultant plan at <strong>$99/month</strong> instead of $399:</p>
        <div style="background:#f0fdfa;border:2px dashed #5eead4;border-radius:8px;padding:16px;text-align:center;margin:20px 0;">
          <div style="font-size:28px;font-weight:bold;color:#0f766e;letter-spacing:2px;">${PROMO_CODE}</div>
        </div>
        <p>Use it at checkout when you get started on CheckFirst.</p>
      </div>
    </div>
  </body>
</html>`;

    const userEmailText = `Hi${name ? ` ${name}` : ""},

Your CheckFirst Consultant promo code: ${PROMO_CODE}

Use it at checkout to get the Consultant plan at $99/month instead of $399.

Get started: https://checkfirst.io`;

    const userResponse = await sendZeptoMail(env, {
      from,
      to: [{ email_address: { address: email, name: name || email } }],
      subject: "Your CheckFirst Consultant Promo Code",
      htmlbody: userEmailHtml,
      textbody: userEmailText,
    });

    if (!userResponse.ok) {
      console.error("ZeptoMail user email error", userResponse.status);
      return json({ error: "Failed to send promo email" }, 502);
    }

    const notifyResponse = await sendZeptoMail(env, {
      from,
      to: [{ email_address: { address: NOTIFY_EMAIL, name: "CheckFirst Support" } }],
      reply_to: [{ address: email, name: name || email }],
      subject: `Consultant opt-in: ${email}`,
      htmlbody: `<p><strong>${escapeHtml(name || "Unknown")}</strong> (${escapeHtml(email)}) opted in for the consultant promo code.</p>`,
      textbody: `${name || "Unknown"} (${email}) opted in for the consultant promo code.`,
    });

    if (!notifyResponse.ok) {
      console.error("ZeptoMail notification email error", notifyResponse.status);
      return json({ error: "Failed to notify support" }, 502);
    }

    return json({ success: true });
  } catch (error) {
    console.error("Consultant opt-in error", error);
    return json({ error: "Failed to process request" }, 500);
  }
};
