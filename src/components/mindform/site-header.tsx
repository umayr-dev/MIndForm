"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "#problem", label: "Fracture" },
  { href: "#architecture", label: "StableMind" },
  { href: "#demo", label: "Core" },
  { href: "#future", label: "Horizon" },
];

export function SiteHeader() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6 sm:px-6"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-white/[0.08]",
          "bg-zinc-950/60 px-5 py-2.5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl"
        )}
      >
        <a href="#" className="font-[family-name:var(--font-syne)] text-sm font-semibold tracking-wide text-zinc-100">
          MindForm
        </a>
        <nav
          className="flex max-w-[45vw] items-center gap-4 overflow-x-auto sm:max-w-none sm:gap-6"
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 transition hover:text-zinc-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#demo"
          className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-cyan-200/90 transition hover:border-cyan-400/40 hover:bg-cyan-500/15"
        >
          Enter lab
        </a>
      </div>
    </motion.header>
  );
}
