"use client";

import { PageShell } from "@/components/layout/PageShell";
import { WaterPlantSection } from "@/components/sections/home/WaterPlantSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { ThemeSwitcherInline } from "@/components/ColorSchemeProvider";

const EXPERIMENT_TESTIMONIALS = [
  {
    name: "Nodar Daneliya",
    role: "CEO @ Shuttle",
    image: "/testimonials/testimonial-nodar.png",
    messages: [
      "I love working with Ana!",
      "She has an incredible ability to quickly grasp what you're looking for and translate it into thoughtful, practical options.",
    ],
  },
  {
    name: "Dino Pohilj",
    role: "Product Manager",
    image: "/testimonials/testimonial-dino.png",
    messages: [
      "Working with Ana across multiple projects has been an exceptional experience.",
      "Ana stands out as the best product designer I've had the opportunity to work with.",
    ],
  },
];

export function ExperimentsIndex() {
  return (
    <PageShell className="stack-xl">
      <header className="layout-grid hero-gap">
        <section className="col-span-12 md:col-span-6">
          <h1 className="type-h1 text-balance">
            Experiments{" "}
            <span className="text-color-text-secondary font-normal">
              interactive bits and playful prototypes.
            </span>
          </h1>
        </section>
        <section className="col-span-12 md:col-span-6 flex items-start justify-end">
          <ThemeSwitcherInline />
        </section>
      </header>

      <div className="layout-grid stack-gutter">
        <section className="col-span-12 md:col-span-4">
          <WaterPlantSection />
        </section>
        <section className="col-span-12 md:col-span-8">
          <TestimonialsSection testimonials={EXPERIMENT_TESTIMONIALS} />
        </section>
      </div>
    </PageShell>
  );
}
