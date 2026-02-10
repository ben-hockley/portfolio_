"use client";

import { useInView } from "@/hooks/useInView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Skill {
  name: string;
  icon: IconDefinition;
}

const skills: Skill[] = [
  { name: "React", icon: faReact },
  { name: "JavaScript", icon: faJs },
  { name: "TypeScript", icon: faCode },
  { name: "Python", icon: faPython },
  { name: "C#", icon: faCode },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center gap-2 px-8">
      <FontAwesomeIcon
        icon={skill.icon}
        className="text-indigo-400"
        style={{ width: "3rem", height: "3rem" }}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap text-sm font-medium text-slate-300">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      className="bg-slate-800"
      aria-labelledby="skills-heading"
    >
      <div
        className={`mx-auto max-w-6xl px-6 py-24 ${
          isInView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2
          id="skills-heading"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Skills &amp; Technologies
        </h2>

        {/* Infinite marquee */}
        <div
          className="relative mt-10 overflow-hidden"
          aria-label="Skills marquee"
          role="region"
          aria-live="off"
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-800 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-800 to-transparent" />

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* Duplicate list for seamless loop */}
            {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
              <SkillCard key={`${skill.name}-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
