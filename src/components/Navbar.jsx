import React from "react";
import { Box, Flex, Button, ButtonGroup, Link, Spacer } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Box bg="#281b3d" w="100%" p={4} position="fixed" zIndex="sticky">
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
            <HashLink smooth to="/#">
              <Button colorScheme="blackAlpha" size="lg">
                Home
              </Button>
            </HashLink>
            <HashLink smooth to="/#skills">
              <Button colorScheme="blackAlpha" size="lg">
                Skills
              </Button>
            </HashLink>
            <HashLink smooth to="/#projects">
              <Button colorScheme="blackAlpha" size="lg">
                Projects
              </Button>
            </HashLink>
            <HashLink smooth to="/#courses">
              <Button colorScheme="blackAlpha" size="lg">
                Courses
              </Button>
            </HashLink>
            <HashLink smooth to="/#blog">
              <Button colorScheme="blackAlpha" size="lg">
                Blog
              </Button>
            </HashLink>
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
