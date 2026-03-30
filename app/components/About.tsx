"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 px-6 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-4xl md:text-6xl text-white mb-10">
          ABOUT <span className="text-accent">ME</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed">
          <p>
            I specialize in building robust frontend solutions that deliver seamless user experiences. With a strong foundation in <span className="text-white">React.js</span> and <span className="text-white">Next.js</span>, I translate complex requirements into clean, scalable code.
          </p>
          <p>
            Whether it's creating pixel-perfect UIs from initial designs or optimizing web performance, I am constantly exploring modern standards to deliver impactful digital products that users genuinely love to use.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
