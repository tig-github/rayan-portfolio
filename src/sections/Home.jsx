import React from "react";
import {
  Box,
  Center,
  Stack,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import HomeField from "../components/HomeField";
import me from "../images/rayan.jpg";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Resources from "./Resources";
import Commits from "../components/Commits/Commits";
import Footer from "../components/Footer";

const Home = () => {
  const imageSize = useBreakpointValue(
    {
      base: 0,
      md: 10,
    },
    {
      fallback: "base",
    }
  );

  return (
    <Box bg="#2C1B47" maxH="100%" minH="calc(100vh)" w="100%">
      <Stack spacing={10}>
        <Flex
          justify="center"
          flexWrap="wrap"
          mt={{ base: "30%", sm: "20%", md: "10%" }}
        >
          <Image
            src={me}
            boxSize="30%"
            minW="20rem"
            borderRadius="full"
            mr={imageSize}
            mb={3}
          />
          <Center width="55%" mt="1rem">
            <HomeField />
          </Center>
        </Flex>
        <Center>
          <Commits />
        </Center>
        <Experience />
        <Skills />
        <Projects />
        <Resources />
        <Footer />
      </Stack>
    </Box>
  );
};

export default Home;
