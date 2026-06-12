import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HairGrowthBlueprint } from "@/components/hair-growth-blueprint";

export const metadata = {
  title: "30-Day Hair Growth Blueprint | GCN Beauty",
  description:
    "Unlock the 30-Day Hair Growth Blueprint with a simple lead form, then follow a clear daily routine for healthier-looking hair."
};

export default function HairGrowthBlueprintPage() {
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

      <HairGrowthBlueprint />
    </main>
  );
}
