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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const badgeVariants = {
  hidden: { scale: 0, rotate: -30 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.1 },
  },
};

export default function Experience() {
  return (
    <section className="py-32 px-10 md:px-20 lg:px-24 max-w-7xl mx-auto">

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

      {/* Staggered list */}
      <motion.div
        className="flex flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex gap-8 mb-24 last:mb-0 group"
          >
            {/* Left column: badge + connecting line */}
            <div className="flex flex-col items-center flex-shrink-0">
              {/* Badge */}
              <motion.div
                variants={badgeVariants}
                className="w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-gray-700 group-hover:border-accent flex items-center justify-center text-accent font-heading text-lg transition-colors duration-500 z-10 flex-shrink-0"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>
              {/* Connecting line (hidden on last item) */}
              {index < experiences.length - 1 && (
                <div className="w-[2px] flex-1 mt-3 bg-gray-800 group-hover:bg-accent/30 transition-colors duration-500 min-h-[80px]" />
              )}
            </div>

            {/* Right column: content */}
            <div className="flex flex-col pb-4">
              <p className="text-gray-400 text-lg md:text-xl mb-2 group-hover:text-accent transition-colors duration-300">
                {exp.company}
              </p>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider font-heading leading-tight mb-4 group-hover:translate-x-3 transition-transform duration-500">
                {exp.role}
              </h3>
              <p className="text-gray-500 text-base md:text-lg font-mono">{exp.date}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
