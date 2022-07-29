import { useTheme } from './useTheme';
import get from 'lodash.get';

export function useToken<T extends string | number>(
  property: string,
  token: T | T[],
  fallback?: T | T[],
  config?: { component: string; property: string }
) {
  const theme = useTheme();
  if (Array.isArray(token)) {
    let fallbackArr: T[] = [];
    if (fallback) {
      fallbackArr = Array.isArray(fallback) ? fallback : [fallback];
    }
    return token.map((innerToken, index) => {
      const path = `${property}.${innerToken}`;
      return get(theme, path, fallbackArr[index] ?? innerToken);
    });
  }

  if (config?.component && config?.property) {
    const componentThemePath = `components.${config.component}.${config?.property}.${token}`;
    const tokenizedThemeValue = get(
      theme,
      componentThemePath,
      fallback ?? token
    );

    const path = `${property}.${tokenizedThemeValue}`;
    const tokenizedValue = get(theme, path, fallback ?? token);

    return tokenizedValue;
  }

  const path = `${property}.${token}`;
  return get(theme, path, fallback ?? token);
}
