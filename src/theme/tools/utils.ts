import omitBy from 'lodash.omitby';
import isNil from 'lodash.isnil';
import pick from 'lodash.pick';
import omit from 'lodash.omit';

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
  background: ['bg', 'backgroundColor'],
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
  let ret: any = {};
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
export const breakpoints = Object.freeze(['base', 'sm', 'md', 'lg', 'xl']);
export const inValidBreakpointProps = ['style', 'children', 'shadowOffset'];
export function hasValidBreakpointFormat(breaks: any, property?: string) {
  if (property && inValidBreakpointProps.indexOf(property) !== -1) {
    return false;
  } else if (Array.isArray(breaks)) {
    return breaks.length ? true : false;
  } else if (typeof breaks === 'object') {
    const keys = Object.keys(breaks);
    for (let i = 0; i < keys.length; i++) {
      if (breakpoints.indexOf(keys[i]) === -1) {
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
  currentBreakpoint: number
) {
  let valArray = Array.isArray(values)
    ? values
    : breakpoints.map((bPoint: string) => values[bPoint]);
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
  let dimValues = Object.values(values);
  let index = -1;
  for (let i = 0; i < dimValues.length; i++) {
    if (dimValues[i] === point) {
      index = i;
      break;
    } else if (dimValues[i] > point && i !== 0) {
      index = i - 1;
      break;
    }
    // If windowWidth is greater than last available breakpoint clamp it to last index
    else if (dimValues[i] < point && i === dimValues.length - 1) {
      index = i;
      break;
    }
  }
  return index;
}
