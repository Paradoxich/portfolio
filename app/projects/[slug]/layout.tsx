import { BackBar } from "@/components/layout/BackBar";
import { CaseStudySidebar } from "@/components/projects/CaseStudySidebar";

// Case studies get a local rail instead of the global shell. The layout
// persists across slug navigation, so the sidebar stays mounted and only
// the active highlight moves. Keep it stateless (pathname-derived only).
// On mobile the rail is hidden and the sticky BackBar takes over.
export default function CaseStudyShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh w-full flex-col md:flex-row">
      {/* Sticky lives on this wrapper: BackBar's own sticky can't travel
          inside a bar-height parent. */}
      <div className="sticky top-0 z-40 md:hidden">
        <BackBar />
      </div>
      <CaseStudySidebar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
