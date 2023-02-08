import {
  Flex,
  Spacer,
  Wrap,
  Box,
  Breadcrumb,
  Heading,
  BreadcrumbLink,
  BreadcrumbItem,
} from "@chakra-ui/react";
import ExperienceCard from "../components/experience-card";
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
        <Flex
          direction="column"
          pb=".88rem"
          borderColor={"gray.500 !important"}
          borderBottom={"1px"}
        >
          <Heading>My Experience</Heading>
          <Breadcrumb mt="3px" color="gray.500">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">siddharthduggal.com</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink _hover={{
                textDecoration: "none !important",
              }}  href="#">experience</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Spacer />
        </Flex>
      </Flex>

      <Wrap pt="16px" spacing="16px" px="2rem" margin={"auto"} maxW={"680px"}>
        <ExperienceCard
          dates={"January 2022 - Present"}
          position={"Founder & CEO"}
          company="Tech Optimum"
          descriptions={[
            "Managing a team of ~30 staff",
            "Built the website using NextJs and Chakra",
            "Hosted a virtual hackathon with 300+ members and $40k in prizes",
            "Grew a social media presence of over 500k+ impressions",
            "Spearheaded the development of our courses & internship website",
            "Initiated an effort to create all documents for the 501c3 status ",
          ]}
        />
        <ExperienceCard
          company="Aprim"
          dates="December 2020 - July 2021"
          position={"Co-founder & CTO"}
          descriptions={[
            "Collaborated closely with the CEO to acquire customers and build the hosting platform",
            "Co-founded and built a hosting company with over 50 global clients. ",
            "Provided web hosting, game hosting, bot hosting, and other services",
            "Gathered 50,000+ views.",
          ]}
        />

        <ExperienceCard
          dates="April 2020 - November 2021"
          position="Community Owner"
          company="Ace's Castle"
          descriptions={[
            "Founded Ace's Castle/Echo Circle",
            "Chat-space open to all topics of discussion",
            "Grew a community of 3,300+ members",
            "Managed a team of 20+ people",
            "Went through 200+ moderator applications",
            "Discord server got deleted in November 2021",
          ]}
        />
        <ExperienceCard
          dates="Dec. 2020 - April 2021"
          position={"Co-founder"}
          company="Launchpad Dev."
          descriptions={[
            "Developed websites, Minecraft servers, Discord bots, and more for over 80 clients ",
            "Handled $400+ in revenue",
            "Used languages like Javascript, Java, HTML, CSS, and PHP",
          ]}
        />
        <ExperienceCard
          dates="June 2020 - Present"
          position={"Personal Projects"}
          descriptions={[
            "I've been working on personal projects since 2020. I've built websites, Discord bots, Minecraft servers, and more. Most of my projects are private, but I've released a few to the public. Check out my Github to view them. ",
          ]}
        />
        <ExperienceCard
          position={"Web Developer"}
          company="School Simplified"
          dates="April 2022 - Present"
          descriptions={[
            "Writing code for the website in NextJs and Chakra",
            "Taking requests by other departments",
          ]}
        />
      </Wrap>
      <Box px="2rem" maxW={"680px"} margin="auto">
        <Footer />
      </Box>
    </>
  );
}
