// lib/writing.ts
// Posts for the homepage Writing section, newest first. Dates match each
// post's Substack publish date.

export type WritingPost = {
  title: string;
  date: string;
  url: string;
};

export const writingPosts: WritingPost[] = [
  {
    title: "Finding Santolina's visual language",
    date: "Jul 22, 2026",
    url: "https://paradoxich.substack.com/p/finding-santolinas-visual-language",
  },
  {
    title: "The database doesn't know what a garden looks like",
    date: "Jul 13, 2026",
    url: "https://paradoxich.substack.com/p/the-database-doesnt-know-what-a-garden",
  },
  {
    title: "The plant database that fought back",
    date: "Jul 10, 2026",
    url: "https://paradoxich.substack.com/p/the-plant-database-that-fought-back",
  },
];
