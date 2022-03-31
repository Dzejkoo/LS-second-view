import React from 'react';
import { Input, Wrapper } from './DataListInput.styles';

export const DataListInput = ({ name }) => {
  return (
    <Wrapper>
      <Input placeholder={name} list="courses" />
      <datalist id="courses">
        <option value="one">one</option>
        <option value="two"></option>
        <option value="three"></option>
        <option value="four"></option>
      </datalist>
    </Wrapper>
  );
};
