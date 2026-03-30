"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Product Designer",
    company: "SAMBHAV AI & TECH SERVICES",
    date: "Apr 2025 - Present",
    type: "On-site, Nagpur",
    skills: "Graphic Design, Product Design",
  },
  {
    role: "Software Development Intern",
    company: "ReactorBee",
    date: "Dec 2024 - Apr 2025",
    type: "Remote",
    skills: "Java Development, Software Infrastructure",
  },
  {
    role: "Campus Ambassador",
    company: "E-Cell, IIT Bombay",
    date: "Aug 2024 - Dec 2024",
    type: "Remote",
    skills: "Leadership, Community Management",
  },
];

export default function Experience() {
  return (
    <section className="py-32 px-6 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-4xl md:text-6xl text-white mb-16">
          MY <span className="text-accent">EXPERIENCE</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 relative group">
              <div className="w-16 h-16 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center flex-shrink-0 relative z-10 group-hover:border-accent group-hover:bg-accent/10 transition-colors duration-500">
                <Briefcase className="text-white" size={24} />
              </div>
              
              {/* Timeline connecting line */}
              {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute left-8 top-16 bottom-[-3rem] w-[1px] bg-gray-800 group-hover:bg-accent/50 transition-colors duration-500 z-0"></div>
              )}

              <div className="flex-1 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors duration-300">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-white tracking-wide">{exp.role}</h3>
                  <span className="text-accent font-mono text-sm bg-accent/10 px-4 py-2 rounded-full border border-accent/20 w-fit">{exp.date}</span>
                </div>
                <h4 className="text-xl text-gray-300 mb-2">{exp.company}</h4>
                <p className="text-gray-500 mb-6">{exp.type}</p>
                <div className="flex gap-2 flex-wrap">
                  {exp.skills.split(",").map(skill => (
                    <span key={skill.trim()} className="px-3 py-1 bg-black/50 border border-gray-800 text-gray-400 text-sm rounded-full">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
