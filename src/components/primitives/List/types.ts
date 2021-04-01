import type { ViewStyle } from 'react-native';
import type { IStackProps } from '../Stack';
import type { IBoxProps } from '../Box';
import type { IIconProps } from '../Icon/types';

export type IListProps = IStackProps & {
  style?: ViewStyle;
  spacing?: number;
  children: JSX.Element[] | JSX.Element;
  unordered?: boolean;
  ul?: boolean;
  ordered?: boolean;
  ol?: boolean;
  _hover?: any;
  start?: number;
  _text?: any;
};

export type IListItemProps = IBoxProps & {
  _hover?: any;
  unordered?: boolean;
  ul?: boolean;
  ordered?: boolean;
  ol?: boolean;
  index?: any;
  start?: number;
  _text?: any;
};
export type IListComponentType = ((
  props: IListProps & { ref?: any }
) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (props: IListItemProps & { ref?: any }) => JSX.Element
  >;
  Icon: React.MemoExoticComponent<
    (props: IIconProps & { ref?: any }) => JSX.Element
  >;
  Ordered: React.MemoExoticComponent<
    (props: IListProps & { ref?: any }) => JSX.Element
  >;
  Unordered: React.MemoExoticComponent<
    (props: IListProps & { ref?: any }) => JSX.Element
  >;
};
