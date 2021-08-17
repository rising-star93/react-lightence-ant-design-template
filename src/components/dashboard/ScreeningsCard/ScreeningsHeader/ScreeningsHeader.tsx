import React from 'react';
import { ScreeningsSelect } from '../ScreeningsSelect/ScreeningsSelect';
import { Dates } from '../../../../constants/Dates';
import * as S from './ScreeningsHeader.styles';

const months = Dates.getMonths();
const statistics = ['Statistics 1', 'Statistics 2', 'Statistics 3'];

export const ScreeningsHeader: React.FC = () => {
  return (
    <S.Wrapper>
      Latest screenings
      <S.SelectsWrapper>
        <ScreeningsSelect options={months} defaultValue="Months" />
        <ScreeningsSelect options={statistics} defaultValue="Statistics" />
      </S.SelectsWrapper>
    </S.Wrapper>
  );
};
