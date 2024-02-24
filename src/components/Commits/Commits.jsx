// to display github commit heapmap on the main page
import React, { useState, useEffect, useMemo } from 'react';
import { 
    Box,
    Button,
    Text,
    Flex,
    Spacer,
    IconButton,
    Spinner,
    useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import CalendarHeatmap from 'react-calendar-heatmap';
import { testValues, expandedTestValues } from '../../lib/dummyHeatmapData';
import { processCommitCounts, processCommitValues, getCommits } from '../../utils/github';
import 'react-calendar-heatmap/dist/styles.css';
import './Commits.css';

let didInit = false; // for development, makes useEffect only run once on startup
const colorValue = (value) => { // simple function returning color class for commits
    if (!value) {
        return 'color-empty';
    }
    if (value.count < 3) {
        return 'lowcommit';
    }
    if (value.count < 8) {
        return 'mediumcommit';
    }
    if (value.count < 15) {
        return 'highcommit';
    }
    return 'hugecommit';
}

const Commits = () => {
    const [year, setYear] = useState(2024);
    const [commits, setCommits] = useState([]);
    const [handlingCommit, setHandlingCommit] = useState(false);
    const commitValues = useMemo(() => processCommitValues(processCommitCounts(commits)), [commits]);

    const handleCommits = async () => {
        try {
            setHandlingCommit(true);
            const retrieved_commits = await getCommits();
            setCommits([...retrieved_commits]);
            setHandlingCommit(false);
        }
        catch (error){
            console.log(error);
        }
    }

    // useEffect(() => {console.log(commits)}, [commits]);
    // useEffect(() => {console.log(commitValues)}, [commitValues]);
    // useEffect(() => {console.log(handlingCommit)}, [handlingCommit]);
    useEffect(() => {
        if (!didInit) {
            didInit = true;
            handleCommits();
        }
    })

    return (
        <>
            <Box w="75%" mt="5%">
                <Text fontSize="4xl" fontWeight="bold" color="white">{year}</Text>
                <CalendarHeatmap
                    startDate={new Date(`${year}-01-01`)}
                    endDate={new Date(`${year}-12-31`)}
                    values={commitValues}
                    classForValue={(value) => colorValue(value)}
                />
                <Flex mt="1rem" gap={7}>
                    <IconButton icon={<ArrowBackIcon />} onClick={() => setYear(year-1)} isDisabled={year <= 2021}/>
                    <IconButton icon={<ArrowForwardIcon />} onClick={() => setYear(year+1)} isDisabled={year >= 2024} />
                    <Spacer />
                    {handlingCommit && <Spinner color="white" mt={2} />}
                    <Button onClick={handleCommits}>Display My Commits</Button>
                </Flex>
            </Box>
        </>
    );
}

export default Commits;