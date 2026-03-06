"use client";

import * as React from "react";

export type CaseStudyLink = {
  href: string;
  label: string;
};

type CaseStudyLayoutProps = {
  title: string;
  subtitle: string;
  meta?: string;
  links?: CaseStudyLink[];
  tldrItems: string[];
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
  meta,
  links,
  tldrItems,
  children,
}: CaseStudyLayoutProps) {
  return (
    <article className="w-full stack-5xl">
      {/* Title block */}
      <section className="stack-lg">
        <div className="text-column stack-lg">
          <h1 className="type-h3">
            {title}:{" "}
            <span className="text-color-text-secondary font-normal">
              {subtitle}
            </span>
          </h1>

          <div className="flex items-center gap-4 flex-wrap">
            {meta && <p className="type-body-sm">{meta}</p>}
            {links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="link-pill h-8 px-4 rounded-full flex items-center justify-center gap-2 type-body-sm transition-colors"
              >
                {link.label}
                {externalLinkIcon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="stack-md">
        <div className="text-column stack-md rounded-[var(--radius-md)] p-5 bg-color-bg-muted">
          <h3 className="type-label text-color-text-secondary">Summary</h3>
          <ul
            className="type-body-sm leading-loose tracking-normal list-none space-y-1 text-color-text-primary"
            role="list"
          >
            {tldrItems.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden>→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {children}
    </article>
  );
}
