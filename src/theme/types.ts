import type { Properties as CSSProperties } from 'csstype';
import type { ResponsiveValue } from '../components/types/responsiveValue';
import type { ColorType } from '../components/types/utils';
import type { ViewStyle } from 'react-native';
import type { ITheme } from './base';
import type { StyledPropConfig } from './styled-system';

type RNStyles = ViewStyle;

type GetThemeScaleValues<T extends keyof ITheme> = 'colors' extends T
  ? ColorType
  : ResponsiveValue<keyof ITheme[T] | (string & {}) | (number & {})>;

type GetRNStyles<key, scale = null> = scale extends keyof ITheme
  ? GetThemeScaleValues<scale>
  : key extends keyof RNStyles
  ? RNStyles[key]
  : key extends keyof CSSProperties
  ? ResponsiveValue<CSSProperties[key]>
  : unknown;

type AllProps<T extends StyledPropConfig> = {
  [key in Extract<keyof T, string>]?: T[key] extends boolean
    ? GetRNStyles<key>
    : key extends 'shadow'
    ? GetRNStyles<null, 'shadows'>
    : 'property' extends keyof T[key]
    ? //@ts-ignore
      GetRNStyles<T[key]['property'], T[key]['scale']>
    : 'properties' extends keyof T[key]
    ? T[key]['properties'] extends { '0': string }
      ? //@ts-ignore
        GetRNStyles<T[key]['properties']['0'], T[key]['scale']>
      : unknown
    : unknown;
};

export type StyledProps = AllProps<StyledPropConfig>;
