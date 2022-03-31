import React from 'react';
import styled from 'styled-components';
import { ViewWrapper } from '../../atoms/viewWrapper/ViewWrapper.style';
import { HeaderCourse } from '../../molecules/headerCourse/HeaderCourse';
import { NavigationCourse } from '../../molecules/navigationCourse/NavigationCourse';
import { SeledCourses } from '../../molecules/seledCourse/SeledCourses';
import { DataListInput } from '../../atoms/dataListInput/DataListInput';
import { Rating } from '../../molecules/rating/Rating';
import { StatusCourse } from '../../molecules/statusCourse/StatusCourse';
import { MosteLeaveStages } from '../../molecules/mostLeaveStages/MostLeaveStages';
import { ActiveDiscussions } from '../../molecules/activeDiscussions/ActiveDiscussions';
import { CoursesFooter } from '../../molecules/coursesFooter/CoursesFooter';
import { BarInfo } from '../../molecules/barInfo/BarInfo';

const Wrapper = styled.div`
  display: flex;
`;

export const PlanCourse = () => {
  return (
    <ViewWrapper>
      <HeaderCourse />
      <NavigationCourse />
      <DataListInput name="Wszystkie warianty" />
      <Wrapper>
        <SeledCourses />
        <SeledCourses isRed />
        <Rating />
      </Wrapper>
      <Wrapper>
        <BarInfo />
        <StatusCourse />
      </Wrapper>
      <Wrapper>
        <MosteLeaveStages />
        <ActiveDiscussions />
      </Wrapper>
      <CoursesFooter />
    </ViewWrapper>
  );
};
