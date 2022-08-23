import { theme as defaultTheme, Theme } from './../theme';
import mergeWith from 'lodash.mergewith';
import omit from 'lodash.omit';

function isFunction(value: any): boolean {
  return typeof value === 'function';
}

type ThemeUtil = Theme | (Record<string, any> & {});

export function extendTheme<T extends ThemeUtil>(
  overrides: T,
  ...restOverrides: T[]
) {
  function customizer(source: any, override: any) {
    if (source && source.hasOwnProperty('_light')) {
      resolveColorModeStyling(source, override, '_light');
    }
    if (source && source.hasOwnProperty('_dark')) {
      resolveColorModeStyling(source, override, '_dark');
    }
    if (isFunction(source)) {
      return (...args: any[]) => {
        const sourceValue = source(...args);
        const overrideValue = isFunction(override)
          ? override(...args)
          : override;
        if (sourceValue.hasOwnProperty('_light')) {
          resolveColorModeStyling(sourceValue, overrideValue, '_light');
        }
        if (sourceValue.hasOwnProperty('_dark')) {
          resolveColorModeStyling(sourceValue, overrideValue, '_dark');
        }
        return mergeWith({}, sourceValue, overrideValue, customizer);
      };
    }
    return undefined;
  }

  const finalOverrides = [overrides, ...restOverrides].reduce(
    (prevValue, currentValue) => {
      return mergeWith({}, prevValue, currentValue, customizer);
    },
    defaultTheme
  );

  return finalOverrides as T & Theme;
}

const resolveColorModeStyling = (
  sourceValue: any,
  overrideValue: any,
  colorMode: string
) => {
  if (overrideValue.hasOwnProperty(colorMode)) {
    const newOverRider = {
      ...omit(overrideValue, ['_light', '_dark']),
      ...overrideValue[colorMode],
    };
    mergeWith(sourceValue[colorMode], sourceValue[colorMode], newOverRider);
  } else {
    mergeWith(sourceValue[colorMode], sourceValue[colorMode], overrideValue);
  }
};
