import Link from "next/link";
import { FiLinkedin, FiTwitter, FiArrowUpRight } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import {
  FaGithub,
  FaSpotify,
  FaDiscord,
  FaGoogle,
  FaNodeJs,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Script from "next/script";

function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.round((now - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const weeks = Math.round(days / 7);

  if (seconds < 60) return `${seconds} seconds ago`;
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours < 24) return `${hours} hours ago`;
  if (days < 7) return `${days} days ago`;
  return `${weeks} weeks ago`;
}

const tooltipVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `New message from ${formData.name} (${formData.email}): ${formData.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Message sent successfully");
      setIsSubmitting(false);
      setFormSubmitted(true);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setIsSubmitting(false);
    }
  };
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const res = await fetch(
          "http://worldtimeapi.org/api/timezone/America/Denver"
        );
        const data = await res.json();
        setCurrentTime(data.datetime);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    fetchTime();
  }, []);

  const formatMDTTime = () => {
    if (!currentTime) return "";
    const date = new Date(currentTime);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <style jsx global>{`
        input:focus,
        textarea:focus {
          outline: none; // This removes the default focus outline
          // Optionally, add your own focus styles here
          border-color: #yourColor; // Example: change border color on focus
          // Other custom styles for focus state
        }
      `}</style>
      <style jsx>{`
        .spinner {
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid blue;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className="rounded-2xl p-8 bg-gray-400/10 backdrop-blur-2xl col-span-4 h-full md:col-span-6">
        <h1 className="pb-4 text-2xl text-gray-300">Get in Touch</h1>
        {!formSubmitted ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: formSubmitted ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-neutral-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  value={formData.name}
                  className="block w-full rounded border border-gray-300/10 bg-transparent px-3 py-2 leading-6 text-neutral-200 placeholder-neutral-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-500 hover:border-gray-300 transition duration-300"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-neutral-500"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="block w-full rounded border border-gray-300/10 bg-transparent px-3 py-2 leading-6 text-neutral-200 placeholder-neutral-200 focus:border-white focus:ring-1 focus:ring-white hover:border-white transition duration-300"
                  placeholder="Your email"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-neutral-500"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  onChange={handleChange}
                  value={formData.message}
                  className="block w-full rounded border border-gray-300/10 bg-transparent px-3 py-2 leading-6 text-neutral-200 placeholder-neutral-200 focus:border-white focus:ring-1 focus:ring-white hover:border-white transition duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-4 py-2 flex items-center justify-center space-x-1.5 rounded-md bg-blue-300 px-3 py-1 dark:bg-blue-500/10 transition duration-200 dark:hover:bg-blue-600 dark:hover:bg-opacity-50"
              >
                {isSubmitting ? (
                  <div className="spinner"></div>
                ) : (
                  "Send to Siddharth"
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {" "}
            <p>
              Siddharth will get back to you ASAP. It is currently{" "}
              {formatMDTTime()} for him right now.
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export const hoverClassName =
  "transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100";

export function CardHoverEffect({ children, className }) {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-5deg" }}
      className={`group relative overflow-hidden rounded-2xl bg-blue-200 px-8 py-8  p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function TechnologyIcon({ icon: Icon, label }) {
  return (
    <motion.div
      key={label}
      initial="hidden"
      whileHover="visible"
      className="flex flex-col items-center justify-center p-4 border dark:border-blue-900/20 dark:bg-purple-600/20 backdrop-blur-md rounded-lg dark:border-purple-900 border-[2px] hover:border-purple-500 transition duration-300 dark:border-blue-300 relative"
    >
      <Icon className="text-3xl text-blue-200" />
      <motion.span
        className="absolute bottom-full mb-2 w-max text-sm text-purple-300 bg-purple-500/25 p-1 rounded-md"
        variants={tooltipVariants}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

export default function Home() {
  const projects = [
    {
      title: "Bloon AI",
      description: "AI-powered social media marketing.",
      href: "https://bloonai.com",
    },
    {
      title: "Tech Optimum",
      description: "A technology blog.",
      href: "https://techoptimum.com",
    },
  ];
  const [vscodeStatus, setVscodeStatus] = useState(null);

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  useEffect(() => {
    async function fetchMyCommits() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setVscodeStatus(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchMyCommits();
  }, []);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setCommits(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchCommits();
  }, []);

  const technologies = [
    {
      icon: FaReact,
      label: "React",
    },
    {
      icon: FaNodeJs,
      label: "Node.js",
    },
    {
      icon: FaPython,
      label: "Python",
    },
    {
      icon: IoLogoJavascript,
      label: "JavaScript",
    },
    {
      icon: FaJava,
      label: "Java",
    },
    {
      icon: FaGithub,
      label: "GitHub",
    },
    {
      icon: FaSpotify,
      label: "Spotify",
    },
    {
      icon: FaDiscord,
      label: "Discord",
    },
    {
      icon: FaGoogle,
      label: "Google Cloud",
    },
  ];
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const res = await fetch(
          "http://worldtimeapi.org/api/timezone/America/Denver"
        );
        const data = await res.json();
        setCurrentTime(data.datetime);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    fetchTime();
  }, []);

  const formatMDTTime = () => {
    if (!currentTime) return "";
    const date = new Date(currentTime);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  const [showAboutMe, setShowAboutMe] = useState(false);

  const handleReadMoreClick = () => {
    setShowAboutMe(!showAboutMe);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const [birthdayCountdown, setBirthdayCountdown] = useState("");
  useEffect(() => {
    const calculateBirthdayCountdown = () => {
      const today = new Date();
      let birthday = new Date(today.getFullYear(), 11, 7);
      if (today > birthday) {
        birthday.setFullYear(today.getFullYear() + 1);
      }
      const diff = birthday - today;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setBirthdayCountdown(`${days}`);
    };

    calculateBirthdayCountdown();
    const interval = setInterval(calculateBirthdayCountdown, 86400000);

    return () => clearInterval(interval);
  }, []);

  const custom = showAboutMe ? 1 : -1;
  return (
    <>
      <Nav />

      <main className="z-10 mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-6 gap-6 px-6 pb-40 pt-32">
        <AnimatePresence custom={custom}>
          <div className="col-span-4 flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-blue-200 px-8 py-8 dark:border-blue-500 dark:bg-blue-900/20 dark:shadow-none dark:backdrop-blur-2xl md:col-span-4">
            {!showAboutMe ? (
              <>
                {" "}
                <div className="flex justify-between">
                  <Link
                    className="flex items-center justify-center space-x-1.5 rounded-full bg-blue-300 px-3 py-1 dark:bg-blue-900/20 transition duration-200 dark:hover:bg-blue-800 dark:hover:bg-opacity-50"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/standups"
                  >
                    <span>Weekly Standups</span>
                    <span>
                      <FiArrowUpRight />
                    </span>
                  </Link>
                  <span className="ml-4 text-sm text-gray-300">
                    {formatMDTTime()}
                  </span>
                </div>
                <div class=" h-72 w-72 animate-blob rounded-full bg-blue-900 opacity-8 mix-blend-normal blur-3xl shadow-lg shadow-blue-700/50 filter"></div>
                <motion.div
                  key="currentInfo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-between"
                >
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-xl text-blue-900 dark:text-blue-300 dark:text-glow-blue-500/50">
                        Siddharth Duggal
                      </h1>

                      <p className="text-blue-600 dark:text-blue-300/80 dark:text-glow-blue-500/50">
                        17 year old full-stack founder.
                      </p>
                    </div>
                  </div>

                  <button
                    className="flex items-center text-blue-600 dark:text-blue-300/80 dark:text-glow-blue-500/50 hover:text-gray-100 transition duration-300"
                    onClick={handleReadMoreClick}
                  >
                    {" "}
                    <span className="pr-2"> Read more</span> <FiArrowUpRight />
                  </button>
                </motion.div>
              </>
            ) : (
              <motion.div
                key="aboutMe"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="overflow-y-auto pr-2"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl text-blue-800 dark:text-blue-400 dark:text-glow-blue-900/50">
                    About Me
                  </h2>
                  <button
                    onClick={handleReadMoreClick}
                    className="text-blue-600 dark:text-blue-300/80 dark:text-glow-blue-500/50 hover:text-gray-100 transition duration-300"
                  >
                    Back
                  </button>
                </div>
                <p className="pt-4 text-blue-300 dark:text-blue-100/80 dark:text-glow-blue-300/50">
                  I'm a 17 year old full-stack developer and founder. I'm
                  currently working on Bloon AI and Tech Optimum. I'm passionate
                  about technology and entrepreneurship.
                </p>
                <p className="pt-2 text-blue-300 dark:text-blue-100/80 dark:text-glow-blue-300/50">
                  My goal is to build something that is impactful and
                  meaningful. I'm currently working on Bloon AI and Tech
                  Optimum.
                </p>
                <p className="pt-2 text-blue-300 dark:text-blue-100/80 dark:text-glow-blue-300/50">
                  Feel free to connect with me!
                </p>
              </motion.div>
            )}
          </div>
        </AnimatePresence>

        <CardHoverEffect className="dark:border-blue-900/10 border-[2px] hover:border-blue-600 transition duration-300 dark:bg-blue-900/20 dark:backdrop-blur-2xl col-span-4 h-full md:col-span-2">
          <div className="flex justify-between p-4 rounded-xl bg-gray-200 dark:bg-blue-700/20">
            {[
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
            ].map(({ icon: Icon, href, tip }, index) => (
              <motion.div
                key={index}
                className="relative flex items-center justify-center  rounded-full text-white transition-colors duration-300 hover:text-blue-500"
                initial="hidden"
                whileHover="visible"
              >
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="text-xl" />
                </Link>
                <motion.span
                  className="absolute bottom-full mb-2 w-max text-sm text-blue-300 bg-blue-500/25 p-1 rounded-md"
                  variants={tooltipVariants}
                >
                  {tip}
                </motion.span>
              </motion.div>
            ))}
          </div>

          <div class="mt-4 col-span-2 flex justify-between px-4 py-2 bg-gray-200 dark:bg-blue-700/20 rounded-xl shadow-md ">
            {vscodeStatus ? (
              <div>
                <motion.div
                  className="relative rounded-full text-white transition-colors duration-300 hover:text-blue-500"
                  initial="hidden"
                  whileHover="visible"
                >
                  <span className="text-[10px]">
                    {formatTimeAgo(vscodeStatus.commitDate)}
                  </span>

                  <motion.span
                    className="absolute bottom-full mb-2 w-max text-sm text-blue-300 bg-blue-500/25 p-1 rounded-md"
                    variants={tooltipVariants}
                  >
                    {vscodeStatus.commitDate}
                  </motion.span>
                </motion.div>

                <div className="flex items-center space-x-3 text-sm">
                  <a
                    href="https://github.com/siddharthd0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm"
                  >
                    <FaGithub className="text-lg text-gray-100" />
                  </a>
                  <div className="flex flex-col">
                    <a
                      href={vscodeStatus.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm"
                    >
                      <span className="font-semibold text-blue-200">
                        {vscodeStatus.repoName.slice(0, 10) +
                          (vscodeStatus.repoName.length > 10 ? "..." : "")}
                      </span>
                    </a>
                    <a
                      href={vscodeStatus.commitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs"
                    >
                      <span className="text-gray-100 hover:text-white transition duration-200">
                        {vscodeStatus.commitMessage.slice(0, 14) +
                          (vscodeStatus.commitMessage.length > 14 ? "..." : "")}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div
                class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white"
                role="status"
                aria-label="loading"
              >
                <span class="sr-only">Loading...</span>
              </div>
            )}
          </div>
        </CardHoverEffect>
        <CardHoverEffect className="dark:border-green-900/10 border-[2px] hover:border-green-500 transition duration-300 dark:border-blue-300 dark:bg-green-800/30 dark:shadow-none dark:backdrop-blur-2xl col-span-3 h-full md:col-span-3">
          <div className="mt-2 col-span-3 flex justify-center items-center px-4 py-2 bg-gray-200 dark:bg-green-700/20 rounded-xl shadow-md">
            <div className="flex items-center justify-center space-x-3 text-sm">
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1E4qXw4kD6a8K7?si=8e9e9e9e9e9e9e9e"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-sm"
              >
                <FaSpotify className="text-lg text-gray-100" />
                <span className="font-semibold">Top 15</span>
              </a>
            </div>
          </div>

          <div className="mt-4 flex justify-between rounded-xl shadow-md">
            <iframe
              src="https://open.spotify.com/embed/playlist/05oxcctpidL0K9QTVq7Bvn?utm_source=generator&theme=0"
              width="100%"
              height="152"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </CardHoverEffect>
        <div className="rounded-2xl p-8 dark:border-green-300 px-8 py-8 dark:border-green-800 bg-purple-900/20 dark:shadow-none dark:backdrop-blur-2xl col-span-3 h-full md:col-span-3 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-72 w-72 animate-blob rounded-full bg-purple-900 opacity-8 mix-blend-normal blur-3xl shadow-lg shadow-purple-700/10 filter"></div>

          <div className="grid grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <TechnologyIcon key={index} icon={tech.icon} label={tech.label} />
            ))}
          </div>
        </div>

        <ContactForm />
      </main>
    </>
  );
}
