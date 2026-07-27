// app/projects/page.tsx
import type { Metadata } from "next";

import { ProjectsIndex } from "@/components/projects/ProjectsIndex";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from Santolina, Shuttle, Neptune, MixLodge, OptimoRoute, and this portfolio, covering process, decisions, and outcomes.",
};

export default function ProjectsPage() {
  return <ProjectsIndex />;
}

