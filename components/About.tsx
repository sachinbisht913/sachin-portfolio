"use client";

import { motion } from "motion/react";
import {
  Code2,
  GraduationCap,
  Rocket,
  ArrowUpRight,
  Sparkles,
  Terminal,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "MCA Graduate",
    description:
      "Master of Computer Applications with a strong foundation in computer science and software development.",
    accent: "violet",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building responsive and practical web applications using modern frontend and backend technologies.",
    accent: "blue",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description:
      "Interested in DSA, AI/ML, and creating useful solutions to real-world problems.",
    accent: "cyan",
  },
];

const stats = [
  {
    value: "MCA",
    label: "Graduate",
  },
  {
    value: "4+",
    label: "Major Projects",
  },
  {
    value: "10+",
    label: "Technologies",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.04, 0.09, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-52 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-violet-600 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          opacity: [0.02, 0.06, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-52 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-blue-600 blur-[160px]"
      />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-violet-500" />

            <p className="text-xs font-medium uppercase tracking-[0.35em] text-violet-400">
              About Me
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                More than just{" "}  code.
                {/* <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                 
                </span> */}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
                I enjoy turning ideas into useful digital experiences
                and continuously improving my skills along the way.
              </p>
            </div>

          
          </div>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
          >
            {/* Intro card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm sm:p-8">

              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-600/10 blur-[80px]" />

              <div className="relative">

                {/* Terminal label */}
                <div className="mb-7 flex items-center gap-3">
                

                  <div>
                    <p className="font-mono text-xs text-zinc-600">
                      About
                    </p>

                    <p className="text-xs text-zinc-700">
                      Developer profile
                    </p>
                  </div>
                </div>

                {/* Main introduction */}
                <p className="text-lg leading-8 text-zinc-300 sm:text-xl">
                  I'm{" "}
                  <span className="font-semibold text-white">
                    Sachin Bisht
                  </span>
                  , an MCA graduate and aspiring software developer
                  who enjoys building web applications and exploring
                  AI-powered technologies.
                </p>

                <div className="my-7 h-px w-full bg-white/5" />

                <p className="text-sm leading-7 text-zinc-500 sm:text-base">
                  I've worked on projects involving full-stack
                  development, machine learning, data structures,
                  and interactive web applications. I enjoy learning
                  new technologies and turning ideas into functional
                  products.
                </p>

                <p className="mt-5 text-sm leading-7 text-zinc-500 sm:text-base">
                  I'm currently focused on improving my problem-solving,
                  development, and interview skills while looking for
                  opportunities where I can grow as a software developer.
                </p>

                {/* Current focus */}
                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="mt-8 overflow-hidden rounded-2xl border border-violet-500/20 bg-violet-500/[0.05]"
                >
                  <div className="flex items-start gap-4 p-5">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                      <Rocket size={18} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-white">
                          Currently focused on
                        </p>

                    
                      </div>

                      <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm">
                        Full-stack development, DSA, AI applications,
                        and preparing for software development roles.
                      </p>
                    </div>
                  </div>

                  {/* Accent line */}
                  <motion.div
                    initial={{
                      width: "0%",
                    }}
                    whileInView={{
                      width: "100%",
                    }}
                    viewport={{
                      once: false,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    className="h-px bg-gradient-to-r from-violet-500/70 via-purple-500/40 to-transparent"
                  />
                </motion.div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="px-3 text-center"
                >
                  <p className="text-lg font-bold text-white sm:text-xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-600 sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Explore */}
            <motion.a
              href="#projects"
              whileHover={{
                x: 5,
              }}
              className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Explore my work

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex flex-col gap-4">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 55,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.13,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0B1120]/90 p-6 backdrop-blur-xl sm:p-7"
                >

                  {/* Hover gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.04] via-transparent to-blue-500/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Corner glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/0 blur-[70px] transition-all duration-500 group-hover:bg-violet-500/15" />

                  <div className="relative">

                    <div className="flex items-start justify-between gap-5">

                      {/* Icon */}
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-400"
                      >
                        <Icon size={22} />
                      </motion.div>

                    </div>

                    <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-500">
                      {item.description}
                    </p>

                    {/* Bottom line */}
                    <div className="mt-7 h-px w-full bg-white/5">
                      <motion.div
                        initial={{
                          width: "0%",
                        }}
                        whileInView={{
                          width: "28%",
                        }}
                        viewport={{
                          once: false,
                          amount: 0.25,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.2 + index * 0.1,
                        }}
                        className="h-full bg-gradient-to-r from-violet-500 to-blue-500"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}

           
          </div>
        </div>
      </div>
    </section>
  );
}