"use client";

import Link from "next/link";
import Image from "next/image";
import CTAWithIcon from "../components/CTAWithIcon";
import { PotAnimation } from "../components/home/PotAnimation";
import LifeGallery from "../components/home/LifeGallery";
import TestimonialsSection from "../components/home/TestimonialsSection";
import { HomeIllustrationsPreview } from "../components/illustrations/HomeIllustrationsPreview";

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
  return (
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
          <div className="card h-full flex flex-col gap-4">
            {/* Illustration placeholder FIRST */}
            <div className="rounded-surface border border-color-border bg-color-bg h-full w-full" />

            {/* Label */}
            <p className="type-label">About me</p>

            {/* Body text */}
            <p className="type-body max-w-3xl">
              I’m a product designer who enjoys the messy middle — turning half-formed ideas into things
              people actually like using. I spend most of my time designing for dev tools and early products, balancing structure with
              personality. I like clear systems, small details, and teams that
              vibe.
            </p>
          </div>
        </section>

        {/* RIGHT: PROJECTS + EXPERIENCE (5/12) */}
        <aside className="col-span-12 md:col-span-5">
          <div className="h-full flex flex-col gap-gutter">
            {/* PROJECTS */}
            <section className="card flex-1 flex flex-col gap-6">
              {/* GRID: 1 kolona na mobile, 3 na desktopu */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  {
                    title: "Neptune",
                    tag: "Brand/Web",
                    desc: "AI platform engineer handling infra end-to-end.",
                    href: "/projects/neptune",
                  },
                  {
                    title: "Shuttle",
                    tag: "Console redesign",
                    desc: "Created a system that supports clarity, ease, and scale.",
                    href: "/projects/shuttle",
                  },
                  {
                    title: "MixLodge",
                    tag: "Brand/MVP",
                    desc: "Platform simplifying studio booking and producer hiring.",
                    href: "/projects/mixlodge",
                  },
                ].map((p) => (
                  <Link
                    key={p.title}
                    href={p.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="card-cta flex flex-col justify-between  p-3 transition-colors hover:border-color-text-primary"
                  >
                    {/* TAG */}
                    <p className="type-body-xs mb-2">{p.tag}</p>

                    {/* TITLE + DESC */}
                    <div className="flex-1">
                      <p className="type-body-sm-strong mb-1">{p.title}</p>
                      <p className="type-body-sm">{p.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* SEE PROJECTS ROW */}
              <CTAWithIcon label="See Projects" href="/projects" />
            </section>

            {/* EXPERIENCE */}
            <section className="card flex-1 flex flex-col gap-10">
              {/* Lista + fade samo na listi */}
              <div className="relative">
                <div className="divide-y divide-color-border">
                  {[
                    { company: "Kofa Design", role: "Owner", period: "2023–" },
                    {
                      company: "Shuttle",
                      role: "Design Consultant",
                      period: "2022–",
                    },
                    {
                      company: "OptimoRoute",
                      role: "Design Lead",
                      period: "2020–2022",
                    },
                  ].map((job) => (
                    <div
                      key={job.company}
                      className="grid grid-cols-[1.4fr,1.4fr,1.4fr] items-baseline gap-4 py-3"
                    >
                      {/* Company */}
                      <span className="type-body-sm-strong">
                        {job.company}
                      </span>

                      {/* Role */}
                      <span className="type-body-sm">
                        {job.role}
                      </span>

                      {/* Period */}
                      <span className="type-body-xs text-right">
                        {job.period}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Fade samo ispod liste – ne dira CTA */}
                <div className="experience-fade" />
              </div>

              {/* CTA ostaje čist dolje */}
              <CTAWithIcon label="See Experience" href="/experience" />
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
             <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(16,15,12,0)_-1.36%,rgba(16,15,12,0.92)_45.22%,#100F0C_79.37%)]" />
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
  );
}
