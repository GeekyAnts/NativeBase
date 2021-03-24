import type { ViewStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';
import type {
  customBackgroundProps,
  customBorderProps,
  customExtraProps,
  customLayoutProps,
  customOutlineProps,
  customShadowProps,
} from '../../../utils/customProps';
import type { Props as tooltipProps } from './Tooltip';
import type { IBoxProps } from '../../primitives/Box';
import type { ICloseButtonProps } from '../CloseButton';
import type { RefObject } from 'react';
type SpaceType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
// export type IPopoverProps = ColorProps &
//   SpaceProps &
//   LayoutProps &
//   FlexboxProps &
//   customBorderProps &
//   customExtraProps &
//   customOutlineProps &
//   customShadowProps &
//   customLayoutProps &
//   customBackgroundProps &
//   tooltipProps &
//   BorderProps & {
//     style?: ViewStyle;
//     initialFocusRef?: any;
//     finalFocusRef?: any;
//     children: JSX.Element | JSX.Element[];
//     onOpen?: Function;
//     onClose?: Function;
//     closeOnBlur?: boolean;
//     id?: any;
//     size?: SpaceType | string | number;
//   };
export type IPopoverComponentType = ((props: IPopoverProps) => JSX.Element) & {
  Body: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
  CloseButton: React.MemoExoticComponent<
    (props: ICloseButtonProps) => JSX.Element
  >;
  Content: React.MemoExoticComponent<(props: IPopoverProps) => JSX.Element>;
  Footer: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
  Header: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
  Trigger: React.MemoExoticComponent<(props: any) => JSX.Element>;
};

export type IPopoverArrowProps = {
  height?: number;
  aspectRatio?: number;
  children?: React.ReactNode;
  color?: string;
};

export type IPopoverArrowImplProps = {
  placement?: string;
  arrowProps: IArrowProps;
  aspectRatio: number;
  height: number;
} & IPopoverArrowProps;

export type IArrowProps = {
  style: Object;
};

export type IPopoverProps = {
  isOpen?: boolean;
  shouldFlip?: boolean;
  triggerRef?: any;
  trigger: (_props: any, state: { open: boolean }) => JSX.Element;
  crossOffset?: number;
  offset?: number;
  shouldOverlapWithTrigger?: boolean;
  children: React.ReactNode;
  isKeyboardDismissable?: boolean;
  placement?:
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
  onClose?: () => void;
};

export type IPopoverContentImpl = {
  arrowHeight: number;
  arrowAspectRatio: number;
  placement?: string;
  arrowProps: IArrowProps;
  children: any;
};

export type IPopoverContent = {
  children: React.ReactNode;
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
