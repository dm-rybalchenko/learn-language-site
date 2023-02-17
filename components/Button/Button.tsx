import styled, { css } from 'styled-components';

import { IButtonProps, TConditionReturn } from './Button.types';


const StyledButton = styled.button<IButtonProps>`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  border-radius: 4px;
  padding: 10px 15px;
  color: ${(props): string => props.theme.colors.white};
  background: ${(props): string => props.theme.colors.primary200};
  transition: 0.3s;
  &:hover {
    background: ${(props): string => props.theme.colors.primary100};
  }
  &:active {
    background: ${(props): string => props.theme.colors.primary300};
  }

  ${(props): TConditionReturn =>
    Boolean(props.lg) &&
    css`
      padding: 10px 19px;
      font-size: 17px;
      font-weight: 500;
      line-height: 1.47;
      border-radius: 6px;
    `}

  ${(props): TConditionReturn =>
    Boolean(props.long) &&
    css`
      min-width: 210px;
    `}

  ${(props): TConditionReturn =>
    props.view === 'primary' &&
    css`
      background: ${(props): string => props.theme.colors.primary600};
      &:hover {
        background: ${(props): string => props.theme.colors.primary500};
      }
      &:active {
        background: ${(props): string => props.theme.colors.primary700};
      }
    `}

  ${(props): TConditionReturn =>
    props.view === 'secondary' &&
    css`
      background: ${(props): string => props.theme.colors.secondary200};
      &:hover {
        background: ${(props): string => props.theme.colors.secondary100};
      }
      &:active {
        background: ${(props): string => props.theme.colors.secondary300};
      }
    `}

  ${(props): TConditionReturn =>
    props.view === 'danger' &&
    css`
      background: ${(props): string => props.theme.colors.error200};
      &:hover {
        background: ${(props): string => props.theme.colors.error100};
      }
      &:active {
        background: ${(props): string => props.theme.colors.error300};
      }
    `}

  ${(props): TConditionReturn =>
    props.view === 'warning' &&
    css`
      background: ${(props): string => props.theme.colors.warning100};
      &:hover {
        background: ${(props): string => props.theme.colors.warning100};
      }
      &:active {
        background: ${(props): string => props.theme.colors.warning300};
      }
    `}
`;

function Button(props: IButtonProps): JSX.Element {
  return <StyledButton {...props} />;
}

export default Button;
