import get from 'lodash.get';
import merge from 'lodash.merge';
import isEmpty from 'lodash.isempty';
import { Platform } from 'react-native';
import { useNativeBase } from '../useNativeBase';
import { useColorMode } from '../../core/color-mode';
import { omitUndefined, extractInObject } from '../../theme/tools';
import { useBreakpointResolvedProps } from '../useBreakpointResolvedProps';
import {
  propsFlattener,
  compareSpecificity,
  IStateProps,
} from './propsFlattener';
import { useResponsiveSSRProps } from '../useResponsiveSSRProps';
import React from 'react';
import { ResponsiveQueryContext } from '../../utils/useResponsiveQuery/ResponsiveQueryProvider';
import type { ComponentTheme } from '../../theme';

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

function propsSpreader(incomingProps: any, incomingSpecifity: any) {
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
  incomingProps: any,
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
  const componentTheme =
    config?.componentTheme ?? get(theme, `components.${component}`, {});

  if (process.env.NODE_ENV === 'development' && incomingProps.debug) {
    /* eslint-disable-next-line */
    console.log(
      `%c${component}`,
      'background: #d97706; color: #111; font-weight: 700; padding: 2px 8px;'
    );
    /* eslint-disable-next-line */
    console.log(
      `%cusePropsResolution`,
      'background: #4b5563; color: #d97706; font-weight: 700; padding: 2px 8px;'
    );
    /* eslint-disable-next-line */
    console.log(
      '%c incomingProps: ',
      'color: #4ade80; font-weight: 700;',
      incomingProps
    );
    /* eslint-disable-next-line */
    console.log('%c state: ', 'color: #4ade80; font-weight: 700;', state);
    /* eslint-disable-next-line */
    console.log(
      '%c componentTheme: ',
      'color: #4ade80; font-weight: 700;',
      componentTheme
    );
  }

  const resolvedProps = usePropsResolutionWithComponentTheme(
    componentTheme,
    incomingProps,
    state,
    config
  );

  // Not Resolve theme props and pseudo props
  if (incomingProps?.INTERNAL_notResolveThemeAndPseudoProps) {
    delete incomingProps.INTERNAL_notResolveThemeAndPseudoProps;
    return incomingProps;
  }

  if (process.env.NODE_ENV === 'development' && incomingProps.debug) {
    /* eslint-disable-next-line */
    console.log(
      '%c resolvedProps: ',
      'color: #22d3ee; font-weight: 700;',
      resolvedProps
    );
  }
  return resolvedProps;
}

export const usePropsResolutionWithComponentTheme = (
  componentTheme: ComponentTheme,
  incomingProps: any,
  state?: IStateProps,
  config?: {
    componentTheme?: any;
    resolveResponsively?: string[];
    ignoreProps?: string[];
    cascadePseudoProps?: boolean;
    extendTheme?: string[];
  }
) => {
  const modifiedPropsForSSR = useResponsiveSSRProps(incomingProps);

  const [ignoredProps, cleanIncomingProps] = extractInObject(
    modifiedPropsForSSR,
    ['children', 'onPress', 'icon', 'onOpen', 'onClose'].concat(
      config?.ignoreProps || []
    )
  );
  const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;
  const resolveResponsively = [
    'colorScheme',
    'size',
    'variant',
    ...(config?.resolveResponsively || []),
  ];

  const { theme } = useNativeBase();
  const colorModeProps = useColorMode();

  const extendedTheme: Array<any> = [];
  if (config?.extendTheme) {
    config?.extendTheme.map((componentName: string) => {
      extendedTheme.push(get(theme, `components.${componentName}`, {}));
    });
  }
  if (!isEmpty(componentTheme)) extendedTheme.push(componentTheme);

  const resolveComponentTheme = (
    themeType: Array<string>,
    providedTheme: any
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
  const callPropsFlattener = (
    targetProps = {},
    latestSpecifictyMap = {},
    specificity = 1
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
      },
      specificity
    );
  };

  // STEP 1: combine default props and incoming props

  const incomingWithDefaultProps = merge(
    {},
    componentTheme.defaultProps || {},
    cleanIncomingProps
  );

  // STEP 1.5: resolving component theme
  let combinedBaseStyle = {};
  let combinedVariantStyle = {};
  let combinedSizeStyle = {};
  extendedTheme.map((extededComponentTheme: any) => {
    if (extededComponentTheme.baseStyle) {
      combinedBaseStyle = {
        ...combinedBaseStyle,
        ...resolveComponentTheme(['baseStyle'], extededComponentTheme),
      };
    }
    if (incomingWithDefaultProps.variant) {
      if (extededComponentTheme.variants) {
        combinedVariantStyle = {
          ...combinedVariantStyle,
          ...resolveComponentTheme(
            ['variants', incomingWithDefaultProps.variant],
            extededComponentTheme
          ),
        };
      }
    }
    if (
      incomingWithDefaultProps.size &&
      extededComponentTheme?.sizes &&
      extededComponentTheme?.sizes[incomingWithDefaultProps.size]
    ) {
      if (
        typeof extededComponentTheme.sizes[incomingWithDefaultProps.size] ===
          'string' ||
        typeof extededComponentTheme.sizes[incomingWithDefaultProps.size] ===
          'number'
      ) {
        incomingWithDefaultProps.size =
          extededComponentTheme.sizes[incomingWithDefaultProps.size];
      } else {
        combinedSizeStyle = {
          ...combinedSizeStyle,
          ...resolveComponentTheme(
            ['sizes', incomingWithDefaultProps.size],
            extededComponentTheme
          ),
        };
        incomingWithDefaultProps.size = undefined;
      }
    }
  });

  // STEP 2: flatten them
  if (process.env.NODE_ENV === 'development' && cleanIncomingProps.debug) {
    /* eslint-disable-next-line */
    console.log(
      `%cFlattening incoming and Default`,
      'background: #4b5563; color: #FFF; font-weight: 700; padding: 2px 8px;'
    );
  }
  //TODO: hack
  let flattenProps: any, specificityMap;
  [flattenProps, specificityMap] = callPropsFlattener(
    incomingWithDefaultProps,
    {},
    2
  );
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
  // STEP 3: Pass it to baseStyle, then variant and then size and resolve them.

  // NOTE: Resoloving baseStyle
  let flattenBaseStyle, baseSpecificityMap;
  if (combinedBaseStyle) {
    if (process.env.NODE_ENV === 'development' && cleanIncomingProps.debug) {
      /* eslint-disable-next-line */
      console.log(
        `%cFlattening baseStyle`,
        'background: #4b5563; color: #eee; font-weight: 700; padding: 2px 8px;'
      );
    }
    [flattenBaseStyle, baseSpecificityMap] = callPropsFlattener(
      combinedBaseStyle,
      specificityMap
    );
  }

  // NOTE: Resolving variants
  let flattenVariantStyle, variantSpecificityMap;
  // Extracting props from variant
  if (combinedVariantStyle) {
    if (process.env.NODE_ENV === 'development' && cleanIncomingProps.debug) {
      /* eslint-disable-next-line */
      console.log(
        `%cFlattening variantStyle`,
        'background: #4b5563; color: #FFF; font-weight: 700; padding: 2px 8px;'
      );
    }
    [flattenVariantStyle, variantSpecificityMap] = callPropsFlattener(
      combinedVariantStyle,
      baseSpecificityMap || specificityMap
    );

    // We remove variant from original props if we found it in the componentTheme
    //@ts-ignore
    flattenProps.variant = undefined;
  }

  // NOTE: Resolving size

  let flattenSizeStyle, sizeSpecificityMap;
  // Extracting props from size
  if (combinedSizeStyle) {
    if (process.env.NODE_ENV === 'development' && cleanIncomingProps.debug) {
      /* eslint-disable-next-line */
      console.log(
        `%cFlattening sizeStyle`,
        'background: #4b5563; color: #FFF; font-weight: 700; padding: 2px 8px;'
      );
    }
    [flattenSizeStyle, sizeSpecificityMap] = callPropsFlattener(
      combinedSizeStyle,
      variantSpecificityMap || baseSpecificityMap || specificityMap
    );
  }

  // STEP 4: merge
  const defaultStyles = merge(
    {},
    flattenBaseStyle,
    flattenVariantStyle,
    flattenSizeStyle
  );

  /*Resolve all the internal used Pseudo Props*/
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

  for (const prop in defaultStyles) {
    if (prop.startsWith('_') && flattenProps.hasOwnProperty(prop)) {
      /*Resolve all the internal used Pseudo Props*/
      defaultStyles[prop] = resolvePseudoProps(
        flattenProps[prop],
        defaultStyles[prop]
      );
    }
    delete flattenProps[prop];
  }

  const defaultSpecificity = merge(
    {},
    specificityMap,
    baseSpecificityMap,
    variantSpecificityMap,
    sizeSpecificityMap
  );

  flattenProps = propsSpreader(
    { ...defaultStyles, ...flattenProps },
    defaultSpecificity
  );

  const resolvedProps = omitUndefined({
    ...flattenProps,
    ...ignoredProps,
  });

  // STEP 5: Return
  return resolvedProps;
};
