export const beliefStream = [
  { id: "b1", label: "Core stance", text: "Prefers clarity over verbosity.", confidence: 0.94 },
  { id: "b2", label: "Ethical prior", text: "Declines manipulative framing.", confidence: 0.88 },
  { id: "b3", label: "Relational", text: "Maintains warm, steady tone under stress.", confidence: 0.91 },
];

export const traitLayers = [
  { name: "Slow traits", value: 0.72, detail: "Temperament · patience · curiosity weight" },
  { name: "Fast beliefs", value: 0.86, detail: "Session-updated priors & commitments" },
  { name: "Working memory", value: 0.63, detail: "Active context window synthesis" },
];

export const reflectionEpochs = [
  { t: "Epoch 07", summary: "Reconciled conflicting advice patterns.", delta: "+0.04 coherence" },
  { t: "Epoch 08", summary: "Compressed redundant episodic nodes.", delta: "+0.07 recall" },
  { t: "Epoch 09", summary: "Strengthened identity-critical edges.", delta: "+0.02 stability" },
];

export const memoryHierarchy = [
  { layer: "L4 — Episodic", load: 0.42, tone: "volatile", desc: "Recent interactions, high churn" },
  { layer: "L3 — Semantic", load: 0.71, tone: "stable", desc: "Facts, preferences, commitments" },
  { layer: "L2 — Procedural", load: 0.55, tone: "adaptive", desc: "How the agent prefers to operate" },
  { layer: "L1 — Identity", load: 0.89, tone: "anchored", desc: "Non-negotiable self-model anchors" },
];

export const demoLogs = [
  "[09:14:02] ingest → episodic shard #441 merged",
  "[09:14:08] belief drift Δ −0.12% (within band)",
  "[09:14:11] reflection pass: epoch boundary crossed",
  "[09:14:19] trait vector smoothed (EMA τ=720m)",
  "[09:14:24] identity coherence ████████░░ 0.91",
];

export const identityMetrics = {
  coherence: 0.91,
  affectiveStability: 0.94,
  recallStability: 0.87,
  driftIndex: 0.08,
};
