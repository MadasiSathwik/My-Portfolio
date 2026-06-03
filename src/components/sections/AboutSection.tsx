"use client";

import { motion, useInView, useSpring, useTransform, Variants } from "framer-motion";
import { GraduationCap, Code2, Database, BrainCircuit, Target, Trophy, Award, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 relative z-10" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full opacity-80" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 items-center mb-16">
            {/* Left side: Circular image with glow and hover animation */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center md:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full glass-card p-2 group shadow-2xl shadow-light-purple/20 hover:shadow-light-purple/40 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-light-purple to-soft-blue rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-full overflow-hidden bg-bg-dark-3 border border-white/10">
                  <img
                    src="/myphoto.jpg"
                    alt="Sathwik Madasi"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-white mb-1">Sathwik Madasi</h3>
                <p className="text-xs text-soft-blue uppercase tracking-wider font-semibold">CSE Student</p>
              </div>
            </motion.div>

            {/* Right side: Modernized education & interests */}
            <div className="md:col-span-2 space-y-6">
              <motion.div variants={itemVariants} className="glass-card p-6 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-light-purple/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />
                <div className="flex gap-4 items-start">
                  <div className="text-light-purple bg-light-purple/10 p-3 rounded-2xl">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Education</h3>
                    <p className="text-slate-gray leading-relaxed text-sm md:text-base">
                      Currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE) at <span className="text-white font-medium">SR University</span>.
                      Focused on building core engineering foundations, data structures, algorithms, databases, and emerging tech.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="glass-card p-6 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-soft-cyan/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />
                <div className="flex gap-4 items-start">
                  <div className="text-soft-cyan bg-soft-cyan/10 p-3 rounded-2xl">
                    <BrainCircuit size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Interests & Profile</h3>
                    <p className="text-slate-gray leading-relaxed text-sm md:text-base">
                      Aspiring Software Developer passionate about creating innovative digital solutions through Full-Stack Development, Artificial Intelligence, Machine Learning, and Data Science. I bridge the gap between polished UI and complex backend systems.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CounterCard title="Projects" endValue={15} icon={<Code2 size={20} />} delay={0} />
            <CounterCard title="Technologies" endValue={20} icon={<Database size={20} />} delay={0.1} />
            <CounterCard title="Hackathons" endValue={5} icon={<Target size={20} />} delay={0.2} />
            <CounterCard title="Certifications" endValue={3} icon={<Award size={20} />} delay={0.3} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CounterCard({ title, endValue, icon, delay }: { title: string; endValue: number; icon: React.ReactNode; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // ms
      const increment = endValue / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: delay }}
      className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors"
    >
      <div className="text-soft-blue mb-3 bg-soft-blue/10 p-3 rounded-full group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-1 flex items-center">
        {count}
        <span className="text-soft-blue ml-1">+</span>
      </div>
      <div className="text-sm text-slate-gray font-medium">{title}</div>
    </motion.div>
  );
}
