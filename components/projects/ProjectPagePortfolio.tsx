"use client";

import * as React from "react";
import { CaseStudyLayout, CaseStudySection } from "./CaseStudyLayout";
import {
  portfolioMeta,
  portfolioContext,
  portfolioStarting,
  portfolioEarlyExperiments,
  portfolioRealWorkflow,
  portfolioAiInPractice,
  portfolioSystem,
  portfolioOutcome,
  portfolioBuiltWith,
} from "./content/portfolio.content";

export function ProjectPagePortfolio() {
  return (
    <CaseStudyLayout {...portfolioMeta}>
      <CaseStudySection data={portfolioContext} />
      <CaseStudySection data={portfolioStarting} />
      <CaseStudySection data={portfolioEarlyExperiments} />
      <CaseStudySection data={portfolioRealWorkflow} />
      <CaseStudySection data={portfolioAiInPractice} />
      <CaseStudySection data={portfolioSystem} />
      <CaseStudySection data={portfolioOutcome} />
      <CaseStudySection data={portfolioBuiltWith} />
    </CaseStudyLayout>
  );
}
