import Color from 'tinycolor2';
import { useToken } from './useToken';
import { useAccessibleColors } from '../core/color-mode/hooks';

export function useContrastText(bg: string, color?: string) {
  let [
    contrastThreshold,
    trueDarkText,
    trueLightText,
    trueBg,
    trueColor,
  ] = useToken('colors', [
    'contrastThreshold',
    'darkText',
    'lightText',
    bg,
    color ?? '',
  ]);

  let [accessibleColors] = useAccessibleColors();

  if (typeof bg !== 'string') {
    return;
  }

  const [bgThemeColorVariant, bgShade] = bg.split('.');

  const textColor =
    !accessibleColors &&
    bgThemeColorVariant &&
    themeColorsThresholdShades[bgThemeColorVariant]
      ? getContrastThemeColor(bgThemeColorVariant, bgShade)
      : getAccessibleContrastColor(
          contrastThreshold,
          trueDarkText,
          trueLightText,
          trueBg,
          trueColor,
          bg,
          color
        );

  return textColor;
}

function getContrastThemeColor(bgThemeColorVariant: string, bgShade: string) {
  let shadeThreshold = themeColorsThresholdShades[bgThemeColorVariant];
  if (
    bgShade &&
    shadeThreshold &&
    ((bgShade >= shadeThreshold && bgThemeColorVariant !== 'dark') ||
      (bgThemeColorVariant === 'dark' && bgShade < shadeThreshold))
  ) {
    return 'lightText';
  }
  return 'darkText';
}
function getAccessibleContrastColor(
  contrastThreshold: number,
  trueDarkText: string,
  trueLightText: string,
  trueBg: string,
  trueColor: string,
  bg: string,
  color?: string
) {
  if (typeof trueBg !== 'string') {
    trueBg = bg;
  }
  let trueContrastColor;
  let contrastColorToken;
  let darkTextConstrast = getContrastRatio(trueBg, trueDarkText);
  let lightTextConstrast = getContrastRatio(trueBg, trueLightText);

  if (
    darkTextConstrast >= contrastThreshold ||
    darkTextConstrast > lightTextConstrast
  ) {
    trueContrastColor = trueDarkText;
    contrastColorToken = 'darkText';
  } else {
    trueContrastColor = trueLightText;
    contrastColorToken = 'lightText';
  }

  if (process.env.NODE_ENV !== 'production') {
    const contrast = getContrastRatio(
      trueBg,
      trueColor ? trueColor : trueContrastColor
    );
    if (contrast < 3) {
      console.warn(
        [
          `NativeBase: The contrast ratio of ${contrast}:1 for ${
            color ? color : contrastColorToken
          } on ${bg}`,
          'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
          'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
        ].join('\n')
      );
    }
  }
  return contrastColorToken;
}
function getContrastRatio(foreground: string, background: string) {
  const lumA = Color(foreground).getLuminance();
  const lumB = Color(background).getLuminance();
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

const themeColorsThresholdShades: any = {
  rose: 900,
  pink: 900,
  fuchsia: 800,
  purple: 700,
  violet: 600,
  indigo: 500,
  blue: 400,
  lightBlue: 400,
  cyan: 300,
  teal: 300,
  emerald: 300,
  green: 400,
  lime: 600,
  yellow: 800,
  amber: 900,
  orange: 900,
  red: 900,
  warmGray: 500,
  trueGray: 500,
  gray: 500,
  coolGray: 500,
  blueGray: 500,
  dark: 500,
  danger: 900,
  error: 900,
  success: 400,
  warning: 900,
  muted: 500,
  primary: 500,
  info: 400,
  secondary: 500,
  light: 500,
};
