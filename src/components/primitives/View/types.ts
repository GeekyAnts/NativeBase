import type { ViewProps } from 'react-native';
import type {
  ColorProps,
  SpaceProps,
  BorderProps,
  BackgroundProps,
  OutlineProps,
  LayoutProps,
  ExtraProps,
  ShadowProps,
  TypographyProps,
  TransformProps,
  FlexboxProps,
  PositionProps,
  SafeAreaProps,
} from '../../../components/types';

export type IViewProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  BorderProps &
  ExtraProps &
  OutlineProps &
  ShadowProps &
  LayoutProps &
  TypographyProps &
  BackgroundProps &
  TransformProps &
  FlexboxProps &
  PositionProps &
  BorderProps &
  SafeAreaProps & {
    children?: any;
  };
