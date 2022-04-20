import omitBy from 'lodash.omitby';
import isNil from 'lodash.isnil';
import pick from 'lodash.pick';
import omit from 'lodash.omit';
import get from 'lodash.get';
import type { ITheme } from '../index';
import { Platform } from 'react-native';

export const stylingProps = {
  margin: [
    'margin',
    'm',
    'marginTop',
    'mt',
    'marginRight',
    'mr',
    'marginBottom',
    'mb',
    'marginLeft',
    'ml',
    'marginX',
    'mx',
    'marginY',
    'my',
  ],
  padding: [
    'padding',
    'p',
    'paddingTop',
    'pt',
    'paddingRight',
    'pr',
    'paddingBottom',
    'pb',
    'paddingLeft',
    'pl',
    'paddingX',
    'px',
    'paddingY',
    'py',
  ],
  border: [
    'border',
    'borderWidth',
    'borderStyle',
    'borderColor',
    'borderRadius',
    'borderTop',
    'borderTopWidth',
    'borderTopStyle',
    'borderTopColor',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderRight',
    'borderRightWidth',
    'borderRightStyle',
    'borderRightColor',
    'borderBottom',
    'borderBottomWidth',
    'borderBottomStyle',
    'borderBottomColor',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderLeft',
    'borderLeftWidth',
    'borderLeftStyle',
    'borderLeftColor',
    'borderX',
    'borderY',
    'rounded',
  ],
  layout: [
    'width',
    'w',
    'height',
    'h',
    'display',
    'minWidth',
    'minW',
    'minH',
    'minHeight',
    'maxWidth',
    'maxW',
    'maxHeight',
    'maxH',
    'size',
    'verticalAlign',
    'overflow',
    'overflowX',
    'overflowY',
  ],
  flexbox: [
    'alignItems',
    'alignContent',
    'justifyItems',
    'justifyContent',
    'flexWrap',
    'flexDirection',
    'flex',
    'flexGrow',
    'flexShrink',
    'flexBasis',
    'justifySelf',
    'alignSelf',
    'order',
  ],
  position: ['position', 'zIndex', 'top', 'right', 'bottom', 'left'],
  outline: ['outlineWidth', 'outlineColor', 'outlineStyle'],
  background: ['bg', 'backgroundColor', 'bgColor'],
};
export type Dict = Record<string, any>;
export function omitUndefined(obj: any) {
  return omitBy(obj, isNil);
}
export function getRandomString(length: number) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
// Inefficient way for pick, but retains order of props.
function orderedPick(obj: any, values: any) {
  const ret: any = {};
  Object.keys(obj).forEach((key: string) => {
    if (values.includes(key)) {
      ret[key] = obj[key];
    }
  });
  return ret;
}
export function orderedExtractInObject(parent: any, values: Array<string>) {
  return [
    omitUndefined(orderedPick(parent, values)),
    omitUndefined(omit(parent, values)),
  ];
}
/**
 *
 * @param parent The object from which data needs to extracted
 * @param values Keys which needs to be extracted
 * @returns [extractedProps, remainingProps]
 */
export function extractInObject(parent: any, values: Array<string>) {
  return [
    omitUndefined(pick(parent, values)),
    omitUndefined(omit(parent, values)),
  ];
}
export function getColorFormColorScheme(props: Record<string, any>) {
  const { theme, colorScheme, isDisabled } = props;
  const simpleColorScheme = colorScheme.split('.')[0];
  if (isDisabled) return 'gray.300';
  else if (simpleColorScheme in theme.colors) {
    return theme.colors[simpleColorScheme][0] === '#'
      ? simpleColorScheme
      : theme.colors[simpleColorScheme][400] ||
          theme.colors[simpleColorScheme][200];
  } else return 'primary.200';
}

// TODO: This function can be removed.
export function getColorScheme(
  props: Record<string, any>,
  customColorScheme?: string
) {
  let { theme, colorScheme } = props;
  colorScheme = customColorScheme || colorScheme;
  if (!(colorScheme in theme.colors)) return 'primary';
  else {
    if (typeof theme.colors[colorScheme] === 'object') return colorScheme;
  }
}
export const inValidBreakpointProps = ['style', 'children', 'shadowOffset'];
export function hasValidBreakpointFormat(
  breaks: any,
  themeBreakpoints?: any,
  property?: string
) {
  if (property && inValidBreakpointProps.indexOf(property) !== -1) {
    return false;
  } else if (Array.isArray(breaks)) {
    return breaks.length ? true : false;
  } else if (typeof breaks === 'object' && breaks !== null) {
    const keys = Object.keys(breaks);
    const themeBreakPointKeys = Object.keys(themeBreakpoints);
    for (let i = 0; i < keys.length; i++) {
      if (themeBreakPointKeys.indexOf(keys[i]) === -1) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
export function findLastValidBreakpoint(
  values: any,
  themeBreakpoints: any,
  currentBreakpoint: number
) {
  const valArray = Array.isArray(values)
    ? values
    : Object.keys(themeBreakpoints).map((bPoint: string) => values[bPoint]);
  return (
    valArray[currentBreakpoint] ??
    valArray
      .slice(0, currentBreakpoint + 1)
      .filter((v: any) => !isNil(v))
      .pop()
  );
}
export function getClosestBreakpoint(
  values: Record<string, any>,
  point: number
) {
  const dimValues = Object.values(values);
  let index = -1;
  let breakpointsObj: any = {};
  for (let i = 0; i < dimValues.length; i++) {
    breakpointsObj[dimValues[i]] = i;
  }
  const breakpoints = Object.keys(breakpointsObj);
  for (let i = 0; i < breakpoints.length; i++) {
    if (parseInt(breakpoints[i]) === point) {
      index = breakpointsObj[breakpoints[i]];
      break;
    } else if (parseInt(breakpoints[i]) > point && i !== 0) {
      index = breakpointsObj[breakpoints[i - 1]];
      break;
    }
    // If windowWidth is greater than last available breakpoint clamp it to last index
    else if (parseInt(breakpoints[i]) < point && i === dimValues.length - 1) {
      index = breakpointsObj[breakpoints[i]];
      break;
    }
  }
  return index;
}

export const baseFontSize = 16;

export const convertAbsoluteToRem = (px: number) => {
  return `${px / baseFontSize}rem`;
};

export const convertRemToAbsolute = (rem: number) => {
  return rem * baseFontSize;
};

export const convertToDp = (value: number | string): number => {
  const numberRegex = /^\d+$/;

  if (typeof value === 'number') {
    return value;
  } else {
    const isAbsolute = numberRegex.test(value);
    const isPx = !isAbsolute && value.endsWith('px');
    const isRem = !isAbsolute && value.endsWith('rem');
    const isEm = !isAbsolute && value.endsWith('em');

    let finalDpValue = 0;

    if (isAbsolute || isPx) {
      finalDpValue = parseFloat(value);
    } else if (isEm) {
      finalDpValue = convertRemToAbsolute(parseFloat(value));
    } else if (isRem) {
      finalDpValue = convertRemToAbsolute(parseFloat(value));
    }

    return finalDpValue;
  }
};

/**
 *
 * @param theme
 * @description
  - Converts space/sizes/lineHeights/letterSpacings/fontSizes to `rem` on web if the token value specified is an absolute number.
  - Converts space/sizes/lineHeights/letterSpacings/fontSizes to absolute number on native if the token value specified is in `px` or `rem`
*/
export const platformSpecificSpaceUnits = (theme: ITheme) => {
  const scales = ['space', 'sizes', 'fontSizes'];

  const newTheme = { ...theme };
  const isWeb = Platform.OS === 'web';
  scales.forEach((key) => {
    const scale = get(theme, key, {});
    const newScale = { ...scale };
    for (const scaleKey in scale) {
      const val = scale[scaleKey];
      if (typeof val !== 'object') {
        const isAbsolute = typeof val === 'number';
        const isPx = !isAbsolute && val.endsWith('px');
        const isRem = !isAbsolute && val.endsWith('rem');

        // If platform is web, we need to convert absolute unit to rem. e.g. 16 to 1rem
        if (isWeb) {
          if (isAbsolute) {
            newScale[scaleKey] = convertAbsoluteToRem(val);
          }
        }
        // If platform is not web, we need to convert px unit to absolute and rem unit to absolute. e.g. 16px to 16. 1rem to 16.
        else {
          if (isRem) {
            newScale[scaleKey] = convertRemToAbsolute(parseFloat(val));
          } else if (isPx) {
            newScale[scaleKey] = parseFloat(val);
          }
        }
      }
    }
    //@ts-ignore
    newTheme[key] = newScale;
  });

  return newTheme;
};
export function isResponsiveAnyProp(props: Record<string, any>, theme: any) {
  if (props) {
    const keys = Object.keys(props);
    for (let i = 0; i < keys.length; i++) {
      if (
        hasValidBreakpointFormat(props[keys[i]], theme.breakpoints, keys[i])
      ) {
        return true;
      }
    }
  }

  return false;
}
