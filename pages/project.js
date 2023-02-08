import {
  Flex,
  Spacer,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import Project from "../components/new-project";
import Footer from "../components/footer";

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
          pb=".88rem"
          borderColor={"gray.500 !important"}
          borderBottom={"1px"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">siddharthduggal.com</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">projects</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Spacer />
        </Flex>

        <Flex direction={"column"} marginTop={"10px"}>
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

        <Footer />
      </Flex>
    </>
  );
}
