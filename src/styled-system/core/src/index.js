import { Dimensions, Platform } from 'react-native';
import merge from 'lodash/merge';
import { getClosestBreakpoint } from '../../../theme/tools';
const assign = Object.assign;

console.log('efieijefiefijeifjiji ', 123);
// sort object-value responsive styles
const sort = (obj) => {
  const next = {};
  Object.keys(obj)
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base',
      })
    )
    .forEach((key) => {
      next[key] = obj[key];
    });
  return next;
};

const getValue = (n, scale) => get(scale, n, n);

export const get = (obj, key, def, p, undef) => {
  key = key && key.split ? key.split('.') : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};

export const createParser = (config) => {
  const cache = {};
  const parse = (props) => {
    let styles = {};
    let shouldSort = false;

    const isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

    for (const key in props) {
      if (!config[key]) continue;

      const sx = config[key];
      const raw = props[key];
      const scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints =
          (!isCacheDisabled && cache.breakpoints) ||
          get(props.theme, 'breakpoints');
        if (Array.isArray(raw)) {
          styles = merge(
            styles,
            parseResponsiveStyle(cache.breakpoints, sx, scale, raw, props)
          );
          continue;
        }
        if (raw !== null) {
          styles = merge(
            styles,
            parseResponsiveStyle(cache.breakpoints, sx, scale, raw, props)
          );
          shouldSort = true;
        }
        continue;
      }

      assign(styles, sx(raw, scale, props));
    }

    // sort object-based responsive styles
    if (shouldSort) {
      styles = sort(styles);
    }

    if (styles.shadow) {
      styles = assign(styles, styles.shadow);
      styles.shadow = undefined;
    }
    return styles;
  };
  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;

  const keys = Object.keys(config).filter((k) => k !== 'config');
  if (keys.length > 1) {
    keys.forEach((key) => {
      parse[key] = createParser({ [key]: config[key] });
    });
  }

  return parse;
};

const parseResponsiveStyle = (breakpoints, sx, scale, raw, _props) => {
  let styles = {};
  const width = Dimensions.get('window').width;

  const currentBreakpoint = getClosestBreakpoint(breakpoints, width);
  const value = resolveValueWithBreakpoint(raw, currentBreakpoint);
  const style = sx(value, scale, _props);
  assign(styles, style);
  return styles;
};

export const createStyleFunction = ({
  properties,
  property,
  scale,
  transform = getValue,
  defaultScale,
}) => {
  properties = properties || [property];
  const sx = (value, scale, _props) => {
    const result = {};
    const n = transform(value, scale, _props);
    if (n === null) return;
    properties.forEach((prop) => {
      result[prop] = n;
    });
    return result;
  };
  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
};

// new v5 API
export const system = (args = {}) => {
  const config = {};
  Object.keys(args).forEach((key) => {
    const conf = args[key];
    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key,
      });
      return;
    }
    if (typeof conf === 'function') {
      config[key] = conf;
      return;
    }
    config[key] = createStyleFunction(conf);
  });

  const parser = createParser(config);
  return parser;
};

export const compose = (...parsers) => {
  let config = {};
  parsers.forEach((parser) => {
    if (!parser || !parser.config) return;
    assign(config, parser.config);
  });
  const parser = createParser(config);

  return parser;
};

export const resolveValueWithBreakpoint = (values, currentBreakpoint) => {
  if (hasValidBreakpointFormat(values)) {
    // Check the last valid breakpoint value from all values
    // If current breakpoint is `md` and we have `base` then `lg`, then last value will be taken(`base` in this case)
    return findLastValidBreakpoint(values, currentBreakpoint);
  } else {
    return values;
  }
};

export const breakpoints = Object.freeze(['base', 'sm', 'md', 'lg', 'xl']);

export function hasValidBreakpointFormat(breaks) {
  if (Array.isArray(breaks)) {
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
export function findLastValidBreakpoint(values, currentBreakpoint) {
  let valArray = Array.isArray(values)
    ? values
    : breakpoints.map((bPoint) => values[bPoint]);
  return (
    valArray[currentBreakpoint] ??
    valArray
      .slice(0, currentBreakpoint + 1)
      .filter((v) => v ?? null)
      .pop()
  );
}
