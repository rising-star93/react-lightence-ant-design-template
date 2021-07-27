import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Col, Row, Typography } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { months } from '../../constants/months';

interface MonthSwitchProps {
  width?: string;
}

const today = new Date();

export const MonthSwitch: React.FC<MonthSwitchProps> = ({ width }) => {
  const [currentMonth, setMonth] = useState(today.getMonth());

  const handleDecrease = () => {
    setMonth((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setMonth((prev) => prev + 1);
  };

  return (
    <Row align="middle" justify="space-between">
      <Col>
        <Button type="text" disabled={currentMonth <= 0} onClick={handleDecrease}>
          <LeftOutlined />
        </Button>
      </Col>
      <Col>
        <TextStyled width={width}>{`${months[currentMonth]} ${today.getFullYear()}`}</TextStyled>
      </Col>
      <Col>
        <Button type="text" disabled={currentMonth >= 11} onClick={handleIncrease}>
          <RightOutlined />
        </Button>
      </Col>
    </Row>
  );
};

const TextStyled = styled(Typography.Text)<MonthSwitchProps>`
  text-align: center;
  width: ${(props) => props.width || '5rem'};
`;
