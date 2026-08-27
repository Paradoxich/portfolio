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
    title: "I outsourced the boring parts",
    date: "Aug 17, 2026",
    url: "https://paradoxich.substack.com/p/i-outsourced-the-boring-parts",
  },
  {
    title: "The screen that had nothing left to do",
    date: "Aug 13, 2026",
    url: "https://paradoxich.substack.com/p/the-screen-that-had-nothing-left",
  },
  {
    title: "Finding Santolina's visual language",
    date: "Jul 22, 2026",
    url: "https://paradoxich.substack.com/p/finding-santolinas-visual-language",
  },
];
