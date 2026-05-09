export type SearchItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  group: string;
};

/** In-page destinations for the header search (no backend). */
export const searchIndex: SearchItem[] = [
  {
    id: "hero",
    title: "Home",
    description: "Hero identity memory agents continuity",
    href: "#",
    group: "Navigate",
  },
  {
    id: "mission",
    title: "Mission & manifesto",
    description: "Continuity self legible belief trait reflection trust",
    href: "#mission",
    group: "Company",
  },
  {
    id: "spotlight",
    title: "Spotlight",
    description: "StableMind memory identity continuity cards",
    href: "#spotlight",
    group: "Research",
  },
  {
    id: "research",
    title: "Research & notes",
    description: "Essays technical alignment stablemind papers",
    href: "#research",
    group: "Research",
  },
  {
    id: "focus",
    title: "Focus areas",
    description: "Recall drift governance identity hierarchy",
    href: "#focus",
    group: "Research",
  },
  {
    id: "architecture",
    title: "StableMind",
    description: "Architecture beliefs traits epochs memory",
    href: "#architecture",
    group: "Product",
  },
  {
    id: "future",
    title: "Principles",
    description: "Legibility safety responsibility honest change",
    href: "#future",
    group: "Company",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Email hello careers research partnership",
    href: "#contact",
    group: "Company",
  },
];
