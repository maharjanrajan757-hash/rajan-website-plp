export const whatsappHref =
  "https://wa.me/10000000000?text=Hi%2C%20I%27d%20like%20to%20order%20beauty%20products.";

export const businessWhatsappHref =
  "https://wa.me/10000000000?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20retail%2C%20wholesale%2C%20or%20partnership%20opportunities.";

export const productDetails = [
  {
    slug: "skincare",
    eyebrow: "Skincare collection",
    title: "Skincare Products",
    copy: "Choose the product that fits your daily routine, then order directly through WhatsApp.",
    items: [
      {
        name: "Gold Cleansing Milk",
        image: "/images/skincare-clarifying-gel.png",
        alt: "Gold Cleansing Milk cleanser product sheet",
        price: "Rs. 525 / 200ML or Rs. 790 / 400ML",
        description:
          "A gentle cleansing milk for fresher-looking skin with daily-use support.",
        details: ["Gentle cleansing", "pH balanced formula", "Vitamin E & C enriched"]
      },
      {
        name: "Oil-Free Sun Protection Lotion SPF 50+",
        image: "/images/skincare-glow-serum.png",
        alt: "Oil-free SPF 50 sun protection lotion product sheet",
        price: "Rs. 880 / 50gm",
        description:
          "Lightweight sun protection designed for oily skin and daily outdoor confidence.",
        details: ["Broad spectrum UVA+UVB", "Oil-free non-greasy feel", "Dermatologist tested"]
      },
      {
        name: "1% Hyaluronic Acid Sunscreen Gel",
        image: "/images/skincare-daily-cream.png",
        alt: "Hyaluronic acid sunscreen gel product sheet",
        price: "Rs. 775 / 100gm",
        description:
          "A sunscreen gel with broad spectrum and blue light protection for everyday use.",
        details: ["SPF 50+ PA+++", "Minerals and lemon extract", "Fragrance free"]
      },
      {
        name: "Pro Coverage Primer + Matte Foundation",
        image: "/images/skincare-radiance-pack.png",
        alt: "Primer plus matte full coverage foundation product sheet",
        price: "Rs. 880 / 20ML",
        description:
          "A full-coverage foundation with primer support for a polished, long-lasting finish.",
        details: ["High definition finish", "Long lasting", "SPF 50 protection"]
      }
    ]
  },
  {
    slug: "haircare",
    eyebrow: "Haircare collection",
    title: "Haircare Products",
    copy: "View each haircare product and choose the one that supports your routine.",
    items: [
      {
        name: "Rice Water Shampoo & Hair Mask",
        image: "/images/haircare-nourish-oil.png",
        alt: "Rice Water shampoo and hair mask product sheet",
        price: "Rs. 1,650 each / 1L",
        description:
          "A rice water shampoo and hair mask routine for smoother, shinier-looking hair.",
        details: ["Rice water strength", "Coconut extract nourishment", "Stronger hair from roots"]
      },
      {
        name: "Gold Cleansing Milk",
        image: "/images/haircare-scalp-care.png",
        alt: "Gold Cleansing Milk product sheet",
        price: "Rs. 525 / 200ML or Rs. 790 / 400ML",
        description:
          "A customer-favorite care product also available to add with haircare orders.",
        details: ["Gentle cleansing", "Daily use", "Dermatologist tested"]
      }
    ]
  }
];

export type ProductGroup = (typeof productDetails)[number];
