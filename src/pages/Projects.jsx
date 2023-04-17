import React from "react";
import { Box, Text, Stack, Heading, Container } from "@chakra-ui/react";
import BoxField from "../components/BoxField";
import testImage from "../images/uzi.PNG";
import personalImage from "../images/personal.PNG";
import courseImage from "../images/coursework.PNG";
import socialImage from "../images/social.jpeg";

const testText =
  "this is testing text for a boxfield. ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const personalText =
  "These are personal projects I have created on my own time, generally to get a greater understanding of an area of Computer Science or build something interesting. Examples include this website, the data structures mini projects, and more.";
const courseText =
  "These are the various projects I have built during my time at UCI, many of which in dedicated project courses on specialized topics.";
const volunteerText =
  "These are projects I have contributed to as part of the organization Commit the Change for non profit organizations.";

const Projects = () => {
  return (
    <Box bg="#2C1B47" w="100%" h="100%">
      <Stack align="center" spacing={10}>
        <Heading sz="md" mt="2rem" mb="2rem">
          <Text color="white">Projects</Text>
        </Heading>
        <BoxField
          text={personalText}
          header={"Personal"}
          image={personalImage}
        ></BoxField>
        <BoxField
          text={courseText}
          header={"Coursework"}
          image={courseImage}
        ></BoxField>
        <BoxField
          text={volunteerText}
          header={"Social Good"}
          image={socialImage}
        ></BoxField>
        <Container></Container>
      </Stack>
    </Box>
  );
};

export default Projects;
