"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

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

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 sm:py-40 relative" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">
              Contact
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight"
          >
            Work With Wilson Growth
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-white/40 text-lg mb-16 max-w-xl leading-relaxed"
          >
            Wilson Growth works with a limited number of companies each year. 
            If you are building something ambitious and want help scaling it globally, reach out.
          </motion.p>

          {/* CTA Card */}
          <motion.div 
            variants={itemVariants}
            className="p-8 sm:p-12 rounded-lg border border-white/10 bg-white/[0.02] text-center"
          >
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-4 tracking-tight">
              Let&apos;s Build Together
            </h3>
            
            <p className="text-white/40 mb-8 max-w-md mx-auto">
              Ready to scale your company? Send me an email and let&apos;s discuss 
              how Wilson Growth can help.
            </p>

            <a
              href="mailto:wilson.growth@outlook.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors group"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Contact links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a 
                  href="https://x.com/galileowilson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white/70 transition-colors"
                >
                  X / @galileowilson
                </a>
                <span className="hidden sm:inline text-white/20">•</span>
                <a 
                  href="https://t.me/GalileoWil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white/70 transition-colors"
                >
                  Telegram / @GalileoWil
                </a>
                <span className="hidden sm:inline text-white/20">•</span>
                <a 
                  href="mailto:wilson.growth@outlook.com"
                  className="text-white/40 hover:text-white/70 transition-colors"
                >
                  wilson.growth@outlook.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.p 
            variants={itemVariants}
            className="text-center text-white/20 text-sm mt-20"
          >
            © {new Date().getFullYear()} Wilson Growth. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
