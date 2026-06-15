"use client";

import { motion, useInView } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    title: "Symptom Cure",
    description: "An AI-powered herbal remedy recommendation platform that analyzes symptoms and provides personalized natural remedy suggestions with intelligent safety analysis.",
    image: "/Symptom_cure.png",
    tech: ["React.js", "Flask", "Node.js", "MongoDB"],
    liveUrl: "https://madasisathwik.github.io/SymptomCure/",
    githubUrl: "https://github.com/MadasiSathwik/SymptomCure",
  },
  {
    title: "Food Rescue",
    description: "A full-stack food donation and management platform connecting restaurants with NGOs to reduce food waste and improve food distribution efficiency.",
    image: "/foodrescue.png",
    tech: ["React.js", "Flask", "PostgreSQL", "SQLAlchemy"],
    liveUrl: "https://food-rescue-4-bxux.onrender.com/",
    githubUrl: "https://github.com/MadasiSathwik/Food_Rescue",
  },
  {
    title: "Retinal Disease Classification",
    description: "A diagnostic deep learning pipeline using PyTorch and pretrained CNN models (ResNet/EfficientNet) to classify fundus images into 8 distinct retinal conditions. Achieved a +10% improvement in validation accuracy using targeted data augmentation, weighted training, and confusion matrix-driven error analysis.",
    image: "/retina_classification.png",
    tech: ["Python", "PyTorch", "OpenCV", "Timm", "Scikit-Learn"],
    liveUrl: "https://madasisathwik.github.io/Retina-Classification-frontend/",
    githubUrl: "https://github.com/MadasiSathwik/Retina-Classification-frontend",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative z-10" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full opacity-80" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: { project: any; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px -15px rgba(96, 165, 250, 0.25)",
        borderColor: "rgba(255, 255, 255, 0.2)"
      }}
      className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full transition-all duration-300 border border-white/10"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-bg-dark-1/25 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-soft-blue transition-colors">{project.title}</h3>
        <p className="text-slate-gray text-sm md:text-base leading-relaxed mb-6 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t: string) => (
            <span key={t} className="px-3 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-soft-blue">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex-1 glass-button py-2.5 rounded-xl flex items-center justify-center gap-2 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </Link>
          )}
          <Link
            href={project.githubUrl}
            target="_blank"
            className="flex-1 glass-button py-2.5 rounded-xl flex items-center justify-center gap-2 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            <Code2 size={16} /> GitHub
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
