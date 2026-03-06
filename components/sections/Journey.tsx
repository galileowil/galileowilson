"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";

const milestones = [
  {
    year: "2022",
    title: "Early Entrepreneur",
    description: "Began entrepreneurial journey building a sneaker resale business and running online communities. This evolved into operating NFT communities and managing collaborations between brands, creators, and digital communities.",
  },
  {
    year: "2022",
    title: "KOL Management & Collaborations",
    description: "Moved into collaboration management and KOL strategy, working closely with creators and helping companies structure influencer-driven growth systems. This phase laid the foundation for deep relationships with creators across the industry.",
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
    description: "Stepped into executive leadership as Chief Partnership Officer and Chief Growth Officer. Oversaw client relationships, growth strategy, and internal operational systems across multiple teams and major clients. Scaled from finding the company to managing 15+ people.",
    link: "https://x.com/apcollective",
  },
  {
    year: "2025",
    title: "CPO & CGO at AP Collective (Continued)",
    description: "Continued executive leadership at AP Collective through mid-2025, driving growth initiatives and managing key client relationships while scaling internal operations.",
    link: "https://x.com/apcollective",
  },
  {
    year: "2025",
    title: "Head of BD — Hello Moon",
    description: "Served as Head of Business Development, working closely with institutional partners, clients, and ecosystem builders. Shaped BD and growth strategy while building infrastructure experience based in NYC.",
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

export function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-white/30 text-sm font-medium uppercase tracking-widest">Journey</span>
            <Separator className="flex-1 bg-white/10" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16">
            Career Timeline
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-white rounded-full -translate-x-[5px] mt-2" />

                  {/* Year */}
                  <div className="pl-8 md:pl-0 md:w-1/2 md:text-right md:pr-12">
                    <span className="text-2xl font-bold text-white/30">{milestone.year}</span>
                  </div>

                  {/* Content */}
                  <div className="pl-8 md:pl-12 md:w-1/2">
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-white/50 leading-relaxed">{milestone.description}</p>
                    {milestone.link && (
                      <a 
                        href={milestone.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-sm text-white/30 hover:text-white/60 transition-colors"
                      >
                        View company →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
