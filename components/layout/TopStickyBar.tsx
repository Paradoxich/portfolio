"use client";

import { usePathname } from "next/navigation";
import { projectsConfig } from "@/components/projects/ProjectsConfig";
import { PAGE_TITLES } from "./nav.config";
import { ThemeSwitcherCompact } from "@/components/theme/ColorSchemeProvider";

function getPageTitle(pathname: string): string {
  if (pathname === "/") return "Overview";
  if (pathname in PAGE_TITLES) return PAGE_TITLES[pathname];
  const projectsMatch = pathname.match(/^\/projects\/([^/]+)/);
  if (projectsMatch) {
    const slug = projectsMatch[1];
    const project = projectsConfig.find((p) => (p.slug ?? p.key) === slug);
    return project?.label ?? "Project";
  }
  return "Overview";
}

export function TopStickyBar() {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  return (
    <header className="hidden md:flex sticky top-0 z-30 h-16 shrink-0 items-center px-5 bg-color-bg border-b border-color-border-inset">
      <div className="flex-1" />
      <span className="font-geist type-body-xs text-color-text-secondary absolute left-1/2 -translate-x-1/2">
        {title}
      </span>
      <div className="flex-1 flex justify-end">
        <ThemeSwitcherCompact />
      </div>
    </header>
  );
}
