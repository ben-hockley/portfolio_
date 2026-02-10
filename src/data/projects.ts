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
    image: "https://blacklioninsurance.co.uk/wp-content/uploads/2023/11/legal-and-general-2023.jpg",
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
    image: "https://emedia1.nhs.wales/HEIW2/cache/file/2BA1FC30-611C-4CC6-A367B65BCEC88E0B.png",
    category: "academic",
  },
  {
    title: "Shoutout: Celebrate team success.",
    description:
      "Hack the diff winning project developed based on problem proposal from Unifying Solutions. Enables colleagues to celebrate each other's success, and amass points to redeem prizes.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    link: "https://github.com/kaalxvairab/shoutout",
    image: "https://private-user-images.githubusercontent.com/151195798/546618375-cac94d22-631b-4cc1-bb2d-9c998998b6d4.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzA3NTMzNDgsIm5iZiI6MTc3MDc1MzA0OCwicGF0aCI6Ii8xNTExOTU3OTgvNTQ2NjE4Mzc1LWNhYzk0ZDIyLTYzMWItNGNjMS1iYjJkLTljOTk4OTk4YjZkNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIxMFQxOTUwNDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMGRjYTc3MWJiYzkyOGYyNzA4NzUyZmU3NjcyZGI0YmE1NWY4NDdjNWU3YWZmYWRjZjA5Yjc2MWM5YjdjMGY4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.8EgfthAm7hV4t3Ha66K1vwQ8WbUv6A1wx_zzDvKY-10",
    category: "hackathon",
  },
];
