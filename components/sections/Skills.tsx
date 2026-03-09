"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 sm:py-40 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">
              Capabilities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight"
          >
            What I Bring
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-white/40 text-lg mb-20 max-w-xl leading-relaxed"
          >
            Working with Wilson Growth means working with someone who combines 
            strategy, execution, and network access.
          </motion.p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-lg overflow-hidden">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.06,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="bg-[#0a0a0a] p-6 sm:p-8 group hover:bg-white/[0.02] transition-colors duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                    <skill.icon className="h-4 w-4 text-white/40 group-hover:text-white/60 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white mb-2 tracking-tight">
                      {skill.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
