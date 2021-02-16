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
  start?: number;
};

export type IListItemProps = IBoxProps & {
  unordered?: boolean;
  ul?: boolean;
  ordered?: boolean;
  ol?: boolean;
  index?: any;
  start?: number;
};
export type IListComponentType = ((props: IListProps) => JSX.Element) & {
  Item: React.MemoExoticComponent<(props: IListItemProps) => JSX.Element>;
  Icon: React.MemoExoticComponent<(props: IIconProps) => JSX.Element>;
  Ordered: React.MemoExoticComponent<(props: IListProps) => JSX.Element>;
  Unordered: React.MemoExoticComponent<(props: IListProps) => JSX.Element>;
};
