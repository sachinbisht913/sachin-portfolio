
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  Database,
  BrainCircuit,
  Wrench,
  Server,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

const iconBase =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

type Skill = {
  name: string;
  icon?: string;
  custom?: string;
};

type SkillGroup = {
  title: string;
  description: string;
  icon: typeof Code2;
  accent: string;
  iconBg: string;
  cardBg: string;
  border: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Programming fundamentals",
    icon: Code2,
    accent: "text-amber-700",
    iconBg: "bg-amber-100",
    cardBg: "bg-amber-50/80",
    border: "border-amber-200",
    skills: [
      { name: "Java", icon: `${iconBase}/java/java-original.svg` },
      {
        name: "JavaScript",
        icon: `${iconBase}/javascript/javascript-original.svg`,
      },
      { name: "Python", icon: `${iconBase}/python/python-original.svg` },
      { name: "SQL", custom: "SQL" },
    ],
  },
  {
    title: "Frontend",
    description: "Building user interfaces",
    icon: Terminal,
    accent: "text-sky-700",
    iconBg: "bg-sky-100",
    cardBg: "bg-sky-50/80",
    border: "border-sky-200",
    skills: [
      { name: "HTML", icon: `${iconBase}/html5/html5-original.svg` },
      { name: "CSS", icon: `${iconBase}/css3/css3-original.svg` },
      { name: "React", icon: `${iconBase}/react/react-original.svg` },
      { name: "Next.js", icon: `${iconBase}/nextjs/nextjs-original.svg` },
      {
        name: "Tailwind CSS",
        icon: `${iconBase}/tailwindcss/tailwindcss-original.svg`,
      },
    ],
  },
  {
    title: "Backend",
    description: "APIs and server-side development",
    icon: Server,
    accent: "text-emerald-700",
    iconBg: "bg-emerald-100",
    cardBg: "bg-emerald-50/80",
    border: "border-emerald-200",
    skills: [
      { name: "Node.js", icon: `${iconBase}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${iconBase}/express/express-original.svg` },
      { name: "Flask", icon: `${iconBase}/flask/flask-original.svg` },
    ],
  },
  {
    title: "Database",
    description: "Data storage and management",
    icon: Database,
    accent: "text-blue-700",
    iconBg: "bg-blue-100",
    cardBg: "bg-blue-50/80",
    border: "border-blue-200",
    skills: [
      { name: "MongoDB", icon: `${iconBase}/mongodb/mongodb-original.svg` },
      { name: "MySQL", icon: `${iconBase}/mysql/mysql-original.svg` },
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Data analysis and machine learning",
    icon: BrainCircuit,
    accent: "text-violet-700",
    iconBg: "bg-violet-100",
    cardBg: "bg-violet-50/80",
    border: "border-violet-200",
    skills: [
      { name: "Pandas", icon: `${iconBase}/pandas/pandas-original.svg` },
      { name: "NumPy", icon: `${iconBase}/numpy/numpy-original.svg` },
      {
        name: "Scikit-learn",
        icon: `${iconBase}/scikitlearn/scikitlearn-original.svg`,
      },
      { name: "Python", icon: `${iconBase}/python/python-original.svg` },
    ],
  },
  {
    title: "Tools",
    description: "Development workflow",
    icon: Wrench,
    accent: "text-orange-700",
    iconBg: "bg-orange-100",
    cardBg: "bg-orange-50/80",
    border: "border-orange-200",
    skills: [
      { name: "Git", icon: `${iconBase}/git/git-original.svg` },
      { name: "GitHub", icon: `${iconBase}/github/github-original.svg` },
      { name: "VS Code", icon: `${iconBase}/vscode/vscode-original.svg` },
      { name: "Postman", icon: `${iconBase}/postman/postman-original.svg` },
    ],
  },
];

function SkillLogo({ skill }: { skill: Skill }) {
  if (skill.custom) {
    return (
      <span
        className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-1.5 text-xs font-bold tracking-tight text-slate-700 shadow-sm"
        aria-label={skill.name}
        title={skill.name}
      >
        {skill.custom}
      </span>
    );
  }

  return (
    <img
      src={skill.icon}
      alt={`${skill.name} logo`}
      title={skill.name}
      loading="lazy"
      className="h-9 w-9 object-contain transition-transform duration-300 group-hover/skill:scale-110"
    />
  );
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#faf9f6] px-5 py-20 sm:px-8 sm:py-24"
    >
      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-12 h-64 w-64 rounded-full bg-amber-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-12 max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-stone-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
              Skills & Technologies
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            Tools I use to{" "}
            <span className="text-emerald-700">build things.</span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
            The languages, frameworks, and tools I use while building projects
            and learning software development.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const CategoryIcon = group.icon;

            return (
              <motion.article
                key={group.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -5, transition: { duration: 0.2 } }
                }
                className={`group relative flex min-h-[225px] flex-col overflow-hidden rounded-2xl border ${group.border} ${group.cardBg} p-5 shadow-sm shadow-stone-900/[0.025] transition-shadow duration-300 hover:shadow-lg hover:shadow-stone-900/[0.06] sm:p-6`}
              >
                {/* Decorative corner */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full ${group.iconBg} opacity-50 transition-transform duration-500 group-hover:scale-125`}
                />

                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${group.iconBg} ${group.accent}`}
                    >
                      <CategoryIcon size={21} strokeWidth={1.8} />
                    </div>

                    <div className="pt-0.5">
                      <h3 className="text-base font-semibold tracking-tight text-stone-900">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-sm leading-5 text-stone-600">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className={`mt-1 shrink-0 ${group.accent} opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100`}
                  />
                </div>

                {/* Real technology logos */}
                <div className="relative mt-auto flex flex-wrap items-center gap-x-4 gap-y-4 pt-7">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill flex min-h-10 items-center justify-center"
                    >
                      <SkillLogo skill={skill} />
                    </div>
                  ))}
                </div>

                {/* Bottom accent */}
                <div
                  aria-hidden="true"
                  className={`absolute bottom-0 left-5 right-5 h-[2px] origin-left scale-x-0 rounded-full ${group.iconBg} transition-transform duration-300 group-hover:scale-x-100`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
