// to display github commit heapmap on the main page
import React from 'react';
import { 
    Box,
  } from "@chakra-ui/react";
import CalendarHeatmap from 'react-calendar-heatmap';
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
            <Box w="50%">
                <CalendarHeatmap
                    startDate={new Date('2016-01-01')}
                    endDate={new Date('2016-04-01')}
                    values={[
                        { date: '2016-01-02', count: 12 },
                        { date: '2016-01-22', count: 122 },
                        { date: '2016-01-30', count: 38 },
                        { date: '2016-01-31', count: 1 },
                        // ...and so on
                    ]}
                    classForValue={(value) => colorValue(value)}
                />
            </Box>

        </>
    );
}

export default Commits;