import React from 'react';
import { ReactComponent as Arrow } from '../../../assets/images/icon/arrow.svg';
import { StepBackWrapper } from './StepBack.style';

export const StepBack = () => {
  return (
    <StepBackWrapper>
      <Arrow />
      <button>Kursy</button>
    </StepBackWrapper>
  );
};
