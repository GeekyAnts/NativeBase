import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  PositionProps,
} from 'styled-system';
import type { ViewProps } from 'react-native';
import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
  customTypographyProps,
  customTransformProps,
  customFlexboxProps,
  customPositionProps,
  SafeAreaProps,
} from '../../../utils/customProps';

export type IPressableProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customTypographyProps &
  customBackgroundProps &
  customTransformProps &
  customFlexboxProps &
  customPositionProps &
  BorderProps &
  SafeAreaProps & {
    children?: any;
  };
