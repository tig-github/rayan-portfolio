import React from "react";
import { Box, Text, Stack, Heading, Container } from "@chakra-ui/react";
import BoxField from "../components/BoxField";
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

const socialItems = {
  "Patriots and Paws": "This is for patriots and paws",
  "Abound Food Care": "This is for abound food care",
  "Women's Safety Website": "This is for women's safety website",
};
const socialLinks = {
  "Patriots and Paws": "https://github.com/ctc-uci/patriots-and-paws-frontend",
  "Abound Food Care": "https://github.com/ctc-uci/abound-food-care-frontend",
  "Women's Safety Website": "https://github.com/ctc-uci/bp-women-safety",
};

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
          listItems={socialItems}
          listLinks={socialLinks}
        ></BoxField>
        <Container></Container>
      </Stack>
    </Box>
  );
};

export default Projects;
