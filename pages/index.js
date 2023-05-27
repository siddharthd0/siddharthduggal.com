import Head from "next/head";
import {
  Tooltip,
  Link,
  Flex,
  Button,
  Spacer,
  SimpleGrid,
  Box,
  Heading,
  HStack,
  BreadcrumbLink,
  chakra,
  BreadcrumbItem,
  Breadcrumb,
} from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";
import Giscus from "@giscus/react";
import {
  BsFillPencilFill,
  BsBriefcaseFill,
  BsCodeSlash,
  BsFillPersonFill,
} from "react-icons/bs";
import { GiMeshNetwork } from "react-icons/gi";
import { motion } from "framer-motion";
import Clock from "../components/clock";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import Project from "../components/new-project";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2
      }
    },
  };
  
  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };
  
  return (
    <>
      <Head>
        <title>Siddharth Duggal</title>
        <meta name="description" content="Siddharth Duggal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/me.png" />
      </Head>
      <Flex
        direction={"column"}
        mt="10rem !important"
        margin={"auto"}
        maxW={"400px !important"}
      >
        <Header />
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Flex as={motion.div} variants={childVariants} alignItemss="center" pb="10px" mt="2rem !important">
            <Heading fontSize="xl" fontWeight="500" color="whiteAlpha.800">
              Intro
            </Heading>
            <Spacer />
            <HStack spacing={3}>
              <Link
                _hover={{
                  color: "twitter.500 !important",
                }}
                href="https://twitter.com/siddharthd01"
                isExternal
                color="whiteAlpha.500"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                _hover={{
                  color: "red.500 !important",
                }}
                href="https://www.instagram.com/siddharth.duggal/"
                isExternal
                color="whiteAlpha.500"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                _hover={{
                  color: "linkedin.500 !important",
                }}
                href="https://www.linkedin.com/in/siddharth-duggal/"
                isExternal
                color="whiteAlpha.500"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                _hover={{
                  color: "gray.200 !important",
                }}
                href="https://github.com/siddharthd0"
                isExternal
                color="whiteAlpha.500"
              >
                <FaGithub size={20} />
              </Link>
            </HStack>
          </Flex>
          <Box as={motion.div} variants={childVariants}>
          <chakra.p color="whiteAlpha.700" fontSize="sm">
            I&apos;m a 17-year-old based in the USA, deeply interested in tech. I
            love creating things that can help people. Currently, I&apos;m working
            on{" "}
            <Link href="https://techoptimum.org" textDecoration="none !important">
              Tech Optimum
            </Link>
            . Tech Optimum is a nonprofit committed to offering free programming
            education, striving to be the all-in-one platform for students eager
            to dive into the world of tech.
          </chakra.p>
          </Box>
         
          <Heading
            mt="2rem !important"
            fontSize="xl"
            fontWeight="500"
            color="whiteAlpha.800"
            pb="10px"
            as={motion.div}
            variants={childVariants}
          >
            Posts
          </Heading>
          <SimpleGrid as={motion.div} variants={childVariants}>
            {posts.map((post) => {
              const date = new Date(post.last_edited_time).toLocaleString(
                "en-US",
                {
                  month: "2-digit",
                  day: "2-digit",
                  year: "2-digit",
                }
              );

              return (
                <Link textDecoration={"none !important"} href={`/${post.id}`}>
                  <Box transition={"200ms"} borderRadius={"9px"} role="group">
                    <Box
                      transition={"300ms"}
                      pb="18px"
                      borderRadius={"6px"}
                      key={post.id}
                      _hover={{
                        color: "white",
                        transform: "scale(1.1)",
                      }}
                    >
                      <Flex alignItems="center">
                        <Heading
                          color="whiteAlpha.600 !important"
                          fontWeight={"500"}
                          fontSize="md"
                          transition={"300ms"}
                          _groupHover={{
                            color: "blue.500 !important",
                          }}
                        >
                          <Text text={post.properties.Name.title} />
                        </Heading>
                        <Spacer />
                        <Heading
                          transition={"300ms"}
                          pl="1rem"
                          color="whiteAlpha.500"
                          mt="6px"
                          fontSize="xs"
                          fontWeight={"thin"}
                          className="postDescription"
                          _groupHover={{
                            color: "blue.700 !important",
                          }}
                        >
                          {date}
                        </Heading>
                      </Flex>
                    </Box>
                  </Box>
                </Link>
              );
            })}
          </SimpleGrid>
          <Heading
          as={motion.div}
          variants={childVariants}
            mt="2rem !important"
            fontSize="xl"
            fontWeight="500"
            color="whiteAlpha.800"
          >
            Projects
          </Heading>
          <Flex as={motion.div} variants={childVariants} direction={"column"}>
           
          <Project
            link="https://resumate.tech"
            title="Resumate"
            dates="Febuary 2022 - Febuary 2022"
            description="Resumate is a resume builder that helps you create a resume 
          in minutes. It is a simple and easy to use resume builder that allows you to combine Markdown and CSS with ease to create a PF resume, custom to you."
          />
          <Project
            link="https://techoptimum.org"
            dates="January 2022 - Present"
            description={
              "Tech Optimum is a student-led non-profit dedicated to helping high schoolers and college students in computer science"
            }
            title="Tech Optimum"
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
        </Flex>

        <Heading
          mt="2rem !important"
          fontSize="xl"
          fontWeight="500"
          color="whiteAlpha.800"
          mb="1rem"
        >
          Wall of Something?
        </Heading>
        <Giscus
          id="comments"
          repo="siddharthd0/siddharthduggal.com"
          repoId="R_kgDOG4vHow"
          category="General"
          categoryId="DIC_kwDOG4vHo84CWyJT"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark"
          lang="en"
          loading="lazy"
        />
        </motion.div>
        <Footer />
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const database = await getDatabase(databaseId);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
}
