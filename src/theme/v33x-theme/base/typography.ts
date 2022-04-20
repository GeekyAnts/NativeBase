const typography = {
  letterSpacings: {
    'xs': '-0.05em',
    'sm': '-0.025em',
    'md': 0,
    'lg': '0.025em',
    'xl': '0.05em',
    '2xl': '0.1em',
  },
  lineHeights: {
    '2xs': '1em',
    'xs': '1.125em',
    'sm': '1.25em',
    'md': '1.375em',
    'lg': '1.5em',
    'xl': '1.75em',
    '2xl': '2em',
    '3xl': '2.5em',
    '4xl': '3em',
    '5xl': '4em',
  },
  fontConfig: {
    //   Roboto: {
    //     100: {
    //       normal: 'Roboto-Light',
    //       italic: 'Roboto-LightItalic',
    //     },
    //     200: {
    //       normal: 'Roboto-Light',
    //       italic: 'Roboto-LightItalic',
    //     },
    //     300: {
    //       normal: 'Roboto-Light',
    //       italic: 'Roboto-LightItalic',
    //     },
    //     400: {
    //       normal: 'Roboto-Regular',
    //       italic: 'Roboto-Italic',
    //     },
    //     500: {
    //       normal: 'Roboto-Medium',
    //       italic: 'Roboto-MediumItalic',
    //     },
    //     600: {
    //       normal: 'Roboto-Medium',
    //       italic: 'Roboto-MediumItalic',
    //     },
    //     700: {
    //       normal: 'Roboto-Bold',
    //       italic: 'Roboto-BoldItalic',
    //     },
    //     800: {
    //       normal: 'Roboto-Bold',
    //       italic: 'Roboto-BoldItalic',
    //     },
    //     900: {
    //       normal: 'Roboto-Bold',
    //       italic: 'Roboto-BoldItalic',
    //     },
    //   },
    //   Montserrat: {
    //     100: {
    //       normal: 'Montserrat-Light',
    //       italic: 'Montserrat-LightItalic',
    //     },
    //     200: {
    //       normal: 'Montserrat-Light',
    //       italic: 'Montserrat-LightItalic',
    //     },
    //     300: {
    //       normal: 'Montserrat-Light',
    //       italic: 'Montserrat-LightItalic',
    //     },
    //     400: {
    //       normal: 'Montserrat-Regular',
    //       italic: 'Montserrat-Italic',
    //     },
    //     500: {
    //       normal: 'Montserrat-Medium',
    //       italic: 'Montserrat-MediumItalic',
    //     },
    //     600: {
    //       normal: 'Montserrat-SemiBold',
    //       italic: 'Montserrat-SemiBoldItalic',
    //     },
    //     700: {
    //       normal: 'Montserrat-Bold',
    //       italic: 'Montserrat-BoldItalic',
    //     },
    //     800: {
    //       normal: 'Montserrat-ExtraBold',
    //       italic: 'Montserrat-ExtraBoldItalic',
    //     },
    //     900: {
    //       normal: 'Montserrat-Black',
    //       italic: 'Montserrat-BlackItalic',
    //     },
    //   },
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
    extraBlack: 950,
  },
  fonts: {
    heading: undefined,
    body: undefined,
    mono: undefined,
  },
  fontSizes: {
    '2xs': 10,
    'xs': 12,
    'sm': 14,
    'md': 16,
    'lg': 18,
    'xl': 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },
};

export type ITypography = typeof typography;
export type IFontSize = keyof typeof typography.fontSizes;
export type ILetterSpacing = keyof typeof typography.letterSpacings;
export type ILineHeight = keyof typeof typography.lineHeights;
export type IFontWeight = keyof typeof typography.fontWeights;
// export type IFont = typeof typography.fonts;
export interface IFont {
  heading?: string;
  body?: string;
  mono?: string;
}

export default typography;
