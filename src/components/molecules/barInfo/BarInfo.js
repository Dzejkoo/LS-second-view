import React from 'react';
import { BarChart } from '../barChart/BarChart';
import { StartCharts } from '../statsChart/StatsChart';
import { WrapperBarInfo } from './BarInfo.styles';

export const BarInfo = () => {
  return (
    <WrapperBarInfo>
      <StartCharts />
      <BarChart />
    </WrapperBarInfo>
  );
};
