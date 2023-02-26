import { SingleValue } from 'react-select';


export interface IOption {
  value: string;
  name: string;
}

export interface ISelectProps {
  label?: string;
  value: IOption;
  onChange: (
    newValue: SingleValue<IOption>,
  ) => void;
  options: IOption[];
  short?: boolean;
}
