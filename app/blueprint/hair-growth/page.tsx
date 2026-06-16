import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { HairGrowthBlueprint } from "@/components/hair-growth-blueprint";
import {
  absoluteUrl,
  brandName,
  breadcrumbSchema,
  jsonLd,
  ogImage
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "30-Day Hair Growth Blueprint",
  description:
    "Unlock the 30-Day Hair Growth Blueprint from Supriya Glow Care and follow a simple Japanese rice water inspired hair routine for healthier-looking hair.",
  keywords: [
    brandName,
    "30-Day Hair Growth Blueprint",
    "hair growth guide Nepal",
    "Japanese rice water hair routine",
    "hair fall routine Nepal",
    "haircare Nepal"
  ],
  alternates: {
    canonical: "/blueprint/hair-growth"
  },
  openGraph: {
    title: `30-Day Hair Growth Blueprint | ${brandName}`,
    description:
      "Get a simple Japanese rice water inspired hair routine, scalp care rules, weekly plan, and product guidance.",
    url: absoluteUrl("/blueprint/hair-growth"),
    type: "article",
    images: [
      {
        url: absoluteUrl(ogImage),
        width: 1200,
        height: 630,
        alt: "Supriya Glow Care 30-Day Hair Growth Blueprint"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `30-Day Hair Growth Blueprint | ${brandName}`,
    description:
      "Unlock a simple 30-day hair routine for healthier-looking hair.",
    images: [absoluteUrl(ogImage)]
  }
};

export default function HairGrowthBlueprintPage() {
  const schema = [
    breadcrumbSchema([
      { name: "Home", url: absoluteUrl("/") },
      {
        name: "30-Day Hair Growth Blueprint",
        url: absoluteUrl("/blueprint/hair-growth")
      }
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "30-Day Hair Growth Blueprint",
      description:
        "A Japanese rice water inspired hair growth guide with daily routine steps, scalp care rules, and weekly planning.",
      url: absoluteUrl("/blueprint/hair-growth"),
      publisher: {
        "@type": "Organization",
        name: brandName
      }
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <header className="border-b border-[var(--line)] bg-[#fffaf8]/95 backdrop-blur-xl">
        <div className="section-shell flex min-h-24 items-center justify-between gap-4 py-4">
          <Link href="/#products" className="flex items-center gap-3">
            <Image
              src="/images/Logo-removebg-preview.png"
              alt="Supriya Glow Care logo"
              width={500}
              height={500}
              priority
              className="h-28 w-36 object-contain sm:w-40"
            />
          </Link>
          <Link
            href="/#products"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--champagne-dark)] transition hover:bg-[var(--cream)]"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back
          </Link>
        </div>
      </header>

      <HairGrowthBlueprint />
    </main>
  );
}
