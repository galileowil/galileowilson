"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-white/30 text-sm font-medium uppercase tracking-widest">About</span>
            <Separator className="flex-1 bg-white/10" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Building the future through{" "}
            <span className="text-white/60">strategic growth</span> and{" "}
            <span className="text-white/60">operational excellence</span>.
          </h2>

          <div className="space-y-6 text-lg text-white/50 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              As the CEO of Wilson Growth, I specialize in transforming ambitious visions 
              into market-leading realities. With a track record spanning multiple industries, 
              I&apos;ve helped companies scale from early-stage startups to established market players.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My approach combines data-driven decision making with a deep understanding 
              of human-centered leadership. I believe that sustainable growth comes from 
              building exceptional teams, fostering innovation, and maintaining unwavering 
              focus on delivering value to customers.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Whether it&apos;s optimizing operations, securing strategic partnerships, or 
              navigating complex market dynamics, I bring a proven framework for success 
              that has generated over $50M in revenue across portfolio companies.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
