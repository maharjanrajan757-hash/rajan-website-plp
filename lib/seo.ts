import { productDetails } from "@/components/product-data";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.supriyaglowcare.com";

export const brandName = "Supriya Glow Care";
export const businessEmail = "info@supriyaglowcare.com";
export const businessPhone = "+9779742488804";
export const whatsappUrl = "https://wa.me/9779742488804";
export const ogImage = "/images/Gemini_Generated_Image_69putt69putt69pu.png";

export const homepageTitle =
  "Supriya Glow Care | Premium Skincare & Haircare Products in Nepal";

export const homepageDescription =
  "Shop premium skincare and haircare products in Nepal. Discover Japanese Rice Water Shampoo, Thai Coconut Hair Mask, sunscreen, cleansing milk, and beauty care products with cash on delivery.";

export const homepageKeywords = [
  "Supriya Glow Care",
  "skincare Nepal",
  "haircare Nepal",
  "beauty products Nepal",
  "Japanese Rice Water Shampoo Nepal",
  "Thai Coconut Hair Mask Nepal",
  "sunscreen Nepal",
  "cleansing milk Nepal",
  "hair treatment Nepal"
];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function productSchemaItems() {
  return productDetails.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Product",
      name: item.name,
      image: absoluteUrl(item.image),
      description: item.description,
      brand: {
        "@type": "Brand",
        name: brandName
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "NPR",
        availability: "https://schema.org/InStock",
        url: absoluteUrl(`/products/${group.slug}`)
      }
    }))
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: brandName,
    url: siteUrl,
    logo: absoluteUrl("/images/Logo-removebg-preview.png"),
    image: absoluteUrl(ogImage),
    email: businessEmail,
    telephone: businessPhone,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessPhone,
      contactType: "customer service",
      areaServed: "NP",
      availableLanguage: ["English", "Nepali"]
    },
    sameAs: ["https://www.facebook.com/profile.php?id=61589767019138"]
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: brandName,
    url: siteUrl,
    image: absoluteUrl(ogImage),
    logo: absoluteUrl("/images/Logo-removebg-preview.png"),
    email: businessEmail,
    telephone: businessPhone,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Nepal"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessPhone,
      contactType: "orders and WhatsApp support",
      areaServed: "NP",
      availableLanguage: ["English", "Nepali"]
    }
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: brandName,
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function productItemListSchema(groupSlug?: string) {
  const groups = groupSlug
    ? productDetails.filter((group) => group.slug === groupSlug)
    : productDetails;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: groupSlug
      ? `${brandName} ${groups[0]?.title || "Products"}`
      : `${brandName} skincare and haircare products`,
    itemListElement: groups.flatMap((group) =>
      group.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: item.name,
          image: absoluteUrl(item.image),
          description: item.description,
          brand: {
            "@type": "Brand",
            name: brandName
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "NPR",
            availability: "https://schema.org/InStock",
            url: absoluteUrl(`/products/${group.slug}`)
          }
        }
      }))
    )
  };
}
