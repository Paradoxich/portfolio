"use client";

import * as React from "react";
import { CaseStudyLayout, CaseStudySection } from "./CaseStudyLayout";
import {
  neptuneMeta,
  deckImages,
  neptuneChatVideoSrc,
  neptuneContext,
  neptuneAudience,
  neptuneWhenBranding,
  neptunePrototypeChanged,
  neptuneMakingEditable,
  neptuneOutcome,
  neptuneReflection,
} from "./content/neptune.content";

export function ProjectPageNeptune() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <CaseStudyLayout {...neptuneMeta}>
      <CaseStudySection data={neptuneContext} />
      {/* Brand deck carousel */}
      <section className="stack-md pt-base pb-base">
        <div className="relative w-full aspect-video overflow-hidden rounded-surface border border-color-border-inset bg-color-bg-muted">
          {deckImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Neptune brand deck slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute left-base right-base bottom-base flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto inline-flex items-center gap-sm p-sm rounded-pill bg-color-bg-surface/95 border border-color-border backdrop-blur-md shadow-lg">
              <button
                type="button"
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === 0 ? deckImages.length - 1 : prev - 1
                  )
                }
                className="w-2xl h-2xl rounded-pill flex items-center justify-center text-color-text-secondary hover:text-color-text-primary hover:bg-color-bg-muted transition-colors"
                aria-label="Previous slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <span className="px-sm type-body-sm text-color-text-secondary tabular-nums">
                {currentSlide + 1}/{deckImages.length}
              </span>
              <button
                type="button"
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === deckImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-2xl h-2xl rounded-pill flex items-center justify-center text-color-text-secondary hover:text-color-text-primary hover:bg-color-bg-muted transition-colors"
                aria-label="Next slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <CaseStudySection data={neptuneAudience} />

      

      <CaseStudySection data={neptuneWhenBranding} />

      

      <CaseStudySection data={neptunePrototypeChanged} />
      {/* Chat prototype video — playback rate controlled via ref */}
      <section className="stack-md pt-base pb-base">
        <div className="w-full overflow-hidden rounded-surface border border-color-border-inset bg-color-bg-muted" style={{ aspectRatio: "16/8" }}>
          <video
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={neptuneChatVideoSrc} type="video/mp4" />
            Your browser doesn&apos;t support the video tag.
          </video>
        </div>
      </section>
      <CaseStudySection data={neptuneMakingEditable} />
      <CaseStudySection data={neptuneOutcome} />
      <CaseStudySection data={neptuneReflection} />
    </CaseStudyLayout>
  );
}
