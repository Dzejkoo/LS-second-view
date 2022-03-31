import React from 'react';
import { NavigationList, Link } from './NavLinkList.styles';

import { ReactComponent as Events } from '../../../assets/images/icon/events.svg';
import { ReactComponent as Homework } from '../../../assets/images/icon/homework.svg';
import { ReactComponent as Info } from '../../../assets/images/icon/info.svg';
import { ReactComponent as Message } from '../../../assets/images/icon/message.svg';
import { ReactComponent as Plan } from '../../../assets/images/icon/plan.svg';
import { ReactComponent as Settings } from '../../../assets/images/icon/settings.svg';
import { ReactComponent as Stats } from '../../../assets/images/icon/stats.svg';
import { ReactComponent as Students } from '../../../assets/images/icon/students.svg';
import { ReactComponent as Add } from '../../../assets/images/icon/add.svg';

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
