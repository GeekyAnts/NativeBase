import { useNativeBase } from '../useNativeBase';
import { omitUndefined, extractInObject, isLiteral } from '../../theme/tools';
import { useBreakpointResolvedProps } from '../useBreakpointResolvedProps';
import type { IStateProps } from './propsFlattener';
import { useResponsiveSSRProps } from '../useResponsiveSSRProps';
import type { ComponentTheme } from '../../theme';
import { useNativeBaseConfig } from '../../core/NativeBaseContext';
import { getThemeProps } from '../../core/ResolvedStyleMap';
import { callPropsFlattener } from './propsFlattener';

import { useColorMode } from '../../core/color-mode';
import { PSEUDO_PROP_COMPONENT_MAP } from '../../core/ResolvedStyleMap';
import get from 'lodash.get';
import { Platform } from 'react-native';
import merge from 'lodash.merge';

// const getThemeProps = resolvedMap.theme.getThemeProps;

/**
 * @summary Combines provided porps with component's theme props and resloves them.
 * @arg {string} component - Name of the component.
 * @arg {object} incomingProps - Props passed by the user.
 * @arg {object} state - dependent states.
 * @arg {object} config - configuration for resolution. Accepts key like ignoreProps, resolveResponsively.
 * @returns {object} Resolved and flattened props.
 */
export function usePropsResolution(
  component: string,
  { INTERNAL_themeStyle, ...incomingProps }: any,
  state?: IStateProps,
  config?: {
    componentTheme?: any;
    resolveResponsively?: string[];
    ignoreProps?: string[];
    cascadePseudoProps?: boolean;
    extendTheme?: string[];
  }
) {
  const { theme } = useNativeBase();
  const { colorMode } = useColorMode();
  const providerId = useNativeBaseConfig('NativeBase').providerId;

  const componentThemeProps = getThemeProps(
    theme,
    providerId,
    component,
    { colorMode: colorMode, platform: Platform.OS },
    state,
    incomingProps
  );
  // console.timeEnd(component + ' ***');

  // if (component === 'Button' || component === 'Stack') {
  //   console.log(componentThemeProps, component, 'theme props');
  // }

  if (config?.extendTheme) {
    config.extendTheme.forEach((extendedComponent) => {
      const extendedThemeProps = getThemeProps(
        theme,
        providerId,
        extendedComponent,
        { colorMode, platform: Platform.OS },
        state,
        incomingProps
      );

      // if (component === 'TextArea') {
      //   console.log(
      //     extendedThemeProps.styleFromProps,
      //     'extended theme props 11'
      //   );
      // }
      componentThemeProps.style = [
        ...componentThemeProps.style,
        ...extendedThemeProps.style,
      ];
      componentThemeProps.styleFromProps = {
        ...componentThemeProps.styleFromProps,
        ...extendedThemeProps.styleFromProps,
      };
      componentThemeProps.unResolvedProps = {
        ...componentThemeProps.unResolvedProps,
        ...extendedThemeProps.unResolvedProps,
      };
      // componentThemeProps.unResolvedProps = merge(
      //   {},
      //   componentThemeProps.unResolvedProps,
      //   extendedThemeProps.unResolvedProps
      // );
    });
  }

  const componentTheme = get(theme, `components.${component}`);

  // if (component === 'SliderThumb') {
  //   console.log(componentThemeProps, 'component theme');
  // }
  let resolvedProps = usePropsResolutionWithComponentTheme(
    componentTheme,
    merge({}, componentThemeProps?.unResolvedProps, incomingProps),
    theme,
    state,
    { ...config, name: component }
  );

  // if (component === 'Progress') {
  //   console.log(
  //     // componentThemeProps.internalPseudoProps,
  //     componentThemeProps.unResolvedProps,
  //     incomingProps,
  //     { ...componentThemeProps?.unResolvedProps, ...incomingProps },
  //     'incoming props here 111'
  //   );
  // }

  // if (component === 'SliderThumb') {
  //   console.log(componentThemeProps, state, 'componentThemeProps');
  // }

  // if (component === 'IconButton') {
  //   console.log(
  //     resolvedProps._icon,
  //     // pseudoComponentThemeProps.restDefaultProps.size,
  //     // resolvedProps[property].size,
  //     // {
  //     //   ...pseudoComponentThemeProps.restDefaultProps,
  //     //   ...resolvedProps[property],
  //     // }.size,
  //     'hello here 11'
  //   );
  // }
  // console.log(
  //   { ...componentThemeProps?.unResolvedProps, ...incomingProps },
  //   'component thme props 2222'
  // );

  // Not Resolve theme props and pseudo props
  // if (incomingProps?.INTERNAL_notResolveThemeAndPseudoProps) {
  //   delete incomingProps.INTERNAL_notResolveThemeAndPseudoProps;
  //   return incomingProps;
  // }

  // if (process.env.NODE_ENV === "development" && incomingProps.debug) {
  //   /* eslint-disable-next-line */
  //   console.log(
  //     "%c resolvedProps: ",
  //     "color: #22d3ee; font-weight: 700;",
  //     resolvedProps
  //   );
  // }
  // console.timeEnd(component + "-usePropResolution");

  // if (component === 'Button') {

  // if (component === 'Text') {
  //   console.log(
  //     'component thme props 11 ***',
  //     StyleSheet.flatten(incomingProps.INTERNAL_themeStyle)
  //   );
  // }

  resolvedProps.INTERNAL_themeStyle = INTERNAL_themeStyle
    ? [componentThemeProps.styleFromProps, ...INTERNAL_themeStyle]
    : [componentThemeProps.styleFromProps];

  // if (component === 'Box') {
  //   console.log(
  //     'component thme props 22',
  //     INTERNAL_themeStyle,
  //     resolvedProps.INTERNAL_themeStyle
  //   );
  // }

  resolvedProps = {
    ...componentThemeProps.restDefaultProps,
    ...resolvedProps,
  };
  if (resolvedProps.size) {
    if (
      !sizesExistsInTheme(componentTheme, resolvedProps.size) &&
      isLiteral(resolvedProps.size)
    ) {
      resolvedProps = {
        boxSize: resolvedProps.size,
        ...resolvedProps,
      };
    }

    resolvedProps.size = undefined;
  }

  // if (component === 'SliderThumb') {
  //   console.log(
  //     'property ***',
  //     property,
  //     // incomingProps,
  //     componentThemeProps.internalPseudoProps[property]
  //     // StyleSheet.flatten(pseudoComponentThemeProps.style),
  //     // componentThemeProps.internalPseudoProps
  //     // resolvedProps[property]
  //   );
  // }

  for (const property in componentThemeProps.internalPseudoProps) {
    if (PSEUDO_PROP_COMPONENT_MAP[property]) {
      const pseudoComponentThemeProps = getThemeProps(
        theme,
        providerId,
        `${component}.${PSEUDO_PROP_COMPONENT_MAP[property]}`,
        // { colorMode: 'light' },
        { colorMode, platform: Platform.OS },
        {},
        incomingProps
      );

      // console.log(
      //   `${component}.${PSEUDO_PROP_COMPONENT_MAP[property]}`,
      //   pseudoComponentThemeProps,
      //   'hello 111'
      // );
      // if (component === 'Radio' && property === '_stack') {
      //   // console.log(pseudoComponentThemeProps, incomingProps, 'property here');
      // }
      // if (component === 'Radio' && property === '_stack') {
      //   console.log(incomingProps, 'property here');
      // }

      // if (component === 'Button') {
      //   console.log(
      //     property,
      //     // componentThemeProps?.unResolvedProps,
      //     pseudoComponentThemeProps,
      //     // resolvedProps,
      //     'hhhhh1111'
      //   );
      // }

      resolvedProps[property] = {
        ...pseudoComponentThemeProps.restDefaultProps,
        ...componentThemeProps.internalPseudoProps[property],
        ...resolvedProps[property],
        INTERNAL_themeStyle: resolvedProps[property]?.INTERNAL_themeStyle
          ? [
              pseudoComponentThemeProps.styleFromProps,
              ...resolvedProps[property].INTERNAL_themeStyle,
            ]
          : // resolvedProps[property].INTERNAL_themeStyle.unshift(
            //     pseudoComponentThemeProps.styleFromProps
            //   )
            // [
            //     {
            //       ...pseudoComponentThemeProps.styleFromProps,
            //     },
            //     ...resolvedProps[property].INTERNAL_themeStyle,
            //   ]
            [pseudoComponentThemeProps.styleFromProps],
      };

      // resolvedProps[property] = {
      //   ...pseudoComponentThemeProps.restDefaultProps,
      //   ...resolvedProps[property],
      //   INTERNAL_themeStyle: resolvedProps[property]?.INTERNAL_themeStyle
      //     ? [
      //         ...pseudoComponentThemeProps.style,
      //         ...resolvedProps[property].INTERNAL_themeStyle,
      //       ]
      //     : pseudoComponentThemeProps.style,
      // };

      // if (component === 'SliderTrack') {
      //   console.log(
      //     '&&&&&',
      //     incomingProps,
      //     // componentThemeProps.internalPseudoProps[property],
      //     resolvedProps[property]
      //   );
      // }
    }

    // else if (!pseudoPropStateMap[property]) {
    //   console.log(
    //     property,
    //     componentThemeProps.internalPseudoProps[property],
    //     'hello property'
    //   );

    //   resolvedProps[property] = {
    //     ...resolvedProps[property],
    //     ...componentThemeProps.internalPseudoProps[property],
    //     // INTERNAL_themeStyle: resolvedProps[property]?.INTERNAL_themeStyle
    //     //   ? [
    //     //       ...pseudoComponentThemeProps.style,
    //     //       ...resolvedProps[property].INTERNAL_themeStyle,
    //     //     ]
    //     //   : pseudoComponentThemeProps.style,
    //   };
    // }
  }

  return resolvedProps;
}

/*Resolve all the internal used Pseudo Props*/
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const resolvePseudoProps = (
  flatPseudoProp: any /** Props coming from Pseudo inside flattenProps */,
  baseStylePseudoProp: any /** Props coming from Pseudo inside defaultStyles(baseStyle) */
) => {
  for (const prop in flatPseudoProp) {
    baseStylePseudoProp[prop] =
      flatPseudoProp[
        prop
      ]; /* Replace all the similar prop from from internal props */
  }
  return baseStylePseudoProp;
};
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const resolveComponentTheme = (
  themeType: Array<string>,
  providedTheme: any,
  theme: any,
  incomingWithDefaultProps: any,
  colorModeProps: any
): any => {
  try {
    if (themeType[1]) {
      return typeof providedTheme[themeType[0]][themeType[1]] !== 'function'
        ? providedTheme[themeType[0]][themeType[1]]
        : providedTheme[themeType[0]][themeType[1]]({
            theme,
            ...incomingWithDefaultProps,
            ...colorModeProps,
          });
    } else {
      return typeof providedTheme[themeType[0]] !== 'function'
        ? providedTheme[themeType[0]]
        : providedTheme[themeType[0]]({
            theme,
            ...incomingWithDefaultProps,
            ...colorModeProps,
          });
    }
  } catch {
    return {};
  }
};

// const isLiteral = (value: any) => {
//   if (typeof value === 'string' || typeof value === 'number') {
//     return true;
//   }
//   return false;
// };

const sizesExistsInTheme = (componentTheme: any, size: any) => {
  if (componentTheme?.sizes) {
    if (componentTheme.sizes[size]) {
      return true;
    }
  }
  return false;
};
export const usePropsResolutionWithComponentTheme = (
  componentTheme: ComponentTheme,
  incomingProps: any,
  theme?: any,
  state?: IStateProps,
  config?: {
    componentTheme?: any;
    resolveResponsively?: string[];
    ignoreProps?: string[];
    cascadePseudoProps?: boolean;
    extendTheme?: string[];
    name: string;
  }
) => {
  // return incomingProps;

  // optimized-start
  const modifiedPropsForSSR = useResponsiveSSRProps(incomingProps, theme);
  // optimized-end

  // need to think
  const [ignoredProps, cleanIncomingProps] = extractInObject(
    modifiedPropsForSSR,
    ['children', 'onPress', 'icon', 'onOpen', 'onClose'].concat(
      config?.ignoreProps || []
    )
  );

  const isSSR = useNativeBaseConfig('NativeBase').isSSR;
  const disableCSSMediaQueries = !isSSR;

  const resolveResponsively = [
    'colorScheme',
    'size',
    'variant',
    ...(config?.resolveResponsively || []),
  ];

  const colorModeProps = useColorMode();

  // const extendedTheme: Array<any> = [];
  // if (config?.extendTheme) {
  // config?.extendTheme.map((componentName: string) => {
  //   extendedTheme.push(get(theme, `components.${componentName}`, {}));
  // });
  // }

  // if (!isEmpty(componentTheme)) extendedTheme.push(componentTheme);

  // STEP 1: combine default props and incoming props

  // const incomingWithDefaultProps = merge(
  //   {},
  //   componentTheme.defaultProps || {},
  //   cleanIncomingProps
  // );

  let incomingWithDefaultProps = cleanIncomingProps;

  // TODO: size to boxSize conversion in user props
  if (incomingWithDefaultProps.size) {
    if (
      !sizesExistsInTheme(componentTheme, incomingWithDefaultProps.size) &&
      isLiteral(incomingWithDefaultProps.size)
    ) {
      incomingWithDefaultProps = {
        boxSize: incomingWithDefaultProps.size,
        ...incomingWithDefaultProps,
      };
    }

    incomingWithDefaultProps.size = undefined;
  }

  if (incomingWithDefaultProps.variant) {
    incomingWithDefaultProps.variant = undefined;
  }

  // STEP 1.5: resolving component theme

  // extendedTheme.map((extededComponentTheme: any) => {
  //   if (extededComponentTheme.baseStyle) {
  //     combinedBaseStyle = {
  //       ...combinedBaseStyle,
  //       ...resolveComponentTheme(
  //         ["baseStyle"],
  //         extededComponentTheme,
  //         theme,
  //         incomingWithDefaultProps,
  //         colorModeProps
  //       ),
  //     };
  //   }
  //   if (incomingWithDefaultProps.variant) {
  //     if (extededComponentTheme.variants) {
  //       combinedVariantStyle = {
  //         ...combinedVariantStyle,
  //         ...resolveComponentTheme(
  //           ["variants", incomingWithDefaultProps.variant],
  //           extededComponentTheme,
  //           theme,
  //           incomingWithDefaultProps,
  //           colorModeProps
  //         ),
  //       };
  //     }
  //   }
  //   if (
  //     incomingWithDefaultProps.size &&
  //     extededComponentTheme?.sizes &&
  //     extededComponentTheme?.sizes[incomingWithDefaultProps.size]
  //   ) {
  //     if (
  //       typeof extededComponentTheme.sizes[incomingWithDefaultProps.size] ===
  //         "string" ||
  //       typeof extededComponentTheme.sizes[incomingWithDefaultProps.size] ===
  //         "number"
  //     ) {
  //       incomingWithDefaultProps.size =
  //         extededComponentTheme.sizes[incomingWithDefaultProps.size];
  //     } else {
  //       combinedSizeStyle = {
  //         ...combinedSizeStyle,
  //         ...resolveComponentTheme(
  //           ["sizes", incomingWithDefaultProps.size],
  //           extededComponentTheme,
  //           theme,
  //           incomingWithDefaultProps,
  //           colorModeProps
  //         ),
  //       };
  // incomingWithDefaultProps.size = undefined;
  //     }
  //   }
  // });

  // STEP 2: flatten them
  // if (process.env.NODE_ENV === "development" && cleanIncomingProps.debug) {
  //   /* eslint-disable-next-line */
  //   console.log(
  //     `%cFlattening incoming and Default`,
  //     "background: #4b5563; color: #FFF; font-weight: 700; padding: 2px 8px;"
  //   );
  // }

  // console.log(incomingWithDefaultProps, 'incoming with default');
  //TODO: hack
  //@ts-ignore
  let flattenProps: any, specificityMap;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [flattenProps, specificityMap] = callPropsFlattener(
    incomingWithDefaultProps,
    {},
    2,
    cleanIncomingProps,
    colorModeProps,
    state,
    flattenProps,
    { ...config, platform: Platform.OS }
  );

  // console.log(specificityMap, "*****");
  // console.log("outgoing ******", flattenProps);

  const responsiveProps = {};
  if (disableCSSMediaQueries) {
    // STEP 2.5: resolving responsive props
    resolveResponsively.map((propsName) => {
      if (flattenProps[propsName]) {
        // @ts-ignore
        responsiveProps[propsName] = flattenProps[propsName];
      }
    });
  }
  if (resolveResponsively.includes('direction')) {
    const propName = 'direction';
    if (flattenProps[propName]) {
      // @ts-ignore
      responsiveProps[propName] = flattenProps[propName];
    }
  }

  const responsivelyResolvedProps = useBreakpointResolvedProps(responsiveProps);

  flattenProps = {
    ...flattenProps,
    ...responsivelyResolvedProps,
  };

  //tested

  // STEP 3: Pass it to baseStyle, then variant and then size and resolve them.

  // NOTE: Resoloving baseStyle

  //tested
  // STEP 4: merge

  // console.log(defaultStyles, "*******");

  // if (!isEmpty(defaultStyles)) {
  //   for (const prop in defaultStyles) {
  //     if (prop.startsWith("_") && flattenProps.hasOwnProperty(prop)) {
  //       /*Resolve all the internal used Pseudo Props*/
  //       defaultStyles[prop] = resolvePseudoProps(
  //         flattenProps[prop],
  //         defaultStyles[prop]
  //       );
  //     }
  //     delete flattenProps[prop];
  //   }
  // }

  // const defaultSpecificity = specificityMap;
  // merge(
  //   {},
  //   specificityMap,
  //   baseSpecificityMap,
  //   variantSpecificityMap,
  //   sizeSpecificityMap
  // );

  // console.log(defaultSpecificity, "h3h3h3");

  // flattenProps = propsSpreader(
  //   { ...defaultStyles, ...flattenProps },
  //   defaultSpecificity
  // );

  const resolvedProps = omitUndefined({
    ...flattenProps,
    ...ignoredProps,
  });

  // STEP 5: Return
  return resolvedProps;
};
