import get from 'lodash.get';
import omit from 'lodash.omit';
// import isNil from 'lodash.isnil';
import merge from 'lodash.merge';
import { useWindowDimensions } from 'react-native';
import { useNativeBase } from '../useNativeBase';
import { usePlatformProps } from '../usePlatformProps';
import { useColorModeProps } from '../useColorModeProps';
import { useColorMode } from '../../core/color-mode';
import {
  resolveValueWithBreakpoint,
  // extractPropertyFromFunction,
} from './utils';
import {
  getClosestBreakpoint,
  // omitUndefined,
  // extractInObject,
} from './../../theme/tools';
// import { themePropertyMap } from './../../theme/base';
import { useContrastText } from '../useContrastText';
import React from 'react';

/**
 * @summary Resolves, simplify and merge components specific theme.
 * @description The function extract and execute component specifc theme (i.e., `defaultProps`, `baseStyle` and `variants`) and returns a merged and simplified object.
 * @arg {string} theme - Theme object of NativeBase (without component theme).
 * @arg {object} componentTheme - Theme for specific components.
 * @arg {object} incomingProps - Props passed by the user.
 * @arg {object} colorModeProps - `colorMode` object.
 * @returns {object} Resolved component specific theme.
 */
const useSimplifyComponentTheme = (
  theme: object,
  componentTheme: {
    defaultProps?: object;
    baseStyle?: object | Function;
    variants?: any | Function;
    sizes?: any | Function;
  },
  incomingProps: object,
  colorModeProps: object,
  currentBreakpoint: number
) => {
  let hasSize = false;
  let hasVariant = false;
  // Resolving component's defaultProps.

  // Shallow merge defaultProps and incoming props to pass them in baseStyle, variants and sizes
  const combinedProps: any = {
    ...componentTheme.defaultProps,
    ...incomingProps,
  };

  // Resolving component's baseStyle
  let componentBaseStyle = {};
  if (componentTheme.baseStyle) {
    componentBaseStyle =
      typeof componentTheme.baseStyle !== 'function'
        ? componentTheme.baseStyle
        : componentTheme.baseStyle({
            theme,
            ...combinedProps,
            ...colorModeProps,
          });
  }

  // To handle responsive type variant. i.e. {sm:"x"} | [x, y]
  const variant = resolveValueWithBreakpoint(
    combinedProps.variant,
    currentBreakpoint,
    'variant'
  );

  let componentVariantProps = {};
  // Extracting props from variant
  if (variant && componentTheme.variants && componentTheme.variants[variant]) {
    componentVariantProps =
      typeof componentTheme.variants[variant] !== 'function'
        ? componentTheme.variants[variant]
        : componentTheme.variants[variant]({
            theme,
            ...combinedProps,
            ...colorModeProps,
          });

    hasVariant = true;
  }

  // To handle responsive size prop. i.e. {sm:"x"} | [x, y]
  const size = resolveValueWithBreakpoint(
    combinedProps.size,
    currentBreakpoint,
    'size'
  );

  let componentSizeProps = {};
  // Extracting props from size
  if (size && componentTheme.sizes && componentTheme.sizes[size]) {
    // Type - sizes: {lg: 1}. Refer icon theme
    if (
      typeof componentTheme.sizes[size] === 'string' ||
      typeof componentTheme.sizes[size] === 'number'
    ) {
      //@ts-ignore
      componentSizeProps.size = componentTheme.sizes[size];
    }
    // Type - sizes: (props) => ({lg: {px: 1}}). Refer heading theme
    else if (typeof componentTheme.sizes[size] === 'function') {
      componentSizeProps = componentTheme.sizes[size]({
        theme,
        ...combinedProps,
        ...colorModeProps,
      });
      hasSize = true;
    }
    // Type - sizes: {lg: {px: 1}}. Refer button theme
    else {
      componentSizeProps = componentTheme.sizes[size];
      hasSize = true;
    }
  }

  const componentMergedTheme = merge(
    {},
    componentTheme.defaultProps,
    componentBaseStyle,
    componentVariantProps,
    componentSizeProps
  );

  const componentThemeIntegratedProps = merge(
    {},
    useColorModeProps(usePlatformProps(componentMergedTheme)),
    useColorModeProps(usePlatformProps(incomingProps))
  );

  if (hasSize) {
    // We remove size from original props if we found it in the componentTheme
    // @ts-ignore
    delete componentThemeIntegratedProps.size;
  }

  if (hasVariant) {
    // We remove variant from original props if we found it in the componentTheme
    // @ts-ignore
    delete componentThemeIntegratedProps.variant;
  }

  return componentThemeIntegratedProps;
};

/**
 * @summary Translates the prop with it's appropriate value.
 * @description NOTE: Avoid passo  JSX and functions.
 * @arg {any} props - Props object with should be translated.
 * @arg {any} theme - Theme based on which props will be translated.
 * @arg {object} colorModeProps - `colorMode` object.
 * @arg {object} componentTheme - Theme for specific components.
 * @arg {object} windowWidth - Current width of the window / screen.
 * @returns {object} Translated props object.
 */
// Todo - move responsive calculation in styled system
// const propTranslator = ({
//   props,
//   theme,
//   colorModeProps,
//   componentTheme,
//   currentBreakpoint,
// }: {
//   props: any;
//   theme: any;
//   colorModeProps: object;
//   componentTheme: object;
//   currentBreakpoint: number;
// }) => {
//   let translatedProps: any = {};
//   for (const property in props) {
//     // STEP 1 - Responsive prop check and resolve
//     if (property.startsWith('_')) {
//       // STEP 1.a - Resolving _ porps
//       const nestedTranslatedProps = propTranslator({
//         props: props[property],
//         theme,
//         colorModeProps,
//         componentTheme,
//         currentBreakpoint,
//       });
//       translatedProps[property] = nestedTranslatedProps;
//     } else if (themePropertyMap[property]) {
//       // STEP 1.b Resolving themed props
//       const propValues = extractPropertyFromFunction(
//         property,
//         props,
//         theme,
//         componentTheme
//       );

//       // NOTE: Direct value identified.
//       if (typeof propValues === 'string' || typeof propValues === 'number') {
//         translatedProps[property] = propValues;
//         // NOTE: Nested object (excluding _props) (To be specific, only for key exist in themePropertyMap)
//       } else if (!isNil(propValues)) {
//         // TODO: This setion new needs to handle stuff differently
//         for (let nestedProp in propValues) {
//           translatedProps[nestedProp] = get(
//             theme,
//             `${themePropertyMap[nestedProp]}.${propValues[nestedProp]}`,
//             propValues[nestedProp]
//           );
//         }
//         delete translatedProps[property];
//         // Manually handeling shadow props (example of Mapped tokens)
//       } else if (property === 'shadow') {
//         const resolveValueWithBreakpointValue = resolveValueWithBreakpoint(
//           props.shadow,
//           currentBreakpoint,
//           property
//         );
//         let shadowProps = theme[themePropertyMap[property]](colorModeProps)[
//           resolveValueWithBreakpointValue
//         ];
//         translatedProps.style = merge({}, shadowProps, props.style);
//         delete translatedProps[property];
//       } else {
//         translatedProps[property] = resolveValueWithBreakpoint(
//           props[property],
//           currentBreakpoint,
//           property
//         );
//       }
//     } else {
//       // STEP 1.d Resolving Direct Values
//       translatedProps[property] = resolveValueWithBreakpoint(
//         props[property],
//         currentBreakpoint,
//         property
//       );
//     }
//   }

//   return translatedProps;
// };

/**
 * @summary Combines provided porps with component's theme props and resloves them.
 * @description NOTE: Avoid passing JSX and functions.
 * @arg {string} component - Name of the component.
 * @arg {object} incomingProps - Props passed by the user.
 * @returns {object} Resolved props.
 */
export function usePropsResolution(component: string, incomingProps: any) {
  const { theme } = useNativeBase();
  const colorModeProps = useColorMode();

  const componentTheme = get(theme, `components.${component}`, {});
  const notComponentTheme = omit(theme, ['components']);
  const windowWidth = useWindowDimensions()?.width;

  const currentBreakpoint = React.useMemo(
    () => getClosestBreakpoint(theme.breakpoints, windowWidth),
    [windowWidth, theme.breakpoints]
  );

  // TODO: using usePlatformProps here to simplify the component theme. So that on on component level it shouldn't have to maintain the Specificity.
  const componentThemeObject = useSimplifyComponentTheme(
    notComponentTheme,
    componentTheme,
    incomingProps,
    colorModeProps,
    currentBreakpoint
  );

  if (
    componentThemeObject.bg?.linearGradient ||
    componentThemeObject.background?.linearGradient ||
    componentThemeObject.bgColor?.linearGradient ||
    componentThemeObject.backgroundColor?.linearGradient
  ) {
    let bgProp = 'bg';
    if (componentThemeObject.background?.linearGradient) {
      bgProp = 'background';
    } else if (componentThemeObject.bgColor?.linearGradient) {
      bgProp = 'bgColor';
    } else if (componentThemeObject.backgroundColor?.linearGradient) {
      bgProp = 'backgroundColor';
    }
    componentThemeObject[bgProp].linearGradient.colors = componentThemeObject[
      bgProp
    ].linearGradient.colors.map((color: string) => {
      return get(theme.colors, color, color);
    });
  }

  let bgColor =
    componentThemeObject.bg ??
    componentThemeObject.backgroundColor ??
    componentThemeObject.bgColor;

  const contrastTextColor = useContrastText(
    bgColor,
    componentThemeObject?._text?.color
  );

  componentThemeObject._text = contrastTextColor
    ? {
        color: contrastTextColor,
        ...componentThemeObject._text,
      }
    : componentThemeObject._text;

  return componentThemeObject;
}
