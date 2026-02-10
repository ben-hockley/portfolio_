export type ProjectCategory = "academic" | "hackathon" | "personal";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  category: ProjectCategory;
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  academic: "Academic Projects",
  hackathon: "Hackathon Projects",
  personal: "Personal Projects",
};

export const CATEGORY_ORDER: ProjectCategory[] = [
  "academic",
  "hackathon",
  "personal",
];

const ACCENT_COLORS: Record<ProjectCategory, string> = {
  academic: "border-indigo-500",
  hackathon: "border-emerald-500",
  personal: "border-amber-500",
};

export function accentColor(category: ProjectCategory): string {
  return ACCENT_COLORS[category];
}

export const projects: Project[] = [
  {
    title: "Legal and General: Internal Communications App",
    description:
      "Website developed for client at Legal and General. Enables Employees to send messages, make and play quizzes, and report on their mood.",
    tags: ["Flask", "Bootstrap", "JavaScript", "SQLite"],
    link: "https://github.com/ben-hockley/Client-Project-Y1",
    image: "/L&G1.png",
    category: "academic",
  },
  {
    title:
      "Digital Health and Care Wales: Recruitment Managment application.",
    description:
      "Website developed for client at Digital Health and Care Wales. Can be used to manage profiles, process applications and generate reports.",
    tags: [
      "Spring Boot",
      "Spring Security",
      "JavaScript",
      "MariaDB",
      "JUnit tests",
    ],
    link: "https://github.com/ben-hockley/Client-Project-Y2",
    image: "/NHS2.png",
    category: "academic",
  },
  {
    title: "Shoutout: Celebrate team success.",
    description:
      "Hack the diff winning project developed based on problem proposal from Unifying Solutions. Enables colleagues to celebrate each other's success, and amass points to redeem prizes.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    link: "https://github.com/kaalxvairab/shoutout",
    image: "/shoutout.png",
    category: "hackathon",
  },
];
