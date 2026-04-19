"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const milestones = [
  {
    year: "2022",
    title: "Early Entrepreneur",
    description:
      "Began building sneaker resale and online communities, which evolved into operating NFT communities and managing collaborations between brands, creators, and digital communities.",
  },
  {
    year: "2022",
    title: "KOL Management & Collaborations",
    description:
      "Moved into collaboration management and KOL strategy, working closely with creators and helping companies structure influencer-driven growth systems.",
  },
  {
    year: "2023",
    title: "Web3 Growth Advisor",
    description:
      "Started advising DeFi protocols and NFT projects on growth strategy, community building, and tokenomics. Built relationships with hundreds of creators across the global tech and crypto ecosystem.",
  },
  {
    year: "2023",
    title: "AP Collective — Founding Team",
    description:
      "Joined the founding stages of AP Collective. What began as a small KOL management operation quickly evolved into a large growth agency working with major companies in the Web3 space.",
    link: "https://x.com/apcollective",
  },
  {
    year: "2024 — 2025",
    title: "CPO & CGO at AP Collective",
    description:
      "Stepped into executive leadership as Chief Partnership Officer and Chief Growth Officer. Oversaw client relationships, growth strategy, and internal operational systems across multiple teams and major clients.",
    link: "https://x.com/apcollective",
  },
  {
    year: "2025",
    title: "Business Development Strategist — Hello Moon",
    description:
      "Served as Business Development Strategist, working closely with institutional partners, clients, and ecosystem builders. Shaped BD and growth strategy while building infrastructure experience based in NYC.",
    link: "https://x.com/HelloMoon_io",
  },
  {
    year: "Nov 2024",
    title: "Founded Wilson Growth",
    description:
      "Launched Wilson Growth as a strategic growth and advisory firm. Focused on helping ambitious companies build faster, scale smarter, and win their markets through AI, partnerships, and data-driven execution.",
  },
  {
    year: "Today",
    title: "Scaling Wilson Growth",
    description:
      "Building Wilson Growth into a next-generation advisory and growth firm. Working with a select number of ambitious companies each year to drive exponential growth and market leadership.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-32 sm:py-48 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-20 flex items-baseline justify-between"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cream/30">
            — Journey
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-cream/20 hidden sm:inline">
            Chapter by chapter
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-display text-cream mb-24 leading-[0.95] max-w-3xl"
        >
          A <span className="italic text-cream/70">career</span> written
          one chapter at a time.
        </motion.h2>

        <div className="relative max-w-3xl">
          <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-cream/5 via-cream/10 to-cream/5" />

          <div className="space-y-14">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year + milestone.title}
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.25 + index * 0.06,
                  ease,
                }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-3 w-2 h-2 bg-cream/40 rounded-full -translate-x-[3.5px] ring-4 ring-background" />

                <div className="flex items-baseline gap-6 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-cream/30 font-sans tabular-nums">
                    {milestone.year}
                  </span>
                  <span className="flex-1 h-px bg-cream/5" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-cream mb-3 leading-tight">
                  {milestone.title}
                </h3>

                <p className="text-cream/50 leading-relaxed text-base max-w-2xl">
                  {milestone.description}
                </p>

                {milestone.link && (
                  <a
                    href={milestone.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-xs uppercase tracking-[0.2em] text-cream/30 hover:text-cream/80 transition-colors group"
                  >
                    View company
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
