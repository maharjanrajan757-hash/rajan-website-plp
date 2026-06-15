import { NextResponse } from "next/server";

const notificationEmail = "info@supriyaglowcare.com";
const allowedConcerns = new Set([
  "Hair fall",
  "Thin hair",
  "Dandruff or itchy scalp",
  "Slow hair growth",
  "Dry and dull hair"
]);

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

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.BLUEPRINT_FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      console.error(
        "Blueprint notification email is not configured. Set RESEND_API_KEY and BLUEPRINT_FROM_EMAIL."
      );
      return NextResponse.json(
        {
          success: true,
          notificationSent: false,
          warning:
            "Your Blueprint is ready, but we could not send the notification email."
        },
        { status: 200 }
      );
    }

    const submittedAt = new Date();
    const submittedAtNepal = new Intl.DateTimeFormat("en-NP", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "Asia/Kathmandu"
    }).format(submittedAt);

    let response: Response;

    try {
      response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [notificationEmail],
          reply_to: email,
          subject: `New Hair Growth Blueprint lead: ${name}`,
          html: `
            <h2>New 30-Day Hair Growth Blueprint submission</h2>
            <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
              <tr><td><strong>Full name</strong></td><td>${escapeHtml(name)}</td></tr>
              <tr><td><strong>Phone or WhatsApp</strong></td><td>${escapeHtml(phone)}</td></tr>
              <tr><td><strong>Email address</strong></td><td>${escapeHtml(email)}</td></tr>
              <tr><td><strong>Main hair concern</strong></td><td>${escapeHtml(concern)}</td></tr>
              <tr><td><strong>Submitted</strong></td><td>${escapeHtml(submittedAtNepal)}</td></tr>
            </table>
          `,
          text: [
            "New 30-Day Hair Growth Blueprint submission",
            `Full name: ${name}`,
            `Phone or WhatsApp: ${phone}`,
            `Email address: ${email}`,
            `Main hair concern: ${concern}`,
            `Submitted: ${submittedAtNepal}`
          ].join("\n")
        })
      });
    } catch (error) {
      console.error("Resend blueprint notification request failed:", error);
      return NextResponse.json({
        success: true,
        notificationSent: false,
        warning:
          "Your Blueprint is ready, but we could not send the notification email."
      });
    }

    if (!response.ok) {
      const providerError = await response.text();
      console.error("Resend blueprint notification failed:", providerError);
      return NextResponse.json(
        {
          success: true,
          notificationSent: false,
          warning:
            "Your Blueprint is ready, but we could not send the notification email."
        },
        { status: 200 }
      );
    }

    return NextResponse.json({ success: true, notificationSent: true });
  } catch (error) {
    console.error("Blueprint lead submission failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
