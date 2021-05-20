import get from 'lodash.get';
import omit from 'lodash.omit';
import isNil from 'lodash.isnil';
import merge from 'lodash.merge';
import { useWindowDimensions } from 'react-native';
import { useNativeBase } from '../useNativeBase';
import { usePlatformProps } from '../usePlatformProps';
import { useColorMode } from '../../core/color-mode';
import {
  resolveValueWithBreakpoint,
  extractPropertyFromFunction,
} from './utils';
import {
  getClosestBreakpoint,
  omitUndefined,
  extractInObject,
} from './../../theme/tools';
import { themePropertyMap } from './../../theme/base';
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
const simplifyComponentTheme = (
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
  // Resolving component's defaultProps.

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

    // We remove variant from original props if we found it in the componentTheme
    //@ts-ignore
    incomingProps.variant = undefined;
  }

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
    }
    // Type - sizes: {lg: {px: 1}}. Refer button theme
    else {
      componentSizeProps = componentTheme.sizes[size];
    }

    // We remove size from original props if we found it in the componentTheme
    //@ts-ignore
    incomingProps.size = undefined;
    combinedProps.size = undefined;
  }

  const componentMergedTheme = merge(
    {},
    componentBaseStyle,
    combinedProps,
    componentVariantProps,
    componentSizeProps
  );

  return componentMergedTheme;
};

/**
 * @summary Combines provided porps with component's theme props and resloves them.
 * @description NOTE: Avoid passing JSX and functions.
 * @arg {string} component - Name of the component.
 * @arg {object} incomingProps - Props passed by the user.
 * @returns {object} Resolved props.
 */
export function usePropsResolution(component: string, incomingProps: any) {
  const [ignoredProps, cleanIncomingProps] = extractInObject(incomingProps, [
    'children',
    'onPress',
    'icon',
    'onOpen',
    'onClose',
  ]);
  const { theme } = useNativeBase();
  const colorModeProps = useColorMode();

  const componentTheme = get(theme, `components.${component}`);
  const notComponentTheme = omit(theme, ['components']);
  const windowWidth = useWindowDimensions()?.width;

  const currentBreakpoint = React.useMemo(
    () => getClosestBreakpoint(theme.breakpoints, windowWidth),
    [windowWidth, theme.breakpoints]
  );

  const componentThemeObject = simplifyComponentTheme(
    notComponentTheme,
    componentTheme,
    cleanIncomingProps,
    colorModeProps,
    currentBreakpoint
  );

  const platformSpecificProps = usePlatformProps(componentThemeObject);

  let bgColor =
    platformSpecificProps.bg ??
    platformSpecificProps.backgroundColor ??
    platformSpecificProps.bgColor;

  const contrastTextColor = useContrastText(
    bgColor,
    platformSpecificProps?._text?.color
  );

  platformSpecificProps._text = contrastTextColor
    ? {
        color: contrastTextColor,
        ...platformSpecificProps._text,
      }
    : platformSpecificProps._text;

  const resolvedProps = omitUndefined({
    ...platformSpecificProps,
    ...ignoredProps,
  });

  return resolvedProps;
}
