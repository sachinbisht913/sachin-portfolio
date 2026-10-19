
"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI Interview Platform",
    category: "AI · Full Stack",
    description:
      "An interview preparation platform with resume analysis, mock interviews, coding practice, and AI-generated feedback.",
    tech: ["React", "Node.js", "Express", "MySQL", "Gemini AI", "Judge0"],
    image: "/project/ai_interview.png",
    github: "#",
    demo: "https://ai-interview-platform-8jme.onrender.com/login",
  },
  {
    title: "Network Intrusion Detection System",
    category: "Machine Learning · Security",
    description:
      "A machine learning project that classifies network traffic and identifies potential attacks using the NSL-KDD dataset.",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy"],
    image: "/project/network_intrusion.png",
    github: "#",
    demo: "https://network-intrusion-detection-1-p806.onrender.com",
  },
  {
    title: "Path Finder Visualizer",
    category: "Algorithms · Visualization",
    description:
      "An interactive grid for exploring pathfinding algorithms and seeing how they search for a route.",
    tech: ["JavaScript", "HTML", "CSS", "BFS", "DFS", "Dijkstra"],
    image: "/project/pathfinder.png",
    github: "#",
    demo: "https://path-explorer.netlify.app/",
  },
  {
    title: "Learning Management System",
    category: "Full Stack · Web",
    description:
      "A learning platform with separate student and educator experiences for managing courses, homework, and quizzes.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    image: "/project/lms.png",
    github: "#",
    demo: "https://lmsproject.infinityfree.io",
  },
];

type Project = (typeof projects)[number];

export default function ProjectGallery() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-stone-200 bg-[#faf9f6] px-6 py-24 text-[#252525] sm:py-28"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-stone-500" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-600">
              Selected work
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Projects I've
            <br />
            <span className="text-stone-400">worked on.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            A few projects where I've explored web development,
            machine learning, and interactive applications.
          </p>
        </motion.div>

        <FeaturedProject project={featuredProject} />

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="group mt-14 grid overflow-hidden rounded-2xl border border-stone-200 bg-white lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div className="relative min-h-[260px] overflow-hidden bg-stone-100 lg:min-h-[430px]">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      </div>

      <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10">
        <p className="text-sm font-medium text-stone-500">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-stone-600">
          {project.description}
        </p>

        <TechList tech={project.tech} />
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -7 }}
      className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-xl hover:shadow-stone-200/60"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        <span className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-medium text-stone-700">
          {project.category}
        </span>
      </div>

      <div className="flex min-h-[300px] flex-col p-6">
        <h3 className="text-xl font-semibold leading-snug tracking-tight">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-stone-600">
          {project.description}
        </p>

        <TechList tech={project.tech} />
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

function TechList({ tech }: { tech: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tech.map((item) => (
        <span
          key={item}
          className="rounded-md border border-stone-200 bg-[#faf9f6] px-2.5 py-1.5 text-xs font-medium text-stone-600"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const hasGithub = project.github !== "#";
  const hasDemo = project.demo !== "#";

  if (!hasGithub && !hasDemo) {
    return (
      <p className="mt-auto pt-7 text-sm text-stone-500">
        Repository and demo coming soon.
      </p>
    );
  }

  return (
    <div className="mt-auto flex flex-wrap gap-3 pt-7">
      {hasGithub && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50"
        >
          View code
          <ArrowUpRight size={16} />
        </a>
      )}

      {hasDemo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#252525] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700"
        >
          Live demo
          <ExternalLink size={15} />
        </a>
      )}
    </div>
  );
}
