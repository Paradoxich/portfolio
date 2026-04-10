"use client";

import * as React from "react";
import Image from "next/image";
import { BeforeAfterToggle } from "@/components/media/BeforeAfterToggle";
import { CaseStudyLayout, CaseStudySection } from "./CaseStudyLayout";
import {
  optimorouteMeta,
  optimorouteContext,
  optimorouteProblem,
  optimorouteConstraints,
  optimorouteDecisions,
  optimorouteOutcome,
  optimorouteReflection,
  optimorouteBroaderImpact,
} from "./content/optimoroute.content";

export function ProjectPageOptimoroute() {
  const importSlides = React.useMemo(
    () =>
      Array.from({ length: 50 }, (_, index) => {
        const page = String(index + 1).padStart(2, "0");
        return `/case-studies/optimoroute/import-carusel/Import%20flow-${page}.png`;
      }),
    []
  );
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    
    <CaseStudyLayout {...optimorouteMeta}>
    <CaseStudySection data={optimorouteContext} />

      {/* Before / after toggle — interactive */}
      <section className="stack-md pt-base pb-base">
        <div
          className="relative w-full overflow-hidden rounded-surface border border-color-border-inset bg-color-bg-muted"
          style={{ aspectRatio: "16 / 8.5" }}
        >
          <BeforeAfterToggle
            beforeSrc="/case-studies/or-before.png"
            afterSrc="/case-studies/or-after.png"
            altBefore="UI before redesign"
            altAfter="UI after redesign"
            defaultView="after"
          />
        </div>
      </section>

      <CaseStudySection data={optimorouteProblem} />
      <CaseStudySection data={optimorouteConstraints} />

       {/* Import flow carousel — interactive */}
       <section className="stack-md pt-base pb-base">
        <div className="text-column">
          <div
            className="relative w-full overflow-hidden rounded-surface border border-color-border-inset bg-color-bg-muted"
            style={{ aspectRatio: "16 / 9" }}
          >
            <Image
              src={importSlides[currentSlide]}
              alt={`Import flow experiment slide ${currentSlide + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 720px"
              priority={currentSlide === 0}
            />
            <div className="absolute left-base right-base bottom-base flex items-center justify-center pointer-events-none">
              <div className="pointer-events-auto inline-flex items-center gap-sm p-sm rounded-pill bg-color-bg-surface/95 border border-color-border backdrop-blur-md shadow-lg">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentSlide((prev) =>
                      prev === 0 ? importSlides.length - 1 : prev - 1
                    )
                  }
                  className="w-2xl h-2xl rounded-pill flex items-center justify-center text-color-text-secondary hover:text-color-text-primary hover:bg-color-bg-muted transition-colors"
                  aria-label="Previous import flow slide"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <span className="px-sm type-body-sm text-color-text-secondary tabular-nums">
                  {currentSlide + 1}/{importSlides.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentSlide((prev) =>
                      prev === importSlides.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="w-2xl h-2xl rounded-pill flex items-center justify-center text-color-text-secondary hover:text-color-text-primary hover:bg-color-bg-muted transition-colors"
                  aria-label="Next import flow slide"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-column">
          <a
            href="https://docs.google.com/presentation/d/1z6unwFESScYCSGy42GDV-xXiiksfQT1zhqg9khmFi2U/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="type-body-sm text-color-text-secondary hover:text-color-text-primary hover:underline transition-colors"
          >
            Open Google Slides in new tab
          </a>
        </div>
      </section>
      <CaseStudySection data={optimorouteDecisions} />
      <CaseStudySection data={optimorouteOutcome} />
      <CaseStudySection data={optimorouteReflection} />
      <CaseStudySection data={optimorouteBroaderImpact} />
    </CaseStudyLayout>
  );
}
