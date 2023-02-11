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
        maxW={"800px"}
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
              <BreadcrumbLink
                _hover={{
                  textDecoration: "none !important",
                }}
                href="#"
              >
                posts
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Spacer />
        </Flex>
        <SimpleGrid>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "2-digit",
                day: "2-digit",
                year: "2-digit",
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
                  marginTop={".5rem"}
                >
                  <Box
                    transition={"300ms"}
                    margin="6px"
                    borderRadius={"6px"}
                    py="10px"
                    key={post.id}
                    _hover={{
                      color: "white",
                      transform: "scale(1.1)",
                    }}
                  >
                    <Flex>
                      <Heading
                        color="gray.500 !important"
                        fontWeight={"500"}
                        fontSize="xl"
                        _hover={{
                          color: "white !important",
                        }}
                      >
                        <Text text={post.properties.Name.title} />
                      </Heading>
                      <Spacer />
                      <Heading
                        color="grey.400"
                        mt="6px"
                        fontSize="sm"
                        fontWeight={"thin"}
                        className="postDescription"
                      >
                        {date}
                      </Heading>
                    </Flex>
                  </Box>
                </Box>
              </Link>
            );
          })}
        </SimpleGrid>
      </Flex>

      <Box px="2rem" maxW={"800px"} margin="auto">
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
