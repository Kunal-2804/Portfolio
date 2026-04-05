"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const AnimatedLetter = ({ char, progress, index, total }: { char: string, progress: MotionValue<number>, index: number, total: number }) => {
  const charStart = 0.3 + (index / total) * 0.4;
  const charEnd = charStart + (0.4 / total);
  const color = useTransform(progress, [charStart, charEnd], ["#4b5563", "#ffffff"]);
  
  return <motion.span style={{ color }}>{char}</motion.span>;
};

export default function EmailSidebar() {
  const { scrollYProgress } = useScroll();
  const email = "kunalkhindevgawande@gmail.com";
  const letters = email.split("");

  // Top line expands downwards as you scroll first 30%
  const topLineHeight = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);
  
  // Bottom line expands downwards as you scroll last 30%
  const bottomLineHeight = useTransform(scrollYProgress, [0.7, 1], ["0%", "100%"]);

  return (
    <div className="flex fixed top-0 left-2 md:left-6 lg:left-10 h-screen flex-col justify-center items-center gap-4 md:gap-6 z-40">
      {/* Top Line */}
      <div className="w-[1px] h-16 md:h-24 bg-gray-800 relative overflow-hidden flex-shrink-0">
         <motion.div 
           className="absolute top-0 left-0 w-full bg-accent"
           style={{ height: topLineHeight }}
         />
      </div>

      <a
        href="mailto:kunalkhindevgawande@gmail.com"
        className="font-sans text-[10px] md:text-sm tracking-widest transition-transform duration-300 hover:-translate-y-1 block cursor-pointer"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        {letters.map((char, index) => (
          <AnimatedLetter 
             key={index} 
             char={char} 
             progress={scrollYProgress} 
             index={index} 
             total={letters.length} 
          />
        ))}
      </a>

      {/* Bottom Line */}
      <div className="w-[1px] h-16 md:h-24 bg-gray-800 relative overflow-hidden flex-shrink-0">
         <motion.div 
           className="absolute top-0 left-0 w-full bg-accent"
           style={{ height: bottomLineHeight }}
         />
      </div>
    </div>
  );
}

