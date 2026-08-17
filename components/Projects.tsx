"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import ProjectGallery from "./ProjectGallery";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "AI Interview Platform",
    category: "AI • Full Stack",
    description:
      "An AI-powered interview practice platform that helps users prepare for technical interviews through interactive interview sessions and automated feedback.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "AI",
      "MongoDB",
    ],
    image:
      "https://images.unsplash.com/photo-1786628211715-8a4ae8777c9d?w=1600&auto=format&fit=crop&q=85",
    github: "#",
    demo: "https://ai-interview-platform-8jme.onrender.com/login",
    featured: true,
  },

  {
    title: "Network Intrusion Detection System",
    category: "Machine Learning • Security",
    description:
      "A machine-learning based intrusion detection system that detects and classifies network attacks using the NSL-KDD dataset.",
    tech: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
    image:
      "https://images.unsplash.com/photo-1648134859177-66e35b61e106?w=1600&auto=format&fit=crop&q=85",
    github: "#",
    demo: "#",
  },

  {
    title: "Path Finder Visualizer",
    category: "Algorithms • Visualization",
    description:
      "An interactive visualization tool that demonstrates pathfinding algorithms such as BFS, DFS and Dijkstra on a dynamic grid.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Algorithms",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?w=1600&auto=format&fit=crop&q=85",
    github: "#",
    demo: "#",
  },

  {
    title: "Learning Management System",
    category: "Full Stack • Web",
    description:
      "A web-based learning management platform with separate dashboards for educators and students, including courses, homework and quizzes.",
    tech: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1658233427270-ba4d9d03b53c?w=1600&auto=format&fit=crop&q=85",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return <ProjectGallery />;
}

export function LegacyProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative h-[420vh] border-t border-slate-200 bg-white"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-4 py-20 sm:px-6">

        {/* Background glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.04, 0.09, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600 blur-[160px]"
        />

        <div className="mx-auto flex w-full max-w-6xl flex-col">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-7 shrink-0"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-500" />

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                Projects
              </p>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Things I've built.
            </h2>
          </motion.div>

          {/* Project Stack */}
          <div className="relative h-[58vh] min-h-[390px] max-h-[620px] w-full">
            {projects.map((project, index) => (
              <StackCard
                key={project.title}
                project={project}
                index={index}
                total={projects.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />

            <motion.p
              animate={{
                opacity: [0.35, 0.8, 0.35],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-zinc-500"
            >
              Scroll to explore
            </motion.p>

            <div className="h-px flex-1 bg-slate-200" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StackCard({
  project,
  index,
  total,
  progress,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const [isTapped, setIsTapped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const start = index / total;
  const end = (index + 1) / total;

  /*
   * STACK ANIMATION
   *
   * Project 1 stays visible.
   * Project 2 is behind it.
   * When scrolling, Project 2 moves upward.
   * The same happens for Projects 3 and 4.
   */

  const y = useTransform(
    progress,
    [
      Math.max(0, start - 0.15),
      start,
      end,
      Math.min(1, end + 0.1),
    ],
    [
      index === 0 ? "0%" : `${index * 22}px`,
      "0%",
      "-8%",
      "-120%",
    ],
  );

  const scale = useTransform(
    progress,
    [
      Math.max(0, start - 0.15),
      start,
      end,
    ],
    [
      index === 0 ? 1 : 1 - index * 0.025,
      1,
      0.975,
    ],
  );

  const opacity = useTransform(
    progress,
    [
      Math.max(0, start - 0.15),
      start,
      end,
      Math.min(1, end + 0.1),
    ],
    [
      1,
      1,
      1,
      0,
    ],
  );

  const showOverlay = isHovering || isTapped;

  return (
    <motion.article
      style={{
        y,
        scale,
        opacity,
        zIndex: total - index,
      }}
      className="absolute inset-0 origin-bottom"
    >
      <div
        className="group relative h-full w-full cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsTapped((value) => !value)}
      >

        {/* ================================================
            FULL CARD IMAGE
        ================================================= */}

        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />

        {/* Base gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />

        {/* Extra darkening when overlay opens */}
        <motion.div
          animate={{
            opacity: showOverlay ? 0.22 : 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="pointer-events-none absolute inset-0 bg-black"
        />

        {/* Featured badge */}
        {project.featured && (
          <motion.div
            animate={{
              y: showOverlay ? -8 : 0,
              opacity: showOverlay ? 0 : 1,
            }}
            transition={{
              duration: 0.3,
            }}
            className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-xl sm:left-7 sm:top-7"
          >
            <Sparkles
              size={13}
              className="text-violet-400"
            />

            Featured Project
          </motion.div>
        )}

        {/* ================================================
            DEFAULT TITLE
        ================================================= */}

        <motion.div
          animate={{
            y: showOverlay ? -25 : 0,
            opacity: showOverlay ? 0 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="pointer-events-none absolute bottom-7 left-6 right-6 z-20 sm:bottom-9 sm:left-9"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-violet-300">
            {project.category}
          </p>

          <h3 className="text-3xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-4xl md:text-5xl">
            {project.title}
          </h3>

          <p className="mt-2 text-xs text-white/50 sm:text-sm">
            Hover to explore
          </p>
        </motion.div>

        {/* ================================================
            BOTTOM → TOP OVERLAY
        ================================================= */}

        <motion.div
          initial={false}
          animate={{
            y: showOverlay ? "0%" : "100%",
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-x-0 bottom-0 z-30 flex h-[72%] flex-col justify-end bg-gradient-to-t from-black via-black/90 to-black/35 p-6 sm:h-[66%] sm:p-9 md:h-[60%] md:p-10"
        >
          <div
            className="w-full"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Category */}
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
              {project.category}
            </p>

            {/* Title */}
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{
                    y: -2,
                    scale: 1.04,
                  }}
                  className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] text-zinc-200 backdrop-blur-md transition-colors duration-300 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-white sm:px-3 sm:py-1.5 sm:text-xs"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap gap-3">

              {/* GitHub */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="group/button flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/20"
              >
                GitHub

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                />
              </a>

              {/* Live Demo */}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="group/button flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200"
              >
                Live Demo

                <ExternalLink
                  size={15}
                  className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ================================================
            MOBILE HINT
        ================================================= */}

        <motion.div
          animate={{
            opacity: showOverlay ? 0 : 1,
          }}
          transition={{
            duration: 0.25,
          }}
          className="absolute bottom-5 right-5 z-20 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/60 backdrop-blur-md sm:hidden"
        >
          Tap to explore
        </motion.div>
      </div>
    </motion.article>
  );
}
