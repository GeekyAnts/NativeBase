import type { TextStyle } from 'react-native';

import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  ExtraProps,
  OutlineProps,
  ShadowProps,
  BackgroundProps,
  SafeAreaProps,
  TransformProps,
  PlatformProps,
} from '../../types';

export interface IIconProps
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps,
    ExtraProps,
    OutlineProps,
    ShadowProps,
    BackgroundProps,
    SafeAreaProps,
    TransformProps,
    PlatformProps {
  // name?: IconNameType;
  // type?: IconType;
  as?: any;
  style?: TextStyle;
  viewBox?: string;
  size?: string | number;
  color?: string;
  focusable?: boolean;
  children?: JSX.Element[] | JSX.Element;
  stroke?: string;
  strokeWidth?: string;
}

export type ICreateIconProps = {
  viewBox?: string;
  path?: JSX.Element[] | JSX.Element;
  d?: string;
};
