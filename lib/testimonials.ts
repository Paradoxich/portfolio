// lib/testimonials.ts
// Single source of truth for testimonials, shared by /testimonials and the homepage pull quote.

export type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dino Pohulj",
    role: "Product Manager",
    image: "/testimonials/testimonial-dino.png",
    quote:
      "Ana is the best product designer I've worked with. Her methodical approach and deep understanding of product requirements make her incredibly easy to collaborate with, and her designs are both elegant and practical for development teams to implement.",
  },
  {
    name: "Nodar Daneliya",
    role: "Founder/CEO @Shuttle",
    image: "/testimonials/testimonial-nodar.png",
    quote:
      "I love working with Ana! She has an incredible ability to quickly grasp ideas and translate them into thoughtful, practical solutions. Her attention to detail and willingness to experiment make her fantastic to collaborate with.",
  },
  {
    name: "Kurt, Jaka & Daniel",
    role: "Founders @MixLodge",
    image: "/testimonials/testimonial-mixlodge.png",
    quote:
      "Working with Ana was an outstanding experience. She communicates ideas clearly, consistently brings creative solutions, and was a great partner throughout the entire project.",
  },
];
