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
  Link 
  
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({title, img, tag, link, description, isSchool}) => {
    return (
        <Card w="20rem" maxH="40rem" bg="#7f59bb">
            <CardHeader maxH="6rem">
                <Center>
                    <Text fontSize="2xl" fontWeight="bold" align="center">{title}</Text>
                </Center>

            </CardHeader>
            <CardBody>
                <Center>
                    <Image src={img} boxSize={250}></Image>
                </Center>
                <Flex justify="center" mt={2}>
                {
                !isSchool &&
                        <Link href={link} isExternal mr={3}>
                            <AiFillGithub size={40} />
                        </Link>
                }
                <Center>
                    <Text >{tag} Project</Text>
                </Center>
                </Flex>

                <Text mt={4}>{description}</Text>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard;