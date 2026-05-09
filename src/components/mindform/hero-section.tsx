"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { heroBackgroundImage } from "@/data/site-images";

const ease = [0.22, 1, 0.36, 1] as const;

const quickLinks = [
  { label: "StableMind", href: "#architecture" },
  { label: "Research & notes", href: "#research" },
  { label: "Memory · identity · drift", href: "#focus" },
  { label: "Principles & safety", href: "#future" },
] as const;

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-3.5rem)] max-h-[920px] overflow-hidden bg-black sm:min-h-[calc(100svh-4rem)]">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease }}
        >
          <Image
            src={heroBackgroundImage}
            alt=""
            fill
            priority
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100svh-3.5rem)] max-h-[920px] flex-col justify-end px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:px-12 lg:pb-20">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <motion.div
            className="max-w-[640px]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
              MindForm
            </p>
            <h1 className="mt-5 font-sans text-[clamp(2.15rem,6.5vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white">
              Identity and memory
              <br />
              <span className="text-white/90">for agents that stay beside you.</span>
            </h1>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/70">
              A small research lab building continuity—beliefs, traits, and reflection—so human–AI
              trust can deepen over months, not reset every session.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#research"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-6 text-[15px] font-semibold text-black transition hover:bg-zinc-200"
              >
                Research &amp; essays
                <ChevronRight className="size-4" strokeWidth={2.25} aria-hidden />
              </Link>
              <Link
                href="#mission"
                className="text-[14px] font-semibold text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white"
              >
                Continuity manifesto
              </Link>
            </div>
          </motion.div>

          <motion.nav
            className="flex flex-col gap-0 sm:min-w-[260px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            aria-label="Highlights"
          >
            {quickLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between gap-6 border-t border-white/15 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 first:border-t-0 first:pt-0 sm:py-5"
              >
                <span className="transition group-hover:text-white">{item.label}</span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-white/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                  strokeWidth={2}
                  aria-hidden
                />
              </a>
            ))}
          </motion.nav>
        </div>
      </div>
    </section>
  );
}
