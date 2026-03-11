import Link from "next/link";

export function MobileFooter() {
  return (
    <footer className="md:hidden mt-8 border-t border-color-border-inset px-4 py-4">
      <nav className="flex flex-wrap gap-x-4 gap-y-2 type-body-sm text-color-text-secondary">
        <Link href="/" className="hover:text-color-text-primary">
          Overview
        </Link>
        <Link href="/projects" className="hover:text-color-text-primary">
          Projects
        </Link>
        <Link href="/illustrations" className="hover:text-color-text-primary">
          Illustrations
        </Link>
        <Link href="/experiments" className="hover:text-color-text-primary">
          Experiments
        </Link>
        <Link href="/testimonials" className="hover:text-color-text-primary">
          Testimonials
        </Link>
      </nav>
    </footer>
  );
}

