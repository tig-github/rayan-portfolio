import React from "react";
import { Box, Text, Heading, Stack, Image } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import ctcIcon from "../images/CTC.svg";
//import CtcIcon from "../components/Icons/ctcIcon";

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
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#780be6" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="Oct 2021 - June 2024"
              icon={<Image src={ctcIcon} borderRadius="full" />}
            >
              <h3 className="vertical-timeline-element-title">
                Student Volunteer Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Commit the Change
              </h4>
              <Text>
                Developer in student organization creating open source software
                for local nonprofits utilizing common industry standards, with
                contributions to several projects.
              </Text>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Stack>
      </Box>
    </>
  );
};

export default Experience;
