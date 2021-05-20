import { get } from 'lodash';
import { StyleSheet } from 'react-native';

const layout = {
  width: {
    property: 'width',
    scale: 'sizes',
  },
  height: {
    property: 'height',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxHeight: {
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

const flexBox = {
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

const position = {
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

const color = {
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
};

const border = {
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
};

const background = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  bgImage: true,
  bgSize: true,
  bgPosition: true,
  bgRepeat: true,
};

const space = {
  margin: {
    property: 'margin',
    scale: 'space',
  },
  m: {
    property: 'margin',
    scale: 'space',
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
  },
  mt: {
    property: 'marginTop',
    scale: 'space',
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
  },
  mr: {
    property: 'marginRight',
    scale: 'space',
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
  },
  mb: {
    property: 'marginBottom',
    scale: 'space',
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
  },
  ml: {
    property: 'marginLeft',
    scale: 'space',
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
  },
  mx: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
  },
  my: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
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

const typography = {
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
};

const propThemeMap = {
  ...layout,
  ...flexBox,
  ...position,
  ...color,
  ...border,
  ...background,
  ...space,
  ...typography,
};

export const getStyleAndFilteredProps = (
  { style, ...props }: any,
  theme: any
) => {
  let newProps: any = {};
  let styleFromProps: any = {};
  for (let key in props) {
    const rawValue = props[key];
    if (key in propThemeMap) {
      const config = propThemeMap[key as keyof typeof propThemeMap];
      if (config === true) {
        styleFromProps = { ...styleFromProps, [key]: rawValue };
      } else if (config && 'scale' in config) {
        //@ts-ignore
        const { property, scale, properties } = config;
        let val = get(theme[scale], rawValue, rawValue);
        // Remove the below hack once we go unitless
        if (typeof val === 'string' && val.includes('px')) {
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
      newProps[key] = props[key];
    }
  }

  newProps.style = StyleSheet.flatten([styleFromProps, style]);
  return newProps;
};
