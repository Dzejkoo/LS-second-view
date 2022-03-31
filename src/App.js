import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/globalStyles';
import { theme } from './assets/styles/theme';
import { PlanCourse } from './components/organisms/planCourse/PlanCourse';
import { MainTemplate } from './components/template/MainTemplate';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <PlanCourse />
      </MainTemplate>
    </ThemeProvider>
  );
};
