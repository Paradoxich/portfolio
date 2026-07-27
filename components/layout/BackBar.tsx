import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

// Minimal top bar for standalone pages: a single "Back to home" link.
// On mobile it sticks to the top as a compact header with a hairline
// divider; on desktop it sits in the flow with no chrome.
export function BackBar() {
  return (
    <div className="sticky top-0 z-40 w-full border-b border-color-border-inset bg-color-bg px-xl py-md md:static md:border-b-0 md:bg-transparent md:px-3xl md:pb-0 md:pt-xl print:hidden">
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
