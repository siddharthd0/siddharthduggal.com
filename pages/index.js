import Head from "next/head";
import {
  Tooltip,
  Image,
  Link,
  Flex,
  Text,
  Box,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { BsTrophy, BsBriefcaseFill, BsCodeSlash,BsFillPersonFill } from "react-icons/bs";
import { GiMeshNetwork } from "react-icons/gi";

export default function Home() {
  const [dateArray, setDateArray] = useState([]);
  const [descriptionArray, setDescriptionArray] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://brainy.ruiwenge2.repl.co/sid/myformsdata/json")
      .then((response) => response.json())
      .then((response) => {
        const respArray = Object.values(response);

        setData(respArray.reverse());

        const dates = data.map((element) => {
          return element.date;
        });
        setDateArray(dates);

        const descriptions = data.map((desc) => {
          return desc.description;
        });
        setDescriptionArray(descriptions);
      });
  }, [data]);
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
