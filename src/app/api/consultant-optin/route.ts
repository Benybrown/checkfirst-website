import { NextRequest, NextResponse } from "next/server";

const ZEPTOMAIL_API_URL = "https://api.zeptomail.eu/v1.1/email";
const ZEPTOMAIL_API_KEY = process.env.ZEPTOMAIL_API_KEY;
const FROM_EMAIL = process.env.ZEPTOMAIL_FROM_EMAIL || "noreply@checkfirst.io";
const FROM_NAME = process.env.ZEPTOMAIL_FROM_NAME || "CheckFirst TPRM";
const NOTIFY_EMAIL = "support@checkfirst.io";
const PROMO_CODE = "tprmexpert";

interface OptInData {
  email: string;
  name?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: OptInData = await request.json();
    const { email, name } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!ZEPTOMAIL_API_KEY) {
      console.error("ZEPTOMAIL_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const apiToken = ZEPTOMAIL_API_KEY.startsWith("Zoho-enczapikey")
      ? ZEPTOMAIL_API_KEY
      : `Zoho-enczapikey ${ZEPTOMAIL_API_KEY}`;

    // Send promo code to the user
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0f766e; color: white; padding: 24px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; }
          .code-box { background: #f0fdfa; border: 2px dashed #5eead4; border-radius: 8px; padding: 16px; text-align: center; margin: 20px 0; }
          .code { font-size: 28px; font-weight: bold; color: #0f766e; letter-spacing: 2px; }
          .cta { display: inline-block; background: #0f766e; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0;">Your CheckFirst Consultant Code</h1>
          </div>
          <div class="content">
            <p>Hi${name ? ` ${name}` : ""},</p>
            <p>Thanks for your interest in CheckFirst for Consultants. Here's your promo code for the Consultant plan at <strong>$99/month</strong> (instead of $399):</p>
            <div class="code-box">
              <div class="code">${PROMO_CODE}</div>
            </div>
            <p>This gives you access to all five AI tools:</p>
            <ul>
              <li><strong>JinoXtreme</strong> — Full CSA assessment (243 controls)</li>
              <li><strong>JinoQ&A</strong> — Vendor questionnaire analysis</li>
              <li><strong>JinoDocs</strong> — Document intelligence</li>
              <li><strong>AI-Report</strong> — Automated report generation</li>
              <li><strong>AgentX</strong> — AI research agent</li>
            </ul>
            <p style="text-align:center; margin-top:24px;">
              <a href="https://checkfirst.io" class="cta">Get started on CheckFirst</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const userEmailText = `Hi${name ? ` ${name}` : ""},

Your CheckFirst Consultant promo code: ${PROMO_CODE}

Use it at checkout to get the Consultant plan at $99/month (instead of $399).

You get access to: JinoXtreme, JinoQ&A, JinoDocs, AI-Report, and AgentX.

Get started: https://checkfirst.io`;

    await fetch(ZEPTOMAIL_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: apiToken,
      },
      body: JSON.stringify({
        from: { address: FROM_EMAIL, name: FROM_NAME },
        to: [
          {
            email_address: {
              address: email,
              name: name || email,
            },
          },
        ],
        subject: "Your CheckFirst Consultant Promo Code",
        htmlbody: userEmailHtml,
        textbody: userEmailText,
      }),
    });

    // Notify support
    await fetch(ZEPTOMAIL_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: apiToken,
      },
      body: JSON.stringify({
        from: { address: FROM_EMAIL, name: FROM_NAME },
        to: [
          {
            email_address: {
              address: NOTIFY_EMAIL,
              name: "CheckFirst Support",
            },
          },
        ],
        reply_to: [{ address: email, name: name || email }],
        subject: `Consultant opt-in: ${email}`,
        htmlbody: `<p><strong>${name || "Unknown"}</strong> (${email}) opted in for the consultant promo code.</p>`,
        textbody: `${name || "Unknown"} (${email}) opted in for the consultant promo code.`,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Consultant opt-in error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
