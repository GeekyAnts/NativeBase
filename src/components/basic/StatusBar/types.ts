import type { StatusBarProps } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  ExtraProps,
  OutlineProps,
  ShadowProps,
  BackgroundProps,
  SafeAreaProps,
  TransformProps,
} from '../../types';

export interface IStatusBarProps
  extends StatusBarProps,
    Omit<ColorProps, 'backgroundColor'>,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
    BorderProps,
    ExtraProps,
    OutlineProps,
    ShadowProps,
    Omit<BackgroundProps, 'backgroundColor'>,
    SafeAreaProps,
    TransformProps {}
