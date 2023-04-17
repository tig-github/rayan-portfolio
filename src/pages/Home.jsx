import React from "react";
import { Box, Text, Heading, Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box bg="#2C1B47" w="100%" h="calc(100vh)">
      <Stack align="center" spacing={10}>
        <Heading as="h1" mt="2rem" mb="2rem">
          <Text color="white">Welcome</Text>
        </Heading>
      </Stack>
    </Box>
  );
};

export default Home;
