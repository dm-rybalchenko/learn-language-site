import styled, { css } from 'styled-components';

import { TConditionReturn } from '@/interfaces/styled.types';
import { IButtonProps } from './Button.types';


const BorderedButton = css<IButtonProps>`
  color: ${(props): string => props.theme.colors[`${props.view}30`]};
  background: ${(props): string => props.theme.colors.white};
  border: 1px solid ${(props): string => props.theme.colors[`${props.view}30`]};
  &:hover {
    color: ${(props): string => props.theme.colors[`${props.view}20`]};
    background: none;
    border: 1px solid
      ${(props): string => props.theme.colors[`${props.view}20`]};
    box-shadow: 0 1px 4px
      ${(props): string => props.theme.colors[`${props.view}10`]};
  }
  &:active {
    color: ${(props): string => props.theme.colors[`${props.view}40`]};
    background: none;
    border: 1px solid
      ${(props): string => props.theme.colors[`${props.view}40`]};
  }
`;

const StyledButton = styled.button<IButtonProps>`
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  padding: 10px 24px;
  color: ${(props): string => props.theme.colors.white};
  background: ${(props): string => props.theme.colors[`${props.view}30`]};
  transition: 0.2s;
  &:hover {
    background: ${(props): string => props.theme.colors[`${props.view}20`]};
    box-shadow: 0 1px 4px
      ${(props): string => props.theme.colors[`${props.view}10`]};
  }
  &:active {
    background: ${(props): string => props.theme.colors[`${props.view}40`]};
  }

  ${(props): TConditionReturn<IButtonProps> => props.border && BorderedButton}

  ${(props): TConditionReturn =>
    props.rounded &&
    css`
      border-radius: 14px;
    `}
`;

function Button(props: IButtonProps): JSX.Element {
  return <StyledButton {...props} />;
}

export default Button;
