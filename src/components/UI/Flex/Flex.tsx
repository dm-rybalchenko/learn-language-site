import styled from 'styled-components';

import { IFlexProps } from './Flex.types';


const addPixels = (value?: string | number): string => {
  let result = '0px';

  if (typeof value === 'number') {
    result = value + 'px';
  }
  if (typeof value === 'string') {
    result = value;
  }

  return result;
};

const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${(props): IFlexProps['direction'] =>
    props.direction || 'row'};
  gap: ${(props): IFlexProps['gap'] => props.gap || 0}px;
  justify-content: ${(props): IFlexProps['justify'] =>
    props.justify || 'flex-start'};
  align-items: ${(props): IFlexProps['align'] => props.align || 'flex-start'};
  margin: ${(props): IFlexProps['margin'] => addPixels(props.margin)};
  padding: ${(props): IFlexProps['padding'] => addPixels(props.padding)};
`;

export default Flex;
