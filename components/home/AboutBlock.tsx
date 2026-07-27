"use client";

import Image from "next/image";
import Link from "next/link";
import { useHireDrawer } from "@/components/contact/HireDrawerContext";

export function AboutBlock() {
  const { openHireDrawer } = useHireDrawer();

  return (
    <div className="mb-12 flex flex-col md:flex-row gap-xl items-start card-ghost p-2xl">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/general/ana-profile.png"
          alt="Ana Beverin"
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      <div className="flex-1">
        <h2 className="type-h4 mb-2">About</h2>
        <p className="type-body text-color-text-secondary max-w-2xl">
          Nine years of product design, most of it as the sole designer at
          startups, owning discovery, IA, interaction design, and design
          systems end to end. More recently I&apos;ve moved into design
          engineering, shipping production React alongside the design work.
          I&apos;m based in Croatia and work remotely with teams worldwide.
        </p>
        <div className="mt-4 flex gap-sm">
          <Link
            href="/cv"
            className="inline-flex items-center gap-1 px-md py-sm rounded-full border border-color-border-secondary type-body-sm font-medium text-color-text-primary bg-transparent hover:bg-color-bg-muted transition-colors"
          >
            View CV
          </Link>
          <button
            type="button"
            onClick={openHireDrawer}
            className="inline-flex items-center gap-1 px-md py-sm rounded-full type-body-sm font-medium text-color-cta-primary-text transition-colors bg-color-cta-primary hover:bg-color-cta-primary-hover"
          >
            Let&apos;s chat
          </button>
        </div>
      </div>
    </div>
  );
}
