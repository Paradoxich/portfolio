// Route group for standalone pages that get the minimal back-to-home bar.
// Pass-through for now; the BackBar mounts here when the global shell is
// removed.
export default function BackGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
