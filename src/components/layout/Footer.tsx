import { Code2, Link2, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-20 py-12 border-t border-white/10 bg-bg-dark-1/50 backdrop-blur-md overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-soft-blue to-transparent opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-medium text-white mb-1">Sathwik Madasi</h3>
            <p className="text-sm text-slate-gray">Computer Science Engineering Student</p>
          </div>

          <div className="flex gap-4">
            <SocialLink href="#" icon={<Code2 size={20} />} label="GitHub" />
            <SocialLink href="#" icon={<Link2 size={20} />} label="LinkedIn" />
            <SocialLink href="#" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-gray/70">
          <p>© {new Date().getFullYear()} Sathwik Madasi. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Developed with precision.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-gray hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
    >
      {icon}
    </Link>
  );
}
