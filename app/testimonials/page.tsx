import type { Metadata } from "next";
import { TestimonialsPageClient } from "./TestimonialsPageClient";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}
