import { CaseStudySidebar } from "@/components/projects/CaseStudySidebar";

// Case studies get a local rail instead of the global shell. The layout
// persists across slug navigation, so the sidebar stays mounted and only
// the active highlight moves. Keep it stateless (pathname-derived only).
export default function CaseStudyShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh w-full">
      <CaseStudySidebar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
