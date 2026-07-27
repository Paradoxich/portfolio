// app/projects/page.tsx
import { redirect } from "next/navigation";
import { projectsConfig } from "@/components/projects/ProjectsConfig";

// The case-study sidebar is the project switcher now; /projects just lands
// on the first case study.
export default function ProjectsPage() {
  const first = projectsConfig.find((p) => p.Page);
  redirect(`/projects/${first ? (first.slug ?? first.key) : ""}`);
}
