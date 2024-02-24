// to display github commit heapmap on the main page
import React from 'react';
import { 
    Box,
    useBreakpointValue,
  } from "@chakra-ui/react";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './Commits.css';

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
                classForValue={(value) => {
                    if (!value) {
                      return 'color-empty';
                    }
                    return `color-scale-${value.count}`;
                  }}
            />
            </Box>

        </>
    );
}

export default Commits;