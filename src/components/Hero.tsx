"use client";

import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950"
    >
      {/* Animated gradient orb */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-indigo-600/10 dark:bg-indigo-600/20 blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[10%] bottom-[5%] h-[300px] w-[300px] rounded-full bg-purple-600/10 dark:bg-purple-600/15 blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
        aria-hidden="true"
      />

      <div
        className={`mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 ${
          isInView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        {/* Left — Typographic headline */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Software Engineer
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              Ben Hockley
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600 dark:text-slate-300">
            My name is Ben Hockley, I am a software engineer studying Applied
            Software Engineering at Cardiff University.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              View Projects
            </a>
            <a
              href="#social"
              className="rounded-lg border border-gray-300 dark:border-slate-600 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-slate-300 transition-colors hover:border-gray-400 dark:hover:border-slate-400 hover:text-gray-900 dark:hover:text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right — Visual element (geometric avatar placeholder) */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-60 dark:opacity-80 blur-sm sm:h-80 sm:w-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-56 w-56 items-center justify-center rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm sm:h-72 sm:w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-gray-400 dark:text-slate-400"
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
        </div>
      </div>
    </section>
  );
}
