import { Text, Flex, Box, Image, Spacer } from "@chakra-ui/react";

export default function Volunteer({ date, description, image }) {
  return (
    <>
      <Box borderColor={"grey !important"} borderTop={"1px"}>
        <Flex  my="8px"alignItems={"center"}>
        <Text fontSize="sm" color="gray.500" >
          {date}
        </Text>
        <Spacer/>
        <Text  fontSize="sm" color="gray.500">
          {description}
        </Text>
        </Flex>
        <Image maxWidth={"460px"} borderRadius={"5px"} src={image} />
      </Box>
    </>
  );
}
