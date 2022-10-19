/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNativeBase } from '../useNativeBase';
import { omitUndefined, extractInObject, isLiteral } from '../../theme/tools';
import { useBreakpointResolvedProps } from '../useBreakpointResolvedProps';
import { IStateProps, propsSpreader } from './propsFlattener';
import { useResponsiveSSRProps } from '../useResponsiveSSRProps';
import type { ComponentTheme } from '../../theme';
import { useNativeBaseConfig } from '../../core/NativeBaseContext';
import { getThemeProps } from '../../utils/static/styled';
import { callPropsFlattener } from './propsFlattener';

import { useColorMode } from '../../core/color-mode';
import { PSEUDO_PROP_COMPONENT_MAP } from '../../utils/static/styled';
import get from 'lodash.get';
import { Platform } from 'react-native';
import merge from 'lodash.merge';
import { isEmptyObj } from '../../utils/isEmptyObj';

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
  { INTERNAL_themeStyle, stateProps, ...inputProps }: any,
  state?: IStateProps,
  config?: {
    componentTheme?: any;
    resolveResponsively?: string[];
    ignoreProps?: string[];
    cascadePseudoProps?: boolean;
    extendTheme?: string[];
    notResolveThemeProps?: boolean;
  }
) {
  const { theme } = useNativeBase();

  const { colorMode } = useColorMode();
  const providerId = useNativeBaseConfig('NativeBase').providerId;

  // need to think
  const [ignoredProps, incomingProps] = extractInObject(
    inputProps,
    ['children', 'onPress', 'onOpen', 'onClose'].concat(
      config?.ignoreProps || []
    )
  );

  // componentThemeProps - return default+extended theme resolved props
  const componentThemeProps = getThemeProps(
    theme,
    providerId,
    component,
    { colorMode: colorMode, platform: Platform.OS },
    state,
    incomingProps,
    config?.notResolveThemeProps
  );

  const stateStyleFromProps = omitUndefined(
    componentThemeProps.stateStyleFromProps
  );

  // This is only for TextArea
  if (config?.extendTheme) {
    config.extendTheme.forEach((extendedComponent) => {
      const extendedThemeProps = getThemeProps(
        theme,
        providerId,
        extendedComponent,
        { colorMode, platform: Platform.OS },
        state,
        incomingProps,
        config?.notResolveThemeProps
      );

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
    });
  }

  const componentTheme = get(theme, `components.${component}`);

  // usePropsResolutionWithComponentTheme - returns inline theme props

  /**
   * merging inline props on top of rest default props at line:105
   */
  const resolvedPropsWithStateProps = usePropsResolutionWithComponentTheme(
    componentTheme,
    merge(
      {},
      componentThemeProps?.unResolvedProps,
      componentThemeProps?.restDefaultProps,
      incomingProps
    ),
    theme,
    state,
    { ...config, name: component }
  );

  let resolvedFlattenProps = resolvedPropsWithStateProps.flattenProps;
  const resolvedStateProps = {
    ...stateProps,
    ...resolvedPropsWithStateProps.stateProps,
  };

  const restDefaultWithStateProps = componentThemeProps?.stateRestDefaultProps;

  /**
   * --> Merging inline state props on top of rest default state props
   * --> Final result will be [restDefaultProps, inlineProps, restDefaulStateProps, inlineStateProps]
   */

  for (const property in restDefaultWithStateProps) {
    resolvedFlattenProps[property] =
      resolvedPropsWithStateProps.stateProps[property] ??
      restDefaultWithStateProps[property];
  }
  // Merge default props with inline resolved props
  resolvedFlattenProps.INTERNAL_themeStyle = INTERNAL_themeStyle
    ? [componentThemeProps.styleFromProps, ...INTERNAL_themeStyle]
    : [componentThemeProps.styleFromProps];

  resolvedStateProps.INTERNAL_themeStyle = stateProps?.INTERNAL_themeStyle
    ? [stateStyleFromProps, ...stateProps.INTERNAL_themeStyle]
    : isEmptyObj(stateStyleFromProps)
    ? []
    : [stateStyleFromProps];

  // merge rest default props with resolved props
  resolvedFlattenProps = {
    ...componentThemeProps.restDefaultProps,
    ...resolvedFlattenProps,
  };

  if (resolvedFlattenProps.size) {
    if (
      !sizesExistsInTheme(componentTheme, resolvedFlattenProps.size) &&
      isLiteral(resolvedFlattenProps.size)
    ) {
      resolvedFlattenProps = {
        boxSize: resolvedFlattenProps.size,
        ...resolvedFlattenProps,
      };
    }

    resolvedFlattenProps.size = undefined;
  }

  // merge for each internal pseudo props
  for (const property in componentThemeProps.internalPseudoProps) {
    if (PSEUDO_PROP_COMPONENT_MAP[property]) {
      const pseudoComponentThemeProps = getThemeProps(
        theme,
        providerId,
        `${component}.${PSEUDO_PROP_COMPONENT_MAP[property]}`,
        { colorMode, platform: Platform.OS },
        {},
        incomingProps,
        config?.notResolveThemeProps
      );

      resolvedFlattenProps[property] = {
        ...pseudoComponentThemeProps.restDefaultProps,
        ...componentThemeProps.internalPseudoProps[property],
        ...resolvedFlattenProps[property],
        INTERNAL_themeStyle: resolvedFlattenProps[property]?.INTERNAL_themeStyle
          ? [
              pseudoComponentThemeProps.styleFromProps,
              ...resolvedFlattenProps[property].INTERNAL_themeStyle,
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
    }
  }

  // for inline pseudo compoennt props- merge property
  for (const property in resolvedStateProps) {
    if (PSEUDO_PROP_COMPONENT_MAP[property]) {
      if (resolvedFlattenProps[property]) {
        resolvedFlattenProps[property].stateProps =
          resolvedStateProps[property];
      } else {
        resolvedFlattenProps[property] = {
          stateProps: resolvedStateProps[property],
        };
      }
    }
  }

  const resolvedProps = omitUndefined({
    ...resolvedFlattenProps,
    ...ignoredProps,
    stateProps: resolvedStateProps,
  });

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
  const cleanIncomingProps = useResponsiveSSRProps(incomingProps, theme);
  // optimized-end

  const isSSR = useNativeBaseConfig('NativeBase').isSSR;
  const disableCSSMediaQueries = !isSSR;

  const resolveResponsively = [
    'colorScheme',
    'size',
    'variant',
    'direction',
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
  let flattenProps: any, stateProps, specificityMap;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [
    flattenProps,
    specificityMap,
    stateProps,
  ] = callPropsFlattener(
    incomingWithDefaultProps,
    {},
    2,
    cleanIncomingProps,
    colorModeProps,
    state,
    flattenProps,
    { ...config, platform: Platform.OS }
  );

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

  // const defaultSpecificity = merge(
  //   {},
  //   specificityMap,
  //   baseSpecificityMap,
  //   variantSpecificityMap,
  //   sizeSpecificityMap
  // );

  flattenProps = {
    ...flattenProps,
    ...responsivelyResolvedProps,
  };

  flattenProps = propsSpreader({ ...flattenProps }, specificityMap);

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

  // STEP 5: Return

  return {
    flattenProps: omitUndefined(flattenProps),
    stateProps: omitUndefined(stateProps),
  };
};
