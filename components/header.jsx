import {
  Image,
  Stack,
  Flex,
  Heading,
  Tooltip,
  Spacer,
  Link,
  Text,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
export default function Footer() {
  return (
    <>
    <Tooltip openDelay={'200'} placement="right" label="Me in Catalina Island, CA">
      <Image width={"130px"} borderRadius={"14px"} src="me.png" />
      </Tooltip>
      <Flex mt="1rem" alignItems={"center"}>
        <Heading >Siddharth Duggal</Heading>

        <Spacer />

        <Stack mt="5px" direction={"row"} gap={"4px"}>
          <Tooltip hasArrow label="Github" bg="gray.700" color="white">
            <Link
              isExternal
              _hover={{
                background: "none",
              }}
              href="https://github.com/siddharthd0"
            >
              <BsGithub className="icons" size={"22px"} />
            </Link>
          </Tooltip>
          <Tooltip hasArrow label="Linkedin" bg="gray.700" color="white">
            <Link
              className="icons"
              isExternal
              _hover={{
                background: "none",
              }}
              href="https://www.linkedin.com/in/siddharth-duggal/"
            >
              <BsLinkedin className="icons" size={"22px"} />
            </Link>
          </Tooltip>
        </Stack>
      </Flex>
    </>
  );
}
