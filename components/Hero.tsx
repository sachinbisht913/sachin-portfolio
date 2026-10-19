
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Code2,
  Sparkles,
} from "lucide-react";

const techStack = [
  { name: "Java", detail: "Programming", color: "bg-orange-50 text-orange-700" },
  { name: "React", detail: "Frontend", color: "bg-sky-50 text-sky-700" },
  { name: "Next.js", detail: "Web framework", color: "bg-stone-100 text-stone-800" },
  { name: "Node.js", detail: "Backend", color: "bg-emerald-50 text-emerald-700" },
  { name: "Python", detail: "Programming & ML", color: "bg-amber-50 text-amber-700" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative  overflow-hidden bg-[#faf9f6] px-5 text-[#252525] sm:px-8"
    >
      
{/* Animated purple circle */}
<motion.div
  className="pointer-events-none absolute hidden md:block left-10 bottom-0 z-10 h-72 w-72 rounded-full bg-emerald-200 blur sm:h-96 sm:w-96"
  animate={{
    x: [0, -70, 20, 0],
    y: [0, 60, 120, 0],
    scale: [1, 1.2, 0.9, 1],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>



{/* Animated mint-green circle */}
<motion.div
  className="pointer-events-none absolute -bottom-20 -left-10 z-10 h-72 w-72 rounded-full bg-emerald-200 blur hidden md:block sm:h-96 sm:w-96"
  animate={{
    x: [0, 80, 140, 0],
    y: [0, -60, -20, 0],
    scale: [1, 0.9, 1.15, 1],
  }}
  transition={{
    duration: 16,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>


      
      {/* Soft background details */}
      <div 
        aria-hidden="true"
        className="pointer-events-none  absolute -right-32 top-28 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl mt-8">
        {/* Main hero */}
        <div className="grid min-h-[calc(100vh-88px)] items-center gap-14 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:py-20">
          {/* Introduction */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
           

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[76px]"
            >
              Hi, I&apos;m Sachin.
              <br />
              <span className="text-stone-400">
                I build for the{" "}
              </span>
              <span className="relative inline-block text-emerald-700">
                web.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-emerald-200"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-8 text-stone-600 sm:text-lg"
            >
              I&apos;m a developer who enjoys building web applications,
              solving problems, and understanding how things work behind
              the scenes. I mainly work with React, Node.js, and modern
              web technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <motion.a
                href="#projects"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#252525] px-5 py-3.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-800"
              >
                View my projects
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white/70 px-5 py-3.5 text-sm font-medium transition-colors hover:border-emerald-300 hover:bg-emerald-50/60"
              >
                View resume
                <ArrowDownRight size={16} />
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex items-center gap-4"
            >
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-stone-400">
                Find me on
              </span>

              <span className="h-px w-7 bg-stone-300" />

              <a
                href="https://github.com/sachinbisht913"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg p-2 text-stone-500 transition-all hover:bg-white hover:text-stone-950"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="21"
                  height="21"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.74 2.13 3.6 1.63.1-.72.4-1.21.72-1.49-2.48-.28-5.09-1.24-5.09-5.5 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.61 5.22-5.1 5.5.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/sachin-bisht913"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg p-2 text-stone-500 transition-all hover:bg-white hover:text-[#0a66c2]"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="21"
                  height="21"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V9H3.54v11.45ZM22.22 0H1.78C.8 0 .02.78.02 1.74v20.52c0 .96.78 1.74 1.76 1.74h20.44c.98 0 1.76-.78 1.76-1.74V1.74C23.98.78 23.2 0 22.22 0Z" />
                </svg>
              </a>

              <a
                href="#contact"
                aria-label="Contact"
                className="rounded-lg p-2 text-stone-500 transition-all hover:bg-white hover:text-emerald-800"
              >
                <Mail size={21} />
              </a>
            </motion.div>
          </motion.div>

          {/* Technology panel */}
          <motion.aside
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-stone-200 bg-white/80 p-6 shadow-xl shadow-stone-900/[0.04] sm:p-8">
              {/* Panel header */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                    My toolkit
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight">
                    Technologies I use
                  </h2>
                </div>
                

              
              </div>

              {/* Decorative accent */}
              <div className="my-6 h-px bg-stone-200" />

              <div className="space-y-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{
                      opacity: 0,
                      x: shouldReduceMotion ? 0 : 12,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.4,
                      delay: shouldReduceMotion ? 0 : 0.35 + index * 0.09,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-stone-100 bg-[#faf9f6] p-3.5 transition-all duration-200 hover:border-emerald-200 hover:bg-emerald-50/50"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${tech.color}`}
                    >
                      {tech.name === "Java"
                        ? "Jv"
                        : tech.name === "React"
                          ? "Re"
                          : tech.name === "Next.js"
                            ? "Nx"
                            : tech.name === "Node.js"
                              ? "Nd"
                              : "Py"}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-stone-800">
                        {tech.name}
                      </p>
                      <p className="mt-0.5 text-xs text-stone-500">
                        {tech.detail}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-stone-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-700"
                    />
                  </motion.div>
                ))}
              </div>

            
            </div>

           
          </motion.aside>
        </div>

        {/* Bottom separator */}
        <div className="flex items-center gap-4 border-t border-stone-200 py-5">
          <span className="text-xs font-medium tracking-wide text-stone-400">
            DESIGN · DEVELOP · LEARN
          </span>
          <div className="h-px flex-1 bg-stone-200" />
          <a
            href="#about"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 transition-colors hover:text-emerald-800"
          >
            A little about me
            <ArrowDownRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
