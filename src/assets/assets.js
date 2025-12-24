import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from './profile.avif';
import projectImg1 from './project1.avif';
import projectImg2 from './project2.avif';
import projectImg3 from './project3.avif';
import projectImg4 from './project4.avif';
import projectImg5 from './project5.avif';
import projectImg6 from './project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
  {
    icon: FaServer,
    title: 'Full-Stack Thinking',
    description:
      'I design features end-to-end, from React UI to Node.js APIs and MongoDB data models, not just isolated screens.',
     color: 'text-blue'
  },
  {
    icon: FaLightbulb,
    title: 'Problem Solver',
    description:
      'I break down real problems, debug systematically, and build solutions that work in practice—not just in demos.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design-Focused UI',
    description:
      'I build responsive, user-friendly interfaces where layout, spacing, and usability matter as much as functionality.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean & Scalable Code',
    description:
      'I write readable, maintainable code using modern MERN best practices so projects are easy to extend and scale.',
    color: 'text-blue'
  }
];



export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description: "Building responsive and interactive user interfaces using modern frontend technologies.",
    tags: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React.js"
    ]
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Developing RESTful APIs with authentication and server-side logic.",
    tags: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication"
    ]
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description: "Designing and managing databases for application data storage.",
    tags: [
      "MongoDB",
      "SQL",
      "CRUD Operations"
    ]
  },
  {
    title: "Automation & APIs",
    icon: FaCloud,
    description: "Building automation workflows and integrating third-party APIs.",
    tags: [
      "n8n",
      "Webhooks",
      "API Integration",
      "Workflow Automation"
    ]
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description: "Tools I use for development, testing, and collaboration.",
    tags: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Docker"
    
    ]
  }
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaCode],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    icons: [FaCode, FaFire, FaCloud, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts, nutrition, and health metrics.",
    image: projectImg3,
    tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Food Website",
    description: "A fully responsive food website designed for seamless browsing across mobile, tablet, and desktop .",
    image: projectImg4,
    tech: ["HTML", "CSS"],
    icons: [FaReact, FaCloud],
    demo: "https://foodmunchgeetha.ccbp.tech/",
    code: "https://github.com/geetha925/foodmunch",
  },
  {
    title: "Netflix UI Clone",
    description: "A responsive Netflix UI clone replicating the core layout, styling, and browsing experience across devices.",
    image: projectImg5,
    tech: ["HTML", "CSS"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://movieclonee.ccbp.tech/",
    code: "https://github.com/geetha925/movie_appuiclone",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
