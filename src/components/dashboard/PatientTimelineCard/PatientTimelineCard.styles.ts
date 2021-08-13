import { Typography } from 'antd';
import styled from 'styled-components';

interface ItemProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  overflow: hidden;

  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Item = styled.div`
  display: flex;
  margin-bottom: 1.3rem;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;

export const IconWrapper = styled.div<ItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 0.75rem;

  background-color: ${(props) => (props.isActive && props.theme.colors.primary) || props.theme.colors.basicLight};

  color: ${(props) => (props.isActive && props.theme.colors.secondary) || props.theme.colors.primary};

  &::after {
    content: '';
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;

    background-color: ${(props) => props.theme.colors.basic};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span<ItemProps>`
  font-weight: 500;
  font-size: 0.75rem;

  color: ${(props) => props.isActive && props.theme.colors.primary};
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.5rem;
`;

export const Text = styled(Typography.Text)`
  font-size: 0.625rem;
  margin-left: 0.5rem;
`;

export const Description = styled(Typography.Text)`
  font-size: 0.625rem;
`;
