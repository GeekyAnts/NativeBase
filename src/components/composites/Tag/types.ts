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
import type { IBoxProps } from '../../primitives/Box';

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
    variant?: 'solid' | 'subtle' | 'outline';
    colorScheme?: string;
    children?: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
    size?: string | number;
  };
