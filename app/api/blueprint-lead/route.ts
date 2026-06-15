import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const fallbackNotificationEmail = "info@supriyaglowcare.com";
const allowedConcerns = new Set([
  "Hair fall",
  "Thin hair",
  "Dandruff or itchy scalp",
  "Slow hair growth",
  "Dry and dull hair"
]);

type Lead = {
  name: string;
  phone: string;
  email: string;
  concern: string;
  submittedAt: string;
};

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      })[character] ?? character
  );
}

function createEmailContent(lead: Lead) {
  return {
    subject: `New Hair Growth Blueprint lead: ${lead.name}`,
    html: `
      <h2>New 30-Day Hair Growth Blueprint submission</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
        <tr><td><strong>Full name</strong></td><td>${escapeHtml(lead.name)}</td></tr>
        <tr><td><strong>Phone or WhatsApp</strong></td><td>${escapeHtml(lead.phone)}</td></tr>
        <tr><td><strong>Email address</strong></td><td>${escapeHtml(lead.email)}</td></tr>
        <tr><td><strong>Main hair concern</strong></td><td>${escapeHtml(lead.concern)}</td></tr>
        <tr><td><strong>Submitted</strong></td><td>${escapeHtml(lead.submittedAt)}</td></tr>
      </table>
    `,
    text: [
      "New 30-Day Hair Growth Blueprint submission",
      `Full name: ${lead.name}`,
      `Phone or WhatsApp: ${lead.phone}`,
      `Email address: ${lead.email}`,
      `Main hair concern: ${lead.concern}`,
      `Submitted: ${lead.submittedAt}`
    ].join("\n")
  };
}

async function sendWithSmtp(
  lead: Lead,
  from: string,
  to: string,
  content: ReturnType<typeof createEmailContent>
) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT || "465");

  if (!host || !user || !pass || !Number.isInteger(port)) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: lead.email,
    ...content
  });

  return true;
}

async function sendWithResend(
  lead: Lead,
  from: string,
  to: string,
  content: ReturnType<typeof createEmailContent>
) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email,
      ...content
    })
  });

  if (!response.ok) {
    const providerError = await response.text();
    throw new Error(
      `Resend rejected Blueprint notification (${response.status}): ${providerError}`
    );
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const concern = typeof body.concern === "string" ? body.concern.trim() : "";

    if (!name || !phone || !email || !allowedConcerns.has(concern)) {
      return NextResponse.json(
        { error: "Please complete every field before viewing the blueprint." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const fromEmail =
      process.env.EMAIL_FROM || process.env.BLUEPRINT_FROM_EMAIL || "";
    const notificationEmail =
      process.env.BUSINESS_EMAIL || fallbackNotificationEmail;

    if (!fromEmail) {
      console.error(
        "Blueprint email configuration error: EMAIL_FROM is missing."
      );
      return NextResponse.json(
        {
          error:
            "Email delivery is temporarily unavailable. Please try again later."
        },
        { status: 503 }
      );
    }

    const lead: Lead = {
      name,
      phone,
      email,
      concern,
      submittedAt: new Intl.DateTimeFormat("en-NP", {
        dateStyle: "full",
        timeStyle: "long",
        timeZone: "Asia/Kathmandu"
      }).format(new Date())
    };
    const content = createEmailContent(lead);

    try {
      const smtpSent = await sendWithSmtp(
        lead,
        fromEmail,
        notificationEmail,
        content
      );
      if (smtpSent) {
        return NextResponse.json({ success: true, provider: "smtp" });
      }
    } catch (error) {
      console.error("Blueprint SMTP notification failed:", error);
    }

    try {
      const resendSent = await sendWithResend(
        lead,
        fromEmail,
        notificationEmail,
        content
      );
      if (resendSent) {
        return NextResponse.json({ success: true, provider: "resend" });
      }
    } catch (error) {
      console.error("Blueprint Resend notification failed:", error);
    }

    const hasSmtpConfiguration = Boolean(
      process.env.SMTP_HOST &&
        process.env.SMTP_USER &&
        process.env.SMTP_PASS
    );
    const hasResendConfiguration = Boolean(process.env.RESEND_API_KEY);

    console.error("Blueprint notification was not delivered.", {
      smtpConfigured: hasSmtpConfiguration,
      resendConfigured: hasResendConfiguration,
      fromConfigured: Boolean(fromEmail),
      recipient: notificationEmail
    });

    return NextResponse.json(
      {
        error:
          hasSmtpConfiguration || hasResendConfiguration
            ? "We could not send the notification email. Please try again."
            : "Email delivery is temporarily unavailable. Please try again later."
      },
      { status: hasSmtpConfiguration || hasResendConfiguration ? 502 : 503 }
    );
  } catch (error) {
    console.error("Blueprint lead submission failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
