export interface IFlexProps {
  direction?: 'column' | 'row';
  gap?: number;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-evenly'
    | 'center';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  margin?: number | string;
  padding?: number | string;
}
