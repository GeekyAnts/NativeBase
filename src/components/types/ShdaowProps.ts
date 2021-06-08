import type * as CSS from 'csstype';
import type { ResponsiveValue } from 'styled-system';
import type { ThemeValue } from './theme';

export interface ShadowProps<ThemeType> {
  /**
   * The `box-shadow` property
   */
  //@ts-ignore
  shadow?: ThemeValue<'shadows', ThemeType>;
}
