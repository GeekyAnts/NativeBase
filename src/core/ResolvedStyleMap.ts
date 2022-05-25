import { map } from 'lodash';
import type { ColorMode } from './color-mode';

// Adding Map for storing the props and style for the styled component
let resolvedStyledMap: Map<string, any> = new Map();

export const init = () => {
  resolvedStyledMap = new Map();
  window['resolvedStyledMap'] = resolvedStyledMap;
};

export const get = (key: string) => {
  resolvedStyledMap.get(key);
};
export const getResolvedProps = (key: string, colorMode?: ColorMode) => {
  const styleObj: any = resolvedStyledMap.get(key);

  if (!colorMode || !styleObj) {
    return null;
  }
  return styleObj[colorMode]['styleFromProps'];
};
export const getResolvedStyleSheet = (key: string, colorMode?: ColorMode) => {
  const styleObj: any = resolvedStyledMap.get(key);

  if (!colorMode || !styleObj) {
    return null;
  }

  // console.log(map(styleObj[colorMode], 'style'), 'hello 111 style');

  return map(styleObj[colorMode], 'style');
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
