import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
const WrapperChart = styled.div`
  width: 614px;
  height: 241px;
`;

export const BarChart = () => {
  return (
    <WrapperChart>
      <Bar
        data={{
          labels: ['23 lis', '24 lis', '25 lis', '26 list', '27 lis', '28 lis', '29 lis'],
          datasets: [
            {
              label: 'ten tydzień',
              data: [1800, 800, 500, 1600, 1500, 700, 1200],
              backgroundColor: '#00ACC1'
            },
            {
              barPercentage: 0.5,
              barThickness: 6,
              label: 'poprzedni tydzień',
              data: [1200, 400, 800, 1200, 1700, 600, 1100],
              backgroundColor: '#80DEEA'
            }
          ]
        }}
        options={{
          scales: {
            x: {
              grid: {
                offset: false
              }
            }
          }
        }}
      />
    </WrapperChart>
  );
};
