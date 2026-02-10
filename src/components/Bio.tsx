"use client";

import { useInView } from "@/hooks/useInView";

export default function Bio() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="bio"
      ref={ref}
      className="bg-slate-900"
      aria-labelledby="bio-heading"
    >
      <div
        className={`mx-auto max-w-6xl px-6 py-24 ${
          isInView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2
          id="bio-heading"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          About Me
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {/* TODO: Replace with your profile image */}
          <div className="flex items-center justify-center">
            <div className="flex h-48 w-48 items-center justify-center rounded-full bg-slate-800 text-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20"
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

          <div className="md:col-span-2">
            {/* TODO: Add your name */}
            <h3 className="text-xl font-semibold text-white">
              Ben Hockley
            </h3>

            {/* TODO: Add your job title or tagline */}
            <p className="mt-1 text-slate-400">
              Software Engineer
            </p>

            {/* TODO: Write a short bio about yourself */}
            <p className="mt-4 leading-relaxed text-slate-300">
              My name is Ben Hockley, I am a software engineer studying Applied Software Engineering at Cardiff University.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
