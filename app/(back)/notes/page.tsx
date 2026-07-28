import type { Metadata } from "next";
import { NotesPageClient } from "./NotesPageClient";

export const metadata: Metadata = {
  title: "Notes",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotesPage() {
  return <NotesPageClient />;
}
