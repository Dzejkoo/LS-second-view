import React from 'react';
import { GlobalStatsCourse } from './StatusCourse.styles';

export const StatusCourse = () => {
  return (
    <div>
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
    </div>
  );
};
