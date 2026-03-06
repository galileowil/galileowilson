"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";

const milestones = [
  {
    year: "2024",
    title: "CEO at Wilson Growth",
    description: "Founded Wilson Growth to help Web3 companies achieve exponential growth through strategic consulting and operational support.",
  },
  {
    year: "2023",
    title: "CPO & CGO at AP Collective",
    description: "From finding the company to managing 15+ people. Working with every client as Chief Product Officer & Chief Growth Officer, leading all growth initiatives.",
    link: "https://x.com/apcollective",
  },
  {
    year: "2022",
    title: "Head of BD & Growth at HelloMoon",
    description: "Shaped BD and growth strategy for infrastructure platform based in NYC. Built partnerships and scaled user acquisition.",
    link: "https://x.com/HelloMoon_io",
  },
  {
    year: "2021",
    title: "Web3 Growth Advisor",
    description: "Started advising DeFi protocols and NFT projects on growth strategy, community building, and tokenomics.",
  },
  {
    year: "2020",
    title: "Director of Strategy",
    description: "Developed and executed growth strategies that expanded market presence into 5 new international markets.",
  },
  {
    year: "2018",
    title: "Senior Consultant",
    description: "Advised Fortune 500 companies on digital transformation and operational efficiency initiatives.",
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
