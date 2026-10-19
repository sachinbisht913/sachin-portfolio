
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  GraduationCap,
  Code2,
  Rocket,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    number: "01",
    title: "My background",
    description:
      "I completed my MCA in 2026 and have been building my skills in software development through hands-on projects.",
    accent: "text-amber-700",
    iconBg: "bg-amber-100",
    cardBg: "bg-amber-50/70",
    border: "border-amber-200",
    line: "bg-amber-400",
  },
  {
    icon: Code2,
    number: "02",
    title: "What I work with",
    description:
      "I work with React, Next.js, Node.js, and databases to build web applications, from the user interface to the backend.",
    accent: "text-sky-700",
    iconBg: "bg-sky-100",
    cardBg: "bg-sky-50/70",
    border: "border-sky-200",
    line: "bg-sky-400",
  },
  {
    icon: Rocket,
    number: "03",
    title: "What I'm working towards",
    description:
      "I'm improving my problem-solving skills, practising DSA, and building projects that help me prepare for software development roles.",
    accent: "text-emerald-700",
    iconBg: "bg-emerald-100",
    cardBg: "bg-emerald-50/70",
    border: "border-emerald-200",
    line: "bg-emerald-400",
  },
];

const stats = [
  {
    value: "MCA",
    label: "Education",
    icon: GraduationCap,
    accent: "text-amber-700",
    iconBg: "bg-amber-100",
  },
  {
    value: "4+",
    label: "Major projects",
    icon: BriefcaseBusiness,
    accent: "text-sky-700",
    iconBg: "bg-sky-100",
  },
  {
    value: "10+",
    label: "Technologies explored",
    icon: BookOpen,
    accent: "text-violet-700",
    iconBg: "bg-violet-100",
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
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
      id="about"
      className="relative overflow-hidden border-t border-stone-200 bg-[#EAE9E5] px-5 py-20 text-[#252525] sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500"
          >
            <span className="h-px w-8 bg-stone-400" />
            A little about me
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end"
          >
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              The person behind
              <span className="text-emerald-700"> the code.</span>
            </h2>

            <p className="max-w-lg text-base leading-8 text-stone-600 md:justify-self-end">
              I enjoy understanding how things work, building useful
              applications, and learning by solving real development problems.
            </p>
          </motion.div>
        </motion.div>

        {/* Main content */}
        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Introduction card */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col"
          >
            <motion.div
              variants={fadeUp}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -3, transition: { duration: 0.2 } }
              }
              className="relative flex-1 overflow-hidden rounded-2xl border border-amber-200 bg-white p-6 shadow-sm shadow-stone-900/[0.025] sm:p-8"
            >
              {/* Decorative accent */}
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-28 w-28 rounded-bl-[80px] bg-amber-50"
              />
              <div
                aria-hidden="true"
                className="absolute right-7 top-7 h-10 w-10 rounded-xl bg-amber-100/80"
              />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  Hello, I'm Sachin
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                  MCA graduate.
                  <br />
                  Developer by practice.
                </h3>

                <div className="my-6 h-px bg-stone-200" />

                <p className="text-sm leading-7 text-stone-600 sm:text-base">
                  I've worked on projects involving full-stack development,
                  AI-powered interview preparation, job application tracking,
                  and machine learning. Building these projects has helped me
                  understand how frontend, backend, and databases work together.
                </p>

                <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
                  I'm currently focusing on improving my coding fundamentals,
                  preparing for interviews, and becoming a better software
                  developer.
                </p>

                <motion.a
                  href="#projects"
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  whileTap={
                    shouldReduceMotion ? undefined : { scale: 0.98 }
                  }
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-800"
                >
                  Take a look at my projects
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              variants={fadeUp}
              className="mt-4 grid grid-cols-3 divide-x divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white py-5"
            >
              {stats.map((stat) => {
                const StatIcon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center px-1.5 text-center sm:px-3"
                  >
                    <div
                      className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${stat.iconBg} ${stat.accent}`}
                    >
                      <StatIcon size={17} strokeWidth={1.8} />
                    </div>

                    <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {stat.value}
                    </p>

                    <p className="mx-auto mt-1.5 max-w-24 text-[10px] leading-4 text-stone-500 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-4"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  variants={fadeUp}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -4, transition: { duration: 0.2 } }
                  }
                  className={`group relative overflow-hidden rounded-2xl border ${item.border} ${item.cardBg} p-6 shadow-sm shadow-stone-900/[0.02] transition-shadow duration-300 hover:shadow-md hover:shadow-stone-900/[0.05] sm:p-7`}
                >
                  {/* Subtle corner decoration */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full ${item.iconBg} opacity-50 transition-transform duration-500 group-hover:scale-125`}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg} ${item.accent} transition-transform duration-300 group-hover:scale-105`}
                      >
                        <Icon size={21} strokeWidth={1.7} />
                      </div>

                      <span
                        className={`font-mono text-xs ${item.accent} opacity-70`}
                      >
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">
                      {item.description}
                    </p>

                    {/* Animated category-colored line */}
                    <div className="mt-6 h-[2px] w-full overflow-hidden rounded-full bg-white/80">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.7,
                          delay: shouldReduceMotion ? 0 : 0.15,
                          ease: "easeOut",
                        }}
                        className={`h-full origin-left ${item.line}`}
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
