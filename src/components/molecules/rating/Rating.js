import React from 'react';
import photos from '../../../assets/images/bgc';
import { Wrapper, RatingWrapper, RatingBars, Bar, RatingScore, Score } from './Rating.styles';

export const Rating = () => {
  return (
    <Wrapper>
      <RatingWrapper>
        <RatingBars>
          <div>
            <span>5</span>
            <Bar number="80"></Bar>
          </div>
        </RatingBars>
        <RatingBars>
          <div>
            <span>4</span>
            <Bar number="70"></Bar>
          </div>
        </RatingBars>
        <RatingBars>
          <div>
            <span>3</span>
            <Bar number="30"></Bar>
          </div>
        </RatingBars>
        <RatingBars>
          <div>
            <span>2</span>
            <Bar number="10"></Bar>
          </div>
        </RatingBars>
        <RatingBars>
          <div>
            <span>1</span>
            <Bar number="0"></Bar>
          </div>
        </RatingBars>
      </RatingWrapper>
      <RatingScore>
        <Score>
          <span>3,6</span>
          <span>23 opinie</span>
        </Score>
        <img src={photos.stars} alt="score stars" />
      </RatingScore>
    </Wrapper>
  );
};
