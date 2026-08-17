"use client";

import { motion } from "motion/react";
import {
  Code2,
  Database,
  BrainCircuit,
  Wrench,
  Server,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    subtitle: "Core programming",
    icon: Terminal,
    gradient: "from-orange-500/10 via-transparent to-yellow-500/5",
    accent: "bg-orange-400",
    skills: [
      {
        name: "Java",
        icon: "/icons/java.svg",
      },
      {
        name: "JavaScript",
        icon: "/icons/javascript.svg",
      },
      {
        name: "Python",
        icon: "/icons/python.svg",
      },
      {
        name: "SQL",
        icon: "/icons/sql.svg",
      },
    ],
  },

  {
    title: "Frontend",
    subtitle: "Interfaces & experiences",
    icon: Code2,
    gradient: "from-blue-500/10 via-transparent to-cyan-500/5",
    accent: "bg-blue-400",
    skills: [
      {
        name: "HTML",
        icon: "/icons/html.svg",
      },
      {
        name: "CSS",
        icon: "/icons/css.svg",
      },
      {
        name: "React",
        icon: "/icons/react.svg",
      },
      {
        name: "Next.js",
        icon: "/icons/nextjs.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/icons/tailwindcss.svg",
      },
    ],
  },

  {
    title: "Backend",
    subtitle: "Server-side development",
    icon: Server,
    gradient: "from-green-500/10 via-transparent to-emerald-500/5",
    accent: "bg-emerald-400",
    skills: [
      {
        name: "Node.js",
        icon: "/icons/nodejs.svg",
      },
      {
        name: "Express.js",
        icon: "/icons/express.svg",
      },
      {
        name: "Flask",
        icon: "/icons/flask.svg",
      },
    ],
  },

  {
    title: "Database",
    subtitle: "Data & storage",
    icon: Database,
    gradient: "from-cyan-500/10 via-transparent to-blue-500/5",
    accent: "bg-cyan-400",
    skills: [
      {
        name: "MongoDB",
        icon: "/icons/mongodb.svg",
      },
      {
        name: "MySQL",
        icon: "/icons/mysql.svg",
      },
    ],
  },

  {
    title: "AI / Machine Learning",
    subtitle: "Intelligent systems",
    icon: BrainCircuit,
    gradient: "from-violet-500/10 via-transparent to-fuchsia-500/5",
    accent: "bg-violet-400",
    skills: [
      {
        name: "Python",
        icon: "/icons/python.svg",
      },
      {
        name: "Pandas",
        icon: "/icons/pandas.svg",
      },
      {
        name: "NumPy",
        icon: "/icons/numpy.svg",
      },
      {
        name: "Scikit-learn",
        icon: "/icons/scikitlearn.svg",
      },
    ],
  },

  {
    title: "Tools",
    subtitle: "Development workflow",
    icon: Wrench,
    gradient: "from-pink-500/10 via-transparent to-purple-500/5",
    accent: "bg-pink-400",
    skills: [
      {
        name: "Git",
        icon: "/icons/git.svg",
      },
      {
        name: "GitHub",
        icon: "/icons/github.svg",
      },
      {
        name: "VS Code",
        icon: "/icons/vscode.svg",
      },
      {
        name: "Postman",
        icon: "/icons/postman.svg",
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600 blur-[160px]"
      />

      {/* Subtle grid */}

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />

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
              Skills
            </p>

            
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>
              <h2 className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                Technologies I{" "}   work with.
                {/* <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                
                </span> */}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
                A collection of technologies and tools I use to build
                modern web applications, backend systems, and
                AI-powered solutions.
              </p>
            </div>

            {/* Right label */}

            <div className="hidden items-center gap-3 lg:flex">
              <span className="h-px w-12 bg-white/10" />

              <span className="text-xs text-zinc-700">
                TECH STACK
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SKILLS GRID
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.08,
          }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            const isTools = group.title === "Tools";

            return (
              <motion.div
                key={group.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0B1120]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20 sm:p-7 ${
                  isTools ? "md:col-span-2" : ""
                }`}
              >

                {/* =================================================
                    CARD BACKGROUND GRADIENT
                ================================================== */}

                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* =================================================
                    CARD GLOW
                ================================================== */}

                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-violet-500/0 blur-[80px] transition-all duration-700 group-hover:bg-violet-500/15" />

                <div className="relative">

                  {/* =================================================
                      CATEGORY HEADER
                  ================================================== */}

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-400"
                      >
                        <Icon size={21} />
                      </motion.div>

                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {group.title}
                        </h3>

                        <p className="mt-1 text-xs text-zinc-600">
                          {group.subtitle}
                        </p>
                      </div>

                    </div>

                    {/* Arrow */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -5,
                      }}
                      whileHover={{
                        opacity: 1,
                        x: 0,
                      }}
                      className="text-zinc-600"
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>

                  </div>

                  {/* =================================================
                      TECHNOLOGIES
                  ================================================== */}

                  <div className="mt-8 flex flex-wrap gap-3">

                    {group.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                          y: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: false,
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: skillIndex * 0.06,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          scale: 1.06,
                          y: -5,
                        }}
                        className="group/skill flex cursor-default items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-3 py-3 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/[0.08]"
                      >

                        {/* Technology icon */}

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.04] p-1.5 transition-all duration-300 group-hover/skill:border-white/10 group-hover/skill:bg-white/[0.08]">
                          {skill.icon ? (
                            <img
                              src={skill.icon}
                              alt={`${skill.name} icon`}
                              className="h-7 w-7 object-contain transition-transform duration-300 group-hover/skill:scale-110"
                            />
                          ) : (
                            <span className="text-[10px] font-bold text-violet-400">
                              {skill.name
                                .slice(0, 2)
                                .toUpperCase()}
                            </span>
                          )}
                        </div>

                        {/* Technology name */}

                        <span className="whitespace-nowrap text-xs font-medium text-zinc-400 transition-colors duration-300 group-hover/skill:text-white">
                          {skill.name}
                        </span>

                      </motion.div>
                    ))}

                  </div>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================== */}

                  <div className="mt-8 h-px w-full overflow-hidden bg-white/5">

                    <motion.div
                      initial={{
                        width: "0%",
                      }}
                      whileInView={{
                        width: "30%",
                      }}
                      viewport={{
                        once: false,
                        amount: 0.2,
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-violet-500 to-blue-500"
                    />

                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

       

      </div>
    </section>
  );
}