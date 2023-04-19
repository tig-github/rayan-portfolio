import React from "react";
import { Box, Flex, Button, ButtonGroup, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box bg="#2C1B47" w="100%" p={4}>
        <Flex align="left">
          <ButtonGroup gap="3">
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
          <Link as={RouterLink} to="/focus">
            <Button colorScheme="blackAlpha" size="lg">
              ⧖
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
