import Link from "next/link";
import { FiLinkedin, FiTwitter, FiArrowUpRight } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import ShowOff from "../components/show-off";
import { FiExternalLink } from "react-icons/fi";

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
        const res = await fetch("/api/time");
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
          outline: none;
        }
      `}</style>
      <style jsx>{`
        .spinner {
          border: 2px solid rgba(0, 0, 0, 0.3);
          border-top: 2px solid #ad8b73;
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

      <div className="rounded-2xl p-8 bg-[#f5e2cc]/30 backdrop-blur-2xl col-span-4 h-full md:col-span-6">
        <h1 className="text-3xl text-[#755d4c] font-alpina pb-3">
          Get in Touch
        </h1>
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
                  className="block mb-2 text-sm font-medium text-[#ad8b73]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  value={formData.name}
                  className="block w-full rounded border border-[#d6ba9c]/30 bg-transparent px-3 py-2 leading-6 text-[#d6ba9c] placeholder-[#d6ba9c] focus:border-[#ad8b73] focus:ring-1 focus:ring-[#ad8b73] hover:border-[#ad8b73] transition duration-300"
                  placeholder="Siddharth Duggal"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-[#ad8b73]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="block w-full rounded border border-[#d6ba9c]/30 bg-transparent px-3 py-2 leading-6 text-[#d6ba9c] placeholder-[#d6ba9c]/70 focus:border-[#ad8b73] focus:ring-1 focus:ring-[#ad8b73] hover:border-[#ad8b73] transition duration-300"
                  placeholder="siddharth@bloon.ai"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-[#ad8b73]"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  onChange={handleChange}
                  value={formData.message}
                  className="block w-full rounded border border-[#d6ba9c]/30 bg-transparent px-3 py-2 leading-6 text-[#d6ba9c] placeholder-[#d6ba9c]/70 focus:border-[#ad8b73] focus:ring-1 focus:ring-[#ad8b73] hover:border-[#ad8b73] transition duration-300"
                  placeholder="I would like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-md px-6 py-2 flex items-center justify-center space-x-1.5 bg-[#f5e2cc] transition duration-200 hover:bg-[#ebd4bd] border-[1px] border-[#ad8b73]/30 hover:border-[#ad8b73] transition duration-200 hover:text-[#8c5844] text-[#ad8b73] font-medium text-sm"
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
            <p>Siddharth will get back to you ASAP.</p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export const hoverClassName =
  "transform-gpu transition-all will-change-[outline,_transform] group-hover:scale-95 active:scale-100";

export function CardHoverEffect({ children, className }) {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-2deg" }}
      className={`group relative overflow-hidden rounded-2xl bg-[#f5e2cc] px-8 py-8 p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [vscodeStatus, setVscodeStatus] = useState(null);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleReadMoreClick = () => {
    setShowAboutMe(!showAboutMe);
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

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const res = await fetch("/api/time");
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

  const custom = showAboutMe ? 1 : -1;

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

      <Nav />

      <main className="text-[#573c28] z-10 mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-6 gap-6 px-6 pb-28 pt-32">
        <div className=" col-span-4 h-full md:col-span-6">
          <h1 className="text-4xl text-[#755d4c] font-alpina pb-3 text-center">
            Building is Fun
          </h1>
          <h2 className="text-xl text-[#755d4c] font-alpina pb-8 text-center">
            Here&apos;s what I&apos;ve been working on lately.
            </h2>
          <ShowOff />
          <a 
            href="https://www.linkedin.com/in/siddharth-duggal/"
          className="mt-4 rounded-md gap-2 px-6 py-2 flex items-center justify-center space-x-1.5 bg-[#f5e2cc] transition duration-200 hover:bg-[#ebd4bd] border-[1px] border-[#ad8b73]/30 hover:border-[#ad8b73] transition duration-200 hover:text-[#8c5844] text-[#ad8b73] font-medium text-sm w-2/3 mx-auto "
          >
            Check out what else I&apos;ve been up to on my LinkedIn <FiExternalLink className="size-4"/>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-16 text-[#ad8b73] font-alpina">
        © 2024 Siddharth Duggal
      </footer>
    </>
  );
}
