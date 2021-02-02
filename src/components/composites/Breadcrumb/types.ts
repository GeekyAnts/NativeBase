import type { ViewStyle } from 'react-native';
import type { IBoxProps, IFlexProps, ITextProps } from '../../primitives';

export type IBreadcrumbProps = IBoxProps &
  IFlexProps &
  ITextProps & {
    style?: ViewStyle;
    children?: JSX.Element[] | JSX.Element | any;
    spacing?: number;
    separator?: string | JSX.Element | JSX.Element[];
  };
