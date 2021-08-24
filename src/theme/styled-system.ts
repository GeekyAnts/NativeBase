import { StyleSheet } from 'react-native';
import { get } from 'lodash';
import { resolveValueWithBreakpoint } from '../hooks/useThemeProps/utils';
import { transparentize } from './tools';

const isNumber = (n: any) => typeof n === 'number' && !isNaN(n);

export const getColor = (rawValue: any, scale: any, theme: any) => {
  let alphaMatched =
    typeof rawValue === 'string' ? rawValue?.match(/:alpha\.\d\d?\d?/) : false;
  if (alphaMatched) {
    let colorMatched = rawValue?.match(/^.*?(?=:alpha)/);
    let color = colorMatched ? colorMatched[0] : colorMatched;
    const alphaValue = alphaMatched[0].split('.')[1];
    const alphaFromToken = get(theme['opacity'], alphaValue, alphaValue);
    let alpha = alphaFromToken ? parseFloat(alphaFromToken) : 1;
    const newColor = transparentize(color, alpha)(theme);
    return newColor;
  } else {
    return get(scale, rawValue, rawValue);
  }
};

// To handle negative margins
const getMargin = (n: any, scale: any) => {
  if (!isNumber(n)) {
    return get(scale, n, n);
  }

  const isNegative = n < 0;
  const absolute = Math.abs(n);
  const value = get(scale, absolute, absolute);
  if (!isNumber(value)) {
    return isNegative ? '-' + value : value;
  }
  return value * (isNegative ? -1 : 1);
};

export const layout = {
  width: {
    property: 'width',
    scale: 'sizes',
  },
  w: {
    property: 'width',
    scale: 'sizes',
  },
  height: {
    property: 'height',
    scale: 'sizes',
  },
  h: {
    property: 'height',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  boxSize: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
};

export const flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
};

export const position = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
  top: {
    property: 'top',
    scale: 'space',
  },
  right: {
    property: 'right',
    scale: 'space',
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
  },
  left: {
    property: 'left',
    scale: 'space',
  },
};

export const color = {
  color: {
    property: 'color',
    scale: 'colors',
    transformer: getColor,
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
    transformer: getColor,
  },
  opacity: true,
  bg: {
    property: 'backgroundColor',
    scale: 'colors',
    transformer: getColor,
  },
  bgColor: {
    property: 'backgroundColor',
    scale: 'colors',
    transformer: getColor,
  },
};

export const border = {
  border: {
    property: 'border',
    scale: 'borders',
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
    transformer: getColor,
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders',
  },
  borderTopRadius: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  borderLeftRadius: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },
  borderRightRadius: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders',
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders',
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders',
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders',
  },
  borderTopWidth: {
    property: 'borderTopWidth',
    scale: 'borderWidths',
  },
  borderTopColor: {
    property: 'borderTopColor',
    scale: 'colors',
    transformer: getColor,
  },
  borderTopStyle: {
    property: 'borderTopStyle',
    scale: 'borderStyles',
  },
  borderBottomWidth: {
    property: 'borderBottomWidth',
    scale: 'borderWidths',
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    scale: 'colors',
    transformer: getColor,
  },
  borderBottomStyle: {
    property: 'borderBottomStyle',
    scale: 'borderStyles',
  },
  borderLeftWidth: {
    property: 'borderLeftWidth',
    scale: 'borderWidths',
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    scale: 'colors',
    transformer: getColor,
  },
  borderLeftStyle: {
    property: 'borderLeftStyle',
    scale: 'borderStyles',
  },
  borderRightWidth: {
    property: 'borderRightWidth',
    scale: 'borderWidths',
  },
  borderRightColor: {
    property: 'borderRightColor',
    scale: 'colors',
    transformer: getColor,
  },
  borderRightStyle: {
    property: 'borderRightStyle',
    scale: 'borderStyles',
  },
  rounded: {
    property: 'borderRadius',
    scale: 'radii',
  },

  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },

  roundedTopRight: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },

  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },

  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },

  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  borderBottomRadius: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },

  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },

  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
};

export const background = {
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundBlendMode: true,
  bgImage: {
    property: 'backgroundImage',
  },
  bgImg: {
    property: 'backgroundImage',
  },
  bgBlendMode: {
    property: 'backgroundBlendMode',
  },
  bgSize: {
    property: 'backgroundSize',
  },
  bgPosition: {
    property: 'backgroundPosition',
  },
  bgPos: {
    property: 'backgroundPosition',
  },
  bgRepeat: {
    property: 'backgroundRepeat',
  },
  bgAttachment: {
    property: 'backgroundAttachment',
  },
};

export const space = {
  margin: {
    property: 'margin',
    scale: 'space',
    transformer: getMargin,
  },
  m: {
    property: 'margin',
    scale: 'space',
    transformer: getMargin,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transformer: getMargin,
  },
  mt: {
    property: 'marginTop',
    scale: 'space',
    transformer: getMargin,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transformer: getMargin,
  },
  mr: {
    property: 'marginRight',
    scale: 'space',
    transformer: getMargin,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transformer: getMargin,
  },
  mb: {
    property: 'marginBottom',
    scale: 'space',
    transformer: getMargin,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transformer: getMargin,
  },
  ml: {
    property: 'marginLeft',
    scale: 'space',
    transformer: getMargin,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transformer: getMargin,
  },
  mx: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transformer: getMargin,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transformer: getMargin,
  },
  my: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transformer: getMargin,
  },

  padding: {
    property: 'padding',
    scale: 'space',
  },
  p: {
    property: 'padding',
    scale: 'space',
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
  },
  pt: {
    property: 'paddingTop',
    scale: 'space',
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
  },
  pr: {
    property: 'paddingRight',
    scale: 'space',
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
  },
  pb: {
    property: 'paddingBottom',
    scale: 'space',
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
  },
  pl: {
    property: 'paddingLeft',
    scale: 'space',
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
  },
  px: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
  },
  py: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
  },
};

export const typography = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts',
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',
    transformer: (val: any, scale: any) => {
      return val ? get(scale, val, val).toString() : val;
    },
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings',
  },
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  textDecoration: true,
  txtDecor: { property: 'textDecoration' },
  textDecorationLine: { property: 'textDecorationLine' },
};

const extraProps = {
  outline: true,
  outlineWidth: true,
  shadow: {
    scale: 'shadows',
  },
};

const propConfig = {
  ...color,
  ...space,
  ...layout,
  ...flexbox,
  ...border,
  ...position,
  ...typography,
  ...background,
  ...extraProps,
};

export const getStyleAndFilteredProps = ({
  style,
  theme,
  debug,
  currentBreakpoint,
  ...props
}: any) => {
  let styleFromProps: any = {};
  let restProps: any = {};
  for (let key in props) {
    const rawValue = props[key];

    if (key in propConfig) {
      const value = resolveValueWithBreakpoint(
        rawValue,
        currentBreakpoint,
        key
      );

      const config = propConfig[key as keyof typeof propConfig];
      if (config === true) {
        styleFromProps = { ...styleFromProps, [key]: value };
      } else if (config) {
        //@ts-ignore
        const { property, scale, properties, transformer } = config;
        let val = value;
        if (transformer) {
          val = transformer(val, theme[scale], theme);
        } else {
          val = get(theme[scale], value, value);
        }
        if (typeof val === 'string' && val.endsWith('px')) {
          val = parseInt(val, 10);
        }
        if (properties) {
          //@ts-ignore
          properties.forEach((property) => {
            styleFromProps = {
              ...styleFromProps,
              [property]: val,
            };
          });
        } else if (property) {
          styleFromProps = {
            ...styleFromProps,
            [property]: val,
          };
        } else {
          styleFromProps = {
            ...styleFromProps,
            ...val,
          };
        }
      }
    } else {
      restProps[key] = rawValue;
    }
  }

  if (debug) {
    console.log('style ', debug + ' :: ', styleFromProps, style, props);
  }

  return {
    styleSheet: StyleSheet.create({ box: styleFromProps }),
    restProps,
  };
};
