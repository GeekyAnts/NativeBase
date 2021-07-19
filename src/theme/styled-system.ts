import { StyleSheet } from 'react-native';
import get from 'lodash.get';
import { resolveValueWithBreakpoint } from '../hooks/useThemeProps/utils';

const isNumber = (n: any) => typeof n === 'number' && !isNaN(n);

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
  start: {
    property: 'start',
    scale: 'space',
  },
  end: {
    property: 'end',
    scale: 'space',
  },
};

export const color = {
  color: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  opacity: true,
  bg: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  bgColor: {
    property: 'backgroundColor',
    scale: 'colors',
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
    transform: getMargin,
    scale: 'space',
  },
  marginStart: {
    property: 'marginStart',
    transform: getMargin,
    scale: 'space',
  },
  marginEnd: {
    property: 'marginEnd',
    transform: getMargin,
    scale: 'space',
  },
  ms: {
    property: 'marginStart',
    transform: getMargin,
    scale: 'space',
  },
  me: {
    transform: getMargin,
    property: 'marginEnd',
    scale: 'space',
  },
  m: {
    transform: getMargin,
    property: 'margin',
    scale: 'space',
  },
  marginTop: {
    transform: getMargin,
    property: 'marginTop',
    scale: 'space',
  },
  mt: {
    transform: getMargin,
    property: 'marginTop',
    scale: 'space',
  },
  marginRight: {
    transform: getMargin,
    property: 'marginRight',
    scale: 'space',
  },
  mr: {
    transform: getMargin,
    property: 'marginRight',
    scale: 'space',
  },
  marginBottom: {
    transform: getMargin,
    property: 'marginBottom',
    scale: 'space',
  },
  mb: {
    transform: getMargin,
    property: 'marginBottom',
    scale: 'space',
  },
  marginLeft: {
    transform: getMargin,
    property: 'marginLeft',
    scale: 'space',
  },
  ml: {
    transform: getMargin,
    property: 'marginLeft',
    scale: 'space',
  },
  marginX: {
    transform: getMargin,
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
  },
  mx: {
    transform: getMargin,
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
  },
  marginY: {
    transform: getMargin,
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
  },
  my: {
    transform: getMargin,
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
  },

  padding: {
    property: 'padding',
    scale: 'space',
  },
  paddingStart: {
    property: 'paddingStart',
    scale: 'space',
  },
  paddingEnd: {
    property: 'paddingEnd',
    scale: 'space',
  },
  ps: {
    property: 'paddingStart',
    scale: 'space',
  },
  pe: {
    property: 'paddingEnd',
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
    transform: (val: any, scale: any) => {
      const value = get(scale, val, val);
      return value ? value.toString() : value;
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
        const { property, scale, properties, transform } = config;
        let val = value;
        if (transform) {
          val = transform(val, theme[scale]);
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
        } else {
          styleFromProps = {
            ...styleFromProps,
            [property]: val,
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
