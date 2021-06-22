import base from './base';
import components from './components';
import * as tools from './tools';
//@ts-ignore
import type { ColorModeOptions } from './../core/color-mode/types';
export interface ComponentTheme {
  baseStyle?: Record<string, any>;
  sizes?: Record<string, any>;
  variants?: Record<string, any>;
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

export type ITheme = typeof theme;
export { theme, tools as themeTools };
