"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Gift,
  Headphones,
  PackageCheck,
  Play,
  ShieldCheck,
  Sparkles,
  Truck
} from "lucide-react";
import { brandName, formatPrice, product } from "@/lib/product";

function checkoutHref(quantity: number) {
  const total = quantity * product.price + product.deliveryFee;
  const params = new URLSearchParams({
    productName: product.name,
    quantity: String(quantity),
    pricePerPiece: String(product.price),
    totalPrice: String(total)
  });

  return `/checkout?${params.toString()}`;
}

function ButtonLink({
  children,
  quantity,
  variant = "primary"
}: {
  children: React.ReactNode;
  quantity: number;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={checkoutHref(quantity)}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-6 text-sm font-black shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
        variant === "primary"
          ? "bg-[#8b6745] text-white hover:bg-[#745337]"
          : "border border-[#b99a76] bg-white text-[#6f563d] hover:bg-[#f7efe5]"
      }`}
    >
      {children}
    </Link>
  );
}

function embedUrl(url: string) {
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
    return url;
  }

  const youtube = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]+)/i);
  if (youtube?.[1]) {
    return `https://www.youtube.com/embed/${youtube[1]}`;
  }

  const instagram = url.match(/instagram\.com\/(?:reel|p|tv)\/([^/?#]+)/i);
  if (instagram?.[1]) {
    return `https://www.instagram.com/reel/${instagram[1]}/embed`;
  }

  const tiktok = url.match(/tiktok\.com\/.*\/video\/(\d+)/i);
  if (tiktok?.[1]) {
    return `https://www.tiktok.com/embed/v2/${tiktok[1]}`;
  }

  return "";
}

function isDirectVideo(url: string) {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
}

function isPlaceholderUrl(url: string) {
  return /\/example\d*\/?$/i.test(url);
}

function ProductGallery({ active, setActive }: { active: number; setActive: (index: number) => void }) {
  const next = () => setActive((active + 1) % product.images.length);
  const previous = () => setActive((active - 1 + product.images.length) % product.images.length);

  return (
    <div className="rounded-lg border border-[#decdb7] bg-white p-4 shadow-glow">
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-md bg-[#fbf5ec] luxury-ring">
        <Image
          src={product.images[active]}
          alt={`${product.name} ${active + 1}`}
          fill
          sizes="(max-width: 768px) 92vw, 520px"
          className="object-cover transition duration-500 hover:scale-[1.02]"
          quality={88}
          priority={active === 0}
        />
        <button
          type="button"
          aria-label="Previous image"
          onClick={previous}
          className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#6f563d] shadow ring-1 ring-[#decdb7] transition hover:bg-[#f3e7d8]"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={next}
          className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#6f563d] shadow ring-1 ring-[#decdb7] transition hover:bg-[#f3e7d8]"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {product.images.map((image, index) => (
          <button
            type="button"
            key={image}
            onClick={() => setActive(index)}
            className={`relative aspect-square overflow-hidden rounded-md border bg-[#fbf5ec] transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
              active === index ? "border-[#8b6745] ring-2 ring-[#e8d8c2]" : "border-[#eadfce]"
            }`}
            aria-label={`Show product image ${index + 1}`}
          >
            <Image src={image} alt="" fill sizes="110px" className="object-cover" quality={76} />
          </button>
        ))}
      </div>
    </div>
  );
}

function ReelsSection() {
  if (!product.reels.length) return null;

  return (
    <section className="border-y border-[#eadfce] bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8b6745]">Style in motion</p>
          <h2 className="mt-3 font-serif text-3xl text-[#2b2118] md:text-5xl">Watch the collection up close</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {product.reels.map((reel, index) => {
            const source = embedUrl(reel.url);
            const isPlaceholder = isPlaceholderUrl(reel.url);
            const canEmbed = source && !isPlaceholder;

            return (
              <div key={reel.url} className="mx-auto w-full max-w-[310px] rounded-[34px] border border-[#d8c4aa] bg-[#2b2118] p-3 shadow-glow">
                <div className="rounded-[26px] border border-white/15 bg-white p-3">
                  <div className="mx-auto mb-3 h-1.5 w-20 rounded-full bg-[#d8c4aa]" />
                  <div className="relative aspect-[9/16] overflow-hidden rounded-[20px] bg-[#fbf5ec]">
                    {canEmbed && isDirectVideo(source) ? (
                      <video
                        src={source}
                        poster={reel.thumbnail ?? product.images[index % product.images.length]}
                        controls
                        preload="metadata"
                        playsInline
                        className="h-full w-full bg-black object-cover"
                      />
                    ) : canEmbed ? (
                      <iframe
                        src={source}
                        title={reel.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="h-full w-full border-0"
                      />
                    ) : (
                      <a href={reel.url} target="_blank" rel="noreferrer" className="group relative flex h-full items-center justify-center text-center">
                        <Image
                          src={reel.thumbnail ?? product.images[index % product.images.length]}
                          alt={`${reel.title} thumbnail`}
                          fill
                          sizes="310px"
                          className="object-contain p-8 opacity-90 transition duration-500 group-hover:scale-105"
                          quality={78}
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-[#2b2118]/72 via-transparent to-transparent" />
                        <span className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-white text-[#8b6745] shadow-lg transition group-hover:scale-105">
                          <Play fill="currentColor" size={26} />
                        </span>
                        <span className="absolute bottom-5 left-4 right-4 z-10 text-sm font-black text-white">{reel.title}</span>
                      </a>
                    )}
                  </div>
                  {!canEmbed && (
                    <p className="mt-3 text-center text-xs text-[#6f6255]">
                      This sample URL is a placeholder. Real Instagram, TikTok, YouTube, or MP4 links will play here.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const total = useMemo(() => quantity * product.price + product.deliveryFee, [quantity]);

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#2b2118]">
      <header className="sticky top-0 z-30 border-b border-[#eadfce] bg-white/88 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" aria-label={`${brandName} home`} className="relative block h-16 w-48 sm:h-20 sm:w-64">
            <Image
              src="/images/Final_Logo_plp.png"
              alt={brandName}
              fill
              sizes="144px"
              className="object-contain object-left"
              priority
            />
          </Link>
          <ButtonLink quantity={quantity}>Order Now</ButtonLink>
        </div>
      </header>

      <section className="soft-paper overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-[1.03fr_0.97fr]">
          <div className="float-in">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#decdb7] bg-white px-4 py-2 text-sm font-bold text-[#8b6745] shadow-sm">
              <Sparkles size={16} /> Cash on Delivery Available
            </div>
            <h1 className="font-serif text-5xl leading-tight text-[#2b2118] md:text-7xl">{product.headline}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5e5349]">{product.subheadline}</p>
            <p className="mt-4 max-w-xl text-[#756a60]">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink quantity={quantity}>Purchase Now</ButtonLink>
              <ButtonLink quantity={quantity} variant="secondary">
                Buy Now
              </ButtonLink>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                ["COD", "Pay after delivery"],
                ["Fast", "2-5 business days"],
                ["Support", "Order confirmation call"]
              ].map(([title, copy]) => (
                <div key={title} className="rounded-md border border-[#eadfce] bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="text-sm font-black text-[#8b6745]">{title}</div>
                  <div className="mt-1 text-sm text-[#6f6255]">{copy}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-8 rounded-full border border-[#decdb7]" />
            <div className="relative aspect-square w-full max-w-[520px] rounded-lg border border-[#eadfce] bg-white shadow-glow">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 92vw, 520px"
                className="object-cover drop-shadow-sm"
                quality={88}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-[#f8f0e6] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_0.9fr]">
          <ProductGallery active={activeImage} setActive={setActiveImage} />
          <div className="self-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8b6745]">Limited offer</p>
            <h2 className="mt-3 font-serif text-4xl text-[#2b2118] md:text-5xl">{product.name}</h2>
            <div className="mt-5 flex flex-wrap items-end gap-3">
              <span className="font-serif text-5xl font-bold text-[#8b6745]">{formatPrice(product.price)}</span>
              <span className="pb-2 text-xl text-[#9b9288] line-through">{formatPrice(product.compareAtPrice)}</span>
            </div>
            <div className="mt-4 inline-flex rounded-full bg-[#2b2118] px-4 py-2 text-sm font-black text-white">{product.offer}</div>
            <ul className="mt-7 grid gap-3">
              {product.benefits.slice(0, 6).map((benefit) => (
                <li key={benefit} className="flex gap-3 text-[#5e5349]">
                  <BadgeCheck className="mt-0.5 shrink-0 text-[#8b6745]" size={20} />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-lg border border-[#decdb7] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="font-bold text-[#2b2118]">Quantity</span>
                <div className="flex items-center rounded-md border border-[#decdb7]">
                  <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="h-11 w-11 text-xl text-[#8b6745]" aria-label="Decrease quantity">
                    -
                  </button>
                  <span className="grid h-11 w-12 place-items-center border-x border-[#decdb7] font-bold">{quantity}</span>
                  <button type="button" onClick={() => setQuantity((value) => value + 1)} className="h-11 w-11 text-xl text-[#8b6745]" aria-label="Increase quantity">
                    +
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-[#eadfce] pt-4">
                <span className="text-[#6f6255]">Live total</span>
                <span className="font-serif text-3xl font-bold text-[#8b6745]">{formatPrice(total)}</span>
              </div>
              <div className="mt-2 text-sm text-[#756a60]">Free delivery included. Free delivery on orders above {formatPrice(product.freeDeliveryThreshold)}.</div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <ButtonLink quantity={quantity}>Purchase Now</ButtonLink>
                <ButtonLink quantity={quantity} variant="secondary">
                  Order Now
                </ButtonLink>
                <ButtonLink quantity={quantity}>Buy Now</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReelsSection />

      <section className="bg-[#fffaf5] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8b6745]">Why buy</p>
              <h2 className="mt-3 font-serif text-4xl text-[#2b2118] md:text-5xl">Luxury styling made effortless</h2>
              <div className="mt-8">
                <ButtonLink quantity={quantity}>Order Now</ButtonLink>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {product.benefits.map((benefit, index) => (
                <div key={benefit} className="rounded-md border border-[#eadfce] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-[#f3e7d8] text-[#8b6745]">
                    {index % 3 === 0 ? <Sparkles size={20} /> : index % 3 === 1 ? <Gift size={20} /> : <ShieldCheck size={20} />}
                  </div>
                  <p className="font-bold text-[#2b2118]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadfce] bg-[#f8f0e6] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-4xl text-[#2b2118] md:text-5xl">Loved by style-conscious customers</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {product.testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-lg border border-[#decdb7] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-sm font-black text-[#8b6745]">5/5 rating</div>
                <p className="mt-4 leading-7 text-[#5e5349]">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-5 font-bold text-[#2b2118]">- {testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-serif text-4xl text-[#2b2118] md:text-5xl">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-[#eadfce] rounded-lg border border-[#decdb7] bg-[#fffaf5] shadow-sm">
            {product.faqs.map((faq) => (
              <details key={faq.question} className="group p-5">
                <summary className="cursor-pointer list-none font-bold text-[#2b2118] transition group-open:text-[#8b6745]">{faq.question}</summary>
                <p className="mt-3 leading-7 text-[#6f6255]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f0e6] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-lg border border-[#decdb7] bg-white p-8 text-center shadow-glow md:p-12">
            <h2 className="font-serif text-4xl text-[#2b2118] md:text-6xl">Ready to complete your look?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#6f6255]">Order today with Cash On Delivery and receive a confirmation call from our team.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink quantity={quantity}>Purchase Now</ButtonLink>
              <ButtonLink quantity={quantity} variant="secondary">
                Order Now
              </ButtonLink>
              <ButtonLink quantity={quantity}>Buy Now</ButtonLink>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                [PackageCheck, "Easy order process"],
                [Truck, "Fast delivery"],
                [Headphones, "Customer support"],
                [ShieldCheck, "Cash on Delivery"]
              ].map(([Icon, label]) => (
                <div key={String(label)} className="rounded-md border border-[#eadfce] bg-[#fffaf5] p-4 text-sm font-bold text-[#2b2118]">
                  <Icon className="mx-auto mb-2 text-[#8b6745]" size={22} />
                  {String(label)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
