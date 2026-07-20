"use client";

import * as React from "react";
import { CaseStudyLayout, CaseStudySection } from "./CaseStudyLayout";
import {
  mixlodgeMeta,
  mixlodgeContext,
  mixlodgeDiscovery,
  mixlodgeDiscoveryImage,
  mixlodgeMvp,
  mixlodgeClarity,
  mixlodgeInboxImage,
  mixlodgeDesignSystem,
  mixlodgeDesignImage,
  mixlodgeOutcome,
  mixlodgeHeroVideo,
} from "./content/mixlodge.content";

export function ProjectPageMixlodge() {
  return (
    <CaseStudyLayout {...mixlodgeMeta}>
      <CaseStudySection data={mixlodgeContext} />
      <CaseStudySection data={mixlodgeInboxImage} />
      <CaseStudySection data={mixlodgeDiscovery} />
      <CaseStudySection data={mixlodgeDiscoveryImage} />

      <CaseStudySection data={mixlodgeMvp} />
      <CaseStudySection data={mixlodgeClarity} />
      <CaseStudySection data={mixlodgeDesignImage} />
      <CaseStudySection data={mixlodgeDesignSystem} />
      <CaseStudySection data={mixlodgeHeroVideo} />
      <CaseStudySection data={mixlodgeOutcome} />
    </CaseStudyLayout>
  );
}
