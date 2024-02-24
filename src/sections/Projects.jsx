import React from "react";
import { useState } from "react";
import { 
  Box, 
  Text, 
  Stack, 
  Heading, 
  Flex, 
  Switch, 
  useBreakpointValue,
} from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import yazifyImage from "../images/personal.PNG";
import algoImage from "../images/coursework.PNG";
import personalImage from "../images/social.jpeg";
import ctcDefaultImage from "../images/CTC.png"
import icsscDefaultImage from "../images/icssc.svg";
import { FaPython, FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { TbBrandMongodb } from "react-icons/tb";
import { 
  SiNumpy, 
  SiPandas, 
  SiFlask, 
  SiPostgresql,
  SiExpress, 
  SiTrpc,
  SiRiscv, 
} from "react-icons/si";


const personalItems = {
  Yazify:
    "This is a web app that allows users to input a spotify song, and get 5 recommendations based on a large index. Currently I am planning to tune the recommendation algorithm and introduce a significantly larger index, and then plan to add more features such as recommendations based on playlists/user profiles, saving recommendations, etc. The algorithm currently is cosine similarity, I plan to introduce more sophisticated algorithms once the index size grows. ",
  "DSA Mini Projects":
    "This is a series of small projects that I work on whenever I want to do something interesting with a particular data structure or algorithm. Currently I implemented a Turing Machine in Python with a self implemented Linked List, and am working on a Persistent RedBlack Tree in C++ for point location, along with a small Computational Geometry library.",
  GreedyAnts:
    "For HackUCI 2022, built when my team and I had no web development experience.",
  Algos:
    "Notebook where I implement algorithms I learn in a series of courses, with the goal of building a graph algorithm/computational geometry visualzier.",
};

const OSSItems = {
  "Patriots and Paws":
    "Fullstack web furniture management system built for the nonprofit Patriots and Paws. Contributed significantly on the frontend and backend with features including pagination, navigation, routing, styling, and more.",
  trash:
    "Fullstack volunteer management system that I am currently contributing to for the nonprofit Stand Up To Trash. Contributed significantly on the frontend and backend with features including the CheckIn page, the Volunteer Events page, ",
  antalmanac:
    "Contributed to AntAlmanac, a course scheduler for UC Irvine students maintained by the ICS Student Council. Currently working on implementing push notifications.",
  "Abound Food Care":
    "I worked on this website as part of a small team during the summer, and helped implement pagination and several frontend features.",
  "Women's Safety Website":
    "This was the first website I worked on as part of a small team of five to help provide resources for women on campus. Ultimately the team dissolved before the project could be finished, but I gained valuable experience.",
};

const courseItems = {
  teapot:
  "Developed 3D model for teapot based on scans, through process of reconstruction, mesh generation, mesh imporvements, and mesh combination through poisson reconstruction.",
  "CS 121 Search Engine":
    "This was a fully functioning search engine for CS 121 - Information Retrieval",
  "ICS 51 Wordle in Assembly":
    "A fully functioning game of Wordle built entirely in MIPS assembly",
};

const yazifyIcons = [
  <FaPython size={40} color="white"/>, 
  <FaReact size={40} color="white"/>, 
  <SiNumpy size={40} color="white"/>,
  <SiPandas size={40} color="white"/>,
  <SiFlask size={40} color="white"/>
];
const greedyAntsIcons = [
  <FaPython size={40} color="white"/>, 
  <FaReact size={40} color="white"/>, 
  <SiFlask size={40} color="white"/>
];
const ctcIcons = [
  <FaReact size={40} color="white"/>, 
  <SiExpress size={40} color="white"/>, 
  <SiPostgresql size={40} color="white"/>, 
  <DiNodejs size={40} color="white"/>, 
]
const icsscIcons = [
  <FaReact size={40} color="white"/>, 
  <SiTrpc size={40} color="white"/>, 
  <TbBrandMongodb size={40} color="white"/>, 
  <DiNodejs size={40} color="white"/>, 
]
const cs121Icons = [
  <FaPython size={40} color="white"/>, 
  <SiNumpy size={40} color="white"/>,
  <SiPandas size={40} color="white"/>,
  <SiFlask size={40} color="white"/>
]
const cs117Icons = [
  <FaPython size={40} color="white"/>, 
  <SiNumpy size={40} color="white"/>,
  <SiPandas size={40} color="white"/>,
]
const ics51Icons = [
  <SiRiscv size={40} color="white"/>, 
]

const Projects = () => {
  const [personal, setPersonal] = useState(true);
  const [contributed, setContributed] = useState(true);
  const [school, setSchool] = useState(true);
  const flexDirection = useBreakpointValue(
    {
      base: 'column',
      md: 'row',
    },
    {
      fallback: 'column',
    },
  )
  const flexAlignment = useBreakpointValue(
    {
      base: 'center',
      md: 'left',
    },
    {
      fallback: 'center',
    },
  )

  return (
    <Box bg="#2C1B47" w="100%" h="100%" id="projects">
      <Stack align="center" spacing={10} mt={{base: "30%", md: "10%"}} >
        <Heading sz="md" mb="4rem">
          <Text color="white">Projects</Text>
        </Heading>
        <Flex gap={20} mb={3} direction={flexDirection}>
            <Flex gap="2%" direction={flexDirection} align={flexAlignment}>
              <Text fontSize="2xl" fontWeight="600" color="white" align="center"> Personal Projects</Text>
              <Switch onChange={() => {setPersonal(!personal)}} colorScheme="purple" mt={3} defaultChecked/>
            </Flex>
            <Flex gap="2%" direction={flexDirection} align={flexAlignment}>
              <Text fontSize="2xl" fontWeight="600" color="white" align="center"> OSS Contributions</Text>
              <Switch onChange={() => {setContributed(!contributed)}} colorScheme="purple" mt={3} defaultChecked/>
            </Flex>
            <Flex gap="5%" direction={flexDirection} align={flexAlignment}>
              <Text fontSize="2xl" fontWeight="600" color="white" align="center"> School Projects</Text>
              <Switch onChange={() => {setSchool(!school)}} colorScheme="purple" mt={3} defaultChecked/>
          </Flex>
        </Flex>
        <Box />
        <Flex gap={20} wrap="wrap" justify="center" w="80%">
          {
            personal && 
            <>
              <ProjectCard 
                title={"Yazify"} 
                img={yazifyImage} 
                tag={"Personal"} 
                link={"https://github.com/tig-github/yazify"} 
                description={personalItems.Yazify}
                icons={yazifyIcons}
              />
              <ProjectCard title={"Algorithms Notebook"} img={algoImage} tag={"Personal"} link={"https://github.com/tig-github/cs16x-algorithms-notebook"} description={personalItems.Algos} icons={[<FaPython size={40} color="white"/>]}/>
              <ProjectCard title={"GreedyAnts"} img={personalImage} tag={"Hackathon"} link={"https://github.com/tig-github/GreedyAnts"} description={personalItems.GreedyAnts} icons={greedyAntsIcons}/>
            </>
          }
          {
            contributed &&
            <>
              <ProjectCard title={"Patriots and Paws"} img={ctcDefaultImage} tag={"CTC"} link={"https://github.com/ctc-uci/patriots-and-paws-frontend"} description={OSSItems["Patriots and Paws"]} icons={ctcIcons}/>
              <ProjectCard title={"Stand Up To Trash"} img={ctcDefaultImage} tag={"CTC"} link={"https://github.com/ctc-uci/stand-up-to-trash-frontend"} description={OSSItems.trash} icons={ctcIcons}/>
              <ProjectCard title={"AntAlmanac"} img={icsscDefaultImage} tag={"ICSSC"} link={"https://github.com/icssc/AntAlmanac"} description={OSSItems.antalmanac} icons={icsscIcons}/>
              <ProjectCard title={"Abound Food Care"} img={ctcDefaultImage} tag={"CTC"} link={"https://github.com/ctc-uci/abound-food-care-frontend"} description={OSSItems["Abound Food Care"]} icons={ctcIcons}/>
              <ProjectCard title={"Women's Safety Website"} img={ctcDefaultImage}  tag={"CTC"} link={"https://github.com/ctc-uci/bp-women-safety"} description={OSSItems["Women's Safety Website"]} icons={[<FaReact size={40} color="white"/>]}/>
            </>

          }
          {
            school &&
            <>
              <ProjectCard title={"CS 117 Teapot Model"} img={personalImage} tag={"School"} description={courseItems.teapot} icons={cs117Icons} isSchool/>
              <ProjectCard title={"CS 121 Search Engine"} img={personalImage} tag={"School"} description={courseItems["CS 121 Search Engine"]} icons={cs121Icons} isSchool/>
              <ProjectCard title={"ICS 51 Assembly Wordle"} img={personalImage} tag={"School"} description={courseItems["ICS 51 Wordle in Assembly"]} icons={ics51Icons} isSchool/>
            </>
          }
        </Flex>
        <Box mb={2}></Box>
      </Stack>
    </Box>
  );
};

export default Projects;
