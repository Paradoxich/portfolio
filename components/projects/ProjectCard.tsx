// components/projects/ProjectCard.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
type ProjectCardProps = {
  categoryLabel: string;
  title: string; // card title (from cardTitle or fallback)
  href: string;
};

export function ProjectCard({
  categoryLabel,
  title,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <motion.article
        transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
        className="project-card flex cursor-pointer rounded-card"
      >
        <header className="relative z-10 flex flex-1 flex-col justify-between min-h-0">
            <span className="project-card-label w-fit">{categoryLabel}</span>
            <p className="project-card-title max-w-[420px]">{title}</p>
          </header>
        </motion.article>
    </Link>
  );
}
