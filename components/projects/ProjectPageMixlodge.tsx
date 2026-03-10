"use client";

import * as React from "react";
import { CaseStudyLayout, CaseStudySection } from "./CaseStudyLayout";
import {
  mixlodgeMeta,
  mixlodgeContext,
  mixlodgeDiscovery,
  mixlodgeMvp,
  mixlodgeClarity,
  mixlodgeInboxImage,
  mixlodgeDesignSystem,
  mixlodgeDesignImage,
  mixlodgeOutcome,
} from "./content/mixlodge.content";

type ProjectPageProps = { heroSlot?: React.ReactNode };

export function ProjectPageMixlodge({ heroSlot }: ProjectPageProps) {
  return (
    <CaseStudyLayout {...mixlodgeMeta} heroSlot={heroSlot}>
      <CaseStudySection data={mixlodgeContext} />
      <CaseStudySection data={mixlodgeDiscovery} />
      <CaseStudySection data={mixlodgeMvp} />
      <CaseStudySection data={mixlodgeClarity} />
      <CaseStudySection data={mixlodgeInboxImage} />
      <CaseStudySection data={mixlodgeDesignSystem} />
      <CaseStudySection data={mixlodgeDesignImage} />
      <CaseStudySection data={mixlodgeOutcome} />
    </CaseStudyLayout>
  );
}
