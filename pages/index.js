import Head from "next/head";
import { Tooltip, Link, Flex, Button, Spacer } from "@chakra-ui/react";
import Header from "../components/header";
import { BsBriefcaseFill, BsCodeSlash, BsFillPersonFill } from "react-icons/bs";
import { GiMeshNetwork } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Siddharth Duggal</title>
        <meta name="description" content="Siddharth Duggal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/me.png" />
      </Head>
      <Flex
        justifyContent={"center !important"}
        alignItems="center"
        direction={"column"}
        textAlign="center"
        height="95vh"
      >
        <Header />
        <Flex mt="1rem" direction={["column", "row"]} maxW={"1000px"}>
          <Tooltip
            openDelay={250}
            placement="right"
            label="New things that are happening right now."
          >
            <Link textDecor={"none !important"} href="./my-life">
              <Button
              mt={[".1rem", "0rem"]}
                fontSize={"sm"}
                ml="1rem"
                transition={"all 0.14s ease-in-out"}
                fontWeight={"300"}
                _hover={{ bg: "gray.600" }}
                border="1px"
                borderColor="gray.600"
                backgroundColor="transparent"
                className="nav-link"
                rightIcon={
                  <BsFillPersonFill
                    position={"relative"}
                    className="nav-icons"
                  />
                }
              >
                My Life
              </Button>
            </Link>
          </Tooltip>
          <Tooltip
            openDelay={250}
            placement="right"
            label="Check out a few of my cool coding projects."
          >
            <Link textDecor={"none !important"} href="./project">
              <Button
              mt={["1rem", "0rem"]}
                ml="1rem"
                fontSize={"sm"}
                transition={"all 0.14s ease-in-out"}
                fontWeight={"300"}
                _hover={{ bg: "gray.600" }}
                border="1px"
                borderColor="gray.600"
                backgroundColor="transparent"
                className="nav-link"
                rightIcon={
                  <BsCodeSlash position={"relative"} className="nav-icons" />
                }
              >
                Projects{" "}
              </Button>
            </Link>
          </Tooltip>
          <Spacer />
          <Tooltip
            openDelay={250}
            placement="right"
            label="Check out my work experience."
          >
            <Link textDecor={"none !important"} href="./experience">
              <Button
              mt={["1rem", "0rem"]}
                fontSize={"sm"}
                ml="1rem"
                transition={"all 0.14s ease-in-out"}
                fontWeight={"300"}
                _hover={{ bg: "gray.600" }}
                border="1px"
                borderColor="gray.600"
                backgroundColor="transparent"
                className="nav-link"
                rightIcon={
                  <BsBriefcaseFill
                    position={"relative"}
                    className="nav-icons"
                  />
                }
              >
                Experience
              </Button>
            </Link>
          </Tooltip>
          <Spacer />
          <Tooltip
            openDelay={250}
            placement="right"
            label="Check out my resume."
          >
            <Link textDecor={"none !important"} href="./resume.pdf">
              <Button
              mt={["1rem", "0rem"]}
                fontSize={"sm"}
                ml="1rem"
                transition={"all 0.14s ease-in-out"}
                fontWeight={"300"}
                _hover={{ bg: "gray.600" }}
                border="1px"
                borderColor="gray.600"
                backgroundColor="transparent"
                className="nav-link"
                rightIcon={
                  <GiMeshNetwork position={"relative"} className="nav-icons" />
                }
              >
                Résumé
              </Button>
            </Link>
          </Tooltip>
          <Spacer />
        </Flex>
      </Flex>
    </>
  );
}
