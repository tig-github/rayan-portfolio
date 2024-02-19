import React from "react";
import { Box, Text, Heading, Stack, Flex, Center } from "@chakra-ui/react";
import { FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, } from "react-icons/si";

const Resources = () => {
  return (
    <>
      <Box bg="#2C1B47" w="100%" h="100%" id="resources">
        <Stack align="center" spacing={10}>
          <Heading as="h1" mt="2rem" mb="4rem">
            <Text color="white">Resources</Text>
          </Heading>
          {/* <BlogField
            text={blog0Text}
            header={"Hello there 👋"}
            image={blog0Image}
          /> */}
          <Box bg="#DCCAE9" px="1rem" ml=".5rem" mb="2rem" mt="2rem" w="72%" borderRadius="1rem">
            <Stack align="center" my="2rem" spacing={10}>
              <Heading>
                <Text>Helpful Resources</Text>
              </Heading>
              <Text align="center">The following are resources that helped me learn about Computer Science and Programming.</Text>
              <Text align="center">Click any of the icons below to learn more.</Text>
              <Center>
                <Flex justify="center" gap="2rem" wrap="wrap">
                  <FaPython size="10%" color="#281b3d"/>
                  <FaReact size="10%" color="#281b3d"/>
                  <IoLogoJavascript size="10%" color="#281b3d"/>
                  <SiCplusplus size="10%" color="#281b3d"/>
                </Flex>
              </Center>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Resources;
