import { useTheme } from './useTheme';
import get from 'lodash.get';

export function useToken<T extends string | number>(
  property: string,
  token: T | T[],
  fallback?: T | T[]
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

  const path = `${property}.${token}`;
  return get(theme, path, fallback ?? token);
}
