// ─────────────────────────────────────────────
//  Portfolio Data — edit everything here
// ─────────────────────────────────────────────

export const personal = {
  name: "Alejandro Amor Rico",
  role: "Web Developer",
  tagline: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
  yearsOfExperience: 1,
  projectsCompleted: 18,
  worldwideClients: 8,
  // Replace with your actual photo URL or a local import
  photo: "https://res.cloudinary.com/deydlxlap/image/upload/v1779622662/IMG_20250302_200253_kujehy.jpg",
  email: "amorricoalejandro@gmail.com",
  github: "https://github.com/AlexSfc04",
  linkedin: "https://linkedin.com/in/alejandro-amor-rico-554119319",
};

export const projects = [
  {
    id: 1,
    title: "Studios Web Sites",
    year: "2026",
    tags: ["React", "Node.js", "CSS"],
    github: "https://github.com/AlexSfc04/StudiosWebSites.git",
    demo: "https://studioswebsites.com",
    image: "https://res.cloudinary.com/deydlxlap/image/upload/v1779635031/Captura_de_pantalla_2026-05-24_170139_qrgfa4.png",
  },
  {
    id: 2,
    title: "Fury of Thor",
    year: "2025",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/alcmanuel12/fury-of-thor.git",
    demo: "https://fury-rouge.vercel.app/",
    image: "https://res.cloudinary.com/deydlxlap/image/upload/v1779635970/Captura_de_pantalla_2026-05-24_171839_sbdd2l.png",
  },
  {
    id: 3,
    title: "Cyber-Tasks",
    year: "2025",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AlexSfc04/CYBER_TASK.git",
    demo: "https://cyber-task-v2.vercel.app/",
    image: "https://res.cloudinary.com/deydlxlap/image/upload/v1779636408/Captura_de_pantalla_2026-01-07_190654_ssvp0p.png",
  },
];

export const experience = [
  {
    company: "Ayesa",
    role: "Web Development Intern",
    period: "Dec 2024 – Present",
    desc: "Web application development in a corporate environment, working with JSP, Java, Oracle SQL and PL/SQL stored procedures.",
    url: "https://www.ayesa.com",
  },
  {
    company: "Ayuntamiento de Villaverde del Río",
    role: "IT Systems & Networks Technician", 
    period: "Mar 2023 – Jun 2023",
    desc: "Maintenance and technical support of computer systems and networks in a public sector environment.",
    url: "#",
  },
];

export const tools = [
  { name: "React", category: "Framework", url: "https://react.dev" },
  { name: "Figma", category: "Design Tool", url: "https://figma.com" },
  { name: "ChatGpt", category: "AI Assistant", url: "https://chatgpt.com/" },
  { name: "Tailwind CSS", category: "CSS Framework", url: "https://tailwindcss.com" },
  { name: "VS Code", category: "Code Editor", url: "https://code.visualstudio.com" },
  { name: "GitHub", category: "Version Control", url: "https://github.com" },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Tools", to: "/tools" },
];
