import type { Metadata } from "next";
import { ExperimentsIndex } from "@/components/experiments/ExperimentsIndex";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "Interactive experiments and motion studies, including a WebGL dither lab built for Santolina's visual direction.",
};

export default function ExperimentsPage() {
  return <ExperimentsIndex />;
}
