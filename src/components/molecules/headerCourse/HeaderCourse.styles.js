import styled from 'styled-components';

export const HeaderCourseWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 25px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.white};

  h2 {
    color: ${({ theme }) => theme.colors.grayDark};
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-right: auto;
  }
  button {
    height: 40px;
    width: 138px;
    text-transform: uppercase;
    background: non;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.turkis};
    border: none;
    cursor: pointer;
  }
  span {
    font-weight: 300;
    display: flex;
    align-items: center;
    padding-right: 35px;
    svg {
      width: 13px;
      margin-left: 5px;
    }
  }
  span:nth-child(3) {
    cursor: pointer;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.turkis};
    padding-right: 25px;
    font-weight: 600;
  }
`;
