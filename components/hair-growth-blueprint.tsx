"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Droplets,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  X
} from "lucide-react";
import { whatsappHref } from "@/components/product-data";

const symptoms = [
  "Too much hair fall",
  "Getting thinner",
  "Stopped growing",
  "Lost its shine"
];

const scalpProblems = [
  "Hair follicle blockage",
  "Excess oil build-up",
  "Dandruff and irritation",
  "Increased hair fall",
  "Thin and weak hair",
  "New hair will not grow"
];

const foods = ["Eggs", "Fish", "Lentils", "Milk", "Almonds"];

const morningRoutine = [
  "Do not tie hair too tightly",
  "Use a wide-tooth comb",
  "Drink 1 glass of water",
  "Eat a protein-rich breakfast"
];

const nightRoutine = [
  "Gently comb your hair",
  "Avoid tight ponytails",
  "Keep your pillow cover clean",
  "Prepare for good sleep"
];

const shampooMistakes = [
  "Scratching scalp with nails",
  "Using very hot water",
  "Shampooing every day",
  "Applying shampoo directly on scalp",
  "Combing wet hair forcefully"
];

const weekPlan = [
  ["Week 1", "Clean scalp + water + 7-8 hrs sleep"],
  ["Week 2", "Daily scalp massage + protein diet"],
  ["Week 3", "Start rice water treatment + reduce stress"],
  ["Week 4", "Follow full morning and night routine daily"]
];

function GuideSection({
  number,
  title,
  children
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-[var(--line)] bg-white p-5 soft-shadow md:p-7">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--champagne-dark)] text-sm font-bold text-white">
          {number}
        </span>
        <h2 className="font-display text-2xl font-normal text-[var(--ink)]">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
          <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--pink-soft)] text-[var(--champagne-dark)]">
            <Check aria-hidden="true" size={14} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function HairGrowthBlueprint() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsUnlocked(true);
    window.requestAnimationFrame(() => {
      document.getElementById("blueprint-content")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  return (
    <section className="section-shell py-12 md:py-16">
      {!isUnlocked ? (
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--pink)]">
              Routine guideline
            </p>
            <h1 className="font-display text-5xl font-normal leading-tight text-[var(--ink)] md:text-6xl">
              Unlock Your 30-Day Hair Growth Blueprint
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Fill out the quick form to view the complete hair routine, scalp
              care rules, weekly plan, and rice water guide.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {symptoms.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[var(--line)] bg-[var(--pink-soft)] p-4 text-sm font-semibold text-[var(--champagne-dark)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-[var(--line)] bg-white p-6 soft-shadow md:p-8"
          >
            <h2 className="font-display text-3xl font-normal text-[var(--ink)]">
              Get the free blueprint
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Share your details so we can understand your routine before
              showing the full guide.
            </p>

            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-[var(--ink)]">
                Full name
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="min-h-12 rounded-lg border border-[var(--line)] bg-[var(--cream)] px-4 text-base font-normal text-[var(--ink)] outline-none transition focus:border-[var(--champagne)]"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[var(--ink)]">
                Phone or WhatsApp
                <input
                  required
                  type="tel"
                  className="min-h-12 rounded-lg border border-[var(--line)] bg-[var(--cream)] px-4 text-base font-normal text-[var(--ink)] outline-none transition focus:border-[var(--champagne)]"
                  placeholder="98XXXXXXXX"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[var(--ink)]">
                Main hair concern
                <select
                  required
                  className="min-h-12 rounded-lg border border-[var(--line)] bg-[var(--cream)] px-4 text-base font-normal text-[var(--ink)] outline-none transition focus:border-[var(--champagne)]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  <option>Hair fall</option>
                  <option>Thin hair</option>
                  <option>Dandruff or itchy scalp</option>
                  <option>Slow hair growth</option>
                  <option>Dry and dull hair</option>
                </select>
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--champagne-dark)] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--champagne)] hover:text-[var(--black)]"
            >
              View Blueprint
              <ArrowRight aria-hidden="true" size={16} />
            </button>
          </form>
        </div>
      ) : (
        <div id="blueprint-content" className="space-y-8">
          <div className="rounded-lg border border-[var(--line)] bg-[var(--pink-soft)] p-7 text-center soft-shadow md:p-10">
            <p className="mx-auto mb-4 inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--champagne-dark)]">
              30-Day Hair Growth Blueprint
            </p>
            <h1 className="font-display text-5xl font-normal leading-tight text-[var(--ink)] md:text-6xl">
              {name ? `${name}, start your hair journey` : "Start your hair journey"}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              A Japanese rice water inspired hair growth guide designed around
              simple daily steps that take 5-10 minutes.
            </p>
          </div>

          <GuideSection number="1" title="Keep your scalp clean">
            <p className="text-base leading-8 text-[var(--muted)]">
              Hair follicles can only grow well on a healthy scalp. When dust,
              sweat, excess oil, dead skin cells, and pollution build up,
              follicles get blocked, which can lead to weak hair and more fall.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {scalpProblems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--cream)] p-3 text-sm text-[var(--champagne-dark)]"
                >
                  <X aria-hidden="true" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </GuideSection>

          <GuideSection number="2" title="Eat enough protein">
            <p className="text-base leading-8 text-[var(--muted)]">
              Protein is the main building block of hair. Regular intake helps
              support new hair growth and keeps strands feeling thick, shiny,
              and strong.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {foods.map((food) => (
                <span
                  key={food}
                  className="rounded-full bg-[var(--pink-soft)] px-4 py-2 text-sm font-bold text-[var(--champagne-dark)]"
                >
                  {food}
                </span>
              ))}
            </div>
          </GuideSection>

          <div className="grid gap-6 md:grid-cols-3">
            <GuideSection number="3" title="Drink enough water">
              <p className="text-sm leading-7 text-[var(--muted)]">
                Drink 2-3 liters daily to support hydration, nutrient delivery,
                scalp comfort, and naturally softer-looking hair.
              </p>
            </GuideSection>
            <GuideSection number="4" title="Reduce stress">
              <p className="text-sm leading-7 text-[var(--muted)]">
                Walk for 15 minutes and meditate for 10 minutes to help support
                balance and reduce stress-related hair fall.
              </p>
            </GuideSection>
            <GuideSection number="5" title="Sleep 7-8 hours">
              <p className="text-sm leading-7 text-[var(--muted)]">
                Good sleep helps the body recover, supports the scalp, and keeps
                your routine consistent.
              </p>
            </GuideSection>
          </div>

          <section className="rounded-lg border border-[var(--line)] bg-white p-5 soft-shadow md:p-7">
            <div className="mb-6 flex items-center gap-3">
              <Sun className="text-[var(--champagne-dark)]" aria-hidden="true" />
              <h2 className="font-display text-3xl font-normal text-[var(--ink)]">
                Daily hair routine
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-lg border border-[var(--line)] bg-[var(--cream)] p-5">
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-[var(--champagne-dark)]">
                  <Sun aria-hidden="true" size={18} />
                  Morning routine (3 min)
                </h3>
                <CheckList items={morningRoutine} />
              </div>
              <div className="rounded-lg border border-[var(--line)] bg-[var(--pink-soft)] p-5">
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-[var(--champagne-dark)]">
                  <Moon aria-hidden="true" size={18} />
                  Night routine (5 min)
                </h3>
                <CheckList items={nightRoutine} />
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-lg border border-[var(--line)] bg-[var(--pink-soft)] p-6">
              <div className="mb-4 flex items-center gap-3">
                <Sparkles className="text-[var(--champagne-dark)]" aria-hidden="true" />
                <h2 className="font-display text-3xl font-normal text-[var(--ink)]">
                  5-minute scalp massage
                </h2>
              </div>
              <p className="text-base leading-8 text-[var(--muted)]">
                Use fingertips to massage the front, middle, and back of your
                scalp in circular motions 7-8 times per week. This supports
                circulation and helps your routine feel relaxing.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--line)] bg-white p-6">
              <h2 className="font-display text-3xl font-normal text-[var(--ink)]">
                Shampoo mistakes to avoid
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {shampooMistakes.map((item) => (
                  <div
                    key={item}
                    className="flex gap-2 rounded-lg border border-[var(--line)] bg-[var(--cream)] p-3 text-sm text-[var(--champagne-dark)]"
                  >
                    <X aria-hidden="true" size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-[var(--champagne)] bg-[var(--cream)] p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Droplets className="text-[var(--champagne-dark)]" aria-hidden="true" />
              <h2 className="font-display text-3xl font-normal text-[var(--ink)]">
                Secret weapon: Japanese rice water
              </h2>
            </div>
            <p className="text-base leading-8 text-[var(--muted)]">
              Rice water has been used for generations to support hair shine,
              strength, and healthy-looking growth. It helps keep the scalp
              clean, reduces breakage, and leaves hair softer and shinier.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {["Clean scalp", "Less breakage", "Soft shine"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[var(--line)] bg-white p-4 text-center text-sm font-semibold text-[var(--champagne-dark)]"
                >
                  <ShieldCheck className="mx-auto mb-2" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-[var(--line)] bg-white p-6 soft-shadow md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <CalendarDays className="text-[var(--champagne-dark)]" aria-hidden="true" />
              <h2 className="font-display text-3xl font-normal text-[var(--ink)]">
                30-day success plan
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {weekPlan.map(([week, focus]) => (
                <div
                  key={week}
                  className="rounded-lg border border-[var(--line)] bg-[var(--pink-soft)] p-5 text-center"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--champagne)]">
                    {week}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {focus}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-lg bg-[var(--champagne-dark)] p-7 text-center text-white md:p-9">
            <h2 className="font-display text-4xl font-normal">
              Start your hair transformation today
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-white/82">
              Follow the plan for 5-10 minutes a day, stay consistent, and
              message us if you need product guidance.
            </p>
            <a
              href={whatsappHref}
              className="light-cta mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-[0.08em] transition"
            >
              Ask on WhatsApp
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
