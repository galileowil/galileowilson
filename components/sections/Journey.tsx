"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const milestones = [
  {
    year: "2022",
    title: "Early Entrepreneur",
    description: "Began entrepreneurial journey building a sneaker resale business and running online communities. This evolved into operating NFT communities and managing collaborations between brands, creators, and digital communities.",
  },
  {
    year: "2022",
    title: "KOL Management & Collaborations",
    description: "Moved into collaboration management and KOL strategy, working closely with creators and helping companies structure influencer-driven growth systems.",
  },
  {
    year: "2023",
    title: "Web3 Growth Advisor",
    description: "Started advising DeFi protocols and NFT projects on growth strategy, community building, and tokenomics. Built relationships with hundreds of creators across the global tech and crypto ecosystem.",
  },
  {
    year: "2023",
    title: "AP Collective — Founding Team",
    description: "Joined the founding stages of AP Collective. What began as a small KOL management operation quickly evolved into a large growth agency working with major companies in the Web3 space.",
    link: "https://x.com/apcollective",
  },
  {
    year: "2024-2025",
    title: "CPO & CGO at AP Collective",
    description: "Stepped into executive leadership as Chief Partnership Officer and Chief Growth Officer. Oversaw client relationships, growth strategy, and internal operational systems across multiple teams and major clients.",
    link: "https://x.com/apcollective",
  },
  {
    year: "2025",
    title: "Business Development Strategist — Hello Moon",
    description: "Served as Business Development Strategist, working closely with institutional partners, clients, and ecosystem builders. Shaped BD and growth strategy while building infrastructure experience based in NYC.",
    link: "https://x.com/HelloMoon_io",
  },
  {
    year: "Nov 2024",
    title: "Founded Wilson Growth",
    description: "Launched Wilson Growth as a strategic growth and advisory firm. Focused on helping ambitious companies build faster, scale smarter, and win their markets through AI, partnerships, and data-driven execution.",
  },
  {
    year: "Today",
    title: "Scaling Wilson Growth",
    description: "Building Wilson Growth into a next-generation advisory and growth firm. Working with a select number of ambitious companies each year to drive exponential growth and market leadership.",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-32 sm:py-40 relative" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">
              Journey
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-20 leading-tight"
          >
            Career Timeline
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year + milestone.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative pl-8"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 bg-white/30 rounded-full -translate-x-[3.5px]" />
                  
                  {/* Year */}
                  <span className="text-xs uppercase tracking-[0.15em] text-white/30 font-medium mb-2 block">
                    {milestone.year}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-medium text-white mb-3 tracking-tight">
                    {milestone.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/40 leading-relaxed text-sm sm:text-base">
                    {milestone.description}
                  </p>
                  
                  {/* Link if exists */}
                  {milestone.link && (
                    <a 
                      href={milestone.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm text-white/30 hover:text-white/60 transition-colors group"
                    >
                      View company
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
