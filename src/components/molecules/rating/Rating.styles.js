import styled from 'styled-components';

const widthBar = (number) => {
  if (number === '80') return '80%';
  if (number === '70') return '70%';
  if (number === '30') return '30%';
  if (number === '10') return '10%';
  if (number === '0') return '0%';
};

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RatingBars = styled.div`
  div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }
  span {
    color: ${({ theme }) => theme.colors.grayDark};
    padding: 0 10px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
export const Bar = styled.div`
  width: 200px;
  height: 8px;
  border-radius: 4px;
  background-color: #eceff1;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: ${({ number }) => widthBar(number)};
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 172, 193, 0.4) 0%, #00acc1 100%);
    transform: translateY(-50%);
    border-radius: 4px;
  }
`;

export const RatingScore = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.grayDark};
  padding-bottom: 50px;

  span:nth-child(1) {
    font-size: 46px;
    font-weight: 600;
  }
  span:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 300;
    opacity: 0.5;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 426px;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin: 12.5px 25px 12.5px 12.5px;
`;
