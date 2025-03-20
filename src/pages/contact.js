import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Nav from "../components/nav";

// Helper function to format time
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

// Animation variants
const tooltipVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

// Contact form component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

      setIsSubmitting(false);
      setFormSubmitted(true);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setIsSubmitting(false);
    }
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
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="rounded-2xl p-8 bg-[#f5e2cc]/30 backdrop-blur-2xl h-full">
        <h1 className="text-3xl text-[#755d4c] font-alpina pb-6">
          Get in Touch
        </h1>
        
        {!formSubmitted ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} method="post">
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
                  required
                  aria-required="true"
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
                  required
                  aria-required="true"
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
                  rows="4"
                  onChange={handleChange}
                  value={formData.message}
                  className="block w-full rounded border border-[#d6ba9c]/30 bg-transparent px-3 py-2 leading-6 text-[#d6ba9c] placeholder-[#d6ba9c]/70 focus:border-[#ad8b73] focus:ring-1 focus:ring-[#ad8b73] hover:border-[#ad8b73] transition duration-300"
                  placeholder="I would like to talk about..."
                  required
                  aria-required="true"
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-md px-6 py-2 flex items-center justify-center bg-[#f5e2cc] transition-all duration-200 hover:bg-[#ebd4bd] border border-[#ad8b73]/30 hover:border-[#ad8b73] hover:text-[#8c5844] text-[#ad8b73] font-medium text-sm w-full"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="spinner" aria-hidden="true"></div>
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
            className="text-[#ad8b73] bg-[#f5e2cc]/50 p-4 rounded-md border border-[#ad8b73]/30"
            role="alert"
          >
            <p className="font-medium">Siddharth will get back to you ASAP.</p>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default function Contact() {
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
      
      <main className="max-w-3xl mx-auto p-8 mt-28">
        <ContactForm />
      </main>

      <footer className="flex items-center justify-center w-full h-16 text-[#ad8b73] font-alpina mt-20">
        © {new Date().getFullYear()} Siddharth Duggal
      </footer>
    </>
  );
}
