import nodemailer from "nodemailer";
import { businessOrderEmail, customerOrderEmail } from "./emailTemplates";
import type { OrderRecord } from "./order";

const requiredEmailEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "BUSINESS_EMAIL", "EMAIL_FROM"];

function assertEmailConfig() {
  const missing = requiredEmailEnv.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing email environment variables: ${missing.join(", ")}`);
  }
}

function createTransporter() {
  assertEmailConfig();

  const port = Number(process.env.SMTP_PORT);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

export async function sendOrderEmails(order: OrderRecord) {
  const brand = process.env.BRAND_NAME || "StyleNest";
  const from = process.env.EMAIL_FROM!;
  const businessEmail = process.env.BUSINESS_EMAIL!;
  const transporter = createTransporter();

  await transporter.sendMail({
    from: `"${brand}" <${from}>`,
    to: businessEmail,
    replyTo: order.email,
    subject: `New Product Order Received - ${order.orderId}`,
    html: businessOrderEmail(order, brand)
  });

  await transporter.sendMail({
    from: `"${brand}" <${from}>`,
    to: order.email,
    replyTo: from,
    subject: `Your Order Has Been Received - ${brand}`,
    html: customerOrderEmail(order, brand, from)
  });
}
