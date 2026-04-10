// app/projects/page.tsx
import type { Metadata } from "next";

import { ProjectsIndex } from "@/components/projects/ProjectsIndex";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function ProjectsPage() {
  return <ProjectsIndex />;
}

