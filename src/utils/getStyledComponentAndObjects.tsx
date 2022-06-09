import { resolvePropsToStyle } from '../hooks';
import merge from 'lodash.merge';
import { Platform } from 'react-native';
import { propsFlattener } from '../hooks/useThemeProps/propsFlattener';
import { theme } from '../theme';
import {
  callPropsFlattener,
  propsSpreader,
} from '../hooks/useThemeProps/usePropsResolution';
import { isEmptyObj } from './isEmptyObj';
import isEmpty from 'lodash.isempty';

// window['logger'] = {};
// console.batchTime = (key) => {
//   const keyValue = window['logger'][key];
//   if (keyValue) {
//     // keyValue.totalTime = keyValue.totalTime + (Date.now() - keyValue.startTime);
//     keyValue.startTime = window.performance.now();
//   } else {
//     window['logger'][key] = {
//       startTime: window.performance.now(),
//       totalTime: 0,
//     };
//   }
// };

// console.batchTimeEnd = (key) => {
//   const keyValue = window['logger'][key];
//   if (keyValue) {
//     keyValue.totalTime =
//       keyValue.totalTime + (window.performance.now() - keyValue.startTime);
//     // console.log(
//     //   "useStyledSystemPropsResolver 2222",
//     //   keyValue,
//     //   window.performance.now()
//     // );
//   }
// };

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
      platform: Platform.OS,
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

// export const makeStyledComponent = (
//   Comp: any,
//   componentName: keyof ITheme['components']
// ) => {
//   //TODO: component theme

//   const globalLightStyle = resolveComponentThemeStyle(componentName, 'light');
//   const globalDarkStyle = resolveComponentThemeStyle(componentName, 'dark');

//   return React.forwardRef(({ debug, ...props }: any, ref: any) => {
//     // console.log(props, "hello props **********");
//     const [style, restProps] = useStyledSystemPropsResolver(props);
//     // if (process.env.NODE_ENV === "development" && debug) {
//     //   /* eslint-disable-next-line */
//     //   console.log(
//     //     `%cstyleSystem`,
//     //     "background: #4b5563; color: #d97706; font-weight: 700; padding: 2px 8px;"
//     //   );
//     //   /* eslint-disable-next-line */
//     //   console.log("%c props: ", "color: #4ade80; font-weight: 700;", props);
//     //   /* eslint-disable-next-line */
//     //   console.log("%c style: ", "color: #22d3ee; font-weight: 700;", style);
//     //   /* eslint-disable-next-line */
//     //   console.log(
//     //     "%c restProps: ",
//     //     "color: #22d3ee; font-weight: 700;",
//     //     restProps
//     //   );
//     // }

//     // console.log("box props", props);
//     // const safeAreaProps = useSafeArea(props);
//     // console.timeEnd("useSafeArea");

//     // check dark / light mode
//     // based on color mode pass style

//     const { colorMode } = useColorMode();
//     let componentStyle = {};
//     if (colorMode === 'light') {
//       componentStyle = globalLightStyle;
//     } else {
//       componentStyle = globalDarkStyle;
//     }

//     // console.log(StyleSheet.flatten(componentStyle.style), "hello *********");
//     return (
//       <Comp {...restProps} style={[style, componentStyle.style]} ref={ref}>
//         {props.children}
//       </Comp>
//     );
//   });
// };
