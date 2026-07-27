import { redirect } from "next/navigation";

// Testimonials are retired from the nav for now; quotes live on in
// lib/testimonials.ts for future use inside case studies.
export default function TestimonialsPage() {
  redirect("/");
}
