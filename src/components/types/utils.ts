//@ts-nocheck
import type { ITheme } from '../../theme';
import type { ResponsiveValue } from './responsiveValue';

export type VariantType<
  Component extends keyof ITheme['components']
> = 'variants' extends keyof ITheme['components'][Component]
  ? ResponsiveValue<
      keyof ITheme['components'][Component]['variants'] | (string & {})
    >
  : unknown;

export type SpaceType = ResponsiveValue<
  keyof ITheme['space'] | (string & {}) | number
>;

export type SizeType = ResponsiveValue<
  keyof ITheme['sizes'] | (string & {}) | number
>;

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

export type Leaves<T> = T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T]
  : '';

export type ColorType = ResponsiveValue<
  Leaves<ITheme['colors']> | (string & {})
>;
