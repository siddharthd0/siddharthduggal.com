import {
  Tooltip,
  Link,
  Heading,
  Text,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import styled from "styled-components";

export default function ExperienceCard({
  link,
  descriptions,
  position,
  dates,
  company,
}) {
  return (
    <>
      <Box
        maxW="300px"
        padding={"1rem"}
        borderRadius={"10px"}
        className="tinted-bg"
        
      >
        <Link textDecoration={"none !important"} href={link}>
          <Flex alignContent={"center"}>
            <Flex direction={"column"}>
              <Heading fontSize={"md"}>{position}</Heading>

              <Text mt="4px" className="grey-text" fontSize={"12px"}>
                {dates}
              </Text>
            </Flex>
            <Spacer />
            <Text mt="-4px">{company}</Text>
          </Flex>

          <Flex pt="6px" fontSize={"12.5px"} ml={"12px"} direction={"column"}>
            <ul>
              {descriptions.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </Flex>
        </Link>
      </Box>
    </>
  );
}
