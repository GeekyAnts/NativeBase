import merge from 'lodash.merge';

import { Platform } from 'react-native';
import { useNativeBase } from '../useNativeBase';
import { omitUndefined, extractInObject, isLiteral } from '../../theme/tools';
import { useBreakpointResolvedProps } from '../useBreakpointResolvedProps';
import {
  propsFlattener,
  compareSpecificity,
  IStateProps,
} from './propsFlattener';
import { useResponsiveSSRProps } from '../useResponsiveSSRProps';
import type { ComponentTheme } from '../../theme';
import { useNativeBaseConfig } from '../../core/NativeBaseContext';
import { getThemeProps } from '../../core/ResolvedStyleMap';

import { useColorMode } from '../../core/color-mode';
import { PSEUDO_PROP_COMPONENT_MAP } from '../../core/ResolvedStyleMap';
import get from 'lodash.get';

const SPREAD_PROP_SPECIFICITY_ORDER = [
  'p',
  'padding',
  'px',
  'py',
  'pt',
  'pb',
  'pl',
  'pr',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'm',
  'margin',
  'mx',
  'my',
  'mt',
  'mb',
  'ml',
  'mr',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
];

const FINAL_SPREAD_PROPS = [
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
];

const MARGIN_MAP: any = {
  mx: ['marginRight', 'marginLeft'],
  my: ['marginTop', 'marginBottom'],
  mt: ['marginTop'],
  mb: ['marginBottom'],
  mr: ['marginRight'],
  ml: ['marginLeft'],
};

MARGIN_MAP.margin = [...MARGIN_MAP.mx, ...MARGIN_MAP.my];
MARGIN_MAP.m = MARGIN_MAP.margin;
MARGIN_MAP.marginTop = MARGIN_MAP.mt;
MARGIN_MAP.marginBottom = MARGIN_MAP.mb;
MARGIN_MAP.marginLeft = MARGIN_MAP.ml;
MARGIN_MAP.marginRight = MARGIN_MAP.mr;

const PADDING_MAP: any = {
  px: ['paddingRight', 'paddingLeft'],
  py: ['paddingTop', 'paddingBottom'],
  pt: ['paddingTop'],
  pb: ['paddingBottom'],
  pr: ['paddingRight'],
  pl: ['paddingLeft'],
};

PADDING_MAP.padding = [...PADDING_MAP.px, ...PADDING_MAP.py];
PADDING_MAP.p = PADDING_MAP.padding;
PADDING_MAP.paddingTop = PADDING_MAP.pt;
PADDING_MAP.paddingBottom = PADDING_MAP.pb;
PADDING_MAP.paddingLeft = PADDING_MAP.pl;
PADDING_MAP.paddingRight = PADDING_MAP.pr;

const SPREAD_PROP_SPECIFICITY_MAP: any = {
  ...PADDING_MAP,
  ...MARGIN_MAP,
};

export function propsSpreader(incomingProps: any, incomingSpecifity: any) {
  const flattenedDefaultProps: any = { ...incomingProps };
  const specificity: any = {};

  SPREAD_PROP_SPECIFICITY_ORDER.forEach((prop) => {
    if (prop in flattenedDefaultProps) {
      const val = incomingProps[prop] || flattenedDefaultProps[prop];
      if (!FINAL_SPREAD_PROPS.includes(prop)) {
        delete flattenedDefaultProps[prop];
        specificity[prop] = incomingSpecifity[prop];
      }

      SPREAD_PROP_SPECIFICITY_MAP[prop].forEach((newProp: string) => {
        if (compareSpecificity(specificity[newProp], specificity[prop])) {
          specificity[newProp] = incomingSpecifity[prop];
          flattenedDefaultProps[newProp] = val;
        }
      });
    }
  });

  return merge({}, flattenedDefaultProps);
}

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

  const componentThemeProps = getThemeProps(
    component,
    colorMode,
    state,
    incomingProps
  );
  const componentTheme = get(theme, `components.${component}`);
  let resolvedProps = usePropsResolutionWithComponentTheme(
    componentTheme,
    { ...componentThemeProps?.unResolvedProps, ...incomingProps },
    theme,
    state,
    { ...config, name: component }
  );

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
  if (incomingProps?.INTERNAL_notResolveThemeAndPseudoProps) {
    delete incomingProps.INTERNAL_notResolveThemeAndPseudoProps;
    return incomingProps;
  }

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
    ? [...componentThemeProps.style, ...INTERNAL_themeStyle]
    : componentThemeProps.style;
  // console.log('component thme props 22', component);

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

  for (const property in componentThemeProps.internalPseudoProps) {
    if (PSEUDO_PROP_COMPONENT_MAP[property]) {
      const pseudoComponentThemeProps = getThemeProps(
        `${component}.${PSEUDO_PROP_COMPONENT_MAP[property]}`,
        colorMode,
        {},
        incomingProps
      );

      if (component === 'Radio' && property === '_stack') {
        // console.log(pseudoComponentThemeProps, incomingProps, 'property here');
      }

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
        ...resolvedProps[property],
        INTERNAL_themeStyle: resolvedProps[property]?.INTERNAL_themeStyle
          ? [
              ...pseudoComponentThemeProps.style,
              ...resolvedProps[property].INTERNAL_themeStyle,
            ]
          : pseudoComponentThemeProps.style,
      };
    }
  }
  // }

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
export const callPropsFlattener = (
  targetProps = {},
  latestSpecifictyMap = {},
  specificity = 1,
  cleanIncomingProps: any,
  colorModeProps: any,
  state: any,
  flattenProps: any,
  config?: any
): any => {
  return propsFlattener(
    {
      props:
        process.env.NODE_ENV === 'development' && cleanIncomingProps.debug
          ? { ...targetProps, debug: true }
          : targetProps,
      platform: Platform.OS,
      colormode: colorModeProps.colorMode,
      state: state || {},
      currentSpecificityMap: latestSpecifictyMap,
      previouslyFlattenProps: flattenProps || {},
      cascadePseudoProps: config?.cascadePseudoProps,
      name: config?.name,
    },
    specificity
  );
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
  //   config?.extendTheme.map((componentName: string) => {
  //     extendedTheme.push(get(theme, `components.${componentName}`, {}));
  //   });
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
    config
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
