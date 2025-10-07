import { PersonalInfo, ProjectData } from "@/types/data.types";

export const personalInfo: PersonalInfo = {
  name: "Leovin",
  title: "Software Engineer",
  email: "leovin.huang@gmail.com",
  github: "https://github.com/leovin98",
  linkedin: "https://www.linkedin.com/in/leovin-huang/",
  location: "Bali, Indonesia",
  bio: "Passionate developer with expertise in modern web technologies. I love creating elegant solutions to complex problems and building user-centric applications.",
};

export const projects: ProjectData[] = [
  {
    name: "My Terminal",
    type: ["Portfolio", "Web"],
    github: "https://github.com/",
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Go", "SQL", "PHP"],
  frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML", "CSS"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Vercel", "Figma", "VS Code"],
};
