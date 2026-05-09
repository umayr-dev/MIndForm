"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AmbientOrbs } from "./ambient-orbs";
import { NeuralField } from "./neural-field";

function MemoryGraph() {
  const nodes = [
    { cx: 52, cy: 38, r: 5 },
    { cx: 78, cy: 62, r: 4 },
    { cx: 38, cy: 68, r: 3.5 },
    { cx: 64, cy: 28, r: 3 },
    { cx: 22, cy: 48, r: 2.8 },
    { cx: 88, cy: 40, r: 3.2 },
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full text-cyan-300/90"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="g-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(34,211,238,0.45)" />
          <stop offset="100%" stopColor="rgba(167,139,250,0.35)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
      >
        {[
          [52, 38, 78, 62],
          [52, 38, 38, 68],
          [38, 68, 78, 62],
          [22, 48, 38, 68],
          [88, 40, 78, 62],
          [52, 38, 64, 28],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#g-line)"
            strokeWidth={0.6}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.85 }}
            transition={{ duration: 1.8, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="rgba(224,250,255,0.9)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.35 + i * 0.06 }}
          />
        ))}
      </motion.g>
    </svg>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacityVisual = useTransform(scrollYProgress, [0, 0.6], [1, 0.15]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 pt-28 pb-24 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.12),transparent)]" />
      <AmbientOrbs />
      <div className="absolute inset-0 opacity-[0.35] mix-blend-screen">
        <NeuralField />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        <div>
          <motion.p
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Persistent intelligence
          </motion.p>
          <motion.h1
            className="font-[family-name:var(--font-syne)] text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[0.95] tracking-tight text-zinc-50"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            AI shouldn&apos;t forget{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-sky-200 to-violet-200 bg-clip-text text-transparent">
              who it is
            </span>
            .
          </motion.h1>
          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Large models drift in tone, values, and behavior as context shifts. MindForm anchors
            long-term identity through layered memory, belief systems, and reflection—so agents
            evolve without erasing themselves.
          </motion.p>
          <motion.div
            className="mt-12 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <a
              href="#architecture"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-8 text-sm font-medium text-zinc-100 backdrop-blur-md transition hover:border-cyan-400/30 hover:bg-white/[0.09]"
            >
              <span className="relative z-10">Explore StableMind</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-violet-500/0 opacity-0 transition group-hover:opacity-100" />
            </a>
            <a
              href="#demo"
              className="text-sm text-zinc-500 underline-offset-4 transition hover:text-zinc-300 hover:underline"
            >
              View simulated core
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ y: yVisual, opacity: opacityVisual }}
          className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-[1px] shadow-[0_0_80px_-20px_rgba(34,211,238,0.35)] backdrop-blur-xl">
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] bg-zinc-950/40 p-6 sm:p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  personality stream
                </span>
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
              </div>
              <div className="relative flex-1 rounded-2xl border border-white/[0.06] bg-black/30 p-4">
                <MemoryGraph />
                <motion.div
                  className="pointer-events-none absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
                  animate={{ opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
              <p className="mt-4 font-mono text-[10px] leading-relaxed text-zinc-500">
                live edges · belief-linked nodes · coherence field active
              </p>
            </div>
          </div>
          <motion.div
            className="absolute -right-6 -bottom-4 hidden h-28 w-48 rounded-2xl border border-violet-400/20 bg-violet-500/5 p-3 backdrop-blur-md sm:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
          >
            <p className="font-mono text-[9px] uppercase tracking-widest text-violet-300/80">
              reflection loop
            </p>
            <p className="mt-2 text-xs text-zinc-400">Epoch 09 · identity delta stable</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-600">scroll</span>
        <motion.span
          className="block h-8 w-px bg-gradient-to-b from-zinc-600 to-transparent"
          animate={{ scaleY: [1, 0.6, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
