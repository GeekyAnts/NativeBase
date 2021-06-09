import type {
  ColorProps,
  SpaceProps,
  BorderProps,
  BackgroundColorProps,
  LayoutProps,
  ShadowProps,
  TypographyProps,
  FlexboxProps,
  PositionProps,
} from '../components/types';

export type FactoryComponentProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  BorderProps &
  FlexboxProps &
  BackgroundColorProps &
  BorderProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  TypographyProps & {
    children?: string | JSX.Element | JSX.Element[];
  };
