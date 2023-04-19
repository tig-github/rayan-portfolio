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
  "These are the various projects I have built during my time at UCI, many of which in dedicated project courses on specialized topics. Unfortunately most of the repositories must be kept private so the code itself does not spread, but the following are projects I have worked on.";
const volunteerText =
  "These are projects I have contributed to as part of the organization Commit the Change for non profit organizations.";

const personalItems = {
  Yazify:
    "This is a web app that allows users to input a spotify song, and get 5 recommendations based on a large index. Currently I am planning to tune the recommendation algorithm and introduce a significantly larger index, and then plan to add more features such as recommendations based on playlists/user profiles, saving recommendations, etc. The algorithm currently is cosine similarity, I plan to introduce more sophisticated algorithms once the index size grows. ",
  "DSA Mini Projects":
    "This is a series of small projects that I work on whenever I want to do something interesting with a particular data structure or algorithm. Currently I implemented a Turing Machine in Python with a self implemented Linked List, and am working on a Persistent RedBlack Tree in C++ for point location, along with a small Computational Geometry library.",
  GreedyAnts:
    "For HackUCI 2022, built when my team and I had no web development experience.",
};
const personalLinks = {
  Yazify: "https://github.com/tig-github/yazify",
  "DSA Mini Projects": "https://github.com/tig-github/DSA_miniprojects",
  GreedyAnts: "https://github.com/tig-github/GreedyAnts",
};

const courseItems = {
  "CS 121 Search Engine":
    "This was a fully functioning search engine for CS 121 - Information Retrieval",
  "ICS 51 Wordle in Assembly":
    "A fully functioning game of Wordle built entirely in MIPS assembly",
};

const socialItems = {
  "Patriots and Paws":
    "This is a website I am currently working on as part of the club CTC for the PNP nonprofit in Orange County. I have helped implement several frontend and backend features such as the navbar, SQL DDLs and routes, and pagination. Currently the project is in end stages.",
  "Abound Food Care":
    "I worked on this website as part of a small team during the summer, and helped implement pagination and several frontend features.",
  "Women's Safety Website":
    "This was the first website I worked on as part of a small team of five to help provide resources for women on campus. Ultimately the team dissolved before the project could be finished, but I gained valuable experience.",
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
        <Heading sz="md" mt="2rem" mb="4rem">
          <Text color="white">Projects</Text>
        </Heading>
        <BoxField
          text={personalText}
          header={"Personal"}
          image={personalImage}
          listItems={personalItems}
          listLinks={personalLinks}
        ></BoxField>
        <BoxField
          text={courseText}
          header={"Coursework"}
          image={courseImage}
          listItems={courseItems}
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
