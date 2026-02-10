"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import {
  projects,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  accentColor,
} from "@/data/projects";
import type { Project, ProjectCategory } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      className={`group flex-shrink-0 snap-start rounded-2xl border border-gray-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 backdrop-blur-sm shadow-xl p-6 transition-transform duration-200 hover:-translate-y-1 border-t-4 ${accentColor(
        project.category
      )} w-[85vw] sm:w-auto`}
    >
      <div className="mb-4 flex h-40 items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-700/40">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="h-full w-full object-cover"
        />
      </div>

      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {project.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-indigo-100 dark:bg-indigo-500/20 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:text-indigo-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

function CarouselControls({
  scrollRef,
  label,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  label: string;
}) {
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-4 flex gap-2 md:hidden">
      <button
        onClick={() => scroll("left")}
        aria-label={`Scroll ${label} left`}
        className="rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 px-3 py-1.5 text-sm text-gray-700 dark:text-slate-300 transition-colors hover:bg-gray-100 dark:hover:bg-slate-700"
      >
        ←
      </button>
      <button
        onClick={() => scroll("right")}
        aria-label={`Scroll ${label} right`}
        className="rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 px-3 py-1.5 text-sm text-gray-700 dark:text-slate-300 transition-colors hover:bg-gray-100 dark:hover:bg-slate-700"
      >
        →
      </button>
    </div>
  );
}

function CategorySection({ category }: { category: ProjectCategory }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const items = projects.filter((p) => p.category === category);
  if (items.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        {CATEGORY_LABELS[category]}
      </h3>

      {/* Mobile: horizontal carousel */}
      <div
        ref={scrollRef}
        className="mt-6 flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible"
        role="region"
        aria-label={`${CATEGORY_LABELS[category]} carousel`}
        tabIndex={0}
      >
        {items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <CarouselControls
        scrollRef={scrollRef}
        label={CATEGORY_LABELS[category]}
      />
    </div>
  );
}

export default function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-gray-50 dark:bg-slate-900"
      aria-labelledby="projects-heading"
    >
      <div
        className={`mx-auto max-w-6xl px-6 py-24 ${
          isInView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2
          id="projects-heading"
          className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
        >
          Projects
        </h2>
        <p className="mt-4 text-gray-600 dark:text-slate-400">
          A selection of projects I&apos;ve worked on. Replace these
          placeholders with your own work.
        </p>

        {CATEGORY_ORDER.map((cat) => (
          <CategorySection key={cat} category={cat} />
        ))}
      </div>
    </section>
  );
}
