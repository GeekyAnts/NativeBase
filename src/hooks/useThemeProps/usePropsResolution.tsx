import get from 'lodash/get';
import omit from 'lodash/omit';
import isNil from 'lodash/isNil';
import merge from 'lodash/merge';
import { useWindowDimensions } from 'react-native';
import { useNativeBase } from '../useNativeBase';
import { usePlatformProps } from '../usePlatformProps';
import { useColorMode } from '../../core/color-mode';
import {
  mergeUnderscoreProps,
  resolveValueWithBreakpoint,
  extractPropertyFromFunction,
} from './utils';
import { getClosestBreakpoint, extractInObject } from './../../theme/tools';
import { themePropertyMap } from './../../theme/base';

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
  // console.log('componentBaseStyle = ', componentBaseStyle);

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
  // console.log('componentVariantProps = ', componentVariantProps);

  const componentMergedTheme = merge(
    {},
    componentTheme.defaultProps,
    componentBaseStyle,
    componentVariantProps
  );
  // console.log('componentMergedTheme = ', componentMergedTheme);

  return componentMergedTheme;
};

const magicFunction = (
  unbrewedProps: any,
  theme: any,
  colorModeProps: object,
  componentTheme: object,
  windowWidth: number
) => {
  let brewedProps: any = {};

  let currentBreakpoint = getClosestBreakpoint(theme.breakpoints, windowWidth);
  for (var property in unbrewedProps) {
    // check also if property is not inherited from prototype

    if (themePropertyMap[property]) {
      // TODO: The function can be removed, as it's kind of over kill.
      // const propValues =
      //   typeof unbrewedProps[property] !== 'function'
      //     ? unbrewedProps[property]
      //     : unbrewedProps[property]({
      //         theme,
      //         ...unbrewedProps,
      //         ...colorModeProps,
      //       });
      const propValues = extractPropertyFromFunction(
        property,
        unbrewedProps,
        theme,
        componentTheme
      );
      if (typeof propValues === 'string' || typeof propValues === 'number') {
        brewedProps[property] = propValues;
      } else if (!isNil(propValues)) {
        for (let nestedProp in propValues) {
          brewedProps[nestedProp] = get(
            theme,
            `${themePropertyMap[nestedProp]}.${propValues[nestedProp]}`,
            propValues[nestedProp]
          );
        }
        delete brewedProps[property];
      } else if (property === 'shadow') {
        let shadowProps = theme[themePropertyMap[property]](colorModeProps)[
          unbrewedProps[property]
        ];
        if (!isNil(shadowProps)) {
          brewedProps = { ...brewedProps, ...shadowProps };
        }
      } else {
        brewedProps[property] = resolveValueWithBreakpoint(
          unbrewedProps[property],
          currentBreakpoint,
          property
        );
      }
    } else {
      // TODO: not working
      // if (property.startsWith('_')) {
      //   brewedProps[property] = magicFunction(
      //     unbrewedProps[property],
      //     theme,
      //     colorModeProps,
      //     componentTheme
      //   );
      // }
      // else if (property === 'variant') {
      //   const fsdfdsf =
      //     typeof componentTheme.variants[unbrewedProps[property]] !== 'function'
      //       ? componentTheme.variants[unbrewedProps[property]]
      //       : componentTheme.variants[unbrewedProps[property]]({
      //           theme,
      //           ...unbrewedProps,
      //           ...colorModeProps,
      //         });
      //   merge(brewedProps, fsdfdsf);
      // }
      // else {
      brewedProps[property] = resolveValueWithBreakpoint(
        unbrewedProps[property],
        currentBreakpoint,
        property
      );
      // }
    }
  }
  return brewedProps;
};

/**
 * @summary undefined.
 * @description undefined.
 * @arg {string} component - Theme object of NativeBase (without component theme).
 * @arg {object} incomingProps - Props passed by the user.
 * @returns {object} Resolved props.
 */
export function usePropsResolution(component: string, incomingProps: any) {
  // console.log(
  //   '%c Oh my heavens!',
  //   'background: #222; color: #bada55',
  //   component
  // );

  // TODO: removed unrequired stuff from recived porp
  // Extracting out children and style, as they do not contribute in props calculation
  // This is done as these props are passed as it is later in the development
  // Required as some of these will trigger cyclic computation which may lead to error
  const [ignoredProps, cleanIncomingProps] = extractInObject(incomingProps, [
    'children',
    'style',
    'onPress',
    'icon',
    'onOpen',
    'onClose',
  ]);

  const { theme } = useNativeBase();
  const colorModeProps = useColorMode();
  // console.log('THEME = ', theme);

  const componentTheme = get(theme, `components.${component}`);
  // console.log('COMPONENT THEME = ', componentTheme);

  const componentThemeObject = simplifyComponentTheme(
    omit(theme, ['components']),
    componentTheme,
    cleanIncomingProps,
    colorModeProps
  );

  const componentThemeIntegratedProps = merge(
    {},
    componentThemeObject,
    incomingProps
  );
  // console.log(
  //   'componentThemeIntegratedProps = ',
  //   componentThemeIntegratedProps
  // );

  const platformSpecificProps = usePlatformProps(componentThemeIntegratedProps);
  // console.log('platformSpecificProps = ', platformSpecificProps);

  const windowWidth = useWindowDimensions()?.width;
  const magicalProps = magicFunction(
    platformSpecificProps,
    theme,
    colorModeProps,
    componentTheme,
    windowWidth
  );
  // console.log('magicalProps = ', magicalProps);

  // const extractedProps = extractProps(
  //   platformSpecificProps,
  //   theme,
  //   colorModeProps,
  //   componentTheme,
  //   windowWidth
  // );

  // console.log('extractedProps = ', extractedProps);

  const contrastText = mergeUnderscoreProps(magicalProps, incomingProps);

  const resolvedProps = merge({}, contrastText, ignoredProps);
  // console.log('resolvedProps = ', resolvedProps);

  return resolvedProps;
}
