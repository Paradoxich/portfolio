// components/ProjectModal.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectConfig } from "./ProjectsConfig";

type ProjectModalProps = {
  isOpen: boolean;
  project: ProjectConfig | null;
  onClose: () => void;
};

export function ProjectModal({ isOpen, project, onClose }: ProjectModalProps) {
  // flag za fade na vrhu
  const [hasScrolled, setHasScrolled] = React.useState(false);
  // flag za "card se digne od dna"
  const [atEnd, setAtEnd] = React.useState(false);

  // scroll lock
  React.useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    const scrolled = scrollTop > 0;
    const reachedEnd = scrollTop + clientHeight >= scrollHeight - 16; // mali buffer

    if (scrolled !== hasScrolled) {
      setHasScrolled(scrolled);
    }
    if (reachedEnd !== atEnd) {
      setAtEnd(reachedEnd);
    }
  };

  if (!isOpen || !project) return null;

  // HERO
  const renderHero = () => {
    if (project.hero?.type === "image") {
      return (
        <div className="w-full mb-[var(--space-2xl)]">
          <Image
            src={project.hero.src}
            alt={project.hero.alt ?? ""}
            width={1600}
            height={900}
            className="w-full h-auto rounded-[var(--radius-md)] border border-color-border-secondary"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
        </div>
      );
    }

    if (project.hero?.type === "video") {
      return (
        <div className="w-full mb-[var(--space-2xl)]">
          <video
            src={project.hero.src}
            className="w-full h-auto rounded-[var(--radius-md)] border border-color-border-secondary"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      );
    }

    return (
      <div
        className="
          w-full h-[500px] mb-[var(--space-2xl)]
          rounded-[var(--radius-md)]
          border border-color-border-secondary bg-color-bg-muted
          flex items-center justify-center
        "
      >
        <span className="type-body-xs">
          Hero placeholder (500px tall)
        </span>
      </div>
    );
  };

  return (
    <>
      {/* SVG FILTER DEFINITION */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter
            id="filter0_n_210_779"
            x="-50"
            y="-50"
            width="1612"
            height="4810"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="5 5"
              stitchTiles="stitch"
              numOctaves={3}
              result="noise"
              seed={9956}
            />
            <feColorMatrix
              in="noise"
              type="luminanceToAlpha"
              result="alphaNoise"
            />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA
                type="discrete"
                tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
              />
            </feComponentTransfer>
            <feComposite
              operator="in"
              in2="shape"
              in="coloredNoise1"
              result="noise1Clipped"
            />
            <feFlood floodColor="#020202" result="color1Flood" />
            <feComposite
              operator="in"
              in2="noise1Clipped"
              in="color1Flood"
              result="color1"
            />
            <feMerge result="effect1_noise_210_779">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* OVERLAY */}
      <div
        className="
    fixed inset-0 z-50
    flex items-start justify-center
    bg-[rgba(2,2,2,0.30)]
    backdrop-blur-[16px]
    pt-[40px]
    overflow-hidden
  "
        onClick={onClose}
      >
        {/* NOISE layer */}
        <svg
          className="
      pointer-events-none
      absolute inset-0
      w-full h-full
      opacity-40
      mix-blend-soft-light
    "
          style={{ filter: "url(#filter0_n_210_779)" }}
        >
          <rect width="100%" height="100%" fill="#020202" />
        </svg>
        {/* MODAL CARD */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className={`
            card relative
            w-[80vw] max-w-5xl
            flex flex-col gap-[var(--space-2xl)]
            overflow-hidden
            transition-[height,border-radius] duration-300
            pb-0
            ${
              atEnd
                ? "h-[calc(100vh-40px-40px)] rounded-b-[var(--radius-lg)] border-b border-color-border-secondary"
                : "h-[calc(100vh-40px)] rounded-b-none border-b-0"
            }
          `}
          initial={{ opacity: 0, scale: 0.9, y: 200 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 200 }}
          transition={{ duration: 0.32, ease: [0.2, 0, 0.4, 1] }}
        >
          {/* CLOSE BUTTON – preko hero-a */}
          <button
            onClick={onClose}
            className="
              absolute z-20
              top-[12px] right-[12px]
              inline-flex h-8 w-8 items-center justify-center
              rounded-full
              bg-[#100F0C]
              border border-color-border
              text-color-text-secondary
              hover:text-color-text-primary hover:border-color-text-primary
              transition-colors
            "
            aria-label="Close project"
          >
            ✕
          </button>

          {/* TOP GRADIENT – vezan za scroll state */}
          <div
            className={`
              pointer-events-none
              absolute inset-x-0 top-0
              h-16
              bg-[linear-gradient(180deg,#100F0C_9.26%,rgba(16,15,12,0.80)_47.88%,rgba(16,15,12,0.00)_100%)]
              transition-opacity duration-200
              z-10
              ${hasScrolled ? "opacity-100" : "opacity-0"}
            `}
          />

          {/* SCROLLABLE CONTENT */}
          <div
            className="relative flex-1 overflow-auto pb-40"
            onScroll={handleScroll}
          >
            {/* HERO */}
            {renderHero()}

            {/* PAGE CONTENT — definiran u ProjectPage* komponenti */}
            {project.Page && <project.Page />}
          </div>
        </motion.div>
      </div>

      {/* HINT */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-50">
        <p className="type-body-xs text-right">
          ← / → to switch projects
        </p>
      </div>
    </>
  );
}
