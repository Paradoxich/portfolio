// components/ProjectModal.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { ProjectConfig } from "./ProjectsConfig";

type ProjectModalProps = {
  isOpen: boolean;
  project: ProjectConfig | null;
  onClose: () => void;
};

export function ProjectModal({ isOpen, project, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  // scroll lock
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // flag za fade na vrhu
  const [hasScrolled, setHasScrolled] = React.useState(false);
  // flag za "card se digne od dna"
  const [atEnd, setAtEnd] = React.useState(false);

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

  // HERO
  const renderHero = () => {
    if (project.hero?.type === "image") {
      return (
        <div className="w-full mb-[var(--space-2xl)]">
          <img
            src={project.hero.src}
            alt={project.hero.alt ?? ""}
            className="w-full h-auto rounded-[var(--radius-md)] border border-color-border-secondary"
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
        <span className="type-body-xs text-color-text-secondary">
          Hero placeholder (500px tall)
        </span>
      </div>
    );
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        className="
    fixed inset-0 z-50
    flex items-start justify-center
    bg-[rgba(16,15,12,0.30)]
    backdrop-blur-[25px]
    pt-[40px]
    overflow-hidden
  "
        onClick={onClose}
      >
        {/* NOISE layer */}
        <div
          className="
      pointer-events-none
      absolute inset-0
      bg-[url('/overlays/projects-texture.svg')]
      bg-cover bg-center
      opacity-40
      mix-blend-soft-light
    "
        />
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
        <p className="type-body-xs text-color-text-secondary text-right">
          ← / → to switch projects
        </p>
      </div>
    </>
  );
}
