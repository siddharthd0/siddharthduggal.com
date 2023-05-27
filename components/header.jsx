import { motion } from "framer-motion";
import {
  Image,
  Stack,
  Flex,
  Heading,
  Tooltip,
  Spacer,
  Box,
  Link,
  Text,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useLastFM } from "use-last-fm";
import Clock from "./clock";

export default function Footer() {
  const lastFM = useLastFM(
    "siddharthduggal",
    "47e0d12807288412db27e146abba1aff"
  );

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Flex
          alignItems="center"
          as={motion.div}
          variants={childVariants}
          initial="hidden"
          animate="visible"
          maxW={"800px"}
        >
          <motion.div
            variants={childVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              mr="2rem"
              width={"70px"}
              borderRadius={"md"}
              src="me.png"
              alt="profile picture"
            />
          </motion.div>

          <Box>
            <Heading fontSize="4xl" color="whiteAlpha.900" fontWeight={"300"}>
              Siddharth Duggal
            </Heading>
            <Flex mt="4px" alignItems="center">
              <Text fontSize="sm" color="whiteAlpha.800" fontWeight={"100"}>
                Tech & Business
              </Text>
              <Spacer />
              <Clock />
            </Flex>
          </Box>
        </Flex>
      </motion.div>
    </>
  );
}
