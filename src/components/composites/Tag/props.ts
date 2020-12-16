import type { TextStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';
import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
} from '../../../utils/customProps';
import type { IBoxProps } from '../../primitives';

export type ITagProps = IBoxProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: TextStyle;
    ratio?: number;
    variant?: string | undefined;
    colorScheme?: string | undefined;
    children?: JSX.Element | JSX.Element[] | string;
    fontSize?: number | undefined;
    tagSize?: string | undefined;
    size?: string | number | undefined;
  };
