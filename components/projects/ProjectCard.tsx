// components/ProjectCard.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import CTAWithIcon from "../CTAWithIcon";

type ProjectCardProps = {
  label?: string; // npr. "Neptune"
  title: string; // kratki opis
  href?: string;
  onClick?: () => void;
};

export function ProjectCard({
  label,
  title,
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
      <header className="stack-xs">
        {label && (
          <div className="type-body-strong">{label}</div>
        )}
        <p className="type-body-sm">{title}</p>
      </header>

      {/* Preview area – placeholder za kasnije slike/frames */}
      <div className="panel h-[400px]" />

      {/* Footer link */}
      <CTAWithIcon label="Check it out" href={href} />
    </motion.article>
  );
}
