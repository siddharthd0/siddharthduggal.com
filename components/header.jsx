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
import { useLastFM } from "use-last-fm";

export default function Footer() {
  const lastFM = useLastFM(
    "siddharthduggal",
    "47e0d12807288412db27e146abba1aff"
  );
  return (
    <>
      <Flex direction={["column", "row"]} justifyContent={"center"} alignItems={"center"} maxW={"500px"}>
        <Tooltip
          placement="right"
          label="Photo taken in Catalina Island, California (Winter 2022)"
        >
          <Image width={"100px"} borderRadius={"full"} src="me.png" />
        </Tooltip>

        <Flex mt={["1rem", "0rem"]} direction={"column"} ml="2rem" alignItems={"center"}>
          <Heading fontWeight={"200"}>Siddharth Duggal</Heading>
          <Text fontWeight={"100"} mt="4px">CS & Business Enthusiast</Text>
        </Flex>
      </Flex>

      {/*   <Stack direction={"row"} gap={"4px"}>
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
      </Stack> */}
    </>
  );
}
