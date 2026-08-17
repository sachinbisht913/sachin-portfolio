"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI Interview Platform",
    category: "AI • Full Stack",
    description: "An AI-powered interview practice platform that helps users prepare for technical interviews through interactive interview sessions and automated feedback.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "AI", "MongoDB"],
    image: "/project/ai_interview.png",
    github: "#",
    demo: "https://ai-interview-platform-8jme.onrender.com/login",
  },
  {
    title: "Network Intrusion Detection System",
    category: "Machine Learning • Security",
    description: "A machine-learning based intrusion detection system that detects and classifies network attacks using the NSL-KDD dataset.",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy"],
    image: "/project/network_intrusion.png",
    github: "#",
    demo: "https://network-intrusion-detection-1-p806.onrender.com",
  },
  {
    title: "Path Finder Visualizer",
    category: "Algorithms • Visualization",
    description: "An interactive visualization tool that demonstrates pathfinding algorithms such as BFS, DFS and Dijkstra on a dynamic grid.",
    tech: ["JavaScript", "HTML", "CSS", "Algorithms"],
    image: "/project/pathfinder.png",
    github: "#",
    demo: "https://path-explorer.netlify.app/",
  },
  {
    title: "Learning Management System",
    category: "Full Stack • Web",
    description: "A web-based learning management platform with separate dashboards for educators and students, including courses, homework and quizzes.",
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
    <section id="projects" className="relative overflow-hidden border-t border-slate-200 bg-white px-6 py-28 text-slate-950">
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-violet-200/50 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-sky-100 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-violet-600" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-700">Selected work</p>
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Projects that turn ideas into products.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">A selection of full-stack, AI, machine-learning, and interactive web projects built to solve practical problems.</p>
        </motion.div>

        <FeaturedProject project={featuredProject} />

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.1 }} className="group mt-14 grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-950/15 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative min-h-[290px] overflow-hidden lg:min-h-[430px]">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
        <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md"><Sparkles size={14} className="text-violet-300" />Featured project</div>
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">{project.category}</p>
        <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{project.title}</h3>
        <p className="mt-5 leading-7 text-slate-300">{project.description}</p>
        <TechList tech={project.tech} dark />
        <ProjectLinks project={project} dark />
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.1 }} whileHover={{ y: -7 }} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 transition-shadow hover:shadow-xl hover:shadow-violet-100">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur">{project.category}</span>
      </div>
      <div className="flex min-h-[300px] flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight text-slate-950">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
        <TechList tech={project.tech} />
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

function TechList({ tech, dark = false }: { tech: string[]; dark?: boolean }) {
  return <div className="mt-6 flex flex-wrap gap-2">{tech.map((item) => <span key={item} className={`rounded-full px-3 py-1 text-xs font-medium ${dark ? "bg-white/10 text-slate-200" : "bg-slate-100 text-slate-600"}`}>{item}</span>)}</div>;
}

function ProjectLinks({ project, dark = false }: { project: Project; dark?: boolean }) {
  const ghostClass = dark ? "border-white/20 text-white hover:bg-white/10" : "border-slate-200 text-slate-700 hover:border-violet-300 hover:bg-violet-50";
  const primaryClass = dark ? "bg-white text-slate-950 hover:bg-violet-100" : "bg-slate-950 text-white hover:bg-violet-700";

  if (project.github === "#" && project.demo === "#") return <p className={`mt-auto pt-7 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>Repository and demo coming soon.</p>;

  return <div className="mt-auto flex flex-wrap gap-3 pt-7">
    {project.github !== "#" && <a href={project.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${ghostClass}`}>View code<ArrowUpRight size={16} /></a>}
    {project.demo !== "#" && <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${primaryClass}`}>Live demo<ExternalLink size={16} /></a>}
  </div>;
}
