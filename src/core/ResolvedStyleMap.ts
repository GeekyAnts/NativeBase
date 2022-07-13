import { forEach, map, merge } from 'lodash';
// import type { ColorMode } from './color-mode';
import { isEmptyObj } from '../utils/isEmptyObj';
import { updateComponentThemeMap } from '../utils/styled';
import { pseudoPropsMap } from '../hooks/useThemeProps/propsFlattener';

// Adding Map for storing the props and style for the styled component
export let resolvedStyledMap: { [key: string]: any } = {};
// export const pseudoPropStateMap: any = {
//   _disabled: 'isDisabled',
//   _focusVisible: 'isFocusVisible',
//   _focus: 'isFocused',
//   _pressed: 'isPressed',
//   _checked: 'isChecked',
//   _loading: 'isLoading',
//   _invalid: 'isInvalid',
//   _hover: 'isHovered',
//   _reversed: 'isReversed',
// };

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
  // _label: 'Text',
  // _input: 'Input',
  // _slide: 'Slide',
  // _backdropFade: 'BackdropFade',
  // _fade: 'Fade',
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
  // resolvedStyledMap = new Map();

  if (inputResolvedStyledMap) {
    resolvedStyledMap = inputResolvedStyledMap;
  }
  if (process.env.NODE_ENV === 'development') {
    //@ts-ignore
    window['resolvedStyledMap'] = resolvedStyledMap;
    //@ts-ignore
  }
};

export const get = (providerId: any, key: string) => {
  // console.log(key, 'key here 111');
  // console.log(resolvedStyledMap[key], 'key here 111');
  return resolvedStyledMap[providerId][key];
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

  forEach(stateStyles, (stateStyleObj) => {
    if (stateStyleObj[colorMode]) {
      styleSheet = styleSheet.concat(stateStyleObj[colorMode]);
    }
  });

  const unResolvedPropsArray = map(styleSheet, 'unResolvedProps');

  let unResolvedProps = {};
  for (const props of unResolvedPropsArray) {
    // unResolvedProps = { ...unResolvedProps, ...props };
    unResolvedProps = merge({}, unResolvedProps, props);
  }

  const restDefaultPropsArray = map(styleSheet, 'restDefaultProps');
  let restDefaultProps = {};
  for (const props of restDefaultPropsArray) {
    restDefaultProps = { ...restDefaultProps, ...props };
  }

  const styleFromPropsArray = map(styleSheet, 'styleFromProps');
  let styleFromProps = {};
  for (const props of styleFromPropsArray) {
    styleFromProps = { ...styleFromProps, ...props };
  }

  const internalPseudoPropsArray = map(styleSheet, 'internalPseudoProps');
  let internalPseudoProps = {};
  for (const props of internalPseudoPropsArray) {
    internalPseudoProps = { ...internalPseudoProps, ...props };
  }

  return {
    style: map(styleSheet, 'style'),
    unResolvedProps: unResolvedProps,
    styleFromProps: styleFromProps,
    restDefaultProps: restDefaultProps,
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
  // console.log(themeObj, providerId, 'theme obje');

  if (isEmptyObj(themeObj)) {
    // console.log('hello here 1111', inputComponentKeyName);
    // updateComponentThemeMap(inputComponentKeyName, {}, config, {});
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
      style: sizeThemeObj?.style
        ? [...themeObj?.style, ...sizeThemeObj?.style]
        : themeObj.style,
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
      restDefaultProps: {
        ...themeObj.restDefaultProps,
        ...sizeThemeObj.restDefaultProps,
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

  const componentStates = get(providerId, componentName);

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

// export const getResolvedStyleSheet = (
//   componentName: string | Array<any>,
//   colorMode?: ColorMode,
//   state?: any,
//   variant?: any,
//   size?: any
// ) => {
//   if (typeof componentName !== 'string') {
//     componentName = componentName.filter((item) => item).join('.');
//     // console.log(componentName, 'component name &&&^');
//   } else {
//     if (variant && size) {
//       componentName = `${componentName}.${variant}.${size}`;
//     } else if (variant) {
//       componentName = `${componentName}.${variant}`;
//     } else if (size) {
//       componentName = `${componentName}.${size}`;
//     }
//   }

//   const styleObj: any = resolvedStyledMap.get(componentName);

//   // console.log(componentName, colorMode, styleObj, 'component name &&&&&');

//   if (!colorMode || !styleObj) {
//     return null;
//   }
//   // Theme style
//   const styleSheet = map(styleObj[colorMode], 'style');

//   // state style
//   const stateStyles = getPseudoStateStyles(componentName, state);
//   forEach(stateStyles, (stateStyleObj) => {
//     // console.log(
//     //   componentName,
//     //   stateStyleObj[colorMode].style,
//     //   map(stateStyleObj[colorMode], 'style'),
//     //   'hello component name )))'
//     // );

//     styleSheet.push(map(stateStyleObj[colorMode], 'style'));
//   });

//   return styleSheet;
// };
export const set = (
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

export const log = () => {
  // console.log(resolvedStyledMap);
};
