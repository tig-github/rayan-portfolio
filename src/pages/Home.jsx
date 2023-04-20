import React from "react";
import { Box, Container, Text, Heading, Stack, Image } from "@chakra-ui/react";
import HomeField from "../components/HomeField";
import logo from "../images/logo.png";

const Home = () => {
  return (
    <Box bg="#2C1B47" w="100%" h="100%">
      <Stack align="center" spacing={10}>
        <Heading as="h1" mt="2rem" mb="2rem">
          <Text color="white">Welcome</Text>
        </Heading>
        <Container align="center">
          <Image src={logo} w="90%" h="90%" mb="6rem"></Image>
        </Container>
        <HomeField />
        <Container></Container>
      </Stack>
    </Box>
  );
};

export default Home;
