"use client";

import { motion } from "framer-motion";

export function AmbientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-[20%] top-[10%] h-[55vmin] w-[55vmin] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.22), transparent 62%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, 24, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] bottom-[5%] h-[60vmin] w-[60vmin] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(167, 139, 250, 0.18), transparent 65%)",
        }}
        animate={{ x: [0, -32, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[35%] top-[55%] h-[40vmin] w-[40vmin] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.08), transparent 70%)",
        }}
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
