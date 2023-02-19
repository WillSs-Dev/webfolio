import getImages from "../utils/getImages";

export const projects = [
  {
    name: "MKS's Store",
    thumbnail: "https://i.ibb.co/Vm6HJRp/Screenshot-4.png",
    skills: ["react", "redux", "styled-components"],
    url: "https://mks-store.netlify.app/",
  },
  {
    name: "Gaming Space",
    thumbnail: "https://i.ibb.co/445Mwf0/Screenshot-5.png",
    skills: ["react", "redux", "mui", "react-router-dom"],
    url: "https://gaming-space.netlify.app/",
  },
  {
    name: "Pixel Art Canvas",
    thumbnail: "https://i.ibb.co/7zG04Wz/Screenshot-6.png",
    skills: ["html", "css", "javascript"],
    url: "https://willss-dev.github.io/pixel-art-canvas/",
  },
];

export const forntEndSkills = [
  {
    name: "HTML",
    icon: getImages["html"],
  },
  {
    name: "CSS",
    icon: getImages["css"],
  },
  
  {
    name: "React",
    icon: getImages["react"],
  },
  {
    name: "Material UI",
    icon: getImages["mui"],
  },
  {
    name: "Styled Components",
    icon: getImages["styled-components"],
  },
  {
    name: "Bootstrap",
    icon: getImages["bootstrap"],
  },
  {
    name: "Tailwind",
    icon: getImages["tailwind"],
  },
  {
    name: "Redux",
    icon: getImages["redux"],
  },
  {
    name: "React Router DOM",
    icon: getImages["react-router-dom"],
  },
];

export const backEndSkills = [
  {
    name: "Node.JS",
    icon: getImages["node"],
  },
  {
    name: "Express",
    icon: getImages["express"],
  },
  {
    name: "MongoDB",
    icon: getImages["mongodb"],
  },
  {
    name: "Mongoose",
    icon: getImages["mongoose"],
  },
  {
    name: "MySQL",
    icon: getImages["mysql"],
  },
  {
    name: "Sequelize",
    icon: getImages["sequelize"],
  },
]

export const sections = [
  {
    name: "ABOUT ME",
    ref: "#about-me",
    start: 0,
    end: 350,
  },
  {
    name: "PROJECTS",
    ref: "#projects",
    start: 350,
    end: 700,
  },
  {
    name: "SKILLS",
    ref: "#skills",
    start: 700,
    end: 1000,
  },
  {
    name: "CONTACT ME",
    ref: "#contact-me",
    start: 1000,
    end: 1244,
  },
];
