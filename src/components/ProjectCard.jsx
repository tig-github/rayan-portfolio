/*
    Card that gives information on a given project
*/
import React from "react";
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Card,
  CardHeader, 
  CardBody, 
  CardFooter,
  Link,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({title, img, tag, link, description, isSchool}) => {
    return (
        <Card 
            w="20rem" 
            maxH="37rem" 
            bg="rgba(212, 90, 253, .2)"
            color="white"
            borderRadius="7%"
        >
            <CardHeader maxH="6rem" opacity="100%">
                <Center>
                    <Text fontSize="2xl" fontWeight="bold" align="center">{title}</Text>
                </Center>
            </CardHeader>
            <CardBody>
                <Center>
                    <Image src={img} boxSize={250} borderRadius="10%"></Image>
                </Center>
                <Flex justify="center" mt={2}>
                    {
                    !isSchool &&
                            <Link href={link} isExternal mr={3}>
                                <AiFillGithub size={40} color="black"/>
                            </Link>
                    }
                    <Center>
                        <Text >{tag} Project</Text>
                    </Center>
                </Flex>
                <Box 
                overflowY="scroll" 
                overflowX="hidden" 
                style = {{scrollbarWidth: "none"}}
                sx={
                    { 
                    '::-webkit-scrollbar':{display:'none'}
                    }
                } 
                maxH="30%">
                    <Text mt={4}>{description}</Text>
                </Box>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard;