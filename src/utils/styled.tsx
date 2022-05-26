import React from 'react';
import {
  useSafeArea,
  resolvePropsToStyle,
  useStyledSystemPropsResolver,
} from '../hooks/';
import { memoize } from 'lodash';
import get from 'lodash.get';
import merge from 'lodash.merge';
import { View, StyleSheet, Platform } from 'react-native';
import { useColorMode } from '../core';
import { propsFlattener } from '../hooks/useThemeProps/propsFlattener';
import { ITheme, theme } from '../theme';
import { getStyleAndFilteredProps, propConfig } from '../theme/styled-system';

window['StyleSheet'] = StyleSheet;
import {
  callPropsFlattener,
  propsSpreader,
} from '../hooks/useThemeProps/usePropsResolution';
import { isEmptyObj } from './isEmptyObj';
import isEmpty from 'lodash.isempty';
import { getStyledComponent } from './getStyledComponentAndObjects';
import {
  get as getResolvedStyleMap,
  set as setResolvedStyleMap,
} from '../core';

// TODO: Scalibility issue, might have to shift to a map

const PSEUDO_PROP_COMPONENT_MAP = {
  _spinner: 'Spinner',
  _stack: 'Stack',
  _text: 'Text',
  _icon: 'Icon',
  _checkbox: 'Checkbox',
  _label: 'Text',
};

window['logger'] = {};
console.batchTime = (key) => {
  const keyValue = window['logger'][key];
  if (keyValue) {
    // keyValue.totalTime = keyValue.totalTime + (Date.now() - keyValue.startTime);
    keyValue.startTime = window.performance.now();
  } else {
    window['logger'][key] = {
      startTime: window.performance.now(),
      totalTime: 0,
    };
  }
};

console.batchTimeEnd = (key) => {
  const keyValue = window['logger'][key];
  if (keyValue) {
    keyValue.totalTime =
      keyValue.totalTime + (window.performance.now() - keyValue.startTime);
    // console.log(
    //   "useStyledSystemPropsResolver 2222",
    //   keyValue,
    //   window.performance.now()
    // );
  }
};

const resolveForInternalPseudoProps = (
  name: any,
  key: any,
  styledObj: any,
  colorMode: any
) => {
  for (const property in styledObj.internalPseudoProps) {
    if (PSEUDO_PROP_COMPONENT_MAP[property]) {
      resolveComponentThemeStyleAndUpdateMapForColorMode(
        PSEUDO_PROP_COMPONENT_MAP[property],
        `${key}.${PSEUDO_PROP_COMPONENT_MAP[property]}`,
        styledObj.internalPseudoProps[property],
        colorMode,
        true
      );
    } else {
      // console.log(key, name, property, 'property here');
      resolveComponentThemeStyleAndUpdateMapForColorMode(
        name,
        `${key}.${property}`,
        styledObj.internalPseudoProps[property],
        colorMode,
        true
      );
    }
  }
};

const resolveComponentThemeStyleAndUpdateMapForColorMode = (
  name: string,
  key: string,
  inputProps?: {},
  colorMode: 'light' | 'dark' = 'light',
  resolveForStatePseudoProps: boolean = false
) => {
  const componentTheme = get(theme, `components.${name}`, {});
  // resolve for variant
  const styledObj: any = getStyledComponent(
    componentTheme,
    name,
    colorMode,
    inputProps,
    resolveForStatePseudoProps
  );

  // TODO: run only once
  // // resolve for all variants and sizes
  // if (!resolveForStatePseudoProps) {
  //   // const componentTheme = get(theme, `components.${name}`, {});

  // }
  console.log(key, name, styledObj, '**** variant ****  @@');
  resolveForInternalPseudoProps(name, key, styledObj, colorMode);
  setResolvedStyleMap(key, styledObj, colorMode);
  return styledObj;
};

export const resolveComponentThemeStyleAndUpdateMap = (
  name: string,
  inputProps?: {}
) => {
  const lightThemeObj = resolveComponentThemeStyleAndUpdateMapForColorMode(
    name,
    name,
    inputProps,
    'light'
  );

  // resolve for all variants
  const componentTheme = get(theme, `components.${name}`, {});
  for (const variant in componentTheme.variants) {
    resolveComponentThemeStyleAndUpdateMapForColorMode(
      name,
      `${name}.${variant}`,
      { variant: variant },
      'light',
      false
    );
  }

  // resolve for all sizes
  for (const size in componentTheme.sizes) {
    resolveComponentThemeStyleAndUpdateMapForColorMode(
      name,
      `${name}.${size}`,
      { size: size },
      'light',
      false
    );
  }

  // resolve for all variants and sizes

  for (const variant in componentTheme.variants) {
    for (const size in componentTheme.sizes) {
      resolveComponentThemeStyleAndUpdateMapForColorMode(
        name,
        `${name}.${variant}.${size}`,
        { size: size, variant: variant },
        'light',
        false
      );
    }
  }

  // const darkThemeObj = resolveComponentThemeStyleAndUpdateMapForColorMode(
  //   name,
  //   name,
  //   inputProps,
  //   'dark'
  // );
  const darkThemeObj = {};
  return { lightThemeObj, darkThemeObj };
};

const resolveComponentTheme = (
  incomingProps: any,
  themeType: Array<string>,
  providedTheme: any
): any => {
  try {
    if (themeType[1]) {
      return typeof providedTheme[themeType[0]][themeType[1]] !== 'function'
        ? providedTheme[themeType[0]][themeType[1]]
        : providedTheme[themeType[0]][themeType[1]]({
            theme,
            ...incomingProps,
            colorMode: 'light',
          });
    } else {
      return typeof providedTheme[themeType[0]] !== 'function'
        ? providedTheme[themeType[0]]
        : providedTheme[themeType[0]]({
            theme,
            ...incomingProps,
            colorMode: 'light',
          });
    }
  } catch {
    return {};
  }
};

const mergeStylesWithSpecificity = (
  componentTheme: any,
  flattenProps: any,
  specificityMap: any,
  colorMode: any
) => {
  let combinedBaseStyle = {};
  let combinedVariantStyle = {};
  let combinedSizeStyle = {};
  let flattenBaseStyle, baseSpecificityMap;
  const extendedTheme: Array<any> = [];

  if (!isEmpty(componentTheme)) extendedTheme.push(componentTheme);

  extendedTheme.map((extededComponentTheme: any) => {
    if (extededComponentTheme.baseStyle) {
      combinedBaseStyle = {
        ...combinedBaseStyle,
        ...resolveComponentTheme(
          flattenProps,
          ['baseStyle'],
          extededComponentTheme
        ),
      };
    }
    if (flattenProps.variant) {
      if (extededComponentTheme.variants) {
        combinedVariantStyle = {
          ...combinedVariantStyle,
          ...resolveComponentTheme(
            flattenProps,
            ['variants', flattenProps.variant],
            extededComponentTheme
          ),
        };
      }
    }
    if (
      flattenProps.size &&
      extededComponentTheme?.sizes &&
      extededComponentTheme?.sizes[flattenProps.size]
    ) {
      if (
        typeof extededComponentTheme.sizes[flattenProps.size] === 'string' ||
        typeof extededComponentTheme.sizes[flattenProps.size] === 'number'
      ) {
        flattenProps.size = extededComponentTheme.sizes[flattenProps.size];
      } else {
        combinedSizeStyle = {
          ...combinedSizeStyle,
          ...resolveComponentTheme(
            flattenProps,
            ['sizes', flattenProps.size],
            extededComponentTheme
          ),
        };
        flattenProps.size = undefined;
      }
    }
  });

  // console.log(combinedBaseStyle, " ******* ");
  if (!isEmptyObj(combinedBaseStyle)) {
    [flattenBaseStyle, baseSpecificityMap] = callPropsFlattener(
      combinedBaseStyle,
      specificityMap,
      1,
      {},
      { colorMode: colorMode },
      {},
      flattenProps
    );
  }

  // NOTE: Resolving variants
  let flattenVariantStyle, variantSpecificityMap;
  // Extracting props from variant

  // console.log(combinedVariantStyle, "999999");
  if (!isEmptyObj(combinedVariantStyle)) {
    [flattenVariantStyle, variantSpecificityMap] = callPropsFlattener(
      combinedVariantStyle,
      baseSpecificityMap || specificityMap,
      1,
      {},
      { colorMode: colorMode },
      {},
      flattenProps
    );

    // We remove variant from original props if we found it in the componentTheme
    //@ts-ignore
    flattenProps.variant = undefined;
  }

  // NOTE: Resolving size

  let flattenSizeStyle, sizeSpecificityMap;
  // Extracting props from size

  // console.log(combinedSizeStyle, "&&&&&&&");
  if (!isEmptyObj(combinedSizeStyle)) {
    [flattenSizeStyle, sizeSpecificityMap] = callPropsFlattener(
      combinedSizeStyle,
      variantSpecificityMap || baseSpecificityMap || specificityMap,
      1,
      {},
      { colorMode: colorMode },
      {},
      flattenProps
    );
  }

  //////

  const defaultStyles = merge(
    {},
    flattenBaseStyle,
    flattenVariantStyle,
    flattenSizeStyle
  );

  const defaultSpecificity = merge(
    {},
    specificityMap,
    baseSpecificityMap,
    variantSpecificityMap,
    sizeSpecificityMap
  );

  // console.log(defaultSpecificity, "h3h3h3");

  flattenProps = propsSpreader(
    { ...defaultStyles, ...flattenProps },
    defaultSpecificity
  );
  return [flattenProps];
};

export const makeStyledComponent = (
  Comp: any
  // componentName: keyof ITheme['components']
) => {
  //TODO: component theme
  // return <> </>;

  // const globalLightStyle = getStyledComponent(componentName, 'light');
  // const globalDarkStyle = getStyledComponent(componentName, 'dark');

  // console.log(StyleSheet.flatten(globalLightStyle.style), 'hello style');
  return React.forwardRef(({ debug, ...props }: any, ref: any) => {
    // console.log(props, 'hello props **********');
    const [style, restProps] = useStyledSystemPropsResolver(props);

    // console.log(props, 'props here');
    // if (process.env.NODE_ENV === "development" && debug) {
    //   /* eslint-disable-next-line */
    //   console.log(
    //     `%cstyleSystem`,
    //     "background: #4b5563; color: #d97706; font-weight: 700; padding: 2px 8px;"
    //   );
    //   /* eslint-disable-next-line */
    //   console.log("%c props: ", "color: #4ade80; font-weight: 700;", props);
    //   /* eslint-disable-next-line */
    //   console.log("%c style: ", "color: #22d3ee; font-weight: 700;", style);
    //   /* eslint-disable-next-line */
    //   console.log(
    //     "%c restProps: ",
    //     "color: #22d3ee; font-weight: 700;",
    //     restProps
    //   );
    // }

    // console.log("box props", props);
    // const safeAreaProps = useSafeArea(props);
    // console.timeEnd("useSafeArea");

    // check dark / light mode
    // based on color mode pass style

    // const { colorMode } = useColorMode();
    // let componentStyle = {};
    // if (colorMode === 'light') {
    //   componentStyle = globalLightStyle;
    // } else {
    //   componentStyle = globalDarkStyle;
    // }

    return (
      <Comp {...restProps} style={style} ref={ref}>
        {props.children}
      </Comp>
    );
  });
};
