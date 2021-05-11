import type {
  ColorProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
} from '../../types';

export type ISpinnerProps = ColorProps &
  SpaceProps &
  LayoutProps &
  LayoutProps &
  PositionProps &
  PositionProps & {
    style?: any | undefined;
    size?: 'sm' | 'lg' | 'small' | 'large';
    accessibilityLabel?: string;
    // variant?:
    //   | 'custom'
    //   | 'dotted'
    //   | 'multiColorDotted'
    //   | 'stroked'
    //   | 'squareDotted';
    // duration?: number;
    // renderProp?: JSX.Element | JSX.Element[];
  };
