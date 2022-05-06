import base from './base';
import components from './components';
import * as tools from './tools';
//@ts-ignore
import type { ColorModeOptions } from './../core/color-mode/types';

const config: ColorModeOptions = {
  useSystemColorMode: false, // TODO: implement this
  initialColorMode: 'light',
  accessibleColors: false,
};

const v33xTheme = {
  ...base,
  components,
  config,
};

export type V33xTheme = typeof v33xTheme & { fontConfig: any };

export interface ICustomTheme {}

export interface IV33xTheme
  extends ICustomTheme,
    Omit<V33xTheme, keyof ICustomTheme> {}

export { v33xTheme, tools as themeTools };
