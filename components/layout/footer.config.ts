// Link data for the site footer. The Contact entry is not listed here
// because it triggers the hire drawer rather than navigating.

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const FOOTER_PORTFOLIO_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Illustrations", href: "/illustrations" },
  { label: "Experiments", href: "/experiments" },
  { label: "Resume", href: "/cv" },
];

export const FOOTER_SOCIAL_LINKS: FooterLink[] = [
  { label: "Linkedin", href: "https://linkedin.com/in/paradoxich/", external: true },
  { label: "Github", href: "https://github.com/Paradoxich", external: true },
  { label: "Substack", href: "https://paradoxich.substack.com", external: true },
];
