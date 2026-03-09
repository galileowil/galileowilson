"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Hero() {
  const titleWords = ["Galileo", "Wilson"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Very subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/[0.03] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Location */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-sm text-white/40 tracking-wide">
              <span className="w-1.5 h-1.5 bg-emerald-500/80 rounded-full animate-pulse" />
              Dubai, UAE
            </span>
          </motion.div>

          {/* Main Title - Large Typography */}
          <motion.div 
            variants={itemVariants}
            className="overflow-hidden"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9]">
              {titleWords.map((word, i) => (
                <motion.span
                  key={word}
                  variants={wordVariants}
                  className="inline-block gradient-text"
                  style={{ marginRight: i === 0 ? "0.25em" : 0 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/50 font-light tracking-tight"
          >
            Founder of Wilson Growth
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-white/35 max-w-lg mx-auto leading-relaxed"
          >
            Strategic growth and advisory for ambitious companies. 
            Scaling through AI, partnerships, and data-driven execution.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 pt-4"
          >
            <a 
              href="https://x.com/galileowilson" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white/30 hover:text-white/70 transition-colors duration-300"
            >
              <Twitter className="h-4 w-4" />
              <span className="text-sm">@galileowilson</span>
            </a>
            <a 
              href="#" 
              className="group flex items-center gap-2 text-white/30 hover:text-white/70 transition-colors duration-300"
            >
              <Linkedin className="h-4 w-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-2"
        >
          <div className="w-0.5 h-1.5 bg-white/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
