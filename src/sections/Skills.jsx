import React from "react";
import { 
    Box, 
    Center,
    Text, 
    Heading, 
    Flex, 
    Stack,
    SimpleGrid ,
    GridItem,
    useBreakpointValue,
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
    const gridTemplate = useBreakpointValue(
        {
          base: `
          "cat1"
          "icon1"
          "cat2"
          "icon2"
          "cat3"
          "icon3"
          "cat4"
          "icon4"
          `,
          md: `
          "cat1 icon1"
          "cat2 icon2"
          "cat3 icon3"
          "cat4 icon4"
          `,
        },
        {
          fallback: `
          "cat1 icon1"
          "cat2 icon2"
          "cat3 icon3"
          "cat4 icon4"
          `,
        },
      );
    const flexAlignment = useBreakpointValue(
    {
        base: 'center',
        md: 'center',
    },
    {
        fallback: 'center',
    },
    );
    const flexMargin = useBreakpointValue(
        {
            base: 0,
            md: "25%"
        },
        {
            fallback: "25%"
        }
    );
    return (
        <Box bg="#2C1B47" w="100%" h="100%" id="skills">
            <Stack align="center" gap="3rem" mb="5%" mt={{base: "1%", md: "3%"}}>
                <Heading sz="md" mt="8rem">
                    <Text color="white">Skills</Text>
                </Heading>
                <SimpleGrid 
                    width="70%"
                    templateRows='4'
                    templateColumns='2'
                    templateAreas={gridTemplate}
                    gap={{base: 7, md: 14}}
                >
                    <GridItem rowSpan={1} colSpan={1} area={'cat1'}>
                        <Center>
                            <Text fontSize="2xl" fontWeight="bold" color="white">Top Languages</Text>
                        </Center>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} area={'icon1'}>
                        <Flex gap={3} ml={flexMargin} wrap="wrap" justify={flexAlignment}>
                            <FaPython size={40} color="white" />
                            <SiCplusplus size={40} color="white" />
                            <SiC size={40} color="white"/>
                            <SiCsharp size={40} color="white"/>
                            <IoLogoJavascript size={40} color="white"/>
                        </Flex>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} area={'cat2'}>
                        <Center>
                            <Text fontSize="2xl" fontWeight="bold" color="white">Databases</Text>
                        </Center>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} area={'icon2'}>
                        <Flex gap={3} ml={flexMargin} wrap="wrap" justify={flexAlignment}>
                            <SiPostgresql size={40} color="white"/>
                            <SiMysql size={40} color="white"/>
                            <TbBrandMongodb size={40} color="white"/>
                            <SiNeo4J size={40} color="white"/>
                            <SiApachecassandra size={40} color="white"/>
                            <SiCouchbase size={40} color="white"/>
                        </Flex>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} area={'cat3'}>
                        <Center>
                            <Text fontSize="2xl" fontWeight="bold" color="white">Frameworks</Text>
                        </Center>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} area={'icon3'}>
                        <Flex gap={3} ml={flexMargin} wrap="wrap" justify={flexAlignment}>
                            <FaReact size={40} color="white"/>
                            <SiExpress size={40} color="white"/>
                            <DiNodejs size={40} color="white"/>
                            <SiFlask size={40} color="white"/>
                            <SiDotnet size={40} color="white"/>
                            <SiTensorflow size={40} color="white"/>
                        </Flex>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} area={'cat4'}>
                        <Center>
                            <Text fontSize="2xl" fontWeight="bold" color="white">Experience With</Text>
                        </Center>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} area={'icon4'}>
                        <Flex gap={3} ml={flexMargin} wrap="wrap" justify={flexAlignment}>
                            <FaJava size={40} color="white"/>
                            <TbBrandKotlin size={40} color="white"/>
                            <FaGolang size={40} color="white"/>
                            <DiRuby size={40} color="white"/>
                            <SiLua size={40} color="white"/>
                            <SiRiscv size={40} color="white"/>
                            <DiProlog size={40} color="white"/>
                            <TbLambda size={40} color="white"/>
                        </Flex>
                    </GridItem>
                </SimpleGrid>
            </Stack>
        </Box>
    );
}

export default Skills;