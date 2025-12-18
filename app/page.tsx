"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CTAWithIcon from "../components/CTAWithIcon";
import { PotAnimation } from "../components/home/PotAnimation";
import LifeGallery from "../components/home/LifeGallery";
import TestimonialsSection from "../components/home/TestimonialsSection";
import { HomeIllustrationsPreview } from "../components/illustrations/HomeIllustrationsPreview";
import { ExperienceModal } from "../components/home/ExperienceModal";
import { projectsConfig } from "../components/projects/ProjectsConfig";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  messages: string[];
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Nodar Daneliya",
    role: "CEO @ Shuttle",
    image: "/testimonials/testimonial-nodar.png",
    messages: [
      "I love working with Ana!",
      "She has an incredible ability to quickly grasp what you’re looking for and translate it into thoughtful, practical options.",
      "She has a true gift for bringing ideas to life – even the wildest ones. Her attention to detail is outstanding, and she works efficiently while maintaining great flexibility in her approach.",
      "I also appreciate how she leverages her experience to refine designs for a better user experience. Ana isn’t afraid to experiment, even when faced with ambiguous tasks – she’s fantastic to work with.",
    ],
  },
  {
    name: "Kurt, Jaka & Daniel",
    role: "Founders @ MixLodge",
    image: "/testimonials/testimonial-mixlodge.png",
    messages: [
      "We are a small startup based in Switzerland and were looking for a designer for our website when we came across Ana.",
      "We can say confidently that our experience working with Ana was outstanding.",
      "Ana communicated her points very clearly and always brought new creative ideas to our meetings.",
      "Her attention to detail and punctuality was impressive and we are extremely happy with how things turned out.",
      "We would be very happy to work with her again in the future.",
    ],
  },
  {
    name: "Dino Pohilj",
    role: "Product Manager",
    image: "/testimonials/testimonial-dino.png",
    messages: [
      "Working with Ana across multiple projects has been an exceptional experience.",
      "She consistently shows outstanding abilities as a product designer.",
      "Ana stands out as the best product designer I've had the opportunity to work with.",
      "Her ability to thoroughly understand product and business requirements makes her incredibly easy to collaborate with on any project.",
    ],
  },
];

export default function Page() {
  const [isExperienceModalOpen, setIsExperienceModalOpen] = React.useState(false);

  const openExperienceModal = React.useCallback(() => {
    setIsExperienceModalOpen(true);
  }, []);

  const closeExperienceModal = React.useCallback(() => {
    setIsExperienceModalOpen(false);
  }, []);

  // keyboard shortcuts
  React.useEffect(() => {
    if (!isExperienceModalOpen) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeExperienceModal();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isExperienceModalOpen, closeExperienceModal]);

  return (
    <>
      <main className="page-shell">
      {/* ================= HERO TITLE (4/12, not boxed) ================= */}
      <div className="layout-grid hero-gap">
        <section className="col-span-12 md:col-span-5">
          <h1 className="type-h1 text-balance">
            <span className="text-color-text-secondary font-normal">
              Senior designer crafting delightful digital products{" "}
            </span>
            from the ground up.
          </h1>
        </section>
      </div>

      {/* ================= BENTO GRID (12 cols, 20px gutter) ================= */}
      <div className="layout-grid">
        {/* ---------- ROW A ---------- */}

        {/* LEFT: ABOUT (7/12) */}
        <section className="col-span-12 md:col-span-7">
          <div className="card h-full flex flex-col pt-0">
            {/* Header bar with three dots and title */}
            <div className="relative flex items-center justify-center border-b border-color-border h-12 -mx-[var(--space-xl)] px-[var(--space-xl)] mt-0 pt-0">
              {/* Three dots on the left */}
              <div className="absolute left-[var(--space-lg)] flex gap-1">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-border)" }}></span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-border)" }}></span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-border)" }}></span>
              </div>
              
              {/* Centered title */}
              <h2 className="text-[12px] tracking-expanded font-medium text-color-text-secondary" style={{ textTransform: "none" }}>General</h2>
            </div>

            {/* Content sections container */}
            <div className="flex flex-col gap-md pt-6" >
              {/* OVERVIEW section */}
              <div className="card-muted p-4 rounded-xl flex flex-col gap-2" >
                <p className="type-body-xs uppercase tracking-expanded text-color-text-secondary">OVERVIEW</p>
                <p className="type-body-sm max-w-3xl text-color-text-primary">
                  Product designer focused on turning complex problems into clear direction and usable, polished products.
                </p>
              </div>

              {/* CONFIGURATION section */}
              <div className="card-muted p-4 rounded-xl flex flex-col gap-2" >
                <p className="type-body-xs uppercase tracking-expanded text-color-text-secondary">CONFIGURATION</p>
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex justify-between items-baseline">
                    <span className="type-body-sm text-color-text-primary">Domain</span>
                    <span className="type-body-sm">DevTools, early-stage products</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="type-body-sm text-color-text-primary">Primary focus</span>
                    <span className="type-body-sm">Product systems</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="type-body-sm text-color-text-primary">Collaboration</span>
                    <span className="type-body-sm">Close with engineering & product</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="type-body-sm text-color-text-primary">Complexity handling</span>
                    <span className="type-body-sm">Simplify, don't hide</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="type-body-sm text-color-text-primary">Iteration</span>
                    <span className="type-body-sm">Continuous</span>
                  </div>
                </div>
              </div>

              {/* AVAILABILITY section */}
              <div className="card-muted p-4 rounded-xl flex flex-col gap-2" >
                <p className="type-body-xs uppercase tracking-expanded text-color-text-secondary">AVAILABILITY</p>
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex justify-between items-baseline">
                    <span className="type-body-sm text-color-text-primary">Location/Timezone</span>
                    <span className="type-body-sm">Croatia - EU/CET</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="type-body-sm text-color-text-primary">Remote work</span>
                    <span className="type-body-sm">Preferred</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="type-body-sm text-color-text-primary">Status</span>
                    <span 
                      className="flex items-center type-body-sm"
                      style={{
                        height: "24px",
                        padding: "4px 8px 4px 10px",
                        gap: "8px",
                        borderRadius: "100px",
                        border: "1px solid #2E3027",
                        backgroundColor: "#23221B",
                        color: "#C5BFAB",
                        
                      }}
                    >
                      <span 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#18C340" }}
                      ></span>
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT: PROJECTS + EXPERIENCE (5/12) */}
        <aside className="col-span-12 md:col-span-5">
          <div className="h-full flex flex-col gap-gutter">
            {/* PROJECTS */}
            <section className="card flex-1 flex flex-col pt-0">
              {/* Header bar with three dots and title */}
              <div className="relative flex items-center border-b border-color-border h-12 -mx-[var(--space-xl)] px-[var(--space-xl)] mt-0 pt-0">
                {/* Left container - same width as right */}
                <div className="absolute left-[var(--space-lg)] w-16 flex items-center">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-border)" }}></span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-border)" }}></span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-border)" }}></span>
                  </div>
                </div>
                
                {/* Centered title */}
                <h2 className="flex-1 text-center text-[12px] tracking-expanded font-medium text-color-text-secondary" style={{ textTransform: "none" }}>Projects</h2>
                
                {/* Right container - same width as left */}
                <div className="absolute right-[var(--space-lg)] w-16 flex items-center justify-end">
                  <Link href="/projects" className="cursor-pointer rounded p-1 transition-colors hover:bg-color-bg-surface group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:[&_path]:fill-[var(--color-90)]">
                      <path d="M8.27567 3.33333H13.9997C14.1765 3.33333 14.3461 3.40357 14.4711 3.5286C14.5961 3.65362 14.6663 3.82319 14.6663 4V13.3333C14.6663 13.5101 14.5961 13.6797 14.4711 13.8047C14.3461 13.9298 14.1765 14 13.9997 14H1.99967C1.82286 14 1.65329 13.9298 1.52827 13.8047C1.40325 13.6797 1.33301 13.5101 1.33301 13.3333V2.66667C1.33301 2.48986 1.40325 2.32029 1.52827 2.19526C1.65329 2.07024 1.82286 2 1.99967 2H6.94234L8.27567 3.33333ZM13.333 7.33333H2.66634V12.6667H13.333V7.33333ZM13.333 6V4.66667H7.72367L6.39034 3.33333H2.66634V6H13.333Z" fill="#C5BFAB"/>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Projects list */}
              <div className="mt-6 card-cta p-0">
                <div className="divide-y divide-color-border-secondary">
                  {projectsConfig
                    .filter((p) => 
                      ["neptune-lp", "neptune-chat", "mixlodge-brand"].includes(p.key)
                    )
                    .map((project) => {
                      // Map project keys to descriptions
                      const descriptions: Record<string, string> = {
                        "neptune-lp": "Brand/Web",
                        "neptune-chat": "Agent interface prototype",
                        "mixlodge-brand": "Brand/MVP",
                      };

                      const description = descriptions[project.key] || project.title;
                      const projectPath = project.key === "neptune-lp" ? "/neptune" :
                                         project.key === "neptune-chat" ? "/neptune-chat" :
                                         "/mixlodge";

                      return (
                        <Link
                          key={project.key}
                          href={`/projects/${project.key}?return=/`}
                          className="flex items-center gap-4 py-3 px-3 group"
                        >
                          {/* Icon - circular with hero image or placeholder */}
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-color-bg">
                            {project.hero && project.hero.type === "image" ? (
                              <Image
                                src={project.hero.src}
                                alt={project.label || project.title}
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                              />
                            ) : project.hero && project.hero.type === "video" ? (
                              <div className="w-full h-full bg-color-bg flex items-center justify-center">
                                <span className="text-color-text-secondary text-xs font-medium">
                                  {project.label?.charAt(0) || project.title.charAt(0)}
                                </span>
                              </div>
                            ) : project.key === "portfolio" ? (
                              <span className="text-color-text-secondary text-sm font-medium">
                                Hi
                              </span>
                            ) : (
                              <span className="text-color-text-secondary text-sm">
                                {project.label?.charAt(0) || project.title.charAt(0)}
                              </span>
                            )}
                          </div>

                          {/* Project name and description */}
                          <div className="flex-1 min-w-0">
                            <p className="type-body-sm-strong text-color-text-primary">
                              {project.label || project.title}
                            </p>
                            <p className="type-body-xs text-color-text-secondary">
                              {description}
                            </p>
                          </div>

                          {/* Link button with eye icon */}
                          <div 
                            className="flex items-center gap-2 px-3 py-1.5 group-hover:border-color-border-secondary transition-colors"
                            style={{
                              borderRadius: "100px",
                              border: "1px solid #2E3027",
                              background: "rgba(16, 15, 12, 0.10)"
                            }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-shrink-0"
                            >
                              <path
                                d="M8 3C4.667 3 2.073 5.073 1 8c1.073 2.927 3.667 5 7 5s5.927-2.073 7-5c-1.073-2.927-3.667-5-7-5zm0 8.5c-1.933 0-3.5-1.567-3.5-3.5S6.067 4.5 8 4.5 11.5 6.067 11.5 8 9.933 11.5 8 11.5zm0-5.5c-.828 0-1.5.672-1.5 1.5S7.172 9 8 9s1.5-.672 1.5-1.5S8.828 6 8 6z"
                                fill="currentColor"
                                className="text-color-text-secondary"
                              />
                            </svg>
                            <span className="type-body-xs text-color-text-secondary">
                              {projectPath}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>

            </section>

            {/* EXPERIENCE */}
            <section className="card flex-1 flex flex-col pt-0">
              {/* Header bar with three dots and title */}
              <div className="relative flex items-center border-b border-color-border h-12 -mx-[var(--space-xl)] px-[var(--space-xl)] mt-0 pt-0">
                {/* Left container - same width as right */}
                <div className="absolute left-[var(--space-lg)] w-16 flex items-center">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-border)" }}></span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-border)" }}></span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-border)" }}></span>
                  </div>
                </div>
                
                {/* Centered title */}
                <h2 className="flex-1 text-center text-[12px] tracking-expanded font-medium text-color-text-secondary" style={{ textTransform: "none" }}>History</h2>
                
                {/* Right container - same width as left */}
                <div className="absolute right-[var(--space-lg)] w-16 flex items-center justify-end">
                  <button onClick={openExperienceModal} className="cursor-pointer rounded p-1 transition-colors hover:bg-color-bg-surface group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:[&_path]:fill-[var(--color-90)]">
                      <path d="M14 5.3335V13.9955C14.0006 14.083 13.984 14.1699 13.951 14.251C13.9181 14.3321 13.8695 14.4059 13.808 14.4683C13.7466 14.5306 13.6734 14.5802 13.5928 14.6143C13.5121 14.6484 13.4255 14.6662 13.338 14.6668H2.662C2.48654 14.6668 2.31826 14.5972 2.19413 14.4732C2.07 14.3492 2.00018 14.181 2 14.0055V1.99483C2 1.63683 2.29933 1.3335 2.668 1.3335H9.998L14 5.3335ZM12.6667 6.00016H9.33333V2.66683H3.33333V13.3335H12.6667V6.00016ZM5.33333 4.66683H7.33333V6.00016H5.33333V4.66683ZM5.33333 7.3335H10.6667V8.66683H5.33333V7.3335ZM5.33333 10.0002H10.6667V11.3335H5.33333V10.0002Z" fill="#C5BFAB"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Lista + fade samo na listi */}
              <div className="relative mt-2">
                <div className="divide-y divide-color-border">
                  {[
                    { company: "Kofa Design", role: "Owner", period: "2022-" },
                    {
                      company: "OptimoRoute",
                      role: "Design Lead",
                      period: "2020-2022",
                    },
                    {
                      company: "Five (Now Endava)",
                      role: "Product Designer",
                      period: "2017–2020",
                    },
                  ].map((job) => (
                    <div
                      key={job.company}
                      className="grid grid-cols-[1.4fr,1.4fr,1.4fr] items-baseline gap-4 py-3"
                      style={{ fontFamily: '"Geist Mono"', fontSize: "13px" }}
                    >
                      {/* Company */}
                      <span className=" text-color-text-primary">
                        {job.company}
                      </span>

                      {/* Role */}
                      <span className="text-color-text-secondary">
                        {job.role}
                      </span>

                      {/* Period */}
                      <span 
                        className="text-right"
                        style={
                          job.period === "2020-2022" || job.period === "2017–2020"
                            ? { color: "rgba(197, 191, 171, 0.4)" } // text-color-secondary with 0.4 opacity
                            : {}
                        }
                      >
                        {job.period}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Fade samo ispod liste */}
                <div className="experience-fade" />
              </div>
            </section>
          </div>
        </aside>

        {/* ---------- ROW B (4/12 · 3/12 · 5/12) ---------- */}

        {/* LEFT COL 4/12: Hire → Gallery */}
        <section className="flex flex-col col-span-12 md:col-span-4 stack-gutter">
          {/* HIRE */}
          <div className="card-muted flex flex-col gap-4">
            <p className="type-label">Available for hire</p>

            {/* INPUT WRAPPER */}
            <div className="relative w-full">
              <button className="btn-input">
                <span className="btn-input-text">
                  Tell me about your project…
                </span>
              </button>

              <button aria-hidden="true" className="btn-input-icon">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* GALLERY */}
 
              <LifeGallery />
         
        </section>

        {/* MID COL 3/12: Pills → Water plant → Song */}
        <section className="flex flex-col col-span-12 md:col-span-3 stack-gutter">
          {/* I DESIGN */}
          <section className="card-i-design h-[112px] card">
            <div className="flex h-full items-start justify-between">
              {/* LEFT LABEL */}
              <p className="type-label">I DESIGN</p>

              {/* RIGHT — PILLS, VERTICAL */}
              <div className="flex flex-col gap-2">
                <span className="pill-filled">Digital products</span>
                <span className="pill-filled">Websites</span>
                <span className="pill-filled">Design systems</span>
                <span className="pill-filled">Dev tools</span>
              </div>
            </div>
          </section>
          {/* WATER PLANT */}
          <section className="card flex flex-1 flex-col gap-6">
            {/* BLOK S ILUSTRACIJOM */}
            <div
              className="
      relative
      card rounded-xl
      flex flex-col justify-end items-center
      min-h-[260px]
      pt-0 pr-2 pl-2 pb-0
    "
            >
              <PotAnimation />
            </div>

            {/* DONJI TEKST BLOK */}
            <div className="stack-xs">
              <p className="type-label">Current hobby</p>
            <p className="type-body-sm-strong leading-none">
                Cultivating biquinho peppers.
              </p>
            </div>
          </section>

          {/* SONG CARD */}
                    <div className="card relative overflow-hidden flex flex-col">
            {/* Background image + overlay */}
            <div className="pointer-events-none absolute inset-0">
              <Image
                src="/music/oboe-cover.png" 
                alt="Oboe by Camel Power Club"
                fill
                className="object-cover"
                sizes="480px"
              />
             <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(17,16,16,0)_-1.36%,rgba(17,16,16,0.92)_45.22%,#111010_79.37%)]" />
            </div>

            {/* Foreground sadržaj – identičan layoutu, samo klikabilan */}
            <a
              href="https://open.spotify.com/track/3IRON3rRIf2WJwejIbaehd?si=7ccc6d205ee04257"
              target="_blank"
              rel="noreferrer noopener"
              className="relative flex items-center  gap-5"
            >
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full bg-color-bg-surface border border-color-border-secondary type-body-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="m7.752 5.439 10.508 6.13a.5.5 0 0 1 0 .863l-10.508 6.13A.5.5 0 0 1 7 18.13V5.87a.5.5 0 0 1 .752-.431"
                  />
                </svg>
              </button>
              <div>
                <p className="type-body leading-relaxed text-color-text-primary">Oboe</p>
                <p className="type-body-sm">By Camel Power Club</p>
              </div>
              
            </a>
          </div>
        </section>

        {/* RIGHT COL 5/12: Illustrations → Experiments */}
        <section className="flex flex-col col-span-12 md:col-span-5 stack-gutter">
        

{/* ILLUSTRATIONS */}
<div className="card flex flex-col gap-5">
  <HomeIllustrationsPreview />
  <CTAWithIcon label="See Illustrations" href="/illustrations" />
</div>

         
          {/* EXPERIMENTS: design system preview card + CTA */}
<div className="flex-1">
  <div className="card flex h-full flex-col stack-gutter">
    {/* Clickable preview card */}
    <a
      href="/design-system"
      target="_blank"
      rel="noreferrer noopener"
      className="relative flex-1 overflow-hidden rounded-surface border border-color-border-secondary bg-color-bg-muted"
    >
      {/* Background image + gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/design-system.png"
          alt="Design system foundations preview"
          fill
          className="object-cover object-left-top"
          sizes="(min-width: 1024px) 900px, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,34,27,0)_0%,rgba(35,34,27,0.81)_61.07%,#23221B_100%)]" />
      </div>

      {/* Text overlay */}
      <div className="relative flex h-full flex-col justify-end gap-1 p-3">
        <p className="type-body-strong text-color-text-primary">
          /design-system
        </p>
        <p className="type-body-sm text-color-text-secondary">
          Drafting structure for future builds.
        </p>
      </div>
    </a>

    {/* CTA row below card */}
    <CTAWithIcon label="See Experiments" href="/#experiments" />
  </div>
</div>
        </section>

        {/* ---------- TESTIMONIALS (full width) ---------- */}
        <TestimonialsSection testimonials={TESTIMONIALS} />
      </div>
    </main>

    <ExperienceModal
      isOpen={isExperienceModalOpen}
      onClose={closeExperienceModal}
    />
    </>
  );
}
