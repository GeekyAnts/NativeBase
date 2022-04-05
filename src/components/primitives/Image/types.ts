import type { ImageProps, ImageSourcePropType } from 'react-native';
import type { StyledProps } from '../../../theme/types';
import type { ITextProps } from '../../primitives';
import type { CustomProps, PlatformProps } from '../../types';

export interface InterfaceImageProps
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
    StyledProps {
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
  _alt?: Partial<ITextProps>;
  /**
   * In event there was an error loading the src, specify a fallback JSX Element.
   */
  fallbackElement?: JSX.Element | JSX.Element[];
  /**
   * specify a source for image.
   */
  src?: string;
}

export type IImageProps = InterfaceImageProps & CustomProps<'Image'>;
