import type { ImageProps, ImageSourcePropType } from 'react-native';
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

export interface IImageProps
  extends PlatformProps,
    Omit<
      ImageProps,
      | 'borderRadius'
      | 'borderTopLeftRadius'
      | 'borderTopRightRadius'
      | 'borderBottomLeftRadius'
      | 'borderBottomRightRadius'
      | 'height'
      | 'width'
    >,
    LayoutProps,
    SpaceProps,
    FlexboxProps,
    SpaceProps,
    LayoutProps,
    PositionProps,
    PositionProps,
    FlexboxProps,
    ExtraProps,
    BorderProps,
    ShadowProps,
    LayoutProps,
    PositionProps {
  alt: string;
  fallbackSource?: ImageSourcePropType;
  ignoreFallback?: boolean;
  _alt?: ITextProps;
}
