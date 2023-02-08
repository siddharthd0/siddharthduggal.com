import {
  Flex,
  Spacer,
  Wrap,
  Box,
  Breadcrumb,
  Heading,
  BreadcrumbLink,
  BreadcrumbItem,
  Button,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import ExperienceCard from "../components/experience-card";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Footer from "../components/footer";
import Header from "../components/header";

import Head from "next/head";

import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function ProjectPage({ posts }) {
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
          <Heading>My Blogs</Heading>
          <Breadcrumb mt="3px" color="gray.500">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">siddharthduggal.com</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink _hover={{
                textDecoration: "none !important",
              }} href="#">posts</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Spacer />
        </Flex>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="14px">
          {posts.reverse().map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );

            return (
              <Link
                textDecoration={"none !important"}
                className="readMoreLink"
                href={`/${post.id}`}
              >
                <Box
                  transition={"200ms"}
                  borderRadius={"9px"}
                  marginTop={"1rem"}
                  border="1px"
                  borderColor={"transparent"}
                  _hover={{
                    border: "1px",
                  }}
                >
                  <Box
                    transition={"200ms"}
                    margin="6px"
                    borderRadius={"6px"}
                    py="10px"
                    px="1rem"
                    backgroundColor="gray.900"
                    _hover={{
                      backgroundColor: "gray.800",
                    }}
                    key={post.id}
                  >
                    <Heading fontWeight={"500"} fontSize="2xl">
                      <Text text={post.properties.Name.title} />
                    </Heading>

                    <Heading
                      mt="6px"
                      fontSize="sm"
                      fontWeight={"thin"}
                      className="postDescription"
                    >
                      {date}
                    </Heading>
                    <Heading mt="5px" fontSize="sm" fontWeight={"thin"}>
                      View →{" "}
                    </Heading>
                  </Box>
                </Box>
              </Link>
            );
          })}
        </SimpleGrid>
      </Flex>

      <Box px="2rem" maxW={"680px"} margin="auto">
        <Footer />
      </Box>
    </>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
