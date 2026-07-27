import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

// Minimal top bar for standalone pages: a single "Back to home" link.
export function BackBar() {
  return (
    <div className="w-full px-xl pt-xl md:px-3xl">
      <Link
        href="/"
        className="inline-flex items-center gap-1 type-body-sm tracking-tight text-color-text-secondary transition-colors hover:text-color-text-primary"
      >
        <ArrowLeft size={20} />
        Back to home
      </Link>
    </div>
  );
}
