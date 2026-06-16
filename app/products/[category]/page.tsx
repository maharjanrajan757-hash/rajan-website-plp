import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { productDetails, whatsappHref } from "@/components/product-data";
import {
  absoluteUrl,
  brandName,
  breadcrumbSchema,
  homepageDescription,
  jsonLd,
  ogImage,
  productItemListSchema
} from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return productDetails.map((group) => ({
    category: group.slug
  }));
}

export async function generateMetadata({
  params
}: ProductPageProps): Promise<Metadata> {
  const { category } = await params;
  const group = productDetails.find((item) => item.slug === category);

  if (!group) {
    return {};
  }

  const pageUrl = absoluteUrl(`/products/${group.slug}`);
  const image = group.items[0]?.image || ogImage;
  const title =
    group.slug === "skincare"
      ? "Skincare Products in Nepal"
      : "Haircare Products in Nepal";
  const description =
    group.slug === "skincare"
      ? "Shop premium skincare products in Nepal including sunscreen, cleansing milk, serum, papaya sunscreen, and primer foundation from Supriya Glow Care."
      : "Shop premium haircare products in Nepal including Japanese Rice Water Shampoo, Thai Coconut Hair Mask, and Leito hair treatment from Supriya Glow Care.";

  return {
    title,
    description,
    keywords: [
      brandName,
      `${group.title} Nepal`,
      group.slug === "skincare" ? "skincare Nepal" : "haircare Nepal",
      "beauty products Nepal",
      ...group.items.map((item) => `${item.name} Nepal`)
    ],
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title: `${title} | ${brandName}`,
      description,
      url: pageUrl,
      type: "website",
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: `${group.title} by ${brandName}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${brandName}`,
      description,
      images: [absoluteUrl(image)]
    }
  };
}

export default async function ProductCategoryPage({ params }: ProductPageProps) {
  const { category } = await params;
  const group = productDetails.find((item) => item.slug === category);

  if (!group) {
    notFound();
  }

  const pageUrl = absoluteUrl(`/products/${group.slug}`);
  const schema = [
    breadcrumbSchema([
      { name: "Home", url: absoluteUrl("/") },
      { name: group.title, url: pageUrl }
    ]),
    productItemListSchema(group.slug)
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

      <section className="section-shell py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--pink)]">
            {group.eyebrow}
          </p>
          <h1 className="font-display text-5xl font-normal leading-tight text-[var(--ink)] md:text-6xl">
            {group.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
            {group.copy}
          </p>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          {group.items.map((item, index) => (
            <article
              key={item.name}
              className="grid overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--navy)] soft-shadow md:grid-cols-[0.92fr_1.08fr]"
            >
              <div className="flex min-h-[420px] items-center justify-center bg-[var(--pink-soft)]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1428}
                  height={2021}
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 46vw, 100vw"
                  {...(index === 0 ? { priority: true } : { loading: "lazy" as const })}
                  className="h-full min-h-[420px] w-full object-contain object-center"
                />
              </div>
              <div className="flex flex-col p-6 md:p-7">
                <h2 className="font-display text-3xl font-normal leading-tight text-[var(--ink)]">
                  {item.name}
                </h2>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.1em] text-[var(--champagne)]">
                  {item.price}
                </p>
                <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-base leading-7 text-[var(--muted)]">
                      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--pink-soft)] text-[var(--champagne-dark)]">
                        <Check aria-hidden="true" size={15} />
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappHref}
                  className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--champagne-dark)] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--champagne)] hover:text-[var(--black)]"
                >
                  Shop Now
                  <ArrowRight aria-hidden="true" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
