import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Events } from '../../../assets/images/icon/events.svg';
import { ReactComponent as Homework } from '../../../assets/images/icon/homework.svg';
import { ReactComponent as Info } from '../../../assets/images/icon/info.svg';
import { ReactComponent as Message } from '../../../assets/images/icon/message.svg';
import { ReactComponent as Plan } from '../../../assets/images/icon/plan.svg';
import { ReactComponent as Settings } from '../../../assets/images/icon/settings.svg';
import { ReactComponent as Stats } from '../../../assets/images/icon/stats.svg';
import { ReactComponent as Students } from '../../../assets/images/icon/students.svg';
import { ReactComponent as Add } from '../../../assets/images/icon/add.svg';

const NavigationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Link = styled.li`
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 20px 20px 20px 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-right: ${({ theme, isActive }) => (isActive ? `4px solid ${theme.colors.turkis}` : 'none')};
  font-weight: 600;
  svg {
    fill: ${({ theme }) => theme.colors.grayMedium};
  }
  span {
    color: ${({ theme, isActive }) => (isActive ? theme.colors.turkis : theme.colors.grayDark)};

    padding: 0 15px 0 35px;
    display: flex;
    align-items: center;
  }
  span:nth-child(3) {
    color: ${({ theme }) => theme.colors.turkis};
    padding-left: 0px;
  }
`;

export const NavLinkList = () => {
  return (
    <NavigationList>
      <Link>
        <Info />
        <span>Informacje ogólne</span>
      </Link>
      <Link isActive>
        <Plan />
        <span>Plan kursu</span>
        <Add />
      </Link>
      <Link>
        <Students />
        <span>Kursanci</span>
      </Link>
      <Link>
        <Stats />
        <span>Statystyki</span>
      </Link>
      <Link>
        <Settings />
        <span>Ustawienia</span>
      </Link>
      <Link>
        <Message />
        <span>Wiadomości</span>
        <span>2</span>
      </Link>
      <Link>
        <Homework />
        <span>Prace domowe </span>
        <span>3</span>
      </Link>
      <Link>
        <Events />
        <span>Wydarzenia</span>
      </Link>
    </NavigationList>
  );
};
