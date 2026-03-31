"use client";

import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, 
  SiHtml5, SiCss, SiFramer, SiExpress, SiMongodb, 
  SiPostgresql, SiFirebase, SiPostman 
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss /> },
      { name: "Framer Motion", icon: <SiFramer /> }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <FaFigma /> }
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-30% 0px -30% 0px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-heading text-4xl md:text-6xl text-white mb-16">
          TECH <span className="text-accent">STACK</span>
        </h2>

        <div className="flex flex-col gap-12">
          {skillsData.map((skillGroup, index) => (
             <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 border-b border-gray-800 pb-12 last:border-0 last:pb-0">
               <div className="md:w-1/4">
                 <h3 className="text-3xl font-bold text-white mb-4 tracking-wide font-heading">{skillGroup.category}</h3>
               </div>
               <div className="md:w-3/4 flex flex-wrap gap-4">
                 {skillGroup.items.map((skill) => (
                   <motion.div
                     key={skill.name}
                     whileHover={{ scale: 1.05, y: -5 }}
                     className="flex items-center gap-3 px-6 py-4 border border-gray-800 rounded-xl bg-[#111] text-gray-300 hover:border-accent hover:text-white transition-all duration-300 shadow-md group"
                   >
                     <span className="text-2xl text-gray-500 group-hover:text-accent transition-colors duration-300">{skill.icon}</span>
                     <span className="font-mono text-sm tracking-wide">{skill.name}</span>
                   </motion.div>
                 ))}
               </div>
             </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
