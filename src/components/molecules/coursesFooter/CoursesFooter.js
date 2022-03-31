import React from 'react';
import styled from 'styled-components';

const CoursesFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  margin: 15px 25px 50px 25px;
  color: ${({ theme }) => theme.colors.darkGray};
  opacity: 0.5;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-top: 1px solid rgba(176, 190, 197, 0.3);
`;

export const CoursesFooter = () => {
  return (
    <CoursesFooterWrapper>
      <span>© Learning Space</span>
      <span>Regulamin · Polityka prywatności · Polityka plików cookies</span>
    </CoursesFooterWrapper>
  );
};
