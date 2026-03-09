"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Raydium",
    description: "Strategic growth initiatives for leading Solana DEX. Driving liquidity expansion and trading volume through targeted partnerships.",
    tags: ["DeFi", "Solana"],
    link: "https://x.com/Raydium",
    logo: "/raydium.png",
    featured: true,
  },
  {
    title: "Avalanche",
    description: "Ecosystem growth and strategic advisory for Layer 1 blockchain platform. Scaling solutions and developer onboarding.",
    tags: ["Layer 1", "Blockchain"],
    link: "https://x.com/avax",
    logo: "/avalanche.png",
    featured: true,
  },
  {
    title: "Ronin Network",
    description: "Growth strategy for gaming-focused blockchain powering Axie Infinity. NFT ecosystem development.",
    tags: ["Gaming", "NFT"],
    link: "https://x.com/Ronin_Network",
    logo: "/ronin.png",
    featured: true,
  },
  {
    title: "Abstract Chain",
    description: "Consumer blockchain platform focused on mainstream adoption. Strategic positioning and go-to-market.",
    tags: ["Blockchain", "Consumer"],
    link: "https://x.com/AbstractChain",
    logo: "/abstract.jpg",
    featured: true,
  },
  {
    title: "OpenLedger",
    description: "DeFi infrastructure and growth strategy. Building the future of decentralized financial systems.",
    tags: ["DeFi", "Infrastructure"],
    link: "https://x.com/OpenledgerHQ",
    logo: "/openledger.jpg",
    featured: true,
  },
  {
    title: "NEAR Protocol",
    description: "Ecosystem development and strategic partnerships for scalable Layer 1 blockchain.",
    tags: ["Layer 1", "Blockchain"],
    link: "https://x.com/nearprotocol",
    logo: "/near.png",
    featured: true,
  },
  {
    title: "Pudgy Penguins",
    description: "Strategic advisory for leading NFT brand and consumer IP. Brand expansion and community growth.",
    tags: ["NFT", "Brand"],
    link: "https://x.com/pudgypenguins",
    logo: "/pudgy.png",
    featured: true,
  },
  {
    title: "Sophon",
    description: "DeFi infrastructure and growth advisory. Building next-generation financial primitives.",
    tags: ["DeFi", "Infrastructure"],
    link: "https://x.com/Sophon",
    logo: "/sophon.png",
    featured: false,
  },
  {
    title: "Zoku",
    description: "Advisory role focused on affiliate business development and strategic growth.",
    tags: ["Advisory"],
    link: "https://x.com/zokuxyz",
    logo: "/zoku.png",
    featured: false,
  },
  {
    title: "Sportfun",
    description: "Sports and gaming platform growth strategy.",
    tags: ["Sports", "Gaming"],
    link: "https://x.com/sportfun",
    logo: "/sportfun.png",
    featured: true,
  },
  {
    title: "Legacy Network",
    description: "DeFi and gaming ecosystem development.",
    tags: ["DeFi", "Gaming"],
    link: "https://x.com/LegacyNetworkio",
    logo: "/legacy.png",
    featured: false,
  },
  {
    title: "Revolving Games",
    description: "Gaming studio advisory and growth strategy.",
    tags: ["Gaming"],
    link: "https://x.com/Revolving_Games",
    logo: "/revolving.png",
    featured: false,
  },
  {
    title: "AlphaBot",
    description: "NFT tooling and automation platform advisory.",
    tags: ["NFT", "Tools"],
    link: "https://x.com/alphabot",
    logo: "/alphabot.png",
    featured: false,
  },
  {
    title: "Game7",
    description: "Web3 gaming ecosystem and infrastructure.",
    tags: ["Gaming", "Web3"],
    link: "https://x.com/game7hq",
    logo: null,
    featured: false,
  },
  {
    title: "GOAT Gaming",
    description: "Gaming platform growth and strategy.",
    tags: ["Gaming"],
    link: "https://x.com/playgoatgaming",
    logo: "/goat.png",
    featured: false,
  },
];

const featuredProjects = projects.filter(p => p.featured);
const otherProjects = projects.filter(p => !p.featured);

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

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 sm:py-40 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">
              Projects
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight"
          >
            Selected Work
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-white/40 text-lg mb-20 max-w-xl leading-relaxed"
          >
            Strategic growth and advisory work with leading Web3 projects, 
            DeFi protocols, and blockchain ecosystems.
          </motion.p>

          {/* Featured Projects - Clean Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group block"
              >
                <div className="p-6 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {project.logo ? (
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center overflow-hidden">
                          <Image 
                            src={project.logo} 
                            alt={project.title}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                          <span className="text-white/40 text-xs font-medium">
                            {project.title.slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <h3 className="text-lg font-medium text-white group-hover:text-white/90 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/20 group-hover:text-white/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs text-white/30 px-2 py-1 rounded bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Other Projects - Minimal List */}
          <motion.div 
            variants={itemVariants}
            className="mb-8"
          >
            <span className="text-xs uppercase tracking-[0.15em] text-white/20 font-medium">
              Also Worked With
            </span>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {otherProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + index * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group"
              >
                <div className="px-4 py-3 rounded border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                      {project.title}
                    </span>
                    <ArrowUpRight className="h-3 w-3 text-white/10 group-hover:text-white/30 transition-colors" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
