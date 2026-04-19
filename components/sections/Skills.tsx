"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Users,
  Settings,
  Brain,
  BarChart3,
  Handshake,
  Zap,
  Globe,
} from "lucide-react";

const skills = [
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Design and implement scalable growth systems that drive long-term adoption through market positioning, growth loops, and community mechanics.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "Led teams of 40+ people across growth, marketing, and operations. Building high-performance teams that execute.",
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    description:
      "Design internal systems that allow companies to scale efficiently. Team structure, workflows, and performance frameworks.",
  },
  {
    icon: Brain,
    title: "AI Implementation",
    description:
      "Identify where AI can replace manual workflows, build internal AI systems, and implement AI into marketing and operations.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Review internal systems and metrics to identify growth bottlenecks, cost inefficiencies, and scalable performance strategies.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Access to an extensive global network of creators, founders, operators, and institutional investors.",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description:
      "Strategy alone doesn't create results. We execute campaigns, launch initiatives, and build systems that deliver.",
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description:
      "Help companies scale internationally through market expansion strategies, local creator ecosystems, and cross-border growth.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 sm:py-48 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-20 flex items-baseline justify-between"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cream/30">
            — Capabilities
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-cream/20 hidden sm:inline">
            Eight disciplines
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-display text-cream leading-[0.95] mb-8 max-w-3xl"
        >
          What I <span className="italic text-cream/70">bring.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="text-lg text-cream/50 max-w-xl mb-20 leading-relaxed"
        >
          Working with Wilson Growth means working with someone who combines
          strategy, execution, and network access.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/[0.06]">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + index * 0.06,
                ease,
              }}
              className="bg-background p-8 group hover:bg-cream/[0.02] transition-colors duration-700"
            >
              <div className="flex items-center justify-between mb-8">
                <skill.icon className="h-5 w-5 text-cream/40 group-hover:text-cream/80 transition-colors" />
                <span className="text-[10px] text-cream/20 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-xl text-cream mb-3 leading-tight">
                {skill.title}
              </h3>
              <p className="text-cream/40 text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
