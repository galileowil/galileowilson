"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  TrendingUp, 
  Users, 
  Settings, 
  Brain, 
  BarChart3, 
  Handshake,
  Zap,
  Globe
} from "lucide-react";

const skills = [
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Design and implement scalable growth systems that drive long-term adoption through market positioning, growth loops, and community mechanics.",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Led teams of 40+ people across growth, marketing, and operations. Building high-performance teams that execute.",
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    description: "Design internal systems that allow companies to scale efficiently. Team structure, workflows, and performance frameworks.",
  },
  {
    icon: Brain,
    title: "AI Implementation",
    description: "Identify where AI can replace manual workflows, build internal AI systems, and implement AI into marketing and operations.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Review internal systems and metrics to identify growth bottlenecks, cost inefficiencies, and scalable performance strategies.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "Access to an extensive global network of creators, founders, operators, and institutional investors.",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description: "Strategy alone doesn't create results. We execute campaigns, launch initiatives, and build systems that deliver.",
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description: "Help companies scale internationally through market expansion strategies, local creator ecosystems, and cross-border growth.",
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
            <span className="text-white/30 text-sm font-medium uppercase tracking-widest">Capabilities</span>
            <Separator className="flex-1 bg-white/10" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            What I Bring
          </h2>

          <p className="text-white/50 text-lg mb-16 max-w-2xl">
            Working with Wilson Growth means working with someone who combines strategy, execution, and network access.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <Card className="bg-white/[0.02] border-white/10 hover:bg-white/[0.04] transition-all duration-500 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                        <skill.icon className="h-5 w-5 text-white/60" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{skill.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{skill.description}</p>
                      </div>
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
