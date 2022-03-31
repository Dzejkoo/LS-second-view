import React from 'react';
import { ReactComponent as ArrowSmall } from '../../../assets/images/icon/arrow-small.svg';
import { SearchListWrapper } from './SearchList.styles';

export const SearchList = () => {
  return (
    <SearchListWrapper>
      <span>Wszystkie warianty</span>
      <ArrowSmall />
    </SearchListWrapper>
  );
};
