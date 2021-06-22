import type {
  ColorProps,
  SpaceProps,
  BorderProps,
  BackgroundProps,
  OutlineProps,
  LayoutProps,
  ExtraProps,
  ShadowProps,
  TypographyProps,
  TransformProps,
  FlexboxProps,
  PositionProps,
  TransitionProps,
} from '../components/types';

export type FactoryComponentProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  BorderProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  ExtraProps &
  FlexboxProps &
  LayoutProps &
  OutlineProps &
  PositionProps &
  ShadowProps &
  TransformProps &
  TransitionProps &
  TypographyProps & {
    children?: string | JSX.Element | JSX.Element[];
  };
