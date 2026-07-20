import type { Metadata } from "next";
import { ProjectPageClient } from "./ProjectPageClient";

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

export default function ProjectPage() {
  return <ProjectPageClient />;
}
