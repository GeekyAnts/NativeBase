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
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: string | number;
}) {
  const { fontFamily, fontStyle = 'normal', fontWeight = 400 } = props;
  let newFontFamily = fontFamily;
  let newFontStyle = fontStyle;
  let newFontWeight = fontWeight;

  const { fontConfig, fontWeights, fonts } = useTheme();
  if (fontFamily && fontFamily in fonts) {
    const fontToken = fonts[fontFamily];

    if (fontConfig && fontConfig[fontToken]) {
      // If a custom font family is resolved, set fontWeight and fontStyle to undefined.
      // https://github.com/GeekyAnts/NativeBase/issues/3811
      // On Android, If a fontFamily and fontWeight both are passed, it behaves in a weird way and applies system fonts with passed fontWeight. This happens only for some fontWeights e.g. '700' or 'bold'. So, if we find a custom fontFamily, we remove fontWeight and fontStyle
      //@ts-ignore
      newFontWeight = undefined;
      //@ts-ignore
      newFontStyle = undefined;

      let fontWeightNumber =
        fontWeight in fontWeights ? fontWeights[fontWeight] : fontWeight;
      let fontVariant = fontConfig[fontToken][fontWeightNumber];

      if (typeof fontVariant === 'object') {
        if (fontVariant[fontStyle]) newFontFamily = fontVariant[fontStyle];
      } else {
        newFontFamily = fontVariant;
      }
    } else {
      newFontFamily = fonts[fontFamily];
    }
  }

  return {
    fontFamily: newFontFamily,
    fontWeight: newFontWeight,
    fontStyle: newFontStyle,
  };
}
