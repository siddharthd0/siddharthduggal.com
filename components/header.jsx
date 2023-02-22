import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
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
          as={motion.div}
          variants={childVariants}
          initial="hidden"
          animate="visible"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          direction={["column", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
          maxW={"500px"}
        >
          <Tooltip
            placement="right"
            label="Photo taken in Catalina Island, California (Winter 2022)"
          >
            <motion.div
              variants={childVariants}
              initial="hidden"
              animate="visible"
              drag
             
            >
              <Image
                width={"100px"}
                borderRadius={"full"}
                src="me.png"
                alt="profile picture"
              />
            </motion.div>
          </Tooltip>

          <Flex
            as={motion.div}
            variants={childVariants}
            initial="hidden"
            animate="visible"
            mt={["1rem", "0rem"]}
            direction={"column"}
            ml="2rem"
            alignItems={"center"}
          >
            <Heading fontWeight={"200"}>Siddharth Duggal</Heading>
            <Text fontWeight={"100"} mt="4px">
              Tech & Business Enthusiast
            </Text>
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
}
