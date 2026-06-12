import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { productDetails, whatsappHref } from "@/components/product-data";

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

export async function generateMetadata({ params }: ProductPageProps) {
  const { category } = await params;
  const group = productDetails.find((item) => item.slug === category);

  if (!group) {
    return {};
  }

  return {
    title: `${group.title} | GCN Beauty`,
    description: group.copy
  };
}

export default async function ProductCategoryPage({ params }: ProductPageProps) {
  const { category } = await params;
  const group = productDetails.find((item) => item.slug === category);

  if (!group) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--ink)]">
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
          {group.items.map((item) => (
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
                  loading="eager"
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
