import React from 'react';
import { ActiveDiscussionsWrapper, ActivePostHeader, ResearchMethods } from './ActiveDiscussions.styles';

export const ActiveDiscussions = () => {
  return (
    <ActiveDiscussionsWrapper>
      <h3>Aktywne dyskusje</h3>
      <div>
        <ActivePostHeader>
          <span>tytuł</span> <span>lista postów</span>
        </ActivePostHeader>
        <ResearchMethods>
          <span>Metody badawcze</span>
          <span>24</span>
        </ResearchMethods>
        <ResearchMethods>
          <span>Metody badawcze</span>
          <span>18</span>
        </ResearchMethods>
        <ResearchMethods>
          <span>Metody badawcze</span>
          <span>16</span>
        </ResearchMethods>
        <ResearchMethods>
          <span>Metody badawcze</span>
          <span>10</span>
        </ResearchMethods>
      </div>
    </ActiveDiscussionsWrapper>
  );
};
