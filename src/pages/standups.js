import Link from "next/link";
import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import { FaTwitter } from "react-icons/fa";

const Standup = ({ number, date, description, loomVideo }) => {
  const [standups, setStandups] = useState([]);

  useEffect(() => {
    const fetchStandups = async () => {
      const response = await fetch("/api/getStandups");
      const data = await response.json();
      setStandups(data.standups);
    };

    fetchStandups();
  }, []);

  return (
    <div className="col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl bg-blue-200 px-8 py-8 dark:border-blue-500 dark:bg-blue-900/20 dark:shadow-none dark:backdrop-blur-2xl md:col-span-3">
      <div className="space-y-4">
        <div className="items-center flex justify-between">
          <h1 className="text-xl text-blue-900 dark:text-blue-300">
            Standup #{number}
          </h1>
          <p className="text-sm text-blue-600 dark:text-blue-300/80">{date}</p>
        </div>
        <p className="text-blue-600 dark:text-blue-300/80 text-sm">
          {description}
        </p>
        {loomVideo && (
          <div>
            <iframe
              src={loomVideo}
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              className="w-full rounded-lg"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Standups() {
  const [timeUntilNextStandup, setTimeUntilNextStandup] = useState("");

  useEffect(() => {
    const calculateTimeUntilNextStandup = () => {
      const now = new Date();
      const nextSunday = new Date(now);
      nextSunday.setUTCDate(now.getUTCDate() + ((7 - now.getUTCDay()) % 7));
      nextSunday.setUTCHours(23, 59, 59, 999);

      const timeDiff = nextSunday - now;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      return `${days} days & ${hours} hours`;
    };

    const interval = setInterval(() => {
      setTimeUntilNextStandup(calculateTimeUntilNextStandup());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [standups, setStandups] = useState([]);
  useEffect(() => {
    const fetchStandups = async () => {
      const response = await fetch("/api/getStandups");
      const data = await response.json();
      setStandups(data.standups);
    };

    fetchStandups();
  }, []);

  return (
    <>
      <Nav />
          
      <main className="z-10 mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-32">
         <div className="col-span-6 flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-blue-200 px-8 pt-8 pb-4 dark:border-blue-500 dark:bg-blue-900/20 dark:shadow-none dark:backdrop-blur-2xl md:col-span-6">
          <div className="flex justify-between">
            <div className="">
              <h1 className="pr-2 flex items-center justify-center space-x-1.5 text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                {timeUntilNextStandup}
              </h1>

              <p className="py-1 text-sm text-gray-300">
                till the next standup
              </p>
            </div>
            <a
              href="https://twitter.com/siddharthd01"
              className="flex text-blue-900 dark:text-blue-300 dark:text-glow-blue-500/50 hover:text-white transition duration-300"
            >
              <FaTwitter size="1.5em" />
            </a>
          </div>
          <div class=" h-72 w-72 animate-blob rounded-full bg-blue-900 opacity-8 mix-blend-normal blur-3xl shadow-lg shadow-blue-700/50 filter"></div>

          <div className="space-y-4">
            <div>
              <h1 className="text-xl text-blue-900 dark:text-blue-300 dark:text-glow-blue-500/50">
                Weekly Standups
              </h1>

              <p className="pb-2 text-blue-600 dark:text-blue-300/80 dark:text-glow-blue-500/50">
                Here I showcase what I&apos;ve been working on & shipping for
                the past week.
              </p>
            </div>
          </div>
        </div>

        {standups.map((standup, index) => (
          <Standup
            key={index}
            number={standup.number}
            date={standup.date}
            description={standup.description}
            loomVideo={standup.loomVideo}
          />
        ))}
      </main>
    </>
  );
}
