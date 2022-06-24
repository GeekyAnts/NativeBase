import { forEach, map, get as lodashGet, merge } from 'lodash';
// import type { ColorMode } from './color-mode';
import { isEmptyObj } from '../utils/isEmptyObj';
import { theme } from '../theme';
import { updateComponentThemeMap } from '../utils/styled';

// Adding Map for storing the props and style for the styled component
export let resolvedStyledMap: { [key: string]: any } = {};
export const pseudoPropStateMap: any = {
  _disabled: 'isDisabled',
  _focusVisible: 'isFocusVisible',
  _focus: 'isFocused',
  _hover: 'isHovered',
  _pressed: 'isPressed',
  _checked: 'isChecked',
  _loading: 'isLoading',
  _invalid: 'isInvalid',
  _reversed: 'isReversed',
};

export const PSEUDO_PROP_COMPONENT_MAP: any = {
  _spinner: 'Spinner',
  _stack: 'Stack',
  _text: 'Text',
  _icon: 'Icon',
  _checkbox: 'Checkbox',
  _radio: 'Radio',
  _pressable: 'Pressable',
  // _label: 'Text',
  // _input: 'Input',
  // _slide: 'Slide',
  // _backdropFade: 'BackdropFade',
  // _fade: 'Fade',
};

export const COLOR_SCHEME_MAP: any = {
  Button: true,
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

export const get = (key: string) => {
  // console.log(key, 'key here 111');
  // console.log(resolvedStyledMap[key], 'key here 111');
  return resolvedStyledMap[key];
};

const getThemeObject = (componentName: any, colorMode: any, state?: any) => {
  const styleObj: any = resolvedStyledMap[componentName];

  if (!styleObj) {
    return {};
  }

  // Theme style
  let styleSheet = styleObj[colorMode];

  // state style
  const stateStyles = getPseudoStateStyles(componentName, state);

  forEach(stateStyles, (stateStyleObj) => {
    if (stateStyleObj[colorMode]) {
      styleSheet = styleSheet.concat(stateStyleObj[colorMode]);
    }
  });

  const unResolvedPropsArray = map(styleSheet, 'unResolvedProps');

  let unResolvedProps = {};
  for (const props of unResolvedPropsArray) {
    unResolvedProps = { ...unResolvedProps, ...props };
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

  const componentTheme = lodashGet(theme, `components.${componentName}`, {});

  const colorSchemeKey =
    colorScheme || componentTheme.defaultProps?.colorScheme;

  if (colorSchemeKey && variant) {
    componentKeyName = `${componentName}.${colorSchemeKey}.${variant}`;
  } else if (variant) {
    componentKeyName = `${componentName}.${variant}`;
  } else if (colorSchemeKey) {
    componentKeyName = `${componentName}.${colorSchemeKey}`;
  }

  return componentKeyName;
};

export const getThemeProps = (
  inputComponentKeyName: string,
  config: any,
  state?: any,
  props: any = {}
): any => {
  //

  const componentNames = inputComponentKeyName.split('.');

  const rootComponentName = componentNames[0];
  const pseudoComponentKeyName = componentNames[1];

  let componentKeyName = rootComponentName;

  componentKeyName = getComponentNameKeyFromProps(rootComponentName, props);

  if (pseudoComponentKeyName) {
    componentKeyName = `${componentKeyName}.${pseudoComponentKeyName}`;
  }

  let themeObj: any = getThemeObject(componentKeyName, config.colorMode, state);

  // if (inputComponentKeyName === 'ButtonGroup') {
  //   console.log('*** &&& theme props $$ >>>>>>>');
  //   debugger;
  // }
  // if (inputComponentKeyName === 'Slider') {
  //   console.log('component theme ^^&', themeObj, componentKeyName);
  // }
  // if (inputComponentKeyName === 'Button') {
  //   // console.log(componentKeyName, themeObj, '((()))');
  // }

  if (isEmptyObj(themeObj)) {
    themeObj = getThemeObject(rootComponentName, config.colorMode, state);
  }

  // if (inputComponentKeyName === 'Icon') {
  //   console.log(componentKeyName, themeObj, ' *****theme object');
  // }

  // debugger;
  if (!isEmptyObj(themeObj) && props.size) {
    let componentKeyNameForSize = `${rootComponentName}.${props.size}`;

    if (pseudoComponentKeyName) {
      componentKeyNameForSize = `${componentKeyNameForSize}.${pseudoComponentKeyName}`;
    }
    const sizeThemeObj = getThemeObject(
      `${componentKeyNameForSize}`,
      config.colorMode,
      state
    );

    // if (pseudoComponentKeyName) {
    //   console.log(sizeThemeObj, componentKeyNameForSize, 'style them object');
    // }

    // console.log(themeObj.style, sizeThemeObj.style, 'style me rehne ka');
    // console.log(
    //   themeObj.style?.concat(sizeThemeObj.style),
    //   'style me rehne kan222'
    // );
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

  // if (rootComponentName === 'Text') {
  //   console.log(componentKeyName, props.size, themeObj, 'component key here');
  //   // debugger;
  // }
  // console.log('theme obje', themeObj, inputComponentKeyName);

  // console.log(themeObj, inputComponentKeyName, 'theme object');
  if (isEmptyObj(themeObj)) {
    updateComponentThemeMap(inputComponentKeyName, {}, config.platform);

    // if (inputComponentKeyName === 'ButtonGroup') {
    //   console.log(themeObj, '*** &&& theme props $$');
    //   debugger;
    // }

    return getThemeProps(inputComponentKeyName, config, state, props);
  }
  return themeObj;
};
export const getResolvedProps = (key: string, colorMode?: ColorMode) => {
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
    return state[pseudoPropStateMap[stateKey]];
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
const getPseudoStateStyles = (componentName: string, state: any) => {
  const styleObj: any = [];
  const stateStyleArray: any = [];

  const componentStates = get(componentName);

  // console.log(componentStates, '***** &&&&');
  for (const k in componentStates) {
    const value = componentStates[k];

    // console.log(componentStates, k, componentName, 'value **&');
    //get for _hover, _checked
    if (k.startsWith('_')) {
      // const pseudoPropKey = k.slice(componentName.length + 1);
      stateStyleArray.push({ key: k, value: value });
    }
  }

  // sort for specificity
  stateStyleArray.sort(
    (obj1: any, obj2: any) => obj1.key.length - obj2.key.length
  );

  stateStyleArray.forEach((item: any) => {
    if (isValidState(item.key, state)) {
      styleObj.push(item.value);
    }
  });

  // console.log(styleObj, 'valid state *');

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
export const set = (key: string, value: any, colorMode: string) => {
  const styledMap = resolvedStyledMap[key];
  if (!styledMap) {
    resolvedStyledMap[key] = {
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
