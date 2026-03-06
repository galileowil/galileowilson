"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

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
            Work With Wilson Growth
          </h2>

          <p className="text-white/50 text-lg mb-12 max-w-2xl">
            Wilson Growth works with a limited number of companies each year. If you are building something ambitious and want help scaling it globally, reach out.
          </p>

          <Card className="bg-white/[0.02] border-white/10">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white/60" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">
                Let&apos;s Build Together
              </h3>
              
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                Ready to scale your company? Send me an email and let&apos;s discuss how Wilson Growth can help.
              </p>

              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-base font-medium group"
                asChild
              >
                <a href="mailto:galileo@wilsongrowth.com">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <p className="mt-6 text-sm text-white/30">
                Or DM me on{" "}
                <a 
                  href="https://x.com/galileowil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white/70 transition-colors"
                >
                  X / Twitter
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
