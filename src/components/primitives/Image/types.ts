import type {
  ImageProps as RNImageProps,
  ImageSourcePropType,
} from 'react-native';
import type { ITextProps } from '../../primitives';
import type {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  PositionProps,
  BorderRadiusProps,
} from 'styled-system';
import type {
  customLayoutProps,
  customExtraProps,
  customShadowProps,
  customBorderProps,
  customPositionProps,
} from '../../../utils/customProps';

export type IImageProps = RNImageProps &
  LayoutProps &
  SpaceProps &
  BorderRadiusProps &
  FlexboxProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  customPositionProps &
  FlexboxProps &
  BorderProps &
  customExtraProps &
  customBorderProps &
  customShadowProps &
  customLayoutProps &
  PositionProps & {
    alt: string;
    fallbackSource?: ImageSourcePropType;
    ignoreFallback?: boolean;
    _alt?: ITextProps;
  };
