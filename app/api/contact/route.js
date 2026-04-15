import nodemailer from 'nodemailer';

/**
 * Contact form submission handler (POST only).
 * Sends a formatted HTML email via SMTP using Nodemailer.
 */

/** Field names we require in the JSON body */
const REQUIRED_FIELDS = [
  'fullName',
  'email',
  'phone',
  'carePathway',
  'message',
];

/**
 * Escape HTML entities so user input is safe inside the email body.
 * @param {string} str
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Build a simple, readable HTML email with all submitted fields.
 * @param {Record<string, string>} data
 */
function buildEmailHtml(data) {
  const rows = REQUIRED_FIELDS.map(
    (key) =>
      `<tr>
        <td style="padding:8px 12px;border:1px solid #e5e5e5;background:#fafafa;font-weight:600;">${escapeHtml(key)}</td>
        <td style="padding:8px 12px;border:1px solid #e5e5e5;">${escapeHtml(data[key] ?? '')}</td>
      </tr>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>New contact form message</title></head>
<body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111;">
  <h2 style="margin:0 0 16px;">New contact form submission</h2>
  <table style="border-collapse:collapse;width:100%;max-width:560px;">${rows}</table>
  <p style="margin-top:16px;font-size:12px;color:#666;">Sent from your website contact API.</p>
</body>
</html>`;
}

/**
 * Validate env and return config object or null if misconfigured.
 */
function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.RECEIVER_EMAIL;

  if (!host || !port || !user || !pass || !to) {
    return null;
  }

  return {
    host,
    port: Number.parseInt(port, 10),
    user,
    pass,
    to,
  };
}

export async function POST(request) {
  try {
    const config = getSmtpConfig();
    if (!config || Number.isNaN(config.port)) {
      return Response.json(
        {
          success: false,
          error: 'Server email configuration is incomplete.',
        },
        { status: 500 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { success: false, error: 'Invalid JSON body.' },
        { status: 400 }
      );
    }

    /** Ensure every required field is a non-empty string */
    const data = {};
    for (const field of REQUIRED_FIELDS) {
      const value = body[field];
      if (value === undefined || value === null || String(value).trim() === '') {
        return Response.json(
          {
            success: false,
            error: `Missing or empty field: ${field}`,
          },
          { status: 400 }
        );
      }
      data[field] = String(value).trim();
    }

    /** Reusable SMTP transport (A2 Hosting and most hosts use these options) */
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.port === 465,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });

    const subject = `Contact form: ${data.fullName}`;

    await transporter.sendMail({
      from: config.user,
      to: config.to,
      replyTo: data.email,
      subject,
      html: buildEmailHtml(data),
      text: REQUIRED_FIELDS.map((k) => `${k}: ${data[k]}`).join('\n'),
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[contact API]', err);
    const message =
      err instanceof Error ? err.message : 'Failed to send email.';
    return Response.json({ success: false, error: message }, { status: 500 });
  }
}
