import type { ViewStyle } from 'react-native';

import type { IBoxProps, ITextProps, IFlexProps } from '../../primitives';

export type IBreadCrumbProps = IBoxProps &
  IFlexProps &
  ITextProps & {
    style?: ViewStyle;
    children?: JSX.Element[] | JSX.Element | any;
    spacing?: number;
    separator?: string | JSX.Element | JSX.Element[];
  };
