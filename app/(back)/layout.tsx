import { BackBar } from "@/components/layout/BackBar";

// Standalone pages: minimal chrome, just a back-to-home bar above the page.
export default function BackGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <BackBar />
      <main className="flex min-w-0 flex-1 flex-col">{children}</main>
    </div>
  );
}
