import Link from "next/link";
import Nav from "../components/nav";
import { FaPhoenixFramework } from "react-icons/fa6";
import Image from "next/image";
import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowRedoOutline } from "react-icons/io5";
const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && (
        <Modal isOpen={!!modalContent} onClose={closeModal}>
          {modalContent}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

const ImageModal = ({ src, alt, modalContent, width, height }) => {
  const { openModal } = useModal();

  return (
    <div onClick={() => openModal(modalContent)}>
      <Image
        className="rounded-md cursor-zoom-in hover:shadow-lg transition duration-300 opacity-70 hover:opacity-100"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ModalProvider>
        <Nav />
        <main className="z-10 mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-32 text-white">
          <div className="col-span-6 flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-blue-200 px-8 py-8  border-blue-500  bg-blue-900/20  shadow-none  backdrop-blur-2xl md:col-span-2">
            <div className="flex justify-between">
              <FaPhoenixFramework className="text-3xl text-blue-200" />
            </div>
            <div class=" h-72 w-72 animate-blob rounded-full bg-blue-900 opacity-8 mix-blend-normal blur-3xl shadow-lg shadow-blue-700/50 filter"></div>

            <div className="space-y-4">
              <div>
                <h1 className="text-xl text-blue-200">
                  My Work
                </h1>

                <p className="pt-2 text-sm  text-blue-300">
                  Check out what I&apos;ve been spending my time on.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-blue-200 px-8 py-8  border-blue-500  bg-blue-900/20  shadow-none  backdrop-blur-2xl md:col-span-4">
            <div className="flex items-center justify-between">
              <div>
                <a
                  href="https://techoptimum.org"
                  className="items-center flex justify-center text-2xl"
                >
                  Tech Optimum{" "}
                  <IoArrowRedoOutline className="pl-2 text-gray-500 hover:text-blue-100 transition duration-300" />
                </a>
                <h1 className="flex text-blue-200 text-md">Founder</h1>
              </div>
              <p className="flex text-sm text-blue-300">Jan 2022 - Curr.</p>
            </div>
            <div class=" h-72 w-72 animate-blob rounded-full bg-blue-900 opacity-8 mix-blend-normal blur-3xl shadow-lg shadow-blue-700/50 filter"></div>

            <div className="flex items-center space-between">
              <div>
                <p className="pt-2 text-sm  text-blue-200">
                  Free ecosystem to learn to code. Sponsored by Replit, Desmos, OpenAI,
                  and more.
                </p>
              </div>
              <div>
                <div className="pl-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <ImageModal
                    src="/tech-home.png"
                    alt="Tech Home"
                    width={200}
                    height={200}
                    modalContent={
                      <>
                        <Image
                          src="/tech-home.png"
                          alt="Enlarged Tech Home"
                          className="rounded-lg"
                          width={600}
                          height={400}
                        />
                        <p className="text-placeholder pt-2">
                          Tech Optimum (Home Page)
                        </p>
                      </>
                    }
                  />

                  <ImageModal
                    src="/tech-lesson.png"
                    alt="Tech Lesson"
                    width={200}
                    height={200}
                    modalContent={
                      <>
                        <Image
                          src="/tech-lesson.png"
                          alt="Enlarged Tech Home"
                          className="rounded-lg"
                          width={600}
                          height={400}
                        />
                        <p className="text-placeholder pt-2">
                          Tech Optimum (Lesson w/Tech Guru AI)
                        </p>
                      </>
                    }
                  />
                  <ImageModal
                    src="/tech-lesson.png"
                    alt="Tech Lesson"
                    width={200}
                    height={100}
                    modalContent={
                      <>
                        <Image
                          src="/tech-lesson.png"
                          alt="Enlarged Tech Home"
                          className="rounded-lg"
                          width={600}
                          height={400}
                        />
                        <p className="text-placeholder pt-2">
                          Tech Optimum (Lesson w/Tech Guru AI)
                        </p>
                      </>
                    }
                  />
                  <ImageModal
                    src="/tech-question.png"
                    alt="Tech Question"
                    width={200}
                    height={100}
                    modalContent={
                      <>
                        <Image
                          src="/tech-question.png"
                          alt="Enlarged Tech"
                          className="rounded-lg"
                          width={600}
                          height={400}
                        />
                        <p className="text-placeholder pt-2">
                          Tech Optimum (Progress Checks)
                        </p>
                      </>
                    }
                  />
                  <div className="md:col-span-2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex h-52 flex-col justify-between rounded-2xl bg-zinc-900 px-8 py-8 md:col-span-3">
            <div className="flex items-center justify-between">
              <div>
                <a
                  href="https://bloon.ai"
                  className="items-center flex justify-center text-2xl"
                >
                  Bloon
                  <IoArrowRedoOutline className="pl-2 text-gray-500 hover:text-blue-100 transition duration-300" />
                </a>
                <h1 className="flex text-zinc-200 text-md">Founder</h1>
              </div>
              <p className="flex text-sm text-slate-300">Oct 2023 - Curr.</p>
            </div>

            <div className="flex items-center space-between">
              <div>
                <p className="pt-2 text-zinc-500 text-sm  text-zinc-300/80  text-glow-zinc-500/50">
                  Building the world&apos;s first AI-powered digital whiteboard
                  that can visually explain any concept in the world.
                </p>
              </div>
              <div>
                <div className="pl-4">
                  <ImageModal
                    src="/bloon.png"
                    alt="Bloon"
                    width={400}
                    height={200}
                    modalContent={
                      <>
                        <Image
                          src="/bloon.png"
                          alt="Enlarged Bloon"
                          className="rounded-lg"
                          width={600}
                          height={400}
                        />
                        <p className="text-placeholder pt-2">
                          Bloon Industries
                        </p>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex h-52 flex-col justify-between rounded-2xl  bg-pink-900/10 px-8 py-8 md:col-span-3">
            <div className="flex items-center justify-between">
              <div>
                <a
                  href="https:/schoolsimplified.org"
                  className="items-center flex justify-center text-2xl"
                >
                  School Simplified
                  <IoArrowRedoOutline className="pl-2 text-gray-500 hover:text-pink-200 transition duration-300" />
                </a>
                <h1 className="flex text-pink-200 text-md">
                  Software Engineer
                </h1>
              </div>
              <p className="flex text-sm text-pink-300">Past</p>
            </div>

            <div className="flex items-center space-between">
              <div>
                <p className="pt-2 text-sm  text-pink-200">
                  Worked on internal tools for 300 volunteers to help 60k+
                  students.
                </p>
              </div>
              <div>
                <div className="pl-2">
                  <ImageModal
                    src="/school-home.png"
                    alt="SS"
                    width={400}
                    height={200}
                    modalContent={
                      <>
                        <Image
                          src="/school-home.png"
                          alt="SS"
                          className="rounded-lg"
                          width={600}
                          height={400}
                        />
                        <p className="text-placeholder pt-2">
                          School Simplified
                        </p>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </ModalProvider>
    </>
  );
}
