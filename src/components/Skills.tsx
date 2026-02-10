import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJs, faReact, faBootstrap, faAndroid, faDocker, faGit, faJava, faLinux, faMicrosoft, faNodeJs} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Skill {
  name: string;
  icon: IconDefinition;
}

const skills: Skill[] = [
  { name: "React", icon: faReact },
  { name: "JavaScript", icon: faJs },
  { name: "Python", icon: faPython },
  { name: "Bootstrap", icon: faBootstrap },
  { name: "Android", icon: faAndroid },
  { name: "Docker", icon: faDocker },
  { name: "Git", icon: faGit },
  { name: "Java", icon: faJava },
  { name: "C#", icon: faMicrosoft },
  { name: "Linux", icon: faLinux },
  { name: "Node.js", icon: faNodeJs },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/25 hover:bg-accent/20 transition-colors"
    >
      <FontAwesomeIcon
        icon={skill.icon}
        className="text-accent"
        style={{ width: "1.25rem", height: "1.25rem" }}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap text-sm font-medium tracking-wide">
        {skill.name}
      </span>
    </motion.div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center gap-2 px-8">
      <FontAwesomeIcon
        icon={skill.icon}
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

        {/* Skill badges grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </motion.div>

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
