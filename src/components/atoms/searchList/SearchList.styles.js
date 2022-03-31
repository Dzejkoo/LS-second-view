import styled from 'styled-components';

export const SearchListWrapper = styled.div`
  width: 256px;
  height: 56px;
  border: 1px solid rgba(176, 190, 197, 0.5);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 25px 25px 12.5px 25px;
  svg {
    opacity: 0.7;
    transform: rotate(90deg);
  }
  span {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.grayDark};
  }
`;
