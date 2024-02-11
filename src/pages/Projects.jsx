import React from "react";
import { useState } from "react";
import { Box, Text, Stack, Heading, Container, Flex, Switch } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import yazifyImage from "../images/personal.PNG";
import algoImage from "../images/coursework.PNG";
import personalImage from "../images/social.jpeg";
import ctcDefaultImage from "../images/CTC.png"
import icsscDefaultImage from "../images/icssc.svg";

const personalItems = {
  Yazify:
    "This is a web app that allows users to input a spotify song, and get 5 recommendations based on a large index. Currently I am planning to tune the recommendation algorithm and introduce a significantly larger index, and then plan to add more features such as recommendations based on playlists/user profiles, saving recommendations, etc. The algorithm currently is cosine similarity, I plan to introduce more sophisticated algorithms once the index size grows. ",
  "DSA Mini Projects":
    "This is a series of small projects that I work on whenever I want to do something interesting with a particular data structure or algorithm. Currently I implemented a Turing Machine in Python with a self implemented Linked List, and am working on a Persistent RedBlack Tree in C++ for point location, along with a small Computational Geometry library.",
  GreedyAnts:
    "For HackUCI 2022, built when my team and I had no web development experience.",
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
  const [personal, setPersonal] = useState(true);
  const [contributed, setContributed] = useState(true);
  const [school, setSchool] = useState(true);
  return (
    <Box bg="#2C1B47" w="100%" minH="100vh" h="100%">
      <Stack align="center" spacing={10}>
        <Heading sz="md" mt="2rem" mb="4rem">
          <Text color="white">Projects</Text>
        </Heading>
        <Flex gap={20} mb={3}>
            <Flex gap={3}>
              <Text fontSize="2xl" fontWeight="600" color="white"> Show Personal Projects</Text>
              <Switch onChange={() => {setPersonal(!personal)}} colorScheme="purple" mt={3} defaultChecked/>
            </Flex>
            <Flex gap={3}>
              <Text fontSize="2xl" fontWeight="600" color="white"> Show Open Source Contributions</Text>
              <Switch onChange={() => {setContributed(!contributed)}} colorScheme="purple" mt={3} defaultChecked/>
            </Flex>
        </Flex>
        <Flex gap={3}>
              <Text fontSize="2xl" fontWeight="600" color="white"> Show School Projects</Text>
              <Switch onChange={() => {setSchool(!school)}} colorScheme="purple" mt={3} defaultChecked/>
        </Flex>
        <Box />
        <Flex gap={20} wrap="wrap" justify="center" w="80%">
          {
            personal && 
            <>
              <ProjectCard title={"Yazify"} img={yazifyImage} tag={"Personal"} link={"https://github.com/tig-github/yazify"} description={"Test"}/>
              <ProjectCard title={"Algorithms Notebook"} img={algoImage} tag={"Personal"} link={"https://github.com/tig-github/cs16x-algorithms-notebook"} description={"Test"}/>
              <ProjectCard title={"GreedyAnts"} img={personalImage} tag={"Hackathon"} link={"https://github.com/tig-github/GreedyAnts"} description={"Test"}/>
            </>
          }
          {
            contributed &&
            <>
              <ProjectCard title={"Patriots and Paws"} img={ctcDefaultImage} tag={"CTC"} link={"https://github.com/ctc-uci/patriots-and-paws-frontend"} description={"Test"}/>
              <ProjectCard title={"Stand Up To Trash"} img={ctcDefaultImage} tag={"CTC"} link={"https://github.com/ctc-uci/stand-up-to-trash-frontend"} description={"Test"}/>
              <ProjectCard title={"AntAlmanac"} img={icsscDefaultImage} tag={"ICSSC"} link={"https://github.com/ctc-uci/patriots-and-paws-frontend"} description={"Test"}/>
              <ProjectCard title={"Women's Safety Website"} img={ctcDefaultImage}  tag={"CTC"} link={"https://github.com/ctc-uci/bp-women-safety"} description={"Test"}/>
            </>

          }
          {
            school &&
            <>
              <ProjectCard title={"CS 117 Teapot Model"} img={personalImage} tag={"School"} description={"Test"} isSchool/>
              <ProjectCard title={"CS 121 Search Engine"} img={personalImage} tag={"School"} description={"Test"} isSchool/>
            </>
          }
        </Flex>
        <Box mb={2}></Box>
      </Stack>
    </Box>
  );
};

export default Projects;
