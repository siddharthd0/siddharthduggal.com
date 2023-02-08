import {
  Flex,
  Spacer,
  Wrap,
  Box,
  Breadcrumb,
  Heading,
  BreadcrumbLink,
  BreadcrumbItem,
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
              <BreadcrumbLink href="#">experience</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Spacer />
        </Flex>
        <div className="announcements-container">
          <ol className="announcements">
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
                <Box marginTop={"1rem"} className="tinted-bg" key={post.id}>
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
          </ol>
        </div>
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
