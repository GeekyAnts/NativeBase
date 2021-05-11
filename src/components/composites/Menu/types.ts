import type { ViewStyle } from 'react-native';
import type { ITextProps } from '../../primitives/Text';
import type { IBoxProps } from '../../primitives/Box';
import type { IPopoverProps } from '../Popover';
import type { IPressableProps } from 'src/components/primitives/Pressable';

export type IMenuProps = IBoxProps & {
  trigger: (_props: any, state: { open: boolean }) => JSX.Element;
  children?: JSX.Element | Array<JSX.Element>;
  onOpen?: () => void;
  onClose?: () => void;
  offsetSpace?: number;
  closeOnSelect?: boolean;
  style?: ViewStyle;
  isOpen?: boolean;
} & IPopoverProps;

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
