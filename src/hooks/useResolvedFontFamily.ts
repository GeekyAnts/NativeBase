import { useTheme } from './useTheme';

type IUseResolvedFontFamily = {
  fontFamily: string;
  fontStyle: string;
  fontWeight: string | number;
};

// Android doesn't support fontWeight or fontStyle properties. So, we pass fontFamily instead.
export function useResolvedFontFamily(props: IUseResolvedFontFamily) {
  const { fontFamily, fontStyle = 'normal', fontWeight = 400 } = props;

  const { fontConfig, fontWeights, fonts } = useTheme();
  if (fontFamily in fonts) {
    const fontToken = fonts[fontFamily];
    if (fontConfig && fontConfig[fontToken]) {
      // fontWeights are also specified using "400"
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
