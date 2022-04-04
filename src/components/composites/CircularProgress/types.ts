import type { ITextProps } from '../../primitives';
import type { ViewStyle } from 'react-native';
import type { CustomProps, ResponsiveValue } from '../../../components/types';
import type { ISizes } from '../../../theme/base/sizes';
import type { IColors } from '../../../theme/base/colors';
import type { InterfaceBoxProps } from '../../../components/primitives/Box/types';

export type InterfaceCircularProgressProps = InterfaceBoxProps<ICircularProgressProps> & {
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

export type ICircularProgressProps = InterfaceCircularProgressProps &
  CustomProps<'CircularProgress'>;
