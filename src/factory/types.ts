import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  PositionProps,
  MarginProps,
  PaddingProps,
  BackgroundColorProps,
} from 'styled-system';

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
  customTransitionProps,
} from '../utils/customProps';

export type FactoryComponentProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  BorderProps &
  MarginProps &
  PaddingProps &
  BackgroundColorProps &
  FlexboxProps &
  customBackgroundProps &
  customBorderProps &
  customExtraProps &
  customFlexboxProps &
  customLayoutProps &
  customOutlineProps &
  customPositionProps &
  customShadowProps &
  customTransformProps &
  customTransitionProps &
  customTypographyProps & {
    children?: string | JSX.Element | JSX.Element[];
  };
