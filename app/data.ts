import {
  Github,
  Linkedin,
  Mail,
  Code,
  Globe,
  Database
} from "lucide-react";

export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/JashDolar09",
    label: "GitHub",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jash-Dolar-88a06b1a9/",
    label: "LinkedIn",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: Mail,
    href: "mailto:jashdolar@gmail.com",
    label: "Email",
    color: "from-red-500 to-pink-600",
  },
];

export const skillsData = [
  { name: "ReactJS", image: "/image/React.js.png" },
  { name: "NodeJS", image: "/image/Node.js.png" },
  { name: "NextJS", image: "/image/next-js.png" },
  { name: "JavaScript", image: "/image/JS.png" },
  { name: "HTML5", image: "/image/HTML 5.png" },
  { name: "CSS3", image: "/image/CSS.png" },
  { name: "Bootstrap", image: "/image/Bootstrap.png" },
  { name: "Python", image: "/image/Python.png" },
  { name: "Java", image: "/image/Java.png" },
  { name: "Flask", image: "/image/Flask.png" },
  { name: "REST APIs", image: "/image/Rest API.png" },
  { name: "MongoDB", image: "/image/mongodb.png" },
  { name: "MySQL", image: "/image/mySQL.png" },
  { name: "Git", image: "/image/git.png" },
  { name: "GitHub", image: "/image/Github.png" },
  { name: "Shopify", image: "/image/shopify.png" },
  { name: "Netlify", image: "/image/netlify.png" },
  { name: "Canva", image: "/image/canva.png" },
];

export const educationData = [
  {
    name: "Uka Tarsadia University (Maliba Campus)",
    degree: "B.Tech in Computer Science Engineering",
    year: "2022 - 2026",
    image: "/image/UTU_Clg_1.png",
    hoverImage: "/image/UTU_Clg_2.png",
  },
  {
    name: "S.V Public School",
    degree: "Higher Secondary Certificate (HSC)",
    year: "2020 - 2022",
    image: "/image/S.V_public_school.png",
  },
  {
    name: "Sunrise Vidyalaya",
    degree: "Secondary School Certificate (SSC)",
    year: "2018 - 2020",
    image: "/image/Sunrise school.jpg",
  },
];

export const projectsData = [
  {
    title: "To-Do App",
    description:
      "A React-based to-do application designed for managing daily tasks, featuring a clean interface that helps users stay organized and productive.",
    gradient: "from-green-400 to-blue-500",
    icon: Code,
    image: "/image/To-Do App_Project.png",
    tags: ["JavaScript", "React", "Public"],
    live: "https://to-do-listtracker.netlify.app/",
    github: "https://to-do-listtracker.netlify.app/",
  },
  {
    title: "Image Converter Site",
    description: "PicShift is a free online tool to convert images between formats like PNG, JPG, and WebP.",
    gradient: "from-blue-400 to-purple-500",
    icon: Globe,
    image: undefined,
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    live: "https://picshift.netlify.app/",
    github: "https://picshift.netlify.app/",
  },
  {
    title: "DSC Management Site",
    description:
      "The site is live, managing DSC history, client and user data, and admin roles. A payment method has been added for transactions with firms and companies.",
    gradient: "from-orange-400 to-red-500",
    icon: Database,
    image: "/image/FindMyDSC_Project.png",
    tags: ["JavaScript", "API", "Real-time"],
    live: "https://www.findmydsc.in/",
    github: "https://www.findmydsc.in/",
  },
  {
    title: "Parnika India",
    description:
      "A comprehensive digital catalog for a premium Indian ethnic wear manufacturer with programmatic SEO, dynamic routing for 100+ cities, and WhatsApp lead generation.",
    gradient: "from-teal-400 to-emerald-500",
    icon: Globe,
    image: "/image/Parnika_Project.png",
    tags: ["Next.js", "React 19", "SEO", "TypeScript"],
    live: "https://parnikaindia.com/",
    github: "https://github.com/JashDolar09/parnika_nextjs",
  },
  {
    title: "Parvati Ethnics",
    description:
      "A modern web application showcasing premium Indian ethnic wear. Features reactive micro-animations and advanced technical SEO to establish brand authority.",
    gradient: "from-rose-400 to-red-500",
    icon: Globe,
    image: "/image/Parvati_project.png",
    tags: ["Next.js", "React", "Frontend SEO"],
    live: "https://parvatiethnics.com/",
    github: "https://github.com/Kiranpokharkar2003/Parvati_Fabric_Website/tree/main/frontend",
  },
];
