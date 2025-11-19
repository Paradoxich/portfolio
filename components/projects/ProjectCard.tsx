// components/ProjectCard.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import CTAWithIcon from "../CTAWithIcon";

type ProjectCardProps = {
  label?: string; // npr. "Neptune"
  title: string; // kratki opis
  summary: string; // jedna rečenica ispod
  href?: string;
  onClick?: () => void;
};

export function ProjectCard({
  label,
  title,
  summary,
  href = "#",
  onClick,
}: ProjectCardProps) {
  return (
    <motion.article
      transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
      className="
        card flex flex-col gap-gutter
        md:even:translate-y-5
        cursor-pointer
      "
      onClick={onClick}
    >
      {/* Top: label + short title */}
      <header className="space-y-1">
        {label && (
          <div className="type-body text-[var(--color-90)]">{label}</div>
        )}
        <p className="type-body-sm text-[var(--color-80)]">{title}</p>
        {summary && (
          <p className="type-body-xs text-[var(--color-70)]">{summary}</p>
        )}
      </header>

      {/* Preview area – placeholder za kasnije slike/frames */}
      <div className="card rounded-xl h-[400px]" />

      {/* Footer link */}
      <CTAWithIcon label="Check it out" href={href} />
    </motion.article>
  );
}
