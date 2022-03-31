import React from 'react';
import { NavigationCourseWrapper, PathBar, NavigationBar } from './NavigationCourse.styles';
import { ReactComponent as ArrowSmall } from '../../../assets/images/icon/arrow-small.svg';

export const NavigationCourse = () => {
  return (
    <NavigationCourseWrapper>
      <PathBar>
        <span>
          Dashboard <ArrowSmall />
        </span>
        <span>
          Kursy <ArrowSmall />
        </span>
        <span>
          UX Design od podstaw <ArrowSmall />
        </span>
        <span>Statystyki</span>
      </PathBar>
      <NavigationBar>
        <span>Kursy</span>
        <span>Kursanci</span>
        <span>Quizy i testy</span>
      </NavigationBar>
    </NavigationCourseWrapper>
  );
};
