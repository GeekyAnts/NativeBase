import get from 'lodash.get';
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
