import type { IBoxProps } from '../../primitives';

export type IAlertProps = IBoxProps & {
  style?: any;
  status?: 'info' | 'warning' | 'success' | 'error' | string;
  children?: JSX.Element | JSX.Element[] | any;
  variant?: string;
  fontSize?: number;
};
export type IAlertContext = {
  status?: string;
  variant?: string;
  iconColor?: string;
  textColor?: string;
};
