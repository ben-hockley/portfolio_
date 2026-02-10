"use client";

import { useInView } from "@/hooks/useInView";
import { 
  SiReact, 
  SiJavascript, 
  SiPython, 
  SiBootstrap,  
  SiDocker, 
  SiGit, 
  SiSharp, 
  SiLinux, 
  SiNodedotjs,
  SiJenkins,
  SiFlask,
  SiNextdotjs,
  SiFastapi,
  SiPostgresql,
  SiKotlin,
  SiTypescript,
  SiKubernetes,
  SiSpring,
  SiMariadb,
  SiDotnet,
  SiTailwindcss
} from "react-icons/si";
import { 
  DiAndroid,
  DiJava
 } from "react-icons/di";
 import { TbBrandCSharp } from "react-icons/tb";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
}

const skills: Skill[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "Flask", icon: SiFlask },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Java", icon: DiJava },
  { name: "Spring Boot", icon: SiSpring },
  { name: "C#", icon: TbBrandCSharp },
  { name: ".NET", icon: SiDotnet },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Android", icon: DiAndroid },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MariaDB", icon: SiMariadb },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Jenkins", icon: SiJenkins },
  { name: "Git", icon: SiGit },
  { name: "Linux", icon: SiLinux },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Tailwind", icon: SiTailwindcss}
];

function SkillCard({ skill }: { skill: Skill }) {
  const IconComponent = skill.icon;
  return (
    <div className="flex flex-col items-center gap-2 px-8">
      <IconComponent
        className="text-accent"
        style={{ width: "3rem", height: "3rem" }}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap text-sm font-medium text-[var(--text-muted)]">
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
      className="bg-[var(--surface)] dark:bg-dark-surface"
      aria-labelledby="skills-heading"
    >
      <div
        className={`mx-auto max-w-6xl px-6 py-24 ${
          isInView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2
          id="skills-heading"
          className="font-syne text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl"
        >
          Skills &amp; Technologies
        </h2>
        <div className="mt-3 mb-8 h-1 w-12 rounded-full bg-accent" />

        {/* Infinite marquee */}
        <div
          className="relative mt-10 overflow-hidden"
          aria-label="Skills marquee"
          role="region"
          aria-live="off"
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--surface)] dark:from-dark-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--surface)] dark:from-dark-surface to-transparent" />

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
