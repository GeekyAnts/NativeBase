import type { IBoxProps, ITextProps } from '../../primitives';
import type { ViewStyle } from 'react-native';
import type { ResponsiveValue } from '../../../components/types';
import type { ISizes } from '../../../theme/base/sizes';
import type { IColors } from '../../../theme/base/colors';

export type ICircularProgressProps = IBoxProps<ICircularProgressProps> & {
  style?: ViewStyle;
  children?: JSX.Element | JSX.Element[] | string;
  value: number;
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
  thickness?: number;
  colorScheme?: string;
  color?: ResponsiveValue<IColors | (string & {})>;
  trackColor?: ResponsiveValue<IColors | (string & {})>;
  isIndeterminate?: boolean;
  max?: number;
  min?: number;
  _text?: ITextProps;
};
