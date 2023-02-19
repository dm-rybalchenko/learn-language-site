import styled, { css } from 'styled-components';

import { TConditionReturn } from '@/interfaces/styled.types';
import { IButtonProps } from './Button.types';


const StyledButton = styled.button<IButtonProps>`
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  padding: 10px 24px;
  color: ${(props): string => props.theme.colors.white};
  background: ${(props): string => props.theme.colors.primary30};
  transition: 0.3s;
  &:hover {
    background: ${(props): string => props.theme.colors.primary20};
    box-shadow: 0 1px 4px ${(props): string => props.theme.colors.primary10};
  }
  &:active {
    background: ${(props): string => props.theme.colors.primary40};
  }

  ${(props): TConditionReturn =>
    Boolean(props.rounded) &&
    css`
      border-radius: 14px;
    `}

  ${(props): TConditionReturn =>
    props.view === 'error' &&
    css`
      background: ${(props): string => props.theme.colors.error30};
      &:hover {
        background: ${(props): string => props.theme.colors.error20};
        box-shadow: 0 1px 4px ${(props): string => props.theme.colors.error10};
      }
      &:active {
        background: ${(props): string => props.theme.colors.error40};
      }
    `}

  ${(props): TConditionReturn =>
    props.view === 'warning' &&
    css`
      background: ${(props): string => props.theme.colors.warning30};
      &:hover {
        background: ${(props): string => props.theme.colors.warning20};
        box-shadow: 0 1px 4px ${(props): string => props.theme.colors.warning10};
      }
      &:active {
        background: ${(props): string => props.theme.colors.warning40};
      }
    `}
`;

function Button(props: IButtonProps): JSX.Element {
  return <StyledButton {...props} />;
}

export default Button;
