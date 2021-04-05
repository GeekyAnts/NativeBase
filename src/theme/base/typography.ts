const typography = {
  letterSpacings: {
    'xxs': -1.5,
    'xs': -0.5,
    'sm': 0,
    'md': 0.1,
    'lg': 0.15,
    'xl': 0.25,
    '2xl': 0.4,
    '3xl': 0.5,
    '4xl': 1.25,
    '5xl': 1.5,
  },
  lineHeights: {
    'none': 1,
    'shorter': 1.25,
    'short': 1.375,
    'base': 1.5,
    'tall': 1.625,
    'taller': '2',
    '3': '12px',
    '4': '16px',
    '5': '20px',
    '6': '24px',
    '7': '28px',
    '8': '32px',
    '9': '36px',
    '10': '40px',
  },
  customFonts: {
    Roboto: {
      100: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
      600: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
      700: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
      800: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
      900: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
    },
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
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'monospace',
  },
  fontSizes: {
    'xxs': 10,
    'xs': 12,
    'sm': 14,
    'md': 16,
    'lg': 20,
    'xl': 24,
    '2xl': 24,
    '3xl': 34,
    '4xl': 48,
    '5xl': 60,
    '6xl': 96,
  },
};

export type ITypography = typeof typography;

export default typography;
