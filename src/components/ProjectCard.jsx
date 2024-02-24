/*
    Card that gives information on a given project
*/
import React from "react";
import {
  Text,
  Button,
  Center,
  Flex,
  Stack,
  Image,
  Card,
  CardHeader, 
  CardBody, 
  Link,
  Fade,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import ProjectCardModal from "./ProjectCardModal";

const ProjectCard = ({title, img, tag, date, link, description, icons, isSchool, fadeOpen}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Fade in={fadeOpen} transition={{enter: {duration: 0.2}}} unmountOnExit>
        <Card 
            w="20rem" 
            bg="rgba(212, 90, 253, .2)"
            color="white"
            borderRadius="7%"
            _hover={
                {
                    transform: "perspective(1200px) rotateX(10deg) rotateY(-10deg) rotateZ(2deg)",
                    "transitionDuration": "1s",
                
                }}
        >
            <CardHeader maxH="6rem" opacity="100%">
                <Center>
                    <Text fontSize="2xl" fontWeight="bold" align="center">{title}</Text>
                </Center>
            </CardHeader>
            <CardBody>
                <Stack gap={4}>
                <Center>
                    <Image src={img} boxSize={250} borderRadius="10%"></Image>
                </Center>
                <Flex justify="center" mt={2}>
                    {
                    !isSchool &&
                            <Link href={link} isExternal mr={3}>
                                <AiFillGithub size={40} color="white"/>
                            </Link>
                    }
                    <Center>
                        <Text >{tag} Project - {date}</Text>
                    </Center>
                </Flex>
                <Flex justify="center" gap={2}>
                    {icons && icons.map((i) => i)}
                </Flex>
                <Center>
                    <Button onClick={onOpen} colorScheme="blackAlpha" color="white">Learn More</Button>
                    <ProjectCardModal isOpen={isOpen} onClose={onClose} title={title} description={description}/>
                </Center>
                </Stack>
            </CardBody>
        </Card>
        </Fade>
    )
}

export default ProjectCard;