import styled from 'styled-components';

export const ViewWrapper = styled.div`
  width: calc(100% - 260px);
  height: 100vh;
  overflow-y: scroll;
  flex-grow: 2;
  background-color: ${({ theme }) => theme.colors.creameWhite};
`;
