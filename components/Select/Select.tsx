import ReactSelect from 'react-select';
import styled from 'styled-components';

import { IOption, ISelectProps } from './Select.types';


const StyledSelect = styled(ReactSelect<IOption>)`
  width: 210px;
  border-radius: 4px;
  box-shadow: none;
  cursor: pointer;
  transition: 0.3s;

  & .rcs__control,
  & .rcs__control * {
    color: ${(props): string => props.theme.colors.white};
    background-color: ${(props): string => props.theme.colors.secondary200};
    box-shadow: none;
    border-radius: 4px;
    border: none;
    outline: none;
  }

  & .rcs__menu div {
    color: ${(props): string => props.theme.colors.primary600};
    background: ${(props): string => props.theme.colors.primary100};
    & *:hover {
      background: ${(props): string => props.theme.colors.primary300};
    }
  }

  & .rcs__control--menu-is-open {
    svg {
      transform: rotate(180deg);
    }
  }
`;

function Select(props: ISelectProps): JSX.Element {
  return (
    <StyledSelect
      {...props}
      isSearchable={false}
      defaultValue={props.value}
      options={props.options}
      getOptionLabel={(option: IOption): string => option.name}
      getOptionValue={(option: IOption): string => option.value}
      onChange={props.onChange}
      classNamePrefix="rcs"
    />
  );
}

export default Select;
