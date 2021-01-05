import { get, isNil, mergeWith, cloneDeep, omit } from 'lodash';
import { useWindowDimensions } from 'react-native';
import { useNativeBase } from './useNativeBase';
import { themePropertyMap } from './../theme/base';
import {
  omitUndefined,
  getClosestBreakpoint,
  findLastValidBreakpoint,
  hasValidBreakpointFormat,
  extractInObject,
} from './../theme/tools/';
import { filterShadowProps } from './../utils/filterShadowProps';

function calculateProps(
  theme: any,
  colorModeProps: any,
  componentTheme: any,
  propsReceived: any
) {
  let windowWidth = useWindowDimensions()?.width;
  let currentBreakpoint = getClosestBreakpoint(theme.breakpoints, windowWidth);
  if (!propsReceived) {
    propsReceived = {};
  }

  // Extracting out children and style, as they do not contribute in props calculation
  let [ignoredProps, props] = extractInObject(propsReceived, [
    'children',
    'style',
  ]);
  props = omitUndefined(props);
  let newProps: any;
  if (componentTheme) {
    // Extracting props from defaultProps
    newProps = extractProps(
      filterDefaultProps(props, componentTheme.defaultProps),
      theme,
      colorModeProps,
      componentTheme,
      currentBreakpoint
    );
    // Extracting props from base style
    let componentBaseStyle =
      typeof componentTheme.baseStyle !== 'function'
        ? componentTheme.baseStyle
        : componentTheme.baseStyle({
            theme,
            ...newProps,
            ...props,
            ...colorModeProps,
          });
    newProps = mergeWith(
      newProps,
      componentBaseStyle,
      // @ts-ignore
      (objValue, srcValue, key) => {
        if (!isNil(objValue)) {
          delete newProps[key];
        }
      }
    );
    const variant =
      props.variant || get(componentTheme, 'defaultProps.variant');
    // Extracting props from variant
    if (
      variant &&
      componentTheme.variants &&
      componentTheme.variants[variant]
    ) {
      const colorScheme =
        props.colorScheme || get(componentTheme, 'defaultProps.colorScheme');
      let variantProps = componentTheme.variants[variant]({
        ...props,
        ...newProps,
        colorScheme,
        theme,
        ...colorModeProps,
      });
      // added this to handle order of props
      newProps = mergeWith(
        newProps,
        variantProps,
        // @ts-ignore
        (objValue, srcValue, key) => {
          if (!isNil(objValue)) {
            delete newProps[key];
          }
        }
      );
      delete newProps.variant;
      delete newProps.colorScheme;
    }
  }

  // Extracting props from normal props
  let extractedProps = extractProps(
    props,
    theme,
    colorModeProps,
    componentTheme,
    currentBreakpoint
  );
  // added this to handle order of props
  // @ts-ignore
  newProps = mergeWith(newProps, extractedProps, (objValue, srcValue, key) => {
    if (!isNil(objValue)) {
      delete newProps[key];
    }
  });
  let mergedProps = filterShadowProps(newProps, ignoredProps);
  return omitUndefined(mergedProps);
}

export function getPropsWithComponentTheme(
  localTheme: any,
  propsReceived: any
) {
  const { theme, ...colorModeProps } = useNativeBase();
  return calculateProps(
    omit(theme, ['component']),
    colorModeProps,
    localTheme,
    propsReceived
  );
}

export function usePropsConfig(component: string, propsReceived: any) {
  const { theme, ...colorModeProps } = useNativeBase();
  const componentTheme = get(theme, `components.${component}`);
  return calculateProps(
    omit(theme, ['component']),
    colorModeProps,
    componentTheme,
    propsReceived
  );
}

/*
 Extract props from theme props and omit those from props
*/
function extractProps(
  props: any,
  theme: any,
  colorModeProps: any,
  componentTheme: any,
  currentBreakpoint: number
) {
  let newProps: any = {};
  for (let property in props) {
    // If the property exists in theme map then get its value
    if (themePropertyMap[property]) {
      let propValues = extractPropertyFromFunction(
        property,
        props,
        theme,
        componentTheme
      );
      if (typeof propValues === 'string' || typeof propValues === 'number') {
        newProps[property] = propValues;
      } else if (!isNil(propValues)) {
        for (let nestedProp in propValues) {
          newProps[nestedProp] = get(
            theme,
            `${themePropertyMap[nestedProp]}.${propValues[nestedProp]}`,
            propValues[nestedProp]
          );
        }
      } else if (property === 'shadow') {
        let shadowProps = theme[themePropertyMap[property]](colorModeProps)[
          props[property]
        ];
        if (!isNil(shadowProps)) {
          newProps = { ...newProps, ...shadowProps };
        }
      } else {
        newProps[property] = resolveValueWithBreakpoint(
          props[property],
          currentBreakpoint,
          property
        );
      }
    } else {
      newProps[property] = resolveValueWithBreakpoint(
        props[property],
        currentBreakpoint,
        property
      );
    }
  }
  return cloneDeep(newProps);
}

/*
Remove props from defaultProps that are already present in props
*/
function filterDefaultProps(props: any, defaultProps: any) {
  let [, resultProps] = extractInObject(defaultProps, Object.keys(props));
  return resultProps;
}

/*
If property is functional in componentTheme, get its returned object
*/
const extractPropertyFromFunction = (
  property: string,
  props: any,
  theme: any,
  componentTheme: any
) => {
  let propValues;
  if (
    componentTheme &&
    typeof componentTheme[themePropertyMap[property]] === 'function'
  ) {
    let funcProps = componentTheme[themePropertyMap[property]]({
      theme,
      ...props,
    });
    // Check if returned object from componentTheme is a nested object
    let isNested = Object.keys(funcProps).some(function (key) {
      return funcProps[key] && typeof funcProps[key] === 'object';
    });
    propValues = isNested
      ? { ...get(funcProps, `${props[property]}`) }
      : { ...funcProps };
  } else {
    propValues = get(
      componentTheme,
      `${themePropertyMap[property]}.${props[property]}`
    );
  }
  return propValues;
};

/*
Checks the property and resolves it if it has breakpoints
*/
const resolveValueWithBreakpoint = (
  values: any,
  currentBreakpoint: number,
  property: any
) => {
  if (hasValidBreakpointFormat(values, property)) {
    return findLastValidBreakpoint(values, currentBreakpoint);
  } else {
    return values;
  }
};
