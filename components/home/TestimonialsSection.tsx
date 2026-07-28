import Image from "next/image";
import { PixelQuote } from "@/components/icons/PixelQuote";

const testimonials = [
  {
    lead: "Ana is the best product designer I've worked with.",
    rest: "Her methodical approach and deep understanding of product requirements make her incredibly easy to collaborate with, and her designs are both elegant and practical for development teams to implement.",
    name: "Dino Pohilj",
    role: "Product Manager",
    avatar: "/testimonials/testimonial-dino.png",
  },
  {
    lead: "I love working with Ana!",
    rest: "She has an incredible ability to quickly grasp ideas and translate them into thoughtful, practical solutions. Her attention to detail and willingness to experiment make her fantastic to collaborate with.",
    name: "Nodar Daneliya",
    role: "Founder/CEO @Shuttle",
    avatar: "/testimonials/testimonial-nodar.png",
  },
];

export function TestimonialsSection() {
  return (
    // No top padding: the Writing section above owns the 200px gap between
    // them, mirroring how it owns the gap to the cards above it.
    <section className="px-xl pb-6xl md:px-section md:pb-section">
      <h2 className="sr-only">Testimonials</h2>
      {/* Backdrop experiment parked in
          components/experiments/ChromaticMetalBackdrop.tsx — only tuned for
          the dark scheme. Plain page background until it works everywhere. */}
      <div className="grid gap-xl md:grid-cols-2">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col gap-lg rounded-card border border-color-border-inset bg-color-bg p-2xl md:p-3xl"
          >
            <PixelQuote size={24} className="text-color-text-tertiary" />
            <blockquote className="type-body-lg text-color-text-secondary">
              <span className="text-color-text-primary">{t.lead}</span> {t.rest}
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-md border-t border-color-border-inset pt-lg">
              <Image
                src={t.avatar}
                alt={t.name}
                width={44}
                height={44}
                className="rounded-pill object-cover"
              />
              <div>
                <p className="type-body text-color-text-primary">{t.name}</p>
                <p className="type-body-sm text-color-text-tertiary">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
