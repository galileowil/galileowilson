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
    title: "Raydium",
    description: "Strategic growth initiatives for leading Solana DEX. Driving liquidity expansion and trading volume through targeted partnerships and ecosystem development.",
    tags: ["DeFi", "Solana", "DEX", "Growth"],
    link: "https://x.com/Raydium",
    featured: true,
  },
  {
    title: "Avalanche",
    description: "Ecosystem growth and strategic advisory for Layer 1 blockchain platform. Scaling solutions and developer onboarding initiatives.",
    tags: ["Layer 1", "Blockchain", "Infrastructure"],
    link: "https://x.com/avax",
    featured: true,
  },
  {
    title: "Ronin Network",
    description: "Growth strategy for gaming-focused blockchain powering Axie Infinity. NFT ecosystem development and player acquisition.",
    tags: ["Gaming", "Blockchain", "NFT"],
    link: "https://x.com/Ronin_Network",
    featured: true,
  },
  {
    title: "Abstract Chain",
    description: "Consumer blockchain platform focused on mainstream adoption. Strategic positioning and go-to-market execution.",
    tags: ["Blockchain", "Consumer", "Strategy"],
    link: "https://x.com/AbstractChain",
    featured: true,
  },
  {
    title: "OpenLedger",
    description: "DeFi infrastructure and growth strategy. Building the future of decentralized financial systems.",
    tags: ["DeFi", "Infrastructure", "Strategy"],
    link: "https://x.com/OpenledgerHQ",
    featured: true,
  },
  {
    title: "NEAR Protocol",
    description: "Ecosystem development and strategic partnerships for scalable Layer 1 blockchain with human-readable accounts.",
    tags: ["Layer 1", "Blockchain", "Ecosystem"],
    link: "https://x.com/nearprotocol",
    featured: true,
  },
  {
    title: "Sophon",
    description: "DeFi infrastructure and growth advisory. Building next-generation financial primitives.",
    tags: ["DeFi", "Infrastructure"],
    link: "https://x.com/Sophon",
    featured: false,
  },
  {
    title: "Zoku",
    description: "Advisory role focused on affiliate business development and strategic growth initiatives.",
    tags: ["Advisory", "Affiliate", "Growth"],
    link: "https://x.com/zokuxyz",
    featured: false,
  },
  {
    title: "Sportfun",
    description: "Sports and gaming platform growth strategy.",
    tags: ["Sports", "Gaming"],
    link: "https://x.com/sportfun",
    featured: false,
  },
  {
    title: "Legacy Network",
    description: "DeFi and gaming ecosystem development.",
    tags: ["DeFi", "Gaming"],
    link: "https://x.com/LegacyNetworkio",
    featured: false,
  },
  {
    title: "Pudgy Penguins",
    description: "Strategic advisory for leading NFT brand and consumer IP. Brand expansion and community growth.",
    tags: ["NFT", "Brand", "Consumer"],
    link: "https://x.com/pudgypenguins",
    featured: true,
  },
  {
    title: "Revolving Games",
    description: "Gaming studio advisory and growth strategy.",
    tags: ["Gaming", "Advisory"],
    link: "https://x.com/Revolving_Games",
    featured: false,
  },
  {
    title: "AlphaBot",
    description: "NFT tooling and automation platform advisory.",
    tags: ["NFT", "Tools"],
    link: "https://x.com/alphabot",
    featured: false,
  },
  {
    title: "Game7",
    description: "Web3 gaming ecosystem and infrastructure.",
    tags: ["Gaming", "Web3"],
    link: "https://x.com/game7hq",
    featured: false,
  },
  {
    title: "GOAT Gaming",
    description: "Gaming platform growth and strategy.",
    tags: ["Gaming"],
    link: "https://x.com/playgoatgaming",
    featured: false,
  },
];

const featuredProjects = projects.filter(p => p.featured);
const otherProjects = projects.filter(p => !p.featured);

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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Selected Work
          </h2>
          
          <p className="text-white/50 text-lg mb-16 max-w-2xl">
            Strategic growth and advisory work with leading Web3 projects, DeFi protocols, and blockchain ecosystems.
          </p>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <Card className="group bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="bg-white/10 text-white/70 hover:bg-white/20">
                        Featured
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
              </motion.a>
            ))}
          </div>

          {/* Other Projects */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-white/30 text-sm font-medium uppercase tracking-widest">Also Worked With</span>
            <Separator className="flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {otherProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.5 + index * 0.05,
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <Card className="group bg-white/[0.01] border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">
                        {project.title}
                      </h4>
                      <ArrowUpRight className="h-3 w-3 text-white/20 group-hover:text-white/40 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
