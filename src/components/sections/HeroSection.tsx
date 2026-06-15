"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Computer Science Engineering Student",
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Data Science Learner",
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <div className="flex flex-col gap-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm md:text-base text-soft-blue font-medium tracking-wider uppercase mb-2">
              Welcome to my universe
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-gradient">Sathwik Madasi</span>
            </h1>
          </motion.div>

          {/* Role Switcher */}
          <div className="h-8 md:h-10 overflow-hidden">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-slate-gray font-medium"
            >
              {roles[currentRole]}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-gray max-w-lg mt-2 text-base md:text-lg leading-relaxed"
          >
            Building elegant, scalable, and intelligent solutions. Passionate about 
            solving real-world problems through clean code and modern technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <Link
              href="#projects"
              className="group relative px-6 py-3 bg-white text-bg-dark-1 font-medium rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1OIDSmyOvQVyGlrp4yMnvFT2gQHW9puMh/view?usp=sharing"
              target="_blank"
              className="glass-button px-6 py-3 text-white font-medium rounded-full flex items-center gap-2"
            >
              <Download size={18} /> Resume
            </Link>
            <Link
              href="#contact"
              className="p-3 glass-button rounded-full text-white"
              aria-label="Contact"
            >
              <Mail size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center lg:h-[600px] z-10"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-soft-blue/10 blur-[100px] rounded-full" />
          
          {/* Main Photo Container with 3D Tilt Effect */}
          <motion.div
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-card p-2 shadow-[0_0_50px_rgba(139,92,246,0.2)] hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] transition-shadow duration-500"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-bg-dark-3 relative border border-white/10">
              <img
                src="/myphoto.jpg"
                alt="Sathwik Madasi"
                className="w-full h-full object-cover opacity-95 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark-1/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Floating Tech Icons */}
          <FloatingIcon
            src="https://cdn.simpleicons.org/react/60A5FA"
            alt="React"
            className="top-[10%] left-[10%]"
            delay={0}
          />
          <FloatingIcon
            src="https://cdn.simpleicons.org/nextdotjs/white"
            alt="Next.js"
            className="top-[5%] right-[20%]"
            delay={1}
          />
          <FloatingIcon
            src="https://cdn.simpleicons.org/python/A78BFA"
            alt="Python"
            className="bottom-[15%] left-[5%]"
            delay={2}
          />
          <FloatingIcon
            src="https://cdn.simpleicons.org/mongodb/67E8F9"
            alt="MongoDB"
            className="bottom-[10%] right-[10%]"
            delay={1.5}
          />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingIcon({ src, alt, className, delay }: { src: string; alt: string; className: string; delay: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className={`absolute w-12 h-12 glass-card rounded-2xl flex items-center justify-center p-2.5 shadow-xl ${className}`}
    >
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </motion.div>
  );
}
