import { useId } from 'react';
import ReactSelect from 'react-select';
import styled, { css } from 'styled-components';

import { TConditionReturn } from '@/interfaces/styled.types';
import { IOption, ISelectProps } from './Select.types';


const StyledSelect = styled(ReactSelect<IOption>)<ISelectProps>`
  width: 210px;
  border-radius: 4px;
  box-shadow: none;
  transition: 0.3s;

  & .rcs__control,
  & .rcs__control * {
    font-size: 16px;
    color: ${(props): string => props.theme.colors.black};
    background-color: ${(props): string => props.theme.colors.secondary10};
    box-shadow: none;
    border-radius: 4px;
    border: none;
    outline: none;
	cursor: pointer;
  }

  & .rcs__menu {
    font-size: 14px;
    border-radius: 4px;
    box-shadow: 0 2px 6px ${(props): string => props.theme.colors.secondary40};
    & div {
      color: ${(props): string => props.theme.colors.black};
      background: ${(props): string => props.theme.colors.secondary30};
	  cursor: pointer;
      & *:hover {
        background: ${(props): string => props.theme.colors.secondary40};
      }
    }
  }

  & .rcs__control--menu-is-open {
    svg {
      transform: rotate(180deg);
    }
  }

  ${(props): TConditionReturn =>
    props.short &&
    css`
      width: 136px;
    `}
`;

const StyledLabel = styled.label`
  font-size: 12px;
  line-height: 2;
  color: ${(props): string => props.theme.colors.white};
  & span {
    margin-left: 6px;
  }
`;

function Select(props: ISelectProps): JSX.Element {
  return (
    <StyledLabel>
      {props.label && <span>{props.label}</span>}
      <StyledSelect
        {...props}
        instanceId={useId()}
        isSearchable={false}
        defaultValue={props.value}
        options={props.options}
        getOptionLabel={(option: IOption): string => option.name}
        getOptionValue={(option: IOption): string => option.value}
        onChange={props.onChange}
        classNamePrefix="rcs"
      />
    </StyledLabel>
  );
}

export default Select;
