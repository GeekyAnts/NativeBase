import darkTheme from './darkTheme';
import base from './base';
import components from './components';
import * as tools from './tools';
import type { ColorModeOptions } from './../core/color-mode/types';
export interface ComponentTheme {
  baseStyle?: Record<string, any>;
  sizes?: Record<string, any>;
  variants?: Record<string, any>;
  defaultProps?: Record<string, any>;
}
const config: ColorModeOptions = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};
const theme = {
  ...base,
  components,
  config,
};

export type ITheme = typeof theme;
export { theme, darkTheme, tools as themeTools };
