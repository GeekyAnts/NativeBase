import type {
  ColorProps,
  SpaceProps,
  PositionProps,
  LayoutProps,
} from 'styled-system';
import type {
  customLayoutProps,
  customPositionProps,
} from '../../../utils/customProps';

export type ISpinnerProps = ColorProps &
  SpaceProps &
  LayoutProps &
  customLayoutProps &
  customPositionProps &
  PositionProps & {
    style?: any | undefined;
    size?: 'sm' | 'lg' | 'small' | 'large';
    accessibilityLabel?: string;
    variant?:
      | 'custom'
      | 'dotted'
      | 'multiColorDotted'
      | 'stroked'
      | 'squareDotted';
    duration?: number;
    renderProp?: JSX.Element | JSX.Element[];
  };
