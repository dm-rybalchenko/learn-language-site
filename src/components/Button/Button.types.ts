import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';


export interface IButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  > {
  children: ReactNode;
  view?: 'error' | 'warning';
  rounded?: boolean;
}
