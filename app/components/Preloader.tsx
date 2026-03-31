"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top immediately on hard refresh
    window.scrollTo(0, 0);

    // Lock body scrolling during preloader
    document.body.style.overflow = "hidden";

    const scrollListener = () => window.scrollTo(0, 0);
    window.addEventListener('scroll', scrollListener);

    const timer = setTimeout(() => {
      setLoading(false);
      window.removeEventListener('scroll', scrollListener);
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', scrollListener);
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center p-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut" 
            }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-accent tracking-wider uppercase mb-8"
          >
            KUNAL GAWANDE
          </motion.h1>
          
          <div className="relative w-48 md:w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="absolute top-0 left-0 h-full w-full bg-accent rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
