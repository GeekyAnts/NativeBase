import type { ScrollViewProps, ViewStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import type { IBoxProps } from '../Box';
import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customTypographyProps,
} from '../../../utils/customProps';
import type { IIconProps } from '../Icon/types';

export type IListProps = ScrollViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  TypographyProps &
  customTypographyProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
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
  fontSize?: any;
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
