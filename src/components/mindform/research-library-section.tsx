import Image from "next/image";
import { researchEntries } from "@/data/research-entries";

export function ResearchLibrarySection() {
  return (
    <section id="research" className="border-t border-white/10 bg-[#030308] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-[1.65rem]">
              Research &amp; notes
            </h2>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-zinc-500">
              Longer essays and technical notes on StableMind, memory hierarchy, and continuity risk:
              written for people who ship agents and care how trust scales in time.
            </p>
          </div>
          <p className="shrink-0 font-mono text-[11px] text-zinc-600">Index · 4 entries</p>
        </div>

        <ul className="divide-y divide-white/10">
          {researchEntries.map((entry) => (
            <li key={entry.title}>
              <a href="#" className="group flex flex-col gap-5 py-8 first:pt-0 sm:flex-row sm:items-stretch sm:gap-8 sm:py-10">
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900 sm:aspect-auto sm:h-[120px] sm:w-[180px]">
                  <Image
                    src={entry.coverImage}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="180px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] text-zinc-500">
                    <span className="text-zinc-400">{entry.kind}</span>
                    <span className="mx-2 text-zinc-700">·</span>
                    {entry.date}
                  </p>
                  <h3 className="mt-3 text-[1.15rem] font-semibold leading-snug tracking-[-0.02em] text-white transition group-hover:text-zinc-200 sm:text-[1.22rem]">
                    {entry.title}
                  </h3>
                  <span className="mt-4 inline-block text-[13px] font-medium text-zinc-600 transition group-hover:text-zinc-400">
                    Read →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
