
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
  className="relative isolate overflow-hidden border-t border-stone-200/50 bg-transparent px-6 py-24 text-[#252525] sm:py-32"
>

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-stone-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
              Contact
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Let&apos;s make
              <br />
              <span className="text-stone-400">something happen.</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-stone-600 md:justify-self-end">
              Looking for a developer or want to work together?
              I&apos;m open to new opportunities, collaborations,
              and interesting projects.
            </p>
          </div>
        </motion.div>

        {/* Contact panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid overflow-hidden rounded-2xl bg-[#252525] text-white md:grid-cols-2"
        >
          {/* Email panel */}
          <div className="flex flex-col justify-between border-b border-white/15 p-7 sm:p-10 md:border-b-0 md:border-r">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                Have a project in mind?
              </p>

              <h3 className="mt-5 max-w-sm text-3xl font-medium leading-snug tracking-tight sm:text-4xl">
                Good work starts with a conversation.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-stone-400">
                Drop me a message. I&apos;d be happy to hear
                about your idea or opportunity.
              </p>
            </div>

            <a
              href="mailto:sachinbisht913@gmail.com"
              className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-sm font-medium transition-colors hover:border-white"
            >
              <Mail size={17} />
              sachinbisht913@gmail.com
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Links panel */}
          <div className="flex flex-col p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
              Find me online
            </p>

            <div className="mt-5 divide-y divide-white/15">
              <SocialLink
                href="https://github.com/sachinbisht913"
                label="GitHub"
                description="Projects & source code"
              />

              <SocialLink
                href="https://www.linkedin.com/in/sachin-bisht913"
                label="LinkedIn"
                description="Professional profile"
              />

              <SocialLink
                href="mailto:sachinbisht913@gmail.com"
                label="Email"
                description="Let's start a conversation"
              />
            </div>

            <div className="mt-auto flex items-center gap-3 border-t border-white/15 pt-6">
              <MapPin size={17} className="text-stone-400" />
              <span className="text-sm text-stone-300">
                Based in India
              </span>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-10 flex flex-col gap-3 border-t border-stone-300 pt-5 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sachin Bisht</p>

          <p>
            Built with care
            
          </p>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description: string;
}) {
  const isEmail = href.startsWith("mailto:");

  return (
    <motion.a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center justify-between gap-4 py-5"
    >
      <div>
        <p className="text-base font-medium transition-colors group-hover:text-violet-300">
          {label}
        </p>

        <p className="mt-1 text-xs text-stone-400">
          {description}
        </p>
      </div>

      <ArrowUpRight
        size={18}
        className="shrink-0 text-stone-400 transition-colors group-hover:text-white"
      />
    </motion.a>
  );
}
