import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Nav from "../components/nav";
import ShowOff from "../components/show-off";

export default function Work() {
  const [vscodeStatus, setVscodeStatus] = useState(null);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setVscodeStatus(data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    }

    fetchGithubData();
  }, []);

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
        <div className="col-span-4 h-full md:col-span-6">
          <h1 className="text-4xl text-[#755d4c] font-alpina pb-3 text-center">
            Building is Fun
          </h1>
          <h2 className="text-xl text-[#755d4c] font-alpina pb-8 text-center">
            Here&apos;s what I&apos;ve been working on lately.
          </h2>
          <ShowOff />
          <p className="text-center text-sm text-[#ad8b73]/80 mt-4 max-w-lg mx-auto">
            Always looking to meet new people, hacking on new stuff 24/7. 
            Email me at <a href="mailto:siddharth@bloon.ai" className="text-[#ad8b73] hover:text-[#8c5844] transition duration-200">
              siddharth@bloon.ai
            </a> if you want to chat.
          </p>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-16 text-[#ad8b73] font-alpina">
        © 2024 Siddharth Duggal
      </footer>
    </>
  );
}
