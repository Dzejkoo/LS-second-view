import styled from 'styled-components';

export const StatChartWrapper = styled.div`
  display: fle;
  justify-content: space-between;
  padding-bottom: 25px;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.grayDark};
    span:nth-child(1) {
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: 300;
      padding-bottom: 10px;
    }
    span:nth-child(2) {
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: 600;
    }
  }
`;
export const ChooseWeek = styled.div`
  color: ${({ theme }) => theme.colors.grayDark};
  span {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 300;
    display: flex;
    align-items: center;
    svg {
      margin: 0 10px;
      transform: rotate(90deg);
    }
  }
`;
