import React from 'react';
import get from 'lodash.get';
import merge from 'lodash.merge';
import { useWindowDimensions, Platform } from 'react-native';
import { useNativeBase } from '../useNativeBase';
import { useColorMode } from '../../core/color-mode';
import { resolveValueWithBreakpoint } from './utils';
import {
  getClosestBreakpoint,
  omitUndefined,
  extractInObject,
} from '../../theme/tools';
import { useContrastText } from '../useContrastText';

// TODO: have to remove as many ts-ignore as possible.

const platformPropsMap = ['_ios', '_android', '_web'];
const colorModePropsMap = ['_light', '_dark'];
const statePropsMap = [
  '_invalid',
  '_disabled',
  '_checked',
  '_hover',
  '_pressed',
  '_focused',
];
const pseudoPropsMap = {
  _web: 'web',
  _ios: 'ios',
  _android: 'android',

  _light: 'light',
  _dark: 'dark',

  // TODO: have to add more interactionProps and stateProps
  _hover: 'isHovered',
  _pressed: 'isPressed',
  _focused: 'isFocused',
  _disabled: 'isDisabled',
  _invalid: 'isInvalid',
  _indeterminate: 'isIndeterminate',
};

const shouldResolve = ({ property, state, platform, colormode }: any) => {
  if (platformPropsMap.includes(property)) {
    // @ts-ignore
    return pseudoPropsMap[property] === platform;
  } else if (colorModePropsMap.includes(property)) {
    // @ts-ignore
    return pseudoPropsMap[property] === colormode;
  } else if (statePropsMap.includes(property)) {
    // @ts-ignore
    return state[pseudoPropsMap[property]];
  } else {
    return false;
  }
};

let flattenProps: any = {};
let propertyDepth: any = {};
const pseudoPropsResolver = ({
  props,
  platform,
  colormode,
  state,
  currentDepth = 0,
}: any) => {
  for (const property in props) {
    // @ts-ignore
    if (pseudoPropsMap[property]) {
      if (shouldResolve({ property: property, state, platform, colormode })) {
        pseudoPropsResolver({
          props: props[property],
          platform,
          colormode,
          state,
          currentDepth: currentDepth++,
        });
      }
    } else if (!property.startsWith('_')) {
      if (
        !(propertyDepth[property] && propertyDepth[property] > currentDepth)
      ) {
        propertyDepth[property] = currentDepth;
        flattenProps[property] = props[property];
      }
    }
  }
  return flattenProps;
};

/**
 * @summary Combines provided porps with component's theme props and resloves them.
 * @description NOTE: Avoid passing JSX and functions.
 * @arg {string} component - Name of the component.
 * @arg {object} incomingProps - Props passed by the user.
 * @arg {object} state - dependent states.
 * @arg {object} config - configuration for resolution.
 * @returns {object} Resolved and flattened props.
 */
export function usePropsResolution(
  component: string,
  incomingProps: any,
  state?: any,
  config?: any
) {
  const [ignoredProps, cleanIncomingProps] = extractInObject(
    incomingProps,
    ['children', 'onPress', 'icon', 'onOpen', 'onClose'].concat(
      config?.ignoreProps || []
    )
  );

  const { theme } = useNativeBase();
  const colorModeProps = useColorMode();

  const componentTheme = get(theme, `components.${component}`, {});
  const windowWidth = useWindowDimensions()?.width;
  const currentBreakpoint = React.useMemo(
    () => getClosestBreakpoint(theme.breakpoints, windowWidth),
    [windowWidth, theme.breakpoints]
  );

  // STEP 1: combine default props and incoming props

  const incomingWithDefaultProps = merge(
    {},
    componentTheme.defaultProps || {},
    cleanIncomingProps
  );
  // STEP 2: flatten them
  pseudoPropsResolver({
    props: incomingWithDefaultProps,
    platform: Platform.OS,
    colormode: colorModeProps.colorMode,
    state: state || {},
  });
  // STEP 3: Pass it to baseStyle, then variant and then size and resolve them.

  // NOTE: Resoloving baseStyle
  let componentBaseStyle = {};
  if (componentTheme.baseStyle) {
    componentBaseStyle =
      typeof componentTheme.baseStyle !== 'function'
        ? componentTheme.baseStyle
        : componentTheme.baseStyle({
            theme,
            ...flattenProps,
            ...colorModeProps,
          });

    pseudoPropsResolver({
      props: componentBaseStyle,
      platform: Platform.OS,
      colormode: colorModeProps.colorMode,
      state: state || {},
    });
  }

  // NOTE: Resolving variants
  const variant = resolveValueWithBreakpoint(
    flattenProps.variant,
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
            ...flattenProps,
            ...colorModeProps,
          });

    pseudoPropsResolver({
      props: componentVariantProps,
      platform: Platform.OS,
      colormode: colorModeProps.colorMode,
      state: state || {},
    });

    // We remove variant from original props if we found it in the componentTheme
    //@ts-ignore
    flattenProps.variant = undefined;
  }

  // NOTE: Resolving size
  const size = resolveValueWithBreakpoint(
    flattenProps.size,
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
      flattenProps.size = undefined;
      //@ts-ignore
      componentSizeProps.size = componentTheme.sizes[size];
    }
    // Type - sizes: (props) => ({lg: {px: 1}}). Refer heading theme
    else if (typeof componentTheme.sizes[size] === 'function') {
      flattenProps.size = undefined;
      componentSizeProps = componentTheme.sizes[size]({
        theme,
        ...flattenProps,
        ...colorModeProps,
      });
    }
    // Type - sizes: {lg: {px: 1}}. Refer button theme
    else {
      flattenProps.size = undefined;
      componentSizeProps = componentTheme.sizes[size];
    }

    pseudoPropsResolver({
      props: componentSizeProps,
      platform: Platform.OS,
      colormode: colorModeProps.colorMode,
      state: state || {},
    });
  }

  // STEP 4: Merge

  // STEP 5: linear Grad and contrastText
  let ignore: any = [];
  if (
    flattenProps.bg?.linearGradient ||
    flattenProps.background?.linearGradient ||
    flattenProps.bgColor?.linearGradient ||
    flattenProps.backgroundColor?.linearGradient
  ) {
    let bgProp = 'bg';
    if (flattenProps.background?.linearGradient) {
      bgProp = 'background';
    } else if (flattenProps.bgColor?.linearGradient) {
      bgProp = 'bgColor';
    } else if (flattenProps.backgroundColor?.linearGradient) {
      bgProp = 'backgroundColor';
    }
    flattenProps[bgProp].linearGradient.colors = flattenProps[
      bgProp
    ].linearGradient.colors.map((color: string) => {
      return get(theme.colors, color, color);
    });
    ignore = ['bg', 'background', 'backgroundColor', 'bgColor'];
  }
  // NOTE: seprating bg props when linearGardiant is available
  const [gradientProps] = extractInObject(flattenProps, ignore);

  let bgColor =
    flattenProps.bg ?? flattenProps.backgroundColor ?? flattenProps.bgColor;

  const contrastTextColor = useContrastText(
    bgColor,
    flattenProps?._text?.color
  );

  flattenProps._text = contrastTextColor
    ? {
        color: contrastTextColor,
        ...flattenProps._text,
      }
    : flattenProps._text;

  const resolvedProps = omitUndefined({
    ...flattenProps,
    ...ignoredProps,
    ...gradientProps,
  });
  // STEP 6: Return
  flattenProps = {};
  propertyDepth = {};

  return resolvedProps;
}
