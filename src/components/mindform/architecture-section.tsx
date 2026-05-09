"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { memoryHierarchy, reflectionEpochs } from "@/data/mindform-mock";

const layers = [
  {
    id: "beliefs",
    title: "Fast-scale beliefs",
    blurb: "Session-level commitments that update quickly but stay tethered to identity.",
  },
  {
    id: "traits",
    title: "Slow-scale traits",
    blurb: "Temperament and stance that move like geology—rarely, but meaningfully.",
  },
  {
    id: "epochs",
    title: "Reflection epochs",
    blurb: "Scheduled consolidation: compress noise, reinforce what actually mattered.",
  },
  {
    id: "memory",
    title: "Memory hierarchy",
    blurb: "Episodic freshness above semantic gravity—recall that respects depth.",
  },
] as const;

type LayerId = (typeof layers)[number]["id"];

export function ArchitectureSection() {
  const [active, setActive] = useState<LayerId>("beliefs");
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="architecture"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-32 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_50%,rgba(34,211,238,0.05),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            StableMind architecture
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            Two clocks for one mind: fast reactions, slow becoming.
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            Not a spec sheet—a rhythm. MindForm separates what should flex from what should
            endure, then lets reflection stitch the story together.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="flex flex-col gap-3">
            {layers.map((layer, i) => (
              <motion.button
                key={layer.id}
                type="button"
                onClick={() => setActive(layer.id)}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className={`group rounded-2xl border px-5 py-4 text-left transition ${
                  active === layer.id
                    ? "border-cyan-400/30 bg-white/[0.06] shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]"
                    : "border-white/[0.06] bg-zinc-950/30 hover:border-white/10 hover:bg-white/[0.03]"
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400">
                  0{i + 1}
                </span>
                <span className="mt-1 block font-medium text-zinc-100">{layer.title}</span>
                <span className="mt-2 block text-sm text-zinc-500">{layer.blurb}</span>
              </motion.button>
            ))}
          </div>

          <div className="relative min-h-[420px] rounded-[2rem] border border-white/[0.08] bg-zinc-950/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl sm:p-8">
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-50"
              style={{
                background: `radial-gradient(600px circle at ${sx}% ${sy}%, rgba(34,211,238,0.12), transparent 40%)`,
              }}
            />

            {active === "beliefs" && (
              <BeliefsVisual />
            )}
            {active === "traits" && (
              <TraitsVisual />
            )}
            {active === "epochs" && (
              <EpochsVisual />
            )}
            {active === "memory" && (
              <MemoryVisual />
            )}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <motion.div
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              reflection loop
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs text-cyan-200/80"
                  animate={{
                    scale: [1, 1.08, 1],
                    borderColor: ["rgba(34,211,238,0.2)", "rgba(167,139,250,0.5)", "rgba(34,211,238,0.2)"],
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.4 }}
                >
                  {i + 1}
                </motion.span>
              ))}
              <motion.span
                className="ml-2 h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Ingest → reconcile → compress → re-weight identity edges. The loop is gentle,
              continuous, and observable.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              evolving personality graph
            </p>
            <div className="mt-6 flex h-36 items-end justify-between gap-1">
              {[0.35, 0.5, 0.42, 0.62, 0.55, 0.78, 0.72, 0.88, 0.84].map((v, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-500/30 to-cyan-400/40"
                  initial={{ height: "10%" }}
                  whileInView={{ height: `${v * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Identity isn&apos;t a snapshot—it&apos;s a trajectory you can audit, tune, and trust.
            </p>
          </motion.div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/[0.06] bg-zinc-950/30 p-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            memory layer load (mock)
          </p>
          <div className="mt-4 space-y-4">
            {memoryHierarchy.map((m, i) => (
              <motion.div
                key={m.layer}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm text-zinc-200">{m.layer}</p>
                  <p className="text-xs text-zinc-500">{m.desc}</p>
                </div>
                <div className="h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-zinc-800 sm:w-48">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400/70 to-violet-400/70"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.load * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.15 + i * 0.08 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BeliefsVisual() {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <h3 className="font-[family-name:var(--font-syne)] text-2xl text-zinc-100">Belief lattice</h3>
      <p className="mt-2 max-w-md text-sm text-zinc-500">
        Rapid updates orbit a denser core—identity pulls outliers back before they crystallize
        into drift.
      </p>
      <div className="relative mt-8 flex flex-1 items-center justify-center">
        <motion.div
          className="absolute h-48 w-48 rounded-full border border-cyan-400/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute h-32 w-32 rounded-full border border-violet-400/25"
          animate={{ rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute flex h-48 w-48 items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="absolute h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_12px_rgba(34,211,238,0.55)]"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-58px)`,
              }}
            />
          ))}
        </motion.div>
        <div className="relative z-10 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/20 blur-[2px]" />
      </div>
    </div>
  );
}

function TraitsVisual() {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <h3 className="font-[family-name:var(--font-syne)] text-2xl text-zinc-100">Trait geology</h3>
      <p className="mt-2 max-w-md text-sm text-zinc-500">
        Slow variables sink into bedrock. What you see on the surface is the latest equilibrium,
        not a dice roll.
      </p>
      <div className="mt-10 space-y-4">
        {["Patience", "Curiosity bias", "Ethical spine"].map((label, i) => (
          <div key={label} className="flex items-center gap-4">
            <span className="w-28 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              {label}
            </span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-violet-500/60 to-zinc-400/30"
                initial={{ width: "20%" }}
                animate={{ width: `${55 + i * 12}%` }}
                transition={{ duration: 4 + i, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EpochsVisual() {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <h3 className="font-[family-name:var(--font-syne)] text-2xl text-zinc-100">Epoch timeline</h3>
      <p className="mt-2 max-w-md text-sm text-zinc-500">
        Each epoch is a conscious merge: episodic noise down, semantic signal up.
      </p>
      <div className="relative mt-10 pl-6">
        <span className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-violet-400/30 to-transparent" />
        <div className="space-y-6">
          {reflectionEpochs.map((e, i) => (
            <motion.div
              key={e.t}
              className="relative pl-8"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-cyan-300/80 bg-zinc-950" />
              <p className="font-mono text-xs text-cyan-300/90">{e.t}</p>
              <p className="mt-1 text-sm text-zinc-300">{e.summary}</p>
              <p className="mt-1 font-mono text-[10px] text-emerald-400/80">{e.delta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MemoryVisual() {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <h3 className="font-[family-name:var(--font-syne)] text-2xl text-zinc-100">Layered recall</h3>
      <p className="mt-2 max-w-md text-sm text-zinc-500">
        Fresh shards float; identity sinks. Retrieval respects gravity, not just recency.
      </p>
      <div className="mt-10 flex flex-1 flex-col justify-end gap-3">
        {memoryHierarchy.map((m, i) => (
          <motion.div
            key={m.layer}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
          >
            <span className="text-xs text-zinc-300">{m.layer}</span>
            <span className="font-mono text-[10px] text-zinc-500">{m.tone}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
