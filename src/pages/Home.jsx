import React from "react";
import { 
  Box, 
  Container, 
  Text, 
  Center,
  Heading, 
  Stack, 
  Flex,
  Image,
  useBreakpointValue
} from "@chakra-ui/react";
import HomeField from "../components/HomeField";
import me from "../images/rayan.jpg";

const Home = () => {
  const imageSize = {
    base: 0,
    md: 10
  }

  return (
    <Box bg="#2C1B47" maxH="100%" minH="calc(100vh)" w="100%">
      <Stack spacing={10}>
        <Center>
          <Heading as="h1" mt="2rem" mb="4rem"> 
            <Text color="white">Welcome</Text>
          </Heading>
        </Center>
        <Flex justify="center" flexWrap="wrap">
          <Image src={me} boxSize="30%" minW="20rem" borderRadius="full" mr={imageSize} mb={3}/>
          <Flex justify="center" direction="column" width="55%">
            <HomeField />
          </Flex>
        </Flex>
        <Container></Container>
      </Stack>
    </Box>
  );
};

export default Home;
