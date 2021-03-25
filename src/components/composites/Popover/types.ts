import type { ColorValue } from 'react-native';
import type { IBoxProps } from '../../primitives/Box';

export type IPopoverArrowProps = {
  height?: number;
  width?: number;
  color?: ColorValue;
} & IBoxProps;

export type IPopoverArrowImplProps = {
  placement?: string;
  arrowProps: IArrowProps;
  height: number;
  width: number;
} & IPopoverArrowProps;

export type IArrowProps = {
  style: Object;
};

export type IPopoverProps = {
  defaultIsOpen?: boolean;
  trapFocus?: boolean;
  closeOnBlur?: boolean;
  isOpen?: boolean;
  shouldFlip?: boolean;
  initialFocusRef?: any;
  finalFocusRef?: any;
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
  onOpen?: () => void;
};

export type IPopoverContentImpl = {
  arrowHeight: number;
  arrowWidth: number;
  placement?: string;
  arrowProps: IArrowProps;
  children: any;
};

export type IPopoverImplProps = IPopoverProps & {
  triggerRef: any;
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

export type IPopoverContentProps = IBoxProps & {
  isUnstyled?: boolean;
};
