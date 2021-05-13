import type { ViewStyle } from 'react-native';
import type { ITextProps } from '../../primitives/Text';
import type { IBoxProps } from '../../primitives/Box';
import type { IPressableProps } from 'src/components/primitives/Pressable';

export interface IMenuProps extends IBoxProps {
  /**
   * Function that returns a React Element. This element will be used as a Trigger for the menu
   */
  trigger: (_props: any, state: { open: boolean }) => JSX.Element;
  /**
   * This function will be invoked when menu is opened
   */
  onOpen?: () => void;
  /**
   * This function will be invoked when menu is closed. It'll also be called when user attempts to close the menu via Escape key or backdrop press.
   */
  onClose?: () => void;
  /**
   * Whether menu should be closed when a menu item is pressed
   * @default true
   */
  closeOnSelect?: boolean;
  /**
   * If true, the menu will be opened by default
   */
  defaultIsOpen?: boolean;
  /**
   * Whether the menu is opened. Useful for conrolling the open state
   */
  isOpen?: boolean;
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
   * menu placement
   * @default 'bottom left'
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
   * Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.
   * @default true
   */
  shouldFlip?: boolean;
}

export type IMenuItemProps = IPressableProps & {
  children: string | JSX.Element | Array<JSX.Element>;
  isDisabled?: boolean;
  style?: ViewStyle;
  _text?: ITextProps;
  textValue?: string;
};

export type IMenuItemOptionProps = IMenuItemProps & {
  value: string | number;
};
export type IMenuGroupProps = {
  title: string;
  children: JSX.Element | Array<JSX.Element>;
  _title?: ITextProps;
};

export type IMenuContextProps = {
  closeMenu?: () => void;
  open?: boolean;
  closeOnSelect?: boolean;
};

export type IMenuOptionGroupProps = IMenuGroupProps & {
  type: 'radio' | 'checkbox';
  defaultValue?: string | number | Array<string> | Array<number>;
  value?: string | number | Array<string> | Array<number>;
  onChange?: (val: any) => void;
};

export type IMenuOptionContextProps = {
  values: Array<string | number>;
  onChange: (val: string | number) => void;
  type: 'radio' | 'checkbox';
};

export type IMenuComponent = ((
  props: IMenuProps & { ref?: any }
) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (props: IMenuItemProps & { ref?: any }) => JSX.Element
  >;
  Group: React.MemoExoticComponent<
    (props: IMenuGroupProps & { ref?: any }) => JSX.Element
  >;
  ItemOption: React.MemoExoticComponent<
    (props: IMenuItemOptionProps & { ref?: any }) => JSX.Element
  >;
  OptionGroup: React.MemoExoticComponent<
    (props: IMenuOptionGroupProps & { ref?: any }) => JSX.Element
  >;
};
