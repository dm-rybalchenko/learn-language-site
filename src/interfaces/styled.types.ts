import {
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from 'styled-components';


export type TConditionReturn =
  | false
  | FlattenInterpolation<ThemeProps<DefaultTheme>>;

export interface ITheme {
  colors: {
    primary10: string;
    primary20: string;
    primary30: string;
    primary40: string;
    secondary10: string;
    secondary20: string;
    secondary30: string;
    secondary40: string;
    error10: string;
    error20: string;
    error30: string;
    error40: string;
    warning10: string;
    warning20: string;
    warning30: string;
    warning40: string;
    white: string;
    black: string;
  };
  media: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
}
