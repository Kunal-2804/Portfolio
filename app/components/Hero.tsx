"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[auto] flex flex-col justify-start pt-28 pb-16 px-10 md:px-20 xl:px-24 xl:min-h-screen xl:justify-center xl:py-0">
      <div className="max-w-7xl mx-auto w-full flex flex-col xl:flex-row justify-between items-center gap-12">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-heading text-6xl md:text-8xl xl:text-[10rem] text-accent uppercase tracking-wider leading-none">
              FULLSTACK
            </h1>
            <h1 className="font-heading text-6xl md:text-8xl xl:text-[10rem] text-white uppercase tracking-wider leading-none mt-[-3px] md:mt-[-6px] xl:mt-[-10px]">
              DEVELOPER
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="mt-8 max-w-2xl"
          >
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Hi! I'm <span className="text-white font-semibold">Kunal Gawande</span>. A passionate Fullstack Developer with 2+ years of experience building high-performance web applications. Specializing in Next.js, Node.js, and modern database solutions, I focus on crafting seamless end-to-end digital experiences that blend robust backend architectures with modern UI/UX practices.
            </p>


            <div className="flex gap-4 mt-10">
              <a 
                href="mailto:kunalkhindevgawande@gmail.com" 
                className="spotlight-btn relative group px-8 py-3 rounded-full border border-accent/50 shadow-[0_0_15px_#4C8CE44d] text-white bg-[#0a0a0a] font-medium tracking-wide transition-all duration-300 flex items-center justify-center isolate overflow-hidden"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                }}
              >
                <span className="relative z-10">Hire Me</span>
              </a>
              <a 
                href="https://github.com/Kunal-2804" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="spotlight-btn relative group px-8 py-3 rounded-full border border-white/20 shadow-[0_0_15px_#ffffff33] hover:shadow-[0_0_5px_#ffffff1a,inset_0_0_20px_#ffffff26,inset_0_0_5px_#ffffff4d] text-white bg-[#0a0a0a] lg:bg-transparent font-medium tracking-wide transition-all duration-300 flex items-center justify-center isolate overflow-hidden"
                style={{ '--spotlight-color': 'rgba(255, 255, 255, 0.4)' } as React.CSSProperties}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                }}
              >
                <span className="relative z-10">Github</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-row xl:flex-col flex-wrap justify-center xl:justify-start gap-8 md:gap-16 xl:gap-10 text-center xl:text-right w-full xl:w-auto mt-12 xl:mt-0 self-center xl:self-center"
        >
          <div className="flex-1 min-w-[100px] xl:flex-none">
            <h2 className="font-heading text-4xl md:text-5xl xl:text-6xl text-accent">2+</h2>
            <p className="text-gray-400 text-xs md:text-sm tracking-wider uppercase mt-1">Years of Experience</p>
          </div>
          <div className="flex-1 min-w-[100px] xl:flex-none">
            <h2 className="font-heading text-4xl md:text-5xl xl:text-6xl text-accent">10+</h2>
            <p className="text-gray-400 text-xs md:text-sm tracking-wider uppercase mt-1">Completed Projects</p>
          </div>
          <div className="flex-1 min-w-[100px] xl:flex-none">
            <h2 className="font-heading text-4xl md:text-5xl xl:text-6xl text-accent">React</h2>
            <p className="text-gray-400 text-xs md:text-sm tracking-wider uppercase mt-1">Specialization</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-16 xl:mt-0 xl:absolute xl:bottom-10 xl:left-1/2 xl:-translate-x-1/2 flex flex-col items-center gap-2 self-center"
      >
        <span className="text-gray-500 font-mono text-xs tracking-widest uppercase">Scroll Down</span>
        <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
           className="text-accent"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>

    </section>
  );
}
