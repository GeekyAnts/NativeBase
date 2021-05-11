import type {
  ImageProps as RNImageProps,
  ImageSourcePropType,
} from 'react-native';
import type { ITextProps } from '../../primitives';
import type {
  FlexboxProps,
  SpaceProps,
  LayoutProps,
  ExtraProps,
  ShadowProps,
  BorderProps,
  PositionProps,
  PlatformProps,
} from '../../types';

export type IImageProps = PlatformProps &
  RNImageProps &
  LayoutProps &
  SpaceProps &
  FlexboxProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  PositionProps &
  FlexboxProps &
  BorderProps &
  ExtraProps &
  BorderProps &
  ShadowProps &
  LayoutProps &
  PositionProps & {
    alt: string;
    fallbackSource?: ImageSourcePropType;
    ignoreFallback?: boolean;
    _alt?: ITextProps;
  };
