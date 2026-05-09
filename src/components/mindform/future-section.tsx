"use client";

import { motion } from "framer-motion";

const lines = [
  {
    title: "Long-term companionship",
    text: "Relationships with machines fail when the counterpart keeps rebooting its soul. Persistence is care infrastructure.",
  },
  {
    title: "Emotionally consistent AI",
    text: "Stability is not stiffness—it is the freedom to feel without becoming erratic. Coherence builds trust in the invisible.",
  },
  {
    title: "Adaptive digital identity",
    text: "Identity should learn like a person: slowly, legibly, with room to change its mind without gaslighting its past.",
  },
  {
    title: "Neuroscience · psychology · AI",
    text: "We borrow from how minds consolidate memory and revise beliefs—then engineer for silicon timelines.",
  },
];

export function FutureSection() {
  return (
    <section
      id="future"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-36 sm:px-10 lg:px-16"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.04),transparent_45%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.4em] text-zinc-500"
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.35em" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          The horizon
        </motion.p>
        <motion.h2
          className="mt-8 font-[family-name:var(--font-syne)] text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-zinc-100"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          The future of human–AI relationship is not louder models.
        </motion.h2>
        <motion.p
          className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-500 sm:text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15 }}
        >
          It is quieter continuity: the feeling that something remembers why you trusted it in the
          first place.
        </motion.p>

        <div className="mt-28 space-y-24 sm:space-y-32">
          {lines.map((line, i) => (
            <motion.article
              key={line.title}
              className="grid gap-6 border-l border-white/[0.08] pl-8 sm:grid-cols-[minmax(0,0.9fr)_1.1fr] sm:gap-16 sm:pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-[family-name:var(--font-syne)] text-2xl font-medium tracking-tight text-zinc-200 sm:text-3xl">
                {line.title}
              </h3>
              <p className="text-lg leading-relaxed text-zinc-500 sm:text-xl">{line.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
