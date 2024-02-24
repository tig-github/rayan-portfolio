// to display github commit heapmap on the main page
import React, { useState } from 'react';
import { 
    Box,
    Button,
} from "@chakra-ui/react";
import CalendarHeatmap from 'react-calendar-heatmap';
import { testValues, expandedTestValues } from '../../lib/dummyHeatmapData';
import { getIssues } from '../../utils/github';
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

  

const Commits = () => {
    const [year, setYear] = useState(2016);

    return (
        <>
            <Box w="80%" mt="5%">
                <Button onClick={getIssues}>get issues</Button>
                <CalendarHeatmap
                    startDate={new Date(`${year}-01-01`)}
                    endDate={new Date(`${year}-12-31`)}
                    values={expandedTestValues}
                    classForValue={(value) => colorValue(value)}
                />
            </Box>
        </>
    );
}

export default Commits;