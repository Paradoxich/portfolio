// components/projects/ProjectCard.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  categoryLabel: string;
  title: string;
  href: string;
  background?: string;
};

export function ProjectCard({ categoryLabel, title, href, background }: ProjectCardProps) {
  return (
    <Link href={href}>
      <motion.article
        transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
        className={`card-interactive ${styles.card}`}
        style={
          background
            ? ({ "--card-bg-image": `url(${background})` } as React.CSSProperties)
            : undefined
        }
      >
        <div className={styles.cardGradientHover} aria-hidden="true" />
        <header className="relative z-10 flex flex-1 flex-col justify-between min-h-0">
          <div className={styles.topRow}>
            <span className={styles.label}>{categoryLabel}</span>
          </div>
          <div className={styles.bottomStack}>
            <p className="type-h4 max-w-[320px]">{title}</p>
          </div>
        </header>
      </motion.article>
    </Link>
  );
}
