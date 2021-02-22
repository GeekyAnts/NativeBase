import type { IBoxProps, ITextProps } from '../../primitives';
import type { ViewStyle } from 'react-native';

type sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ICircularProgressProps = IBoxProps & {
  style?: ViewStyle;
  children?: JSX.Element | JSX.Element[];
  value: number;
  size?: number | sizes;
  thickness?: number;
  color?: string;
  trackColor?: string;
  isIndeterminate?: any;
  max?: number;
  min?: number;
};

export type ICircularProgressComponentType = ((
  props: ICircularProgressProps
) => JSX.Element) & {
  Label: React.MemoExoticComponent<(props: ITextProps) => JSX.Element>;
};
