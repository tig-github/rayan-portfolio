import React from "react";
import { Box, Flex, Button, ButtonGroup, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Box bg="#2C1B47" w="100%" p={4}>
        <Flex 
          align="left" 
          overflowX="scroll" 
          overflowY="hidden" 
          sx={
              { 
              '::-webkit-scrollbar':{display:'none'}
              }
          }
        >
          <ButtonGroup gap={3}>
            <Link as={RouterLink} to="/">
              <Button colorScheme="blackAlpha" size="lg">
                Home
              </Button>
            </Link>
            <Link as={RouterLink} to="/projects">
              <Button colorScheme="blackAlpha" size="lg">
                Projects
              </Button>
            </Link>
            <Link as={RouterLink} to="/courses">
              <Button colorScheme="blackAlpha" size="lg">
                Courses
              </Button>
            </Link>
            <Link as={RouterLink} to="/blog">
              <Button colorScheme="blackAlpha" size="lg">
                Blog
              </Button>
            </Link>
          </ButtonGroup>
          <Spacer />
          <Link href="https://www.linkedin.com/in/rayantig/" isExternal mr={3} ml={6}>
              <FaLinkedin size={40} color="#0072b1"/>
          </Link>
          <Link href="https://github.com/tig-github" isExternal>
            <Box bg="white" borderRadius="full">
              <AiFillGithub size={40}/>
            </Box>
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
