import React from 'react';
import styled from 'styled-components';
import { ViewWrapper } from '../../atoms/viewWrapper/ViewWrapper.style';
import { HeaderCourse } from '../../molecules/headerCourse/HeaderCourse';
import { NavigationCourse } from '../../molecules/navigationCourse/NavigationCourse';
import { SeledCourses } from '../../molecules/seledCourse/SeledCourses';
import { SearchList } from '../../atoms/searchList/SearchList';
import { Rating } from '../../molecules/rating/Rating';
import { BarChart } from '../../molecules/barChart/BarChart';
import { StartCharts } from '../../molecules/statsChart/StatsChart';
import { StatusCourse } from '../../molecules/statusCourse/StatusCourse';
import { MosteLeaveStages } from '../../molecules/mostLeaveStages/MostLeaveStages';
import { ActiveDiscussions } from '../../molecules/activeDiscussions/ActiveDiscussions';
import { CoursesFooter } from '../../molecules/coursesFooter/CoursesFooter';

const Wrapper = styled.div`
  display: flex;
`;

const WrapperBarInfo = styled.div`
  padding: 20px;
  width: 653px;
  height: 400px;
  margin: 12.5px 12.5px 12.5px 25px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PlanCourse = () => {
  return (
    <ViewWrapper>
      <HeaderCourse />
      <NavigationCourse />
      <SearchList />
      <Wrapper>
        <SeledCourses />
        <SeledCourses isRed />
        <Rating />
      </Wrapper>
      <Wrapper>
        <WrapperBarInfo>
          <StartCharts />
          <BarChart />
        </WrapperBarInfo>
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
