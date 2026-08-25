"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const heroProducts = [
  {
    name: "Japanese Rice Water Shampoo & Hair Mask",
    image: "/images/haircare-nourish-oil.png",
    alt: "Japanese Rice Water Shampoo and Thai Coconut Hair Mask product set"
  },
  {
    name: "Gold Cleansing Milk",
    image: "/images/skincare-clarifying-gel.png",
    alt: "Gold Cleansing Milk skincare cleanser product"
  },
  {
    name: "Body Lotion",
    image: "/images/Skin Product 2.JPG",
    alt: "Leito Milk Protein Body Lotion SPF 25 plus"
  },
  {
    name: "Soft Cream",
    image: "/images/Skin Product 3.JPG",
    alt: "MG Goldline Vitamin E 24 hour moisture soft cream"
  },
  {
    name: "Brightening and Moisturizing Cream",
    image: "/images/Skin Product1.JPG",
    alt: "Leito Brightening and Moisturizing Cream SPF 35"
  },
  {
    name: "Hyaluronic Acid Sunscreen Gel",
    image: "/images/skincare-daily-cream.png",
    alt: "One percent Hyaluronic Acid Sunscreen Gel product"
  },
  {
    name: "Oil-Free Sun Protection Lotion",
    image: "/images/skincare-glow-serum.png",
    alt: "Oil-Free Sun Protection Lotion SPF 50 plus product"
  },
  {
    name: "Sheep Placenta Serum",
    image: "/images/skincare-product-6.png",
    alt: "SiwoNong Sheep Placenta Serum capsule product"
  },
  {
    name: "Papaya Sunscreen",
    image: "/images/skincare-product-7.png",
    alt: "Leito Papaya Sunscreen SPF 50 plus product"
  },
  {
    name: "Primer + Matte Foundation",
    image: "/images/skincare-radiance-pack.png",
    alt: "Pro Coverage Primer plus Matte Foundation product"
  },
  {
    name: "Hair Tonic",
    image: "/images/Hair Procudt 1.JPG",
    alt: "MG Goldline Vitamin E Anti Hair Fall Hair Tonic"
  },
  {
    name: "Botox Hair Treatment",
    image: "/images/Gemini_Generated_Image_dhc7y3dhc7y3dhc7.png",
    alt: "Leito Botox shampoo and Botox hair treatment product set"
  },
  {
    name: "Dental Flosser",
    image: "/images/hero-slider-products/product-20.png",
    alt: "Dental flosser product poster"
  },
  {
    name: "Luxury Lip Gloss",
    image: "/images/hero-slider-products/product-21.png",
    alt: "Luxury lip gloss premium finish product poster"
  },
  {
    name: "Chamomile Skin Care Serum",
    image: "/images/hero-slider-products/product-22.png",
    alt: "Chamomile skin care serum product poster"
  },
  {
    name: "Milk Body Lotion",
    image: "/images/hero-slider-products/product-23.png",
    alt: "Milk body lotion premium body care product poster"
  },
  {
    name: "Cosmetic Lip Liner",
    image: "/images/hero-slider-products/product-24.png",
    alt: "Cosmetic lip liner product poster"
  },
  {
    name: "Leito 4-in-1 Cream",
    image: "/images/hero-slider-products/product-25.png",
    alt: "Leito four in one cream product poster"
  },
  {
    name: "Premium Skin Care Set",
    image: "/images/hero-slider-products/product-26.png",
    alt: "Premium skin care set product poster"
  },
  {
    name: "Salicylic Acid Shower Gel",
    image: "/images/hero-slider-products/product-9.png",
    alt: "Salicylic acid shower gel 500ML product poster"
  },
  {
    name: "Anti-Wrinkle Skin Care Set",
    image: "/images/hero-slider-products/product-10.png",
    alt: "Anti-wrinkle skin care cream set product poster"
  },
  {
    name: "Green Skin Care Routine Set",
    image: "/images/hero-slider-products/product-11.png",
    alt: "Green skin care routine set product poster"
  },
  {
    name: "Premium Body Scrub",
    image: "/images/hero-slider-products/product-12.png",
    alt: "Premium body scrub product poster"
  },
  {
    name: "Bifennia Body Wash",
    image: "/images/hero-slider-products/product-13.png",
    alt: "Bifennia body wash 750ML product poster"
  },
  {
    name: "Vitamin E Hair Tonic",
    image: "/images/hero-slider-products/product-14.png",
    alt: "MG Goldline Vitamin E hair tonic product poster"
  },
  {
    name: "Snail Liquid Moisturizing Cream",
    image: "/images/hero-slider-products/product-17.png",
    alt: "Snail liquid moisturizing anti-wrinkle day cream product poster"
  },
  {
    name: "Keratin Smooth Hair Treatment",
    image: "/images/hero-slider-products/product-19.png",
    alt: "Keratin smooth hair treatment product poster"
  }
];

export function HeroProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = heroProducts[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroProducts.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  function showPrevious() {
    setActiveIndex(
      (current) => (current - 1 + heroProducts.length) % heroProducts.length
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % heroProducts.length);
  }

  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div className="absolute inset-x-10 bottom-8 top-16 bg-gradient-to-b from-[#f3cbd1]/40 via-[#fff7f3]/65 to-[#b76e79]/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-white/70 bg-white/55 p-4 shadow-2xl shadow-rose-900/15 backdrop-blur md:p-6">
        <div className="relative flex min-h-[410px] items-center justify-center rounded-lg bg-gradient-to-br from-white via-[#fff7f3] to-[#f7e1d8] px-4 py-6 md:min-h-[520px] md:px-8">
          <div className="absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-[#d4a6b6] to-transparent" />
          <Image
            key={activeProduct.image}
            src={activeProduct.image}
            alt={activeProduct.alt}
            width={1200}
            height={1600}
            priority={activeIndex === 0}
            sizes="(min-width: 1024px) 470px, (min-width: 768px) 52vw, 88vw"
            className="hero-product-slide max-h-[350px] w-full object-contain drop-shadow-[0_28px_36px_rgba(143,70,84,0.22)] md:max-h-[455px]"
          />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous product"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--champagne-dark)] transition hover:border-[var(--champagne)] hover:bg-[var(--cream)]"
          >
            <ChevronLeft aria-hidden="true" size={18} />
          </button>
          <div className="min-w-0 flex-1 px-1 text-center">
            <p className="text-balance text-xs font-bold uppercase leading-5 tracking-[0.12em] text-[var(--champagne-dark)] sm:tracking-[0.14em]">
              {activeProduct.name}
            </p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              {activeIndex + 1} / {heroProducts.length}
            </p>
          </div>
          <button
            type="button"
            onClick={showNext}
            aria-label="Show next product"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--champagne-dark)] transition hover:border-[var(--champagne)] hover:bg-[var(--cream)]"
          >
            <ChevronRight aria-hidden="true" size={18} />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {heroProducts.map((product, index) => (
            <button
              key={product.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${product.name}`}
              aria-current={activeIndex === index}
              className={`h-2.5 rounded-full transition ${
                activeIndex === index
                  ? "w-8 bg-[var(--champagne-dark)]"
                  : "w-2.5 bg-[#d4a6b6]/55 hover:bg-[#d4a6b6]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
