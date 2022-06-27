import get from 'lodash.get';
import {
  COLOR_SCHEME_MAP,
  pseudoPropStateMap,
  PSEUDO_PROP_COMPONENT_MAP,
  resolvedStyledMap,
} from '../core/ResolvedStyleMap';
//@ts-ignore
// eslint-disable-next-line dot-notation
// window['StyleSheet'] = StyleSheet;
import { getStyledObject } from './getStyledComponentAndObjects';
import {
  get as getResolvedStyleMap,
  set as setResolvedStyleMap,
} from '../core/ResolvedStyleMap';
import { theme } from '../theme';
import { cpuUsage } from 'process';

// window['logger'] = {};
// console.batchTime = (key) => {
//   const keyValue = window['logger'][key];
//   if (keyValue) {
//     // keyValue.totalTime = keyValue.totalTime + (Date.now() - keyValue.startTime);
//     keyValue.startTime = window.performance.now();
//   } else {
//     window['logger'][key] = {
//       startTime: window.performance.now(),
//       totalTime: 0,
//     };
//   }
// };

// console.batchTimeEnd = (key) => {
//   const keyValue = window['logger'][key];
//   if (keyValue) {
//     keyValue.totalTime =
//       keyValue.totalTime + (window.performance.now() - keyValue.startTime);
//     // console.log(
//     //   "useStyledSystemPropsResolver 2222",
//     //   keyValue,
//     //   window.performance.now()
//     // );
//   }
// };

const resolveForInternalPseudoProps = (
  name: any,
  key: any,
  styledObj: any,
  config: any,
  mergeDefaultProps: boolean = true
) => {
  console.log(config, 'config here');
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
        config,
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
        name,
        {},
        config,
        styledObj.internalPseudoProps[property]
      );

      const componentMapPath = key;
      const componentObj = getResolvedStyleMap(componentMapPath);

      if (componentObj) {
        // const stateKey = key.slice(componentMapPath.length + 1);
        if (pseudoPropStateMap[property]) {
          const stateKey = property;
          if (componentObj[stateKey]) {
            if (!componentObj[stateKey][config.colorMode]) {
              componentObj[stateKey][config.colorMode] = [];
            }
            componentObj[stateKey][config.colorMode].push(styledObjNestedProp);
          } else {
            componentObj[stateKey] = {
              [config.colorMode]: [styledObjNestedProp],
            };
          }
        } else {
          // console.log(
          //   'hello here &&&*',
          //   styledObj.internalPseudoProps[property]
          // );
          componentObj[config.colorMode][0].unResolvedProps = {
            ...componentObj[config.colorMode][0].unResolvedProps,
            [property]: styledObj.internalPseudoProps[property],
          };
        }
      }
    }
  }
};

export const updateComponentThemeMapForColorMode = (
  name: string,
  key: string,
  inputProps?: {},
  config: any = {
    colorMode: 'light',
    platform: 'web',
  },
  resolveForStatePseudoProps: boolean = false,
  mergeDefaultProps: boolean = true
) => {
  let componentTheme = get(theme, `components.${name}`, {});
  // resolve for variant

  if (resolveForStatePseudoProps) {
    componentTheme = {};
  }

  const styledObj: any = getStyledObject(
    name,
    componentTheme,
    config,
    {
      ...inputProps,
      extraProp: key,
    },
    mergeDefaultProps
  );

  setResolvedStyleMap(key, styledObj, config.colorMode);

  resolveForInternalPseudoProps(
    name,
    key,
    styledObj,
    config,
    mergeDefaultProps
  );

  return styledObj;
};

export const resolveDefaultTheme = (platform?: string) => {
  for (const key in theme.components) {
    updateComponentThemeMap(key, {}, { platform });
  }
  return resolvedStyledMap;
};

export const updateComponentThemeMap = (
  name: string,
  inputProps?: {},
  config: any = { platform: 'web', colorMode: 'light' },
  runTimeResolution: boolean = false,
  props?: any
) => {
  const { platform, colorMode } = config;

  const componentTheme = get(theme, `components.${name}`, {});
  let themeObj = {};
  if (runTimeResolution) {
    themeObj = updateComponentThemeMapForColorMode(name, name, inputProps, {
      colorMode: colorMode,
      platform,
    });

    // updateComponentThemeMapForColorMode(name, name, inputProps, {
    //   colorMode: 'dark',
    //   platform,
    // });

    const currentColorScheme =
      props?.colorScheme || componentTheme?.defaultProps?.colorScheme;
    const currentVariant =
      props?.variant || componentTheme?.defaultProps?.variant;
    const currentSize = props?.size || componentTheme?.defaultProps?.size;

    // console.log(inputProps, 'input props');
    if (COLOR_SCHEME_MAP[name]) {
      themeObj = updateComponentThemeMapForColorMode(
        name,
        `${name}.${currentColorScheme}`,
        { colorScheme: currentColorScheme },
        {
          colorMode: colorMode,
          platform,
        }
      );

      // updateComponentThemeMapForColorMode(
      //   name,
      //   `${name}.${currentColorScheme}`,
      //   { colorScheme: currentColorScheme },
      //   {
      //     colorMode: 'dark',
      //     platform,
      //   }
      // );

      if (componentTheme?.variants) {
        themeObj = updateComponentThemeMapForColorMode(
          name,
          `${name}.${currentColorScheme}.${currentVariant}`,
          { variant: currentVariant, colorScheme: currentColorScheme },
          {
            colorMode: colorMode,
            platform,
          }
        );
        // updateComponentThemeMapForColorMode(
        //   name,
        //   `${name}.${currentColorScheme}.${currentVariant}`,
        //   { variant: currentVariant, colorScheme: currentColorScheme },
        //   {
        //     colorMode: 'dark',
        //     platform,
        //   }
        // );
      }
    } else {
      if (componentTheme?.variants) {
        themeObj = updateComponentThemeMapForColorMode(
          name,
          `${name}.${currentVariant}`,
          { variant: currentVariant },
          {
            colorMode,
            platform,
          }
        );
        // updateComponentThemeMapForColorMode(
        //   name,
        //   `${name}.${currentVariant}`,
        //   { variant: currentVariant },
        //   {
        //     colorMode: 'dark',
        //     platform,
        //   }
        // );
      }
    }

    if (componentTheme?.sizes) {
      themeObj = updateComponentThemeMapForColorMode(
        name,
        `${name}.${currentSize}`,
        { size: currentSize },
        {
          colorMode,
          platform,
        },
        false,
        false
      );
      // updateComponentThemeMapForColorMode(
      //   name,
      //   `${name}.${currentSize}`,
      //   { size: currentSize },
      //   {
      //     colorMode: 'dark',
      //     platform,
      //   },
      //   false,
      //   false
      // );
    }

    return themeObj;
  }

  updateComponentThemeMapForColorMode(name, name, inputProps, {
    colorMode: 'light',
    platform,
  });
  updateComponentThemeMapForColorMode(name, name, inputProps, {
    colorMode: 'dark',
    platform,
  });

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
          {
            colorMode: 'light',
            platform,
          }
          // true
        );

        updateComponentThemeMapForColorMode(
          name,
          `${name}.${color}`,
          { colorScheme: color },
          {
            colorMode: 'dark',
            platform,
          }
          // true
        );

        for (const variant in componentTheme.variants) {
          updateComponentThemeMapForColorMode(
            name,
            `${name}.${color}.${variant}`,
            { variant: variant, colorScheme: color },
            {
              colorMode: 'light',
              platform,
            }
            // true
          );

          updateComponentThemeMapForColorMode(
            name,
            `${name}.${color}.${variant}`,
            { variant: variant, colorScheme: color },
            {
              colorMode: 'dark',
              platform,
            }
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
        {
          colorMode: 'light',
          platform,
        }
        // true
      );
      updateComponentThemeMapForColorMode(
        name,
        `${name}.${variant}`,
        { variant: variant },
        {
          colorMode: 'dark',
          platform,
        }
      );
    }
  }

  // resolve for all sizes
  for (const size in componentTheme.sizes) {
    updateComponentThemeMapForColorMode(
      name,
      `${name}.${size}`,
      { size: size },
      {
        colorMode: 'light',
        platform,
      },
      false,
      false
    );
    updateComponentThemeMapForColorMode(
      name,
      `${name}.${size}`,
      { size: size },
      {
        colorMode: 'dark',
        platform,
      },
      false,
      false
    );
  }
};

export * from '../core/ResolvedStyleMap';
