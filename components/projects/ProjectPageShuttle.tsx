"use client";

import * as React from "react";
import { BeforeAfterToggle } from "@/components/media/BeforeAfterToggle";
import { CaseStudyLayout, CaseStudySection } from "./CaseStudyLayout";
import {
  shuttleMeta,
  shuttleVideoSrc,
  shuttleBeforeAfter,
  shuttleContext,
  shuttleEarlyDays,
  shuttleNotWorking,
  shuttleProductMoves,
  shuttleTaming,
  shuttleOutcome,
  shuttleReflection,
} from "./content/shuttle.content";

type ProjectPageProps = { heroSlot?: React.ReactNode };

export function ProjectPageShuttle({ heroSlot }: ProjectPageProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <CaseStudyLayout {...shuttleMeta} heroSlot={heroSlot}>
      <CaseStudySection data={shuttleContext} />
      <CaseStudySection data={shuttleEarlyDays} />

      {/* Before / after toggle — interactive */}
      <section className="stack-md pt-base pb-base">
        <div className="relative w-full overflow-hidden rounded-surface border border-color-border-inset bg-color-bg-muted" style={{ aspectRatio: "16/10" }}>
          <BeforeAfterToggle
            beforeSrc={shuttleBeforeAfter.beforeSrc}
            afterSrc={shuttleBeforeAfter.afterSrc}
            altBefore="Shuttle console before redesign"
            altAfter="Shuttle console after redesign"
            defaultView="before"
          />
        </div>
        <div className="text-column">
          <p className="type-body-sm">{shuttleBeforeAfter.caption}</p>
        </div>
      </section>

      <CaseStudySection data={shuttleNotWorking} />
      <CaseStudySection data={shuttleProductMoves} />

      {/* Console walkthrough video — playback rate controlled via ref */}
      <section className="stack-md pt-base pb-base">
        <div className="w-full overflow-hidden rounded-surface border border-color-border-secondary bg-color-bg-muted" style={{ aspectRatio: "16/9" }}>
          <video
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={shuttleVideoSrc} type="video/mp4" />
            Your browser doesn&apos;t support the video tag.
          </video>
        </div>
        <div className="text-column">
          <p className="type-body-xs">
            See it in motion: Perfect for getting a feel for the flows in under a minute.
          </p>
        </div>
      </section>

      <CaseStudySection data={shuttleTaming} />
      <CaseStudySection data={shuttleOutcome} />
      <CaseStudySection data={shuttleReflection} />
    </CaseStudyLayout>
  );
}
