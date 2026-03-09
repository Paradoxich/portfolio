"use client";

import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { PixelQuote } from "@/components/icons/PixelQuote";
import { useHireDrawer } from "@/components/HireDrawerContext";
import { ArrowRight } from "@/components/icons";

const TESTIMONIALS = [
  {
    name: "Dino Pohulj",
    role: "Product Manager",
    image: "/testimonials/testimonial-dino.png",
    quote:
      "Ana is the best product designer I've worked with. Her methodical approach and deep understanding of product requirements make her incredibly easy to collaborate with, and her designs are both elegant and practical for development teams to implement.",
  },
  {
    name: "Nodar Daneliya",
    role: "Founder/CEO @Shuttle",
    image: "/testimonials/testimonial-nodar.png",
    quote:
      "I love working with Ana! She has an incredible ability to quickly grasp ideas and translate them into thoughtful, practical solutions. Her attention to detail and willingness to experiment make her fantastic to collaborate with.",
  },
  {
    name: "Kurt, Jaka & Daniel",
    role: "Founders @MixLodge",
    image: "/testimonials/testimonial-mixlodge.png",
    quote:
      "Working with Ana was an outstanding experience. She communicates ideas clearly, consistently brings creative solutions, and was a great partner throughout the entire project.",
  },
];

function splitFirstSentence(text: string): [string, string] {
  const match = text.match(/^([^.!?]+[.!?])\s*([\s\S]*)$/);
  if (match) return [match[1], match[2].trim()];
  return [text, ""];
}

function TestimonialCard({
  quote,
  name,
  role,
  image,
}: {
  quote: string;
  name: string;
  role: string;
  image: string;
}) {
  const [firstSentence, rest] = splitFirstSentence(quote);

  return (
    <div className="flex h-full min-h-0 flex-col items-start gap-0 rounded-card border border-color-10 bg-color-bg p-2xl">
      <span className="shrink-0 text-[#1E201A]" aria-hidden>
        <PixelQuote size={24} />
      </span>
      <p className="type-testimonial-quote mt-4 flex-1 w-full min-h-[96px]">
        <span className="type-testimonial-quote-highlight">{firstSentence}</span>
        {rest ? ` ${rest}` : null}
      </p>
      <div className="w-full shrink-0 py-8" role="separator" aria-hidden>
        <div className="h-px w-full bg-color-10" />
      </div>
      <div className="flex shrink-0 items-center gap-md">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            src={image}
            alt={`${name} headshot`}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="flex flex-col">
          <span className="type-testimonial-author">{name}</span>
          <span className="type-testimonial-role">{role}</span>
        </div>
      </div>
    </div>
  );
}

function PlaceholderCard() {
  const { openHireDrawer } = useHireDrawer();

  return (
    <div className="flex h-full min-h-0 flex-col items-start gap-0 rounded-card border border-dashed border-color-10 bg-color-bg p-2xl">
      <span className="shrink-0 text-[#1E201A]" aria-hidden>
        <PixelQuote size={24} />
      </span>
      <p className="type-testimonial-quote mt-4 flex-1 w-full min-h-[96px]">
        I&apos;ve saved a place for your kind words.
      </p>
      <div className="shrink-0 w-full">
        <button
          type="button"
          onClick={openHireDrawer}
          className="group flex w-full items-center justify-between overflow-hidden rounded-full py-2 pl-4 pr-2 transition-colors duration-300 ease-in-out bg-color-bg hover:bg-color-bg-surface border border-color-border-secondary"
        >
          <span className="shrink-0 truncate font-geist type-body-sm font-medium text-color-text-primary">
            Let&apos;s chat
          </span>
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-color-bg-surface border border-color-border-secondary text-color-text-primary transition-colors duration-300 ease-in-out group-hover:bg-color-bg"
            aria-hidden
          >
            <ArrowRight size={20} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <PageShell className="stack-xl">
      <div className="grid min-h-0 gap-gutter md:grid-cols-2 md:items-stretch">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard
            key={t.name}
            quote={t.quote}
            name={t.name}
            role={t.role}
            image={t.image}
          />
        ))}
        <PlaceholderCard />
      </div>
    </PageShell>
  );
}
