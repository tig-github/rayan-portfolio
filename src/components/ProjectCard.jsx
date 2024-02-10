/*
    Card that gives information on a given project
*/
import React from "react";
import {
  Box,
  Text,
  Center,
  Stack,
  Flex,
  Spacer,
  Heading,
  Image,
  Card,
  CardHeader, 
  CardBody, 
  CardFooter,
  Icon,
  Button
  
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({title, img, tag, description}) => {
    return (
        <Card w="18rem" h="100%" bg="#7f59bb">
            <CardHeader>
                <Center>
                    <Text>{title}</Text>
                </Center>
                <Center>
                    <Text>{tag} Project</Text>
                </Center>
            </CardHeader>
            <CardBody>
                <Image src={img}></Image>
                <Flex justify="center">
                    <Button onClick={() => {alert("lol")}} variant="unstyled">
                        <AiFillGithub size={40} />
                    </Button>
                </Flex>
                <Text>{description}</Text>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard;