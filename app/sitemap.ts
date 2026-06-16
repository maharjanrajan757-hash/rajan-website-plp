import type { MetadataRoute } from "next";
import { productDetails } from "@/components/product-data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    ...productDetails.map((group) => ({
      url: absoluteUrl(`/products/${group.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85
    })),
    {
      url: absoluteUrl("/blueprint/hair-growth"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];
}
