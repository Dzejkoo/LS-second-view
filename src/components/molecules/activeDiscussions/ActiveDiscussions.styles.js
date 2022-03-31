import styled from 'styled-components';

export const ActiveDiscussionsWrapper = styled.div`
  color: ${({ theme }) => theme.colors.grayDark};
  width: 427px;
  height: 268px;
  padding: 24px;
  margin: 0 12.5px 55px 12.5px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  h3 {
    margin: 0 0 25px 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
export const ActivePostHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  opacity: 0.5;
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;
export const ResearchMethods = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 11px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
`;
