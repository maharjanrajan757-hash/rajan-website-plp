import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock,
  HeartHandshake,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  WandSparkles
} from "lucide-react";
import { businessWhatsappHref, whatsappHref } from "@/components/product-data";

const navItems = [
  ["Home", "#home"],
  ["Products", "#products"],
  ["Results", "#results"],
  ["How It Works", "#how-it-works"],
  ["Testimonials", "#testimonials"],
  ["FAQ", "#faq"]
];

const trustBadges = [
  "Premium Beauty Products",
  "Simple Routine",
  "Customer Support",
  "Special Offer Available"
];

const painBullets = [
  "Why am I still getting acne?",
  "Why does my hair keep falling?",
  "Why isn't anything working?",
  "Why do I keep wasting money?"
];

const hiddenReasons = [
  "Switching products too often",
  "Following random beauty trends",
  "Using too many products at once",
  "Choosing products based on packaging",
  "Using products that don't match your concerns"
];

const solutionFocus = [
  "Consistency",
  "Quality products",
  "Simple routines",
  "Daily confidence",
  "Products that fit naturally into her lifestyle"
];

const products = [
  {
    name: "Skincare Products",
    image: "/images/skincare-clarifying-gel.png",
    alt: "Gold Cleansing Milk skincare product",
    description:
      "Browse cleansers, sunscreen, gel, and coverage products for daily skin care.",
    price: "4 products available",
    detailHref: "/products/skincare"
  },
  {
    name: "Haircare Products",
    image: "/images/haircare-nourish-oil.png",
    alt: "Rice Water shampoo and hair mask haircare products",
    description:
      "Explore hair nourishment and routine support products for stronger-looking hair.",
    price: "2 products available",
    detailHref: "/products/haircare"
  },
  {
    name: "Routine Guide",
    image: "/images/Routine Guide image 1.png",
    alt: "30-Day Hair Growth Blueprint routine guide preview",
    description:
      "Unlock the 30-Day Hair Growth Blueprint after a quick routine form.",
    price: "Included bonus",
    detailHref: "/blueprint/hair-growth",
    ctaLabel: "View Blueprint"
  }
];

const steps = [
  [
    "Choose The Right Products",
    "Select products designed to support your skin and hair goals."
  ],
  [
    "Follow The Simple Routine",
    "No complicated 10-step routine. Just a clear process that's easy to follow."
  ],
  ["Stay Consistent", "Consistency is where real transformation begins."],
  [
    "Enjoy The Confidence",
    "Healthier-looking skin. Stronger-looking hair. More confidence every day."
  ]
];

const benefits = [
  "Skin that looks fresher and more radiant",
  "Hair that feels healthier and stronger",
  "More confidence in photos and videos",
  "Less dependency on expensive salon treatments",
  "A simple beauty routine you can actually stick to",
  "Products you feel good using every day"
];

const included = [
  "Premium Skin Care Products",
  "Premium Hair Care Products",
  "Easy-To-Follow Routine Guide",
  "Product Usage Instructions",
  "Ongoing Support",
  "Access to Exclusive Beauty Tips"
];

const bonuses = [
  ["Beauty Routine Guide", "A simple care map to keep your routine clear."],
  ["Skin & Hair Care Tips", "Helpful education for everyday product use."],
  ["Exclusive Customer Offers", "Private promotions for repeat customers."]
];

const proofAngles = [
  "Real customer reviews",
  "Before & after transformation section",
  "Customer routine stories",
  "Positive product feedback"
];

const stats = [
  ["500+", "Happy Customers"],
  ["4.8/5", "Average Rating"],
  ["1,000+", "Products Delivered"]
];

const testimonials = [
  {
    quote: "My skin looks healthier and more refreshed than it has in years.",
    name: "Sita Sharma"
  },
  {
    quote:
      "I've tried many products before, but this routine finally helped me stay consistent.",
    name: "Anita Karki"
  },
  {
    quote: "My hair feels stronger and looks so much healthier.",
    name: "Maya Gurung"
  }
];

const objections = [
  [
    "I've tried similar products before.",
    "Most of our customers felt the same way. The difference is having a simple system you can consistently follow instead of constantly switching products."
  ],
  [
    "What if it doesn't work for me?",
    "Results vary from person to person, but consistency is key. That's why we provide guidance to help you get the most from your routine."
  ],
  [
    "Why is it more expensive than other products?",
    "Because quality matters. Many cheap products create short-term excitement but long-term disappointment. Investing in quality products means investing in yourself."
  ],
  [
    "Are the reviews real?",
    "We encourage real customer feedback and transparent experiences. Add real customer transformations and testimonials here."
  ]
];

const faqs = [
  [
    "How do I choose the right product?",
    "Start with your main skin or hair concern, then message us for guidance before ordering."
  ],
  [
    "Can I use the products daily?",
    "Most routines are designed for daily or regular use. Follow the usage instructions for each product."
  ],
  [
    "When can I expect results?",
    "Results vary, but consistent use over time gives your routine the best chance to support visible improvement."
  ],
  [
    "Do you offer free delivery?",
    "Yes, we offer free delivery on orders above NPR 1500."
  ],
  [
    "Can I order through WhatsApp?",
    "Yes. Use the WhatsApp buttons on this page to ask questions or place an order."
  ],
  [
    "Do you provide usage instructions?",
    "Yes. Orders can include clear routine guidance and product usage instructions."
  ],
  [
    "Are these products suitable for different skin and hair concerns?",
    "The range can be customized around different concerns. Ask us before ordering if you are unsure."
  ]
];

function CTAButton({
  children,
  href = "#products",
  variant = "primary"
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "light";
}) {
  const styles = {
    primary: "be-bold-button",
    secondary:
      "min-h-12 rounded-full border border-white/75 bg-white/10 px-7 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:border-white hover:bg-white hover:text-[var(--champagne-dark)]",
    light:
      "light-cta min-h-12 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-[0.08em] shadow-lg shadow-rose-900/10 transition"
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 ${styles[variant]}`}
    >
      {children}
      <ArrowRight aria-hidden="true" size={16} />
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  copy
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--pink)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl font-normal leading-tight text-[var(--ink)] md:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-8 text-[var(--muted)]">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-[var(--muted)] md:text-base">
      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--navy-soft)] text-[var(--champagne)]">
        <Check aria-hidden="true" size={14} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export function LandingPage() {
  return (
    <main id="home" className="overflow-hidden">
      <Header />
      <Hero />
      <PainSection />
      <AgitationSection />
      <SolutionSection />
      <ProductsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <IncludedSection />
      <BonusesSection />
      <SocialProofSection />
      <TestimonialsSection />
      <ObjectionSection />
      <PromiseSection />
      <OfferSection />
      <FinalCTASection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[#fffaf8]/95 backdrop-blur-xl">
      <div className="section-shell flex h-28 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Go to home">
          <Image
            src="/images/GCN_Logo2-removebg-preview.png"
            alt="GCN beauty brand logo"
            width={662}
            height={298}
            priority
            className="h-22 w-auto object-contain sm:h-24"
          />
        </a>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-[13px] font-bold uppercase tracking-[0.1em] text-[var(--ink)] lg:flex"
        >
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-[var(--pink)]">
              {label}
            </a>
          ))}
        </nav>
        <CTAButton>Shop Now</CTAButton>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[720px] border-b border-[var(--line)] bg-[var(--cream)] py-20 text-white md:py-28">
      <Image
        src="/images/Gemini_Generated_Image_69putt69putt69pu.png"
        alt="GCN skincare and haircare products arranged on a blush marble beauty set"
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 h-full w-full object-cover object-[72%_center] md:object-center"
      />
      <div className="absolute inset-0 bg-[#3a2328]/48 md:bg-gradient-to-r md:from-[#3a2328]/58 md:via-[#8f4654]/28 md:to-[#fff5ed]/6" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(243,203,209,0.24),transparent_34%)]" />
      <div className="section-shell relative grid min-h-[560px] items-center">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
            <ShieldCheck aria-hidden="true" size={16} />
            Premium care for everyday confidence
          </p>
          <h1 className="font-display max-w-5xl text-5xl font-normal leading-[1.05] text-white md:text-7xl">
            Finally Get Healthier Skin & Stronger Hair Without Wasting Money on Products That Don&apos;t Work
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90">
            Build a simple skin and hair care routine that supports
            healthier-looking skin, stronger hair, and everyday confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton variant="light">Shop Now</CTAButton>
            <CTAButton href={whatsappHref} variant="secondary">
              Message Us on WhatsApp
            </CTAButton>
            <CTAButton href={businessWhatsappHref} variant="secondary">
              Grow Your Business With Us
            </CTAButton>
          </div>
          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 rounded-lg border border-white/40 bg-white/15 px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur"
              >
                <Check aria-hidden="true" size={15} className="text-[var(--pink)]" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section className="bg-[var(--black)] py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--pink)]">
            The pattern
          </p>
          <h2 className="font-display text-4xl font-normal text-[var(--ink)] md:text-5xl">
            Does This Sound Familiar?
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-[var(--muted)]">
            <p>You&apos;ve tried different skincare and haircare products.</p>
            <p>You&apos;ve watched countless Instagram reels and YouTube videos.</p>
            <p>You&apos;ve taken advice from friends, influencers, and beauty pages.</p>
            <p>Yet you&apos;re still asking yourself:</p>
          </div>
        </div>
        <div className="rounded-lg border border-[var(--line)] bg-[var(--pink-soft)] p-6 soft-shadow md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {painBullets.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[var(--line)] bg-[var(--navy)] p-5 font-display text-xl font-normal leading-7 text-[var(--gold-soft)]"
              >
                &quot;{item}&quot;
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-lg bg-[var(--champagne-dark)] p-6 text-base leading-7 text-white">
            You are not the problem. The real problem is that most products are
            generic, confusing, and not designed to help you build a consistent
            routine.
          </p>
        </div>
      </div>
    </section>
  );
}

function AgitationSection() {
  return (
    <section className="bg-[var(--pink-soft)] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Why results stall"
          title="The Hidden Reason You're Not Seeing Results"
        />
        <div className="grid gap-4 md:grid-cols-5">
          {hiddenReasons.map((reason, index) => (
            <div
              key={reason}
              className="rounded-lg border border-[var(--line)] bg-[var(--navy)] p-6 text-center soft-shadow"
            >
              <span className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--champagne)] text-sm font-bold text-[var(--champagne)]">
                {index + 1}
              </span>
              <h3 className="text-base font-semibold leading-6 text-[var(--ink)]">
                {reason}
              </h3>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-[var(--muted)]">
          The result is more confusion, more frustration, more money wasted, and
          little to no visible improvement.
        </p>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="bg-[var(--champagne-dark)] py-20 text-white md:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--pink)]">
            The solution
          </p>
          <h2 className="font-display text-4xl font-normal leading-tight md:text-5xl">
            Introducing Our Skin & Hair Confidence System&trade;
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/78">
            A simple approach designed to support healthier skin and stronger
            hair without the guesswork.
          </p>
          <div className="mt-8">
            <CTAButton variant="light">Start Your Routine Today</CTAButton>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {solutionFocus.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[var(--champagne)]/20 bg-black/20 p-6"
            >
              <WandSparkles aria-hidden="true" className="mb-4 text-[var(--pink)]" />
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="bg-[var(--black)] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Shop the routine"
          title="Products Designed Around Your Daily Beauty Goals"
          copy="Choose skincare or haircare products, or unlock the complete routine guide."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => {
            const isRoutineGuide = product.name === "Routine Guide";

            return (
              <article
                key={product.name}
                className="flex flex-col rounded-lg border border-[var(--line)] bg-[var(--navy)] p-0 transition duration-200 hover:-translate-y-1 hover:border-[var(--champagne)] hover:shadow-xl hover:shadow-black/40"
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={720}
                  height={720}
                  loading="eager"
                  className={`aspect-square rounded-t-lg bg-[var(--pink-soft)] ${
                    isRoutineGuide ? "object-contain p-6 md:p-8" : "object-cover"
                  }`}
                />
                <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-2xl font-normal text-[var(--ink)]">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {product.description}
                </p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.1em] text-[var(--champagne)]">
                  {product.price}
                </p>
                <a
                  href={product.detailHref}
                  className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--champagne-dark)] px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--champagne)] hover:text-[var(--black)]"
                >
                  {"ctaLabel" in product ? product.ctaLabel : "View Product"}
                  <PackageCheck aria-hidden="true" size={16} />
                </a>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[var(--pink-soft)] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader title="How It Works" />
        <div className="grid gap-5 md:grid-cols-4">
          {steps.map(([title, copy], index) => (
            <article key={title} className="rounded-lg border border-[var(--line)] bg-[var(--navy)] p-7 soft-shadow">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--champagne-dark)] font-bold text-white">
                {index + 1}
              </span>
              <h3 className="font-display text-2xl font-normal text-[var(--ink)]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-[var(--black)] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader title="What You Can Expect" />
        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-lg border border-[var(--line)] bg-[var(--navy)] p-6 soft-shadow">
              <HeartHandshake aria-hidden="true" className="mb-4 text-[var(--pink)]" />
              <h3 className="text-base font-semibold leading-6 text-[var(--ink)]">
                {benefit}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludedSection() {
  return (
    <section className="bg-[var(--navy)] py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--pink)]">
            Your order
          </p>
          <h2 className="font-display text-4xl font-normal text-[var(--ink)] md:text-5xl">
            What&apos;s Included
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Everything is shaped to reduce guesswork and help you build a
            beauty routine you can actually continue.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {included.map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BonusesSection() {
  return (
    <section className="bg-[var(--pink-soft)] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader title="Exclusive Bonuses" />
        <div className="grid gap-5 md:grid-cols-3">
          {bonuses.map(([title, copy]) => (
            <article
              key={title}
              className="rounded-lg border border-[var(--line)] bg-[var(--navy)] p-7 soft-shadow"
            >
              <Sparkles aria-hidden="true" className="mb-5 text-[var(--pink)]" />
              <h3 className="font-display text-2xl font-normal text-[var(--ink)]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section id="results" className="bg-[var(--black)] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader title="Trusted By Women Who Want Simple, Confident Beauty" />
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Image
            src="/images/Before and after Image.png"
            alt="Before and after customer transformation result"
            width={920}
            height={560}
            loading="eager"
            className="rounded-lg border border-[var(--line)] bg-[var(--navy)] object-cover soft-shadow"
          />
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {proofAngles.map((angle) => (
                <div key={angle} className="rounded-lg border border-[var(--line)] bg-[var(--navy)] p-6 soft-shadow">
                  <Star aria-hidden="true" className="mb-3 fill-[var(--pink)] text-[var(--pink)]" />
                  <h3 className="font-semibold text-[var(--ink)]">{angle}</h3>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-lg bg-[var(--champagne-dark)] p-6 text-white">
                  <p className="font-display text-3xl font-normal">{value}</p>
                  <p className="mt-1 text-sm text-white/75">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[var(--pink-soft)] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader title="What Our Customers Are Saying" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-lg border border-[var(--line)] bg-[var(--navy)] p-7 soft-shadow"
            >
              <div className="mb-5 flex gap-1 text-[var(--pink)]" aria-label="Five star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} aria-hidden="true" size={18} fill="currentColor" />
                ))}
              </div>
              <blockquote className="font-display text-2xl leading-9 text-[var(--ink)]">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <figcaption className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--pink)]">
                - {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ObjectionSection() {
  return (
    <section className="bg-[var(--black)] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader title="Still Unsure?" />
        <div className="grid gap-4 md:grid-cols-2">
          {objections.map(([question, answer]) => (
            <article key={question} className="rounded-lg border border-[var(--line)] bg-[var(--navy)] p-7 soft-shadow">
              <h3 className="font-display text-2xl font-normal text-[var(--ink)]">
                {question}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromiseSection() {
  return (
    <section className="bg-[var(--black)] py-20 md:py-28">
      <div className="section-shell rounded-lg border border-[var(--line)] bg-[var(--champagne-dark)] p-8 text-white soft-shadow md:p-14">
        <ShieldCheck aria-hidden="true" className="mb-6 text-[var(--pink)]" size={34} />
        <h2 className="font-display text-4xl font-normal md:text-5xl">
          Our Promise To You
        </h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-white/78">
          We believe beauty should feel simple, not confusing. Our mission is to
          help women build confidence through healthier-looking skin and
          stronger hair with products they can trust. No unrealistic promises.
          No complicated routines. Just a simple system designed to support your
          beauty goals.
        </p>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="bg-[var(--navy-soft)] py-20 md:py-28">
      <div className="section-shell grid items-center gap-8 rounded-lg border border-[var(--line)] bg-[var(--navy)] p-8 soft-shadow md:p-12 lg:grid-cols-[1fr_0.78fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--pink)]">
            <Clock aria-hidden="true" size={16} />
            Special Limited-Time Offer
          </p>
          <h2 className="font-display text-4xl font-normal text-[var(--ink)] md:text-5xl">
            Start With The Complete Skin & Hair Routine
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Availability is limited. Once this offer ends, standard pricing will
            apply.
          </p>
          <div className="mt-8">
            <CTAButton href={whatsappHref}>Order Now</CTAButton>
          </div>
        </div>
        <ul className="space-y-4 rounded-lg border border-[var(--line)] bg-[var(--navy-soft)] p-7">
          {[
            "Premium Skin & Hair Care Products",
            "Beauty Routine Guide",
            "Exclusive Customer Bonuses",
            "Special Promotional Pricing"
          ].map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="bg-[var(--champagne-dark)] py-20 text-white md:py-28">
      <div className="section-shell text-center">
        <h2 className="font-display mx-auto max-w-4xl text-4xl font-normal leading-tight md:text-6xl">
          Ready To Start Your Skin & Hair Confidence Journey?
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/78">
          Stop wasting money on products that sit unused on your shelf. Stop
          guessing. Stop feeling frustrated. Start building a simple routine
          that helps you feel more confident every day.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton href={whatsappHref} variant="light">
            Order Now
          </CTAButton>
          <a
            href={whatsappHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/60 px-7 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:border-white hover:bg-white hover:text-[var(--champagne-dark)]"
          >
            <MessageCircle aria-hidden="true" size={17} />
            Message Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="bg-[var(--navy)] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader title="FAQ" />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="group rounded-lg border border-[var(--line)] bg-[var(--navy-soft)] p-6 soft-shadow"
            >
              <summary className="cursor-pointer list-none font-display text-xl font-normal text-[var(--ink)]">
                {question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="bg-[var(--pink-soft)] py-14">
      <div className="section-shell grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--pink)]">
            Beauty notes
          </p>
          <h2 className="font-display text-3xl font-normal text-[var(--ink)] md:text-4xl">
            Subscribe to our newsletter
          </h2>
        </div>
        <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="min-h-12 rounded-full border border-[var(--line)] bg-[var(--navy)] px-5 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--champagne)]"
          />
          <button className="be-bold-button" type="button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--black)] py-14 text-[var(--ink)]">
      <div className="section-shell grid gap-10 border-b border-[rgba(212,166,182,0.35)] pb-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/GCN_Logo2-removebg-preview.png"
              alt="GCN beauty brand logo"
              width={662}
              height={298}
              loading="eager"
              className="h-24 w-auto object-contain"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
            Premium skincare and haircare products designed to make beauty
            routines feel simple, supportive, and confident.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            Quick Links
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="hover:text-[var(--pink)]">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            Contact
          </h3>
          <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            <p>Email placeholder</p>
            <p>Phone placeholder</p>
            <a href={whatsappHref} className="inline-flex items-center gap-2 hover:text-[var(--pink)]">
              <MessageCircle aria-hidden="true" size={16} />
              WhatsApp placeholder
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            Social
          </h3>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            <a href="#" className="hover:text-[var(--pink)]">Instagram</a>
            <a href="#" className="hover:text-[var(--pink)]">Facebook</a>
            <a href="#" className="hover:text-[var(--pink)]">TikTok</a>
          </div>
        </div>
      </div>
      <p className="section-shell mt-8 text-xs text-[var(--muted)]">
        Copyright 2026 GCN. All rights reserved.
      </p>
    </footer>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--line)] bg-[var(--black)]/95 p-3 shadow-2xl backdrop-blur md:hidden">
      <a
        href={whatsappHref}
        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--champagne-dark)] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white"
      >
        <MessageCircle aria-hidden="true" size={18} />
        Message Us on WhatsApp
      </a>
    </div>
  );
}
