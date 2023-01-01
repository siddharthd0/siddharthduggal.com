import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {
  Image,
  Stack,
  Divider,
  Link,
  Heading,
  Flex,
  Text,
  Box,
  Spacer,
} from "@chakra-ui/react";
import New from "../components/new-update";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useEffect, useState } from "react";

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
        <Image width={"130px"} borderRadius={"10px"} src="me.png" />
        <Flex mt="1rem" alignItems={"center"}>
          <Heading>Siddharth Duggal</Heading>
          <Spacer />
          <Stack direction={"row"} gap={"4px"}>
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
        <Text maxW={"500px"} my="10px" fontSize={"md"}>
          Hey! I'm Siddharth and I enjoy coding for fun. I'm mainly working on
          my non-profit,{" "}
          <Link isExternal href="https://techoptimum.org">
            Tech Optimum
          </Link>
          , right now. If you need to contact me, feel free to message me on{" "}
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
                  mb="1rem"
                  direction={"column"}
                  borderTopColor="grey.500 !important"
                  borderTop={"1px"}
                  key={i}
                >
                  <Flex mt="8px">
                    <Text color="gray.500">{item.description}</Text>
                    <Spacer />

                    <Text color="gray.500"> {item.date}</Text>
                  </Flex>

                  <Box mt="10px" maxWidth={"450px"}>
                    <Image borderRadius={"7px"} src={item.image} />
                  </Box>
                </Flex>
              </>
            );
          })}
      
      </Flex>
      <br />
      <br />
    </>
  );
}
