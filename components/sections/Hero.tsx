"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-10 lg:px-16">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] bg-gold/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-20 items-center pt-24 lg:pt-0">
        {/* Left — type */}
        <div className="lg:col-span-7 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-cream/40"
          >
            <span className="w-1.5 h-1.5 bg-emerald-400/70 rounded-full animate-pulse" />
            Dubai · New York
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.1 }}
            className="font-serif text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] tracking-display gradient-text"
          >
            <span className="block">Galileo</span>
            <span className="block italic text-cream/70">Wilson</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.35 }}
            className="max-w-xl space-y-5"
          >
            <p className="text-base sm:text-lg text-cream/60 leading-relaxed font-sans">
              Founder of{" "}
              <span className="text-cream/90 font-serif italic">
                Wilson Growth
              </span>
              — a strategic advisory firm scaling ambitious companies through
              AI, partnerships, and data-driven execution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.55 }}
            className="flex items-center gap-6 pt-2"
          >
            <a
              href="https://x.com/galileowilson"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-cream/40 hover:text-cream transition-colors duration-500"
            >
              <Twitter className="h-4 w-4" />
              <span>@galileowilson</span>
            </a>
            <span className="text-cream/15">/</span>
            <a
              href="https://www.linkedin.com/in/galileowilson/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-cream/40 hover:text-cream transition-colors duration-500"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto">
            <div className="absolute -inset-6 bg-gold/[0.06] blur-2xl rounded-full" />
            <div className="relative h-full w-full overflow-hidden rounded-[2px] border border-cream/10">
              <Image
                src="/profile.jpg"
                alt="Galileo Wilson"
                fill
                sizes="(min-width: 1024px) 40vw, 80vw"
                priority
                className="object-cover grayscale-[0.15] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-3 left-0 right-0 flex justify-between text-[10px] uppercase tracking-[0.3em] text-cream/30 font-sans">
              <span>Portrait</span>
              <span>MMXXVI</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-cream/25 font-sans"
      >
        Scroll
      </motion.div>
    </section>
  );
}
