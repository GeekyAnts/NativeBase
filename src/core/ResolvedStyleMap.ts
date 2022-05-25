import { forEach, map } from 'lodash';
import type { ColorMode } from './color-mode';

// Adding Map for storing the props and style for the styled component
let resolvedStyledMap: Map<string, any> = new Map();
const pseudoPropStateMap = {
  _disabled: 'isDisabled',
  _focusVisible: 'isFocusVisible',
  _focus: 'isFocused',
  _hover: 'isHovered',
  _pressed: 'isPressed',
};
export const init = () => {
  resolvedStyledMap = new Map();
  window['resolvedStyledMap'] = resolvedStyledMap;
};

export const get = (key: string) => {
  resolvedStyledMap.get(key);
};

const isValidStateKey = (stateKey: string, state: any) => {
  console.log(stateKey, pseudoPropStateMap[stateKey], state, 'is valid');
  return state[pseudoPropStateMap[stateKey]];
};

const isValidState = (key: string, state: any) => {
  //TODO:  consider `Button.Spinner._hover._hover`
  // include only startWith("_")
  const stateKeys = key.split('.');
  stateKeys.shift();

  const isValid = stateKeys.every((stateKey: any) => {
    if (isValidStateKey(stateKey, state)) {
      return true;
    }
    return false;
  });
  return isValid;
  // console.log(isValid, 'is valid');
  // // const initialValue = 0;
  // // const sumWithInitial = stateKeys.reduce((previousValue, currentValue) => {
  // //   //
  // //   if (isValid === false) {
  // //     return false;
  // //   }
  // //   console.log(previousValue, currentValue, 'hello here 11111');
  // // }, isValid);

  // // forEach(stateKeys, (stateKey: any) => {
  // //   //
  // //   if (stateKey === '_hover') {
  // //     isValid = true;
  // //   }
  // //   console.log(stateKey, 'hello state ******');
  // // });
  // return false;
};
const getPseudoStateStyles = (componentName: string, state: any) => {
  const styleObj: any = [];
  const stateStyleArray: any = [];
  resolvedStyledMap.forEach((value: any, k: string) => {
    if (k.startsWith(componentName) && k !== componentName) {
      stateStyleArray.push({ key: k, value: value });
    }
  });
  stateStyleArray.sort(
    (obj1: any, obj2: any) => obj1.key.length - obj2.key.length
  );

  stateStyleArray.forEach((item: any) => {
    if (isValidState(item.key, state)) {
      styleObj.push(item.value);
    }
  });

  return styleObj;
};
export const getResolvedStyleSheet = (
  key: string,
  colorMode?: ColorMode,
  state?: any
) => {
  const styleObj: any = resolvedStyledMap.get(key);

  if (!colorMode || !styleObj) {
    return null;
  }
  // Theme style
  const styleSheet = map(styleObj[colorMode], 'style');

  // state style
  const stateStyles = getPseudoStateStyles(key, state);
  forEach(stateStyles, (stateStyleObj) => {
    styleSheet.push(map(stateStyleObj[colorMode], 'style'));
  });

  return styleSheet;
};
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
