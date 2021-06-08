import type { ThemeValue } from './theme';

export interface ShadowProps<ThemeType> {
  /**
   * The `box-shadow` property
   */
  //@ts-ignore
  shadow?: ThemeValue<'shadows', ThemeType>;
}
