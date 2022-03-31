import React from 'react';
import styled from 'styled-components';
import { StepBack } from '../../atoms/stepBack/StepBack';
import { NavLinkList } from '../../molecules/navLinkList/NavLinkList';
import photos from '../../../assets/images/bgc';

const NavigationWrapper = styled.div`
  width: 260px;
  height: 100vh;
  background-image: url(${photos.bgcNav});
  background-position: bottom right;
`;

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <StepBack />
      <NavLinkList />
    </NavigationWrapper>
  );
};
