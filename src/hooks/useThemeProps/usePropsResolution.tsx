import get from 'lodash.get';
import omit from 'lodash.omit';
import isNil from 'lodash.isnil';
import merge from 'lodash.merge';
import { useWindowDimensions } from 'react-native';
import { useNativeBase } from '../useNativeBase';
import { usePlatformProps } from '../usePlatformProps';
import { useColorModeProps } from '../useColorModeProps';
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
  }

  const componentMergedTheme = merge(
    {},
    componentTheme.defaultProps,
    componentBaseStyle,
    componentVariantProps,
    componentSizeProps
  );

  return componentMergedTheme;
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
const propTranslator = ({
  props,
  theme,
  colorModeProps,
  componentTheme,
  currentBreakpoint,
}: {
  props: any;
  theme: any;
  colorModeProps: object;
  componentTheme: object;
  currentBreakpoint: number;
}) => {
  let translatedProps: any = {};
  for (const property in props) {
    // STEP 1 - Responsive prop check and resolve
    if (property.startsWith('_')) {
      // STEP 1.a - Resolving _ porps
      const nestedTranslatedProps = propTranslator({
        props: props[property],
        theme,
        colorModeProps,
        componentTheme,
        currentBreakpoint,
      });
      translatedProps[property] = nestedTranslatedProps;
    } else if (themePropertyMap[property]) {
      // STEP 1.b Resolving themed props
      const propValues = extractPropertyFromFunction(
        property,
        props,
        theme,
        componentTheme
      );

      // NOTE: Direct value identified.
      if (typeof propValues === 'string' || typeof propValues === 'number') {
        translatedProps[property] = propValues;
        // NOTE: Nested object (excluding _props) (To be specific, only for key exist in themePropertyMap)
      } else if (!isNil(propValues)) {
        // TODO: This setion new needs to handle stuff differently
        for (let nestedProp in propValues) {
          translatedProps[nestedProp] = get(
            theme,
            `${themePropertyMap[nestedProp]}.${propValues[nestedProp]}`,
            propValues[nestedProp]
          );
        }
        delete translatedProps[property];
        // Manually handeling shadow props (example of Mapped tokens)
      } else if (property === 'shadow') {
        const resolveValueWithBreakpointValue = resolveValueWithBreakpoint(
          props.shadow,
          currentBreakpoint,
          property
        );
        let shadowProps = theme[themePropertyMap[property]](colorModeProps)[
          resolveValueWithBreakpointValue
        ];
        translatedProps.style = merge({}, shadowProps, props.style);
        delete translatedProps[property];
      } else {
        translatedProps[property] = resolveValueWithBreakpoint(
          props[property],
          currentBreakpoint,
          property
        );
      }
    } else {
      // STEP 1.d Resolving Direct Values
      translatedProps[property] = resolveValueWithBreakpoint(
        props[property],
        currentBreakpoint,
        property
      );
    }
  }

  return translatedProps;
};

/**
 * @summary Combines provided porps with component's theme props and resloves them.
 * @description NOTE: Avoid passing JSX and functions.
 * @arg {string} component - Name of the component.
 * @arg {object} incomingProps - Props passed by the user.
 * @returns {object} Resolved props.
 */
export function usePropsResolution(
  component: string,
  incomingProps: any,
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
  const notComponentTheme = omit(theme, ['components']);
  const windowWidth = useWindowDimensions()?.width;

  const currentBreakpoint = React.useMemo(
    () => getClosestBreakpoint(theme.breakpoints, windowWidth),
    [windowWidth, theme.breakpoints]
  );

  // TODO: using usePlatformProps here to simplify the component theme. So that on on component level it shouldn't have to maintain the Specificity.
  const componentThemeObject = simplifyComponentTheme(
    notComponentTheme,
    componentTheme,
    cleanIncomingProps,
    colorModeProps,
    currentBreakpoint
  );
  const componentThemeIntegratedProps = merge(
    {},
    useColorModeProps(usePlatformProps(componentThemeObject)),
    useColorModeProps(usePlatformProps(cleanIncomingProps))
  );
  // const platformSpecificProps = usePlatformProps(componentThemeIntegratedProps);

  // NOTE: sperating removing props while should be translated
  let ignore: any = [];
  if (
    componentThemeIntegratedProps.bg?.linearGradient ||
    componentThemeIntegratedProps.background?.linearGradient ||
    componentThemeIntegratedProps.bgColor?.linearGradient ||
    componentThemeIntegratedProps.backgroundColor?.linearGradient
  ) {
    let bgProp = 'bg';
    if (componentThemeIntegratedProps.background?.linearGradient) {
      bgProp = 'background';
    } else if (componentThemeIntegratedProps.bgColor?.linearGradient) {
      bgProp = 'bgColor';
    } else if (componentThemeIntegratedProps.backgroundColor?.linearGradient) {
      bgProp = 'backgroundColor';
    }
    componentThemeIntegratedProps[
      bgProp
    ].linearGradient.colors = componentThemeIntegratedProps[
      bgProp
    ].linearGradient.colors.map((color: string) => {
      return get(theme.colors, color, color);
    });
    ignore = ['bg', 'background', 'backgroundColor', 'bgColor'];
  }
  // NOTE: seprating bg props when linearGardiant is available
  const [gradientProps, nonGradientProps] = extractInObject(
    componentThemeIntegratedProps,
    ignore
  );

  const translatedProps = propTranslator({
    props: nonGradientProps,
    theme: notComponentTheme,
    colorModeProps,
    componentTheme,
    currentBreakpoint,
  });

  let bgColor =
    translatedProps.bg ??
    translatedProps.backgroundColor ??
    translatedProps.bgColor;

  const contrastTextColor = useContrastText(
    bgColor,
    translatedProps?._text?.color
  );

  translatedProps._text = contrastTextColor
    ? {
        color: contrastTextColor,
        ...translatedProps._text,
      }
    : translatedProps._text;

  const resolvedProps = omitUndefined({
    ...translatedProps,
    ...ignoredProps,
    ...gradientProps,
  });

  return resolvedProps;
}
