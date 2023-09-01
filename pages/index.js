import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Link,
  Flex,
  Text,
  Box,
  VStack,
  Button,
  Image,
  Heading,
  Spacer,
  Wrap,
  HStack,
  chakra,
  Tooltip,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Badge,
  Fade,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";

import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

function Project({
  title,
  description,
  link,
  technologies,
  code,
  selectedTags,
  images,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isVisible =
    selectedTags.length === 0 ||
    technologies.some((tech) => selectedTags.includes(tech));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!isVisible) return null;

  return (
    <LinkBox
      mb="1rem"
      borderWidth="1px"
      borderRadius="lg"
      bg="#111"
      borderColor="rgba(255,255,255,0)"
      transition="all 0.25s ease"
      _hover={{
        bg: "black",
        transform: "translateY(-5px)",
        borderColor: "rgba(255,255,255,0.2)",
      }}
      onClick={onOpen}
    >
      <LinkOverlay>
        <Image
          src={images[0]} // Show the first image by default
          alt={title}
          borderTopRightRadius="lg"
          borderTopLeftRadius="lg"
          objectFit="cover"
          height="200px"
          width="100%"
        />
        <VStack p={5} align="start" spacing={3}>
          <HStack spacing={2}>
            <Text color="whiteAlpha.900" fontWeight="medium" fontSize="lg">
              {title}
            </Text>
          </HStack>
          <Text mt={2} color="whiteAlpha.600" fontSize="md">
            {description}
          </Text>
          <HStack mt={2} spacing={3}>
            {technologies.map((tech) => (
              <Badge
                fontWeight="medium"
                borderRadius="lg"
                px={3}
                py={1}
                key={tech}
                variant="outline"
                color="whiteAlpha.900"
                _hover={{
                  transform: "scale(1.1)",
                  background: "#333",
                }}
              >
                {tech}
              </Badge>
            ))}
          </HStack>
        </VStack>
      </LinkOverlay>

      <Modal size="2xl" w="100%" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent w="100%" p="1rem" bg="black">
          <ModalCloseButton />
          <ModalBody>
            <Heading fontWeight="medium" mt=".5rem" mb="1rem" fontSize="2xl">
              {title}
            </Heading>
            <Text pb="1rem" color="whiteAlpha.600" fontSize="md">
              {description}
            </Text>
            <Slider {...settings}>
              {images.map((img, index) => (
                <Image
                  borderRadius="md"
                  key={index}
                  src={img}
                  alt={title}
                  objectFit="cover"
                  height="300px"
                  width="100%"
                />
              ))}
            </Slider>
            <Button
              leftIcon={<AiOutlineLink />}
              fontWeight="medium"
              borderWidth="1px"
              borderRadius="lg"
              bg="#111"
              borderColor="rgba(255,255,255,0)"
              transition="all 0.25s ease"
              _hover={{
                bg: "black",
                transform: "translateY(-5px)",
                borderColor: "rgba(255,255,255,0.2)",
              }}
              href={link}
              as="a"
              isExternal
              mt="1rem"
            >
              View Project
            </Button>
            <Button
              ml="1rem"
              leftIcon={<FaGithub />}
              fontWeight="medium"
              borderWidth="1px"
              borderRadius="lg"
              bg="#111"
              borderColor="rgba(255,255,255,0)"
              transition="all 0.25s ease"
              _hover={{
                bg: "black",
                transform: "translateY(-5px)",
                borderColor: "rgba(255,255,255,0.2)",
              }}
              href={code}
              as="a"
              isExternal
              mt="1rem"
              isDisabled={!code} // Disable the button if there's no GitHub link
            >
              View on GitHub
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </LinkBox>
  );
}

function ExperienceCard({
  date,
  company,
  role,
  link,
  description,
  technologies,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkBox
      mb="1rem"
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      bg="#111"
      borderColor="rgba(255,255,255,0)"
      transition="all 0.25s ease"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _hover={{
        bg: "black",
        transform: "translateY(-5px)",
        borderColor: "rgba(255,255,255,0.2)",
      }}
    >
      <LinkOverlay href={link} isExternal>
        {isHovered ? (
          <>
            <HStack alignItems="center" spacing={2}>
              <Text color="whiteAlpha.900" fontWeight="medium" fontSize="lg">
                {role}, {company}
              </Text>

              <Spacer />
              <Text color="whiteAlpha.700" fontSize="sm" fontWeight="medium">
                {date}
              </Text>
            </HStack>
            <Text
              py="9px"
              color="whiteAlpha.900"
              fontWeight="medium"
              fontSize="sm"
            >
              {description}
            </Text>
            <HStack mt={2} spacing={3}>
              {technologies.map((tech) => (
                <Badge
                  fontWeight="medium"
                  borderRadius="full"
                  px={3}
                  py={1}
                  key={tech}
                  variant="outline"
                  borderColor="#fff" // White border
                  color="whiteAlpha.800"
                  _hover={{
                    transform: "scale(1.1)",
                    background: "#333",
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </HStack>
          </>
        ) : (
          <VStack align="start" spacing={3}>
            <HStack alignItems="center" spacing={2}>
              <Text color="whiteAlpha.900" fontWeight="medium" fontSize="lg">
                {role}, {company}
              </Text>
              <Spacer />
              <Text color="whiteAlpha.700" fontSize="sm" fontWeight="medium">
                {date}
              </Text>
            </HStack>
          </VStack>
        )}
      </LinkOverlay>
    </LinkBox>
  );
}

export default function Home({}) {
  const [showSplash, setShowSplash] = useState(true);
  const [currentSection, setCurrentSection] = useState("intro");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const intro = document.getElementById("intro").getBoundingClientRect();
      const experience = document
        .getElementById("experience")
        .getBoundingClientRect();
      const projects = document
        .getElementById("projects")
        .getBoundingClientRect();

      if (intro.top <= 0 && intro.bottom >= 0) {
        setCurrentSection("intro");
      } else if (experience.top <= 0 && experience.bottom >= 0) {
        setCurrentSection("experience");
      } else if (projects.top <= 0 && projects.bottom >= 0) {
        setCurrentSection("projects");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = [
    "React",
    "JavaScript",
    "Next.js",
    "Chakra UI",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Python",
    "Flask",
    // ... (add more if needed)
  ];

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <>
      <Head>
        <title>Siddharth Duggal</title>
        <meta name="description" content="Siddharth Duggal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/me.png" />
      </Head>
      <AnimatePresence>
        {showSplash && (
          <MotionBox
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 1 }}
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="black"
            zIndex="modal"
            height="100vh"
            width="100vw"
            overflow="hidden"
          >
            <Flex direction="column" align="center" justify="center" h="100%">
              <Text>
                <Image
                  className="spin"
                  mx="auto"
                  src="me.png"
                  boxSize="50px"
                  borderRadius="full"
                  mb="1rem"
                />

                <chakra.span fontWeight="bold" color="whiteAlpha.900">
                  Siddharth Duggal
                </chakra.span>
              </Text>
            </Flex>
          </MotionBox>
        )}
      </AnimatePresence>

      <Flex px={["2rem", "10rem"]} flexDirection={["column", "row"]}>
        <Flex
          direction="column"
          overflowX={"hidden !important"}
          px="1rem"
          as="aside"
          position={["none", "sticky"]}
          top="0"
          height="100vh"
          overflowY="auto"
          pt="5rem"
          flex="1"
        >
          <Image src="/me.png" borderRadius="full" boxSize="100px" />
          <Heading
            color="whiteAlpha.900"
            fontWeight="500"
            mt="1rem"
            fontSize="5xl"
          >
            Siddharth Duggal
          </Heading>
          <Box
            maxW="400px"
            borderRadius="lg"
            my=".7rem"
            px=".8rem"
            py=".8rem"
            bg="#111"
          >
            <Box borderColor="whiteAlpha.200 !important" pl=".7rem" borderLeft="1px">
              <Text color="whiteAlpha.900" fontSize="md" fontWeight="500">
                <chakra.span
                  color="whiteAlpha.500"
                  fontWeight="bold"
                  fontSize="2xl"
                >
                  "
                </chakra.span>{" "}
                We’re here to put a dent in the universe. Otherwise why else
                even be here?{" "}
                <chakra.span
                  color="whiteAlpha.500"
                  fontWeight="bold"
                  fontSize="2xl"
                >
                  "
                </chakra.span>
              </Text>
            </Box>
            <Text
              mt=".6rem"
              color="whiteAlpha.600"
              fontSize="sm"
              fontWeight="medium"
            >
              — Steve Jobs
            </Text>
          </Box>

          <Box mt="2rem">
            <Link
              href="#intro"
              textDecoration="none"
              mb={2}
              _hover={{ textDecoration: "none" }}
            >
              <Box
                transition="200ms"
                color={currentSection === "intro" ? "white" : "whiteAlpha.500"}
                _hover={{
                  color: "gray.200 !important",
                }}
                fontSize="xl"
                as="span"
                fontWeight="500"
              >
                Intro
              </Box>
            </Link>
          </Box>
          <Box mt="1rem">
            <Link
              href="#experience"
              textDecoration="none"
              mb={2}
              _hover={{ textDecoration: "none" }}
            >
              <Box
                transition="200ms"
                color={
                  currentSection === "experience" ? "white" : "whiteAlpha.500"
                }
                _hover={{
                  color: "gray.200 !important",
                }}
                fontSize="xl"
                as="span"
                fontWeight="500"
              >
                Experience
              </Box>
            </Link>
          </Box>
          <Box mt="1rem">
            <Link
              href="#projects"
              textDecoration="none"
              mb={2}
              _hover={{ textDecoration: "none" }}
            >
              <Text
                transition="200ms"
                color={
                  currentSection === "projects" ? "white" : "whiteAlpha.500"
                }
                _hover={{
                  color: "gray.200 !important",
                }}
                fontSize="xl"
                as="span"
                fontWeight="500"
              >
                Projects
              </Text>
            </Link>
          </Box>

          <Spacer />

          <HStack mt={["2rem", "0"]} mb="3rem" spacing={4}>
            <Tooltip
              placement="top"
              label="LinkedIn"
              borderRadius="md"
              bg="gray.800"
            >
              <Link
                alignItems="center"
                display={"flex"}
                _hover={{
                  color: "linkedin.500 !important",
                }}
                href="https://www.linkedin.com/in/siddharth-duggal/"
                isExternal
                color="whiteAlpha.500"
              >
                <FaLinkedin size={25} />{" "}
                <Text ml="8px">/in/siddharth-duggal</Text>
              </Link>
            </Tooltip>
            <Tooltip
              placement="top"
              label="GitHub"
              borderRadius="md"
              bg="gray.800"
            >
              <Link
                alignItems="center"
                display={"flex"}
                color="whiteAlpha.500"
                _hover={{
                  color: "gray.200 !important",
                }}
                href="https://github.com/siddharthd0"
                isExternal
              >
                <FaGithub size={25} /> <Text ml="8px">/siddharthd0</Text>
              </Link>
            </Tooltip>
          </HStack>
        </Flex>
        {/* Right Section */}
        <Box py="5rem" flex="1">
          <Heading
            id="intro"
            pt="2rem"
            color="whiteAlpha.900"
            fontWeight="medium"
            fontSize="3xl"
          >
            Intro
          </Heading>
          <Text mt="1rem" color="whiteAlpha.600">
            Three years ago, I began experimenting with{" "}
            <chakra.span color="white">JavaScript</chakra.span> and started
            building <chakra.span color="white">Discord bots</chakra.span>. This
            was more than a hobby. Within a year, I was creating Discord bots,
            websites, and Minecraft servers for clients. Concurrently, I
            developed a hosting platform, making it simpler for developers to
            host their projects.
          </Text>
          <Text color="whiteAlpha.600" mt={2}>
            Today, I channel my energies and expertise into{" "}
            <Link
              _hover={{
                color: "blue.200",
              }}
              href="https://techoptimum.org"
              color="white"
            >
              Tech Optimum
            </Link>
            , my own non-profit initiative. We're on a mission to create the
            worlds first free all in one eco-system for learning how to code.
          </Text>

          <Box>
            <Heading
              id="experience"
              pt="2rem"
              color="whiteAlpha.900"
              fontWeight="medium"
              fontSize="3xl"
              mb="1rem"
            >
              Experience
            </Heading>
            <ExperienceCard
              date="January 2022 - Present"
              company="Tech Optimum"
              role="Founder"
              link="https://techoptimum.org"
              description="Tech Optimum is a non-profit initiative that aims to create a project-centric approach to learning. We're on a mission to create the worlds first sustainable project-based learning platform."
              technologies={[
                "Google Cloud",
                "Javascript",
                "Next.js",
                "Chakra UI",
              ]}
            />
            <ExperienceCard
              date="April 2022 - Febuary 2023"
              company="School Simplified"
              role="Web Developer"
              link="https://schoolsimplified.org"
              description="School Simplified offers a number of free resources to help students with their studies. I was responsible for building & maintaining the website."
              technologies={["React", "TypeScript", "Next.js", "Chakra UI"]}
            />
            <ExperienceCard
              date="December 2020 - August 2021"
              company="Aprim"
              role="Lead Developer"
              link="https://aprim.xyz"
              description="Aprim was a web & game hosting platform that allowed you to host your website or game server with ease. I was responsible for building the Pterodactyl panel, the billing system, and the website."
              technologies={[
                "Pterodactyl",
                "Javascript",
                "Express.js",
                "Discord.js",
              ]}
            />
          </Box>
          <Box mt={5}>
            <Heading
              pt="2rem"
              mb="1rem"
              id="projects"
              color="whiteAlpha.900"
              fontWeight="medium"
              fontSize="3xl"
            >
              Projects
            </Heading>
            <Wrap spacing={3} mb={8}>
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  cursor="pointer"
                  variant={selectedTags.includes(tag) ? "solid" : "outline"}
                >
                  {tag}
                </Badge>
              ))}
            </Wrap>
            <Project
              link="https://dashboard.techoptimum.org"
              title="Tech Optimum Learning Platform"
              dates="Febuary 2022 - Present"
              description="Built the learning platform in Next.js and Chakra UI from the ground up, creating a full-stack application"
              technologies={["React", "JavaScript", "Next.js", "Chakra UI"]}
              selectedTags={selectedTags}
              images={["dashboard-preview.png", "dashboard-preview-2.png"]}
            />
            <Project
              code="https://github.com/siddharthd0/resumate"
              link="https://resumate.tech"
              title="Resumate"
              dates="Febuary 2022 - Febuary 2022"
              description="Resumate is a resume builder that helps you create a resume 
          in minutes. It is a simple and easy to use resume builder that allows you to combine Markdown and CSS with ease to create a PF resume, custom to you."
              technologies={["React", "TypeScript", "Next.js", "Chakra UI"]}
              selectedTags={selectedTags}
              images={[
                "resumate-preview.png",
                "resumate-preview-2.png",
                "resumate-preview-3.png",
              ]}
            />

            <Project
              title="Launchpad Labs"
              link="https:/www.launchpadlabs.pro"
              dates="December 2022 - Present"
              description={
                "Launchpad Labs is a web development agency that I founded. We offer a number of services including web development, web design, and more!"
              }
              technologies={["React", "TypeScript", "Next.js", "Chakra UI"]}
              selectedTags={selectedTags}
              images={[
                "launchpad-preview.png",
                "launchpad-preview-2.png",
                "launchpad-preview-3.png",
              ]}
            />
            <Project
              title="A Small Universe"
              dates="May 2022 - May 2022"
              description="I made A Small Universe for my AP computer science class. A Small Universe is a web application where you can entertain
          yourself by looking
          at comets, stars, and more! Put your cursor where you desire, and you will explore more!"
              link="https://ap-csp-universe-project.siddharthdugg.repl.co"
              technologies={["Javascript", "HTML", "CSS"]}
              selectedTags={selectedTags}
              images={["universe-preview.png", "universe-preview-2.png"]}
            />
            <Project
              title={"Aeolus"}
              dates="January - Febuary 2022"
              description="Aeolus is a pollution assistant. It can help you determine if
          the area you are in is polluted, and can tell you what to do
          depending on different variables. Data collected by EPA."
              link="https://aeolus-air.vercel.app/"
              technologies={["React", "TypeScript", "Tailwind CSS"]}
              selectedTags={selectedTags}
              images={[
                "aeolus-preview.png",
                "aeolus-preview-2.png",
                "aeolus-preview-3.png",
                "aeolus-preview-4.png",
              ]}
              code="https://github.com/siddharthd0/Aeolus"
            />
            <Project
              title="Carbonara"
              dates="July 2022 - July 2022"
              description=" Carbonara is a unique carbon footprint calculator geared towards
          travelers. Carbonara is focused on the impacts of a vacation on
          the climate."
              link="https://carbonara.roryjames.repl.co"
              technologies={["React", "TypeScript", "Tailwind CSS"]}
              selectedTags={selectedTags}
              images={["carbonara-preview.png", "carbonara-preview-2.png"]}
              code="https://github.com/rjames187/Carbonara"
            />
            <Project
              title="Skyline"
              dates="July 2022 - July 2022"
              description="Skyline is the best way to find the perfect clothing for the
          perfect weather. Input your location to get various clothing
          suggestions!"
              link="https://skyline.arnavpandey722.repl.co/"
              technologies={["Python", "Flask", "HTML", "CSS"]}
              selectedTags={selectedTags}
              images={["skyline-preview.png", "skyline-preview-2.png"]}
              code="https://github.com/siddharthd0/skyline"
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
