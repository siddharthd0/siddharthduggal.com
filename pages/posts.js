import {
  Flex,
  Spacer,
  Wrap,
  Box,
  Breadcrumb,
  Heading,
  BreadcrumbLink,
  BreadcrumbItem,
  SimpleGrid,
} from "@chakra-ui/react";
import ExperienceCard from "../components/experience-card";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Footer from "../components/footer";
import Header from "../components/header";

import Head from "next/head";
import Link from "next/link";
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
              <BreadcrumbLink href="#">posts</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Spacer />
        </Flex>
        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing="14px">
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
              <Box
                borderRadius={"10px"}
                py="10px"
                px="1rem"
                marginTop={"1rem"}
               backgroundColor="gray.900"
               _hover={{
                backgroundColor: "gray.800",
               }}
                key={post.id}
              >
                <h3 className="postTitle">
                  <Text text={post.properties.Name.title} />
                </h3>

                <p className="postDescription">
                  <Text text={post.properties.Description.text} />
                </p>
                <p className="postDescription">{date}</p>
                <Link className="readMoreLink" href={`/${post.id}`}>
                  Read more →{" "}
                </Link>
              </Box>
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
