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

/* TODO: Replace placeholder projects with your own */
export const projects: Project[] = [
  {
    title: "Legal and General: Internal Communications App",
    description:
      "Website developed for client at Legal and General. Enables Employees to send messages, make and play quizzes, and report on their mood.",
    tags: ["Flask", "Bootstrap", "JavaScript", "SQLite"],
    link: "https://github.com/ben-hockley/Client-Project-Y1",
    image:
      "https://private-user-images.githubusercontent.com/151195798/455966931-9cf72ff1-cbdc-4ee7-886f-5acb7f25234a.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzA3MTk0MTIsIm5iZiI6MTc3MDcxOTExMiwicGF0aCI6Ii8xNTExOTU3OTgvNDU1OTY2OTMxLTljZjcyZmYxLWNiZGMtNGVlNy04ODZmLTVhY2I3ZjI1MjM0YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIxMFQxMDI1MTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05N2VkNTliMDNhNGQzZGY5Yzg2NWE1NTdiNDg1NzdlZDhmY2U5NDE4MzNhMjM3YjZkNzhiODAwNzE1NDJkNmQ3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.cPlQqin1uE9GUgZIXNdeCOu_ywrjrVxAxxmgjyaf6cc",
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
    image:
      "https://private-user-images.githubusercontent.com/151195798/455963183-b8bfea24-363a-4ff1-9fdc-d3b953bb27dd.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzA3MTk4ODIsIm5iZiI6MTc3MDcxOTU4MiwicGF0aCI6Ii8xNTExOTU3OTgvNDU1OTYzMTgzLWI4YmZlYTI0LTM2M2EtNGZmMS05ZmRjLWQzYjk1M2JiMjdkZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIxMFQxMDMzMDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYjFkMTI0NjQ4Mzc5NjU4N2QyYWNiMzZkYTMxNDFjZjEyN2ZhZjRlOGZkMWVlMTA0MDJlNDZkMmFlZDhjY2Q4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.fzb7WeTmP9pZKlVUuC-9dLf0mM8FzhjbDr-sAUD3xe0",
    category: "academic",
  },
  {
    title: "Shotout",
    description:
      "Hackathon winning project developed for Unifying Solutions. Enables colleagues to celebrate each other's success, and amass points to redeem prizes.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    link: "https://github.com/kaalxvairab/shoutout",
    image:
      "https://private-user-images.githubusercontent.com/151195798/546619659-2d0b6cbf-cc2b-4e59-acc1-0da6f9a6fd02.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzA3MjAyNzcsIm5iZiI6MTc3MDcxOTk3NywicGF0aCI6Ii8xNTExOTU3OTgvNTQ2NjE5NjU5LTJkMGI2Y2JmLWNjMmItNGU1OS1hY2MxLTBkYTZmOWE2ZmQwMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIxMFQxMDM5MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMDZiMjY4NDA1ZDIzYTMwOGM4ZDUyNWY1MWRkM2I5N2M5MTQ5MWE5MTY5YTA5NjYyOTUwNGI0ZDBkMDg5ZTk2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.NFz6aqcknvFcP0MXvXbtO32-xggEUbJyGqBza2ZUgRI",
    category: "hackathon",
  },
];
