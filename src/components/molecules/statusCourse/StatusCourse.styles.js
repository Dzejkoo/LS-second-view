import styled from 'styled-components';
import photos from '../../../assets/images/bgc';

export const WrapperStatusCourse = styled.div``;

export const GlobalStatsCourse = styled.div`
  width: 201px;
  height: 118px;
  background-image: ${({ isFinish, isQuit }) =>
    isFinish ? `url(${photos.finishCourseBgc})` : isQuit ? `url(${photos.quitCourseBgc})` : `url(${photos.startCourseBgc})`};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 35px;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 12.5px 12.5px 25px 12.5px;
  span:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 600;
    padding-bottom: 10px;
  }
  span:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.m};
    opacity: 0.5;
    width: 70%;
    text-align: right;
  }
`;
