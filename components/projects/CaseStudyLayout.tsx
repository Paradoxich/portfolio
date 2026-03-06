"use client";

import * as React from "react";
import { ArrowRight } from "@/components/icons/ArrowRight";

export type CaseStudyLink = {
  href: string;
  label: string;
};

type CaseStudyLayoutProps = {
  title: string;
  subtitle: string;
  /** Separator between title and subtitle (default: ": ") */
  titleSeparator?: string;
  meta?: string;
  links?: CaseStudyLink[];
  tldrItems: React.ReactNode[];
  heroSlot?: React.ReactNode;
  children: React.ReactNode;
};

const externalLinkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    style={{ flexShrink: 0 }}
  >
    <path
      fill="currentColor"
      d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z"
    />
  </svg>
);

export function CaseStudyLayout({
  title,
  subtitle,
  titleSeparator = ": ",
  meta,
  links,
  tldrItems,
  heroSlot,
  children,
}: CaseStudyLayoutProps) {
  return (
    <article className="w-full stack-5xl">
      {/* Title block */}
      <section className="stack-lg">
        <div className="text-column stack-lg">
          <div className="flex items-center gap-base flex-wrap">
            {meta && <p className="type-body-sm">{meta}</p>}
            {links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="link-pill h-2xl px-base rounded-pill flex items-center justify-center gap-sm type-body-sm transition-colors"
              >
                {link.label}
                {externalLinkIcon}
              </a>
            ))}
          </div>
          <h1 className="type-hero text-balance">
            <span className="text-color-text-primary font-medium">
              {title}{titleSeparator}
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
          <h3 className="type-summary-label pb-md border-b border-color-border-secondary">
            Summary
          </h3>
          <ul
            className="divide-y divide-color-border-secondary list-none text-color-text-primary"
            role="list"
          >
            {tldrItems.map((item, i) => (
              <li key={i} className="flex gap-md py-md type-body leading-body">
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
