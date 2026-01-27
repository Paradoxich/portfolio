// components/projects/ProjectPageShuttle.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { BeforeAfterToggle } from "@/components/media/BeforeAfterToggle";

export function ProjectPageShuttle() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <article className="w-full stack-5xl">
      {/* 0. PAGE TITLE BLOK */}
      <section className="stack-lg">
        <div className="text-column stack-lg">
          <h1 className="type-h3">
            Shuttle: Dev console redesign{" "}
            <span className="text-color-text-secondary font-normal">
              with a system that supports real-world workloads.
            </span>
          </h1>

          <div className="flex items-center gap-4">
            <p className="type-body-sm">2025</p>

            <a
              href="https://console.shuttle.dev"
              target="_blank"
              rel="noreferrer"
              className="h-8 px-4 rounded-full flex items-center justify-center gap-2 type-body-sm transition-colors link-pill"
              style={{
                backgroundColor:
                  "var(--color-link-pill-bg, var(--color-bg-surface))",
                color: "var(--color-link-pill-text, var(--color-text-primary))",
              }}
            >
              shuttle.dev
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                style={{ flexShrink: 0 }}
              >
                <path
                  fill="currentColor"
                  d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="stack-md">
        <div
          className="text-column stack-md rounded-[var(--radius-md)]"
          style={{
            backgroundColor: "var(--color-tldr-bg, var(--color-bg-muted))",
            padding: "12px",
          }}
        >
          <h3 className="type-label text-color-text-primary">TL;DR</h3>
          <p className="type-body-sm leading-loose tracking-normal">
            Redesigned Shuttle’s console to make core workflows clearer and more
            consistent — replacing ad-hoc UI patterns with a cohesive, scalable
            system.
          </p>
        </div>
      </section>

      {/* 1. CONTEXT */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <p className="type-body">
            Shuttle is a deployment platform where your infra lives in code, but
            the console is where you actually see what’s running. Over time, the
            old console became a bit of a Frankenstein — features bolted on,
            states handled ad-hoc, and a UI that didn’t really match the
            maturity of the platform itself. Design work meant constantly
            asking: “Which of these 62 slightly different styles is the least
            wrong?”
          </p>
        </div>
      </section>

      {/* 2. BEFORE / AFTER – HERO VISUAL */}
      <section className="stack-md pt-4 pb-4">


<div
  className="
    relative
    w-full
    aspect-[16/10]
    overflow-hidden
    rounded-surface
    border border-color-border-secondary
    bg-color-bg-muted
  "
>
  <BeforeAfterToggle
    beforeSrc="/case-studies/shuttle-before.png"
    afterSrc="/case-studies/shuttle-after.png"
    altBefore="Shuttle console before redesign"
    altAfter="Shuttle console after redesign"
    defaultView="before"
  />
</div>

        <div className="text-column">
          <p className="type-body-sm">
            Before / after: The old console technically did the job, but
            didn&apos;t scale.
          </p>
        </div>
      </section>

      {/* 3. WHAT WASN'T WORKING */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">What wasn&apos;t working</h3>
          <p className="type-body">
            From user feedback, support threads and internal dogfooding, a few
            themes kept repeating:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>Important features (resources, domains, secrets) were hard to find.</li>
            <li>
              Workflows felt different from page to page — a sign of features
              being added without a stable design system underneath.
            </li>
            <li>
              For teams running many projects, the console didn&apos;t really
              scale. It was easy to get lost in deployments and states.
            </li>
            <li>
              Visually, the UI didn&apos;t match the maturity of the platform
              itself — it looked more “early beta” than “production ready”.
            </li>
          </ul>
          <p className="type-body">
            On the design side, there was another quiet villain: visual debt. No
            single catastrophic decision — just years of small, slightly
            different choices. Every time you touched a screen, you had to
            decide which button, which border, which gray, which radius you were
            going to pretend was “the real one”.
          </p>
        </div>
        <section className="stack-md pt-4 pb-4">
        <div className="text-column">
          <div
            className="
              relative
              w-full
              aspect-[16/9]
              overflow-hidden
              rounded-surface
              border border-color-border-secondary
              bg-color-bg-muted
            "
          >
            <Image
              src="/case-studies/shuttle-problems.png"
              alt="Visual debt"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      </section>

      {/* 4. PRODUCT MOVES */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Product moves</h3>
          <p className="type-body">
            The redesign wasn&apos;t just about fresh paint — it was about
            making key workflows obvious and predictable:
          </p>
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>
              <strong>Project overview</strong> became the home base:
              deployments, resources, domains and quick actions all live in one
              place.
            </li>
            <li>
              <strong>Deployments</strong> now highlight the important bits:
              commit message / ID, environment, status, plus full-screen logs
              when you need to go deep.
            </li>
            <li>
              <strong>Domains</strong> walk you through setup with copy-paste
              CNAMEs and clear validation states — no guessing whether things
              are “still propagating or just broken”.
            </li>
            <li>
              <strong>Secrets & resources</strong> got their own dedicated,
              consistent flows, instead of being tucked into whatever page had
              room.
            </li>
            <li>
              <strong>Compute size</strong> surfaces the right config as
              pre-filled snippets. You still change things in code — the console
              just points you to a good starting point.
            </li>
          </ul>
          <p className="type-body">
            The console stays opinionated: it shows you what&apos;s running and
            helps you do the right thing, without trying to be an IDE in the
            browser.
          </p>
        </div>
      </section>

      {/* 5. DESIGN SYSTEM WORK */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">Taming the UI (a.k.a. 62 borders later)</h3>
          <p className="type-body">
            The first step wasn&apos;t drawing screens — it was deciding what
            should even exist in the UI toolkit. We aligned on a small set of
            primitives and forced everything through that lens:
          </p>
        </div>

         {/* Tokens used in the console */}
      <section className="stack-md pt-4 pb-4">
        <div className="text-column">
          <div
            className="
              relative
              w-full
              aspect-[16/9]
              overflow-hidden
              rounded-surface
              border border-color-border-secondary
              bg-color-bg-muted
            "
          >
            <Image
              src="/case-studies/shuttle-tokens.png"
              alt="Tokens used in the console"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

        <div className="text-column stack-md">
          <ul className="list-disc pl-5 stack-xs type-body">
            <li>
              A tighter <strong>token set</strong> for colors, radii, spacing
              and typography. Enough to express hierarchy, not enough to
              improvise a new card style every Tuesday.
            </li>
            <li>
              A single <strong>card language</strong> for panels, tables and
              detail views, so new features “snap into” the existing layout
              instead of inventing their own.
            </li>
            <li>
              <strong>Navigation and page headers</strong> that follow the same
              pattern across the console — you always know where you are and
              what you can do from there.
            </li>
          </ul>

          <p className="type-body">
            The result: less time deciding which gray to use, more time actually
            designing workflows.
          </p>
        </div>
      </section>

      {/* 6. VIDEO WALKTHROUGH */}
      <section className="stack-md">
        <div
          className="
            w-full
            aspect-[16/9]
            overflow-hidden
            rounded-surface
            border border-color-border-secondary
            bg-color-bg-muted
          "
        >
          <video
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/projects/shuttle-console-poster.png"
          >
            <source
              src="https://www.shuttle.dev/images/blog/new-console/new-console-main.mp4"
              type="video/mp4"
            />
            Your browser doesn&apos;t support the video tag.
          </video>
        </div>

        <div className="text-column">
          <p className="type-body-xs">
            See it in motion: Perfect for getting a feel for the flows in under
            a minute.
          </p>
        </div>
      </section>

      {/* 7. OUTCOME */}
      <section className="stack-md">
        <div className="text-column stack-md">
          <h3 className="type-h4">What it unlocked</h3>
          <p className="type-body">
            For smaller teams, the console now feels calmer and more direct.
            You&apos;re never more than a click away from the things you
            actually care about: deployments, logs, domains and resources.
          </p>
          <p className="type-body">
            For heavier users, it&apos;s finally something that scales: clearer
            structure, predictable patterns, and a design language that can keep
            up with the platform instead of fighting it.
          </p>
          <p className="type-body">
            And for the team, it&apos;s a UI foundation that&apos;s a lot less
            “which border is this” and a lot more “cool, we can ship this”.
          </p>
        </div>
      </section>
    </article>
  );
}