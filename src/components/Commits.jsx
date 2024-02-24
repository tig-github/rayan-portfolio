// to display github commit heapmap on the main page
import React from 'react';
import HeatMap from '@uiw/react-heat-map';
import { 
    useBreakpointValue,
  } from "@chakra-ui/react";

    
const value = [
    { date: '2024/01/11', count: 2 },
    { date: '2024/01/12', count: 20 },
    { date: '2024/01/13', count: 10 },
    ...[...Array(17)].map((_, idx) => ({ date: `2024/02/${idx + 10}`, count: idx, content: '' })),
    { date: '2024/04/11', count: 2 },
    { date: '2024/05/01', count: 5 },
    { date: '2024/05/02', count: 5 },
    { date: '2024/05/04', count: 11 },
    { date: '2024/05/05', count: 11 },
    { date: '2024/05/06', count: 11 },
    { date: '2024/05/07', count: 11 },
];

const Commits = () => {
    const mapHeight = useBreakpointValue(
        {
          base: '75vh',
          md: '50vh',
        },
        {
          // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
          // (Defaults to 'base')
          fallback: '50vh',
        },
      )

    return (
        <>
            <HeatMap
                value={value}
                weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
                startDate={new Date('2024/01/01')}
                endDate={new Date('2024/06/01')}
                panelColors={{
                    0: '#f4decd',
                    2: '#e4b293',
                    4: '#d48462',
                    10: '#c2533a',
                    20: '#ad001d',
                    30: '#000',
                  }}
                  rectProps={{
                    rx: 3.1
                  }}
                  rectSize={40}
                  style={{height: mapHeight, width: "100%"}}
            />
        </>
    );
}

export default Commits;