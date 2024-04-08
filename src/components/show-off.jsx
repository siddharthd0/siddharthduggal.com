// ProjectDeck.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardHoverEffect from "./card-hover";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Bloon AI",
    description: "AI-powered tutor.",
    image: "/Screenshot 2024-04-07 at 7.52.41 PM.png",
    expandedContent: (
      <>
       <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl text-[#755d4c] font-alpina ">Bloon AI</h2>
          <a
            href="https://bloon.ai"
            className="gap-2 rounded-md px-6 py-2 flex items-center justify-center space-x-1.5 bg-[#f5e2cc] transition duration-200 hover:bg-[#ebd4bd] border-[1px] border-[#ad8b73]/30 hover:border-[#ad8b73] transition duration-200 hover:text-[#8c5844] text-[#ad8b73] font-medium text-sm "
          >
            Visit bloon.ai <FiExternalLink className="size-4" />
          </a>
        </div>
        <p className="text-[#ad8b73]/80 mb-4">
          I'm the Founder and CEO of Bloon AI, an AI-powered tutor that can
          visually and audibly explain complex concepts to students.
        </p>
      
        <h2 className="text-3xl text-[#755d4c] font-alpina pb-4 mt-8">
          The Problem
        </h2>
        <div className="rounded-5xl bg-gradient-to-br from-[#f5e2cc] to-[#e6c8a9] p-4 mb-4">
          <p className="text-[#ad8b73]/80">
            Over{" "}
            <span className="text-[#8c5844] font-bold">
              50 million students
            </span>{" "}
            struggle with understanding complex concepts, leading to a{" "}
            <span className="text-[#8c5844] font-bold">
              $50B+ annual tutoring market
            </span>{" "}
            that often fails to deliver effective solutions.
          </p>
        </div>
        <h2 className="text-3xl text-[#755d4c] font-alpina pb-4">
          What we&apos;re doing
        </h2>
        <p className="text-[#ad8b73]/80 mb-4">
          Bloon AI leverages  AI technology to provide{" "}
          <span className="text-[#8c5844] font-bold">
            personalized, interactive explanations
          </span>{" "}
          that adapt to each student's unique learning style, as if {" "}
          <span className="text-[#8c5844] font-bold">
            a tutor was sitting right next to them.
          </span>
          .
        </p>
      </>
    ),
  },
  {
    title: "Tech Optimum",
    description: "Free coding education.",
    image: "/Screenshot 2024-04-07 at 7.53.26 PM.png",
    expandedContent: (
      <>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl text-[#755d4c] font-alpina ">Tech Optimum</h2>
          <a
            href="https://techoptimum.org"
            className="gap-2 rounded-md px-6 py-2 flex items-center justify-center space-x-1.5 bg-[#f5e2cc] transition duration-200 hover:bg-[#ebd4bd] border-[1px] border-[#ad8b73]/30 hover:border-[#ad8b73] transition duration-200 hover:text-[#8c5844] text-[#ad8b73] font-medium text-sm "
          >
            Visit techoptimum.org <FiExternalLink className="size-4" />
          </a>
        </div>
        <p className="text-[#ad8b73]/80 mb-4">
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
          className="w-full rounded-md shadow-md "
        />

        <h3 className="text-2xl text-[#755d4c] font-alpina pb-2 mt-8">
          Hackathons
        </h3>
        <p className="text-[#ad8b73]/80 mb-4">
          Hosted{" "}
          <span className="text-[#8c5844] font-bold">
            2 hackathons with over 500 participants combined
          </span>{" "}
          with sponsors like Desmos, Replit, and Microsoft Azure.
         
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
        <img
            src="Screenshot 2024-04-07 at 7.41.43 PM.png"
            alt="Tech Optimum"
            className="w-full rounded-md shadow-md "
          />
            <img src="Screenshot 2024-04-07 at 7.43.18 PM.png"
            alt="Tech Optimum"
            className="w-full rounded-md shadow-md "
            />
        </div>
        <h3 className="text-2xl text-[#755d4c] font-alpina pb-2">
          Free Coding Courses
        </h3>
        <p className="text-[#ad8b73]/80 mb-4">
          Developed{" "}
          <span className="text-[#8c5844] font-bold">
            30+ beginner-friendly coding courses
          </span>{" "}
          in various programming languages and frameworks, reaching{" "}
          <span className="text-[#8c5844] font-bold">5k+ learners</span>{" "}
          globally.
        </p>
      </>
    ),
  },

  
];

const ProjectDeck = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-8">
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
              className="max-w-xl max-h-[80vh] bg-gradient-to-br from-[#f5e2cc] to-[#e6c8a9] rounded-xl p-8 overflow-y-auto shadow-2xl"
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
