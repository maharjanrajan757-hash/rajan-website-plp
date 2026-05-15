export const brandName = "StyleNest";

export const product = {
  name: "Fashion and Jewelry Accessories",
  headline: "Elevate your style with elegant accessories made to shine",
  subheadline:
    "Discover premium jewelry, handbags, watches, and fashion pieces that complete your look for everyday wear, parties, and special occasions.",
  description:
    "From timeless classics to trendy statement pieces, StyleNest brings you high-quality accessories that add confidence, beauty, and personality to every outfit.",
  price: 999,
  compareAtPrice: 1999,
  currency: "NPR",
  deliveryFee: 0,
  freeDeliveryThreshold: 2500,
  offer: "Buy 2 Get 1 Free",
  images: [
    "/images/premium/accessories-flatlay.webp",
    "/images/premium/jewelry-display.webp",
    "/images/premium/gold-jewelry-flatlay.webp",
    "/images/premium/silver-handbag-fashion.webp"
  ],
  reels: [
    {
      title: "New Collection Showcase",
      url: "/videos/jewelry-closeup-reel.mp4",
      thumbnail: "/images/premium/jewelry-closeup-poster.webp"
    },
    {
      title: "Jewelry Styling & Outfit Match",
      url: "/videos/jewelry-styling-reel.mp4",
      thumbnail: "/images/premium/jewelry-styling-poster.webp"
    },
    {
      title: "Fashion Accessories Close-up & Try-on",
      url: "/videos/accessories-showcase-reel.mp4",
      thumbnail: "/images/premium/accessories-showcase-poster.webp"
    }
  ],
  benefits: [
    "Enhances your overall style instantly",
    "Adds elegance and confidence to any outfit",
    "Perfect for daily wear, parties, and special occasions",
    "Trendy designs that keep you fashionable",
    "High-quality materials for long-lasting use",
    "Lightweight and comfortable to wear",
    "Easy to match with different outfits",
    "Affordable luxury without compromising style",
    "Great gift option for loved ones",
    "Helps express your unique personality and fashion sense"
  ],
  priceGuide: [
    "Fashion Earrings: NPR 499 - 1,499",
    "Necklaces & Chains: NPR 799 - 2,999",
    "Bracelets: NPR 599 - 1,999",
    "Rings: NPR 399 - 1,499",
    "Watches & Premium Accessories: NPR 2,500 - 8,000",
    "Handbags & Fashion Accessories: NPR 1,500 - 5,000"
  ],
  testimonials: [
    {
      name: "Sarah M.",
      quote:
        "I absolutely loved the quality of the jewelry! The designs are elegant, stylish, and look even better in real life. I received so many compliments wearing them."
    },
    {
      name: "Emily R.",
      quote:
        "The accessories are trendy, affordable, and perfect for everyday use. Delivery was fast and the packaging felt premium. Definitely ordering again!"
    },
    {
      name: "Jessica T.",
      quote:
        "I was looking for fashionable accessories without spending too much, and this store exceeded my expectations. Beautiful products and amazing customer service!"
    }
  ],
  faqs: [
    {
      question: "What materials are your jewelry and accessories made from?",
      answer:
        "Our products are made from high-quality materials designed for durability, comfort, and long-lasting shine."
    },
    {
      question: "Do you offer delivery across Nepal?",
      answer: "Yes, we provide fast and reliable delivery across Nepal."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery usually takes 2-5 business days depending on your location."
    },
    {
      question: "Are the products suitable for everyday wear?",
      answer:
        "Absolutely. Our fashion and jewelry accessories are designed to be stylish, lightweight, and comfortable for daily use."
    },
    {
      question: "Do you offer cash on delivery (COD)?",
      answer: "Yes, cash on delivery is available in selected areas."
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Yes, we offer easy returns or exchanges for damaged or incorrect items within the return period."
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place your order directly through our website or contact us through message or phone for assistance."
    }
  ]
};

export function formatPrice(amount: number) {
  return `${product.currency} ${new Intl.NumberFormat("en-NP").format(amount)}`;
}
