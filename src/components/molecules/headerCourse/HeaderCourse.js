import React from 'react';
import { ReactComponent as Info } from '../../../assets/images/icon/info.svg';
import { HeaderCourseWrapper } from './HeaderCourse.styles';

export const HeaderCourse = () => {
  return (
    <HeaderCourseWrapper>
      <h2>UX Design od podstaw</h2>
      <span>
        Zdobądź oznaczenie Smart Learning <Info />
      </span>
      <span>Podgląd</span>
      <button>Publikuj</button>
    </HeaderCourseWrapper>
  );
};
