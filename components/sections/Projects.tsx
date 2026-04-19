"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Raydium",
    description:
      "Strategic growth initiatives for leading Solana DEX. Driving liquidity expansion and trading volume through targeted partnerships.",
    tags: ["DeFi", "Solana"],
    link: "https://x.com/Raydium",
    logo: "/raydium.png",
    featured: true,
  },
  {
    title: "Avalanche",
    description:
      "Ecosystem growth and strategic advisory for Layer 1 blockchain platform. Scaling solutions and developer onboarding.",
    tags: ["Layer 1", "Blockchain"],
    link: "https://x.com/avax",
    logo: "/avalanche.png",
    featured: true,
  },
  {
    title: "Ronin Network",
    description:
      "Growth strategy for gaming-focused blockchain powering Axie Infinity. NFT ecosystem development.",
    tags: ["Gaming", "NFT"],
    link: "https://x.com/Ronin_Network",
    logo: "/ronin.png",
    featured: true,
  },
  {
    title: "Abstract Chain",
    description:
      "Consumer blockchain platform focused on mainstream adoption. Strategic positioning and go-to-market.",
    tags: ["Blockchain", "Consumer"],
    link: "https://x.com/AbstractChain",
    logo: "/abstract.jpg",
    featured: true,
  },
  {
    title: "OpenLedger",
    description:
      "DeFi infrastructure and growth strategy. Building the future of decentralized financial systems.",
    tags: ["DeFi", "Infrastructure"],
    link: "https://x.com/OpenledgerHQ",
    logo: "/openledger.jpg",
    featured: true,
  },
  {
    title: "NEAR Protocol",
    description:
      "Ecosystem development and strategic partnerships for scalable Layer 1 blockchain.",
    tags: ["Layer 1", "Blockchain"],
    link: "https://x.com/nearprotocol",
    logo: "/near.png",
    featured: true,
  },
  {
    title: "Pudgy Penguins",
    description:
      "Strategic advisory for leading NFT brand and consumer IP. Brand expansion and community growth.",
    tags: ["NFT", "Brand"],
    link: "https://x.com/pudgypenguins",
    logo: "/pudgy.png",
    featured: true,
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
    title: "Sophon",
    description:
      "DeFi infrastructure and growth advisory. Building next-generation financial primitives.",
    tags: ["DeFi", "Infrastructure"],
    link: "https://x.com/Sophon",
    logo: "/sophon.png",
    featured: false,
  },
  {
    title: "Zoku",
    description:
      "Advisory role focused on affiliate business development and strategic growth.",
    tags: ["Advisory"],
    link: "https://x.com/zokuxyz",
    logo: "/zoku.png",
    featured: false,
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

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

const ease = [0.16, 1, 0.3, 1] as const;

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 sm:py-48 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-20 flex items-baseline justify-between"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cream/30">
            — Selected Work
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-cream/20 hidden sm:inline tabular-nums">
            {String(projects.length).padStart(2, "0")} clients
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-display text-cream leading-[0.95] mb-8 max-w-3xl"
        >
          Trusted by{" "}
          <span className="italic text-cream/70">category-defining</span>{" "}
          teams.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="text-lg text-cream/50 max-w-xl mb-20 leading-relaxed"
        >
          Strategic growth and advisory work with leading Web3 projects, DeFi
          protocols, and blockchain ecosystems.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-px bg-cream/[0.06] mb-24">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + index * 0.06,
                ease,
              }}
              className="group block bg-background p-8 hover:bg-cream/[0.02] transition-colors duration-700 relative"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  {project.logo ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-cream/10">
                      <Image
                        src={project.logo}
                        alt={project.title}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-cream/5 flex items-center justify-center ring-1 ring-cream/10">
                      <span className="text-cream/50 text-xs font-medium">
                        {project.title.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <h3 className="font-serif text-2xl text-cream group-hover:text-cream transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight className="h-4 w-4 text-cream/20 group-hover:text-cream/80 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <p className="text-cream/45 text-sm leading-relaxed mb-6 max-w-md">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.2em] text-cream/30 px-3 py-1 rounded-full border border-cream/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="mb-8"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cream/30">
            — Also worked with
          </span>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-cream/[0.06]">
          {otherProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.04,
                ease,
              }}
              className="group bg-background px-5 py-5 hover:bg-cream/[0.02] transition-colors duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-base text-cream/70 group-hover:text-cream transition-colors">
                  {project.title}
                </span>
                <ArrowUpRight className="h-3 w-3 text-cream/10 group-hover:text-cream/50 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
