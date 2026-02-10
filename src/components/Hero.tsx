"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg)]"
    >
      {/* Decorative orbs */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent opacity-[0.08] dark:opacity-[0.18] blur-[120px] animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent opacity-[0.05] dark:opacity-[0.07] blur-[100px]"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2"
      >
        {/* Left — Typographic headline */}
        <div>
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-accent"
          >
            Software Engineer
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 font-syne text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-[var(--text)]">
              Ben{" "}
            </span>
            <span className="text-accent">
              Hockley
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--text-muted)]"
          >
            My name is Ben Hockley, I am a software engineer studying Applied
            Software Engineering at Cardiff University.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-[#00c8b8] to-[#0095e8] px-7 py-3 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_24px_rgba(0,212,200,0.3)]"
            >
              View Projects
            </a>
            <a
              href="#social"
              className="rounded-full border border-accent/50 px-7 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent/10 hover:border-accent"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Right — Visual element (geometric avatar placeholder) */}
        <motion.div variants={fadeUp} className="flex items-center justify-center">
          <div className="relative">
            <div className="h-64 w-64 rounded-full bg-gradient-to-br from-accent to-[#0095e8] opacity-60 dark:opacity-80 blur-sm sm:h-80 sm:w-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-56 w-56 items-center justify-center rounded-full bg-[var(--surface)]/80 backdrop-blur-sm sm:h-72 sm:w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-[var(--text-muted)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
