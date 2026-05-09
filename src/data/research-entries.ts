import { researchCoverImages } from "@/data/site-images";

export type ResearchKind = "Essay" | "Technical note" | "Alignment note" | "Overview";

export type ResearchEntry = {
  title: string;
  kind: ResearchKind;
  date: string;
  coverImage: string;
};

export const researchEntries: ResearchEntry[] = [
  {
    kind: "Essay",
    date: "Jan 2026",
    title: "Why continuity is an ethical primitive for agents people live beside",
    coverImage: researchCoverImages[0],
  },
  {
    kind: "Technical note",
    date: "2025",
    title: "Layered recall under context compression: importance beyond recency",
    coverImage: researchCoverImages[1],
  },
  {
    kind: "Alignment note",
    date: "2025",
    title: "Belief updates vs. trait drift: two clocks in one agent",
    coverImage: researchCoverImages[2],
  },
  {
    kind: "Overview",
    date: "2024",
    title: "StableMind: reflection epochs, belief structure, and observable identity",
    coverImage: researchCoverImages[3],
  },
];
