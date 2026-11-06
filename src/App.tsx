import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Mail, Send, ChevronRight } from 'lucide-react';

const SKILLS = [
  "TypeScript", "React.js", "Node.js", "Express", "PostgreSQL", 
  "MongoDB", "TailwindCSS", "Next.js", "Redis", "Docker", "Git"
];

const PROJECTS = [
  {
    title: "EduCenter ERP",
    category: "Fullstack SaaS",
    desc: "A complete management ecosystem for educational centers. Features multi-role access, real-time attendance, and automated financial reporting.",
    tech: ["React", "Node.js", "PostgreSQL"],
    year: "2023"
  },
  {
    title: "Factory Hub",
    category: "Enterprise System",
    desc: "Executive dashboard for industrial directors. Manages warehouse inventory, raw material logistics, and staff cash-flow ledgers in real-time.",
    tech: ["React", "Express", "MongoDB"],
    year: "2023"
  }
];

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-12 h-12 border border-white/30 rounded-full mix-blend-difference pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}

// Card with mouse-following glow effect
function GlowCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className={`group relative rounded-2xl bg-zinc-900/50 border border-zinc-800 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <div className="bg-black min-h-screen text-zinc-300 font-sans selection:bg-white selection:text-black overflow-hidden cursor-none">
      <CustomCursor />

      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20"
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
        <motion.div style={{ y }} className="text-center max-w-5xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">Open to work</span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[8rem] font-bold text-white tracking-tighter leading-none"
            >
              Shodiyor.
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-12">
            <motion.p 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl text-zinc-400 font-light max-w-3xl mx-auto"
            >
              17-year-old Fullstack Engineer turning complex workflows into <span className="text-white font-medium">high-performance systems.</span>
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#work" className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-zinc-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative flex items-center gap-2">
                Explore Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <div className="flex items-center gap-6 text-zinc-500">
              <a href="#" className="hover:text-white transition-colors uppercase font-mono text-xs tracking-widest">Github</a>
              <a href="https://t.me/bzv073" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors uppercase font-mono text-xs tracking-widest">Telegram</a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
        </motion.div>
      </section>

      {/* MARQUEE SKILLS */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02] relative z-10 flex overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 px-6"
        >
          {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
            <span key={i} className="text-4xl md:text-7xl font-bold text-transparent stroke-text opacity-30">
              {skill}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ABOUT & STATS */}
      <section className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">The Journey.</h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-6">
              Started coding in 6th grade. Fast forward to today, I engineer full-stack systems from the ground up. 
            </p>
            <p className="text-lg text-zinc-500 font-light leading-relaxed">
              I don't just write scripts; I architect databases, design APIs, and build reactive UIs that businesses rely on. Focused on <span className="text-zinc-200">clean code</span> and <span className="text-zinc-200">scalability</span>.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            <GlowCard className="p-8 flex flex-col items-center justify-center text-center aspect-square">
              <span className="text-6xl font-bold text-white mb-2">17</span>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Age / Hunger</span>
            </GlowCard>
            <GlowCard className="p-8 flex flex-col items-center justify-center text-center aspect-square mt-8">
              <span className="text-6xl font-bold text-white mb-2">2+</span>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">SaaS Built</span>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Selected Work.</h2>
          <div className="w-24 h-1 bg-white mt-8" />
        </motion.div>

        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <GlowCard className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center group/card cursor-none">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{project.year}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{project.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover/card:text-zinc-300 transition-colors">{project.title}</h3>
                  <p className="text-lg text-zinc-400 font-light mb-8 max-w-xl leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-full border border-zinc-800 bg-black/50 text-sm font-medium text-zinc-300 backdrop-blur-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-auto flex items-center justify-center p-8">
                  <div className="w-24 h-24 rounded-full border border-zinc-800 flex items-center justify-center group-hover/card:bg-white group-hover/card:text-black transition-all duration-500">
                    <ExternalLink className="w-8 h-8 opacity-50 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all" />
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="relative z-10 py-32 px-6 border-t border-white/5 bg-gradient-to-b from-black to-zinc-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-[8rem] font-bold text-white tracking-tighter mb-12"
          >
            Let's Talk.
          </motion.h2>
          
          <div className="flex justify-center gap-6 mb-24">
            <a href="https://t.me/bzv073" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform">
              <Send className="w-4 h-4" /> Telegram
            </a>
            <a href="#" className="flex items-center gap-2 px-8 py-4 rounded-full border border-zinc-800 bg-zinc-900/50 text-white hover:bg-zinc-800 transition-colors">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm font-mono uppercase tracking-widest gap-6">
            <p>© {new Date().getFullYear()} Shodiyor Bozorov</p>
            <p>Uzbekistan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
