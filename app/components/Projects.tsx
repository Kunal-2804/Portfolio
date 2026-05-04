"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TRIPSATHI",
    description: "A comprehensive trip planning platform providing detailed itineraries and destination information.",
    year: "2026",
    role: "Developer",
    link: "https://tripsathi-kg.vercel.app/",
  },
  {
    title: "JOB APPLICATION TRACKER",
    description: "A comprehensive MERN stack application for tracking job applications.",
    year: "2025",
    role: "Full Stack Developer",
    link: "https://github.com/Kunal-2804/Job-Tracker",
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-10 md:px-20 lg:px-24 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading text-4xl md:text-6xl text-white mb-16"
      >
        SELECTED <span className="text-accent">PROJECTS</span>
      </motion.h2>

      {/* Project list — staggered row wipe */}
      <motion.div
        className="flex flex-col border-t border-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            custom={index}
            variants={rowVariants}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block border-b border-gray-800 py-10 transition-all duration-500 hover:px-6"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1,
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
            <div className="absolute inset-0 bg-accent/5 -z-10 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
