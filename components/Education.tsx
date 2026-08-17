"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  GraduationCap,
  Award,
  ExternalLink,
  X,
} from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Graphic Era Deemed to be University",
    location: "Dehradun",
    period: "2024 – 2026",
    description:
      "Focused on software development, data structures, databases, machine learning, networking, and modern web technologies.",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "SSJ University",
    location: "",
    period: "2021 – 2023",
    description:
      "Built a strong foundation in programming, computer science fundamentals, databases, web development, and software engineering.",
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

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

const educationCard = {
  hidden: {
    opacity: 0,
    x: -45,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const certificationCard = {
  hidden: {
    opacity: 0,
    x: 45,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Education() {
  const [isAwsModalOpen, setIsAwsModalOpen] = useState(false);

  return (
    <section
      id="education"
      className="education-scroll relative overflow-hidden border-t border-white/10 px-6 py-10 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:scroll-smooth"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-violet-600 blur-[140px]"
      />

      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.25,
          }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-500" />

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              Education & Certifications
            </p>
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My learning journey.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            My academic background and certifications that have helped
            me build a strong foundation in software development.
          </p>
        </motion.div>


        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid gap-16 lg:grid-cols-2">


          {/* =================================================
              EDUCATION
          ================================================= */}

          <div>

            {/* Education heading */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                delay: 0.05,
              }}
              className="mb-8 flex items-center gap-3"
            >
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400"
              >
                <GraduationCap size={20} />
              </motion.div>

              <h3 className="text-xl font-semibold text-white">
                Education
              </h3>
            </motion.div>


            {/* Education timeline */}

            <div className="relative space-y-5">

              {/* Timeline */}

              <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-violet-500/50 via-white/10 to-transparent" />


              {education.map((item, index) => (

                <motion.div
                  key={item.degree}

                  variants={educationCard}

                  initial="hidden"

                  whileInView="visible"

                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}

                  transition={{
                    delay: index * 0.15,
                  }}

                  whileHover={{
                    x: 6,
                  }}

                  className="group relative pl-14"
                >

                  {/* Timeline dot */}

                  <motion.div
                    whileHover={{
                      scale: 1.3,
                    }}
                    className="absolute left-[11px] top-6 z-10 h-3 w-3 rounded-full border-2 border-black bg-violet-500"
                  />


                  {/* Education card */}

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-gradient-to-br
                      from-[#111827]
                      via-[#0F172A]
                      to-[#1E1633]
                      p-6
                      transition-all
                      duration-500
                      group-hover:border-violet-500/30
                      group-hover:bg-white/[0.05]
                    "
                  >

                    <div className="flex flex-wrap items-start justify-between gap-3">

                      <div>

                        <h4 className="text-lg font-semibold text-white">
                          {item.degree}
                        </h4>

                        <p className="mt-1 text-sm text-violet-400">
                          {item.institution}
                          {item.location && ` • ${item.location}`}
                        </p>

                      </div>


                      {/* Period */}

                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-500">
                        {item.period}
                      </span>

                    </div>


                    <p className="mt-4 text-sm leading-7 text-zinc-500">
                      {item.description}
                    </p>


                    {/* Bottom accent */}

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: "30%",
                      }}
                      viewport={{
                        once: false,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.15 + 0.2,
                      }}
                      className="mt-5 h-px bg-violet-500/50"
                    />

                  </div>

                </motion.div>

              ))}

            </div>

          </div>


          {/* =================================================
              CERTIFICATIONS
          ================================================= */}

          <div>

            {/* Certifications heading */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                delay: 0.1,
              }}
              className="mb-8 flex items-center gap-3"
            >

              <motion.div
                whileHover={{
                  rotate: -8,
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400"
              >
                <Award size={20} />
              </motion.div>

              <h3 className="text-xl font-semibold text-white">
                Certifications
              </h3>

            </motion.div>


            {/* Certification cards */}

            <div className="space-y-4">

              {certifications.map((certificate, index) => (

                <motion.div
                  key={certificate.title}

                  variants={certificationCard}

                  initial="hidden"

                  whileInView="visible"

                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}

                  transition={{
                    delay: index * 0.12,
                  }}

                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}

                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-gradient-to-br
                    from-[#111827]
                    via-[#0F172A]
                    to-[#1E1633]
                    p-6
                    transition-all
                    duration-500
                    hover:border-violet-500/30
                  "
                >

                  {/* Hover glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-violet-600/0
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-violet-600/20
                    "
                  />


                  <div className="relative flex items-start justify-between gap-5">

                    <div className="flex gap-4">

                      {/* Certificate icon */}

                      <motion.div
                        whileHover={{
                          scale: 1.12,
                          rotate: 5,
                        }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400"
                      >
                        <Award size={20} />
                      </motion.div>


                      <div>

                        <p className="text-xs uppercase tracking-wider text-zinc-600">
                          {certificate.type}
                        </p>

                        <h4 className="mt-1 font-semibold text-white">
                          {certificate.title}
                        </h4>

                        <p className="mt-1 text-sm text-zinc-500">
                          {certificate.issuer}
                        </p>

                      </div>

                    </div>


                    {/* External link */}

                    <motion.a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-500 transition-all hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-white"
                      aria-label={`View ${certificate.title}`}
                    >
                      <ExternalLink size={15} />
                    </motion.a>

                  </div>


                  {/* Bottom accent */}

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "25%",
                    }}
                    viewport={{
                      once: false,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.12 + 0.2,
                    }}
                    className="mt-6 h-px bg-violet-500/50"
                  />

                </motion.div>

              ))}

              <motion.button
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setIsAwsModalOpen(true)}
                className="group relative w-full overflow-hidden rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-500/15 via-[#0F172A] to-[#1E1633] p-6 text-left transition-all duration-500 hover:border-violet-400/60"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/25" />
                <div className="relative flex items-start justify-between gap-5">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-violet-300">AWS</p>
                      <h4 className="mt-1 font-semibold text-white">AWS Certifications</h4>
                      <p className="mt-1 text-sm text-zinc-400">View {awsCertificates.length} AWS credentials</p>
                    </div>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-all group-hover:border-violet-400/50 group-hover:bg-violet-500/10 group-hover:text-white">
                    <ExternalLink size={15} />
                  </span>
                </div>
                <div className="mt-6 h-px w-1/4 bg-violet-400/60" />
              </motion.button>

            </div>

          </div>

        </div>

     

      </div>

      <AnimatePresence>
        {isAwsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAwsModalOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 px-4 py-6 backdrop-blur-sm"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="aws-certifications-title"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-full w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0B1120] p-6 shadow-2xl shadow-black/50 sm:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">AWS</p>
                  <h3 id="aws-certifications-title" className="mt-2 text-2xl font-bold text-white sm:text-3xl">AWS certifications</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">Choose a credential to open its certificate in a new tab.</p>
                </div>
                <button type="button" onClick={() => setIsAwsModalOpen(false)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition-colors hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white" aria-label="Close AWS certifications">
                  <X size={19} />
                </button>
              </div>

              <div className="mt-7 space-y-3">
                {awsCertificates.map((certificate) => (
                  <a key={certificate.title} href={certificate.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-violet-400/40 hover:bg-violet-500/10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400"><Award size={18} /></div>
                      <p className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">{certificate.title}</p>
                    </div>
                    <ExternalLink size={17} className="shrink-0 text-zinc-500 transition-colors group-hover:text-violet-300" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
