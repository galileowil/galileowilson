"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "TechScale Solutions",
    description: "Led the operational transformation of a B2B SaaS platform, resulting in 400% user growth and successful Series A funding.",
    tags: ["SaaS", "Growth Strategy", "Operations"],
    metrics: "$12M ARR",
  },
  {
    title: "Global Retail Expansion",
    description: "Developed and executed market entry strategy for a retail brand expanding into European and Asian markets.",
    tags: ["International", "Retail", "Strategy"],
    metrics: "5 Markets",
  },
  {
    title: "FinTech Platform Launch",
    description: "Built and launched a financial technology platform from concept to market, acquiring 50K users in the first 6 months.",
    tags: ["FinTech", "Product Launch", "Marketing"],
    metrics: "50K Users",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-white/30 text-sm font-medium uppercase tracking-widest">Projects</span>
            <Separator className="flex-1 bg-white/10" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16">
            Selected Work
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <Card className="group bg-white/[0.02] border-white/10 hover:bg-white/[0.04] transition-all duration-500 cursor-pointer h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="bg-white/10 text-white/70 hover:bg-white/20">
                        {project.metrics}
                      </Badge>
                      <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-white/60 transition-colors" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs text-white/40 px-2 py-1 rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
