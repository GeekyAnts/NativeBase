import type { SectionListProps } from 'react-native';
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
  PlatformProps,
} from '../../types';

// TODO: any need to fixed
export interface ISectionListProps
  extends SectionListProps<any, any>,
    ColorProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
    BorderProps,
    ExtraProps,
    OutlineProps,
    ShadowProps,
    BackgroundProps,
    SafeAreaProps,
    TransformProps,
    PlatformProps {}
