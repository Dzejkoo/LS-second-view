import React from 'react';
import { WrapperStatusCourse, GlobalStatsCourse } from './StatusCourse.styles';

export const StatusCourse = () => {
  return (
    <WrapperStatusCourse>
      <GlobalStatsCourse>
        <span>43</span>
        <span>rozpoczętych kursów</span>
      </GlobalStatsCourse>
      <GlobalStatsCourse isFinish>
        <span>15</span>
        <span>ukończonych kursów</span>
      </GlobalStatsCourse>
      <GlobalStatsCourse isQuit>
        <span>12 dni</span>
        <span>średni czas porzucenia kursu</span>
      </GlobalStatsCourse>
    </WrapperStatusCourse>
  );
};
