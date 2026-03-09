"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const expertise = [
  "Strategic growth systems",
  "Artificial intelligence consulting",
  "Crypto and Web3 ecosystem growth",
  "Brand positioning and narrative",
  "Creator ecosystem development",
  "Operational infrastructure",
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 sm:py-40 relative" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">
              About
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-12 leading-tight"
          >
            Wilson Growth
          </motion.h2>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6 text-lg text-white/50 leading-relaxed">
            <p>
              Wilson Growth is a strategic growth and advisory firm focused on helping 
              ambitious companies scale faster and smarter.
            </p>
            <p>
              We work with founders, leadership teams, and emerging technology companies 
              to build scalable growth systems, optimize operations, and unlock new market 
              opportunities through partnerships, AI, and data-driven execution.
            </p>
          </motion.div>

          {/* Expertise */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-sm uppercase tracking-[0.15em] text-white/30 font-medium mb-8">
              Expertise
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-1 h-1 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors" />
                  <span className="text-white/40 text-sm group-hover:text-white/60 transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing statement */}
          <motion.p 
            variants={itemVariants}
            className="mt-16 text-white/30 text-base italic"
          >
            The firm combines strategic thinking with hands-on execution, helping 
            companies move from early traction to global scale.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
