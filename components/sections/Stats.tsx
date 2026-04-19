"use client";

import { motion, animate, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "M+", prefix: "$", label: "Revenue generated" },
  { value: 50, suffix: "+", prefix: "", label: "Companies advised" },
  { value: 25, suffix: "+", prefix: "", label: "Team members led" },
  { value: 12, suffix: "+", prefix: "", label: "Countries" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 sm:py-48 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-20 flex items-baseline justify-between"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cream/30">
            — Impact
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-cream/20 hidden sm:inline">
            In numbers
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/[0.06]">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.15 + index * 0.1,
                ease,
              }}
              className="bg-background p-8 sm:p-10 group"
            >
              <div className="font-serif text-6xl sm:text-7xl lg:text-8xl tracking-tight text-cream mb-6 leading-none">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <div className="text-sm text-cream/40 tracking-wide font-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease }}
          className="mt-20 max-w-2xl font-serif italic text-2xl sm:text-3xl text-cream/60 leading-snug"
        >
          &ldquo;A decade of compounding work with founders, operators, and
          ecosystems who refuse to move at the pace of the market.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
