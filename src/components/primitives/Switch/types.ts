import type { SwitchProps, ViewStyle } from 'react-native';
import type {
  ColorProps,
  FlexboxProps,
  SpaceProps,
  BorderProps,
  BackgroundProps,
  OutlineProps,
  LayoutProps,
  ExtraProps,
  ShadowProps,
  PositionProps,
} from '../../types';
import type { IAccessibilityProps } from '../../../utils/accessibilityTypes';

export type ISwitchProps = SwitchProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  PositionProps &
  BorderProps &
  ExtraProps &
  OutlineProps &
  ShadowProps &
  LayoutProps &
  BackgroundProps &
  IAccessibilityProps &
  BorderProps & {
    style?: ViewStyle;
    size?: 'lg' | 'md' | 'sm';
    isDisabled?: boolean;
    name?: string;
    onToggle?: any;
    isChecked?: boolean;
    defaultIsChecked?: boolean;
    isInvalid?: boolean;
    onTrackColor?: string;
    offTrackColor?: string;
    onThumbColor?: string;
    offThumbColor?: string;
    activeThumbColor?: string;
    colorScheme?: string;
    _hover?: any;
  };
