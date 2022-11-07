import base from './base';
import components from './components';
import * as tools from './tools';
import type { StyledProps } from '../theme/types';
//@ts-ignore
import type { ColorModeOptions } from './../core/color-mode/types';
export interface ComponentTheme {
  baseStyle?: ((props: any) => StyledProps) | StyledProps;
  sizes?: Record<string, ((props: any) => StyledProps) | StyledProps>;
  variants?: Record<string, ((props: any) => StyledProps) | StyledProps>;
  defaultProps?: Record<string, any>;
}
const config: ColorModeOptions = {
  useSystemColorMode: false, // TODO: implement this
  initialColorMode: 'light',
  accessibleColors: false,
};

const theme = {
  ...base,
  components,
  config,
};

export type Theme = typeof theme & { fontConfig: any };

export interface ICustomTheme {}

export interface ITheme extends ICustomTheme, Omit<Theme, keyof ICustomTheme> {}

export { theme, tools as themeTools };

export { getColor } from './styled-system';
export * from './v33x-theme';
