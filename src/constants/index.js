import {
  resume,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "cv",
    title: "Resume",
    pdfUrl:resume,
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Cloud Developer",
    icon: mobile,
  },
  {
    title: "C# Developer",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];
/*
Comprehensive drone tech understanding, including components and functionalities.
Hands-on with drone software, AI-driven autonomy, and GIS integration.
Collaborated within a team, honing communication and problem-solving skills.
Explored real-world drone business applications and challenges.
*/
const experiences = [
  {
    title: "Software Developer",
    company_name: "Airos",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2023 - December 2023",
    points: [
      "Hands-on with drone software, AI-driven autonomy, and GIS integration.",
      "Collaborated within a team, honing communication and problem-solving skills.",
      "Implementing responsive design and ensuring On-Field compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
    "Arivarasan A excels in AI and DS, demonstrating deep understanding and commitment to excellence. His analytical skills and passion make him an outstanding student. I believe his capabilities will significantly contribute to any software development team.",
    name: "Acacdemic Mentor",
    designation: "Assistant Proffessor",
    company: "Chennai Institute of Technology",
  
  },
  {
    testimonial:
    "Collaborating with Arivarasan A was a pleasure. His coding prowess, attention to detail, and collaborative spirit stood out. His seamless integration of theoretical knowledge with practical implementation makes him an asset to any development team. Highly recommend for dedication and technical acumen.",
    name: "Colleague",
    designation: "Developer",
    company: "Airosspace R&D",
  },
  {
    testimonial:
    "In coding competitions, Arivarasan A showcased exceptional problem-solving skills and adaptability. His enthusiasm for challenges and solid grasp of algorithms set him apart. His performance reflects both technical prowess and determination to excel. I confidently endorse him as a promising Software Development Engineer.",
    name: "Organizer",
    designation: "Manger of unstop",
    company: "Unstop",
  },
];

const projects = [
  {
    name: "GCS Customization",
    description:
      "Customized open-source GCS named Mission Planner, rebranded, and expanded functionality, enhancing usability and features while maintaining the original framework's benefits.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Dotnet",
        color: "green-text-gradient",
      },
      {
        name: "gcs",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Artificialvira/SAE_Airos_GCS",
  },
  {
    name: "Hospital Management System",
    description:
      "Hospitals on autopilot? My ASP.NET Core symphony makes it real. Appointments sing, records waltz, and patient care takes center stage. Staff dances with efficiency, while patients groove to seamless check-ins. Healthcare harmony, conducted by code.",
    tags: [
      {
        name: "Asp.net",
        color: "blue-text-gradient",
      },
      {
        name: "Webapp",
        color: "green-text-gradient",
      },
      {
        name: "SQLServer",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Artificialvira/HospitalManagementSystem",
  },
  {
    name: "Mission Nothing",
    description:
      "Created the dynamic shooting game 'Mission Nothing' in Visual Studio Forms, featuring graphics with PicatureBox and game mechanics using Timer, and incorporated SQL for efficient player data storage, demonstrating skills in game development, UI design, and database integration.",
    tags: [
      {
        name: "Windows Application",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Dotnet",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Artificialvira/Mission-Nothing",
  },
];

export { services, technologies, experiences, testimonials, projects };
