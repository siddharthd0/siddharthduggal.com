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
import { BsTrophy, BsBriefcaseFill, BsCodeSlash } from "react-icons/bs";

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
        mt="5rem !important"
        margin={"auto"}
        maxW={"680px"}
        direction="column"
        px="2rem"
      >
        <Header />
        <Flex mt="5px" direction={["column", "row"]} maxW={"290px"}>
          <Tooltip
            openDelay={250}
            placement="right"
            label="Check out a few of my cool coding projects."
            py={"10px"}
          >
            <Link textDecor={"none !important"} href="./project">
              <Button
                 transition={"all 0.2s ease-in-out"}
                 fontWeight={"400"}
                 _hover={{ bg: "gray.900"}}
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
              transition={"all 0.2s ease-in-out"}
                fontWeight={"400"}
                _hover={{ bg: "gray.900"}}
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
     
        </Flex>
        <Text maxW={"1000px"} my="10px" mb="13px" fontSize={"15px "}>
          Hey, I'm Siddharth! Coding is a hobby of mine that brings joy and
          allows me to create for the internet. Currently, I'm working on my
          non-profit,{" "}
          <Tooltip
            openDelay={250}
            label="Tech Optimum is a student-led organization dedicated to helping high schoolers and college students in CS. "
          >
            <Link isExternal href="https://techoptimum.org">
              Tech Optimum
            </Link>
          </Tooltip>
          . If you need to contact me, feel free to message me through{" "}
          <Link isExternal href="https://discord.com/@910659572199464990">
            Discord
          </Link>{" "}
          or by <a href="mailto:siddharthduggal2013@gmail.com">Email</a>.
        </Text>
        {data &&
          data.map((item, i) => {
            return (
              <>
                <Flex
                  mb=".6rem"
                  direction={"column"}
                  className="post-card"
                  key={i}
                >
                  <Flex mt="8px">
                    <Text maxW={"460px"} color="gray.200">{item.description}</Text>
                    <Spacer />

                    <Text color="gray.400"> {item.date}</Text>
                  </Flex>

                  <Box mt="10px" maxWidth={"450px"}>
                    <Image borderRadius={"7px"} src={item.image} />
                  </Box>
                </Flex>
              </>
            );
          })}

        <Footer />
      </Flex>
    </>
  );
}
