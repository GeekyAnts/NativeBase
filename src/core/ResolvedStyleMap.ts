import type { ColorMode } from './color-mode';

// Adding Map for storing the props and style for the styled component
let resolvedStyledMap: Map<string, any> = new Map();

export const init = () => {
  resolvedStyledMap = new Map();
};

export const get = (key: string) => {
  resolvedStyledMap.get(key);
};
export const getResolvedStyleSheet = (key: string, colorMode?: ColorMode) => {
  const styleObj: any = get(key);
  if (!colorMode) {
    return null;
  }
  return styleObj[colorMode]?.style;
};
export const set = (key: string, value: any, colorMode: string) => {
  const styledMap = resolvedStyledMap.get(key);
  if (!styledMap) {
    resolvedStyledMap.set(key, {
      [colorMode]: [value],
    });
  } else {
    if (!styledMap[colorMode]) {
      styledMap[colorMode] = [];
    }
    styledMap[colorMode].push(value);
  }
};

export const log = () => {
  console.log(resolvedStyledMap);
};
