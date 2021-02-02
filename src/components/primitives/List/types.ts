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
