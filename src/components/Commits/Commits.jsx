// to display github commit heapmap on the main page
import React, { useState, useEffect, useMemo } from 'react';
import { 
    Box,
    Button,
    Center,
} from "@chakra-ui/react";
import CalendarHeatmap from 'react-calendar-heatmap';
import { testValues, expandedTestValues } from '../../lib/dummyHeatmapData';
import { getIssues, getCommits } from '../../utils/github';
import 'react-calendar-heatmap/dist/styles.css';
import './Commits.css';


// simple function returning color values
const colorValue = (value) => {
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
// to avoid double request on render in dev
let didInit = false;

const Commits = () => {
    const [year, setYear] = useState(2024);
    const [commits, setCommits] = useState([]);

    // processes github commit information into values for the react calendar heatmap library
    // creates dict of form {date: count} then reprocesses into format of [...{date: date, count: count}]
    const processCommitCounts = (commits) => {
        let counts = {};
        console.log(commits)
        commits.forEach(
            (commit) => {
                let commitDate = (commit['commit']['author']['date']).slice(0,10);
                if (commitDate in counts) {
                    counts[commitDate]++;
                }
                else {
                    counts[commitDate] = 1;
                }
            }
        )
        console.log(counts);
        return counts;
    }
    // turns the count dict into an array of individual values
    const processCommitValues = (counts) => {
        let vals = [];
        Object.keys(counts).map((commitDate) => {
            vals.push({date: commitDate, count: counts[commitDate]});
        })
        return vals;
    }
    const commitValues = useMemo(() => processCommitValues(processCommitCounts(commits)), [commits]);


    const handleCommits = async () => {
        try {
            const retrieved_commits = await getCommits();
            setCommits([...retrieved_commits]);
        }
        catch (error){
            console.log(error);
        }

    }

    useEffect(() => {console.log(commits)}, [commits]);
    useEffect(() => {console.log(commitValues)}, [commitValues]);
    // useEffect(() => {console.log(displayedCommits)}, [displayedCommits]);

    return (
        <>
            <Box w="75%" h="100%" mt="5%">
                {/* <Button onClick={getIssues}>get issues</Button> */}
                <Center>
                <Button onClick={handleCommits}>Display My Commits</Button>
                </Center>
                <CalendarHeatmap
                    startDate={new Date(`${year}-01-01`)}
                    endDate={new Date(`${year}-12-31`)}
                    values={commitValues}
                    classForValue={(value) => colorValue(value)}
                />
            </Box>
        </>
    );
}

export default Commits;