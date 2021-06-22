import type { ColorValue } from 'react-native';
import type { IBoxProps } from '../../primitives/Box';
import type { IIconButtonProps } from '../../composites/IconButton';

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

export interface IPopoverProps {
  /**
   * If true, the popover will be opened by default
   */
  defaultIsOpen?: boolean;
  /**
   * Whether the popover is opened. Useful for conrolling the open state
   */
  isOpen?: boolean;
  /**
   * Whether popover should trap focus.
   * @default true
   */
  trapFocus?: boolean;
  /**
   * Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.
   * @default true
   */
  shouldFlip?: boolean;
  /**
   * The ref of element to receive focus when the popover opens.
   */
  initialFocusRef?: any;
  /**
   * The ref of element to receive focus when the modal closes.
   */
  finalFocusRef?: any;
  /**
   * Function that returns a React Element. This element will be used as a Trigger for the popover
   */
  trigger: (_props: any, state: { open: boolean }) => JSX.Element;
  /**
   * The additional offset applied along the cross axis between the element and its trigger element.
   */
  crossOffset?: number;
  /**
   * The additional offset applied along the main axis between the element and its trigger element.
   */
  offset?: number;
  /**
   * Determines whether menu content should overlap with the trigger
   * @default false
   */
  shouldOverlapWithTrigger?: boolean;
  /**
   * Popover children
   */
  children: React.ReactNode;
  /**
   * If true, the modal will close when Escape key is pressed
   * @default true
   */
  isKeyboardDismissable?: boolean;
  /**
   * Popover placement
   * @default bottom
   */
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
  /**
   * This function will be invoked when popover is closed. It'll also be called when user attempts to close the popover via Escape key or backdrop press.
   */
  onClose?: () => void;
  /**
   * This function will be invoked when popover is opened
   */
  onOpen?: () => void;
}

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

export interface IPopoverContentProps extends IBoxProps {}

export type IPopoverComponentType = ((
  props: IPopoverProps & { ref?: any }
) => JSX.Element & { ref?: any }) & {
  Body: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  CloseButton: React.MemoExoticComponent<
    (props: Omit<IIconButtonProps, 'icon'> & { ref?: any }) => JSX.Element
  >;
  Content: React.MemoExoticComponent<
    (props: IPopoverContentProps & { ref?: any }) => JSX.Element
  >;
  Footer: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  Header: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  Arrow: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
};
