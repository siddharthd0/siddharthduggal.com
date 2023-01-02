import {
  Image,
  Stack,
  Link,
  Heading,
  Flex,
  Text,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import Project from "../components/new-project";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function ProjectPage() {
  return (
    <>
      <Flex
        mt="5rem !important"
        margin={"auto"}
        maxW={"680px"}
        direction="column"
        px="2rem"
      >
        <Flex paddingBottom={"1rem"}borderBottom={"1px"}direction="column">
        <Image width={"130px"} borderRadius={"10px"} src="me.png" />
        <Flex
          
          mb="6px"
          mt="1rem"
          alignItems={"center"}
        >
          <Heading>Siddharth Duggal</Heading>

          <Spacer />

          <Stack mt="5px" direction={"row"} gap={"4px"}>
            <Link
              isExternal
              _hover={{
                background: "none",
              }}
              href="https://github.com/siddharthd0"
            >
              <BsGithub className="icons" size={"22px"} />
            </Link>
            <Link
              isExternal
              _hover={{
                background: "none",
              }}
              href="https://www.linkedin.com/in/siddharth-duggal/"
            >
              <BsLinkedin className="icons" size={"22px"} />
            </Link>
          </Stack>
          
        </Flex>
        <Link href="./" maxW={"117px"} mx="1px">
        <Text>Return to Home</Text>
        </Link>
        </Flex>

        <Flex direction={"column"} marginTop={"10px"}>
          <Heading mt="8px" fontSize={"2xl"}>My Projects</Heading>
          <Text color="blackAlpha.700" mt="6px">A list of some of the projects I've worked on.</Text>
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
          description="I made A Small Universe for my AP computer science class. >A Small Universe is a web application where you can entertain
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

        <Text fontSize={"sm"} mb="6px" mt="18px">
          Website made with ❤️ in Next.js using Chakra UI
        </Text>
      </Flex>
    </>
  );
}
