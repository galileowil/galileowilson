"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Lightbulb, 
  BarChart3, 
  Handshake,
  Zap,
  Globe
} from "lucide-react";

const skills = [
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Data-driven approaches to scale revenue and market share",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Building and mentoring high-performing teams",
  },
  {
    icon: Target,
    title: "Operational Excellence",
    description: "Streamlining processes for maximum efficiency",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Identifying and capitalizing on market opportunities",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Turning insights into actionable strategies",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Forging strategic alliances that drive growth",
  },
  {
    icon: Zap,
    title: "Execution",
    description: "Rapid implementation with precision and quality",
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description: "Navigating international markets and regulations",
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-white/30 text-sm font-medium uppercase tracking-widest">Expertise</span>
            <Separator className="flex-1 bg-white/10" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            What I Bring
          </h2>

          <p className="text-lg text-white/50 max-w-2xl mb-16">
            A unique combination of strategic vision and hands-on execution 
            that drives measurable results.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <skill.icon className="h-6 w-6 text-white/60" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
