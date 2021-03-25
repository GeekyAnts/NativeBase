import type { IBoxProps, ITextProps } from '../../primitives';
import type { ViewStyle } from 'react-native';

type sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ICircularProgressProps = IBoxProps & {
  style?: ViewStyle;
  children?: JSX.Element | JSX.Element[] | string;
  value: number;
  size?: number | sizes;
  thickness?: number;
  colorScheme?: string;
  color?: string;
  trackColor?: string;
  isIndeterminate?: any;
  max?: number;
  min?: number;
  _text?: ITextProps;
};
