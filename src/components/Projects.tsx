"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  projects,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
} from "@/data/projects";
import type { Project, ProjectCategory } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function ProjectCard({ project }: { project: Project }) {
  const imageSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${project.image}`;

  return (
    <motion.a
      variants={fadeUp}
      href={project.link}
      className="group flex-shrink-0 snap-start rounded-xl border border-accent/15 bg-white dark:bg-dark-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(0,212,200,0.1)] w-[85vw] sm:w-auto"
    >
      <div className="mb-4 flex h-40 items-center justify-center overflow-hidden rounded-lg bg-[#f0f5f7] dark:bg-dark-surface">
        <img
          src={imageSrc}
          alt={`Screenshot of ${project.title}`}
          className="h-full w-full object-cover"
        />
      </div>

      <h4 className="text-lg font-semibold text-[var(--text)] group-hover:text-accent transition-colors">
        {project.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent border border-accent/25"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
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
        className="rounded-full border border-accent/25 bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--text-muted)] transition-colors hover:border-accent/50 hover:text-accent"
      >
        ←
      </button>
      <button
        onClick={() => scroll("right")}
        aria-label={`Scroll ${label} right`}
        className="rounded-full border border-accent/25 bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--text-muted)] transition-colors hover:border-accent/50 hover:text-accent"
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
      <h3 className="font-syne text-2xl font-bold text-[var(--text)]">
        {CATEGORY_LABELS[category]}
      </h3>

      {/* Mobile: horizontal carousel */}
      <motion.div
        ref={scrollRef}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible"
        role="region"
        aria-label={`${CATEGORY_LABELS[category]} carousel`}
        tabIndex={0}
      >
        {items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>

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
      className="bg-[var(--bg)]"
      aria-labelledby="projects-heading"
    >
      <div
        className={`mx-auto max-w-6xl px-6 py-24 ${
          isInView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2
          id="projects-heading"
          className="font-syne text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl"
        >
          Projects
        </h2>
        <div className="mt-3 mb-8 h-1 w-12 rounded-full bg-accent" />
        <p className="text-[var(--text-muted)]">
          A selection of projects I&apos;ve worked on.
        </p>

        {CATEGORY_ORDER.map((cat) => (
          <CategorySection key={cat} category={cat} />
        ))}
      </div>
    </section>
  );
}
