import React from "react";
import { Box, Container, Text, Stack, Heading } from "@chakra-ui/react";
import BlogField from "../components/BlogField";
import blog0Image from "../images/blog.jpeg";

const blog0Text =
  "Hello, welcome to this blog. Here I'll post about various tech or music related things on my mind. In the future if I post here a lot I'll add some more features to make it a more fleshed out section of the site. For now I'll just be displaying posts here.";

const Blog = () => {
  return (
    <>
      <Box bg="#2C1B47" w="100%" h="100%">
        <Stack align="center" spacing={10}>
          <Heading as="h1" mt="2rem" mb="4rem">
            <Text color="white">Blog</Text>
          </Heading>
          <BlogField
            text={blog0Text}
            header={"Hello there 👋"}
            image={blog0Image}
          />
          <Container></Container>
        </Stack>
      </Box>
    </>
  );
};

export default Blog;
