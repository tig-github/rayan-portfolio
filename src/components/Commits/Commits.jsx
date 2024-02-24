// to display github commit heapmap on the main page
import React from 'react';
import { 
    Box,
} from "@chakra-ui/react";
import CalendarHeatmap from 'react-calendar-heatmap';
import { testValues, expandedTestValues } from '../../lib/dummyHeatmapData';
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
    return (
        <>
            <Box w="50%" mt="4rem">
                <CalendarHeatmap
                    startDate={new Date('2016-01-01')}
                    endDate={new Date('2016-04-01')}
                    values={expandedTestValues}
                    classForValue={(value) => colorValue(value)}
                />
            </Box>
        </>
    );
}

export default Commits;