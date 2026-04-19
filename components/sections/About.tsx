"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const expertise = [
  "Strategic growth systems",
  "Artificial intelligence consulting",
  "Crypto & Web3 ecosystem growth",
  "Brand positioning and narrative",
  "Creator ecosystem development",
  "Operational infrastructure",
];

const ease = [0.16, 1, 0.3, 1] as const;

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 sm:py-48 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cream/30">
            — About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-display text-cream leading-[0.95]">
              Wilson
              <br />
              <span className="italic text-cream/70">Growth.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.25 }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="text-xl sm:text-2xl text-cream/75 leading-relaxed font-serif">
              A strategic growth and advisory firm helping ambitious companies
              scale faster and smarter.
            </p>
            <p className="text-base text-cream/50 leading-relaxed max-w-xl">
              We work with founders, leadership teams, and emerging technology
              companies to build scalable growth systems, optimize operations,
              and unlock new market opportunities through partnerships, AI, and
              data-driven execution.
            </p>

            <div className="pt-10">
              <h3 className="text-xs uppercase tracking-[0.3em] text-cream/30 mb-8">
                Expertise
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.06,
                      ease,
                    }}
                    className="flex items-center gap-4 group border-b border-cream/[0.08] pb-4"
                  >
                    <span className="text-[10px] text-cream/20 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-cream/60 group-hover:text-cream/90 transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.9, ease }}
              className="pt-10 font-serif italic text-lg text-cream/40 leading-relaxed"
            >
              Strategic thinking with hands-on execution — from early traction
              to global scale.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
