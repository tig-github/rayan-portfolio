import React from "react";
import {
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Stack,
} from "@chakra-ui/react";
import ListField from "../components/ListField";

const Courses = () => {
  const cs12x = {
    //placeholder descriptions
    "121 Information Retrieval": "This class was great",
    "122A Intro to Data Management": "This class was pretty good",
    "122D Beyond SQL Data Management": "About to take this class",
  };
  const cs14x = {
    "141 Programming Languages": "This class was not bad",
  };
  const cs16x = {
    "161 Design and Analysis of Algorithms": "This class was very important",
    "162 Formal Languages and Automata": "About to take this class",
    "164 Computational Geometry and Geometric Modeling":
      "This class is very interesting",
  };
  const cs17x = {
    "178 Machine Learning and Data Mining": "This class was super cool",
    "190 Deep Learning for Medical Imaging": "This class was very insightful",
  };
  const csPlannedCourses = {
    "CS 112 Computer Graphics":
      "Taking computational geometry made me interested in this class",
    "CS 142A Compilers": "This class is also very important",
    "CS 142B Language Process Construction":
      "Project is to build a java bytecode compiler which sounds super cool",
    "CS 143A Operating Systems": "This class should be very useful",
    "CS 146 Programming in Multitasking Operating Systems":
      "Good way to learn more about UNIX and bash",
    "CS 152 Computer Systems Architecture":
      "I am interested in gaining more knowledge of low level system design",
    "CS 163 Graph Algorithms":
      "Graphs are some of the most important data structures with huge applications",
    "CS 166 Quantum Computing":
      "Sounds fun and could maybe even be a bit of future proofing",
    "CS 177 Applications of Probability in Computer Science":
      "Probability frequently appears in algorithmic analysis and in many cutting edge techniques",
  };
  const inf10x = {
    "INF 101 Programming Languages": "Overlaps with CS141",
    "INF 102 Concepts of Programming Languages II":
      "Will take this next quarter",
  };
  const infPlannedCourses = {
    "INF 113 Requirements Analysis and Engineering":
      "Might take this course at some point",
    "INF 115 Software Testing, Analysis, and Quality Insurance": "Seems useful",
    "INF 122 Software Design II": "Design patterns seem important to learn",
    "INF 131 Human Computer Interaction":
      "Might take this course at some point",
  };
  return (
    <Box bg="#2C1B47" w="100%" h="100%">
      <Stack align="center" spacing={8}>
        <Heading sz="md" mt="2rem">
          <Text color="white">Courses</Text>
        </Heading>
        <Text color="white">
          Courses at UCI are generally oragnized by their assigned numbers. The
          following are the upper division courses I have taken, and the ones I
          plan to take.
        </Text>
        <Tabs w="100%">
          <TabList mt="4rem" align="center">
            <Tab>
              <Text color="white">12X Information</Text>
            </Tab>
            <Tab>
              <Text color="white">14X Systems and Software</Text>
            </Tab>
            <Tab>
              <Text color="white">16X Algorithms</Text>
            </Tab>
            <Tab>
              <Text color="white"> 17X Artificial Intelligence </Text>
            </Tab>
            <Tab>
              <Text color="white"> Planned Courses </Text>
            </Tab>
          </TabList>
          <TabPanels w="100%">
            <TabPanel>
              <ListField items={cs12x} mh="16rem" />
            </TabPanel>
            <TabPanel>
              <ListField items={cs14x} mh="16rem" />
            </TabPanel>
            <TabPanel>
              <ListField items={cs16x} mh="16rem" />
            </TabPanel>
            <TabPanel>
              <ListField items={cs17x} mh="16rem" />
            </TabPanel>
            <TabPanel>
              <ListField items={csPlannedCourses} mh="16rem" />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Tabs w="100%">
          <TabList>
            <Tab>
              <Text color="white">10X Programming Languages</Text>
            </Tab>
            <Tab>
              <Text color="white">Planned Courses</Text>
            </Tab>
          </TabList>
          <TabPanels w="100%">
            <TabPanel>
              <ListField items={inf10x} mh="16rem" />
            </TabPanel>
            <TabPanel>
              <ListField items={infPlannedCourses} mh="16rem" />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box bg="#2C1B47" w="10rem" h="10rem"></Box>
      </Stack>
    </Box>
  );
};

export default Courses;
