import type { Properties as CSSProperties } from 'csstype';
import type { ResponsiveValue } from '../components/types/responsiveValue';
import type { ColorType } from '../components/types/utils';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { ITheme } from './index';
import type { StyledPropConfig } from './styled-system';

type RNStyles = ViewStyle & ImageStyle & TextStyle;

type GetThemeScaleValues<T extends keyof ITheme> = 'colors' extends T
  ? ColorType
  : ResponsiveValue<keyof ITheme[T] | (string & {}) | (number & {})>;

type GetRNStyles<key, scale = null> = scale extends keyof ITheme
  ? GetThemeScaleValues<scale>
  : key extends keyof CSSProperties
  ? ResponsiveValue<CSSProperties[key]>
  : key extends keyof RNStyles
  ? ResponsiveValue<RNStyles[key]>
  : unknown;

type AllProps<T extends StyledPropConfig> = {
  [key in Extract<keyof T, string>]?: T[key] extends boolean
    ? GetRNStyles<key>
    : key extends 'shadow'
    ? GetRNStyles<null, 'shadows'>
    : T[key] extends { property: any; scale: any }
    ? GetRNStyles<T[key]['property'], T[key]['scale']>
    : T[key] extends { properties: any; scale: any }
    ? T[key]['properties'] extends { '0': string }
      ? GetRNStyles<T[key]['properties']['0'], T[key]['scale']>
      : unknown
    : unknown;
};

export type StyledProps = AllProps<StyledPropConfig>;
