import React from "react";
import { 
    Box, 
    Text, 
    Heading, 
    Flex, 
    Stack, 
    useBreakpointValue 
} from "@chakra-ui/react";
import { FaPython, FaJava, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { TbLambda, TbBrandKotlin, TbBrandMongodb } from "react-icons/tb";
import { DiProlog, DiRuby, DiNodejs } from "react-icons/di";
import { 
    SiCsharp, 
    SiCplusplus, 
    SiC, 
    SiRiscv, 
    SiLua, 
    SiPostgresql, 
    SiMysql, 
    SiNeo4J, 
    SiApachecassandra, 
    SiCouchbase, 
    SiExpress, 
    SiFlask, 
    SiDotnet, 
    SiTensorflow 
} from "react-icons/si";

const Skills = () => {
    const flexAlignment = useBreakpointValue(
        {
          base: 'center',
          md: 'left',
        },
        {
          fallback: 'center',
        },
      )

    const flexMargin = useBreakpointValue(
        {
            base: 0,
            md: "25%"
        },
        {
            fallback: "25%"
        }
    )
    return (
        <Box bg="#2C1B47"w="100%" h="100%" id="skills">
            <Stack align="center" gap="3rem">
                <Heading sz="md" mt="8rem">
                    <Text color="white">Skills</Text>
                </Heading>
                <Flex gap={3} w="50%" wrap="wrap" align={flexAlignment}>
                    <Box width="15rem">
                        <Text fontSize="2xl" fontWeight="bold" color="white">Top Languages</Text>
                    </Box>
                    <Flex gap={3} ml={flexMargin} wrap="wrap">
                        <FaPython size={40} color="white" />
                        <SiCplusplus size={40} color="white" />
                        <SiC size={40} color="white"/>
                        <SiCsharp size={40} color="white"/>
                        <IoLogoJavascript size={40} color="white"/>
                    </Flex>
                </Flex>
                <Flex gap={3} w="50%" wrap="wrap" align={flexAlignment}>
                    <Box width="15rem">
                        <Text fontSize="2xl" fontWeight="bold" color="white">Databases</Text>
                    </Box>
                    <Flex gap={3} ml={flexMargin} wrap="wrap">
                        <SiPostgresql size={40} color="white"/>
                        <SiMysql size={40} color="white"/>
                        <TbBrandMongodb size={40} color="white"/>
                        <SiNeo4J size={40} color="white"/>
                        <SiApachecassandra size={40} color="white"/>
                        <SiCouchbase size={40} color="white"/>
                    </Flex>
                </Flex>
                <Flex gap={3} w="50%" wrap="wrap" align={flexAlignment}>
                    <Box width="15rem">
                        <Text fontSize="2xl" fontWeight="bold" color="white">Frameworks</Text>
                    </Box>
                    <Flex gap={3} ml={flexMargin} wrap="wrap">
                        <FaReact size={40} color="white"/>
                        <SiExpress size={40} color="white"/>
                        <DiNodejs size={40} color="white"/>
                        <SiFlask size={40} color="white"/>
                        <SiDotnet size={40} color="white"/>
                        <SiTensorflow size={40} color="white"/>
                    </Flex>
                </Flex>
                <Flex gap={3} w="50%" wrap="wrap" align={flexAlignment}>
                    <Box>
                        <Text fontSize="2xl" fontWeight="bold" color="white">Experience With</Text>
                    </Box>
                    <Flex gap={3} ml={flexMargin} wrap="wrap">
                        <FaJava size={40} color="white"/>
                        <TbBrandKotlin size={40} color="white"/>
                        <FaGolang size={40} color="white"/>
                        <DiRuby size={40} color="white"/>
                        <SiLua size={40} color="white"/>
                        <SiRiscv size={40} color="white"/>
                        <DiProlog size={40} color="white"/>
                        <TbLambda size={40} color="white"/>
                    </Flex>
                </Flex>
            </Stack>
        </Box>
    );
}

export default Skills;