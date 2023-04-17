import React from "react";
import { Box, Text, Stack, Heading } from "@chakra-ui/react";

const Blog = () => {
  return (
    <>
      <Box bg="#2C1B47" w="100%" h="calc(100vh)">
        <Stack align="center" spacing={10}>
          <Heading as="h1" mt="2rem" mb="2rem">
            <Text color="white">Blog</Text>
          </Heading>
          <Text color="white">Under Construction</Text>
        </Stack>
      </Box>
    </>
  );
};

export default Blog;
