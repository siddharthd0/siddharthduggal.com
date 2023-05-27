import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Spacer,
  Text,
  Link,
  Heading,
  AccordionIcon,
  Button,
  Box,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

export default function NewProject({ link, description, title, dates }) {
  return (
    <Box borderRadius={"10px"} mt="14px" role="group">
      <Accordion p="0" allowToggle>
        <AccordionItem mb="2px" p="0" border="none">
          <AccordionButton
            transition="300ms"
            _hover={{
              color: "white",
              transform: "scale(1.1)",
              bg: "none !important",
            }}
            p="0"
          >
            <Box flex="1" textAlign="left">
              <Flex alignItems={"center"}>
                <Link textDecor="none !important" isExternal href={link}>
                  <Heading
                    color="whiteAlpha.600 !important"
                    fontWeight={"500"}
                    fontSize="md"
                    _groupHover={{
                      color: "blue.500 !important",
                    }}
                  >
                    {title}
                  </Heading>
                </Link>
                <Spacer />
                <Text
                  pr="10px"
                  pl="1rem"
                  color="whiteAlpha.500"
                  mt="6px"
                  fontSize="xs"
                  fontWeight={"thin"}
                  className="postDescription"
                  _groupHover={{
                    color: "blue.700 !important",
                  }}
                >
                  {dates}
                </Text>
              </Flex>
            </Box>
            <AccordionIcon color="whiteAlpha.500" boxSize={4}>
              {({ isExpanded }) =>
                isExpanded ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 13H5"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )
              }
            </AccordionIcon>
          </AccordionButton>

          <AccordionPanel p="0">
            <Text
              fontWeight={"300"}
              fontSize="sm"
              color="whiteAlpha.700"
              pt="1rem"
            >
              {description}
            </Text>
            <Button
              textDecor={"none !important"}
              mt="1rem"
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              rightIcon={<FiExternalLink />}
              colorScheme="blue"
              variant="outline"
              size="xs"
              _hover={{
                bg: "blue.900",
                color: "blue.400",
              }}
            >
              View Project
            </Button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
