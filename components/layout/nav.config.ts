import type { ComponentType } from "react";
import {
  FaceSmile,
  Projects,
  FountainPen,
  LabExperiment,
  Heart,
} from "@/components/icons";

export type NavItem = {
  href: string;
  label: string;
  Icon: ComponentType<{ size?: number }>;
};

export const NAV_SECTIONS: NavItem[][] = [
  [
    { href: "/", label: "Overview", Icon: FaceSmile },
    { href: "/projects", label: "Projects", Icon: Projects },
  ],
  [
    { href: "/illustrations", label: "Illustrations", Icon: FountainPen },
    { href: "/experiments", label: "Experiments", Icon: LabExperiment },
  ],
  [
    // { href: "/notes", label: "Notes", Icon: Notes }, // hidden until notes feature is ready
    { href: "/testimonials", label: "Testimonials", Icon: Heart },
  ],
];

export const PAGE_TITLES: Record<string, string> = {
  "/": "Overview",
  "/projects": "Projects",
  "/illustrations": "Illustrations",
  "/experiments": "Experiments",
  "/notes": "Notes",
  "/testimonials": "Testimonials",
  "/design-system": "Design system",
};
