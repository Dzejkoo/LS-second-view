import React from 'react';
import { MosteLeaveStagesWrapper, LeaveCourse, BarsCourses, WrapperBarCourses, BarCourse, Wrapper } from './MostLeaveStages.styles';

export const MosteLeaveStages = () => {
  return (
    <MosteLeaveStagesWrapper>
      <h3>Najczęściej porzucane etapy</h3>
      <Wrapper>
        <LeaveCourse>
          <span>21</span>
          <span>porzuconych kursów</span>
        </LeaveCourse>
        <WrapperBarCourses>
          <BarsCourses>
            <div>
              <span>41%</span>
              <span>Lekcja 3: Strategia UX</span>
            </div>
            <BarCourse number="40" />
          </BarsCourses>
          <BarsCourses>
            <div>
              <span>33%</span>
              <span> Lekcja 1: Wprowadzenie</span>
            </div>
            <BarCourse number="30" />
          </BarsCourses>
          <BarsCourses>
            <div>
              <span>20%</span>
              <span>Lekcja 7: Metody badawcze i...</span>
            </div>
            <BarCourse number="20" />
          </BarsCourses>
          <BarsCourses>
            <div>
              <span>6%</span>
              <span>Pozostałe</span>
            </div>
            <BarCourse number="10" />
          </BarsCourses>
        </WrapperBarCourses>
      </Wrapper>
    </MosteLeaveStagesWrapper>
  );
};
