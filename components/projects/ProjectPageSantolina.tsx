"use client";

import * as React from "react";
import { CaseStudyLayout, CaseStudySection } from "./CaseStudyLayout";
import {
  santolinaMeta,
  santolinaContext,
  santolinaContextImage,
  santolinaProblem,
  santolinaCraft,
  santolinaCraftImage,
  santolinaCraftSystem,
  santolinaDecisions,
  santolinaChanges,
  santolinaRoadmap,
  santolinaOutcome,
  santolinaReflection,
} from "./content/santolina.content";

export function ProjectPageSantolina() {
  return (
    <CaseStudyLayout {...santolinaMeta}>
      <CaseStudySection data={santolinaContext} />
      <CaseStudySection data={santolinaContextImage} />
      <CaseStudySection data={santolinaProblem} />
      <CaseStudySection data={santolinaCraft} />
      <CaseStudySection data={santolinaCraftImage} />
      <CaseStudySection data={santolinaCraftSystem} />
      <CaseStudySection data={santolinaDecisions} />
      <CaseStudySection data={santolinaChanges} />
      <CaseStudySection data={santolinaRoadmap} />
      <CaseStudySection data={santolinaOutcome} />
      <CaseStudySection data={santolinaReflection} />
    </CaseStudyLayout>
  );
}
