import Image from "next/image";
import { missionStripImage } from "@/data/site-images";

export function MissionSection() {
  return (
    <section id="mission" className="border-t border-white/10 bg-[#030308] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
              Continuity manifesto
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-editorial)] text-[clamp(1.65rem,4vw,2.65rem)] font-medium leading-[1.1] tracking-[-0.025em] text-white">
              Continuity is the work of keeping a{" "}
              <span className="text-zinc-300">self legible</span>—to weights, memory, and the person
              who has to trust what comes back tomorrow.
            </h2>
          </div>
          <aside className="mt-10 border-l border-white/10 pl-6 lg:col-span-4 lg:col-start-9 lg:mt-3 lg:pl-8">
            <p className="text-[14px] leading-[1.75] text-zinc-500">
              MindForm connects what an agent stores as belief, what it treats as slow-moving trait,
              and how reflection rewrites both without orphaning the past. Not a tone preset: a
              substrate for relationships that lengthen.
            </p>
            <p className="mt-6 font-mono text-[11px] leading-relaxed text-zinc-600">
              A small research lab—human–AI trust that deepens over months, not reset every session.
            </p>
          </aside>
        </div>

        <figure className="mt-16 border-y border-white/10 py-12 sm:mt-20 sm:py-14">
          <blockquote className="mx-auto max-w-3xl font-[family-name:var(--font-editorial)] text-[1.2rem] font-normal leading-snug text-zinc-200 sm:text-[1.35rem]">
            Trust in an agent is not one correct reply—it is whether Tuesday still feels continuous
            with Thursday, when both days were noisy and incomplete.
          </blockquote>
          <figcaption className="mx-auto mt-6 max-w-3xl text-[11px] font-medium uppercase tracking-wider text-zinc-600">
            Working assumption · continuity &amp; identity lab
          </figcaption>
        </figure>

        <div className="relative mt-12 aspect-[21/9] overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900 sm:mt-16">
          <Image
            src={missionStripImage}
            alt=""
            fill
            unoptimized
            className="object-cover object-center"
            sizes="(max-width: 1200px) 100vw, 1152px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
        </div>
      </div>
    </section>
  );
}
