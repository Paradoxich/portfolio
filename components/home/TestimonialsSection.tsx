"use client";

import { useState } from "react";
import Image from "next/image";
import CTAWithIcon from "../CTAWithIcon";
import ChatAnimation from "./ChatAnimation";

type Testimonial = {
  name: string;
  role: string;
  messages: string[];
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="col-span-12 section-offset">
      <div className="grid gap-feature md:grid-cols-[3fr,7fr] items-stretch">
        {/* LEFT: heading + people list */}
        <div className="flex flex-col justify-between gap-8">
          {/* Heading */}
          <h2 className="type-h2">
            Kind words.{" "}
            <span className="font-normal text-color-text-secondary">
              Zero prompting.
            </span>{" "}
          </h2>

          {/* People list */}
          <div className="stack-md">
            {testimonials.map((t, index) => {
              const isActive = index === activeTestimonial;

              return (
                <button
                  key={t.name}
                  onClick={() => setActiveTestimonial(index)}
                  className={`
                    w-full inline-flex items-center gap-3
                    rounded-full border px-4 py-3 text-left
                    transition-colors
                    ${
                      isActive
                        ? "border-color-border-secondary bg-color-bg-surface"
                        : "border-color-border bg-color-bg hover:bg-color-bg-muted"
                    }
                  `}
                >
                  {/* Avatar placeholder */}
                  <span className="h-14 w-14 rounded-full bg-color-bg-muted border border-color-border" />

                  <span className="flex flex-col">
                    <span
                      className={`type-body ${
                        isActive ? "text-color-text-primary" : ""
                      }`}
                    >
                      {t.name}
                    </span>
                    <span className="type-body-sm">
                      {t.role}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-2">
            <CTAWithIcon label="Check out projects" href="/projects" />
          </div>
        </div>

        {/* RIGHT: painting + chat bubbles (animated) */}
        <div className="relative overflow-hidden">
          {/* Slika u pozadini – NE DIRAMO */}
          <Image
            src="https://images.unsplash.com/photo-1759741787685-9643b191d643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Landscape background"
            fill
            className="object-cover"
            priority
          />

          {/* OVERLAY */}
          <div className="testimonials-overlay" />

          {/* CHAT COLUMN – animirani, ovisno o aktivnom tabu */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <ChatAnimation
              messages={testimonials[activeTestimonial].messages}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
