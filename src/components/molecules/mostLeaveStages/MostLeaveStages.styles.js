import styled from 'styled-components';
import photos from '../../../assets/images/bgc';

const widthBarCourse = (number) => {
  if (number === '40') return '40%';
  if (number === '30') return '30%';
  if (number === '20') return '20%';
  if (number === '10') return '10%';
};

export const Wrapper = styled.div`
  display: flex;
`;

export const MosteLeaveStagesWrapper = styled.div`
  width: 427px;
  height: 268px;
  padding: 24px;
  border-radius: 8px;
  margin: 0px 12.5px 55px 25px;

  background-color: ${({ theme }) => theme.colors.white};
  h3 {
    color: ${({ theme }) => theme.colors.grayDark};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 0 0 20px 0;
  }
`;

export const BarsCourses = styled.div`
  div {
    display: flex;
    align-items: center;
    margin: 10px;
    span:nth-child(1) {
      color: ${({ theme }) => theme.colors.turkis};
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: 600;
      padding-right: 10px;
    }
    span:nth-child(2) {
      color: ${({ theme }) => theme.colors.grayDark};
      font-size: ${({ theme }) => theme.fontSize.m};
      opacity: 0.5;
      font-weight: 300;
    }
  }
`;
export const BarCourse = styled.div`
  width: 250px;
  height: 4px;
  border-radius: 4px;
  background-color: #eceff1;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: ${({ number }) => widthBarCourse(number)};
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 172, 193, 0.4) 0%, #00acc1 100%);
    transform: translateY(-50%);
    border-radius: 4px;
  }
`;

export const WrapperBarCourses = styled.div``;

export const LeaveCourse = styled.div`
  width: 90px;
  height: 90px;
  background-image: url(${photos.leaveCourseBgc});
  display: flex;
  margin-right: auto;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.grayDark};
  padding: 10px;
  span:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 600;
  }
  span:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.s};
    opacity: 0.5;
  }
`;
