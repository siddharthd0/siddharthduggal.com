import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <motion.nav
      className="fixed left-1/2 z-50 top-8 flex w-fit -translate-x-1/2 items-center gap-7 rounded-full bg-[#080808]/80 backdrop-blur-md border border-[#ffffff12] px-8 py-3"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
    >
      {NAV_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="font-mono text-[11px] tracking-widest uppercase text-[#f0ece4]/60 hover:text-[#e8a030] transition-colors duration-200"
        >
          {label}
        </Link>
      ))}
    </motion.nav>
  );
}
