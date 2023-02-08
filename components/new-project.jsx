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

export default function NewProject({ link, description, title, dates }) {
  return (
    <>
      <Box borderRadius={"10px"} padding="1rem" className="tinted-bg" mt="14px">
        <Flex alignItems={"center"}>
          <Heading fontWeight={"500"} fontSize={"xl"}>{title}</Heading>
          <Tooltip label={"Check out  " + title} placement="right">
            <Link isExternal href={link}>
              <FiExternalLink className="project-link" />
            </Link>
          </Tooltip>
          <Spacer />
          <Text fontWeight={"100"} fontSize="sm" color="gray.400">
            {dates}
          </Text>
        </Flex>
        <Flex my={"7px"} direction={["column", "column"]}>
          <Spacer />
          <Text fontWeight={"300"} fontSize="sm" color="gray.100">
            {description}
          </Text>
        </Flex>
      </Box>
    </>
  );
}
