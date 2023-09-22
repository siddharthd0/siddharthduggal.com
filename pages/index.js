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
  useToast,
  Modal,
  ModalOverlay,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ModalContent,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaLinkedin, FaGithub } from "react-icons/fa";
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
      color="black"
      mb="1rem"
      borderWidth="1px"
      borderRadius="lg"
      transition="all 0.25s ease"
      _hover={{
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
            <Text color="blackAlpha.800" fontWeight="medium" fontSize="lg">
              {title}
            </Text>
          </HStack>
          <Text mt={2} color="blackAlpha.700" fontSize="md">
            {description}
          </Text>
          <Wrap mt={2} spacing={3}>
            {technologies.map((tech) => (
              <Badge
                key={tech}
                fontWeight="500"
                borderRadius="md"
                px={3}
                py={1}
                borderColor="gray.100 !important"
                color="blackAlpha.800"
              >
                {tech}
              </Badge>
            ))}
          </Wrap>
        </VStack>
      </LinkOverlay>

      <Modal
        color="black"
        size="2xl"
        w="100%"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="12px" />
        <ModalContent w="100%" p="1rem" bg="white">
          <ModalCloseButton color="black" />
          <ModalBody>
            <Heading
              color="black"
              fontWeight="medium"
              mt=".5rem"
              mb="1rem"
              fontSize="2xl"
            >
              {title}
            </Heading>
            <Text pb="1rem" color="blackAlpha.700" fontSize="md">
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
              fontWeight={"medium"}
              color="black"
              my={2}
              borderWidth="1px"
              borderRadius="lg"
              borderColor="rgba(255, 255, 255, 0)"
              transition="all 0.25s ease"
              _hover={{
                transform: "translateY(-5px)",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
              href={link}
              as="a"
              isExternal
              mt="3rem"
            >
              View Project
            </Button>
            <Button
              ml={[".5rem","1rem"]}
              leftIcon={<FaGithub />}
              fontWeight={"medium"}
              color="black"
              my={2}
              borderWidth="1px"
              borderRadius="lg"
              borderColor="rgba(255, 255, 255, 0)"
              transition="all 0.25s ease"
              _hover={{
                transform: "translateY(-5px)",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
              href={code}
              as="a"
              isExternal
              mt={["3rem"]}
              isDisabled={!code}
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
  image,
  technologies,
}) {
  return (
    <LinkBox mb="1rem" position="relative">
      <Accordion allowToggle>
        <AccordionItem
          borderWidth="1px"
          borderRadius="lg"
          transition="all 0.25s ease"
          _hover={{
            transform: "translateY(-5px)",
            borderColor: "rgba(255,255,255,0.2)",
          }}
        >
          <AccordionButton
            _hover={{
              bg: "none",
            }}
          >
            <VStack align="start" spacing={3} flex="1">
              <HStack alignItems="center" spacing={2}>
                <Image
                  mr=".3rem"
                  borderRadius="full"
                  src={image}
                  alt={company}
                  height="28px"
                  width="28px"
                />
                <Text
                  color="blackAlpha.800"
                  fontWeight="medium"
                  fontSize={["sm", "md"]}
                >
                  {role}, {company}
                </Text>
                <Spacer />
                <Text
                  display={["none", "block"]}
                  color="blackAlpha.800"
                  fontSize="xs"
                  fontWeight="medium"
                >
                  {date}
                </Text>
              </HStack>
            </VStack>
            <IconButton
              mr="8px"
              size="sm"
              icon={<FaExternalLinkAlt />}
              borderWidth="1px"
              borderRadius="lg"
              color="black"
              borderColor="rgba(255,255,255,0)"
              transition="all 0.25s ease"
              _hover={{
                transform: "translateY(-5px)",
                borderColor: "rgba(255,255,255,0.2)",
              }}
              href={link}
              as="a"
              isExternal
            />
            <IconButton
              size="sm"
              icon={<AccordionIcon boxSize={4} />}
              borderWidth="1px"
              borderRadius="lg"
              color="black"
              borderColor="rgba(255,255,255,0)"
              transition="all 0.25s ease"
              _hover={{
                transform: "translateY(-5px)",
                borderColor: "rgba(255,255,255,0.2)",
              }}
            />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text
            pb=".5rem"
              display={["block", "none"]}
              color="blackAlpha.800"
              fontSize="xs"
              fontWeight="medium"
            >
              {date}
            </Text>
            <Text
              pb="8px"
              color="blackAlpha.800"
              fontWeight="medium"
              fontSize="sm"
            >
              {description}
            </Text>
            <Wrap mt={2} spacing={3}>
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  fontWeight="500"
                  borderRadius="md"
                  px={3}
                  py={1}
                  borderColor="gray.100 !important"
                  color="blackAlpha.800"
                >
                  {tech}
                </Badge>
              ))}
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </LinkBox>
  );
}

export default function Home({}) {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const inputStyles = {
    borderWidth: "1px",
    borderRadius: "lg",
    color: "black",

    transition: "all 0.25s ease",
    _hover: {
      transform: "translateY(-5px)",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const payload = JSON.stringify({
      embeds: [
        {
          title: "New Contact Form Submission",
          fields: [
            { name: "Name", value: formData.name },
            { name: "Email", value: formData.email },
            { name: "Message", value: formData.message },
          ],
        },
      ],
    });

    const webhookURL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });

      if (response.ok) {
        toast({
          title: "Sent",
          description: "Siddharth will contact you ASAP. ",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Oops",
          description: "Something went wrong :/ Email me at siddharth@techoptimum.org",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "Unable to submit the form.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };
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

      <Flex px={["2rem", "10rem"]} flexDirection={["column", "row"]}>
        <Flex
          direction="column"
          overflowX={"hidden !important"}
          px={["0", "1rem"]}
          as="aside"
          position={["none", "sticky"]}
          top="0"
          height="100vh"
          overflowY="auto"
          pt="3.5rem"
          flex="1"
        >
          <Image ml="-1rem" src="/siddharth-white.png" borderRadius="full" boxSize="120px" />
          <Heading
            color="blackAlpha.800"
            fontWeight="500"
            my="1rem"
            fontSize={["3xl", "4xl"]}
          >
            Siddharth Duggal
          </Heading>
          <Box maxW="400px" borderRadius="lg">
            <Text color="blackAlpha.800" fontSize="md" fontWeight="500">
              "We’re here to put a dent in the universe. Otherwise why else even
              be here?"
            </Text>

            <Text
              mt=".5rem"
              color="blackAlpha.700"
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
                color={currentSection === "intro" ? "black" : "blackAlpha.500"}
                _hover={{
                  color: "gray.800 !important",
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
                  currentSection === "experience" ? "black" : "blackAlpha.500"
                }
                _hover={{
                  color: "gray.800 !important",
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
                  currentSection === "projects" ? "black" : "blackAlpha.500"
                }
                _hover={{
                  color: "gray.800 !important",
                }}
                fontSize="xl"
                as="span"
                fontWeight="500"
              >
                Projects
              </Text>
            </Link>
          </Box>
          <Box mt="1rem">
            <Link
              href="#contact"
              textDecoration="none"
              mb={2}
              _hover={{ textDecoration: "none" }}
            >
              <Text
                transition="200ms"
                color={
                  currentSection === "contact" ? "black" : "blackAlpha.500"
                }
                _hover={{
                  color: "gray.800 !important",
                }}
                fontSize="xl"
                as="span"
                fontWeight="500"
              >
                Contact
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
                color="blackAlpha.500"
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
                color="blackAlpha.500"
                _hover={{
                  color: "gray.800 !important",
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
        <Box py={["0", "4rem"]} flex="1">
          <Heading
            id="intro"
            pt={["0", "2rem"]}
            color="blackAlpha.800"
            fontWeight="medium"
            fontSize="3xl"
          >
            Intro
          </Heading>
          <Text mt="1rem" color="blackAlpha.700">
            Three years ago, I began experimenting with{" "}
            <chakra.span color="black">JavaScript</chakra.span> and started
            building <chakra.span color="black">Discord bots</chakra.span>. This
            was more than a hobby. Within a year, I was creating Discord bots,
            websites, and Minecraft servers for clients. Concurrently, I
            developed a hosting platform, making it simpler for developers to
            host their projects.
          </Text>
          <Text color="blackAlpha.700" mt={2}>
            Today, I channel my energies and expertise into{" "}
            <Link
              _hover={{
                color: "blue.200",
              }}
              href="https://techoptimum.org"
              color="black"
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
              color="blackAlpha.800"
              fontWeight="medium"
              fontSize="3xl"
              mb="1.3rem"
            >
              Experience
            </Heading>
            <ExperienceCard
              date="January 2022 - Present"
              company="Tech Optimum"
              image={"./tech-optimum.png"}
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
              role="Developer"
              image={"./school-simplified.jpeg"}
              link="https://schoolsimplified.org"
              description="School Simplified offers a number of free resources to help students with their studies. I was responsible for building & maintaining the website."
              technologies={["React", "TypeScript", "Next.js", "Chakra UI"]}
            />
            <ExperienceCard
              date="December 2020 - August 2021"
              company="Aprim"
              role="Lead Developer"
              image={"./aprim.png"}
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
              id="projects"
              color="blackAlpha.800"
              fontWeight="medium"
              fontSize="3xl"
            >
              Projects
            </Heading>
            <Wrap pl=".16rem" pt="1rem" spacing={3} mb={8}>
              {allTags.map((tag) => (
                <Badge
                  fontWeight="medium"
                  borderRadius="md"
                  transition="300ms"
                  px=".4rem"
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  cursor="pointer"
                  color={
                    selectedTags.includes(tag) ? "black" : "blackAlpha.700"
                  }
                  variant={selectedTags.includes(tag) ? "outline" : "ghost"}
                  transform={selectedTags.includes(tag) ? "scale(1.05)" : ""}
                  _hover={{
                    transform: "translateY(-4px)",
                    borderColor: "rgba(255,255,255,0.2)",
                  }}
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
          <Box mb="2rem">
            <Heading
              pt="2rem"
              id="contact"
              color="blackAlpha.800"
              fontWeight="medium"
              fontSize="3xl"
              pb={".5rem"}
            >
              Contact
            </Heading>
            <Box as="form" onSubmit={handleSubmit}>
              <FormControl id="name" isDisabled={isLoading}>
                <FormLabel mt={4} color="black">
                  Name
                </FormLabel>
                <Input
                  isRequired
                  name="name"
                  type="text"
                  placeholder="Your name"
                  {...inputStyles}
                />
              </FormControl>

              <FormControl id="email" isDisabled={isLoading}>
                <FormLabel mt={4} color="black">
                  Email
                </FormLabel>
                <Input
                  isRequired
                  name="email"
                  type="email"
                  placeholder="Your email"
                  {...inputStyles}
                />
              </FormControl>

              <FormControl id="message" mb={1} isDisabled={isLoading}>
                <FormLabel mt={4} color="black">
                  Message
                </FormLabel>
                <Textarea
                  isRequired
                  name="message"
                  placeholder="Your message"
                  {...inputStyles}
                />
              </FormControl>

              <Button
                fontWeight={"medium"}
                color="black"
                my={2}
                borderWidth="1px"
                borderRadius="lg"
                borderColor="rgba(255, 255, 255, 0)"
                transition="all 0.25s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
                type="submit"
                isLoading={isLoading}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
