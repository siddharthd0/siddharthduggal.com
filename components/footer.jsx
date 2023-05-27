import { Tooltip, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Text color="whiteAlpha.500" fontSize={"sm"} mb="20px" mt="28px">
        Website made with ❤️ in{" "}
        <Tooltip
        placement="top"
        openDelay={"200"} 
          label="Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites"
        >
          <Link _hover={{
            color: "blue.500 !important",
          }} isExternal href="https://nextjs.org">
            Next.js
          </Link>
        </Tooltip>{" "}
        {""}
        using{" "}
        <Tooltip placement="top" openDelay={"200"} label="Chakra UI is a CSS framework that makes building React websites more fun">
        <Link _hover={{
            color: "blue.500 !important",
          }} isExternal href="http://chakra-ui.com">
          Chakra UI
        </Link>
        </Tooltip>
      </Text>
    </>
  );
}
