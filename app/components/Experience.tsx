"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Product Designer",
    company: "SAMBHAV AI & TECH SERVICES",
    date: "Apr 2025 - Present",
  },
  {
    role: "Software Dev Intern",
    company: "ReactorBee",
    date: "Dec 2024 - Apr 2025",
  },
  {
    role: "Campus Ambassador",
    company: "E-Cell, IIT Bombay",
    date: "Aug 2024 - Dec 2024",
  },
];

export default function Experience() {
  return (
    <section className="py-32 px-10 md:px-20 lg:px-24 max-w-7xl mx-auto relative">
      <div className="flex items-center gap-4 mb-32">
        <h2 className="font-heading text-4xl md:text-6xl text-white uppercase tracking-widest">
          MY <span className="text-accent">EXPERIENCE</span>
        </h2>
      </div>

      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-30% 0px -30% 0px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col mb-32 last:mb-0"
          >
            <p className="text-gray-400 text-lg md:text-xl mb-2">{exp.company}</p>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider font-heading leading-tight mb-4">
              {exp.role}
            </h3>
            <p className="text-gray-400 text-base md:text-lg">{exp.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
