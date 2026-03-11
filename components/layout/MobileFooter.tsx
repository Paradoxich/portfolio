import Link from "next/link";

export function MobileFooter() {
  return (
    <footer className="md:hidden mt-8 border-t border-color-border-inset px-4 py-8 stack-md">
      <nav className="grid grid-cols-2 gap-y-4 gap-x-4 type-body-sm text-color-text-secondary">
        <Link href="/" className="hover:text-color-text-primary">
          Overview
        </Link>
        <Link href="/experiments" className="hover:text-color-text-primary">
          Experiments
        </Link>
        <Link href="/projects" className="hover:text-color-text-primary">
          Projects
        </Link>
        <Link href="/testimonials" className="hover:text-color-text-primary">
          Testimonials
        </Link>
        <Link href="/illustrations" className="hover:text-color-text-primary">
          Illustrations
        </Link>
        <Link
          href="/docs/CV-Beverin-2026.pdf"
          className="hover:text-color-text-primary"
        >
          View CV
        </Link>
      </nav>
      <p className="type-body-xs text-color-text-tertiary pt-8">
        © 2026 Ana Beverin
      </p>
    </footer>
  );
}

