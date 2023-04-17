/*
Large box that has an image oriented to right
*/
import React from "react";
import {
  Stack,
  HStack,
  Box,
  Container,
  Text,
  Image,
  Flex,
  Spacer,
  Heading,
} from "@chakra-ui/react";

const BoxField = ({ text, header, image }) => {
  return (
    <Box bg="#DCCAE9" ml=".5rem" mb="1rem" mt="1rem" w="100%">
      <Flex w="100%">
        <Stack w="50%" ml="5.5rem" mt="2rem">
          <Heading>{header}</Heading>
          <Text mt="1rem">{text}</Text>
        </Stack>
        <Container>
          {image && (
            <Image ml="15rem" boxSize="20rem" fit="cover" src={image}></Image>
          )}
        </Container>
      </Flex>
    </Box>
  );
};

export default BoxField;
