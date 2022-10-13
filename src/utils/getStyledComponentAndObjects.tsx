import merge from 'lodash.merge';
import {
  callPropsFlattener,
  propsFlattener,
  propsSpreader,
} from '../hooks/useThemeProps/propsFlattener';
import { resolvePropsToStyle } from '../hooks/useThemeProps/resolvePropsToStyle';
import { isEmptyObj } from './isEmptyObj';
import isEmpty from 'lodash.isempty';

export const getStyledObject = (
  theme: any,
  //@ts-ignore
  name: string,
  componentTheme: any,
  config: any,
  inputProps?: {},
  mergeDefaultProps: boolean = true
) => {
  const componentStyle = componentTheme?.defaultProps?.style;

  // console.log(config, 'config here');
  let inputWithDefaultProps = {
    ...componentTheme.defaultProps,
    ...inputProps,
  };

  if (!mergeDefaultProps) {
    inputWithDefaultProps = inputProps;
  }

  let flattenProps: any, specificityMap;

  [flattenProps, specificityMap] = propsFlattener(
    {
      props: inputWithDefaultProps,
      platform: config.platform, //Platform.OS,
      colormode: config.colorMode,
      state: {},
      currentSpecificityMap: {},
      previouslyFlattenProps: flattenProps || {},
      cascadePseudoProps: true,
    },
    1
  );

  // console.log(inputProps, 'hello flatten here');

  [flattenProps] = mergeStylesWithSpecificity(
    theme,
    componentTheme,
    flattenProps,
    specificityMap,
    config.colorMode,
    mergeDefaultProps,
    config
  );

  // console.log(flattenProps, 'hello flatten props');

  const internalPseudoProps: any = {};

  for (const property in flattenProps) {
    if (
      property.startsWith('_') &&
      !['_dark', '_light', '_web', '_ios', '_android', '_important'].includes(
        property
      )
    ) {
      internalPseudoProps[property] = flattenProps[property];
    }
  }

  const styleObj: any = resolvePropsToStyle(
    flattenProps,
    theme,
    config.platform,
    false,
    4,
    false,
    undefined
  );

  styleObj.internalPseudoProps = internalPseudoProps;
  styleObj.style = { ...styleObj?.style, ...componentStyle };

  return styleObj;
};
//@ts-ignore

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const resolveComponentThemeStyle = (
//   incomingProps: any,
//   themeType: Array<string>,
//   providedTheme?: any
// ): any => {
//   try {
//     if (themeType[1]) {
//       return typeof providedTheme[themeType[0]][themeType[1]] !== 'function'
//         ? providedTheme[themeType[0]][themeType[1]]
//         : providedTheme[themeType[0]][themeType[1]]({
//             theme,
//             ...incomingProps,
//             colorMode: 'light',
//           });
//     } else {
//       return typeof providedTheme[themeType[0]] !== 'function'
//         ? providedTheme[themeType[0]]
//         : providedTheme[themeType[0]]({
//             theme,
//             ...incomingProps,
//             colorMode: 'light',
//           });
//     }
//   } catch {
//     return {};
//   }
// };
const resolveComponentTheme = (
  theme: any,
  incomingProps: any,
  themeType: Array<string>,
  providedTheme: any,
  colorMode: any
): any => {
  // if (typeof providedTheme[themeType[0]][themeType[1]] === 'function')
  //   // console.log(
  //   //   themeType,
  //   //   // providedTheme,
  //   //   providedTheme[themeType[0]][themeType[1]]({
  //   //     theme,
  //   //     ...incomingProps,
  //   //     colorMode: 'light',
  //   //   }),
  //   //   'flatten Props 111 ****'
  //   // );
  try {
    if (themeType[1]) {
      return typeof providedTheme[themeType[0]][themeType[1]] !== 'function'
        ? providedTheme[themeType[0]][themeType[1]]
        : providedTheme[themeType[0]][themeType[1]]({
            theme,
            ...incomingProps,
            colorMode,
          });
    } else {
      return typeof providedTheme[themeType[0]] !== 'function'
        ? providedTheme[themeType[0]]
        : providedTheme[themeType[0]]({
            theme,
            ...incomingProps,
            colorMode,
          });
    }
  } catch {
    return {};
  }
};

const mergeStylesWithSpecificity = (
  theme: any,
  componentTheme: any,
  flattenProps: any,
  specificityMap: any,
  colorMode: any,
  mergeDefaultProps: boolean = true,
  config: any
) => {
  let combinedBaseStyle = {};
  let combinedVariantStyle = {};
  let combinedSizeStyle = {};
  let flattenBaseStyle, baseSpecificityMap;
  const extendedTheme: Array<any> = [];

  if (!isEmpty(componentTheme)) extendedTheme.push(componentTheme);

  // if (flattenProps.extraProp === 'IconButton.Icon') {
  //   console.log(flattenProps, 'lflflflflf', componentTheme);
  // }
  extendedTheme.map((extededComponentTheme: any) => {
    if (extededComponentTheme.baseStyle && mergeDefaultProps) {
      combinedBaseStyle = {
        ...combinedBaseStyle,
        ...resolveComponentTheme(
          theme,
          flattenProps,
          ['baseStyle'],
          extededComponentTheme,
          colorMode
        ),
      };
    }
    if (flattenProps.variant && mergeDefaultProps) {
      if (extededComponentTheme.variants) {
        combinedVariantStyle = {
          ...combinedVariantStyle,
          ...resolveComponentTheme(
            theme,
            flattenProps,
            ['variants', flattenProps.variant],
            extededComponentTheme,
            colorMode
          ),
        };
        // console.log(
        //   // combinedBaseStyle,
        //   resolveComponentTheme(
        //     flattenProps,
        //     ['variants', flattenProps.variant],
        //     extededComponentTheme
        //   ),
        //   flattenProps,

        //   'flatten props 111 $$$'
        // );
      }
    }

    if (
      flattenProps.size &&
      extededComponentTheme?.sizes &&
      extededComponentTheme?.sizes[flattenProps.size]
    ) {
      if (
        typeof extededComponentTheme.sizes[flattenProps.size] === 'string' ||
        typeof extededComponentTheme.sizes[flattenProps.size] === 'number'
      ) {
        flattenProps.size = extededComponentTheme.sizes[flattenProps.size];
      } else {
        combinedSizeStyle = {
          ...combinedSizeStyle,
          ...resolveComponentTheme(
            theme,
            flattenProps,
            ['sizes', flattenProps.size],
            extededComponentTheme,
            colorMode
          ),
        };
        delete flattenProps.size;
      }
    } else {
      // delete flattenProps.size;
    }
  });

  if (flattenProps.extraProp === 'Spinner') {
    // console.log(combinedSizeStyle, flattenProps, '88878887');
  }

  // console.log('****>>>>> 2', flattenProps);

  // console.log(combinedBaseStyle, " ******* ");
  if (!isEmptyObj(combinedBaseStyle)) {
    [
      flattenBaseStyle,
      baseSpecificityMap,
    ] = callPropsFlattener(
      combinedBaseStyle,
      specificityMap,
      1,
      {},
      { colorMode: colorMode },
      {},
      flattenProps,
      { ...config, cascadePseudoProps: true }
    );
  }

  // NOTE: Resolving variants
  let flattenVariantStyle, variantSpecificityMap;
  // Extracting props from variant

  // console.log(combinedVariantStyle, "999999");
  if (!isEmptyObj(combinedVariantStyle)) {
    [
      flattenVariantStyle,
      variantSpecificityMap,
    ] = callPropsFlattener(
      combinedVariantStyle,
      baseSpecificityMap || specificityMap,
      1,
      {},
      { colorMode: colorMode },
      {},
      flattenProps,
      { ...config, cascadePseudoProps: true }
    );

    // We remove variant from original props if we found it in the componentTheme
    //@ts-ignore
    flattenProps.variant = undefined;
  }

  // NOTE: Resolving size

  let flattenSizeStyle, sizeSpecificityMap;
  // Extracting props from size

  // console.log(combinedSizeStyle, "&&&&&&&");
  if (!isEmptyObj(combinedSizeStyle)) {
    [
      flattenSizeStyle,
      sizeSpecificityMap,
    ] = callPropsFlattener(
      combinedSizeStyle,
      variantSpecificityMap || baseSpecificityMap || specificityMap,
      1,
      {},
      { colorMode: colorMode },
      {},
      flattenProps,
      { ...config, cascadePseudoProps: true }
    );
  }

  //////

  const defaultStyles = merge(
    {},
    flattenBaseStyle,
    flattenVariantStyle,
    flattenSizeStyle
  );

  const defaultSpecificity = merge(
    {},
    specificityMap,
    baseSpecificityMap,
    variantSpecificityMap,
    sizeSpecificityMap
  );

  // console.log(flattenProps.size, flattenProps, componentTheme, 'h3h3h3');

  flattenProps = propsSpreader(
    merge(defaultStyles, flattenProps),
    defaultSpecificity
  );

  // console.log(flattenProps, 'h3h3h3 >>>>>');

  return [flattenProps];
};
