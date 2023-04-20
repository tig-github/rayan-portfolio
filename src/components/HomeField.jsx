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
import commit from "../images/commit.PNG";

const HomeField = () => {
  return (
    <>
      <Box bg="#DCCAE9" ml=".5rem" mb="2rem" pb="2rem" mt="2rem" w="100%">
        <Flex>
          <Stack mt="1rem" ml="5.5rem" spacing={5}>
            <Heading>Hello! My name is Rayan</Heading>
            <Text>
              I am currently a Computer Science student at the University of
              California, Irvine
            </Text>
            <Text>I am passionate about Music, History, and Software.</Text>
            <Text>
              I like learning about Algorithms, Programming Languages, and more.
            </Text>
            <Text>
              Portfolio Todo: 3d Yaz with Threejs, display github commit history
              right here.
            </Text>
            <Text>Right now I'll cheat and use a screenshot ;)</Text>
          </Stack>
          <Spacer />
          <Image src={commit} w="45rem" h="9rem" mt="3rem" mr="3rem" />
        </Flex>
      </Box>
    </>
  );
};

export default HomeField;
