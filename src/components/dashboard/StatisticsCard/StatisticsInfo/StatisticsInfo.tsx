import React from 'react';
import { Space } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import * as S from './StatisticsInfo.styles';

interface StatisticsInfoProps {
  name: string;
  value: number;
  prevValue: number;
}

export const StatisticsInfo: React.FC<StatisticsInfoProps> = ({ name, value, prevValue }) => {
  const expression =
    value > prevValue ? ((value - prevValue) / prevValue) * 100 : ((prevValue - value) / prevValue) * 100;

  return (
    <Space direction="vertical" size={0}>
      <S.Title>{name}</S.Title>

      {prevValue && (
        <S.Text>
          {value > prevValue ? <CaretUpOutlined /> : <CaretDownOutlined />}
          {expression.toFixed(0)}%
        </S.Text>
      )}
    </Space>
  );
};
