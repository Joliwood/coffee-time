import React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import { useTheme, useMediaQuery } from '@mui/material';

const customColors = ['#efef97', '#f7b845', '#db3f3f'];

export default function PieArcLabel({ coffeesDrunk }: any) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const truncateLabel = (label) => (label.length > 5 ? `${label.slice(0, 8)}...` : label);

  const data = coffeesDrunk.map((coffee, index) => ({
    value: coffee.quantity,
    label: truncateLabel(coffee.title),
    color: customColors[index],
  }));

  return (
    <PieChart
      width={isSmallScreen ? 500 : 850}
      height={isSmallScreen ? 400 : 500}
      margin={{ right: 5 }}
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      slotProps={{
        legend: {
          hidden: isSmallScreen,
          direction: 'column',
          position: {
            vertical: 'middle',
            horizontal: 'right',
          },
          padding: 30,
        },
      }}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: 'gray',
        },
      }}
    />
  );
}
