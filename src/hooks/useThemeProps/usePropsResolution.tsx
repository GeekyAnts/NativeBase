import get from 'lodash.get';
import merge from 'lodash.merge';
import { Platform } from 'react-native';
import { useNativeBase } from '../useNativeBase';
import { useColorMode } from '../../core/color-mode';
import { omitUndefined, extractInObject } from '../../theme/tools';
import { useContrastText } from '../useContrastText';
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
import { useNativeBaseConfig } from '../../core/NativeBaseContext';

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

  // STEP 1: combine default props and incoming props

  const incomingWithDefaultProps = merge(
    {},
    componentTheme.defaultProps || {},
    cleanIncomingProps
  );
  // STEP 2: flatten them
  if (process.env.NODE_ENV === 'development' && cleanIncomingProps.debug) {
    /* eslint-disable-next-line */
    console.log(
      `%cFlattening incoming and Default`,
      'background: #4b5563; color: #FFF; font-weight: 700; padding: 2px 8px;'
    );
  }
  let [flattenProps, specificityMap] = propsFlattener(
    {
      props: incomingWithDefaultProps,
      platform: Platform.OS,
      colormode: colorModeProps.colorMode,
      state: state || {},
      previouslyFlattenProps: {},
      cascadePseudoProps: config?.cascadePseudoProps,
    },
    2
  );
  // console.log(resolveResponsively);
  // Not work for SSR
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
  let componentBaseStyle = {},
    flattenBaseStyle,
    baseSpecificityMap;
  if (componentTheme.baseStyle) {
    componentBaseStyle =
      typeof componentTheme.baseStyle !== 'function'
        ? componentTheme.baseStyle
        : componentTheme.baseStyle({
            theme,
            ...flattenProps,
            ...colorModeProps,
          });
    if (process.env.NODE_ENV === 'development' && cleanIncomingProps.debug) {
      /* eslint-disable-next-line */
      console.log(
        `%cFlattening baseStyle`,
        'background: #4b5563; color: #eee; font-weight: 700; padding: 2px 8px;'
      );
    }
    [flattenBaseStyle, baseSpecificityMap] = propsFlattener(
      {
        props:
          process.env.NODE_ENV === 'development' && cleanIncomingProps.debug
            ? { ...componentBaseStyle, debug: true }
            : componentBaseStyle,
        platform: Platform.OS,
        colormode: colorModeProps.colorMode,
        state: state || {},
        currentSpecificityMap: specificityMap,
        previouslyFlattenProps: flattenProps,
        cascadePseudoProps: config?.cascadePseudoProps,
      },
      1
    );
  }

  // NOTE: Resolving variants
  const variant = flattenProps.variant;

  let componentVariantProps = {},
    flattenVariantStyle,
    variantSpecificityMap;
  // Extracting props from variant
  if (variant && componentTheme.variants && componentTheme.variants[variant]) {
    componentVariantProps =
      typeof componentTheme.variants[variant] !== 'function'
        ? componentTheme.variants[variant]
        : //@ts-ignore
          componentTheme.variants[variant]({
            theme,
            ...flattenProps,
            ...colorModeProps,
          });

    if (process.env.NODE_ENV === 'development' && cleanIncomingProps.debug) {
      /* eslint-disable-next-line */
      console.log(
        `%cFlattening variantStyle`,
        'background: #4b5563; color: #FFF; font-weight: 700; padding: 2px 8px;'
      );
    }
    [flattenVariantStyle, variantSpecificityMap] = propsFlattener(
      {
        props:
          process.env.NODE_ENV === 'development' && cleanIncomingProps.debug
            ? { ...componentVariantProps, debug: true }
            : componentVariantProps,
        platform: Platform.OS,
        colormode: colorModeProps.colorMode,
        state: state || {},
        currentSpecificityMap: baseSpecificityMap || specificityMap,
        // NOTE: Ideally flattenBaseStyle and flattenProps should be deeply merged to create previouslyFlattenProps.
        previouslyFlattenProps: flattenProps,
        cascadePseudoProps: config?.cascadePseudoProps,
      },
      1
    );

    // We remove variant from original props if we found it in the componentTheme
    //@ts-ignore
    flattenProps.variant = undefined;
  }

  // NOTE: Resolving size

  const size = flattenProps.size;

  let componentSizeProps = {},
    flattenSizeStyle,
    sizeSpecificityMap;
  // Extracting props from size
  if (size && componentTheme.sizes && componentTheme.sizes[size]) {
    // Type - sizes: {lg: 1}. Refer icon theme
    if (
      typeof componentTheme.sizes[size] === 'string' ||
      typeof componentTheme.sizes[size] === 'number'
    ) {
      flattenProps.size = componentTheme.sizes[size];
      //@ts-ignore
      // componentSizeProps.size = componentTheme.sizes[size];
    }
    // Type - sizes: (props) => ({lg: {px: 1}}). Refer heading theme
    else if (typeof componentTheme.sizes[size] === 'function') {
      flattenProps.size = undefined;
      //@ts-ignore
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
    if (process.env.NODE_ENV === 'development' && cleanIncomingProps.debug) {
      /* eslint-disable-next-line */
      console.log(
        `%cFlattening sizeStyle`,
        'background: #4b5563; color: #FFF; font-weight: 700; padding: 2px 8px;'
      );
    }
    [flattenSizeStyle, sizeSpecificityMap] = propsFlattener(
      {
        props:
          process.env.NODE_ENV === 'development' && cleanIncomingProps.debug
            ? { ...componentSizeProps, debug: true }
            : componentSizeProps,
        platform: Platform.OS,
        colormode: colorModeProps.colorMode,
        state: state || {},
        currentSpecificityMap:
          variantSpecificityMap || baseSpecificityMap || specificityMap,
        previouslyFlattenProps: flattenProps,
        cascadePseudoProps: config?.cascadePseudoProps,
      },
      1
    );
  }

  // // STEP 4: merge
  const defaultStyles = merge(
    {},
    flattenBaseStyle,
    flattenVariantStyle,
    flattenSizeStyle
  );

  for (const prop in defaultStyles) {
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

  // // STEP 5: linear Grad and contrastText
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
  // // NOTE: seprating bg props when linearGardiant is available
  const [gradientProps] = extractInObject(flattenProps, ignore);

  const disableContrastText = useNativeBaseConfig('NativeBaseConfigProvider')
    .disableContrastText;
  const bgColor =
    flattenProps.bg ?? flattenProps.backgroundColor ?? flattenProps.bgColor;

  const contrastTextColor = useContrastText(
    bgColor,
    flattenProps?._text?.color,
    disableCSSMediaQueries ? (disableContrastText ? true : false) : true
  );

  flattenProps._text =
    contrastTextColor && flattenProps?._text?.color === undefined
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

  // flattenProps = {};
  // propertyDepth = {};

  return resolvedProps;
};
