import React from "react";
import { 
  Box, 
  Container, 
  Text, 
  Center,
  Heading, 
  Stack, 
  Flex,
  Spacer, 
  Image 
} from "@chakra-ui/react";
import HomeField from "../components/HomeField";
import yaz from "../images/yaz.svg";
import me from "../images/rayan.jpg";

const Home = () => {
  return (
    <Box bg="#2C1B47" maxH="100%" minH="calc(100vh)" w="100%">
      <Stack spacing={10}>
        <Center>
          <Heading as="h1" mt="2rem" mb="2rem"> 
            <Text color="white">Welcome</Text>
          </Heading>
        </Center>
        <Flex justify="center">
          <Image src={me} boxSize="30%" borderRadius="full" mr={10} />
          <HomeField />
        </Flex>
        <Container></Container>
      </Stack>
    </Box>
  );
};

export default Home;
