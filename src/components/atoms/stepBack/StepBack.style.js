import styled from 'styled-components';

export const StepBackWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.grayDark};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  svg {
    fill: ${({ theme }) => theme.colors.white};
    margin-left: 30px;
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    margin: 0 0 0 20px;
  }
`;
