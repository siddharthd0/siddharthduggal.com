import {
  Image,
  Flex,
  Text,
  Spacer,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spinner,
  Box,
} from "@chakra-ui/react";
import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";

export default function ProjectPage() {
  const [dateArray, setDateArray] = useState([]);
  const [descriptionArray, setDescriptionArray] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      });
  }, [data]);
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
              <BreadcrumbLink href="#">my-life</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Spacer />
        </Flex>
        {isLoading ? (
          <>
          <Flex alignItems={"center"}>
            <Text mt="1rem">Loading images & content...</Text>{" "}
            <Spinner mt=".7rem" ml="1rem" size="sm" color="teal.300" />
            </Flex>
          </>
        ) : (
          <Flex direction={"column"}>
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
                        <Text fontSize="sm" maxW={"460px"} color="gray.200">
                          {item.description}
                        </Text>
                        <Spacer />

                        <Text fontSize="sm" color="gray.400">
                          {" "}
                          {item.date}
                        </Text>
                      </Flex>

                      <Box mt="10px">
                        <Image borderRadius={"7px"} src={item.image} />
                      </Box>
                    </Flex>
                  </>
                );
              })}
          </Flex>
        )}

        <Footer />
      </Flex>
    </>
  );
}
