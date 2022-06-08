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
import {
  useColorMode,
  getThemeProps,
  pseudoPropStateMap,
  PSEUDO_PROP_COMPONENT_MAP,
} from '../core';
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
import { getStyledObject } from './getStyledComponentAndObjects';
import {
  get as getResolvedStyleMap,
  set as setResolvedStyleMap,
} from '../core';

// TODO: Scalibility issue, might have to shift to a map

// for (const key in theme.components) {
// console.log(key, 'key here ***');
// }

// export const PSEUDO_PROP_COMPONENT_MAP = {
//   _spinner: 'Spinner',
//   _stack: 'Stack',
//   _text: 'Text',
//   _icon: 'Icon',
//   _checkbox: 'Checkbox',
//   _label: 'Text',
//   // _input: 'Input',
//   // _slide: 'Slide',
//   // _backdropFade: 'BackdropFade',
//   // _fade: 'Fade',
// };

const COLOR_SCHEME_MAP = {
  Button: true,
  IconButton: true,
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
  colorMode: any,
  mergeDefaultProps: boolean = true
) => {
  // if (name !== 'Button') {
  //   return;
  // }
  for (const property in styledObj.internalPseudoProps) {
    if (PSEUDO_PROP_COMPONENT_MAP[property]) {
      // if (key === 'Button.sm') {
      //   console.log(
      //     mergeDefaultProps,
      //     key,
      //     PSEUDO_PROP_COMPONENT_MAP[property],
      //     '******'
      //   );
      // }
      updateComponentThemeMapForColorMode(
        PSEUDO_PROP_COMPONENT_MAP[property],
        `${key}.${PSEUDO_PROP_COMPONENT_MAP[property]}`,
        styledObj.internalPseudoProps[property],
        colorMode,
        false,
        mergeDefaultProps
      );
    } else {
      // const themeProps = getThemeProps(name, colorMode, {
      //   [pseudoPropStateMap[property]]: true,
      // });

      // if (property === '_hover') {
      //   console.log(
      //     // name,
      //     // property,
      //     // pseudoPropStateMap[property],
      //     themeProps,
      //     {
      //       ...themeProps.styleFromProps,
      //       ...styledObj.internalPseudoProps[property],
      //     },
      //     'theme props '
      //   );
      // }

      const styledObjNestedProp: any = getStyledObject(
        {},
        colorMode,
        styledObj.internalPseudoProps[property]
      );

      const componentMapPath = key;
      const componentObj = getResolvedStyleMap(componentMapPath);

      if (componentObj) {
        // const stateKey = key.slice(componentMapPath.length + 1);
        if (pseudoPropStateMap[property]) {
          const stateKey = property;
          if (componentObj[stateKey]) {
            if (!componentObj[stateKey][colorMode]) {
              componentObj[stateKey][colorMode] = [];
            }
            componentObj[stateKey][colorMode].push(styledObjNestedProp);
          } else {
            componentObj[stateKey] = { [colorMode]: [styledObjNestedProp] };
          }
        } else {
          // console.log(
          //   'hello here &&&*',
          //   styledObj.internalPseudoProps[property]
          // );
          componentObj[colorMode][0].unResolvedProps = {
            ...componentObj[colorMode][0].unResolvedProps,
            [property]: styledObj.internalPseudoProps[property],
          };
        }
      }
    }
  }
};

const updateComponentThemeMapForColorMode = (
  name: string,
  key: string,
  inputProps?: {},
  colorMode: 'light' | 'dark' = 'light',
  resolveForStatePseudoProps: boolean = false,
  mergeDefaultProps: boolean = true
) => {
  let componentTheme = get(theme, `components.${name}`, {});
  // resolve for variant

  if (resolveForStatePseudoProps) {
    componentTheme = {};
  }

  const styledObj: any = getStyledObject(
    componentTheme,
    colorMode,
    {
      ...inputProps,
      extraProp: key,
    },
    mergeDefaultProps
  );

  setResolvedStyleMap(key, styledObj, colorMode);

  resolveForInternalPseudoProps(
    name,
    key,
    styledObj,
    colorMode,
    mergeDefaultProps
  );

  return styledObj;
};

export const updateComponentThemeMap = (name: string, inputProps?: {}) => {
  updateComponentThemeMapForColorMode(name, name, inputProps, 'light');
  updateComponentThemeMapForColorMode(name, name, inputProps, 'dark');

  // resolve for all variants
  const componentTheme = get(theme, `components.${name}`, {});

  // resolve for colors only for button

  if (COLOR_SCHEME_MAP[name]) {
    for (const color in theme.colors) {
      if (
        ![
          'white',
          'black',
          'lightText',
          'darkText',
          'contrastThreshold',
        ].includes(color)
      ) {
        updateComponentThemeMapForColorMode(
          name,
          `${name}.${color}`,
          { colorScheme: color },
          'light'
          // true
        );

        updateComponentThemeMapForColorMode(
          name,
          `${name}.${color}`,
          { colorScheme: color },
          'dark'
          // true
        );

        for (const variant in componentTheme.variants) {
          updateComponentThemeMapForColorMode(
            name,
            `${name}.${color}.${variant}`,
            { variant: variant, colorScheme: color },
            'light'
            // true
          );

          updateComponentThemeMapForColorMode(
            name,
            `${name}.${color}.${variant}`,
            { variant: variant, colorScheme: color },
            'dark'
            // true
          );
        }
      }
      // console.log(color, 'hello &&&&&');
    }
  } else {
    for (const variant in componentTheme.variants) {
      updateComponentThemeMapForColorMode(
        name,
        `${name}.${variant}`,
        { variant: variant },
        'light'
        // true
      );
      updateComponentThemeMapForColorMode(
        name,
        `${name}.${variant}`,
        { variant: variant },
        'dark'
      );
    }
  }

  // resolve for all sizes
  for (const size in componentTheme.sizes) {
    updateComponentThemeMapForColorMode(
      name,
      `${name}.${size}`,
      { size: size },
      'light',
      false,
      false
    );
    updateComponentThemeMapForColorMode(
      name,
      `${name}.${size}`,
      { size: size },
      'dark',
      false,
      false
    );
  }

  // resolve for all variants and sizes
  // for (const variant in componentTheme.variants) {
  //   for (const size in componentTheme.sizes) {
  //     updateComponentThemeMapForColorMode(
  //       name,
  //       `${name}.${variant}.${size}`,
  //       { size: size, variant: variant },
  //       'light'
  //     );
  //     updateComponentThemeMapForColorMode(
  //       name,
  //       `${name}.${variant}.${size}`,
  //       { size: size, variant: variant },
  //       'dark'
  //     );
  //   }
  // }
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

// console.time('resolveTheme>>>>');
for (const key in theme.components) {
  updateComponentThemeMap(key);
}
// console.timeEnd('resolveTheme>>>>');

// for (const key in theme.components) {
// }

// updateComponentThemeMap('Icon');
