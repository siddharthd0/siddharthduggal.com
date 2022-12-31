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
  Spacer,
} from "@chakra-ui/react";
import New from "../components/new-update";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Siddharth Duggal</title>
        <meta name="description" content="Siddharth Duggal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        mt="5rem !important"
        margin={"auto"}
        maxW={"680px"}
        direction="column"
        px="2rem"
      >
        <Image width={"130px"} borderRadius={"10px"}src="me.png"/>
        <Flex mt="1rem" alignItems={"center"}>
          <Heading >Siddharth Duggal</Heading>
          <Spacer />
          <Stack direction={"row"} gap={"4px"}>
            <Link isExternal _hover={
              {
                background: "none",
              }
            } href="https://github.com/siddharthd0">
            <BsGithub className="icons" size={"22px"} />
            </Link>
            <Link isExternal _hover={
              {
                background: "none",
              }
            } href="https://www.linkedin.com/in/siddharth-duggal/">
            <BsLinkedin className="icons" size={"22px"} />
            </Link>
          </Stack>
        </Flex>
        <Text maxW={"500px"} my="10px" fontSize={"md"}>
          Hey! I'm Siddharth and I enjoy coding for fun. I'm mainly working on
          my non-profit, <Link isExternal href="https://techoptimum.org">Tech Optimum</Link>,
          right now. If you need to contact me, feel free to message me on{" "}
          <Link isExternal href="https://discord.com/@910659572199464990">Discord</Link> or by{" "}
          <a href="mailto:siddharthduggal2013@gmail.com">Email</a>.
        </Text>

        <New
          image="/1.png"
          date="12/30/22"
          description={
            "Just working on college apps and redoing my portfolio website"
          }
        ></New>
      </Flex>
      <br/>
      <br/>
    </>
  );
}
