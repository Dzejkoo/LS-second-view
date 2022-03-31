import React from 'react';
import { ReactComponent as Arrow } from '../../../assets/images/icon/arrow.svg';
import { SeledCoursesWrapper, TodaySaled } from './SeledCourses.styles';

export const SeledCourses = (isRed) => {
  return (
    <SeledCoursesWrapper {...isRed}>
      <div>
        <span>396</span>
        <span>sprzedanych kursów</span>
      </div>
      <TodaySaled {...isRed}>
        <Arrow />3 dzisiaj
      </TodaySaled>
    </SeledCoursesWrapper>
  );
};
