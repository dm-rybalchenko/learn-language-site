import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ILayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLMapElement>, HTMLMapElement> {
  children: ReactNode;
  keywords?: string;
  title: string;
}
