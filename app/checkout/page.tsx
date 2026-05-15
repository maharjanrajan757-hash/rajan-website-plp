"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { ArrowLeft, Lock, PackageCheck, ShieldCheck } from "lucide-react";
import { brandName, formatPrice, product } from "@/lib/product";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
};

function CheckoutForm() {
  const router = useRouter();
  const params = useSearchParams();
  const quantity = Math.max(1, Number(params.get("quantity") || "1"));
  const productName = params.get("productName") || product.name;
  const pricePerPiece = Number(params.get("pricePerPiece") || product.price);
  const totalPrice = Number(params.get("totalPrice") || quantity * pricePerPiece);
  const [form, setForm] = useState<FormState>({ fullName: "", phone: "", email: "", location: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const summary = useMemo(
    () => [
      ["Product Name", productName],
      ["Quantity", quantity],
      ["Price Per Piece", formatPrice(pricePerPiece)],
      ["Total Price", formatPrice(totalPrice)]
    ],
    [productName, quantity, pricePerPiece, totalPrice]
  );

  async function submitOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setErrors({});
    setMessage("");

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          productName,
          quantity,
          pricePerPiece,
          totalPrice
        })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        setErrors(data.errors || {});
        setMessage(data.message || "Order submission failed. Please try again.");
        return;
      }

      const thankYouParams = new URLSearchParams({
        orderId: data.orderId,
        productName,
        quantity: String(quantity),
        totalPrice: String(totalPrice)
      });
      router.push(`/thank-you?${thankYouParams.toString()}`);
    } catch {
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const fieldClass = "mt-2 w-full rounded-md border border-gold/25 bg-black px-4 py-3 text-porcelain outline-none transition placeholder:text-white/35 focus:border-gold";

  return (
    <main className="min-h-screen bg-ink text-porcelain">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gold">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <section className="rounded-lg border border-gold/20 bg-white/[0.04] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">{brandName} Checkout</p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl">Complete your Cash On Delivery order</h1>
            <p className="mt-4 text-white/62">Enter your delivery details. Product and pricing are filled automatically from your selection.</p>

            <form onSubmit={submitOrder} className="mt-8 grid gap-5">
              <label>
                <span className="font-bold text-champagne">Full Name</span>
                <input className={fieldClass} value={form.fullName} onChange={(event) => setForm({ ...form, fullName: event.target.value })} />
                {errors.fullName && <p className="mt-2 text-sm text-red-300">{errors.fullName}</p>}
              </label>
              <label>
                <span className="font-bold text-champagne">Phone Number</span>
                <input className={fieldClass} value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
                {errors.phone && <p className="mt-2 text-sm text-red-300">{errors.phone}</p>}
              </label>
              <label>
                <span className="font-bold text-champagne">Email Address</span>
                <input type="email" className={fieldClass} value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
                {errors.email && <p className="mt-2 text-sm text-red-300">{errors.email}</p>}
              </label>
              <label>
                <span className="font-bold text-champagne">Exact Location</span>
                <textarea
                  className={`${fieldClass} min-h-28 resize-y`}
                  placeholder="Kindly share your exact location"
                  value={form.location}
                  onChange={(event) => setForm({ ...form, location: event.target.value })}
                />
                {errors.location && <p className="mt-2 text-sm text-red-300">{errors.location}</p>}
              </label>

              <div className="grid gap-4 rounded-md border border-gold/20 bg-black p-5 sm:grid-cols-2">
                {summary.map(([label, value]) => (
                  <div key={String(label)}>
                    <div className="text-xs uppercase tracking-[0.18em] text-white/40">{label}</div>
                    <div className="mt-1 font-bold text-champagne">{value}</div>
                  </div>
                ))}
              </div>

              {message && <div className="rounded-md border border-red-300/30 bg-red-950/40 p-4 text-red-100">{message}</div>}

              <button
                type="submit"
                disabled={submitting}
                className="min-h-13 rounded-md bg-gold px-6 py-4 font-black text-ink transition hover:bg-champagne disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting Order..." : "Order Now"}
              </button>
            </form>
          </section>

          <aside className="h-fit rounded-lg border border-gold/20 bg-black p-6 shadow-glow">
            <h2 className="font-serif text-3xl text-champagne">Order Summary</h2>
            <div className="mt-6 divide-y divide-white/10">
              {summary.map(([label, value]) => (
                <div key={String(label)} className="flex items-center justify-between gap-4 py-4">
                  <span className="text-white/55">{label}</span>
                  <span className="text-right font-bold">{value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 py-4">
                <span className="text-white/55">Payment Method</span>
                <span className="font-bold text-gold">Cash On Delivery</span>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {[
                [ShieldCheck, "Your private details stay server-side"],
                [PackageCheck, "We call before confirming delivery"],
                [Lock, "No online payment required"]
              ].map(([Icon, label]) => (
                <div key={String(label)} className="flex items-center gap-3 rounded-md bg-white/[0.04] p-3 text-sm text-white/72">
                  <Icon className="text-gold" size={18} />
                  {String(label)}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-ink p-8 text-porcelain">Loading checkout...</div>}>
      <CheckoutForm />
    </Suspense>
  );
}
