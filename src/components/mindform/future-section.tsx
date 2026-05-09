import Image from "next/image";
import { futureSectionImage } from "@/data/site-images";

const passages = [
  {
    title: "Long-horizon responsibility",
    body: "If moral posture can reset without trace, every session negotiates with a stranger. Continuity belongs in the safety conversation—not only in product polish.",
  },
  {
    title: "Honest change",
    body: "Updates that can be narrated, audited, and—when needed—rolled back, with a trail tied to reflection. The same bar we hold for human stories.",
  },
] as const;

export function FutureSection() {
  return (
    <section id="future" className="border-t border-white/10 bg-[#050508] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-10">
          <header className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600">Principles</p>
            <h2 className="mt-5 font-[family-name:var(--font-editorial)] text-[clamp(1.45rem,3vw,1.95rem)] font-medium leading-tight tracking-[-0.02em] text-white">
              Legible intelligence—not only capable intelligence.
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-zinc-600">
              Safety and product both depend on whether someone can recognize the same agent across
              weeks of real use. We build interfaces and evaluations around that continuity—not around
              novelty for its own sake.
            </p>
          </header>

          <div className="mt-12 space-y-12 lg:col-span-7 lg:mt-0 lg:border-l lg:border-white/10 lg:pl-12">
            {passages.map((p) => (
              <article key={p.title}>
                <h3 className="text-lg font-semibold tracking-tight text-white">{p.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.75] text-zinc-500">{p.body}</p>
              </article>
            ))}
          </div>
        </div>

        <figure className="mt-16 overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900 sm:mt-20">
          <div className="relative aspect-[21/9] min-h-[180px] w-full sm:min-h-[220px]">
            <Image
              src={futureSectionImage}
              alt=""
              fill
              unoptimized
              className="object-cover object-center"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-black/60" />
            <figcaption className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/75 px-5 py-4 sm:px-8 sm:py-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Field note
              </p>
              <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-zinc-400">
                Evaluation stacks should treat identity drift as a first-class signal—not a footnote
                after benchmark accuracy.
              </p>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
