import type { IBoxProps, ITextProps } from '../../primitives';

export type IToastProps = IBoxProps & IsetToastProps;
export type IsetToastProps = {
  title?: string;
  duration?: number | 'short' | 'long';
  position?: 'top' | 'bottom' | 'center';
  offset?: { x: number; y: number };
  _title?: ITextProps;
};
