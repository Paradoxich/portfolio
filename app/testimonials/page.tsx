import type { Metadata } from "next";
import { TestimonialsPageClient } from "./TestimonialsPageClient";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What founders and product managers say about working with Ana Beverin.",
};

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}
