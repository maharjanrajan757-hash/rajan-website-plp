import { NextResponse } from "next/server";
import { appendOrderToSheet } from "@/lib/googleSheets";
import { sendOrderEmails } from "@/lib/email";
import { createOrderRecord, validateOrderPayload, type OrderPayload } from "@/lib/order";

function normalizeOrigin(value?: string | null) {
  if (!value) return "";
  return value.trim().replace(/\/$/, "");
}

function getAllowedOrigins() {
  const origins = [
    process.env.FRONTEND_URL,
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
  ];

  if (process.env.FRONTEND_URLS) {
    origins.push(...process.env.FRONTEND_URLS.split(","));
  }

  return new Set(origins.map(normalizeOrigin).filter(Boolean));
}

export async function POST(request: Request) {
  try {
    const origin = normalizeOrigin(request.headers.get("origin"));
    const allowedOrigins = getAllowedOrigins();

    if (allowedOrigins.size > 0 && origin && !allowedOrigins.has(origin)) {
      return NextResponse.json({ success: false, message: "Request origin is not allowed." }, { status: 403 });
    }

    const body = (await request.json()) as Partial<OrderPayload>;
    const payload: OrderPayload = {
      fullName: String(body.fullName ?? "").trim(),
      phone: String(body.phone ?? "").trim(),
      email: String(body.email ?? "").trim(),
      location: String(body.location ?? "").trim(),
      productName: String(body.productName ?? "").trim(),
      quantity: Number(body.quantity),
      pricePerPiece: Number(body.pricePerPiece),
      totalPrice: Number(body.totalPrice),
      notes: String(body.notes ?? "").trim()
    };

    const errors = validateOrderPayload(payload);
    if (Object.keys(errors).length) {
      return NextResponse.json(
        { success: false, message: "Please correct the highlighted fields.", errors },
        { status: 400 }
      );
    }

    const expectedTotal = payload.quantity * payload.pricePerPiece;
    if (Math.abs(expectedTotal - payload.totalPrice) > 0.01) {
      return NextResponse.json(
        {
          success: false,
          message: "Total price does not match the selected quantity and price.",
          errors: { totalPrice: "Total price must match quantity x price per piece." }
        },
        { status: 400 }
      );
    }

    const order = createOrderRecord(payload);

    await appendOrderToSheet(order);
    await sendOrderEmails(order);

    return NextResponse.json({ success: true, orderId: order.orderId });
  } catch (error) {
    console.error("Order submission failed", error);
    const message = error instanceof Error ? error.message : "Order submission failed.";
    return NextResponse.json(
      {
        success: false,
        message:
          process.env.NODE_ENV === "production"
            ? "We could not submit your order right now. Please try again or contact support."
            : message
      },
      { status: 500 }
    );
  }
}
