"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale the massive CTA text up as you scroll into it (zoom-in reveal)
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={ref}
      className="py-32 px-10 md:px-20 lg:px-24 max-w-7xl mx-auto border-t border-gray-800"
    >
      {/* Zoom-in scale reveal for the CTA heading */}
      <motion.div
        style={{ scale, opacity }}
        className="flex flex-col items-center text-center gap-12"
      >
        <h2 className="font-heading text-6xl md:text-8xl lg:text-[10rem] text-white leading-none tracking-tight">
          HAVE A <br /> <span className="text-accent">PROJECT</span>?
        </h2>

        {/* "Let's Talk" — slide up after heading is in view */}
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          href="mailto:kunalkhindevgawande@gmail.com"
          className="group relative inline-flex items-center gap-4 text-2xl md:text-4xl text-gray-300 font-heading tracking-widest hover:text-white transition-colors duration-300"
        >
          LET&apos;S TALK
          <span className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center group-hover:scale-110 group-hover:translate-x-2 transition-transform duration-300">
            <ArrowRight />
          </span>
        </motion.a>
      </motion.div>

      {/* Footer row — stagger icon pop-in */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="mt-32 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <motion.p
          variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          className="text-gray-500 font-mono text-sm tracking-widest"
        >
          © {new Date().getFullYear()} KUNAL GAWANDE
        </motion.p>

        <div className="flex gap-6">
          {[
            { href: "https://github.com/Kunal-2804", icon: <FaGithub size={20} /> },
            { href: "https://www.linkedin.com/in/kunalgawande28", icon: <FaLinkedin size={20} /> },
            { href: "mailto:kunalkhindevgawande@gmail.com", icon: <Mail size={20} /> },
          ].map(({ href, icon }, i) => (
            <motion.a
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 18 } },
              }}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors duration-300"
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
