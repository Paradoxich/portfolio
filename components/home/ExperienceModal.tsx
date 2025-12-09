// components/home/ExperienceModal.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ProjectItem = {
  name: string;
  role: string;
  tech: string;
  year: string;
};

type ExperienceModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

// Project data - user will provide actual data
const PROJECTS: ProjectItem[] = [
  // TODO: Replace with actual project data
  { name: "Project 1", role: "Role 1", tech: "Web", year: "2024" },
  { name: "Project 2", role: "Role 2", tech: "Mobile", year: "2023" },
];

export function ExperienceModal({ isOpen, onClose }: ExperienceModalProps) {
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

  if (!isOpen) return null;

  return (
    <>
      {/* OVERLAY */}
      <div
        className="
    fixed inset-0 z-50
    flex items-start justify-center
    bg-[rgba(2,2,2,0.50)]
    backdrop-blur-[16px]
    pt-[40px]
    overflow-hidden
  "
        onClick={onClose}
      >
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
          {/* CLOSE BUTTON */}
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
            aria-label="Close experience modal"
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
            className="relative flex-1 overflow-auto pb-40 px-[var(--space-xl)]"
            onScroll={handleScroll}
          >
            {/* TITLE */}
            <h2 className="type-h2 mb-[var(--space-2xl)] pt-[var(--space-xl)]">
              Overview of my projects
            </h2>

            {/* PROJECT LIST */}
            <div className="divide-y divide-color-border mb-[var(--space-2xl)]">
              {PROJECTS.map((project, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1.4fr,1.4fr,1.4fr,1.4fr] items-baseline gap-4 py-3"
                >
                  {/* Project Name */}
                  <span className="type-body-sm-strong">{project.name}</span>

                  {/* Role */}
                  <span className="type-body-sm">{project.role}</span>

                  {/* Tech */}
                  <span className="type-body-sm">{project.tech}</span>

                  {/* Year */}
                  <span className="type-body-xs text-right">{project.year}</span>
                </div>
              ))}
            </div>

            {/* DOWNLOAD CV BUTTON */}
            <div className="flex justify-start">
              <Link
                href="/cv.pdf"
                className="relative inline-flex items-center"
                download
              >
                <span className="btn-cta">Download CV</span>
                <span className="btn-cta-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
