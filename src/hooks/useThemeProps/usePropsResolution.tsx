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
  },
  incomingProps: object,
  colorModeProps: object
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

  const variant = combinedProps.variant;
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
  }

  const componentMergedTheme = merge(
    {},
    componentTheme.defaultProps,
    componentBaseStyle,
    componentVariantProps
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
const propTranslator = ({
  props,
  theme,
  colorModeProps,
  componentTheme,
  windowWidth,
}: {
  props: any;
  theme: any;
  colorModeProps: object;
  componentTheme: object;
  windowWidth: number;
}) => {
  let translatedProps: any = {};
  const currentBreakpoint = getClosestBreakpoint(
    theme.breakpoints,
    windowWidth
  );
  for (const property in props) {
    // STEP 1 - Responsive prop check and resolve
    if (property.startsWith('_')) {
      // STEP 1.a - Resolving _ porps
      const nestedTranslatedProps = propTranslator({
        props: props[property],
        theme,
        colorModeProps,
        componentTheme,
        windowWidth,
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

  const componentThemeObject = simplifyComponentTheme(
    notComponentTheme,
    componentTheme,
    cleanIncomingProps,
    colorModeProps
  );
  const componentThemeIntegratedProps = merge(
    {},
    componentThemeObject,
    cleanIncomingProps
  );
  const platformSpecificProps = usePlatformProps(componentThemeIntegratedProps);

  const windowWidth = useWindowDimensions()?.width;
  const translatedProps = propTranslator({
    props: platformSpecificProps,
    theme: notComponentTheme,
    colorModeProps,
    componentTheme,
    windowWidth,
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

  const resolvedProps = omitUndefined({ ...translatedProps, ...ignoredProps });

  return resolvedProps;
}
