import React from "react";
import { 
  Box, 
  Text,
  Flex,
} from "@chakra-ui/react";

const Footer = () => {
return (
    <Box bg="#281b3d" minH="5rem">
        <Flex justify="space-evenly" mt="1.5rem">
            <Text color="white"> Built by Rayan Tighiouart</Text>
            <Text color="white"> Built with React.js, Chakra UI</Text>
            <Text color="white"> Hosted on Github Pages</Text>
        </Flex>
    </Box>
);
}

export default Footer;