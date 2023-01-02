import {Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
     <Text fontSize={"sm"} mb="20px" mt="18px">
          Website made with ❤️ in{" "}
          <Link isExternal href="https://nextjs.org">
            Next.js
          </Link>{" "}
          using{" "}
          <Link isExternal href="http://chakra-ui.com">
            Chakra UI
          </Link>
        </Text>
    </>
  );
}
