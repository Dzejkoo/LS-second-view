import React from 'react';
import { StatChartWrapper, ChooseWeek } from './StatsChart.styles';
import { ReactComponent as ArrowSmall } from '../../../assets/images/icon/arrow-small.svg';

export const StartCharts = () => {
  return (
    <StatChartWrapper>
      <div>
        <span>Dochód</span>
        <span>6 599,99 zł</span>
      </div>
      <ChooseWeek>
        <span>
          ten tydzień
          <ArrowSmall />
        </span>
      </ChooseWeek>
    </StatChartWrapper>
  );
};
