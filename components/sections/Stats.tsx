"use client";

import { motion, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "M+", prefix: "$", label: "Revenue Generated" },
  { value: 50, suffix: "+", prefix: "", label: "Companies Advised" },
  { value: 25, suffix: "+", prefix: "", label: "Team Members Led" },
  { value: 12, suffix: "+", prefix: "", label: "Countries" },
];

// Linear growth data points (2022 → Today)
const growthData = [
  { year: "2022", value: 15 },
  { year: "2023", value: 35 },
  { year: "2024", value: 65 },
  { year: "Today", value: 100 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 sm:py-40 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">
              Impact
            </span>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="group"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-white mb-3">
                  <AnimatedNumber 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix}
                  />
                </div>
                <div className="text-sm text-white/40 tracking-wide">
                  {stat.label}
                </div>
                
                {/* Subtle underline animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="h-px bg-white/10 mt-4 origin-left group-hover:bg-white/20 transition-colors"
                />
              </motion.div>
            ))}
          </div>

          {/* Linear Growth Chart */}
          <motion.div
            variants={itemVariants}
            className="mt-20 pt-16 border-t border-white/10"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Revenue Growth Trajectory</h3>
                <p className="text-sm text-white/40">Linear growth from 2022 to Today</p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                2022 — Today
              </span>
            </div>

            {/* Chart Container */}
            <div className="relative h-48 bg-white/[0.02] rounded-2xl border border-white/10 p-6 overflow-hidden">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between px-6 py-6 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-px bg-white/5 w-full" />
                ))}
              </div>

              {/* Bars */}
              <div className="relative h-full flex items-end justify-between gap-4">
                {growthData.map((point, index) => (
                  <motion.div
                    key={point.year}
                    className="flex-1 flex flex-col items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.15 }}
                  >
                    {/* Value label */}
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 + index * 0.15 }}
                      className="text-sm font-medium text-white/60"
                    >
                      ${point.value}K
                    </motion.span>
                    
                    {/* Bar */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${point.value}%` } : {}}
                      transition={{ 
                        duration: 1,
                        delay: 0.6 + index * 0.15,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="w-full max-w-24 bg-gradient-to-t from-white/20 to-white/5 rounded-t-lg relative group cursor-pointer"
                    >
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-white/10 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    
                    {/* Year label */}
                    <span className="text-xs text-white/30 uppercase tracking-wider">
                      {point.year}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Linear trend line */}
              <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 pointer-events-none"
              >
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <motion.line
                    x1="12%"
                    y1="85%"
                    x2="88%"
                    y2="15%"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.5, delay: 1.4 }}
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
