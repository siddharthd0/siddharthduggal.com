import React from "react";
import { motion } from "framer-motion";

const expoOut = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: expoOut } },
};

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1C4.134 1 1 4.134 1 8c0 3.09 2.006 5.716 4.79 6.641.35.064.479-.152.479-.338 0-.166-.006-.607-.009-1.192-1.948.423-2.359-.939-2.359-.939-.318-.809-.778-1.024-.778-1.024-.636-.435.048-.426.048-.426.703.049 1.073.721 1.073.721.624 1.069 1.638.76 2.037.581.063-.452.244-.76.444-.935-1.555-.177-3.19-.778-3.19-3.46 0-.764.273-1.389.721-1.879-.072-.177-.312-.889.069-1.853 0 0 .588-.188 1.927.719A6.71 6.71 0 018 4.82a6.71 6.71 0 011.756.236c1.338-.907 1.925-.719 1.925-.719.382.964.142 1.676.07 1.853.449.49.72 1.115.72 1.879 0 2.689-1.638 3.281-3.198 3.455.251.217.475.645.475 1.3 0 .938-.009 1.694-.009 1.924 0 .188.127.406.482.337C12.997 13.714 15 11.09 15 8c0-3.866-3.134-7-7-7z" fill="currentColor"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L6 7.5M6 7.5L1 13H3.5L7 9.5L10.5 13H13L8 7.5M6 7.5L3.5 1H1L6 7.5M8 7.5L13 1H10.5L7 4.5L8 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="0.9"/>
      <path d="M3.5 6V11.5M3.5 4.5V4.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M6.5 11.5V8.5C6.5 7.4 7.1 6.5 8 6.5C8.9 6.5 9.5 7.2 9.5 8.5V11.5M6.5 6V11.5" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const socials = [
  { icon: GitHubIcon, href: "https://github.com/siddharthd0", label: "GitHub" },
  { icon: XIcon, href: "https://twitter.com/siddharthd01", label: "Twitter" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/siddharth-duggal", label: "LinkedIn" },
];

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen flex items-center px-[max(2.5rem,8vw)]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full max-w-lg"
      >
        <motion.h1
          variants={item}
          className="font-display font-light text-[#f0ece4] leading-[0.95] mb-8"
          style={{ fontSize: "clamp(3.8rem, 6vw, 5.5rem)" }}
        >
          Siddharth
          <br />
          Duggal
        </motion.h1>

        <motion.p
          variants={item}
          className="font-mono text-[12px] text-[#888] leading-relaxed mb-8 max-w-xs"
        >
          I build software. Working on{" "}
          <a href="https://bloon.ai" target="_blank" rel="noopener noreferrer" className="text-[#f0ece4]/60 hover:text-[#e8a030] transition-colors duration-150">
            Bloon.ai
          </a>
          , and previously started{" "}
          <a href="https://techoptimum.org" target="_blank" rel="noopener noreferrer" className="text-[#f0ece4]/60 hover:text-[#e8a030] transition-colors duration-150">
            Tech Optimum
          </a>
          {" "}to get students into coding.
        </motion.p>

        <motion.div variants={item} className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#888] hover:text-[#e8a030] transition-colors duration-150"
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
