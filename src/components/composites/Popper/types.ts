import type { ReactElement, RefObject } from 'react';

export type IPopoverArrowProps = {
  height?: any;
  width?: any;
  children?: any;
  color?: any;
  style?: any;
};

export type IPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right'
  | 'right top'
  | 'right bottom'
  | 'left top'
  | 'left bottom';

export type IPopperProps = {
  shouldFlip?: boolean;
  crossOffset?: number;
  offset?: number;
  children: React.ReactNode;
  shouldOverlapWithTrigger?: boolean;
  trigger?: ReactElement | RefObject<any>;
  placement?: IPlacement;
};

export type IArrowStyles = {
  placement?: string;
  height?: number;
  width?: number;
};

export type IScrollContentStyle = {
  placement?: string;
  arrowHeight: number;
  arrowWidth: number;
};
