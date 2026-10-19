
"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  GraduationCap,
  Award,
  ExternalLink,
  X,
  ArrowUpRight,
  Cloud,
} from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Graphic Era Deemed to be University",
    location: "Dehradun",
    period: "2024 – 2026",
    description:
      "Studied software development, data structures, databases, machine learning, networking, and modern web technologies.",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "SSJ University",
    location: "",
    period: "2021 – 2023",
    description:
      "Built a foundation in programming, computer science fundamentals, databases, and web development.",
  },
];

const certifications = [
  {
    title: "Research Methodology",
    issuer: "IIT Madras",
    type: "Certification",
    url: "/certificates/research-methodology.pdf",
  },
  {
    title: "Full Stack Web Development",
    issuer: "SmartED",
    type: "Certification",
    url: "/certificates/full-stack-web-development.pdf",
  },
];

const awsCertificates = [
  {
    title: "AWS Job Roles",
    issuer: "AWS",
    type: "Certification",
    url: "/certificates/aws-job-role.pdf",
  },
  {
    title: "Developing Generative AI Solutions",
    issuer: "AWS",
    type: "Certification",
    url: "/certificates/developing-generative-ai-solutions.pdf",
  },
  {
    title: "Developing Machine Learning Solutions",
    issuer: "AWS",
    type: "Certification",
    url: "/certificates/developing-machine-learning-solutions.pdf",
  },
  {
    title: "Essentials of Prompt Engineering",
    issuer: "AWS",
    type: "Certification",
    url: "/certificates/essentials-of-prompt-engineering.pdf",
  },
  {
    title: "AWS Artificial Intelligence Practitioner Learning Plan",
    issuer: "AWS Skill Builder",
    type: "Learning plan",
    url: "/certificates/aws-ai-practitioner-learning-plan.pdf",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "AWS Skill Builder",
    type: "Certification",
    url: "/certificates/aws-cloud-practitioner.pdf",
  },
  {
    title: "AWS Getting Started with DevOps",
    issuer: "AWS Skill Builder",
    type: "Certification",
    url: "/certificates/aws-getting-started-devops.pdf",
  },
];

export default function Education() {
  const [isAwsModalOpen, setIsAwsModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
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
      id="education"
      className="relative overflow-hidden border-t border-stone-200 bg-[#DAD9D5] px-5 py-20 text-[#252525] sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-20 h-72 w-72 rounded-full bg-violet-100/40 blur-3xl"
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
            variants={reveal}
            className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500"
          >
            <span className="h-px w-8 bg-stone-400" />
            Education &amp; certifications
          </motion.p>

          <motion.div variants={reveal}>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              What I&apos;ve learned
              <br />
              <span className="text-stone-400">along the way.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
              My academic background and additional learning that have helped
              me build a foundation in software development.
            </p>
          </motion.div>
        </motion.div>

        {/* Main content */}
        <div className="mt-12 grid gap-12 lg:mt-14 lg:grid-cols-2 lg:gap-14">
          {/* Education */}
          <div>
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-7 flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-200 bg-amber-100 text-amber-800">
                <GraduationCap size={21} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="mt-0.5 text-xs text-stone-500">
                  Academic journey
                </p>
              </div>
            </motion.div>

            {/* Education timeline */}
            <div className="relative space-y-5">
              <div className="absolute bottom-8 left-[5px] top-8 w-px bg-amber-200" />

              {education.map((item, index) => (
                <motion.article
                  key={item.degree}
                  initial={{
                    opacity: 0,
                    x: shouldReduceMotion ? 0 : -18,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion ? 0 : index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { x: 3, transition: { duration: 0.2 } }
                  }
                  className="relative pl-8"
                >
                  <span className="absolute left-0 top-7 z-10 h-[11px] w-[11px] rounded-full border-2 border-[#faf9f6] bg-amber-500 ring-1 ring-amber-200" />

                  <div className="group relative overflow-hidden rounded-2xl border border-amber-200 bg-amber-50/70 p-6 transition-all duration-300 hover:border-amber-300 hover:shadow-md hover:shadow-amber-900/[0.04] sm:p-7">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-amber-100/70 transition-transform duration-500 group-hover:scale-125"
                    />

                    <div className="relative">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h4 className="text-lg font-semibold leading-snug tracking-tight">
                            {item.degree}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-stone-600">
                            {item.institution}
                            {item.location && ` · ${item.location}`}
                          </p>
                        </div>

                        <span className="shrink-0 rounded-lg border border-amber-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-amber-800">
                          {item.period}
                        </span>
                      </div>

                      <div className="my-5 h-px bg-amber-200/80" />

                      <p className="text-sm leading-7 text-stone-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Education footer */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200/70 bg-white/70 p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                <GraduationCap size={18} />
              </div>
              <p className="text-sm leading-6 text-stone-600">
                Building on my academic foundation through practical projects
                and continuous learning.
              </p>
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-7 flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-800">
                <Award size={21} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Certifications</h3>
                <p className="mt-0.5 text-xs text-stone-500">
                  Courses &amp; credentials
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="space-y-3"
            >
              {certifications.map((certificate) => (
                <motion.a
                  key={certificate.title}
                  variants={reveal}
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { x: 3, transition: { duration: 0.2 } }
                  }
                  className="group flex items-center justify-between gap-4 rounded-xl border border-blue-200 bg-blue-50/60 p-5 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm"
                >
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-200">
                      <Award size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-blue-700/80">
                        {certificate.type}
                      </p>

                      <h4 className="mt-1 font-semibold leading-6">
                        {certificate.title}
                      </h4>

                      <p className="mt-1 text-sm text-stone-500">
                        {certificate.issuer}
                      </p>
                    </div>
                  </div>

                  <ExternalLink
                    size={17}
                    className="shrink-0 text-blue-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-700"
                  />
                </motion.a>
              ))}

              {/* AWS credentials button */}
              <motion.button
                variants={reveal}
                type="button"
                onClick={() => setIsAwsModalOpen(true)}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -3, transition: { duration: 0.2 } }
                }
                whileTap={
                  shouldReduceMotion ? undefined : { scale: 0.99 }
                }
                className="group relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-xl border border-violet-200 bg-violet-50/80 p-5 text-left transition-all duration-300 hover:border-violet-300 hover:bg-violet-50 hover:shadow-md hover:shadow-violet-900/[0.04]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-10 h-28 w-28 rounded-full bg-violet-100/80 transition-transform duration-500 group-hover:scale-125"
                />

                <div className="relative flex min-w-0 items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 transition-colors group-hover:bg-violet-200">
                    <Cloud size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-violet-700/80">
                      AWS · Skill Builder
                    </p>

                    <h4 className="mt-1 font-semibold leading-6">
                      AWS learning &amp; certifications
                    </h4>

                    <p className="mt-1 text-sm text-stone-600">
                      View {awsCertificates.length} credentials
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={19}
                  className="relative shrink-0 text-violet-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* AWS certificates modal */}
      <AnimatePresence>
        {isAwsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
            }}
            onClick={() => setIsAwsModalOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/40 px-4 py-6 backdrop-blur-sm"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="aws-certifications-title"
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 18,
                scale: shouldReduceMotion ? 1 : 0.98,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 12,
                scale: shouldReduceMotion ? 1 : 0.98,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.2,
              }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-full w-full max-w-2xl overflow-y-auto rounded-2xl border border-violet-200 bg-[#faf9f6] p-5 shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                    <Cloud size={15} />
                    AWS Skill Builder
                  </div>

                  <h3
                    id="aws-certifications-title"
                    className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
                  >
                    AWS certificates
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    Select a credential to open its PDF.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAwsModalOpen(false)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 transition-colors hover:border-violet-200 hover:bg-violet-50 hover:text-violet-800"
                  aria-label="Close AWS certifications"
                >
                  <X size={19} />
                </button>
              </div>

              <div className="mt-7 space-y-3">
                {awsCertificates.map((certificate, index) => (
                  <motion.a
                    key={certificate.title}
                    initial={{
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 8,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.25,
                      delay: shouldReduceMotion
                        ? 0
                        : Math.min(index * 0.04, 0.2),
                    }}
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-violet-100 bg-white p-4 transition-colors hover:border-violet-300 hover:bg-violet-50/60"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                        <Award size={18} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-6">
                          {certificate.title}
                        </p>

                        <p className="mt-1 text-xs text-stone-500">
                          {certificate.issuer} · {certificate.type}
                        </p>
                      </div>
                    </div>

                    <ExternalLink
                      size={17}
                      className="shrink-0 text-violet-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-700"
                    />
                  </motion.a>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-stone-500">
                Make sure each certificate PDF exists in your public
                certificates folder.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
