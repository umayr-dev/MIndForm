import Image from "next/image";
import { architecturePanelImage } from "@/data/site-images";

const pillars = [
  {
    n: "01",
    title: "Fast-scale beliefs",
    text: "Commitments and context that should update often—still anchored to a durable self-model the agent can cite.",
  },
  {
    n: "02",
    title: "Slow-scale traits",
    text: "Stance and temperament on longer horizons, so short-term adaptation does not read as personality collapse to the user.",
  },
  {
    n: "03",
    title: "Reflection epochs",
    text: "Scheduled consolidation: compress what mattered, weaken noise, keep a legible trail for humans and for downstream evaluation.",
  },
  {
    n: "04",
    title: "Memory hierarchy",
    text: "Episodic detail above semantic summaries—what the system chose to remember, not only what fit in the last packed context.",
  },
] as const;

function ArchitectureVisual() {
  return (
    <div className="relative mt-10 aspect-[4/5] max-w-sm overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900 lg:max-w-none">
      <Image
        src={architecturePanelImage}
        alt=""
        fill
        unoptimized
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 40vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#070708] p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">StableMind stack</p>
        <p className="mt-2 text-[12px] leading-relaxed text-zinc-400">
          Belief graph · trait band · reflection job queue—interfaces we want implementers to
          inspect, not prompts to hide inside.
        </p>
      </div>
    </div>
  );
}

export function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="border-t border-white/10 bg-[#030308] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600">StableMind</p>
          <h2 className="mt-5 font-[family-name:var(--font-editorial)] text-[clamp(1.5rem,3vw,2.05rem)] font-medium leading-tight tracking-[-0.02em] text-white">
            Architecture for agent identity that teams can inspect and argue about.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-zinc-500">
            Layered memory and identity—not a single system prompt, not a pasted persona string. How
            belief updates, trait bands, and reflection jobs stay wired together under load.
          </p>

          <ArchitectureVisual />
        </div>

        <div className="mt-14 space-y-12 border-t border-white/10 pt-12 lg:col-span-7 lg:mt-0 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-12 lg:pt-2">
          {pillars.map((p) => (
            <div key={p.n}>
              <span className="font-mono text-[10px] text-zinc-600">{p.n}</span>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">{p.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-zinc-500">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
