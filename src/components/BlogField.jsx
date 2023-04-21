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

const BlogField = ({ text, header, image }) => {
  return (
    <Box bg="#DCCAE9" px="1rem" ml=".5rem" mb="2rem" mt="2rem" w="82%">
      <Stack align="center" my="2rem" spacing={10}>
        <Heading>
          <Text>{header}</Text>
        </Heading>
        <Image src={image} boxSize="30rem"></Image>
        <Text align="center">{text}</Text>
      </Stack>
    </Box>
  );
};

export default BlogField;
