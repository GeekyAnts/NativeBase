import { forEach, map } from 'lodash';
import type { ColorMode } from './color-mode';
import { StyleSheet } from 'react-native';
import { isEmptyObj } from '../utils';

// Adding Map for storing the props and style for the styled component
let resolvedStyledMap: Map<string, any> = new Map();
export const pseudoPropStateMap = {
  _disabled: 'isDisabled',
  _focusVisible: 'isFocusVisible',
  _focus: 'isFocused',
  _hover: 'isHovered',
  _pressed: 'isPressed',
  _checked: 'isChecked',
  _loading: 'isLoading',
};

export const init = () => {
  resolvedStyledMap = new Map();
  window['resolvedStyledMap'] = resolvedStyledMap;
};

export const get = (key: string) => {
  return resolvedStyledMap.get(key);
};

const getThemeObject = (componentName: any, colorMode: any, state?: any) => {
  const styleObj: any = resolvedStyledMap.get(componentName);

  if (!styleObj) {
    return {};
  }

  // Theme style
  let styleSheet = styleObj[colorMode];

  // state style
  const stateStyles = getPseudoStateStyles(componentName, state);

  forEach(stateStyles, (stateStyleObj) => {
    styleSheet = styleSheet.concat(stateStyleObj[colorMode]);
  });

  const unResolvedPropsArray = map(styleSheet, 'unResolvedProps');

  let unResolvedProps = {};
  for (const props of unResolvedPropsArray) {
    unResolvedProps = { ...unResolvedProps, ...props };
  }

  const styleFromPropsArray = map(styleSheet, 'styleFromProps');
  let styleFromProps = {};
  for (const props of styleFromPropsArray) {
    styleFromProps = { ...styleFromProps, ...props };
  }

  return {
    style: map(styleSheet, 'style'),
    unResolvedProps: unResolvedProps,
    styleFromProps: styleFromProps,
  };
};

export const getThemeProps = (
  inputComponentKeyName: string | Array<any>,
  colorMode: ColorMode,
  state?: any,
  { variant, size }: any = {}
): any => {
  //

  let componentKeyName = inputComponentKeyName;
  if (typeof componentKeyName !== 'string') {
    componentKeyName = componentKeyName.filter((item) => item).join('.');
  } else {
    if (variant && size) {
      componentKeyName = `${componentKeyName}.${variant}.${size}`;
    } else if (variant) {
      componentKeyName = `${componentKeyName}.${variant}`;
    } else if (size) {
      componentKeyName = `${componentKeyName}.${size}`;
    }
  }
  let themeObj = getThemeObject(componentKeyName, colorMode, state);

  if (isEmptyObj(themeObj)) {
    themeObj = getThemeObject(inputComponentKeyName, colorMode, state);
  }
  return themeObj;
};
export const getResolvedProps = (key: string, colorMode?: ColorMode) => {
  const styleObj: any = resolvedStyledMap.get(key);

  if (!colorMode || !styleObj) {
    return null;
  }
  return styleObj[colorMode]['styleFromProps'];
};
const isValidStateKey = (stateKey: string, state: any) => {
  // console.log(stateKey, pseudoPropStateMap[stateKey], state, 'is valid');
  try {
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

export const getResolvedStyleSheet = (
  componentName: string | Array<any>,
  colorMode?: ColorMode,
  state?: any,
  props?: any
) => {
  return getThemeProps(componentName, colorMode, state, props)?.style;
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
  const styledMap = resolvedStyledMap.get(key);
  if (!styledMap) {
    resolvedStyledMap.set(key, {
      [colorMode]: [value],
    });
  } else {
    if (!styledMap[colorMode]) {
      styledMap[colorMode] = [];
    }
    styledMap[colorMode].push(value);
  }
};

export const log = () => {
  console.log(resolvedStyledMap);
};