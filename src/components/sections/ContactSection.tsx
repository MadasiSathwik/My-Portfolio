"use client";

import { motion, useInView } from "framer-motion";
import { Mail, Send, Code, Link2, Code2 } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
      alert("Message sent successfully!"); // In a real app, use a proper toast notification
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-soft-cyan mx-auto rounded-full opacity-80" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-slate-gray mb-8 leading-relaxed">
                I'm currently looking for new opportunities and internships. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="mt-auto space-y-4">
                <SocialButton icon={<Mail size={20} />} label="Email" href="mailto:madasisathwik2005@gmail.com" color="hover:border-soft-blue" />
                <SocialButton icon={<Link2 size={20} />} label="LinkedIn" href="https://www.linkedin.com/in/sathwik-madasi-1245692b9/" color="hover:border-soft-cyan" />
                <SocialButton icon={<Code2 size={20} />} label="GitHub" href="https://github.com/MadasiSathwik" color="hover:border-light-purple" />
                <SocialButton icon={<Code size={20} />} label="LeetCode" href="https://leetcode.com/u/madasisathwik/" color="hover:border-soft-blue" />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl flex flex-col gap-6">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-soft-blue transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-3 text-slate-gray text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-soft-blue peer-valid:-top-3 peer-valid:text-xs peer-valid:text-slate-gray pointer-events-none"
                >
                  Your Name
                </label>
              </div>

              <div className="relative group mt-4">
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-soft-blue transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-3 text-slate-gray text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-soft-blue peer-valid:-top-3 peer-valid:text-xs peer-valid:text-slate-gray pointer-events-none"
                >
                  Your Email
                </label>
              </div>

              <div className="relative group mt-4">
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-soft-blue transition-colors peer resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-3 text-slate-gray text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-soft-blue peer-valid:-top-3 peer-valid:text-xs peer-valid:text-slate-gray pointer-events-none"
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 glass-button w-full py-4 rounded-xl flex items-center justify-center gap-2 text-white font-medium hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialButton({ icon, label, href, color }: { icon: React.ReactNode; label: string; href: string; color: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`glass-card p-4 rounded-xl flex items-center gap-4 text-slate-gray hover:text-white transition-all group ${color}`}
    >
      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <span className="font-medium">{label}</span>
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
        <Send size={16} className="-rotate-45" />
      </div>
    </Link>
  );
}
