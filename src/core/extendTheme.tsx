import { theme as defaultTheme, ITheme } from './../theme';
import mergeWith from 'lodash.mergewith';

function isFunction(value: any): boolean {
  return typeof value === 'function';
}

export function extendTheme<T extends ITheme | Record<string, any>>(
  overrides: T
) {
  function customizer(source: any, override: any) {
    if (isFunction(source)) {
      return (...args: any[]) => {
        const sourceValue = source(...args);
        const overrideValue = isFunction(override)
          ? override(...args)
          : override;
        return mergeWith({}, sourceValue, overrideValue, customizer);
      };
    }
    return undefined;
  }

  return mergeWith({}, defaultTheme, overrides, customizer);
}
