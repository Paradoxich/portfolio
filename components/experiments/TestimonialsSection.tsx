"use client";

import { useState } from "react";
import Image from "next/image";
import ChatAnimation from "./ChatAnimation";

type Testimonial = {
  name: string;
  role: string;
  image: string;
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
    <section className="col-span-12">
      <div className="card-tinted w-full">
        <div className="card-tinted-inner px-2xl py-2xl">
          <div className="flex min-h-[320px] items-center justify-center">
            <ChatAnimation
              messages={testimonials[activeTestimonial].messages}
            />
          </div>

          {/* People list below testimonial */}
          <div className="mt-8 flex flex-col gap-2 md:flex-row">
            {testimonials.map((t, index) => {
              const isActive = index === activeTestimonial;

              return (
                <button
                  key={t.name}
                  onClick={() => setActiveTestimonial(index)}
                  className={`
                    w-full inline-flex items-center gap-2 md:flex-1
                    rounded-full border p-2 text-left
                    transition-colors
                    ${
                      isActive
                        ? "border-color-border-secondary bg-color-bg-surface"
                        : "border-color-border bg-color-bg hover:bg-color-bg-muted"
                    }
                  `}
                >
                  {/* Avatar */}
                  <span className="relative h-10 w-10 overflow-hidden rounded-full border-0">
                    <Image
                      src={t.image}
                      alt={`${t.name} headshot`}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </span>

                  <span className="flex flex-col">
                    <span className="type-body-xs font-normal leading-snug text-color-text-primary">
                      {t.name}
                    </span>
                    <span className="type-body-xs font-normal leading-snug">
                      {t.role}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="type-body-sm">Testimonials</p>
      </div>
    </section>
  );
}

