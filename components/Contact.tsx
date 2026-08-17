"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden border-t border-white/10 bg-[#070B14] px-6 py-28"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600 blur-[150px]"
      />

      <div className="mx-auto max-w-6xl">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-violet-500" />

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              Contact
            </p>

            <span className="h-px w-8 bg-violet-500" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let's build something.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            I'm currently looking for opportunities where I can
            contribute, learn, and grow as a software developer.
          </p>
        </motion.div>


        {/* ================= CONTACT CARD ================= */}

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
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
        >

          <div className="grid md:grid-cols-2">

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div className="border-b border-white/10 p-7 sm:p-10 md:border-b-0 md:border-r">

              <p className="text-sm uppercase tracking-wider text-zinc-600">
                Get in touch
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Have an opportunity?
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Whether it's a job opportunity, collaboration,
                project, or simply a conversation about technology,
                feel free to reach out.
              </p>


              {/* ================= EMAIL ================= */}

              <motion.a
                href="mailto:sachinbisht913@gmail.com"
                whileHover={{
                  x: 5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="group mt-8 flex items-center gap-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-xs text-zinc-600">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                    sachinbisht913@gmail.com
                  </p>
                </div>
              </motion.a>


              {/* ================= LOCATION ================= */}

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-500">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs text-zinc-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    India
                  </p>
                </div>
              </div>

            </div>


            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div className="p-7 sm:p-10">

              <p className="text-sm uppercase tracking-wider text-zinc-600">
                Connect
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Find me online.
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                You can find my projects, professional profile,
                and contact information through the links below.
              </p>


              <div className="mt-8 space-y-3">

                {/* =================================================
                    GITHUB
                ================================================= */}

                <motion.a
                  href="https://github.com/sachinbisht913"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    x: 5,
                  }}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.06]"
                >

                  <div className="flex items-center gap-3">

                    {/* GitHub SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-zinc-500 transition-colors group-hover:text-white"
                    >
                      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 7.18c.85 0 1.7.12 2.5.36 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.83c0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
                    </svg>

                    <span className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                      GitHub
                    </span>

                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />

                </motion.a>


                {/* =================================================
                    LINKEDIN
                ================================================= */}

                <motion.a
                  href="https://www.linkedin.com/in/sachin-bisht913"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    x: 5,
                  }}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.06]"
                >

                  <div className="flex items-center gap-3">

                    {/* LinkedIn SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-zinc-500 transition-colors group-hover:text-white"
                    >
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V9H3.54v11.45ZM22.22 0H1.78C.8 0 .02.78.02 1.74v20.52c0 .96.78 1.74 1.76 1.74h20.44c.98 0 1.76-.78 1.76-1.74V1.74C23.98.78 23.2.78 22.22 0Z" />
                    </svg>

                    <span className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                      LinkedIn
                    </span>

                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                </motion.a>


                {/* =================================================
                    EMAIL BUTTON
                ================================================= */}

                <motion.a
                  href="mailto:sachinbisht913@gmail.com"
                  whileHover={{
                    x: 5,
                  }}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.06]"
                >

                  <div className="flex items-center gap-3">

                    <Mail
                      size={19}
                      className="text-zinc-500 transition-colors group-hover:text-white"
                    />

                    <span className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                      Email Me
                    </span>

                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                </motion.a>

              </div>
            </div>
          </div>
        </motion.div>


        {/* ================= AVAILABILITY ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mt-8 flex items-center justify-center gap-2"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

          <span className="text-xs text-zinc-600">
            Open to software development opportunities
          </span>
        </motion.div>

      </div>
    </section>
  );
}
