import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import {
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from 'styled-components';


export interface IButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  > {
  children: ReactNode;
  view?: 'primary' | 'secondary' | 'danger' | 'warning';
  lg?: boolean;
  long?: boolean;
}

export type TConditionReturn =
  | false
  | FlattenInterpolation<ThemeProps<DefaultTheme>>;
