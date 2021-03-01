import Color from 'tinycolor2';
import { useToken } from './../../hooks/useToken';

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
