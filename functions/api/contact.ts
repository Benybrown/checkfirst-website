type Env = {
  ZEPTOMAIL_API_KEY?: string;
  ZEPTOMAIL_FROM_EMAIL?: string;
  ZEPTOMAIL_FROM_NAME?: string;
};

type ContactFormData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  vendors?: string;
  message?: string;
};

const ZEPTOMAIL_API_URL = "https://api.zeptomail.eu/v1.1/email";
const TO_EMAIL = "support@checkfirst.io";

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

export const onRequest = () => json({ error: "Method not allowed" }, 405);

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  try {
    const body = (await request.json()) as ContactFormData;
    const firstName = body.firstName?.trim() || "";
    const lastName = body.lastName?.trim() || "";
    const email = body.email?.trim() || "";
    const company = body.company?.trim() || "";
    const vendors = body.vendors?.trim() || "";
    const message = body.message?.trim() || "";
    const name = `${firstName} ${lastName}`.trim();

    if (!firstName || !email || !company) {
      return json({ error: "Missing required fields" }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: "Valid email is required" }, 400);
    }

    if (!env.ZEPTOMAIL_API_KEY) {
      console.error("ZEPTOMAIL_API_KEY is not configured");
      return json({ error: "Email service not configured" }, 500);
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      company: escapeHtml(company),
      vendors: escapeHtml(vendors || "Not specified"),
      message: escapeHtml(message || "No message provided"),
    };

    const htmlContent = `<!DOCTYPE html>
<html>
  <body style="font-family:Arial,sans-serif;line-height:1.6;color:#333;">
    <div style="max-width:600px;margin:0 auto;padding:20px;">
      <div style="background:#0f766e;color:white;padding:20px;text-align:center;border-radius:5px 5px 0 0;">
        <h1>New Contact Form Submission</h1>
        <p>TPRM Demo Request</p>
      </div>
      <div style="background:#f9f9f9;padding:20px;border-radius:0 0 5px 5px;">
        <p><strong>Name:</strong><br>${safe.name}</p>
        <p><strong>Email:</strong><br><a href="mailto:${safe.email}">${safe.email}</a></p>
        <p><strong>Company:</strong><br>${safe.company}</p>
        <p><strong>Number of Vendors:</strong><br>${safe.vendors}</p>
        <p><strong>Message:</strong><br>${safe.message}</p>
      </div>
    </div>
  </body>
</html>`;

    const textContent = `New Contact Form Submission - TPRM Demo Request

Name: ${name}
Email: ${email}
Company: ${company}
Number of Vendors: ${vendors || "Not specified"}
Message: ${message || "No message provided"}`;

    const response = await fetch(ZEPTOMAIL_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: emailToken(env.ZEPTOMAIL_API_KEY),
      },
      body: JSON.stringify({
        from: {
          address: env.ZEPTOMAIL_FROM_EMAIL || "noreply@checkfirst.io",
          name: env.ZEPTOMAIL_FROM_NAME || "CheckFirst TPRM",
        },
        to: [{ email_address: { address: TO_EMAIL, name: "CheckFirst Support" } }],
        reply_to: [{ address: email, name }],
        subject: `TPRM Demo Request from ${name} at ${company}`,
        htmlbody: htmlContent,
        textbody: textContent,
      }),
    });

    if (!response.ok) {
      console.error("ZeptoMail API error", response.status);
      return json({ error: "Failed to send email" }, 502);
    }

    return json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact form error", error);
    return json({ error: "Failed to send email" }, 500);
  }
};
