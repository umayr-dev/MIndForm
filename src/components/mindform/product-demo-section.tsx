"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  beliefStream,
  demoLogs,
  identityMetrics,
  traitLayers,
} from "@/data/mindform-mock";

export function ProductDemoSection() {
  const [logIndex, setLogIndex] = useState(0);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setLogIndex((i) => (i + 1) % demoLogs.length);
      setPulse((p) => p + 1);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="demo"
      className="relative border-t border-white/[0.06] px-6 py-32 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_20%_60%,rgba(167,139,250,0.07),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            Immersive demo
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            A core that feels watched, weighted, and awake.
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            Mock interface—no backend. Watch memory, beliefs, and identity metrics breathe in
            sync, the way a research instrument should.
          </p>
        </motion.div>

        <div className="relative mt-16 min-h-[560px]">
          <motion.div
            className="absolute -left-4 top-8 z-20 w-[min(100%,320px)] rounded-2xl border border-cyan-400/20 bg-zinc-950/80 p-4 shadow-[0_20px_60px_-20px_rgba(34,211,238,0.35)] backdrop-blur-xl sm:left-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                belief tracking
              </span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[9px] text-emerald-300/90">
                live
              </span>
            </div>
            <ul className="mt-3 space-y-3">
              {beliefStream.map((b) => (
                <li
                  key={b.id}
                  className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-cyan-400/80">
                      {b.label}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">
                      {(b.confidence * 100).toFixed(0)}%
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-300">{b.text}</p>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-zinc-800">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                      key={`${b.id}-${pulse}`}
                      initial={{ width: "40%" }}
                      animate={{ width: `${b.confidence * 100}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="absolute right-0 top-0 z-10 w-[min(100%,280px)] rounded-2xl border border-white/[0.08] bg-zinc-950/70 p-4 backdrop-blur-xl"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              identity metrics
            </p>
            <div className="mt-4 space-y-4">
              <MetricRow label="Coherence" value={identityMetrics.coherence} pulse={pulse} />
              <MetricRow label="Affective stability" value={identityMetrics.affectiveStability} pulse={pulse} />
              <MetricRow label="Recall stability" value={identityMetrics.recallStability} pulse={pulse} />
              <MetricRow
                label="Drift guard"
                value={1 - identityMetrics.driftIndex}
                suffix="contained"
                pulse={pulse}
              />
            </div>
          </motion.div>

          <motion.div
            className="relative z-30 mx-auto mt-32 max-w-2xl rounded-2xl border border-white/[0.1] bg-black/50 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-2xl sm:mt-24"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-red-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-[10px] text-zinc-500">
                mindform_core — session sim
              </span>
            </div>
            <div className="grid gap-0 sm:grid-cols-[1fr_160px]">
              <div className="border-b border-white/[0.06] p-4 font-mono text-[11px] leading-relaxed text-zinc-400 sm:border-b-0 sm:border-r">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={logIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35 }}
                    className="whitespace-pre-wrap text-emerald-400/90"
                  >
                    {demoLogs[logIndex]}
                    <span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-emerald-400/80 align-middle" />
                  </motion.pre>
                </AnimatePresence>
                <div className="mt-4 space-y-1 text-[10px] text-zinc-600">
                  <p>{">"} stream: episodic_ingest OK</p>
                  <p>{">"} stream: belief_resolver idle</p>
                  <p>{">"} awaiting next reflection window…</p>
                </div>
              </div>
              <div className="p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  stable state
                </p>
                <div className="mt-3 flex h-28 items-end justify-between gap-2" key={pulse}>
                  {traitLayers.map((t, i) => (
                    <div
                      key={t.name}
                      className="flex h-full min-h-0 flex-1 flex-col items-stretch justify-end"
                    >
                      <motion.div
                        className="w-full rounded-t-md bg-gradient-to-t from-violet-500/40 to-cyan-400/50"
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.round(t.value * 100)}%` }}
                        transition={{ delay: i * 0.08, duration: 0.9, ease: "easeOut" }}
                      />
                      <span className="mt-1 text-center font-mono text-[8px] leading-tight text-zinc-500">
                        {t.name.split(" ")[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-4 z-20 hidden w-64 rounded-2xl border border-violet-400/15 bg-violet-950/40 p-4 backdrop-blur-xl lg:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -6, 0] }}
            transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-violet-300/80">
              reflection summary
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              Epoch 09 closed: redundant affect tags merged; prosocial prior reinforced.
            </p>
            <p className="mt-3 font-mono text-[10px] text-zinc-500">
              emotional consistency ↑ · narrative self intact
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MetricRow({
  label,
  value,
  suffix,
  pulse,
}: {
  label: string;
  value: number;
  suffix?: string;
  pulse: number;
}) {
  const display =
    suffix != null ? `${(value * 100).toFixed(0)}% ${suffix}` : `${(value * 100).toFixed(0)}%`;
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span>{label}</span>
        <motion.span
          key={`${label}-${pulse}`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          className="font-mono text-[10px] text-cyan-300/90"
        >
          {display}
        </motion.span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400/80 to-violet-500/70"
          initial={{ width: 0 }}
          whileInView={{ width: `${value * 100}%` }}
          key={`bar-${label}-${pulse}`}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        />
      </div>
    </div>
  );
}
