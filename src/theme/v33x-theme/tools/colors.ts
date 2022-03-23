import get from 'lodash.get';
import isEmpty from 'lodash.isempty';
import Color from 'tinycolor2';
import type { Dict } from './utils';

export function mode(light: any, dark: any) {
  return (props: any) => (props.colorMode === 'dark' ? dark : light);
}

export const transparentize = (color: string, opacity: number) => (
  theme: Dict
) => {
  const raw = getColor(theme, color);
  return Color(raw).setAlpha(opacity).toRgbString();
};

export const getColor = (theme: Dict, color: string, fallback?: string) => {
  const hex = get(theme, `colors.${color}`, color);
  const isValid = Color(hex).isValid();
  return isValid ? hex : fallback;
};

export const tone = (color: string) => (theme: Dict) => {
  const hex = getColor(theme, color);
  const isDark = Color(hex).isDark();
  return isDark ? 'dark' : 'light';
};

export const isDark = (color: string) => (theme: Dict) =>
  tone(color)(theme) === 'dark';

export const isLight = (color: string) => (theme: Dict) =>
  tone(color)(theme) === 'light';

interface RandomColorOptions {
  /**
   * If passed, string will be used to generate
   * random color
   */
  string?: string;
  /**
   * List of colors to pick from at random
   */
  colors?: string[];
}
export function randomColor(opts?: RandomColorOptions) {
  const fallback = Color.random().toHexString();

  if (!opts || isEmpty(opts)) {
    return fallback;
  }

  if (opts.string && opts.colors) {
    return randomColorFromList(opts.string, opts.colors);
  }

  if (opts.string && !opts.colors) {
    return randomColorFromString(opts.string);
  }

  if (opts.colors && !opts.string) {
    return randomFromList(opts.colors);
  }

  return fallback;
}

function randomFromList(list: string[]) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomColorFromList(str: string, list: string[]) {
  let index = 0;
  if (str.length === 0) return list[0];
  for (let i = 0; i < str.length; i++) {
    index = str.charCodeAt(i) + ((index << 5) - index);
    index = index & index;
  }
  index = ((index % list.length) + list.length) % list.length;
  return list[index];
}

function randomColorFromString(str: string) {
  let hash = 0;
  if (str.length === 0) return hash.toString();
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  let color = '#';
  for (let j = 0; j < 3; j++) {
    const value = (hash >> (j * 8)) & 255;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}
