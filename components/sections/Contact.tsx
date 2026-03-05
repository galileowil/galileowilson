"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Twitter, ArrowRight } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-white/30 text-sm font-medium uppercase tracking-widest">Contact</span>
            <Separator className="flex-1 bg-white/10" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>

          <p className="text-lg text-white/50 max-w-2xl mb-12">
            Whether you&apos;re looking to scale your business, explore partnership 
            opportunities, or just want to connect, I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-14 text-base font-medium group"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send an Email
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex gap-6">
            <a 
              href="#" 
              className="flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Linkedin className="h-5 w-5" />
              </div>
              <span className="text-sm">LinkedIn</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Twitter className="h-5 w-5" />
              </div>
              <span className="text-sm">Twitter</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 pt-8 border-t border-white/5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Galileo Wilson. All rights reserved.
          </p>
          <p className="text-white/20 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
