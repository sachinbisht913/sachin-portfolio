
"use client";

import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Purple glow */}
      <motion.div
        className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-500/70 blur-[100px]"
        animate={{
          x: [0, 180, 60, 0],
          y: [0, 120, 250, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Electric blue glow */}
      <motion.div
        className="absolute right-0 top-10 h-[450px] w-[450px] rounded-full bg-blue-500/60 blur-[110px]"
        animate={{
          x: [0, -180, -80, 0],
          y: [0, 200, 100, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hot pink glow */}
      <motion.div
        className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-pink-500/60 blur-[100px]"
        animate={{
          x: [0, 160, -120, 0],
          y: [0, -180, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan glow */}
      <motion.div
        className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-cyan-400/60 blur-[100px]"
        animate={{
          x: [0, -140, 80, 0],
          y: [0, -100, 80, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
