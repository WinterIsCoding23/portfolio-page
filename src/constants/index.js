import placeholder from "../assets/placeholder.svg";
import {
  css,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  threejs,
  typescript,
} from "../assets/index";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const roles = [
  {
    title: "Full Stack ",
    icon: placeholder,
  },
  {
    title: "Project Manager",
    icon: placeholder,
  },
  {
    title: "Digital Creative",
    icon: placeholder,
  },
  {
    title: "Content Creator",
    icon: placeholder,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export { navLinks, roles, technologies };
