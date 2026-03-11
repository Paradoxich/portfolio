"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "@/components/icons/ArrowRight";

// ─── Content types ────────────────────────────────────────────────────────────

export type ContentBlock =
  | { type: "p"; text: React.ReactNode }
  | { type: "ul"; items: React.ReactNode[] }
  | {
      type: "img";
      src: string;
      alt: string;
      /** e.g. "16/9", "16/10.5" — used as CSS aspect-ratio */
      aspect: string;
      caption?: string;
      priority?: boolean;
    };

export type SectionData = {
  heading?: string;
  blocks: ContentBlock[];
  /** Renders full-width (no text-column wrapper). Use for standalone media. */
  fullWidth?: boolean;
};

export type CaseStudyLink = {
  href: string;
  label: string;
};

// ─── Section renderer ─────────────────────────────────────────────────────────

export function CaseStudySection({ data }: { data: SectionData }) {
  const blocks = data.blocks.map((block, i) => {
    if (block.type === "p") {
      return (
        <p key={i} className="type-body-lg">
          {block.text}
        </p>
      );
    }
    if (block.type === "ul") {
      return (
        <ul key={i} className="list-disc pl-lg stack-xs type-body-lg">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    }
    if (block.type === "img") {
      return (
        <section key={i} className="stack-md pt-base pb-base">
          <div
            style={{ aspectRatio: block.aspect }}
            className="relative w-full overflow-hidden rounded-surface border border-color-border-inset bg-color-bg"
          >
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover"
              priority={block.priority}
            />
          </div>
          {block.caption && (
            <div className="text-column">
              <p className="type-body-sm">{block.caption}</p>
            </div>
          )}
        </section>
      );
    }
    return null;
  });

  if (data.fullWidth) {
    return (
      <section className="stack-md pt-base pb-base">
        {blocks}
      </section>
    );
  }

  return (
    <section className="stack-md">
      <div className="text-column stack-md">
        {data.heading && <h3 className="type-h4">{data.heading}</h3>}
        {blocks}
      </div>
    </section>
  );
}

// ─── Layout shell ─────────────────────────────────────────────────────────────

type CaseStudyLayoutProps = {
  title: string;
  subtitle: string;
  meta?: string;
  links?: CaseStudyLink[];
  tldrItems: React.ReactNode[];
  heroSlot?: React.ReactNode;
  children: React.ReactNode;
};

export function CaseStudyLayout({
  title,
  subtitle,
  meta,
  links,
  tldrItems,
  heroSlot,
  children,
}: CaseStudyLayoutProps) {
  let metaYear: string | undefined;
  let metaStatus: string | undefined;

  if (typeof meta === "string") {
    const parts = meta.split("•");
    metaYear = parts[0]?.trim();
    metaStatus = parts[1]?.trim();
  }

  return (
    <article className="w-full stack-5xl">
      {/* Title block */}
      <section className="stack-lg">
        <div className="text-column stack-lg">
          <div className="flex items-center gap-base flex-wrap">
            {(metaYear || links?.length) && (
              <p className="type-body-sm text-color-text-secondary">
                {metaYear}
                {(metaStatus || links?.[0]) && (
                  <>
                    <span className="inline-block mx-[0.75ch]">•</span>
                    {links?.[0] ? (
                      <a
                        href={links[0].href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline hover:text-color-text-primary"
                      >
                        {links[0].label}
                      </a>
                    ) : (
                      <span>{metaStatus}</span>
                    )}
                  </>
                )}
              </p>
            )}
          </div>
          <h1 className="type-h1 text-balance">
            <span className="text-color-text-primary font-medium">
              {title}
            </span>
            <span className="text-color-text-secondary font-normal">
              {subtitle}
            </span>
          </h1>
        </div>
      </section>

      {/* Summary */}
      <section className="stack-md">
        <div className="text-column">
          <h3 className="type-label pb-md border-b border-color-border-inset">
            Summary
          </h3>
          <ul
            className="divide-y divide-color-border-inset list-none text-color-text-primary"
            role="list"
          >
            {tldrItems.map((item, i) => (
              <li key={i} className="flex gap-md py-md type-body">
                <span className="text-color-text-secondary shrink-0 flex items-center" aria-hidden>
                  <ArrowRight size={20} className="shrink-0" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {heroSlot}

      {children}
    </article>
  );
}
