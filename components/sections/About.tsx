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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12">
            Wilson Growth
          </h2>

          <div className="space-y-8 text-lg text-white/60 leading-relaxed">
            <p>
              Wilson Growth is a strategic growth and advisory firm focused on helping ambitious companies scale faster and smarter.
            </p>

            <p>
              We work with founders, leadership teams, and emerging technology companies to build scalable growth systems, optimize operations, and unlock new market opportunities through partnerships, AI, and data-driven execution.
            </p>

            <div className="py-8">
              <h3 className="text-xl font-semibold text-white mb-6">Our Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Strategic growth systems",
                  "Artificial intelligence consulting",
                  "Crypto and Web3 ecosystem growth",
                  "Brand positioning and narrative",
                  "Creator ecosystem development",
                  "Operational infrastructure",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                    <span className="text-white/50">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-white/40">
              The firm combines strategic thinking with hands-on execution, helping companies move from early traction to global scale.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
