import Head from "next/head";
import {
  Image,
  Link,
  Flex,
  Text,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header"

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
       <Header/>
        <Link href="./project" maxW={"125px"} mx="1px">
          <Text>View my Projects</Text>
        </Link>
        <Text maxW={"500px"} my="10px" mb="10px" fontSize={"md"}>
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
                  mb=".6rem"
                  direction={"column"}
                  className="post-card"
                  key={i}
                >
                  <Flex mt="8px">
                    <Text color="gray.200">{item.description}</Text>
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

       <Footer/>
      </Flex>
    </>
  );
}
