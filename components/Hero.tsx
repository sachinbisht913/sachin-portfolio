"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  GitBranch,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const techStack = ["Java", "React", "Next.js", "Node.js", "Python"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-24"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* Main purple glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[45%] top-[20%] -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600 blur-[160px]"
      />

      {/* Blue glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[5%] top-[15%] -z-10 h-72 w-72 rounded-full bg-blue-600 blur-[150px]"
      />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_75%)]" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

          {/* =====================================================
              LEFT — MAIN INTRO
          ====================================================== */}

          <div className="relative z-10">

          
            {/* Hello */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-violet-500" />

              <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
                Hello, I'm
              </p>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="text-6xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-7xl md:text-8xl"
            >
              Sachin
              <br />

              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Bisht.
              </span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <span className="text-xl font-semibold text-zinc-200 sm:text-2xl">
                MCA Graduate
              </span>

              <span className="text-violet-500">×</span>

              <span className="text-xl font-semibold text-zinc-400 sm:text-2xl">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-7 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg"
            >
              I build modern web applications and AI-powered solutions,
              combining clean interfaces, practical functionality, and
              thoughtful user experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              {/* Projects */}
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]"
              >
                Explore My Work

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>

              {/* Resume */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10"
              >
                View Resume
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.75,
              }}
              className="mt-10 flex items-center gap-3"
            >
              {/* GitHub */}
              <motion.a
                href="https://github.com/sachinbisht913"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{
                  y: -4,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-500 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
              >
                <GitBranch size={19} />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/sachin-bisht913"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{
                  y: -4,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-500 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V9H3.54v11.45ZM22.22 0H1.78C.8 0 .02.78.02 1.74v20.52c0 .96.78 1.74 1.76 1.74h20.44c.98 0 1.76-.78 1.76-1.74V1.74C23.98.78 23.2 0 22.22 0Z" />
                </svg>
              </motion.a>

              {/* Email */}
              <motion.a
                href="#contact"
                aria-label="Email"
                whileHover={{
                  y: -4,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-500 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
              >
                <Mail size={19} />
              </motion.a>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT — DEVELOPER CARD
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="relative hidden lg:block"
          >
            {/* Outer glow */}
            <div className="absolute -inset-10 -z-10 rounded-full bg-violet-600/10 blur-[100px]" />

            {/* Floating card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/40 backdrop-blur-xl"
            >
              {/* Card gradient */}
              <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-600/10 blur-[90px]" />

              {/* Top bar */}
              <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                    <Code2 size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Developer
                    </p>

                    <p className="text-xs text-zinc-600">
                      Software & AI
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="text-[11px] text-emerald-400">
                    Open to work
                  </span>
                </div>
              </div>

              {/* Code window */}
              <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                {/* Window header */}
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                  <span className="ml-3 text-[10px] text-zinc-600">
                    portfolio.tsx
                  </span>
                </div>

                {/* Code */}
                <div className="p-5 font-mono text-xs leading-7">
                  <p>
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-blue-300">developer</span>{" "}
                    = {"{"}
                  </p>

                  <p className="pl-5">
                    <span className="text-zinc-500">name:</span>{" "}
                    <span className="text-emerald-300">
                      "Sachin Bisht"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-zinc-500">role:</span>{" "}
                    <span className="text-emerald-300">
                      "Full Stack Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-zinc-500">focus:</span>{" "}
                    <span className="text-emerald-300">
                      "AI + Web"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-zinc-500">location:</span>{" "}
                    <span className="text-emerald-300">
                      "India"
                    </span>
                  </p>

                  <p>{"}"}</p>

                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                    className="ml-1 inline-block h-4 w-1 bg-violet-400 align-middle"
                  />
                </div>
              </div>

              {/* Tech stack */}
              <div className="relative mt-6">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
                    Tech Stack
                  </p>

                  
                </div>

                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: 0.9 + index * 0.1,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-zinc-400 transition-colors hover:border-violet-500/30 hover:text-violet-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="relative mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-zinc-600">
                <MapPin size={13} className="text-violet-400" />
                Based in India
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-300"
        aria-label="Scroll to about section"
      >
        <span className="text-[9px] uppercase tracking-[0.35em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}