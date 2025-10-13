import { PersonalInfo, ProjectData } from "@/types/data.types";

export const personalInfo: PersonalInfo = {
  name: "Leovin",
  title: "Software Engineer",
  email: "leovin.huang@gmail.com",
  github: "https://github.com/leovin98",
  linkedin: "https://www.linkedin.com/in/leovin-huang/",
  location: "Bali, Indonesia",
  bio: "Passionate about clean code, problem solving, and continuous learning.",
};

export const projects: ProjectData[] = [
  {
    name: "My Terminal",
    type: ["Portfolio", "Web"],
    github: "https://github.com/leovin98",
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Go", "SQL", "PHP"],
  frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML", "CSS"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Vercel", "Figma", "VS Code"],
};
