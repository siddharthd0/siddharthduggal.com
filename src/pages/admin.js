import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import { FaArrowRight, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Standup = ({ number, date, description, loomVideo, onDelete }) => {
  const router = useRouter();
  const handleDelete = async (number) => {
    await fetch(`/api/deleteStandup?number=${number}`, {
      method: "DELETE",
    });
    router.reload();
  };

  return (
    <div className="col-span-6 flex flex-col justify-between overflow-hidden rounded-2xl bg-blue-200 px-8 py-8 dark:border-blue-500 dark:bg-blue-900/20 dark:shadow-none dark:backdrop-blur-2xl md:col-span-3">
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
            ></iframe>
          </div>
        )}
      </div>
      <button onClick={() => onDelete(number)} className="delete-button">
        Delete
      </button>
    </div>
  );
};

const StandupModal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 p-20 flex justify-center items-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative dark:bg-blue-500/20 p-6 rounded-3xl  shadow-lg"
            style={{ width: "500px", maxHeight: "80vh" }}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2  text-3xl font-bold text-gray-100 hover:text-gray-400 transition duration-300"
            >
              &times;
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default function Standups() {
  const router = useRouter();
  const handleDelete = async (number) => {
    await fetch(`/api/deleteStandup?number=${number}`, {
      method: "DELETE",
    });
    router.reload();
  };

  const [standupNumber, setStandupNumber] = useState("");
  const [standupDate, setStandupDate] = useState("");
  const [standupDescription, setStandupDescription] = useState("");
  const [loomVideo, setLoomVideo] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const standupData = {
      number: standupNumber,
      date: standupDate,
      description: standupDescription,
      loomVideo: loomVideo,
    };

    const response = await fetch("/api/standups", {
      method: "POST",
      body: JSON.stringify(standupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    // Reset form after submission
    setStandupNumber("");
    setStandupDate("");
    setStandupDescription("");
    setLoomVideo("");
  };

  const { user } = useUser();
  const [timeUntilNextStandup, setTimeUntilNextStandup] = useState("");

  useEffect(() => {
    const calculateTimeUntilNextStandup = () => {
      const now = new Date();
      const nextSunday = new Date(now);
      nextSunday.setUTCDate(now.getUTCDate() + ((7 - now.getUTCDay()) % 7));
      nextSunday.setUTCHours(23, 59, 59, 999); // Set to Sunday midnight GMT

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [standups, setStandups] = useState([]);

  useEffect(() => {
    // Fetch standups from the API
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
      <main className="z-10 mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-6 gap-6 px-6 pb-40 pt-32">
        <div className=" overflow-y-auto col-span-6 flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-blue-200 px-8 py-8 dark:border-blue-500 dark:bg-blue-900/20 dark:shadow-none dark:backdrop-blur-2xl md:col-span-6">
          <div className="flex justify-between">
            <div className="">
              <h1 className="pr-2 flex items-center justify-center space-x-1.5 text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                {timeUntilNextStandup}
              </h1>

              <p className="py-1 text-gray-300">till the next standup</p>
            </div>
            <div className="align-center flex text-blue-900 dark:text-blue-300 dark:text-glow-blue-500/50 hover:text-white transition duration-300">
              <div className="pr-3">Welcome, {user.firstName}!</div>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
          <div class=" h-72 w-72 animate-blob rounded-full bg-blue-900 opacity-8 mix-blend-normal blur-3xl shadow-lg shadow-blue-700/50 filter"></div>

          <div className="flex align-center items-center justify-between space-x-4">
            <div onClick={toggleModal} className="cursor-pointer">
              <p className="flex items-center text-blue-600 dark:text-blue-300/80 dark:text-glow-blue-500/50 hover:text-gray-100 transition duration-300">
                Create a new Standup <FaArrowRight className="ml-2" />
              </p>
            </div>

            <div>
              <a
                href="https://loom.com"
                className="flex items-center text-blue-600 dark:text-blue-300/80 dark:text-glow-blue-500/50 hover:text-gray-100 transition duration-300"
              >
                Record a new Loom video <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
        <StandupModal isOpen={isModalOpen} onClose={toggleModal}>
          <div
            style={{ minHeight: "50vh" }}
            className=" overflow-y-auto col-span-6 flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-blue-200 px-8 py-8 dark:border-blue-500 dark:bg-blue-900/20 dark:shadow-none dark:backdrop-blur-2xl md:col-span-6"
          >
            <form
              className="flex flex-col space-y-4 text-gray-100"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col space-y-2">
                <label htmlFor="standup-number">Standup Number</label>
                <input
                  className="rounded-lg border bg-blue-500/10 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2 hover:border-blue-500 transition duration-300"
                  type="number"
                  id="standup-number"
                  name="standup-number"
                  placeholder="1"
                  value={standupNumber}
                  onChange={(e) => setStandupNumber(e.target.value)}
                />

                <label htmlFor="standup-date">Standup Date</label>
                <input
                  className="rounded-lg border bg-blue-500/10 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2 hover:border-blue-500 transition duration-300"
                  type="date"
                  id="standup-date"
                  name="standup-date"
                  value={standupDate}
                  onChange={(e) => setStandupDate(e.target.value)}
                />

                <label htmlFor="standup-description">Standup Description</label>
                <textarea
                  className="rounded-lg border bg-blue-500/10 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2 hover:border-blue-500 transition duration-300"
                  id="standup-description"
                  name="standup-description"
                  placeholder="Worked on project X"
                  value={standupDescription}
                  onChange={(e) => setStandupDescription(e.target.value)}
                />

                <label htmlFor="loom-video">Loom Video URL</label>
                <input
                  className="rounded-lg border bg-blue-500/10 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2 hover:border-blue-500 transition duration-300"
                  type="url"
                  id="loom-video"
                  name="loom-video"
                  placeholder="https://www.loom.com/share/12345"
                  value={loomVideo}
                  onChange={(e) => setLoomVideo(e.target.value)}
                />

                <button
                  className="rounded-lg bg-purple-500 text-white p-2 hover:bg-purple-400 focus:outline-none transition duration-300"
                  type="submit"
                >
                  Create Standup
                </button>
              </div>
            </form>
          </div>
        </StandupModal>
        {standups.map((standup, index) => (
          <Standup
            key={index}
            number={standup.number}
            date={standup.date}
            description={standup.description}
            loomVideo={standup.loomVideo}
            onDelete={handleDelete}
          />
        ))}
      </main>
    </>
  );
}
