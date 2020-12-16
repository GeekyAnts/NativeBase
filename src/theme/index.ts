import darkTheme from './darkTheme';
import base from './base';
import components from './components';
import * as tools from './tools';
export interface ColorModeOptions {
  initialColorMode?: 'light' | 'dark';
  useSystemColorMode?: boolean;
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
