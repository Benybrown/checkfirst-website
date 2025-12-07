import { NextRequest, NextResponse } from 'next/server';

const ZEPTOMAIL_API_URL = 'https://api.zeptomail.eu/v1.1/email';
const ZEPTOMAIL_API_KEY = process.env.ZEPTOMAIL_API_KEY;
const FROM_EMAIL = process.env.ZEPTOMAIL_FROM_EMAIL || 'noreply@checkfirst.io';
const FROM_NAME = process.env.ZEPTOMAIL_FROM_NAME || 'CheckFirst TPRM';
const TO_EMAIL = 'support@checkfirst.io';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  vendors: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, company, vendors, message } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!ZEPTOMAIL_API_KEY) {
      console.error('ZEPTOMAIL_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Prepare email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0F4C81; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0F4C81; }
          .value { margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>TPRM Demo Request</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${company}</div>
            </div>
            <div class="field">
              <div class="label">Number of Vendors:</div>
              <div class="value">${vendors}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message || 'No message provided'}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
New Contact Form Submission - TPRM Demo Request

Name: ${name}
Email: ${email}
Company: ${company}
Number of Vendors: ${vendors}
Message: ${message || 'No message provided'}
    `;

    // Prepare ZeptoMail API token
    const apiToken = ZEPTOMAIL_API_KEY.startsWith('Zoho-enczapikey')
      ? ZEPTOMAIL_API_KEY
      : `Zoho-enczapikey ${ZEPTOMAIL_API_KEY}`;

    // Send email via ZeptoMail
    const emailData = {
      from: {
        address: FROM_EMAIL,
        name: FROM_NAME
      },
      to: [
        {
          email_address: {
            address: TO_EMAIL,
            name: 'CheckFirst Support'
          }
        }
      ],
      reply_to: [
        {
          address: email,
          name: name
        }
      ],
      subject: `TPRM Demo Request from ${name} at ${company}`,
      htmlbody: htmlContent,
      textbody: textContent
    };

    const response = await fetch(ZEPTOMAIL_API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': apiToken
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('ZeptoMail API error:', response.status, errorData);
      throw new Error(`ZeptoMail API error: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Email sent successfully:', responseData);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });

  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
