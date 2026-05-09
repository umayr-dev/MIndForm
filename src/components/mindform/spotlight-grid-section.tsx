import Image from "next/image";
import Link from "next/link";
import { spotlightCards } from "@/data/spotlight-cards";

export function SpotlightGridSection() {
  return (
    <section id="spotlight" className="border-t border-white/10 bg-[#030308] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="max-w-4xl font-sans text-[clamp(1.35rem,3.2vw,2rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
          Long-lived agents need memory and identity engineering—not only larger models: what we
          store, how we revise it, and how a self stays legible across turns and weeks.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {spotlightCards.map((card) => (
            <Link key={card.title} href={card.href} className="group flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/[0.07] transition group-hover:ring-white/12">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <span className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                  MindForm
                </span>
              </div>
              <h3 className="mt-5 text-[1.05rem] font-semibold leading-snug tracking-[-0.015em] text-white transition group-hover:text-zinc-200">
                {card.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-zinc-500">{card.excerpt}</p>
              <span className="mt-4 text-[13px] font-medium text-zinc-500 transition group-hover:text-white">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
