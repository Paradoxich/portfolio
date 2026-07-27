// lib/writing.ts
// Posts for the homepage Writing section.
// TODO: replace the profile URL with each post's real Substack URL when Ana
// shares them; titles and dates come from the design and are the working set.

export type WritingPost = {
  title: string;
  date: string;
  url: string;
};

export const writingPosts: WritingPost[] = [
  {
    title: "Finding Santolina's visual language",
    date: "Jul 22, 2026",
    url: "https://paradoxich.substack.com",
  },
  {
    title: "The database doesn't know what a garden looks like",
    date: "Jul 22, 2026",
    url: "https://paradoxich.substack.com",
  },
  {
    title: "The plant database that fought back",
    date: "Jul 22, 2026",
    url: "https://paradoxich.substack.com",
  },
];
