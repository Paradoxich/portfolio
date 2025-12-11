// components/ProjectCard.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ThemeProvider } from "./ThemeProvider";
import type { Theme } from "./ProjectsConfig";

type ProjectCardProps = {
  label?: string; // npr. "Neptune"
  title: string; // kratki opis
  href: string;
  hero?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  };
  theme?: Theme;
};

export function ProjectCard({
  label,
  title,
  href,
  hero,
  theme,
}: ProjectCardProps) {
  // Only apply card-specific theme if cardBg/cardBorder are explicitly set
  // Otherwise, use default CSS variables (via card class)
  const hasCardTheme = theme?.cardBg !== undefined || theme?.cardBorder !== undefined;
  
  // Build card style - only set colors if cardBg/cardBorder are explicitly provided
  // If cardBorder is not set, explicitly use default CSS variable
  const cardStyle: React.CSSProperties = {
    padding: "var(--space-xl)",
    ...(theme?.cardBg !== undefined && { backgroundColor: theme.cardBg }),
    ...(theme?.cardBorder !== undefined 
      ? { borderColor: theme.cardBorder }
      : { borderColor: "var(--color-border)" }), // Use default when cardBorder not set
  };

  // Build hero container style
  // If cardBorder is not set, explicitly use default CSS variable
  const heroStyle: React.CSSProperties | undefined = 
    theme?.cardBg !== undefined || theme?.cardBorder !== undefined
      ? {
          ...(theme?.cardBg !== undefined && { backgroundColor: theme.cardBg }),
          ...(theme?.cardBorder !== undefined 
            ? { borderColor: theme.cardBorder }
            : { borderColor: "var(--color-border)" }), // Use default when cardBorder not set
        }
      : undefined;

  return (
    <Link href={href} className="md:even:translate-y-5">
      <motion.article
        transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
        className={hasCardTheme 
          ? "flex flex-col gap-gutter cursor-pointer rounded-[var(--radius-lg)] border"
          : "card flex flex-col gap-gutter cursor-pointer"
        }
        style={hasCardTheme ? cardStyle : undefined}
      >
        {/* Top: label + short title */}
        <header className="stack-xs">
          {label && (
            <div className="type-body-strong">{label}</div>
          )}
          <p className="type-body-sm">{title}</p>
        </header>

        {/* Preview area – hero image or video */}
        {hero?.type === "image" ? (
          <div 
            className={`relative border rounded-[var(--radius-md)] h-[400px] overflow-hidden ${!hasCardTheme ? "bg-color-bg border-color-border" : ""}`}
            style={heroStyle}
          >
            <Image
              src={hero.src}
              alt={hero.alt ?? ""}
              width={800}
              height={400}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            {/* <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(180deg, rgba(16, 17, 16, 0.00) 0%, rgba(16, 17, 16, 0.81) 61.07%, #101110 100%);",
              }}
            /> */}
          </div>
        ) : hero?.type === "video" ? (
          <div 
            className={`relative border rounded-[var(--radius-md)] h-[400px] overflow-hidden ${!hasCardTheme ? "bg-color-bg border-color-border" : ""}`}
            style={heroStyle}
          >
            <video
              src={hero.src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Gradient overlay */}
            {/* <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(180deg, rgba(16, 17, 16, 0.00) 0%, rgba(16, 17, 16, 0.81) 61.07%, #101110 100%);",
              }}
            /> */}
          </div>
        ) : (
          <div className="panel h-[400px]" />
        )}
      </motion.article>
    </Link>
  );
}
