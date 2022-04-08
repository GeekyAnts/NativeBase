import type { Leaves } from '../../theme/base/types';
import type { ComponentTheme, ITheme } from '../../theme';
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

export type ThemeComponentSizeType<
  Component extends keyof ITheme['components']
> = 'sizes' extends keyof ITheme['components'][Component]
  ? keyof ITheme['components'][Component]['sizes'] | (string & {})
  : never;

export type CombinedSizeType<Component extends keyof ITheme['components']> =
  | SizeType
  | ThemeComponentSizeType<Component>;

export type ColorType = ResponsiveValue<
  Leaves<ITheme['colors']> | (string & {})
>;

type ComponentType<T extends keyof ITheme['components']> = {
  [Property in keyof ITheme['components'][T]]: ITheme['components'][T][Property];
};

type ParametersOf<T> = {
  [Key in keyof T]: T[Key] extends (...args: any) => void
    ? Parameters<T[Key]>[0] extends {}
      ? Parameters<T[Key]>[0]
      : {}
    : {};
}[keyof T];

// type VariantParams<T extends keyof ITheme['components']> = ParametersOf<
//   //@ts-ignore
//   ComponentType<T>['variants']
// >;

// type PickedVariantParams<T extends keyof ITheme['components']> = Pick<
//   VariantParams<T>,
//   keyof VariantParams<T>
// >;
type ParameterType<T, Key> = ParametersOf<
  //@ts-ignore
  ComponentType<T>[Key]
>;
type CustomPropType<T extends keyof ITheme['components'], Key> = Extract<
  ParameterType<T, Key>,
  Pick<ParameterType<T, Key>, keyof ParameterType<T, Key>>
>;

// export type CustomProps<T extends keyof ITheme['components']> =
//   | CustomPropType<T, 'variants'>
//   | CustomPropType<T, 'baseStyle'>
//   | CustomPropType<T, 'sizes'>
//   | CustomPropType<T, 'defaultProps'>;

export type CustomComponentProps<
  T extends keyof ITheme['components']
> = Partial<
  Exclude<
    {
      [Key in keyof ComponentTheme]: CustomPropType<T, Key>;
    }[keyof ComponentTheme],
    undefined
  >
>;
export type CustomProps<
  T extends keyof ITheme['components']
> = CustomComponentProps<T> extends never
  ? {}
  : // : CustomComponentProps<T> extends Record<string, any>
    // ? {}
    UnionToIntersection<CustomComponentProps<T>> & {};

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;
