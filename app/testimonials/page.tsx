"use client";

import { PageShell } from "@/components/layout/PageShell";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const TESTIMONIALS = [
  {
    name: "Nodar Daneliya",
    role: "CEO @ Shuttle",
    image: "/testimonials/testimonial-nodar.png",
    messages: [
      "I love working with Ana!",
      "She has an incredible ability to quickly grasp what you're looking for and translate it into thoughtful, practical options.",
      "She has a true gift for bringing ideas to life – even the wildest ones. Her attention to detail is outstanding, and she works efficiently while maintaining great flexibility in her approach.",
      "I also appreciate how she leverages her experience to refine designs for a better user experience. Ana isn't afraid to experiment, even when faced with ambiguous tasks – she's fantastic to work with.",
    ],
  },
  {
    name: "Kurt, Jaka & Daniel",
    role: "Founders @ MixLodge",
    image: "/testimonials/testimonial-mixlodge.png",
    messages: [
      "We are a small startup based in Switzerland and were looking for a designer for our website when we came across Ana.",
      "We can say confidently that our experience working with Ana was outstanding.",
      "Ana communicated her points very clearly and always brought new creative ideas to our meetings.",
      "Her attention to detail and punctuality was impressive and we are extremely happy with how things turned out.",
      "We would be very happy to work with her again in the future.",
    ],
  },
  {
    name: "Dino Pohilj",
    role: "Product Manager",
    image: "/testimonials/testimonial-dino.png",
    messages: [
      "Working with Ana across multiple projects has been an exceptional experience.",
      "She consistently shows outstanding abilities as a product designer.",
      "Ana stands out as the best product designer I've had the opportunity to work with.",
      "Her ability to thoroughly understand product and business requirements makes her incredibly easy to collaborate with on any project.",
    ],
  },
];

export default function TestimonialsPage() {
  return (
    <PageShell className="stack-xl">
      <div className="layout-grid">
        <TestimonialsSection testimonials={TESTIMONIALS} />
      </div>
    </PageShell>
  );
}
