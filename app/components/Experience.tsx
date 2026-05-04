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

// Stagger container — children animate one after another
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

// Each card: clip-path wipe from left + fade up
const cardVariants = {
  hidden: { opacity: 0, y: 60, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// Number counter badge variant
const badgeVariants = {
  hidden: { scale: 0, rotate: -30 },
  visible: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
};

export default function Experience() {
  return (
    <section className="py-32 px-10 md:px-20 lg:px-24 max-w-7xl mx-auto relative">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading text-4xl md:text-6xl text-white uppercase tracking-widest mb-20"
      >
        MY <span className="text-accent">EXPERIENCE</span>
      </motion.h2>

      {/* Staggered card list */}
      <motion.div
        className="flex flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col mb-32 last:mb-0 group relative pl-12 border-l border-gray-800 hover:border-accent transition-colors duration-500 overflow-visible"
          >
            {/* Animated badge on the timeline */}
            <motion.span
              variants={badgeVariants}
              className="absolute -left-6 top-0 w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-gray-700 group-hover:border-accent flex items-center justify-center text-accent font-heading text-lg transition-colors duration-500 z-10"
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>

            <p className="text-gray-400 text-lg md:text-xl mb-2 group-hover:text-accent transition-colors duration-300">
              {exp.company}
            </p>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider font-heading leading-tight mb-4 group-hover:translate-x-3 transition-transform duration-500">
              {exp.role}
            </h3>
            <p className="text-gray-500 text-base md:text-lg font-mono">{exp.date}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
