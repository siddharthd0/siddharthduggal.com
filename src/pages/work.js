import React from "react";
import { motion } from "framer-motion";
const expoOut = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: expoOut } },
};

function ArrowIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const projects = [
  {
    name: "Bloon.ai",
    description: "AI product studio.",
    year: "2024",
    url: "bloon.ai",
    href: "https://bloon.ai",
  },
  {
    name: "Tech Optimum",
    description: "Free coding courses for students.",
    year: "2022",
    url: "techoptimum.org",
    href: "https://techoptimum.org",
  },
];

export default function Work() {
  return (
    <>
      <main className="relative z-10 min-h-screen flex items-center px-[max(2.5rem,8vw)]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full max-w-lg"
        >
          {/* Label */}
          <motion.p
            variants={item}
            className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#888] mb-10"
          >
            work
          </motion.p>

          {/* Project list */}
          <div>
            {projects.map(({ name, description, year, url, href }) => (
              <motion.div
                key={name}
                variants={item}
                className="border-t border-[#ffffff12] py-7 flex items-start justify-between gap-6"
              >
                <div className="min-w-0">
                  <h2
                    className="font-display font-light text-[#f0ece4] leading-none mb-2"
                    style={{ fontSize: "2.6rem" }}
                  >
                    {name}
                  </h2>
                  <p className="font-mono text-[11px] text-[#888] tracking-wide">
                    {description}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="font-mono text-[11px] text-[#666]">{year}</span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[#888] hover:text-[#e8a030] transition-colors duration-150 flex items-center gap-1"
                  >
                    <ArrowIcon />
                    {url}
                  </a>
                </div>
              </motion.div>
            ))}
            <motion.div variants={item} className="border-t border-[#ffffff12]" />
          </div>
        </motion.div>
      </main>
    </>
  );
}
