"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaJava, FaPython, FaCode, FaCubes, FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import { 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiBootstrap, 
  SiNodedotjs, 
  SiExpress, 
  SiFlask, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb, 
  SiJupyter, 
  SiIntellijidea, 
  SiFigma, 
  SiOpencv, 
  SiNumpy, 
  SiPandas, 
  SiScikitlearn, 
  SiGoogle,
  SiGit,
  SiPytorch
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { BrainCircuit } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface TechCategory {
  title: string;
  skills: Skill[];
}

const techCategories: TechCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "text-[#007396]" },
      { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "SQL", icon: DiDatabase, color: "text-[#003B57]" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS3", icon: SiCss, color: "text-[#1572B6]" },
      { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, color: "text-white" },
      { name: "Flask", icon: SiFlask, color: "text-white" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "VS Code", icon: TbBrandVscode, color: "text-[#007ACC]" },
      { name: "Jupyter Notebook", icon: SiJupyter, color: "text-[#F37626]" },
      { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "text-[#FE315D]" },
      { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
    ],
  },
  {
    title: "AI / ML & Data Science",
    skills: [
      { name: "Machine Learning", icon: BrainCircuit, color: "text-[#10B981]" },
      { name: "Deep Learning / CNN", icon: BrainCircuit, color: "text-[#3B82F6]" },
      { name: "PyTorch", icon: SiPytorch, color: "text-[#EE4C2C]" },
      { name: "Timm", icon: FaCubes, color: "text-[#60A5FA]" },
      { name: "Data Science", icon: SiPandas, color: "text-[#150458]" },
      { name: "OpenCV", icon: SiOpencv, color: "text-[#5C3EE8]" },
      { name: "MediaPipe", icon: SiGoogle, color: "text-[#4285F4]" },
      { name: "NumPy", icon: SiNumpy, color: "text-[#013243]" },
      { name: "Pandas", icon: SiPandas, color: "text-[#150458]" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "text-[#F7931E]" },
    ],
  },
  {
    title: "Other / Coursework",
    skills: [
      { name: "Data Structures & Algorithms", icon: FaCode, color: "text-[#F43F5E]" },
      { name: "Object Oriented Programming", icon: FaCubes, color: "text-[#3B82F6]" },
    ],
  },
];

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative z-10" ref={ref}>
      {/* Inline styles for the premium glass shine animation */}
      <style>{`
        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
        }
        .shine-effect:hover::after {
          animation: shine 0.75s ease-in-out;
        }
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
      `}</style>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full opacity-80" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-soft-blue/5 rounded-full blur-3xl" />
              
              <h3 className="text-xl font-semibold text-white mb-6 tracking-wide relative z-10">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -4,
                        boxShadow: "0 10px 20px -10px rgba(139, 92, 246, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/[0.08] transition-colors group cursor-pointer relative overflow-hidden shine-effect"
                    >
                      <div className="text-3xl mb-3 text-slate-gray group-hover:scale-115 transition-transform duration-300">
                        <Icon className={`${skill.color} transition-colors duration-300`} />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-slate-gray group-hover:text-white transition-colors text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
