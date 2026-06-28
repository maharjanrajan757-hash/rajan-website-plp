export const whatsappHref =
  "https://wa.me/9779742488804";

export const businessWhatsappHref =
  "https://wa.me/9779742488804";

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
      },
      {
        name: "SiwoNong Sheep Placenta Serum",
        image: "/images/skincare-product-6.png",
        alt: "SiwoNong Sheep Placenta firming and anti-aging serum capsules",
        price: "Rs. 1,499 / 30 soft capsules",
        description:
          "A nourishing facial serum capsule treatment with protein, amino acids, vitamins, and minerals for a softer, youthful-looking glow.",
        details: [
          "Helps brighten and soften skin",
          "Supports hydration and nourishment",
          "Helps reduce the look of wrinkles"
        ]
      },
      {
        name: "Leito Papaya Sunscreen SPF 50+",
        image: "/images/skincare-product-7.png",
        alt: "Leito Papaya sunscreen SPF 50 plus product sheet",
        price: "Rs. 775 / 80gm",
        description:
          "An oil-free moisturizing sunscreen cream with papaya and broad UVA/UVB protection for everyday wear.",
        details: [
          "SPF 50+ PA+++ protection",
          "Oil-free moisturizing formula",
          "Water and sweat resistant"
        ]
      },
      {
        name: "MG Goldline Vitamin E Soft Cream",
        image: "/images/Skin Product 3.JPG",
        alt: "MG Goldline Vitamin E 24 hour moisture soft cream product",
        price: "Rs. 580",
        description:
          "A 24-hour moisture soft cream with Vitamin E for soft, glowing skin and daily nourishment.",
        details: [
          "100% natural care",
          "24-hour moisture support",
          "Safe for all skin types"
        ]
      },
      {
        name: "Leito Brightening & Moisturizing Cream SPF 35",
        image: "/images/Skin Product1.JPG",
        alt: "Leito dermatologist tested brightening and moisturizing cream SPF 35",
        price: "Rs. 980",
        description:
          "A dermatologist-tested brightening and moisturizing cream with SPF 35 for refreshed daily skin care.",
        details: [
          "Dermatologist tested",
          "Brightening and moisturizing cream",
          "SPF 35 daily protection"
        ]
      },
      {
        name: "Leito Milk Protein Body Lotion SPF 25+",
        image: "/images/Skin Product 2.JPG",
        alt: "Leito Milk Protein perfume based body lotion SPF 25 plus",
        price: "Rs. 790 / 400ML",
        description:
          "A perfume-based body lotion with milk protein, natural nutrients, and SPF 25+ for all skin types.",
        details: [
          "Deep moisturizing",
          "Natural nutrients",
          "SPF 25+ protection"
        ]
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
        name: "Leito Hair Care Duo",
        image: "/images/Gemini_Generated_Image_dhc7y3dhc7y3dhc7.png",
        alt: "Leito Botox shampoo and hair treatment duo",
        price: "Shampoo: Rs. 1,625 / 800ML | Treatment: Rs. 1,880 / 1100ML",
        description:
          "A salon-quality shampoo and treatment duo designed to deeply repair, moisturize, and restore smooth, radiant-looking hair.",
        details: [
          "Deep repair and protection",
          "Intense moisture and shine",
          "Silky, soft, and smooth"
        ]
      },
      {
        name: "MG Goldline Vitamin E Hair Tonic",
        image: "/images/Hair Procudt 1.JPG",
        alt: "MG Goldline Vitamin E anti hair fall hair tonic 200ML",
        price: "Rs. 700 / 200ML",
        description:
          "An anti-hair-fall hair tonic and scalp conditioner with Vitamin E for daily hair care support.",
        details: [
          "Anti hair fall support",
          "Scalp conditioning care",
          "Vitamin E nourishment"
        ]
      }
    ]
  }
];

export type ProductGroup = (typeof productDetails)[number];
