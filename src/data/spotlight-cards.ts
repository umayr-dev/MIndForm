import { spotlightImages } from "@/data/site-images";

export type SpotlightCard = {
  title: string;
  excerpt: string;
  href: string;
  image: string;
};

export const spotlightCards: SpotlightCard[] = [
  {
    title: "StableMind: beliefs, traits, reflection epochs",
    excerpt:
      "How we separate fast-updating commitments from slow-moving stance, and schedule consolidation so memory stays auditable—not magical.",
    href: "#architecture",
    image: spotlightImages[0],
  },
  {
    title: "Context compression without silent self-erasure",
    excerpt:
      "When the window rolls, what must survive in summaries, what can decay, and how to avoid pretending recency equals importance.",
    href: "#research",
    image: spotlightImages[1],
  },
  {
    title: "Identity drift vs. accountable adaptation",
    excerpt:
      "Telling growth apart from personality collapse: logging what changed, why it changed, and what a human can contest or roll back.",
    href: "#focus",
    image: spotlightImages[2],
  },
  {
    title: "Continuity as part of agent safety posture",
    excerpt:
      "If moral posture resets without trace, every session negotiates with a stranger—why persistence belongs next to capability and misuse work.",
    href: "#future",
    image: spotlightImages[3],
  },
];
