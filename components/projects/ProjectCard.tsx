// components/projects/ProjectCard.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  categoryLabel: string;
  title: string;
  description?: string;
  href: string;
  background?: string;
  comingSoon?: boolean;
};

export function ProjectCard({
  categoryLabel,
  title,
  description,
  href,
  background,
  comingSoon,
}: ProjectCardProps) {
  const cardStyle = background
    ? ({ "--card-bg-image": `url(${background})` } as React.CSSProperties)
    : undefined;

  const inner = (
    <motion.article
      transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
      className={`card-interactive ${styles.card} ${comingSoon ? styles.cardComingSoon : ""}`}
      style={cardStyle}
    >
      <div className={styles.cardGradientHover} aria-hidden="true" />
      <header className="relative z-10 flex flex-1 flex-col justify-between min-h-0">
        <div className={styles.topRow}>
          <span className={styles.label}>{categoryLabel}</span>
          {comingSoon && (
            <span className={styles.comingSoonBadge}>Coming Soon</span>
          )}
        </div>
        <div className={styles.bottomStack}>
          <p className="type-h4 max-w-[380px]">{title}</p>
          {description && (
            <p className="leading-body type-body-sm tracking-normal text-color-text-secondary max-w-[380px]">{description}</p>
          )}
        </div>
      </header>
    </motion.article>
  );

  if (comingSoon) return <div>{inner}</div>;
  return <Link href={href}>{inner}</Link>;
}
