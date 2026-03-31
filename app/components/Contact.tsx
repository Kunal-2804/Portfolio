"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-32 px-10 md:px-20 lg:px-24 max-w-7xl mx-auto border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-30% 0px -30% 0px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center gap-12"
      >
        <h2 className="font-heading text-6xl md:text-8xl lg:text-[10rem] text-white leading-none tracking-tight">
          HAVE A <br/> <span className="text-accent">PROJECT</span>?
        </h2>
        
        <a 
          href="mailto:kunalkhindevgawande@gmail.com"
          className="group relative inline-flex items-center gap-4 text-2xl md:text-4xl text-gray-300 font-heading tracking-widest hover:text-white transition-colors duration-300"
        >
          LET'S TALK 
          <span className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center group-hover:scale-110 group-hover:translate-x-2 transition-transform duration-300">
            <ArrowRight />
          </span>
        </a>
      </motion.div>

      <div className="mt-32 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 font-mono text-sm tracking-widest">© {new Date().getFullYear()} KUNAL GAWANDE</p>
        
        <div className="flex gap-6">
          <a href="https://github.com/Kunal-2804" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors duration-300">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kunalgawande28" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:kunalkhindevgawande@gmail.com" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors duration-300">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
