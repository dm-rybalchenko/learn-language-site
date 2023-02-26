import {
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
  ThemedStyledProps,
} from 'styled-components';


export type TConditionReturn<P = ThemeProps<DefaultTheme>> =
  | false
  | undefined
  | FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>;

const colors = [
  'primary10',
  'primary20',
  'primary30',
  'primary40',
  'secondary10',
  'secondary20',
  'secondary30',
  'secondary40',
  'secondary50',
  'error10',
  'error20',
  'error30',
  'error40',
  'warning10',
  'warning20',
  'warning30',
  'warning40',
  'white',
  'black',
] as const;

const media = ['xs', 's', 'm', 'l', 'xl'] as const;
export interface ITheme {
  colors: Record<typeof colors[number], string>;
  media: Record<typeof media[number], string>;
}
