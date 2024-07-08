/*
Large box that has an image oriented to right, specialized for homefield
*/
// TODO - would make more sense for this to be the Home section, and move logic from Home.jsx onto here
import React from "react";
import { Box, Text, Stack, Heading } from "@chakra-ui/react";

const HomeField = () => {
  return (
    <>
      <Box
        bg="#DCCAE9"
        borderRadius="1rem"
        w="100%"
        h="100%"
        pb={3}
        pl={5}
        pr={5}
      >
        <Stack align="left" mt="1rem" spacing={5}>
          <Heading mb="2rem" align="left">
            <Text>Hello! My name is Rayan</Text>
          </Heading>
          <Text>
            I am currently an Associate Full Stack Developer at Codazen, on
            assignment at Meta.
          </Text>
          <Text>
            I am an alumni Computer Science student at the University of
            California, Irvine with a specialization in Algorithms
          </Text>
          <Text>I am passionate about Music, History, and Software.</Text>
          <Text>
            I like learning about Algorithms, Programming Languages, and more.
          </Text>
          {/* <Text>
            Currently I am studying Quantum Computing and Graph Algorithms.
          </Text> */}
          <Text>Currently I am working building a blog.</Text>
          <Text>
            Feel free to check out all the projects I've worked on in the
            Projects section. Projects include personal projects, school
            projects, and open source contributions.
          </Text>
          <Text>
            I'm also happy to connect on LinkedIn, with a link to mine on the
            top right of this page.
          </Text>
        </Stack>
      </Box>
    </>
  );
};

export default HomeField;
