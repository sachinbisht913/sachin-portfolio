
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-stone-200/90 bg-[#faf9f6]/90 px-4 shadow-lg shadow-stone-900/[0.04] backdrop-blur-xl sm:px-6">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group flex shrink-0 items-center gap-2.5"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-800 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-emerald-700">
            S
          </span>

          <span className="text-base font-semibold tracking-tight text-[#252525] sm:text-lg">
            Sachin Bisht<span className="text-emerald-700">.</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-0.5 rounded-xl border border-stone-200/80 bg-white/70 p-1 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="group relative rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition-colors duration-200 hover:text-emerald-800 lg:px-3.5"
            >
              <span className="relative z-10">{item.name}</span>

              <span className="absolute inset-0 rounded-lg bg-emerald-50 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-emerald-600 transition-all duration-300 group-hover:w-4" />
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.a
          href="#contact"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="hidden items-center gap-2 rounded-xl bg-emerald-800 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-emerald-700 md:flex"
        >
          Let&apos;s talk
          <ArrowUpRight size={16} />
        </motion.a>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white/80 text-stone-700 transition-colors hover:bg-emerald-50 hover:text-emerald-800 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-stone-200 bg-[#faf9f6]/95 p-3 shadow-xl shadow-stone-900/[0.08] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-stone-600 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
                >
                  {item.name}
                  <ArrowUpRight
                    size={15}
                    className="text-stone-400"
                  />
                </motion.a>
              ))}

              <div className="my-2 h-px bg-stone-200" />

              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
              >
                Let&apos;s talk
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
