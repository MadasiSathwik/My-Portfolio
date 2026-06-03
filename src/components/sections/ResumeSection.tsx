"use client";

import { motion, useInView } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 relative z-10" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume Showcase</h2>
          <div className="w-20 h-1 bg-light-purple mx-auto rounded-full opacity-80" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-6 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Left side: PDF Preview */}
            <Link
              href="/resume.pdf"
              target="_blank"
              className="w-full md:w-1/2 block relative group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-light-purple/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative aspect-[1/1.4] bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-2 group shadow-xl">
                  {/* PDF Image Thumbnail Preview */}
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-inner flex flex-col relative bg-white">
                    <img 
                      src="/resume.png" 
                      alt="Sathwik Madasi Resume Preview"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle vignette/gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark-1/5 to-bg-dark-1/20" />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-bg-dark-1/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <FileText size={48} className="text-white drop-shadow-lg animate-pulse" />
                      <span className="text-sm font-semibold text-white tracking-wider">Preview Resume</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Right side: Actions & Details */}
            <div className="w-full md:w-1/2 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4">Sathwik Madasi</h3>
              <p className="text-slate-gray leading-relaxed mb-8">
                Ready to make an impact. My resume outlines my technical skills, academic achievements, and the full-stack AI/ML projects I've built. Available for internships and full-time opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="flex-1 glass-button py-4 px-6 rounded-xl flex items-center justify-center gap-3 text-white font-medium hover:bg-white/10 group"
                >
                  <ExternalLink size={18} className="text-soft-cyan group-hover:scale-110 transition-transform" />
                  Open Resume
                </Link>
                <Link
                  href="/resume.pdf"
                  download="Sathwik_Madasi_Resume.pdf"
                  className="flex-1 px-6 py-4 rounded-xl flex items-center justify-center gap-3 text-bg-dark-1 bg-white hover:bg-white/90 transition-colors font-medium group shadow-lg shadow-white/10 hover:shadow-white/20"
                >
                  <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                  Download PDF
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
