// ProjectDeck.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardHoverEffect from "./card-hover";
import { FiExternalLink } from "react-icons/fi";

const PRODUCT_DATA = {
  bloon: {
    title: "Bloon AI",
    description: "AI tools that work",
    website: "https://bloon.ai",
    products: [
      {
        name: "NinjaChat",
        url: "https://ninjachat.ai",
        favicon: "https://ninjachat.ai/favicon.ico",
        description: "Chat with multiple AI models in one place. Access ChatGPT, Claude, and Gemini without switching between apps. Generate videos, chat with PDFs, compare AI models, and more."
      },
      {
        name: "PhotoGenius",
        url: "https://photogenius.ai",
        favicon: "https://photogenius.ai/favicon.ico",
        description: "Type what you want to see and get images instantly. Create visuals for social media, marketing, and personal projects without design skills."
      }
    ]
  },
  techOptimum: {
    title: "Tech Optimum",
    description: "Free coding education.",
    website: "https://techoptimum.org",
    foundedDate: "January 2022"
  }
};

// Export product data separately from the component
export const productData = PRODUCT_DATA;

const projects = [
  {
    ...PRODUCT_DATA.bloon,
    image: "/Screenshot 2025-03-19 at 7.35.08 PM.png",
    expandedContent: (
      <>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl text-[#755d4c] font-alpina ">{PRODUCT_DATA.bloon.title}</h2>
          <a
            href={PRODUCT_DATA.bloon.website}
            className="gap-2 rounded-md px-6 py-2 flex items-center justify-center space-x-1.5 bg-[#f5e2cc] transition duration-200 hover:bg-[#ebd4bd] border-[1px] border-[#ad8b73]/30 hover:border-[#ad8b73] transition duration-200 hover:text-[#8c5844] text-[#ad8b73] font-medium text-sm "
          >
            Visit bloon.ai <FiExternalLink className="size-4" />
          </a>
        </div>
        <p className="text-[#ad8b73]/80 mb-4">
          Bloon AI makes useful AI tools that save you time. We build simple interfaces for powerful technology.
        </p>

        <h2 className="text-3xl text-[#755d4c] font-alpina pb-4 mt-8">
          Current Products
        </h2>
        
        <div className="space-y-6">
          {PRODUCT_DATA.bloon.products.map((product, index) => (
            <div key={index} className="rounded-5xl bg-gradient-to-br from-[#f5e2cc] to-[#e6c8a9] p-4">
              <div className="flex items-center gap-2 mb-2">
             
                <h3 className="text-xl text-[#755d4c] font-alpina">{product.name}</h3>
              </div>
              <p className="text-[#ad8b73]/80">
                {product.description}
              </p>
              <a 
                href={product.url}
                className="text-[#8c5844] hover:underline text-sm font-medium mt-2 inline-flex items-center gap-1"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src={product.favicon} 
                  alt="" 
                  className="w-3 h-3 rounded-sm"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                Visit {product.url.replace('https://', '')}
              </a>
            </div>
          ))}
        </div>

        
      </>
    ),
  },
  {
    title: PRODUCT_DATA.techOptimum.title,
    description: PRODUCT_DATA.techOptimum.description,
    image: "/Screenshot 2024-04-07 at 7.53.26 PM.png",
    expandedContent: (
      <>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl text-[#755d4c] font-alpina ">{PRODUCT_DATA.techOptimum.title}</h2>
          <a
            href={PRODUCT_DATA.techOptimum.website}
            className="gap-2 rounded-md px-6 py-2 flex items-center justify-center space-x-1.5 bg-[#f5e2cc] transition duration-200 hover:bg-[#ebd4bd] border-[1px] border-[#ad8b73]/30 hover:border-[#ad8b73] transition duration-200 hover:text-[#8c5844] text-[#ad8b73] font-medium text-sm "
          >
            Visit techoptimum.org <FiExternalLink className="size-3 md:size-4" />
          </a>
        </div>
        <p className="text-[#ad8b73]/80 mb-4">
          I founded Tech Optimum in {PRODUCT_DATA.techOptimum.foundedDate}. Tech Optimum provides free
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

// Define the component with a name
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
