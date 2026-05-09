"use client";

import { motion } from "framer-motion";
import { AmbientOrbs } from "./ambient-orbs";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] px-6 py-40 sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-zinc-950" />
      <AmbientOrbs />
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(34,211,238,0.12), transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(167,139,250,0.12), transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(34,211,238,0.12), transparent 50%)",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.4em] text-zinc-500"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          MindForm
        </motion.p>
        <motion.h2
          className="mt-8 font-[family-name:var(--font-syne)] text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-zinc-50"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Memory is more than context.{" "}
          <span className="bg-gradient-to-r from-zinc-100 via-cyan-100 to-violet-200 bg-clip-text text-transparent">
            It is continuity.
          </span>
        </motion.h2>
        <motion.p
          className="mx-auto mt-8 max-w-xl text-lg text-zinc-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          The future of AI identity begins where drift ends—in architectures designed for selves
          that persist, reflect, and grow.
        </motion.p>
        <motion.div
          className="mt-14 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-zinc-200 backdrop-blur-md">
            Request access
          </span>
          <span className="rounded-full border border-transparent px-6 py-3 text-sm text-zinc-500">
            Concept experience · 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
