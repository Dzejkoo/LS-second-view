import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 256px;
  padding: 25px 25px 12.5px 25px;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid rgba(176, 190, 197, 0.9);
  border-radius: 8px;
  font-weight: 200;
  padding: 20px;
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.coolGray};
    opacity: 0.4;
  }
  &::-webkit-calendar-picker-indicator {
    opacity: 100;
    color: ${({ theme }) => theme.colors.garySecoundary};
  }
`;
