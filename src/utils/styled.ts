import { get as lodashGet } from 'lodash';

import { getStyledObject } from './getStyledComponentAndObjects';
// import { theme as defaultTheme } from '../theme';
const defaultTheme = {};
import { pseudoPropsMap } from '../hooks/useThemeProps/propsFlattener';

import { forEach, map, merge } from 'lodash';
import { isEmptyObj } from '../utils/isEmptyObj';

// Adding Map for storing the props and style for the styled component
export let resolvedStyledMap: { [key: string]: any } = {};

export const PSEUDO_PROP_COMPONENT_MAP: any = {
  _spinner: 'Spinner',
  _stack: 'Stack',
  _text: 'Text',
  _icon: 'Icon',
  _checkbox: 'Checkbox',
  _radio: 'Radio',
  _pressable: 'Pressable',
  _slide: 'Slide',
  _fade: 'Fade',
  _backdropFade: 'BackdropFace',
};

export const COLOR_SCHEME_MAP: any = {
  Button: true,
  ButtonGroup: true,
  IconButton: true,
  Checkbox: true,
  Radio: true,
  Alert: true,
  Badge: true,
  CircularProgress: true,
  Fab: true,
  Modal: true,
  Progress: true,
  Switch: true,
  Tag: true,
  Slider: true,
  SliderThumb: true,
  // SliderTrack: true,
  SliderFilledTrack: true,
};

export const init = (inputResolvedStyledMap?: any) => {
  if (inputResolvedStyledMap) {
    resolvedStyledMap = inputResolvedStyledMap;
  }
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    //@ts-ignore
    window['resolvedStyledMap'] = resolvedStyledMap;
    //@ts-ignore
  }
};

export const getResolvedStyleMap = (providerId: any, key: string) => {
  return resolvedStyledMap[providerId][key];
};

export const setResolvedStyleMap = (
  providerId: any,
  key: string,
  value: any,
  colorMode: string
) => {
  if (!resolvedStyledMap[providerId]) {
    resolvedStyledMap[providerId] = {};
  }
  const styledMap = resolvedStyledMap[providerId][key];
  if (!styledMap) {
    resolvedStyledMap[providerId][key] = {
      [colorMode]: [value],
    };
  } else {
    if (!styledMap[colorMode]) {
      styledMap[colorMode] = [];
    }
    styledMap[colorMode].push(value);
  }
};

/**
 *
 * @param styleSheet StyleSheet with theme style or state style
 * @param styleSheetProperty key of styleSheet
 * @returns style with current stylsheet property
 */
const getAndMergeThemeFromStylesheet = (
  styleSheet: any,
  styleSheetProperty: any
) => {
  // get style from stylsheet
  const currentPropertyStyleArray = map(styleSheet, styleSheetProperty);

  // merge styles
  let currentPropertyStyle = {};
  for (const props of currentPropertyStyleArray) {
    currentPropertyStyle = merge({}, currentPropertyStyle, props);
  }

  return currentPropertyStyle;
};

const getThemeObject = (
  providerId: any,
  componentName: any,
  colorMode: any,
  state?: any
) => {
  const styleObj: any = resolvedStyledMap?.[providerId]?.[componentName];

  if (!styleObj || !styleObj[colorMode]) {
    return {};
  }

  // Theme style
  let styleSheet = styleObj[colorMode];

  // state style
  const stateStyles = getPseudoStateStyles(providerId, componentName, state);

  if (componentName === 'Checkbox' && state.isInvalid && state.isHovered) {
    // console.log(componentName, stateStyles, 'component state');
  }

  let stateStyleSheet: any = [];

  forEach(stateStyles, (stateStyleObj) => {
    if (stateStyleObj[colorMode]) {
      // styleSheet = styleSheet.concat(stateStyleObj[colorMode]);
      stateStyleSheet = stateStyleSheet.concat(stateStyleObj[colorMode]);
    }
  });

  // Theme style props resolution
  let unResolvedProps = getAndMergeThemeFromStylesheet(
    styleSheet,
    'unResolvedProps'
  );

  const restDefaultProps = getAndMergeThemeFromStylesheet(
    styleSheet,
    'restDefaultProps'
  );
  const stateRestDefaultProps = getAndMergeThemeFromStylesheet(
    stateStyleSheet,
    'restDefaultProps'
  );

  const styleFromProps = getAndMergeThemeFromStylesheet(
    styleSheet,
    'styleFromProps'
  );

  let internalPseudoProps = getAndMergeThemeFromStylesheet(
    styleSheet,
    'internalPseudoProps'
  );

  // State style props resolution
  const stateStyleFromProps = getAndMergeThemeFromStylesheet(
    stateStyleSheet,
    'styleFromProps'
  );

  // Merging state styles internal pseudo props with theme style internal pseudo props
  internalPseudoProps = {
    ...internalPseudoProps,
    ...getAndMergeThemeFromStylesheet(stateStyleSheet, 'internalPseudoProps'),
  };

  // Merging state styles unresolved props with theme style unresolved props
  unResolvedProps = {
    ...unResolvedProps,
    ...getAndMergeThemeFromStylesheet(stateStyleSheet, 'unResolvedProps'),
  };

  return {
    // style: map(styleSheet, 'style'),
    unResolvedProps: unResolvedProps,
    styleFromProps: styleFromProps,
    stateStyleFromProps: stateStyleFromProps,
    restDefaultProps: restDefaultProps,
    stateRestDefaultProps: stateRestDefaultProps,
    internalPseudoProps: internalPseudoProps,
  };
};

const getComponentNameKeyFromProps = (
  componentName: string,
  { variant, colorScheme }: any = {}
) => {
  let componentKeyName: string = componentName;

  // const componentTheme = lodashGet(theme, `components.${componentName}`, {});

  const colorSchemeKey = colorScheme;
  // || componentTheme.defaultProps?.colorScheme;
  const variantKey = variant;
  // || componentTheme.defaultProps?.variant;

  if (colorSchemeKey && variantKey) {
    componentKeyName = `${componentName}.${colorSchemeKey}.${variantKey}`;
  } else if (variantKey) {
    componentKeyName = `${componentName}.${variant}`;
  } else if (colorSchemeKey) {
    componentKeyName = `${componentName}.${colorSchemeKey}`;
  }

  return componentKeyName;
};

// const get
export const getThemeProps = (
  theme: any,
  providerId: any,
  inputComponentKeyName: string,
  config: any,
  state?: any,
  props: any = {}
): any => {
  const componentNames = inputComponentKeyName.split('.');

  const rootComponentName = componentNames[0];
  const pseudoComponentKeyName = componentNames[1];

  let componentKeyName = rootComponentName;

  componentKeyName = getComponentNameKeyFromProps(rootComponentName, props);

  if (pseudoComponentKeyName) {
    componentKeyName = `${componentKeyName}.${pseudoComponentKeyName}`;
  }

  let themeObj: any = getThemeObject(
    providerId,
    componentKeyName,
    config.colorMode,
    state
  );

  if (isEmptyObj(themeObj)) {
    updateComponentThemeMap(
      theme,
      providerId,
      inputComponentKeyName,
      {},
      config,
      {
        variant: props.variant,
        colorScheme: props.colorScheme,
      }
    );
    themeObj = getThemeObject(
      providerId,
      componentKeyName,
      config.colorMode,
      state
    );
  }

  if (!isEmptyObj(themeObj) && props.size) {
    let componentKeyNameForSize = `${rootComponentName}.${props.size}`;

    if (pseudoComponentKeyName) {
      componentKeyNameForSize = `${componentKeyNameForSize}.${pseudoComponentKeyName}`;
    }

    let sizeThemeObj = getThemeObject(
      providerId,
      `${componentKeyNameForSize}`,
      config.colorMode,
      state
    );

    if (isEmptyObj(sizeThemeObj)) {
      if (!pseudoComponentKeyName) {
        if (isEmptyObj(sizeThemeObj)) {
          updateComponentThemeMap(
            theme,
            providerId,
            rootComponentName,
            {},
            config,
            {
              size: props.size,
            }
          );
          sizeThemeObj = getThemeObject(
            providerId,
            componentKeyNameForSize,
            config.colorMode,
            state
          );
        }
      }
    }

    const mergedThemeObj = {
      // style: sizeThemeObj?.style
      //   ? [...themeObj?.style, ...sizeThemeObj?.style]
      //   : themeObj.style,
      styleFromProps: merge(
        {},
        themeObj.styleFromProps,
        sizeThemeObj.styleFromProps
      ),
      unResolvedProps: merge(
        {},
        themeObj.unResolvedProps,
        sizeThemeObj.unResolvedProps
      ),
      internalPseudoProps: merge(
        {},
        themeObj.internalPseudoProps,
        sizeThemeObj.internalPseudoProps
      ),
      stateStyleFromProps: merge(
        {},
        themeObj.stateStyleFromProps,
        sizeThemeObj.stateStyleFromProps
      ),
      restDefaultProps: {
        ...themeObj.restDefaultProps,
        ...sizeThemeObj.restDefaultProps,
      },
      stateRestDefaultProps: {
        ...themeObj.stateRestDefaultProps,
        ...sizeThemeObj.stateRestDefaultProps,
      },
    };
    themeObj = mergedThemeObj;
  }

  return themeObj;
};
export const getResolvedProps = (key: string, colorMode?: any) => {
  const styleObj: any = resolvedStyledMap[key];

  if (!colorMode || !styleObj) {
    return null;
  }
  return styleObj[colorMode]['styleFromProps'];
};
const isValidStateKey = (stateKey: string, state: any) => {
  // console.log(stateKey, pseudoPropStateMap[stateKey], state, 'is valid');
  try {
    //@ts-ignore
    return state[pseudoPropsMap[stateKey].respondTo];
  } catch (e: any) {
    return false;
  }
};

const isValidState = (key: string, state: any) => {
  // include only startWith("_")
  const stateKeys = key.split('.');
  const isValid = stateKeys.every((stateKey: any) => {
    if (isValidStateKey(stateKey, state)) {
      return true;
    }
    return false;
  });

  // console.log(isValid, 'valid here');
  return isValid;
};

const getPriority = (propName: string) => {
  const propNameArray = propName.split('.');

  const maxPriority = propNameArray.reduce((previousValue, currentValue) => {
    //@ts-ignore
    return Math.max(previousValue, pseudoPropsMap[currentValue]?.priority);
  }, 0);

  const priority =
    //@ts-ignore
    maxPriority + propNameArray.length / 10;
  // }

  return priority;
};
const getPseudoStateStyles = (
  providerId: any,
  componentName: string,
  state: any
) => {
  const styleObj: any = [];
  const stateStyleArray: any = [];

  const componentStates = getResolvedStyleMap(providerId, componentName);

  // console.log(componentStates, '***** &&&&');

  // const currentPriority = 0;
  for (const k in componentStates) {
    const value = componentStates[k];

    // console.log(componentStates, k, componentName, 'value **&');
    //get for _hover, _checked
    if (k.startsWith('_')) {
      const priority = getPriority(k);
      stateStyleArray.push({ key: k, value: value, priority: priority });
    }
  }

  stateStyleArray.sort((obj1: any, obj2: any) => obj1.priority - obj2.priority);

  stateStyleArray.forEach((item: any) => {
    if (isValidState(item.key, state)) {
      styleObj.push(item.value);
    }
  });

  return styleObj;
};

const resolveForInternalPseudoProps = (
  theme: any,
  providerId: any,

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
          theme,
          providerId,

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
        theme,
        name,
        {},
        config,
        styledObj.internalPseudoProps[property]
      );

      const componentMapPath = key;
      const componentObj = getResolvedStyleMap(providerId, componentMapPath);

      if (componentObj) {
        // const stateKey = key.slice(componentMapPath.length + 1);
        //@ts-ignore
        if (pseudoPropsMap?.[property]?.respondTo) {
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
            theme,
            providerId,

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
  theme: any,
  providerId: any,
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
  // console.log(theme, 'theme here');
  let componentTheme = lodashGet(theme, `components.${name}`, {});
  // let componentTheme = get(defaultTheme, `components.${name}`, {});
  // if (runtime) {
  //   componentTheme =
  // }
  // resolve for variant

  if (resolveForStatePseudoProps) {
    componentTheme = {};
  }

  const styledObj: any = getStyledObject(
    theme,
    name,
    componentTheme,
    config,
    {
      ...inputProps,
      extraProp: key,
    },
    mergeDefaultProps
  );

  setResolvedStyleMap(providerId, key, styledObj, config.colorMode);
  // console.log(key, styledObj, config.colorMode, '&&&&&&');

  resolveForInternalPseudoProps(
    theme,
    providerId,
    name,
    key,
    styledObj,
    config,
    mergeDefaultProps
  );

  return styledObj;
};

// export const resolveDefaultTheme = (platform?: string) => {
//   // for (const key in theme.components) {
//   //   // console.log(key, platform);
//   //   updateComponentThemeMap(key, {}, { platform });
//   // }
//   // return resolvedStyledMap;
// };

export const generateBuildTimeMap = (
  platform: string = 'web',
  usedComponentDetailMap: any
) => {
  const componentsUsed = Object.keys(usedComponentDetailMap);
  for (const componentName of componentsUsed) {
    const componentPropsArray = usedComponentDetailMap[componentName];
    for (const componentProps of componentPropsArray) {
      updateComponentThemeMap(
        defaultTheme,
        // boot time provider id
        'generatedBuildTimeMap',
        componentName,
        {},
        { platform, colorMode: 'light' },
        componentProps
      );
      updateComponentThemeMap(
        defaultTheme,
        // boot time provider id
        'generatedBuildTimeMap',
        componentName,
        {},
        { platform, colorMode: 'dark' },
        componentProps
      );
    }
  }
  // return resolvedStyledMap;
};

export const updateComponentThemeMap = (
  theme: any,
  providerId: any,
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
      theme,
      providerId,
      name,
      `${name}.${currentColorScheme}.${currentVariant}`,
      { variant: currentVariant, colorScheme: currentColorScheme },
      {
        colorMode,
        platform,
      }
    );
  } else if (currentColorScheme) {
    // if (name === 'SliderThumb') {
    //   console.log(props, 'hello slider ');
    // }
    themeObj = updateComponentThemeMapForColorMode(
      theme,
      providerId,
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
      theme,
      providerId,

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
      theme,
      providerId,

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
      theme,
      providerId,

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
