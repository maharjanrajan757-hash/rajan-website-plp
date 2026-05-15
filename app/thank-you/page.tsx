"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { brandName, formatPrice, product } from "@/lib/product";

function ThankYouContent() {
  const params = useSearchParams();
  const productName = params.get("productName") || product.name;
  const quantity = Number(params.get("quantity") || "1");
  const totalPrice = Number(params.get("totalPrice") || product.price);
  const orderId = params.get("orderId");

  return (
    <main className="grid min-h-screen place-items-center bg-ink px-4 py-12 text-porcelain">
      <section className="w-full max-w-2xl rounded-lg border border-gold/30 bg-white/[0.04] p-7 text-center shadow-glow md:p-10">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold text-ink">
          <CheckCircle2 size={34} />
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.24em] text-gold">{brandName}</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl">Thank you for your order!</h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-white/66">Our sales representative will call you soon to confirm your order.</p>

        <div className="mt-8 rounded-md border border-gold/20 bg-black p-5 text-left">
          {orderId && (
            <div className="flex justify-between gap-4 border-b border-white/10 py-3">
              <span className="text-white/55">Order ID</span>
              <span className="text-right font-bold text-champagne">{orderId}</span>
            </div>
          )}
          <div className="flex justify-between gap-4 border-b border-white/10 py-3">
            <span className="text-white/55">Product ordered</span>
            <span className="text-right font-bold text-champagne">{productName}</span>
          </div>
          <div className="flex justify-between gap-4 border-b border-white/10 py-3">
            <span className="text-white/55">Quantity</span>
            <span className="font-bold">{quantity}</span>
          </div>
          <div className="flex justify-between gap-4 border-b border-white/10 py-3">
            <span className="text-white/55">Total price</span>
            <span className="font-bold">{formatPrice(totalPrice)}</span>
          </div>
          <div className="flex justify-between gap-4 py-3">
            <span className="text-white/55">Payment method</span>
            <span className="font-bold text-gold">Cash On Delivery</span>
          </div>
        </div>

        <Link href="/" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 font-black text-ink hover:bg-champagne">
          Back to Home
        </Link>
      </section>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-ink p-8 text-porcelain">Loading order details...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
