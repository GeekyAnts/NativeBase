/* eslint-disable */
//@ts-nocheck
// This functions is taken from react native web

import hash from '../useResponsiveQuery/hash';
import prefixStyles from '../react-native-web-fucntions/prefixStyles';
import normalizeValueWithProperty from './normalizeValueWithProperty';
import createReactDOMStyle from '../react-native-web-fucntions/createReactDOMStyle';
import hyphenateStyleName from '../react-native-web-fucntions/hyphenateStyleName';
type Value = Object | Array<any> | string | number;
type Style = { [key: string]: Value };
type Rule = string;
type Rules = Array<Rule>;
type RulesData = [Rules, number];
type CompiledStyle = {
  //@ts-ignore
  $$css: boolean;
  //@ts-ignore
  $$css$localize?: boolean;
  [key: string]: string | Array<string>;
};
const borderTopLeftRadius = 'borderTopLeftRadius';
const borderTopRightRadius = 'borderTopRightRadius';
const borderBottomLeftRadius = 'borderBottomLeftRadius';
const borderBottomRightRadius = 'borderBottomRightRadius';
const borderLeftColor = 'borderLeftColor';
const borderLeftStyle = 'borderLeftStyle';
const borderLeftWidth = 'borderLeftWidth';
const borderRightColor = 'borderRightColor';
const borderRightStyle = 'borderRightStyle';
const borderRightWidth = 'borderRightWidth';
const right = 'right';
const marginLeft = 'marginLeft';
const marginRight = 'marginRight';
const paddingLeft = 'paddingLeft';
const paddingRight = 'paddingRight';
const left = 'left';
const PROPERTIES_VALUE: any = ['clear', 'float', 'textAlign'];
// Map of LTR property names to their BiDi equivalent.
const PROPERTIES_FLIP: { [key: string]: string } = {
  [borderTopLeftRadius]: borderTopRightRadius,
  [borderTopRightRadius]: borderTopLeftRadius,
  [borderBottomLeftRadius]: borderBottomRightRadius,
  [borderBottomRightRadius]: borderBottomLeftRadius,
  [borderLeftColor]: borderRightColor,
  [borderLeftStyle]: borderRightStyle,
  [borderLeftWidth]: borderRightWidth,
  [borderRightColor]: borderLeftColor,
  [borderRightStyle]: borderLeftStyle,
  [borderRightWidth]: borderLeftWidth,
  [left]: right,
  [marginLeft]: marginRight,
  [marginRight]: marginLeft,
  [paddingLeft]: paddingRight,
  [paddingRight]: paddingLeft,
  [right]: left,
};
// Map of I18N property names to their LTR equivalent.
const PROPERTIES_I18N: any = {
  borderTopStartRadius: borderTopLeftRadius,
  borderTopEndRadius: borderTopRightRadius,
  borderBottomStartRadius: borderBottomLeftRadius,
  borderBottomEndRadius: borderBottomRightRadius,
  borderStartColor: borderLeftColor,
  borderStartStyle: borderLeftStyle,
  borderStartWidth: borderLeftWidth,
  borderEndColor: borderRightColor,
  borderEndStyle: borderRightStyle,
  borderEndWidth: borderRightWidth,
  end: right,
  marginStart: marginLeft,
  marginEnd: marginRight,
  paddingStart: paddingLeft,
  paddingEnd: paddingRight,
  start: left,
};
type CompilerOutput = [CompiledStyle, Array<RulesData>];
const customGroup: { [key: string]: number } = {
  borderColor: 2,
  borderRadius: 2,
  borderStyle: 2,
  borderWidth: 2,
  display: 2,
  flex: 2,
  margin: 2,
  overflow: 2,
  overscrollBehavior: 2,
  padding: 2,
  marginHorizontal: 2.1,
  marginVertical: 2.1,
  paddingHorizontal: 2.1,
  paddingVertical: 2.1,
};
const atomicGroup = 2.2;
const cache = new Map();
export function atomic(style: Style): CompilerOutput {
  //@ts-ignore
  const compiledStyle: CompiledStyle = { $$css: true };
  const compiledRules: any = [];

  function atomicCompile(prop: any, value: any) {
    const valueString = stringifyValueWithProperty(value, prop);
    const cacheKey = prop + valueString;
    const cachedResult = cache.get(cacheKey);
    let identifier;
    if (cachedResult != null) {
      identifier = cachedResult[0];
      compiledRules.push(cachedResult[1]);
    } else {
      identifier = createIdentifier('r', prop, value);
      const order = customGroup[prop] || atomicGroup;
      const rules = createAtomicRules(identifier, prop, value);
      const orderedRules = [rules, order];
      compiledRules.push(orderedRules);
      cache.set(cacheKey, [identifier, orderedRules]);
    }
    return identifier;
  }

  Object.keys(style)
    .sort()
    .forEach((prop) => {
      const value = style[prop];
      if (value != null) {
        let localizeableValue;
        // BiDi flip values
        if (PROPERTIES_VALUE.indexOf(prop) > -1) {
          const left = atomicCompile(prop, 'left');
          const right = atomicCompile(prop, 'right');
          if (value === 'start') {
            localizeableValue = [left, right];
          } else if (value === 'end') {
            localizeableValue = [right, left];
          }
        }
        // BiDi flip properties
        const propPolyfill = PROPERTIES_I18N[prop];
        if (propPolyfill != null) {
          const ltr = atomicCompile(propPolyfill, value);
          const rtl = atomicCompile(PROPERTIES_FLIP[propPolyfill], value);
          localizeableValue = [ltr, rtl];
        }
        // BiDi flip transitionProperty value
        if (prop === 'transitionProperty') {
          const values = Array.isArray(value) ? value : [value];
          const polyfillIndices = [];

          for (let i = 0; i < values.length; i++) {
            const val = values[i];
            if (typeof val === 'string' && PROPERTIES_I18N[val] != null) {
              polyfillIndices.push(i);
            }
          }

          if (polyfillIndices.length > 0) {
            const ltrPolyfillValues = [...values];
            const rtlPolyfillValues = [...values];
            polyfillIndices.forEach((i) => {
              const ltrVal = ltrPolyfillValues[i];
              if (typeof ltrVal === 'string') {
                const ltrPolyfill = PROPERTIES_I18N[ltrVal];
                const rtlPolyfill = PROPERTIES_FLIP[ltrPolyfill];
                ltrPolyfillValues[i] = ltrPolyfill;
                rtlPolyfillValues[i] = rtlPolyfill;
                const ltr = atomicCompile(prop, ltrPolyfillValues);
                const rtl = atomicCompile(prop, rtlPolyfillValues);
                localizeableValue = [ltr, rtl];
              }
            });
          }
        }

        if (localizeableValue == null) {
          localizeableValue = atomicCompile(prop, value);
        } else {
          compiledStyle['$$css$localize'] = true;
        }

        compiledStyle[prop] = localizeableValue;
      }
    });

  return [compiledStyle, compiledRules];
}

/**
 * Create a value string that normalizes different input values with a common
 * output.
 */
export function stringifyValueWithProperty(
  value: Value,
  property?: string
): string {
  // e.g., 0 => '0px', 'black' => 'rgba(0,0,0,1)'
  const normalizedValue = normalizeValueWithProperty(value, property);
  return typeof normalizedValue !== 'string'
    ? JSON.stringify(normalizedValue || '')
    : normalizedValue;
}

/**
 * An identifier is associated with a unique set of styles.
 */
function createIdentifier(prefix: string, name: string, value: Value): string {
  const hashedString = hash(name + stringifyValueWithProperty(value, name));
  return process.env.NODE_ENV !== 'production'
    ? `${prefix}-${name}-${hashedString}`
    : `${prefix}-${hashedString}`;
}

/**
 * Create the Atomic CSS rules needed for a given StyleSheet rule.
 * Translates StyleSheet declarations to CSS.
 */
function createAtomicRules(
  identifier: string,
  property: any,
  value: any
): Rules {
  const rules = [];
  const selector = `.${identifier}`;

  // Handle non-standard properties and object values that require multiple
  // CSS rules to be created.
  switch (property) {
    case 'animationKeyframes': {
      const [animationNames, keyframesRules] = processKeyframesValue(value);
      const block = createDeclarationBlock({
        animationName: animationNames.join(','),
      });
      rules.push(`${selector}${block}`, ...keyframesRules);
      break;
    }

    // Equivalent to using '::placeholder'
    case 'placeholderTextColor': {
      const block = createDeclarationBlock({ color: value, opacity: 1 });
      rules.push(
        `${selector}::-webkit-input-placeholder${block}`,
        `${selector}::-moz-placeholder${block}`,
        `${selector}:-ms-input-placeholder${block}`,
        `${selector}::placeholder${block}`
      );
      break;
    }

    // Polyfill for additional 'pointer-events' values
    // See d13f78622b233a0afc0c7a200c0a0792c8ca9e58
    case 'pointerEvents': {
      let finalValue = value;
      if (value === 'auto' || value === 'box-only') {
        finalValue = 'auto!important';
        if (value === 'box-only') {
          const block = createDeclarationBlock({ pointerEvents: 'none' });
          rules.push(`${selector}>*${block}`);
        }
      } else if (value === 'none' || value === 'box-none') {
        finalValue = 'none!important';
        if (value === 'box-none') {
          const block = createDeclarationBlock({ pointerEvents: 'auto' });
          rules.push(`${selector}>*${block}`);
        }
      }
      const block = createDeclarationBlock({ pointerEvents: finalValue });
      rules.push(`${selector}${block}`);
      break;
    }

    // Polyfill for draft spec
    // https://drafts.csswg.org/css-scrollbars-1/
    case 'scrollbarWidth': {
      if (value === 'none') {
        rules.push(`${selector}::-webkit-scrollbar{display:none}`);
      }
      const block = createDeclarationBlock({ scrollbarWidth: value });
      rules.push(`${selector}${block}`);
      break;
    }

    default: {
      const block = createDeclarationBlock({ [property]: value });
      rules.push(`${selector}${block}`);
      break;
    }
  }

  return rules;
}

/**
 * Creates a CSS declaration block from a StyleSheet object.
 */
function createDeclarationBlock(style: Style): string {
  const domStyle: any = prefixStyles(createReactDOMStyle(style));
  const declarationsString = Object.keys(domStyle)
    .map((property) => {
      const value = domStyle[property];
      const prop = hyphenateStyleName(property);
      // The prefixer may return an array of values:
      // { display: [ '-webkit-flex', 'flex' ] }
      // to represent "fallback" declarations
      // { display: -webkit-flex; display: flex; }
      if (Array.isArray(value)) {
        return value.map((v) => `${prop}:${v}`).join(';');
      } else {
        return `${prop}:${value}`;
      }
    })
    // Once properties are hyphenated, this will put the vendor
    // prefixed and short-form properties first in the list.
    .sort()
    .join(';');

  return `{${declarationsString};}`;
}

/**
 * Create CSS keyframes rules and names from a StyleSheet keyframes object.
 */
function processKeyframesValue(keyframesValue: any) {
  if (typeof keyframesValue === 'number') {
    throw new Error(`Invalid CSS keyframes type: ${typeof keyframesValue}`);
  }

  const animationNames: any = [];
  const rules: any = [];
  const value = Array.isArray(keyframesValue)
    ? keyframesValue
    : [keyframesValue];

  value.forEach((keyframes) => {
    if (typeof keyframes === 'string') {
      // Support external animation libraries (identifiers only)
      animationNames.push(keyframes);
    } else {
      // Create rules for each of the keyframes
      const [identifier, keyframesRules] = createKeyframes(keyframes);
      animationNames.push(identifier);
      rules.push(...keyframesRules);
    }
  });

  return [animationNames, rules];
}

/**
 * Create individual CSS keyframes rules.
 */
function createKeyframes(keyframes: any): [string, Rules] {
  const prefixes = ['-webkit-', ''];
  const identifier = createIdentifier('r', 'animation', keyframes);

  const steps =
    '{' +
    Object.keys(keyframes)
      .map((stepName) => {
        const rule = keyframes[stepName];
        const block = createDeclarationBlock(rule);
        return `${stepName}${block}`;
      })
      .join('') +
    '}';

  const rules = prefixes.map((prefix) => {
    return `@${prefix}keyframes ${identifier}${steps}`;
  });
  return [identifier, rules];
}
