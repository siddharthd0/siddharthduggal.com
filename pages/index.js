import Head from "next/head";
import {
  Link,
  Flex,
  Text,
  Box,
  Image,
  Heading,
  Spacer,
  HStack,
  chakra,
  Tooltip,
  BreadcrumbLink,
  Center,
  useDisclosure,
  Badge,
  Fade,
  BreadcrumbItem,
  Breadcrumb,
} from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

function Project({ dates, title, role, link, description }) {
  return (
    <LinkBox
      mb="1rem"
      textDecor="none !important"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      borderColor="rgba(255,255,255,0)"
      boxShadow="lg"
      transition="0.4s"
      _hover={{
        borderColor: "blue.900",
        bg: "rgba(15 23 42)",
        transform: "translateY(-5px)",
        boxShadow: "xl",
        filter: "brightness(1.2)", // This adds the white tint
      }}
    >
      <LinkOverlay textDecor="none !important" href={link} isExternal>
        <HStack spacing={2}>
          <Text color="whiteAlpha.800" fontWeight="medium">
            {title}
          </Text>
          <Spacer />
          <Text color="whiteAlpha.700" fontSize="xs" fontWeight={"thin"}>
            {dates}
          </Text>
        </HStack>
        <Text mt={3} color="whiteAlpha.700">
          {description}
        </Text>
      </LinkOverlay>
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
  return (
    <LinkBox
      mb="1rem"
      textDecor="none !important"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      borderColor="rgba(255,255,255,0)"
      boxShadow="lg"
      transition="0.4s"
      _hover={{
        borderColor: "blue.900",
        bg: "rgba(15 23 42)",
        transform: "translateY(-5px)",
        boxShadow: "xl",
        filter: "brightness(1.2)", // This adds the white tint
      }}
    >
      <LinkOverlay textDecor="none !important" href={link} isExternal>
        <HStack spacing={2}>
          <Text color="whiteAlpha.800" fontWeight="medium">
            {role} @ {company}
          </Text>
          <Spacer />
          <Text color="whiteAlpha.700" fontSize="xs" fontWeight={"thin"}>
            {date}
          </Text>
        </HStack>
        <Text mt={3} color="whiteAlpha.700">
          {description}
        </Text>
        <HStack mt={3} spacing={2}>
          {technologies.map((tech) => (
            <Badge
              fontWeight={"medium"}
              borderRadius="full"
              px={2}
              py={1}
              key={tech}
              variant="outline"
              colorScheme="blue"
              color="blue.300"
            >
              {tech}
            </Badge>
          ))}
        </HStack>
      </LinkOverlay>
    </LinkBox>
  );
}

export default function Home({}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

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
            bg="rgb(15 23 42)"
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
          <Text
            mt=".4rem"
            color="whiteAlpha.900"
            fontSize="xl"
            fontWeight="medium"
          >
            Founder of Tech Optimum
          </Text>
          <Text 
            mt=".8rem"
            color="whiteAlpha.900"
            fontSize="md"
            fontWeight="500"
          >
           “We’re here to put a dent in the universe. Otherwise why else even be here?”
          </Text>
          <Text
            mt=".6rem"
            color="whiteAlpha.800"
            fontSize="sm"
            fontWeight="medium"
          >
            — Steve Jobs
          </Text>
          <Box mt="2rem">
            <Link
              href="#intro"
              textDecoration="none"
              mb={2}
              _hover={{ textDecoration: "none" }}
            >
              <Box
                fontSize="xl"
                as="span"
                fontWeight="500"
                position="relative"
                _before={{
                  content: '""',
                  backgroundColor: "blue.400",
                  position: "absolute",
                  left: "0",
                  bottom: "-2px",
                  width: "full",
                  height: "3px",
                  zIndex: "-1",
                  transition: "all .3s ease-in-out",
                }}
                _hover={{
                  _before: {
                    bottom: "0",
                    height: "100%",
                  },
                }}
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
                fontSize="xl"
                as="span"
                fontWeight="500"
                position="relative"
                _before={{
                  content: '""',
                  backgroundColor: "blue.400",
                  position: "absolute",
                  left: "0",
                  bottom: "-2px",
                  width: "full",
                  height: "3px",
                  zIndex: "-1",
                  transition: "all .3s ease-in-out",
                }}
                _hover={{
                  _before: {
                    bottom: "0",
                    height: "100%",
                  },
                }}
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
              <Box
                fontSize="xl"
                as="span"
                fontWeight="500"
                position="relative"
                _before={{
                  content: '""',
                  backgroundColor: "blue.400",
                  position: "absolute",
                  left: "0",
                  bottom: "-2px",
                  width: "full",
                  height: "3px",
                  zIndex: "-1",
                  transition: "all .3s ease-in-out",
                }}
                _hover={{
                  _before: {
                    bottom: "0",
                    height: "100%",
                  },
                }}
              >
                Projects
              </Box>
            </Link>
          </Box>

          <Spacer />

          <HStack mt={["2rem", "0"]} mb="3rem" spacing={4}>
            <Tooltip label="Twitter" borderRadius="md" bg="gray.800">
              <Link
                _hover={{
                  color: "twitter.500 !important",
                }}
                href="https://twitter.com/siddharthd01"
                isExternal
                color="whiteAlpha.500"
              >
                <FaTwitter size={25} />
              </Link>
            </Tooltip>
            <Tooltip label="Instagram" borderRadius="md" bg="gray.800">
              <Link
                _hover={{
                  color: "red.500 !important",
                }}
                href="https://www.instagram.com/siddharth.duggal/"
                isExternal
                color="whiteAlpha.500"
              >
                <FaInstagram size={25} />
              </Link>
            </Tooltip>

            <Tooltip label="LinkedIn" borderRadius="md" bg="gray.800">
              <Link
                _hover={{
                  color: "linkedin.500 !important",
                }}
                href="https://www.linkedin.com/in/siddharth-duggal/"
                isExternal
                color="whiteAlpha.500"
              >
                <FaLinkedin size={25} />
              </Link>
            </Tooltip>
            <Tooltip label="GitHub" borderRadius="md" bg="gray.800">
              <Link
                _hover={{
                  color: "gray.200 !important",
                }}
                href="https://github.com/siddharthd0"
                isExternal
                color="whiteAlpha.500"
              >
                <FaGithub size={25} />
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
            px={4}
            fontSize="3xl"
          >
            Intro
          </Heading>
          <Text mt="1rem" color="whiteAlpha.800" px={4}>
            Three years ago, I began experimenting with{" "}
            <chakra.span fontWeight="semibold" color="white">
              JavaScript
            </chakra.span>{" "}
            and started building{" "}
            <chakra.span fontWeight="semibold" color="white">
              Discord bots
            </chakra.span>
            . This was more than a hobby. Within a year, I was creating Discord
            bots, websites, and{" "}
            <chakra.span fontWeight="semibold" color="white">
              Minecraft servers
            </chakra.span>{" "}
            for clients. Concurrently, I developed a hosting platform, making it
            simpler for developers to host their projects.
          </Text>
          <Text color="whiteAlpha.800" px={4} mt={2}>
            Today, I channel my energies and expertise into{" "}
            <Link
              _hover={{
                color: "blue.200",
              }}
              href="https://techoptimum.org"
              fontWeight="semibold"
              color="white"
            >
              Tech Optimum
            </Link>
            , my own non-profit initiative. We're on a mission to disrupt
            conventional
            <chakra.span fontWeight="600" color="white">
              {" "}
              coding education
            </chakra.span>
            . By championing a project-centric learning approach, we aim to
            reflect the real-world experiences and challenges of tech
            internships and roles. It's not just about education—it's a holistic
            coding journey tailored for today's tech enthusiasts.
          </Text>

          <Box>
            <Heading
              id="experience"
              pt="2rem"
              color="whiteAlpha.900"
              fontWeight="medium"
              px={4}
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
              px={4}
              id="projects"
              color="whiteAlpha.900"
              fontWeight="medium"
              fontSize="3xl"
            >
              Projects
            </Heading>
            <Project
              link="https://resumate.tech"
              title="Resumate"
              dates="Febuary 2022 - Febuary 2022"
              description="Resumate is a resume builder that helps you create a resume 
          in minutes. It is a simple and easy to use resume builder that allows you to combine Markdown and CSS with ease to create a PF resume, custom to you."
            />

            <Project
              title="Lite Designs"
              link="https://www.litedesigns.pro"
              dates="December 2022 - Present"
              description={
                "Lite Design provides simple & easy to interpret code that you can understand without much problem. We want to help you save time when it comes to building your next project, which is why we built Lite Designs."
              }
            />
            <Project
              title="A Small Universe"
              dates="May 2022 - May 2022"
              description="I made A Small Universe for my AP computer science class. A Small Universe is a web application where you can entertain
          yourself by looking
          at comets, stars, and more! Put your cursor where you desire, and you will explore more!"
              link="https://ap-csp-universe-project.siddharthdugg.repl.co"
            />
            <Project
              title={"Aeolus"}
              dates="January - Febuary 2022"
              description="Aeolus is a pollution assistant. It can help you determine if
          the area you are in is polluted, and can tell you what to do
          depending on different variables. Data collected by EPA."
              link="https://aeolus.roryjames.repl.co/"
            />
            <Project
              title="Carbonara"
              dates="July 2022 - July 2022"
              description=" Carbonara is a unique carbon footprint calculator geared towards
          travelers. Carbonara is focused on the impacts of a vacation on
          the climate."
              link="https://carbonara.roryjames.repl.co"
            />
            <Project
              title="Skyline"
              dates="July 2022 - July 2022"
              description="Skyline is the best way to find the perfect clothing for the
          perfect weather. Input your location to get various clothing
          suggestions!"
              link="https://skyline.arnavpandey722.repl.co/"
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
