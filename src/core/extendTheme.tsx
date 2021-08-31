import { theme as defaultTheme, ITheme } from './../theme';
import mergeWith from 'lodash.mergewith';

function isFunction(value: any): boolean {
  return typeof value === 'function';
}
type IExtendThemeParam = ITheme | Record<string, any>;

export function extendTheme(
  overrides: IExtendThemeParam,
  ...restOverrides: IExtendThemeParam[]
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

  const finalOverrides = [overrides, ...restOverrides].reduce(
    (prevValue, currentValue) => {
      return mergeWith({}, prevValue, currentValue, customizer);
    },
    defaultTheme
  );

  return finalOverrides as ITheme;
}
