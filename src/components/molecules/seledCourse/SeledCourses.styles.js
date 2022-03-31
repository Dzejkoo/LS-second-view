import styled from 'styled-components';
import photos from '../../../assets/images/bgc';

export const SeledCoursesWrapper = styled.div`
  background-image: ${({ isRed }) => (isRed ? `url(${photos.redBgc})` : `url(${photos.greenBgc})`)};
  background-position: center;
  border-radius: 8px;
  width: 201px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  margin: 12.5px 12.5px 12.5px 25px;

  div {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.grayDark};
    padding-bottom: 45px;
    span {
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: 600;
      padding-bottom: 10px;
    }
    span:nth-child(2) {
      font-weight: 300;
      font-size: ${({ theme }) => theme.fontSize.s};
      opacity: 0.5;
    }
  }
`;
export const TodaySaled = styled.span`
  color: ${({ isRed }) => (isRed ? `#FF4081` : `#4cc500`)};
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  align-items: center;
  svg {
    fill: ${({ isRed }) => (isRed ? `#FF4081` : `#4cc500`)};
    width: 10px;
    margin: 0 5px;
    transform: ${({ isRed }) => (isRed ? `rotate(-50deg)` : `rotate(130deg)`)};
  }
`;
