import get from 'lodash.get';
import {
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
  mergeDefaultProps: boolean = true,
  propertyName?: any
) => {
  // if (name !== 'Button') {
  //   return;
  // }

  for (const property in styledObj.internalPseudoProps) {
    if (PSEUDO_PROP_COMPONENT_MAP[property]) {
      //TODO: not calling again for nested state prop
      if (!propertyName) {
        updateComponentThemeMapForColorMode(
          PSEUDO_PROP_COMPONENT_MAP[property],
          `${key}.${PSEUDO_PROP_COMPONENT_MAP[property]}`,
          styledObj.internalPseudoProps[property],
          config,
          false,
          mergeDefaultProps
        );
      }
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
      // console.log(name, key, 'config here');

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
          const stateKey = propertyName
            ? propertyName + '.' + property
            : property;
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

          // if (name == 'Checkbox') {
          //   console.log(
          //     // property,
          //     key,
          //     // componentObj,
          //     // componentMapPath,
          //     styledObjNestedProp,
          //     'hello here 111'
          //   );

          // if (!isEmptyObj(styledObjNestedProp.internalPseudoProps)) {
          resolveForInternalPseudoProps(
            name,
            key,
            styledObjNestedProp,
            config,
            false,
            property
          );
          // }
          // }
        } else {
          // console.log(
          //   'hello here &&&*',
          //   styledObj.internalPseudoProps[property]
          // );

          if (!propertyName) {
            componentObj[config.colorMode][0].unResolvedProps = {
              ...componentObj[config.colorMode][0].unResolvedProps,
              [property]: styledObj.internalPseudoProps[property],
            };
          } else {
            componentObj[propertyName][config.colorMode][0].unResolvedProps = {
              ...componentObj[propertyName][config.colorMode][0]
                .unResolvedProps,
              [property]: styledObj.internalPseudoProps[property],
            };
          }
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
  // console.log(key, styledObj, config.colorMode, '&&&&&&');

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
    // console.log(key, platform);
    updateComponentThemeMap(key, {}, { platform });
  }
  return resolvedStyledMap;
};

export const generateBuildTimeMap = (
  platform: string = 'web',
  usedComponentDetailMap: any
) => {
  const componentsUsed = Object.keys(usedComponentDetailMap);
  for (const componentName of componentsUsed) {
    const componentPropsArray = usedComponentDetailMap[componentName];
    for (const componentProps of componentPropsArray) {
      updateComponentThemeMap(
        componentName,
        {},
        { platform, colorMode: 'light' },
        componentProps
      );
      updateComponentThemeMap(
        componentName,
        {},
        { platform, colorMode: 'dark' },
        componentProps
      );
    }
  }
  return resolvedStyledMap;
};

export const updateComponentThemeMap = (
  name: string,
  inputProps?: {},
  config: any = { platform: 'web', colorMode: 'light' },
  props?: any
) => {
  const { platform, colorMode } = config;

  // console.log(props, 'props here');
  // const componentTheme = get(theme, `components.${name}`, {});
  let themeObj = {};
  // if (runTimeResolution) {
  const currentColorScheme = props?.colorScheme; // || componentTheme?.defaultProps?.colorScheme;
  const currentVariant = props?.variant; // || componentTheme?.defaultProps?.variant;
  const currentSize = props?.size; // || componentTheme?.defaultProps?.size;

  if (currentVariant && currentColorScheme) {
    themeObj = updateComponentThemeMapForColorMode(
      name,
      `${name}.${currentColorScheme}.${currentVariant}`,
      { variant: currentVariant, colorScheme: currentColorScheme },
      {
        colorMode,
        platform,
      }
    );
  } else if (currentColorScheme) {
    themeObj = updateComponentThemeMapForColorMode(
      name,
      `${name}.${currentColorScheme}`,
      { colorScheme: currentColorScheme },
      {
        colorMode,
        platform,
      }
    );
  } else if (currentVariant) {
    themeObj = updateComponentThemeMapForColorMode(
      name,
      `${name}.${currentVariant}`,
      { variant: currentVariant },
      {
        colorMode,
        platform,
      }
    );
  } else if (currentSize) {
    // console.log(name, 'name here 111', currentSize);
    // if (name == 'Button') {
    //   console.trace('hh');
    // }
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
  } else {
    themeObj = updateComponentThemeMapForColorMode(
      name,
      name,
      inputProps,
      {
        colorMode,
        platform,
      },
      false,
      true
    );
  }

  return themeObj;
};

//   updateComponentThemeMapForColorMode(name, name, inputProps, {
//     colorMode: 'light',
//     platform,
//   });
//   updateComponentThemeMapForColorMode(name, name, inputProps, {
//     colorMode: 'dark',
//     platform,
//   });

//   if (COLOR_SCHEME_MAP[name]) {
//     for (const color in theme.colors) {
//       if (
//         ![
//           'white',
//           'black',
//           'lightText',
//           'darkText',
//           'contrastThreshold',
//         ].includes(color)
//       ) {
//         updateComponentThemeMapForColorMode(
//           name,
//           `${name}.${color}`,
//           { colorScheme: color },
//           {
//             colorMode: 'light',
//             platform,
//           }
//           // true
//         );

//         updateComponentThemeMapForColorMode(
//           name,
//           `${name}.${color}`,
//           { colorScheme: color },
//           {
//             colorMode: 'dark',
//             platform,
//           }
//           // true
//         );

//         for (const variant in componentTheme.variants) {
//           updateComponentThemeMapForColorMode(
//             name,
//             `${name}.${color}.${variant}`,
//             { variant: variant, colorScheme: color },
//             {
//               colorMode: 'light',
//               platform,
//             }
//             // true
//           );

//           updateComponentThemeMapForColorMode(
//             name,
//             `${name}.${color}.${variant}`,
//             { variant: variant, colorScheme: color },
//             {
//               colorMode: 'dark',
//               platform,
//             }
//             // true
//           );
//         }
//       }
//     );
//   } else if (currentVariant) {
//     themeObj = updateComponentThemeMapForColorMode(
//       name,
//       `${name}.${currentVariant}`,
//       { variant: currentVariant },
//       {
//         colorMode,
//         platform,
//       }
//     );
//   } else if (currentSize) {
//     // console.log(name, 'name here 111', currentSize);
//     // if (name == 'Button') {
//     //   console.trace('hh');
//     // }
//     themeObj = updateComponentThemeMapForColorMode(
//       name,
//       `${name}.${currentSize}`,
//       { size: currentSize },
//       {
//         colorMode,
//         platform,
//       },
//       false,
//       false
//     );
//   } else {
//     themeObj = updateComponentThemeMapForColorMode(
//       name,
//       name,
//       inputProps,
//       {
//         colorMode,
//         platform,
//       },
//       false,
//       true
//     );
//   }

//   return {};
// };

export * from '../core/ResolvedStyleMap';
