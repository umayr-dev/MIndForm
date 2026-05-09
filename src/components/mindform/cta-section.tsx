import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

const contactNav = [
  { label: "Mission", href: "#mission" },
  { label: "Spotlight", href: "#spotlight" },
  { label: "Research", href: "#research" },
  { label: "Focus", href: "#focus" },
  { label: "StableMind", href: "#architecture" },
  { label: "Principles", href: "#future" },
] as const;

export function CtaSection() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#030308] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <nav
          className="flex flex-wrap gap-2 border-b border-white/10 pb-8"
          aria-label="On this page"
        >
          {contactNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-[12px] font-medium text-zinc-400 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
              Contact
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-editorial)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.12] tracking-[-0.02em] text-white">
              Write to us about continuity, memory systems, and long-horizon agents.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-zinc-500">
              We read thoughtful mail from researchers and teams building what comes after the chat
              window—especially when the question is how identity should be engineered.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 lg:col-span-5 lg:mt-0 lg:items-start lg:border-l lg:border-white/10 lg:pl-10">
            <a
              href="mailto:hello@mindform.ai"
              className="inline-flex h-12 w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-white px-6 text-[15px] font-semibold text-black transition hover:bg-zinc-200 sm:w-auto"
            >
              <Mail className="size-4" strokeWidth={2} aria-hidden />
              hello@mindform.ai
            </a>
            <Link
              href="#research"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-zinc-400 transition hover:text-white"
            >
              Browse the library
              <ArrowUpRight className="size-4" strokeWidth={2} />
            </Link>
            <p className="text-[12px] text-zinc-600">We typically reply within a few business days.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
