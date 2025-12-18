// components/home/ExperienceModal.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type WorkExperience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

type ProjectItem = {
  name: string;
  tech: string;
  year: string;
};

type ExperienceModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Kofa Design",
    role: "Owner",
    period: "2022 - Present",
    description:
      "At Kofa Design, I help early-stage startups and technical teams shape products from first idea to production-ready experiences. Recent work includes AI tools, developer tooling, SaaS platforms, and marketplace platforms for clients like MixLodge, Shuttle, and Dealio. I collaborate closely with founders, PMs, and engineers to turn complex ideas into clear, intuitive solutions.",
  },
  {
    company: "OptimoRoute",
    role: "Lead product designer",
    period: "2020 - 2022",
    description:
      "Led end-to-end product design and helped shift the product from engineering-first to design-driven. Improved usability, refreshed the brand and UI, evolved the design system, and mentored designers. Collaborated closely with engineering, product and sales to deliver clear, user-focused outcomes.",
  },
  {
    company: "Five Agency (now Endava)",
    role: "Product designer",
    period: "2017 - 2020",
    description:
      "Owned design across a wide spectrum of client projects, ranging from native mobile and web products to game and brand work. Moved fluidly between product design, illustration, and creative storytelling. Led projects, collaborated with stakeholders, and guided junior designers.",
  },
  {
    company: "Produkcija Pokret",
    role: "Digital designer, Illustrator",
    period: "2016 - 2017",
    description:
      "Created original illustration systems and visual assets for animated explainer videos. Designed landing pages, newsletters, and marketing assets. Built cohesive visuals that elevated campaigns and ensured a unified brand presence.",
  },
];

const PROJECTS: ProjectItem[] = [
  { name: "Neptune", tech: "AI infrastructure platform · Brand, web & agent interface", year: "2025" },
  { name: "MixLodge", tech: "Early-stage SaaS · Product design (MVP)", year: "2025" },
  { name: "Shuttle Console", tech: "Developer console · Product design (workflows)", year: "2025" },
  { name: "Dealio", tech: "Marketplace mobile & web · Product design", year: "2024" },
  { name: "Shuttle Console Beta", tech: "Developer platform (beta) · Product design", year: "2023" },
  { name: "Worldcoin", tech: "Crypto marketing · Illustration systems", year: "2023" },
  { name: "Shuttle", tech: "Product website · UX/UI", year: "2022" },
  { name: "OptimoRoute", tech: "Logistics platform · Product design (design leadership)", year: "2022" },
  { name: "CoreData", tech: "Product website · UX/UI, illustration", year: "2021" },
  { name: "Five Agency", tech: "Brand guide · Illustration / visual design", year: "2020" },
  { name: "Marriott (Grow Game)", tech: "Mobile game · Environment and character design, design leadership", year: "2020" },
  { name: "Penguin Random House (Ahab)", tech: "Talen web platform · Product design", year: "2020" },
  { name: "Marriott (TakeCare 3.0)", tech: "Mobile product · Product design", year: "2020" },
  { name: "Penguin Random House (Volumes)", tech: "Mobile reading app · Product design", year: "2019" },
  { name: "SurveySwap", tech: "Explainer · Illustration systems", year: "2019" },
  { name: "Novo Protocol", tech: "Explainer · Illustration systems", year: "2019" },
  { name: "Hewlett-Packard (Aruba Atmosphere)", tech: "Enterprise mobile app · Product design", year: "2018" },
  { name: "Megatrend IBM", tech: "Explainer · Illustration systems", year: "2017" },
  { name: "Cirtuo", tech: "Web product · UX/UI, illustration", year: "2017" },
  { name: "Medulin Craft Beer Festival", tech: "Brand + web · Brand design / illustration", year: "2016" },
  { name: "PPHE Hotel Group", tech: "Newsletter templates · Visual design", year: "2016" },
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
              bg-[#111010]
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
              bg-[linear-gradient(180deg,#111010_9.26%,rgba(17,16,16,0.80)_47.88%,rgba(17,16,16,0.00)_100%)]
              transition-opacity duration-200
              z-10
              ${hasScrolled ? "opacity-100" : "opacity-0"}
            `}
          />

          {/* SCROLLABLE CONTENT */}
          <div
            className="project-modal-scroll relative flex-1 overflow-auto pb-40 px-[var(--space-xl)]"
            onScroll={handleScroll}
          >
            {/* PROFILE HEADER */}
            <div className="pt-[var(--space-xl)] mb-[var(--space-5xl)]">
              {/* Profile Picture and Info */}
              <div className="flex items-center gap-6 mb-[var(--space-2xl)]">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-color-bg-muted border border-color-border">
                    {/* Placeholder - replace with actual image */}
                    <div className="w-full h-full bg-color-bg-surface" />
                  </div>
                </div>

                {/* Name, Title, Contact */}
                <div className="flex-1">
                  <h1 className="type-h2 mb-2">Ana Beverin</h1>
                  
                  {/* Contact Info */}
                  <div className="flex flex-wrap gap-6">
                    <a
                      href="mailto:ana.beverin@gmail.com"
                      className="flex items-center gap-2 type-body-sm hover:text-color-text-primary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span>ana.beverin@gmail.com</span>
                    </a>
                    
                  
                    
                    <a
                      href="#"
                      className="flex items-center gap-2 type-body-sm hover:text-color-text-primary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      <span>anabeverin.com</span>
                    </a>
                    
                    <a
                      href="https://linkedin.com/in/paradoxich/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 type-body-sm hover:text-color-text-primary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span>linkedin.com/in/paradoxich/</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* ABOUT SECTION */}
              <div>
                <h3 className="type-label mb-3">ABOUT</h3>
                <p className="type-body mb-4">
                  I'm a product designer who turns ambiguous problems into clear direction and designs easy-to-use, visually refined products. These days, I work mostly on developer tools and early-stage products from 0 → 1.
                </p>
                
                {/* DOWNLOAD CV BUTTON */}
                <motion.div
                  className="relative inline-flex rounded-full"
                  style={{
                    outline: "1px solid transparent",
                    outlineOffset: "2px",
                  }}
                  whileHover={{
                    outlineColor: "#2E3027", // color-40
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/docs/CV-Beverin-2026.pdf';
                      link.download = 'CV-Beverin-2026.pdf';
                      link.click();
                    }}
                    className="relative inline-flex h-8 items-center justify-center gap-2 overflow-hidden rounded-full border border-[var(--color-60)] bg-transparent type-body-xs px-4"
                  >
                    {/* Fill - static */}
                    <span className="absolute inset-x-0 bottom-0 top-0 z-0 bg-[var(--color-20)]" />
                    
                    <span className="relative z-10 whitespace-nowrap">Download CV</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="relative z-10"
                      style={{ transform: 'rotate(90deg)' }}
                    >
                      <path
                        fill="currentColor"
                        d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
                      />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </div>

            {/* WORK EXPERIENCE TITLE */}
            <div className="mb-[var(--space-2xl)]" style={{ marginTop: '80px' }}>
              <h3 className="type-h3">Work Experience</h3>
            </div>

            {/* WORK EXPERIENCE LIST */}
            <div>
              {WORK_EXPERIENCE.map((exp, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-6 md:gap-8 ${index > 0 ? 'mt-5' : ''}`}
                >
                  {/* LEFT COLUMN: Company, Role, Period */}
                  <div className="stack-xs">
                    <div className="type-body-strong">{exp.company}</div>
                    <div className="type-body-sm">{exp.role}</div>
                    <div className="type-body-sm">{exp.period}</div>
                  </div>

                  {/* RIGHT COLUMN: Description */}
                  <div className="type-body">{exp.description}</div>
                </div>
              ))}
            </div>

            {/* SPACING BETWEEN SECTIONS */}
            <div style={{ height: '80px' }} />

            {/* PROJECTS TITLE */}
            <h4 className="type-h4 mb-[var(--space-xl)]">Projects</h4>

            {/* PROJECT LIST */}
            <div className="divide-y divide-color-border mb-[var(--space-2xl)]">
              {PROJECTS.map((project, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1.1fr,1.6fr,0.4fr] items-baseline gap-4 py-3"
                >
                  {/* Project Name */}
                  <span className="type-body-sm-strong">{project.name}</span>

                  {/* Tech */}
                  <span className="type-body-sm">{project.tech}</span>

                  {/* Year */}
                  <span className="type-body-xs text-right">{project.year}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
