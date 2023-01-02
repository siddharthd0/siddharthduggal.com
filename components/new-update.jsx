import { Text, Flex, Box, Image, Spacer } from "@chakra-ui/react";

export default function Volunteer({ date, description, image }) {
  return (
    <>
      <Box mt="6px" borderColor={"grey !important"} borderTop={"1px"}>
        <Flex my={"10px"} direction={["column", "row"]} alignItems={"center"}>
          <Text fontSize="sm" color="gray.500">
            {date}
          </Text>
          <Spacer />
          <Text fontSize="sm" color="gray.500">
            {description}
          </Text>
        </Flex>
        <Box maxWidth={"460px"}>
          <Image borderRadius={"5px"} src={image} />
        </Box>
      </Box>
    </>
  );
}
