"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop / Main Navbar */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6"
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">

          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-sm font-bold text-violet-400 transition-all duration-300 group-hover:border-violet-500/50 group-hover:bg-violet-500/20">
              S
            </span>

            <span className="text-lg font-semibold tracking-tight text-white">
              Sachin
              <span className="text-violet-500">.</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 rounded-xl border border-white/5 bg-white/[0.03] p-1 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="group relative rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                <span className="relative z-10">{item.name}</span>

                {/* Hover background */}
                <span className="absolute inset-0 -z-0 rounded-lg bg-white/0 transition-all duration-300 group-hover:bg-white/[0.07]" />

                {/* Bottom indicator */}
                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-violet-500 transition-all duration-300 group-hover:w-4" />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{ scale: 0.96 }}
            className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200 md:flex"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </motion.a>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-3 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.name}
                  </motion.a>
                ))}

                <div className="my-2 h-px bg-white/10" />

                <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
                >
                  Let's Talk
                  <ArrowUpRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}