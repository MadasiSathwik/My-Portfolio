"use client";

import { motion, useInView } from "framer-motion";
import { Award, ShieldCheck, Trophy, Cloud, Network } from "lucide-react";
import { useRef } from "react";

const achievements = [
  {
    title: "6th Position",
    event: "Project Expo 2025 Yantra’25",
    description: "Secured 6th position among 100+ projects demonstrating innovation and technical execution.",
    icon: <Trophy size={20} className="text-light-purple" />,
  },
  {
    title: "Best Project Award",
    event: "VigilantEdge Patrol System",
    description: "Awarded for building an exceptional and highly impactful project during the competition.",
    icon: <Award size={20} className="text-soft-blue" />,
  },
  {
    title: "7th Place",
    event: "National Hackathon at SRM University AP",
    description: "Competed nationally to deliver a top-tier full-stack solution under intense time constraints.",
    icon: <Trophy size={20} className="text-soft-cyan" />,
  },
  {
    title: "Top 4%",
    event: "National Level Competitions",
    description: "Ranked among the top 4% out of 250+ competing teams across various national hackathons.",
    icon: <Award size={20} className="text-light-purple" />,
  },
];

const certifications = [
  {
    title: "AWS Academy Graduate: Cloud Foundations",
    issuer: "Amazon Web Services",
    icon: <Cloud size={24} className="text-soft-blue" />,
  },
  {
    title: "Introduction to Networks",
    issuer: "Cisco Networking Academy",
    icon: <Network size={24} className="text-soft-cyan" />,
  },
  {
    title: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    icon: <ShieldCheck size={24} className="text-light-purple" />,
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative z-10" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Achievements Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements</h2>
              <div className="w-16 h-1 bg-light-purple rounded-full opacity-80" />
            </motion.div>

            <div className="relative pl-8 border-l border-white/10 space-y-12">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  <div className="absolute -left-[41px] top-1 w-10 h-10 rounded-full bg-bg-dark-1 border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-light-purple/50 transition-all z-10">
                    {item.icon}
                  </div>
                  <div className="glass-card p-6 rounded-2xl group-hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <h4 className="text-soft-blue text-sm font-medium mb-3">{item.event}</h4>
                    <p className="text-slate-gray text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
              <div className="w-16 h-1 bg-soft-blue rounded-full opacity-80" />
            </motion.div>

            <div className="flex flex-col gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:bg-white/10 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                    <p className="text-slate-gray text-sm">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
