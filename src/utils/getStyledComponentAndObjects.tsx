import merge from 'lodash.merge';
import {
  callPropsFlattener,
  propsFlattener,
  propsSpreader,
  resolvePropsToStyle,
} from '../hooks/useThemeProps/propsFlattener';
import { theme } from '../theme';
import { isEmptyObj } from './isEmptyObj';
import isEmpty from 'lodash.isempty';

export const getStyledObject = (
  //@ts-ignore
  name: string,
  componentTheme: any,
  colorMode: any,
  inputProps?: {},
  mergeDefaultProps: boolean = true
) => {
  const componentStyle = componentTheme?.defaultProps?.style;

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
      //TODO: build-time
      platform: 'web', //Platform.OS,
      colormode: colorMode,
      state: {},
      currentSpecificityMap: {},
      previouslyFlattenProps: flattenProps || {},
      cascadePseudoProps: true,
    },
    1
  );

  // console.log(inputProps, 'hello flatten here');

  [flattenProps] = mergeStylesWithSpecificity(
    componentTheme,
    flattenProps,
    specificityMap,
    colorMode,
    mergeDefaultProps
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
    componentStyle,
    theme,
    false,
    4,
    false,
    undefined
  );

  // if (inputProps?.extraProp === 'Actionsheet') {
  //   console.log(flattenProps, 'hello flatten here');
  // }

  styleObj.internalPseudoProps = internalPseudoProps;

  return styleObj;
};
//@ts-ignore

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const resolveComponentThemeStyle = (
  incomingProps: any,
  themeType: Array<string>,
  providedTheme?: any
): any => {
  try {
    if (themeType[1]) {
      return typeof providedTheme[themeType[0]][themeType[1]] !== 'function'
        ? providedTheme[themeType[0]][themeType[1]]
        : providedTheme[themeType[0]][themeType[1]]({
            theme,
            ...incomingProps,
            colorMode: 'light',
          });
    } else {
      return typeof providedTheme[themeType[0]] !== 'function'
        ? providedTheme[themeType[0]]
        : providedTheme[themeType[0]]({
            theme,
            ...incomingProps,
            colorMode: 'light',
          });
    }
  } catch {
    return {};
  }
};
const resolveComponentTheme = (
  incomingProps: any,
  themeType: Array<string>,
  providedTheme: any
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
            colorMode: 'light',
          });
    } else {
      return typeof providedTheme[themeType[0]] !== 'function'
        ? providedTheme[themeType[0]]
        : providedTheme[themeType[0]]({
            theme,
            ...incomingProps,
            colorMode: 'light',
          });
    }
  } catch {
    return {};
  }
};

const mergeStylesWithSpecificity = (
  componentTheme: any,
  flattenProps: any,
  specificityMap: any,
  colorMode: any,
  mergeDefaultProps: boolean = true
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
          flattenProps,
          ['baseStyle'],
          extededComponentTheme
        ),
      };
    }
    if (flattenProps.variant && mergeDefaultProps) {
      if (extededComponentTheme.variants) {
        combinedVariantStyle = {
          ...combinedVariantStyle,
          ...resolveComponentTheme(
            flattenProps,
            ['variants', flattenProps.variant],
            extededComponentTheme
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
            flattenProps,
            ['sizes', flattenProps.size],
            extededComponentTheme
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
      { cascadePseudoProps: true }
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
      { cascadePseudoProps: true }
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
      { cascadePseudoProps: true }
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
