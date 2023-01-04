import {
  Image,
  Stack,
  Link,
  Heading,
  Flex,
  Text,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import Project from "../components/new-project";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Footer from "../components/footer";
import Header from "../components/header";

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
        <Flex paddingBottom={"1rem"} borderBottom={"1px"} direction="column">
          <Header />
          <Link href="./" maxW={"117px"} mx="1px">
            <Text>Return to Home</Text>
          </Link>
        </Flex>

        <Flex direction={"column"} marginTop={"10px"}>
          <Heading mt="8px" fontSize={"2xl"}>
            My Projects
          </Heading>
          <Text color="grey.200 !important" mt="6px">
            A list of some of the projects I've worked on.
          </Text>
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
          <Project
            
            title="Launchpad Development"
            dates="December 2020 - March 2021"
            description={
              "Launchpad Development was a freelancing company I created providing things like websites, minecraft servers, discord bots, and more to over hundreds of clients. The company is now disolved"
            }
          />
          <Project title="Aprim" dates="December 2020 - August 2021" description={"Aprim was a web and game hosting company I created with a friend providing hosting to over 50+ clients. The company is now disolved."} />
        </Flex>

        <Footer />
      </Flex>
    </>
  );
}
