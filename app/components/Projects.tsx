"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "JOB APPLICATION TRACKER",
    description: "A comprehensive MERN stack application for tracking job applications.",
    year: "2024",
    role: "Full Stack Developer",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 lg:px-24 max-w-7xl mx-auto">
       <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-30% 0px -30% 0px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-heading text-4xl md:text-6xl text-white mb-16">
          SELECTED <span className="text-accent">PROJECTS</span>
        </h2>
        
        <div className="flex flex-col border-t border-gray-800">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative border-b border-gray-800 py-10 transition-all duration-500 hover:px-6 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1
              }}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                <div className="flex flex-col">
                  <h3 className="text-3xl md:text-5xl font-heading tracking-wide text-white group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-2 max-w-xl text-lg">{project.description}</p>
                </div>
                
                <div className="flex items-center gap-8 text-gray-400">
                  <span className="font-mono text-sm uppercase tracking-widest">{project.role}</span>
                  <span className="font-mono text-sm text-accent">{project.year}</span>
                  <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent" />
                </div>
              </div>
              <div className="absolute inset-0 bg-accent/5 -z-10 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
