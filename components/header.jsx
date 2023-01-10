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
import Marquee from "react-double-marquee";

export default function Footer() {
  const lastFM = useLastFM(
    "siddharthduggal",
    "47e0d12807288412db27e146abba1aff"
  );
  return (
    <>
      <Flex>
        <Tooltip
          placement="right"
          label="Photo taken in Catalina Island, California (Winter 2022)"
        >
          <Image width={"140px"} borderRadius={"14px"} src="me.png" />
        </Tooltip>
        <Spacer />
        {lastFM.status === "playing" ? (
          <Flex maxW={"300px"} alignItems={"center"}>
            <Tooltip label={lastFM.song.album}>
              <Image
                borderRadius={"10px"}
                height="75px"
                width={"75px"}
                src={lastFM.song.art}
              />
            </Tooltip>

            <Text ml="14px">
              <Flex alignItems={"center"} class="blink_img">
                <Image
                  className="blink_img"
                  src="https://msingermany.co.in/wp-content/uploads/2020/03/dot.png"
                  width={"12px"}
                  height="12px"
                />{" "}
                <Text fontSize="11px" ml="4px">
                  Live
                </Text>
              </Flex>
              I am listening to{" "}
              <Link isExternal href={lastFM.song.url}>
                {lastFM.song.name} by {lastFM.song.artist}
              </Link>{" "}
              on Spotify right now.
            </Text>
          </Flex>
        ) : (
          <p></p>
        )}
      </Flex>

      <Flex mt="1rem" alignItems={"center"}>
        <Heading>Siddharth Duggal</Heading>

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
