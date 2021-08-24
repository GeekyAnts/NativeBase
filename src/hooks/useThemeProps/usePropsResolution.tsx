import get from 'lodash.get';
import merge from 'lodash.merge';
import { Platform } from 'react-native';
import { useNativeBase } from '../useNativeBase';
import { useColorMode } from '../../core/color-mode';
import { omitUndefined, extractInObject } from '../../theme/tools';
import { useContrastText } from '../useContrastText';
import { useBreakpointResolvedProps } from '../useBreakpointResolvedProps';
import { propsFlattener } from './propsFlattener';

const specificityOrder = [
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

let marginMap: any = {
  mx: ['marginRight', 'marginLeft'],
  my: ['marginTop', 'marginBottom'],
  mt: ['marginTop'],
  mb: ['marginBottom'],
  mr: ['marginRight'],
  ml: ['marginLeft'],
};

marginMap.margin = [...marginMap.mx, ...marginMap.my];
marginMap.m = marginMap.margin;
marginMap.marginTop = marginMap.mt;
marginMap.marginBottom = marginMap.mb;
marginMap.marginLeft = marginMap.ml;
marginMap.marginRight = marginMap.mr;

let paddingMap: any = {
  px: ['paddingRight', 'paddingLeft'],
  py: ['paddingTop', 'paddingBottom'],
  pt: ['paddingTop'],
  pb: ['paddingBottom'],
  pr: ['paddingRight'],
  pl: ['paddingLeft'],
};

paddingMap.padding = [...paddingMap.px, ...paddingMap.py];
paddingMap.p = paddingMap.padding;
paddingMap.paddingTop = paddingMap.pt;
paddingMap.paddingBottom = paddingMap.pb;
paddingMap.paddingLeft = paddingMap.pl;
paddingMap.paddingRight = paddingMap.pr;

const specificityMaps: any = {
  ...paddingMap,
  ...marginMap,
};

function overrideDefaultProps(userProps: any, defaultProps: any) {
  const flattenedUserProps: any = { ...userProps };
  const flattenedDefaultProps: any = { ...defaultProps };

  specificityOrder.forEach((prop) => {
    if (prop in flattenedUserProps) {
      const val = flattenedUserProps[prop];
      delete flattenedUserProps[prop];

      specificityMaps[prop].forEach((newProp: string) => {
        flattenedUserProps[newProp] = val;
      });
    }

    if (prop in flattenedDefaultProps) {
      const val = flattenedDefaultProps[prop];
      delete flattenedDefaultProps[prop];

      specificityMaps[prop].forEach((newProp: string) => {
        flattenedDefaultProps[newProp] = val;
      });
    }
  });

  return merge(flattenedDefaultProps, flattenedUserProps);
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
  state?: any,
  config?: any
) {
  const [ignoredProps, cleanIncomingProps] = extractInObject(
    incomingProps,
    ['children', 'onPress', 'icon', 'onOpen', 'onClose'].concat(
      config?.ignoreProps || []
    )
  );
  const resolveResponsively = [
    'colorScheme',
    'size',
    'variant',
    ...(config?.resolveResponsively || []),
  ];

  const { theme } = useNativeBase();
  const colorModeProps = useColorMode();

  const componentTheme = get(theme, `components.${component}`, {});

  // const windowWidth = useWindowDimensions()?.width;
  // const currentBreakpoint = React.useMemo(
  //   () => getClosestBreakpoint(theme.breakpoints, windowWidth),
  //   [windowWidth, theme.breakpoints]
  // );

  // STEP 1: combine default props and incoming props

  const incomingWithDefaultProps = merge(
    {},
    componentTheme.defaultProps || {},
    cleanIncomingProps
  );
  // STEP 2: flatten them

  let [flattenProps, specificityMap] = propsFlattener(
    {
      props: incomingWithDefaultProps,
      platform: Platform.OS,
      colormode: colorModeProps.colorMode,
      state: state || {},
    },
    2
  );

  // STEP 2.5: resolving responsive props
  const responsiveProps = {};
  resolveResponsively.map((propsName) => {
    if (flattenProps[propsName]) {
      // @ts-ignore
      responsiveProps[propsName] = flattenProps[propsName];
    }
  });

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

    [flattenBaseStyle, baseSpecificityMap] = propsFlattener(
      {
        props: componentBaseStyle,
        platform: Platform.OS,
        colormode: colorModeProps.colorMode,
        state: state || {},
        currentSpecificityMap: specificityMap,
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
        : componentTheme.variants[variant]({
            theme,
            ...flattenProps,
            ...colorModeProps,
          });

    [flattenVariantStyle, variantSpecificityMap] = propsFlattener(
      {
        props: componentVariantProps,
        platform: Platform.OS,
        colormode: colorModeProps.colorMode,
        state: state || {},
        currentSpecificityMap: baseSpecificityMap || specificityMap,
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
    flattenSizeStyle;
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
      componentSizeProps = componentTheme.sizes[size]({
        theme,
        ...flattenProps,
        ...colorModeProps,
      });
    }
    // Type - sizes: {lg: {px: 1}}. Refer button theme
    else {
      flattenProps.size = undefined;
      // HACK: Doing a temp fix
      if (component === 'Image')
        flattenProps.size = componentTheme.sizes[size].size;
      componentSizeProps = componentTheme.sizes[size];
    }

    [flattenSizeStyle] = propsFlattener(
      {
        props: componentSizeProps,
        platform: Platform.OS,
        colormode: colorModeProps.colorMode,
        state: state || {},
        currentSpecificityMap:
          variantSpecificityMap || baseSpecificityMap || specificityMap,
      },
      1
    );
  }

  // // STEP 4: merge
  const defaultStyles = merge(
    flattenBaseStyle,
    flattenVariantStyle,
    flattenSizeStyle
  );

  flattenProps = overrideDefaultProps(flattenProps, defaultStyles);

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

  let bgColor =
    flattenProps.bg ?? flattenProps.backgroundColor ?? flattenProps.bgColor;

  const contrastTextColor = useContrastText(
    bgColor,
    flattenProps?._text?.color
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
}
