"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Linkedin, Send, Twitter, Mail } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const contacts = [
  {
    icon: Twitter,
    label: "X",
    value: "@galileowilson",
    href: "https://x.com/galileowilson",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "galileowilson",
    href: "https://www.linkedin.com/in/galileowilson/",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@GalileoWil",
    href: "https://t.me/GalileoWil",
  },
  {
    icon: Mail,
    label: "Email",
    value: "wilson.growth@outlook.com",
    href: "mailto:wilson.growth@outlook.com",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 sm:py-48 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-20 flex items-baseline justify-between"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cream/30">
            — Contact
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-cream/20 hidden sm:inline">
            Let&apos;s talk
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-display text-cream leading-[0.95] mb-10">
              Work with
              <br />
              <span className="italic text-cream/70">Wilson Growth.</span>
            </h2>

            <p className="text-lg text-cream/50 max-w-xl leading-relaxed mb-12">
              We work with a limited number of companies each year. If
              you&apos;re building something ambitious and want help scaling it
              globally — reach out.
            </p>

            <a
              href="mailto:wilson.growth@outlook.com"
              className="inline-flex items-center gap-3 px-7 py-4 bg-cream text-background rounded-full text-sm font-medium tracking-wide hover:bg-gold transition-all duration-500 group"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.25 }}
            className="lg:col-span-5 space-y-px bg-cream/[0.06]"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, x: 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.08,
                  ease,
                }}
                className="flex items-center justify-between p-6 bg-background group hover:bg-cream/[0.02] transition-colors duration-500"
              >
                <div className="flex items-center gap-4">
                  <contact.icon className="h-4 w-4 text-cream/40 group-hover:text-cream/80 transition-colors" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-cream/30 mb-1">
                      {contact.label}
                    </div>
                    <div className="text-sm text-cream/70 group-hover:text-cream transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-cream/20 group-hover:text-cream/60 group-hover:translate-x-0.5 transition-all" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="hairline mt-32" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6, ease }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <span className="font-serif italic text-lg text-cream/40">
            Wilson Growth
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-cream/20 tabular-nums">
            © {new Date().getFullYear()} — All rights reserved
          </span>
        </motion.div>
      </div>
    </section>
  );
}
