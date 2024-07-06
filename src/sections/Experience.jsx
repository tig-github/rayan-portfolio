import React from "react";
import { Box, Text, Heading, Stack } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
const Experience = () => {
  return (
    <>
      <Box bg="#2C1B47" w="100%" h="100%" id="experience">
        <Stack
          align="center"
          spacing={10}
          mt={{ base: "30%", sm: "20%", md: "10%" }}
          mb="5rem"
        >
          <Heading as="h1" mb="4rem">
            <Text color="white">Experience</Text>
          </Heading>
        </Stack>
      </Box>
    </>
  );
};

export default Experience;
