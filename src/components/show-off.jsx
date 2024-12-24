// ProjectDeck.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardHoverEffect from "./card-hover";
import { FiExternalLink } from "react-icons/fi";
import { FaLightbulb, FaBolt } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

const projects = [
  {
    title: "Helium Labs",
    description: "AI-powered products.",
    image: "/Screenshot 2024-04-07 at 7.52.41 PM.png",
    expandedContent: (
      <>
        <div className="flex flex-col space-y-6">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl text-[#755d4c] font-alpina">Helium Labs</h2>
          </div>

          {/* Main Description */}
          <div className="bg-gradient-to-br from-[#f5e2cc] to-[#e6c8a9] p-4 md:p-6 rounded-xl">
            <p className="text-[#ad8b73]/80 text-base md:text-lg">
              An{" "}
              <span className="text-[#8c5844] font-bold">
                AI venture studio
              </span>
              {" "}building the future of AI products. 
            </p>
          </div>

          {/* Products Section */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl text-[#755d4c] font-alpina">Our Products</h3>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
              <a
                href="https://ninjachat.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 md:p-4 rounded-lg bg-[#f5e2cc]/50 hover:bg-[#f5e2cc] transition-all duration-200"
              >
                <h4 className="text-[#8c5844] font-bold text-sm md:text-base">Ninjachat.ai</h4>
                <p className="text-[#ad8b73]/80 text-xs md:text-sm">All-in-one AI assistant</p>
              </a>
              <a
                href="https://photogenius.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 md:p-4 rounded-lg bg-[#f5e2cc]/50 hover:bg-[#f5e2cc] transition-all duration-200"
              >
                <h4 className="text-[#8c5844] font-bold text-sm md:text-base">Photogenius.ai</h4>
                <p className="text-[#ad8b73]/80 text-xs md:text-sm">All-in-one AI image generator</p>
              </a>
            </div>
          </div>

         

          {/* Problem Statement */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl text-[#755d4c] font-alpina">Our Mission</h3>
            <div className="rounded-lg bg-[#f5e2cc]/30 p-3 md:p-4">
              <p className="text-[#ad8b73]/80 text-sm md:text-base">
                AI is{" "}
                <span className="text-[#8c5844] font-bold">
                  evolving at an unprecedented rate
                </span>
                . We make it accessible through{" "}
                <span className="text-[#8c5844] font-bold">
                  simple, intuitive tools
                </span>
                {" "}that anyone can use.
              </p>
            </div>
          </div>

          {/* Hiring Call-to-Action */}
          <div className="bg-gradient-to-br from-[#f5e2cc] to-[#e6c8a9] p-4 md:p-6 rounded-xl">
            <h3 className="text-lg md:text-xl text-[#755d4c] font-alpina mb-2">Join Our Team</h3>
            <p className="text-[#ad8b73]/80 text-sm md:text-base mb-3">
              We&apos;re hiring smart, persistent, and versatile individuals who are ready to take a bet on themselves.{" "}
              <a
                href="mailto:siddharth@bloon.ai"
                className="text-[#8c5844] font-bold hover:text-[#755d4c] transition duration-200"
              >
                Email siddharth@bloon.ai →
              </a>
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Tech Optimum",
    description: "Free coding education.",
    image: "/Screenshot 2024-04-07 at 7.53.26 PM.png",
    expandedContent: (
      <>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
          <h2 className="text-2xl md:text-3xl text-[#755d4c] font-alpina">Tech Optimum</h2>
          <a
            href="https://techoptimum.org"
            className="gap-2 rounded-md px-4 md:px-6 py-2 flex items-center justify-center space-x-1.5 bg-[#f5e2cc] transition duration-200 hover:bg-[#ebd4bd] border-[1px] border-[#ad8b73]/30 hover:border-[#ad8b73] transition duration-200 hover:text-[#8c5844] text-[#ad8b73] font-medium text-xs md:text-sm"
          >
            Visit techoptimum.org <FiExternalLink className="size-3 md:size-4" />
          </a>
        </div>
        <p className="text-[#ad8b73]/80 mb-4 text-sm md:text-base">
          I founded Tech Optimum in January 2022. Tech Optimum provides free
          computer science education to students worldwide, aiming to{" "}
          <span className="text-[#8c5844] font-bold">
            bridge the digital divide
          </span>{" "}
          and{" "}
          <span className="text-[#8c5844] font-bold">
            empower the next generation of innovators
          </span>
          .
        </p>

        <img
          src="/tech-dash.png"
          alt="Tech Optimum"
          className="w-full rounded-md shadow-md mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl text-[#755d4c] font-alpina">
              Hackathons
            </h3>
            <p className="text-[#ad8b73]/80 text-sm md:text-base">
              Hosted{" "}
              <span className="text-[#8c5844] font-bold">
                2 hackathons with over 500 participants combined
              </span>{" "}
              with sponsors like Desmos, Replit, and Microsoft Azure.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <img
                src="Screenshot 2024-04-07 at 7.41.43 PM.png"
                alt="Tech Optimum Hackathon"
                className="w-full rounded-md shadow-md"
              />
              <img
                src="Screenshot 2024-04-07 at 7.43.18 PM.png"
                alt="Tech Optimum Hackathon"
                className="w-full rounded-md shadow-md"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl text-[#755d4c] font-alpina">
              Free Coding Courses
            </h3>
            <p className="text-[#ad8b73]/80 text-sm md:text-base">
              Developed{" "}
              <span className="text-[#8c5844] font-bold">
                30+ beginner-friendly coding courses
              </span>{" "}
              in various programming languages and frameworks, reaching{" "}
              <span className="text-[#8c5844] font-bold">5k+ learners</span>{" "}
              globally.
            </p>
          </div>
        </div>
      </>
    ),
  },
];

const ProjectDeck = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className="bg-gradient-to-br from-[#f5e2cc]/20 to-[#e6c8a9]/20 backdrop-blur-2xl rounded-2xl p-6 cursor-pointer"
          onClick={() => setSelectedCard(index)}
        >
          <h2 className="text-2xl text-[#755d4c] font-alpina pb-2">
            {project.title}
          </h2>
          <p className="text-[#ad8b73]/80 text-sm mb-4">
            {project.description}
          </p>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full rounded-md shadow-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          />
          <motion.button className="rounded-md px-6 py-2 flex items-center justify-center space-x-1.5 bg-[#f5e2cc] transition duration-200 hover:bg-[#ebd4bd] border-[1px] border-[#ad8b73]/30 hover:border-[#ad8b73] transition duration-200 hover:text-[#8c5844] text-[#ad8b73] font-medium text-sm w-full">
            Read More
          </motion.button>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedCard !== null && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="max-w-xl max-h-[80vh] bg-gradient-to-br from-[#f5e2cc] to-[#e6c8a9] rounded-xl p-8 overflow-y-auto shadow-2xl mx-4"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-4xl text-[#ad8b73] hover:text-[#8c5844] transition duration-300"
                onClick={() => setSelectedCard(null)}
              >
                &times;
              </button>
              {typeof selectedCard === "number" && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                >
                  {projects[selectedCard].expandedContent}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDeck;
