import Image from "next/image";
import { focusRowImages } from "@/data/site-images";

const items = [
  {
    title: "Memory & recall",
    body: "What should surface next turn, what can compress, and what must never be silently dropped when the window shrinks.",
  },
  {
    title: "Identity & drift",
    body: "Fast beliefs and slow traits—so adaptation reads as growth, not a stranger replacing someone you trusted.",
  },
  {
    title: "Reflection & governance",
    body: "Epochs for consolidation: traces a person can read, challenge, or repair when behavior and self-model diverge.",
  },
] as const;

export function FocusSection() {
  return (
    <section id="focus" className="border-t border-white/10 bg-[#050508] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-md lg:sticky lg:top-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600">Focus</p>
            <h2 className="mt-4 font-[family-name:var(--font-editorial)] text-[clamp(1.85rem,4vw,2.4rem)] font-medium leading-[1.08] tracking-[-0.02em] text-white">
              Three threads we refuse to treat as footnotes.
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-zinc-600">
              Each line of work ships with interfaces humans can inspect—not only model capability curves.
            </p>
          </div>

          <div className="mt-14 max-w-3xl space-y-12 lg:mt-0">
            {items.map((item, i) => (
              <article
                key={item.title}
                className="border-t border-white/10 pt-12 first:border-t-0 first:pt-0 sm:pt-14 sm:first:pt-0"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
                  <div className="flex min-w-0 flex-1 gap-6 sm:gap-10">
                    <span className="font-[family-name:var(--font-editorial)] text-4xl font-medium leading-none text-white/[0.12] sm:text-5xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1 pt-1">
                      <h3 className="text-lg font-semibold tracking-tight text-white">{item.title}</h3>
                      <p className="mt-4 text-[14px] leading-relaxed text-zinc-500">{item.body}</p>
                    </div>
                  </div>
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900 lg:aspect-auto lg:h-[200px] lg:w-[280px] xl:w-[320px]">
                    <Image
                      src={focusRowImages[i]}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 320px"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
