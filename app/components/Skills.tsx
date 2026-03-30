"use client";

import { motion } from "framer-motion";

const skills = [
  "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", 
  "Tailwind CSS", "HTML5/CSS3", "Framer Motion", "Git/GitHub", 
  "RESTful APIs", "Java", "Product Design", "Figma"
];

export default function Skills() {
  return (
    <section className="py-32 px-6 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-4xl md:text-6xl text-white mb-16 text-right">
          TECH <span className="text-accent">STACK</span>
        </h2>

        <div className="flex flex-wrap justify-end gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-6 py-4 border border-gray-800 rounded-lg bg-[#111] text-gray-300 hover:border-accent hover:text-white transition-colors duration-300 shadow-md inset-0"
            >
              <span className="font-mono text-lg">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
