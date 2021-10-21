import { Platform, StyleSheet } from 'react-native';
import get from 'lodash.get';
import { resolveValueWithBreakpoint } from '../hooks/useThemeProps/utils';
import { hasValidBreakpointFormat, transparentize } from './tools';
import type { ITheme } from '.';
import type { UseResponsiveQueryParams } from '../utils/react-native-responsive-query';

const isNumber = (n: any) => typeof n === 'number' && !isNaN(n);

export const getColor = (rawValue: any, scale: any, theme: any) => {
  const alphaMatched =
    typeof rawValue === 'string' ? rawValue?.match(/:alpha\.\d\d?\d?/) : false;

  if (alphaMatched) {
    const colorMatched = rawValue?.match(/^.*?(?=:alpha)/);
    const color = colorMatched ? colorMatched[0] : colorMatched;
    const alphaValue = alphaMatched[0].split('.')[1];
    const alphaFromToken = get(theme.opacity, alphaValue, alphaValue);
    const alpha = alphaFromToken ? parseFloat(alphaFromToken) : 1;
    const newColor = transparentize(color, alpha)(theme);
    return newColor;
  } else {
    return get(scale, rawValue, rawValue);
  }
};

// To handle negative margins
const getMargin = (n: any, scale: any) => {
  n = convertStringNumberToNumber('margin', n);
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
} as const;

export const flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  flexDir: {
    property: 'flexDirection',
  },
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
} as const;

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
} as const;

export const color = {
  color: {
    property: 'color',
    scale: 'colors',
    transformer: getColor,
  },
  tintColor: {
    property: 'tintColor',
    scale: 'colors',
    transformer: getColor,
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
    transformer: getColor,
  },
  opacity: {
    property: 'opacity',
    scale: 'opacity',
  },
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
  background: {
    property: 'backgroundColor',
    scale: 'colors',
    transformer: getColor,
  },
} as const;

export const border = {
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
} as const;

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
} as const;

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
} as const;

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
  textDecoration: { property: 'textDecorationLine' },
  txtDecor: { property: 'textDecorationLine' },
  textDecorationLine: true,
} as const;

const extraProps = {
  outline: true,
  outlineWidth: true,
  shadow: {
    scale: 'shadows',
  },
  cursor: true,
  overflow: true,
} as const;

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
} as const;

// For backward compatibility with 3.0 of props like non token string numbers `<Box mt={"39"} />` => used to get applied as 39px. RN expects fontWeight to be string and crashes with numbers
// https://reactnative.dev/docs/text-style-props#fontweight
const convertStringNumberToNumber = (key: string, value: string) => {
  if (
    typeof value === 'string' &&
    key !== 'fontWeight' &&
    value &&
    !isNaN(Number(value))
  ) {
    return parseFloat(value);
  }

  return value;
};
// [1, 2, 3]
// {base: 1, md: 2}
const generateResponsiveQuery = ({
  value,
  theme,

  config,
  key,
  props,
  currentBreakpoint,
}: {
  value: Record<string, any> | Array<any>;
  theme: ITheme;

  config: any;
  key: any;
  props: any;
  currentBreakpoint: any;
}) => {
  let query: UseResponsiveQueryParams = { query: [] };
  const orderedBreakPoints = Object.entries(theme.breakpoints).sort(
    (a, b) => a[1] - b[1]
  );

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const style = getRNKeyAndStyleValue({
        config,
        value: value[i],
        key,
        theme,
        props,
        currentBreakpoint,
      });

      if (i === 0) {
        query.initial = style;
      } else {
        query.query.push({
          minWidth: orderedBreakPoints[i][1],
          style,
        });
      }
    }
  } else {
    for (const [breakpointKey, width] of orderedBreakPoints) {
      const style = getRNKeyAndStyleValue({
        config,
        value: value[breakpointKey],
        key,
        theme,
        props,
        currentBreakpoint,
      });

      if (breakpointKey === 'base' && 'base' in value) {
        query.initial = style;
      } else {
        if (typeof width === 'number' && breakpointKey in value) {
          query.query.push({
            minWidth: width,
            style,
          });
        }
      }
    }
  }
  return query;
};

const getRNKeyAndStyleValue = ({
  config,
  value,
  key,
  theme,
  props,
  currentBreakpoint,
}: any) => {
  let style: any = {};
  if (config === true) {
    style = {
      ...style,
      [key]: convertStringNumberToNumber(key, value),
    };
  } else if (config) {
    //@ts-ignore
    const { property, scale, properties, transformer } = config;
    let val = value;

    if (transformer) {
      val = transformer(val, theme[scale], theme, props.fontSize);
    } else {
      // If a token is not found in the theme
      val = get(theme[scale], value, value);
    }

    if (typeof val === 'string') {
      if (val.endsWith('px')) {
        val = parseFloat(val);
      } else if (val.endsWith('em') && Platform.OS !== 'web') {
        const fontSize = resolveValueWithBreakpoint(
          props.fontSize,
          theme.breakpoints,
          currentBreakpoint,
          key
        );
        val =
          parseFloat(val) *
          parseFloat(get(theme.fontSizes, fontSize, fontSize));
      }
    }

    val = convertStringNumberToNumber(key, val);

    if (properties) {
      //@ts-ignore
      properties.forEach((property) => {
        style = {
          ...style,
          [property]: val,
        };
      });
    } else if (property) {
      style = {
        ...style,
        [property]: val,
      };
    } else {
      style = {
        ...style,
        ...val,
      };
    }
  }

  return style;
};

export const getStyleAndFilteredProps = ({
  style,
  theme,
  debug,
  currentBreakpoint,
  getResponsiveStyles,
  ...props
}: any) => {
  let styleFromProps: any = {};
  let restProps: any = {};
  for (const key in props) {
    const rawValue = props[key];

    if (key in propConfig) {
      const config = propConfig[key as keyof typeof propConfig];

      if (
        hasValidBreakpointFormat(rawValue, theme.breakpoints) &&
        Platform.OS === 'web'
      ) {
        const value = rawValue;
        const query = generateResponsiveQuery({
          config,
          value,
          key,
          props,
          theme,
          currentBreakpoint,
        });
        const { dataSet, styles } = getResponsiveStyles(query);
        if (!restProps.dataSet) {
          restProps.dataSet = dataSet;
        } else {
          let updated = false;

          for (let key in restProps.dataSet) {
            if (key in dataSet) {
              updated = true;
              restProps.dataSet[key] =
                restProps.dataSet[key] + ' ' + dataSet[key];
            }
          }

          if (!updated) {
            restProps.dataSet = {
              ...restProps.dataSet,
              ...dataSet,
            };
          }
        }

        styleFromProps = { ...styleFromProps, ...StyleSheet.flatten(styles) };
      } else {
        const value = resolveValueWithBreakpoint(
          rawValue,
          theme.breakpoints,
          currentBreakpoint,
          key
        );

        const newStyle = getRNKeyAndStyleValue({
          config,
          value,
          key,
          props,
          theme,
          currentBreakpoint,
        });

        styleFromProps = {
          ...styleFromProps,
          ...newStyle,
        };
      }
    } else {
      restProps[key] = rawValue;
    }
  }

  if (debug) {
    /* eslint-disable-next-line */
    console.log('style ', debug + ' :: ', {
      styleFromProps,
      style,
      props,
      restProps,
    });
  }

  return {
    styleSheet: StyleSheet.create({ box: styleFromProps }),
    restProps,
  };
};

export type StyledPropConfig = typeof propConfig;
