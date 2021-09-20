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
  extends PlatformProps<IImageProps>,
    Omit<
      ImageProps,
      | 'borderRadius'
      | 'borderTopLeftRadius'
      | 'borderTopRightRadius'
      | 'borderBottomLeftRadius'
      | 'borderBottomRightRadius'
      | 'height'
      | 'width'
      | 'source'
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
  /**
   * specify a source for image.
   */
  source?: ImageSourcePropType;
  /**
   * The alt text that describes the image. This will be added as accessibilityLabel in android/iOS and alt on web
   */
  alt?: string;
  /**
   * In event there was an error loading the src, specify a fallback source.
   */
  fallbackSource?: ImageSourcePropType;
  /**
   * Opt out of the fallbackSource logic and show alternative text
   */
  ignoreFallback?: boolean;
  /**
   * Text styling for alt.
   */
  _alt?: ITextProps;
  /**
   * In event there was an error loading the src, specify a fallback JSX Element.
   */
  fallbackElement?: JSX.Element | JSX.Element[];
  /**
   * specify a source for image.
   */
  src?: string;
}
