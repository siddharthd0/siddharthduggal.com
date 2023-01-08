import { Tooltip, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Text fontSize={"sm"} mb="20px" mt="18px">
        Website made with ❤️ in{" "}
        <Tooltip
        openDelay={"200"} 
          hasArrow
          label="Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites"
        >
          <Link isExternal href="https://nextjs.org">
            Next.js
          </Link>
        </Tooltip>{" "}
        {""}
        using{" "}
        <Tooltip openDelay={"200"} label="Chakra UI is a CSS framework that makes building React websites more fun">
        <Link isExternal href="http://chakra-ui.com">
          Chakra UI
        </Link>
        </Tooltip>
      </Text>
    </>
  );
}
