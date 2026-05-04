"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: heading slides up faster than the scroll speed
  const headingY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  // Fade + slight upward travel for paragraphs
  const para1X = useTransform(scrollYProgress, [0.1, 0.45], [-60, 0]);
  const para2X = useTransform(scrollYProgress, [0.2, 0.55], [60, 0]);
  const opacity  = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={ref} className="py-32 px-10 md:px-20 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      {/* Section label — fade in */}
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="text-accent font-mono text-sm uppercase mb-6 tracking-[0.25em]"
      >
        — Who I Am
      </motion.p>

      {/* Heading with parallax drift */}
      <div className="overflow-hidden mb-12">
        <motion.h2
          style={{ y: headingY }}
          className="font-heading text-5xl md:text-7xl text-white"
        >
          ABOUT <span className="text-accent">ME</span>
        </motion.h2>
      </div>

      {/* Two paragraphs slide in from opposite sides */}
      <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed">
        <motion.p style={{ x: para1X, opacity }}>
          I specialize in building robust frontend solutions that deliver seamless user
          experiences. With a strong foundation in{" "}
          <span className="text-white">React.js</span> and{" "}
          <span className="text-white">Next.js</span>, I translate complex requirements
          into clean, scalable code.
        </motion.p>
        <motion.p style={{ x: para2X, opacity }}>
          Whether it&apos;s creating pixel-perfect UIs from initial designs or optimizing
          web performance, I am constantly exploring modern standards to deliver impactful
          digital products that users genuinely love to use.
        </motion.p>
      </div>
    </section>
  );
}
