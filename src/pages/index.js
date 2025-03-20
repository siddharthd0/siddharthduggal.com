import Link from "next/link";
import { FiLinkedin, FiTwitter, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaDiscord } from "react-icons/fa";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { productData } from "../components/show-off.jsx";

export const hoverClassName =
  "transform-gpu transition-all will-change-[outline,_transform] group-hover:scale-95 active:scale-100";

export function CardHoverEffect({ children, className }) {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-2deg" }}
      className={`group relative overflow-hidden rounded-2xl bg-[#f5e2cc] px-8 py-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const blobVariants = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    transition: { duration: 8, ease: "linear", repeat: Infinity, repeatType: "loop" },
  },
};

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/siddharthd0",
    tip: "@siddharthd0",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/siddharth-duggal",
    tip: "/in/siddharth-duggal",
  },
  {
    icon: FiTwitter,
    href: "https://twitter.com/siddharthd01",
    tip: "@siddharthd01",
  },
  {
    icon: FaDiscord,
    href: "https://discord.com/users/910659572199464990",
    tip: "@siddharth._",
  },
];

export default function Home() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  
  const handleReadMoreClick = () => setShowAboutMe(!showAboutMe);

  return (
    <>
      <style jsx global>{`
        body {
          background-color: #fcf7f2;
          background-image: url("./Unknown-2.jpg");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        @font-face {
          font-family: "GT Alpina";
          src: url("/path/to/your/gt-alpina-font.woff2") format("woff2"),
            url("/path/to/your/gt-alpina-font.woff") format("woff");
          font-weight: normal;
          font-style: normal;
        }

        .font-alpina {
          font-family: "GT Alpina", ui-serif, Georgia, Cambria,
            "Times New Roman", Times, serif;
        }
      `}</style>

      <main className="text-[#573c28] z-10 h-screen flex items-center justify-center">
        <AnimatePresence>
          <motion.div
            className="flex flex-col justify-between overflow-hidden rounded-2xl bg-[#f5e2cc]/20 border-[#ad8b73] px-8 py-8 shadow-none backdrop-blur-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="h-18 w-32 rounded-full bg-[#ad8b73]/50 opacity-2 mix-blend-normal blur-3xl shadow-lg shadow-[#ad8b73]/20 filter"
              variants={blobVariants}
              animate="animate"
            ></motion.div>
            
            <div className="flex items-center justify-between">
              <div>
                <motion.h1
                  className="text-4xl text-[#755d4c] font-alpina"
                  variants={itemVariants}
                >
                  Siddharth Duggal
                </motion.h1>
                <motion.p
                  className="text-[#ad8b73] pt-2"
                  variants={itemVariants}
                >
                  Founder of{" "}
                  <span className="text-[#ad8b73] hover:text-[#8c5844] transition duration-200">
                    {productData.bloon.title}
                  </span>{" "}
                  &{" "}
                  <a
                    href={productData.techOptimum.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-[#ad8b73] hover:text-[#8c5844] transition duration-200">
                      {productData.techOptimum.title}
                    </span>
                    </a>
                  
        
                  
                </motion.p> 
              </div>
            </div>

            <motion.div
              className="justify-between flex items-center pt-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, tip }, index) => (
                  <motion.div
                    key={index}
                    className="text-md text-[#ad8b73] transition-colors duration-300 hover:text-[#8c5844]"
                    variants={itemVariants}
                    title={tip}
                  >
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      <Icon />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.button
                className="flex items-center text-lg text-[#ad8b73] hover:text-[#8c5844] transition duration-300 rounded-full"
                onClick={handleReadMoreClick}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Read more about me"
              >
                <FiArrowUpRight />
              </motion.button>
            </motion.div>
            
            <motion.nav
              className="flex space-x-4 pt-6 text-sm"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Link href="/work">
                  <p className="text-[#ad8b73] hover:text-[#8c5844] transition duration-300">
                    /work
                  </p>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/thoughts">
                  <p className="text-[#ad8b73] hover:text-[#8c5844] transition duration-300">
                    /thoughts
                  </p>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/contact">
                  <p className="text-[#ad8b73] hover:text-[#8c5844] transition duration-300">
                    /contact
                  </p>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        </AnimatePresence>
      </main>

      <AboutMeModal 
        show={showAboutMe} 
        onClose={handleReadMoreClick} 
      />

      <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-center h-16 text-[#ad8b73] font-alpina">
        © {new Date().getFullYear()} Siddharth Duggal
      </footer>
    </>
  );
}

function AboutMeModal({ show, onClose }) {
  if (!show) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div
          className="max-w-sm bg-gradient-to-br from-[#f5e2cc] to-[#e6c8a9] rounded-md p-4 overflow-y-auto shadow-lg py-8 px-6 mx-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-4xl text-[#ad8b73] hover:text-[#8c5844] transition duration-300"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <div>
              <motion.img
                src="/dubai-fixed.png"
                alt="Siddharth Duggal"
                className="w-40 rounded-md"
                loading="lazy"
              />
              
              <div className="mt-4">
                <motion.h2 className="text-2xl text-[#755d4c] font-alpina">
                  Hey, I&apos;m Siddharth!
                </motion.h2>

                <motion.p className="text-[#ad8b73] mt-2 text-sm">
                  I enjoy creating things that live on the internet.
                  I&apos;m currently working on{" "}
                  <span className="text-[#ad8b73]">
                    {productData.bloon.title}
                  </span>
                  {" "}
                  , an AI product studio. I also run a non-profit,{" "}
                  <a
                    href={productData.techOptimum.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ad8b73] hover:text-[#8c5844] transition duration-200"
                  >
                    {productData.techOptimum.title}
                  </a>
                  {" "}
                  to help students learn how to code for free.

                  <div className="mt-4">
                    Other than that, I enjoy flying drones and playing table
                    tennis.
                  </div>

                  <div className="mt-4">
                    Read more about my{" "}
                    <a
                      href="/work"
                      className="text-[#ad8b73] hover:text-[#8c5844] transition duration-200"
                    >
                      work
                    </a>
                    {" "}or{" "}
                    <a
                      href="/contact"
                      className="text-[#ad8b73] hover:text-[#8c5844] transition duration-200"
                    >
                      get in touch with me.
                    </a>
                  </div>
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}