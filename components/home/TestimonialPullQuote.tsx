"use client";

import Image from "next/image";
import Link from "next/link";
import { PixelQuote } from "@/components/icons/PixelQuote";
import { TESTIMONIALS } from "@/lib/testimonials";

export function TestimonialPullQuote() {
  const featured = TESTIMONIALS[0];

  return (
    <div className="mb-12">
      <Link
        href="/testimonials"
        className="card-ghost flex flex-col items-center gap-4 p-2xl text-center hover:bg-color-bg-muted transition-colors"
      >
        <span className="text-[var(--color-20)]" aria-hidden>
          <PixelQuote size={24} />
        </span>
        <p className="type-body-lg max-w-xl text-color-text-secondary text-balance">
          &ldquo;{featured.quote.split(/(?<=[.!?])\s/)[0]}&rdquo;
        </p>
        <div className="flex items-center gap-md">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src={featured.image}
              alt={`${featured.name} headshot`}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="type-body-sm-strong">{featured.name}</span>
            <span className="type-body-sm text-color-text-secondary">{featured.role}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
