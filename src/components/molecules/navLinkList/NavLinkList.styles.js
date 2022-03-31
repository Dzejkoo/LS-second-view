import styled from 'styled-components';

export const NavigationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Link = styled.li`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 20px 20px 20px 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-right: ${({ theme, isActive }) => (isActive ? `4px solid ${theme.colors.turkis}` : 'none')};
  font-weight: 600;
  svg {
    fill: ${({ theme }) => theme.colors.grayMedium};
  }
  span {
    color: ${({ theme, isActive }) => (isActive ? theme.colors.turkis : theme.colors.grayDark)};

    padding: 0 15px 0 35px;
    display: flex;
    align-items: center;
  }
  span:nth-child(3) {
    color: ${({ theme }) => theme.colors.turkis};
    padding-left: 0px;
  }
`;
