/* TODO: Replace placeholder projects with your own */
const projects = [
  {
    title: "Project One",
    description:
      "A brief description of your project. Explain what it does, the technologies used, and what you learned.",
    tags: ["React", "TypeScript"],
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "A brief description of your project. Explain what it does, the technologies used, and what you learned.",
    tags: ["Next.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "A brief description of your project. Explain what it does, the technologies used, and what you learned.",
    tags: ["Node.js", "PostgreSQL"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-gray-900/50"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2
          id="projects-heading"
          className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
        >
          Projects
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          A selection of projects I&apos;ve worked on. Replace these
          placeholders with your own work.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              {/* TODO: Add a project screenshot or thumbnail */}
              <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
