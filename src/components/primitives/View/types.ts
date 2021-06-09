import type { ViewProps } from 'react-native';
import type {
  ColorProps,
  SpaceProps,
  BorderProps,
  BackgroundColorProps,
  LayoutProps,
  ShadowProps,
  TypographyProps,
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
  ShadowProps &
  LayoutProps &
  TypographyProps &
  BackgroundColorProps &
  FlexboxProps &
  PositionProps &
  BorderProps &
  SafeAreaProps & {
    children?: any;
  };
