"use client";

import { motion } from "framer-motion";

const traditional = [
  { title: "Personality drift", body: "Tone and values wander between sessions." },
  { title: "Memory instability", body: "Important detail vanishes when context rolls." },
  { title: "Context loss", body: "Each reset feels like meeting a stranger." },
  { title: "Inconsistent behavior", body: "Same intent, different execution paths." },
];

const mindform = [
  { title: "Anchored self-model", body: "Identity-critical traits persist across epochs." },
  { title: "Layered recall", body: "What matters survives compression and time." },
  { title: "Continuity field", body: "Behavior traces a coherent arc, not random noise." },
  { title: "Reflective adaptation", body: "Change is deliberate—logged, weighted, reversible." },
];

const cardEase = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.65, ease: cardEase },
  }),
};

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative border-t border-white/[0.06] px-6 py-32 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(167,139,250,0.06),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            The fracture
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            Intelligence without continuity is amnesia at scale.
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            Today&apos;s agents optimize the next token, not the next decade. MindForm treats
            identity as infrastructure—something that should breathe, consolidate, and mature.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-zinc-700" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Traditional AI
              </span>
            </div>
            <div className="space-y-4">
              {traditional.map((item, i) => (
                <motion.article
                  key={item.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  className="rounded-2xl border border-red-500/10 bg-gradient-to-br from-red-500/[0.04] to-transparent p-6 backdrop-blur-sm"
                >
                  <h3 className="text-sm font-medium text-red-200/90">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400/80">
                MindForm AI
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/25" />
            </div>
            <div className="space-y-4">
              {mindform.map((item, i) => (
                <motion.article
                  key={item.title}
                  custom={i + 4}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  className="rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-500/[0.06] via-transparent to-violet-500/[0.05] p-6 shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)] backdrop-blur-sm"
                >
                  <h3 className="text-sm font-medium text-cyan-100/90">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="relative w-full max-w-3xl rounded-3xl border border-white/[0.08] bg-zinc-950/50 p-8 backdrop-blur-xl">
            <p className="text-center font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
              behavioral signature over time
            </p>
            <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-end gap-4 sm:gap-8">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-zinc-500">chaotic variance</span>
                <motion.div
                  className="flex h-40 w-full max-w-[120px] items-end justify-center gap-1 rounded-t-lg bg-zinc-900/80 px-2 pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {[40, 72, 35, 88, 52, 95, 48, 78, 42, 90, 55, 82].map((h, idx) => (
                    <motion.span
                      key={idx}
                      className="w-1.5 rounded-t-sm bg-zinc-600"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.04, duration: 0.5, ease: "easeOut" }}
                    />
                  ))}
                </motion.div>
                <span className="font-mono text-[10px] text-zinc-600">traditional</span>
              </div>

              <div className="flex flex-col items-center justify-end pb-2">
                <motion.div
                  className="h-24 w-px bg-gradient-to-b from-cyan-400/50 to-violet-400/50"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="mt-2 rotate-90 font-mono text-[9px] uppercase tracking-widest text-zinc-600 whitespace-nowrap sm:rotate-0">
                  vs
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-zinc-500">coherent evolution</span>
                <motion.div
                  className="relative flex h-40 w-full max-w-[120px] items-end justify-center rounded-t-lg border border-cyan-500/20 bg-gradient-to-t from-cyan-500/5 to-transparent px-2 pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-x-2 bottom-2 top-8 rounded-md bg-gradient-to-t from-cyan-500/25 to-violet-500/10"
                    initial={{ scaleY: 0, originY: 1 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <svg className="relative z-10 h-full w-full text-cyan-300/80" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                      d="M0,85 Q20,80 35,65 T70,40 T100,25 L100,100 L0,100 Z"
                      fill="url(#fillMf)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                    <defs>
                      <linearGradient id="fillMf" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor="rgba(34,211,238,0.15)" />
                        <stop offset="100%" stopColor="rgba(167,139,250,0.12)" />
                      </linearGradient>
                    </defs>
                    <motion.polyline
                      points="0,85 20,78 35,65 50,55 65,48 80,38 100,25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: "easeInOut" }}
                    />
                  </svg>
                </motion.div>
                <span className="font-mono text-[10px] text-cyan-500/70">mindform</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
