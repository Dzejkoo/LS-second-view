import styled from 'styled-components';

export const NavigationCourseWrapper = styled.div``;
export const PathBar = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
  padding: 35px 25px;
  span {
    svg {
      margin: 0 15px;
    }
  }
`;
export const NavigationBar = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
  padding: 0 0px 0 25px;
  color: ${({ theme }) => theme.colors.grayDark};
  span {
    padding: 15px 25px;
    cursor: pointer;
  }
  span:nth-child(1) {
    color: ${({ theme }) => theme.colors.turkis};
    border-bottom: 2px solid ${({ theme }) => theme.colors.turkis};
  }
`;
