"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scroll to top immediately on hard refresh
    window.scrollTo(0, 0);

    // Lock body scrolling during preloader
    document.body.style.overflow = "hidden";

    const scrollListener = () => window.scrollTo(0, 0);
    window.addEventListener("scroll", scrollListener);

    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
        window.removeEventListener("scroll", scrollListener);
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
      },
    });

    const letters = textRef.current?.querySelectorAll(".letter");

    if (!letters || letters.length === 0) return;

    // 0. Initial Setup
    gsap.set(letters, { 
      opacity: 0, 
      scale: 4, 
      rotationX: -90, 
      z: -1000,
      filter: "blur(20px)"
    });
    gsap.set(textRef.current, { perspective: 1200 });

    // 1. Cinematic letter slam with stagger (Blast effect)
    tl.to(letters, {
      opacity: 1,
      scale: 1,
      rotationX: 0,
      z: 0,
      filter: "blur(0px)",
      stagger: {
        amount: 0.6,
        from: "center", // Starts from the middle letter and explodes outwards
        ease: "power2.out",
      },
      duration: 1,
      ease: "expo.out",
    })
    
    // 2. Letter tracking squeeze (expand then compress tightly)
    .to(
      letters,
      {
        margin: "0 -1vw",
        duration: 1.5,
        ease: "power4.inOut",
      },
      "-=0.6"
    )
    
    // 3. Environment light sweep passing across the text
    .to(
      lightRef.current,
      {
        left: "150%",
        duration: 1.5,
        ease: "power2.inOut",
      },
      "-=1.4"
    )
    
    // 4. Slow, steady zoom in for the entire logo container
    .to(
      textRef.current,
      {
        scale: 1.15,
        filter: "drop-shadow(0px 0px 40px rgba(76,140,228,0.9))",
        duration: 2.8,
        ease: "power1.inOut",
      },
      0 // Start slightly after the beginning
    )
    
    // 5. Final sudden zoom INTO the camera (letters fly past viewer)
    .to(
      letters,
      {
        scale: 5,
        opacity: 0,
        filter: "blur(15px)",
        stagger: {
          amount: 0.2,
          from: "center"
        },
        duration: 0.6,
        ease: "power3.in",
      },
      ">"
    )
    
    // 6. Fade out background container cleanly
    .to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "-=0.3"
    );

  }, { scope: containerRef });

  if (!loading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic background glow (Subtle cinematic vignette) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(76,140,228,0.15)_0%,rgba(0,0,0,1)_70%)]" />

      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <h1
          ref={textRef}
          className="relative font-heading text-7xl md:text-9xl lg:text-[12rem] text-white uppercase flex items-center justify-center tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {"KUNAL".split("").map((char, index) => (
            <span key={index} className="letter inline-block transform-gpu origin-center">
              {char}
            </span>
          ))}

          {/* Light Sweep Reflector */}
          <div
            ref={lightRef}
            className="absolute top-0 -left-[100%] h-[150%] w-[40%] skew-x-[-30deg] bg-gradient-to-r from-transparent via-white to-transparent opacity-70 blur-md pointer-events-none"
            style={{ mixBlendMode: "overlay" }}
          />
        </h1>
      </div>
    </div>
  );
}
