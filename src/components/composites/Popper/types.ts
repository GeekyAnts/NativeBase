import type { ReactElement, RefObject } from 'react';
import type { ViewStyle } from 'react-native';

export type IPopoverArrowProps = {
  height?: number;
  width?: number;
  children?: React.ReactNode;
  color?: string;
  style?: ViewStyle;
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
