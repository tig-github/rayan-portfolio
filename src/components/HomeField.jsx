/*
Large box that has an image oriented to right, specialized for homefield
*/
import React from "react";
import {
  Box,
  Text,
  Stack,
  Flex,
  Spacer,
  Heading,
  Image,
} from "@chakra-ui/react";
import me from "../images/rayan.png";

const HomeField = () => {
  return (
    <>
      <Box bg="#DCCAE9" borderRadius="1rem" w="100%" h="100%" pb={5} pl={5} pr={5}>
        <Stack align="left" mt="1rem" spacing={5}>
          <Heading mb="2rem" align="left">
            <Text>Hello! My name is Rayan</Text>
          </Heading>
              <Text>
                I am currently a Computer Science student at the University of
                California, Irvine
              </Text>
              <Text>I am passionate about Music, History, and Software.</Text>
              <Text>
                I like learning about Algorithms, Programming Languages, and more.
              </Text>
              <Text>
                Currently I am studying Quantum Computing and Graph Algorithms.
              </Text>
              <Text>
                Currently I am working on several personal projects, 
                AntAlmanac, a project for a local nonprofit, and an AI chatbot to
                query a startup's database using natural language.
              </Text>
              <Text>
                Feel free to check out all the projects I've worked on in the Projects section,
                and the coursework I have taken in the Coursework section. Projects include personal projects,
                school projects, and open source contributions.
              </Text>
              <Text>
                I'm also happy to connect on LinkedIn, with a link to mine on the top right of this page.
              </Text>
        </Stack>
      </Box>
    </>
  );
};

export default HomeField;
