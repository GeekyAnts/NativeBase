import { useTheme } from './useTheme';

/**
 *
 * @param props
 * @returns resolved fontFamily
 * @description Combination of fontWeight, fontStyle and font family is fully supported on web but on Android we need to pass the exact font family.
 * for e.g. If we load Roboto-Light-Italic.ttf using css, we can use fontFamily: Roboto, fontWeight: 300, fontStyle: italic on web, but same may not work on all the platforms. Other platform needs to set fontFamily: Roboto-Light-Italic in order to work.
 * So this function's purpose is to intake styles like fontFamily: Roboto, fontWeight: 300, fontStyle: Italic and return fontFamily: Roboto-Light-Italic depending upon the fontConfig token in typography theme.
 * This function depends upon fontConfig token in typography for mapping.
 */
export function useResolvedFontFamily(props: {
  fontFamily: string;
  fontStyle: string;
  fontWeight: string | number;
}) {
  const { fontFamily, fontStyle = 'normal', fontWeight = 400 } = props;

  const { fontConfig, fontWeights, fonts } = useTheme();
  if (fontFamily in fonts) {
    const fontToken = fonts[fontFamily];
    if (fontConfig && fontConfig[fontToken]) {
      const parsedFontWeight = parseInt(fontWeight as any);
      let fontWeightNumber = Number.isNaN(parsedFontWeight)
        ? fontWeights[fontWeight]
        : fontWeight;
      let fontVariant = fontConfig[fontToken][fontWeightNumber];

      if (typeof fontVariant === 'object') {
        if (fontVariant[fontStyle]) return fontVariant[fontStyle];
      } else {
        return fontVariant;
      }
    }
    return fonts[fontFamily];
  }

  return fontFamily;
}
