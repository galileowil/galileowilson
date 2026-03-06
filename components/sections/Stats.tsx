"use client";

import { motion, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, BarChart3, Globe, Users } from "lucide-react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { 
    value: 50, 
    suffix: "M+",
    prefix: "$",
    label: "Revenue Generated",
    icon: TrendingUp,
    color: "from-green-500/20 to-emerald-500/20"
  },
  { 
    value: 50, 
    suffix: "+",
    label: "Companies Advised",
    icon: BarChart3,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  { 
    value: 40, 
    suffix: "+",
    label: "Team Members Led",
    icon: Users,
    color: "from-purple-500/20 to-pink-500/20"
  },
  { 
    value: 12, 
    suffix: "+",
    label: "Countries",
    icon: Globe,
    color: "from-orange-500/20 to-yellow-500/20"
  },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-white/30 text-sm font-medium uppercase tracking-widest">Impact</span>
            <Separator className="flex-1 bg-white/10" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16">
            Track Record
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="h-6 w-6 text-white/40" />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      className="w-2 h-2 bg-white/60 rounded-full"
                    />
                  </div>
                  
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                    {stat.prefix && <span className="text-white/60">{stat.prefix}</span>}
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  <div className="text-sm text-white/40 uppercase tracking-wider">
                    {stat.label}
                  </div>

                  {/* Animated bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                    className="h-1 bg-gradient-to-r from-white/20 to-white/5 rounded-full mt-4"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Growth Chart Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-white/[0.02] border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Revenue Growth Trajectory</h3>
              <span className="text-sm text-white/40">2022 — Today</span>
            </div>
            
            <div className="relative h-32 flex items-end gap-2">
              {[20, 35, 45, 60, 75, 90, 100].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${height}%` } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-white/10 to-white/5 rounded-t-sm hover:from-white/20 hover:to-white/10 transition-colors"
                />
              ))}
            </div>
            
            <div className="flex justify-between mt-4 text-xs text-white/30">
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
              <span>Today</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
