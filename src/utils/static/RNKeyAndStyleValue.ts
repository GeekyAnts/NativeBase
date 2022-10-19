import get from 'lodash.get';
// import type { ITheme } from '.';
// import type { UseResponsiveQueryParams } from '../utils/useResponsiveQuery';
// import { resolveValueWithBreakpoint } from '../../hooks/useThemeProps/resolveValueWithBreakpoint';
import { isEmptyObj } from '../isEmptyObj';
import { propConfig } from '../../theme/styled-system';
export { theme as defaultTheme } from '../../theme';
// const isNumber = (n: any) => typeof n === 'number' && !isNaN(n);

// To handle negative margins
// const getMargin = (n: any, scale: any) => {
//   n = convertStringNumberToNumber('margin', n);
//   if (!isNumber(n)) {
//     return get(scale, n, n);
//   }

//   const isNegative = n < 0;
//   const absolute = Math.abs(n);
//   const value = get(scale, absolute, absolute);
//   if (!isNumber(value)) {
//     return isNegative ? '-' + value : value;
//   }
//   return value * (isNegative ? -1 : 1);
// };
// For backward compatibility with 3.0 of props like non token string numbers `<Box mt={"39"} />` => used to get applied as 39px. RN expects fontWeight to be string and crashes with numbers
// https://reactnative.dev/docs/text-style-props#fontweight
const convertStringNumberToNumber = (key: string, value: string) => {
  if (
    typeof value === 'string' &&
    key !== 'fontWeight' &&
    value &&
    !isNaN(Number(value))
  ) {
    return parseFloat(value);
  }

  return value;
};

const getRNKeyAndStyleValue = ({
  config,
  value,
  key,
  theme,
  styledSystemProps,
}: // currentBreakpoint,
// platform,
any) => {
  let style: any = {};
  if (config === true) {
    style = {
      ...style,
      [key]: convertStringNumberToNumber(key, value),
    };
  } else if (config) {
    //@ts-ignore
    const { property, scale, properties, transformer } = config;
    let val = value;
    // console.log('zzzz style system props', theme, scale, value, transformer);
    if (transformer) {
      val = transformer(val, theme[scale], theme, styledSystemProps.fontSize);
    } else {
      // If a token is not found in the theme
      val = get(theme[scale], value, value);
    }

    if (typeof val === 'string') {
      if (val.endsWith('px')) {
        val = parseFloat(val);
      } else if (val.endsWith('em')) {
        // const fontSize = resolveValueWithBreakpoint(
        //   styledSystemProps.fontSize,
        //   theme.breakpoints,
        //   currentBreakpoint,
        //   key
        // );
        // val =
        //   parseFloat(val) *
        //   parseFloat(get(theme.fontSizes, fontSize, fontSize));
      }
    }

    val = convertStringNumberToNumber(key, val);

    if (properties) {
      //@ts-ignore
      properties.forEach((property) => {
        style = {
          ...style,
          [property]: val,
        };
      });
    } else if (property) {
      style = {
        ...style,
        [property]: val,
      };
    } else {
      style = {
        ...style,
        ...val,
      };
    }
  }

  return style;
};

export const convertStyledProps = ({
  theme,
  // currentBreakpoint,
  // getResponsiveStyles,
  styledSystemProps,
}: // platform,
any) => {
  let styleFromProps: any = {};
  let restDefaultProps: any = {};
  const unResolvedProps: any = {};
  let dataSet: any = {};
  // let responsiveStyles: null | Record<
  //   keyof typeof theme.breakpoints,
  //   Array<any>
  // > = null;

  // const orderedBreakPoints = Object.entries(
  //   //@ts-ignore
  //   theme.breakpoints as ITheme['breakpoints']
  //   //@ts-ignore
  // ).sort((a, b) => a[1] - b[1]);

  for (const key in styledSystemProps) {
    const rawValue = styledSystemProps[key];

    const config = propConfig[key as keyof typeof propConfig];

    // TODO: refactor
    // Start: For edge cases
    // if (
    //   !getResponsiveStyles &&
    //   hasValidBreakpointFormat(rawValue, theme.breakpoints)
    // ) {
    //   unResolvedProps[key] = rawValue;
    // }

    // TODO: refactor space prop for Stack Component
    // if (key === 'space') {
    //   unResolvedProps[key] = rawValue;
    // }
    // End: For edge cases

    // if (hasValidBreakpointFormat(rawValue, theme.breakpoints)) {
    //   if (!responsiveStyles) responsiveStyles = {};

    //   const value = rawValue;
    //   if (Array.isArray(value)) {
    //     value.forEach((v, i) => {
    //       //@ts-ignore
    //       if (!responsiveStyles[orderedBreakPoints[i][0]]) {
    //         //@ts-ignore
    //         responsiveStyles[orderedBreakPoints[i][0]] = [];
    //       }
    //       const newStyle = getRNKeyAndStyleValue({
    //         config,
    //         value: v,
    //         key,
    //         styledSystemProps,
    //         theme,
    //         currentBreakpoint,
    //         platform,
    //       });

    //       if (!isEmptyObj(newStyle)) {
    //         //@ts-ignore
    //         responsiveStyles[orderedBreakPoints[i][0]].push(newStyle);
    //       }
    //     });
    //   } else {
    //     // console.log('hello 111222', key, value);
    //     for (const k in value) {
    //       const newStyle = getRNKeyAndStyleValue({
    //         config,
    //         value: value[k],
    //         key,
    //         styledSystemProps,
    //         theme,
    //         currentBreakpoint,
    //         platform,
    //       });
    //       if (!responsiveStyles[k]) {
    //         responsiveStyles[k] = [];
    //       }
    //       if (!isEmptyObj(newStyle)) {
    //         responsiveStyles[k].push(newStyle);
    //       }
    //     }
    //     // console.log('hello 111222', key, value, responsiveStyles);
    //   }
    // } else {
    const value = rawValue;

    // if (styledSystemProps?.extraProp?.endsWith('Icon')) {
    //   console.log(styledSystemProps?.extraProp, 'hello flatten here22');
    // }

    //TODO: refactor
    // if (
    //   key === 'size' ||
    //   (styledSystemProps?.extraProp?.endsWith('.Icon') && key === 'color')
    // ) {
    //   restDefaultProps = {
    //     ...restDefaultProps,
    //     [key]: value,
    //   };
    // } else {
    const newStyle = getRNKeyAndStyleValue({
      config,
      value,
      key,
      styledSystemProps,
      theme,
      // currentBreakpoint,
      // platform,
    });

    // TODO: refactor
    if (
      isEmptyObj(newStyle) &&
      !key.startsWith('_') &&
      key !== 'extraProp' &&
      key !== 'colorScheme' &&
      // key !== 'style' &&
      key !== 'variants' &&
      key !== 'sizes' &&
      key !== 'variant'
    ) {
      restDefaultProps = {
        ...restDefaultProps,
        [key]: value,
      };
    }

    styleFromProps = {
      ...styleFromProps,
      ...newStyle,
    };
    // }
    // }
  }

  // if (responsiveStyles) {
  //   if (getResponsiveStyles) {
  //     const query: any = { query: [] };
  //     orderedBreakPoints.forEach((o) => {
  //       const key = o[0];
  //       if (key === 'base') {
  //         if (responsiveStyles) query.initial = responsiveStyles.base;
  //       } else {
  //         if (responsiveStyles)
  //           if (key in responsiveStyles) {
  //             if (responsiveStyles[key].length > 0) {
  //               query?.query?.push({
  //                 //@ts-ignore
  //                 minWidth: o[1],
  //                 style: responsiveStyles[key],
  //               });
  //             }
  //           }
  //       }
  //     });
  //     // console.log('hello responsive', orderedBreakPoints, responsiveStyles);

  //     const { dataSet: newDataSet, styleFromQuery } = getResponsiveStyles(
  //       query
  //     );
  //     dataSet = { ...dataSet, ...newDataSet };

  //     styleFromProps = { ...styleFromProps, ...styleFromQuery };
  //   } else {
  //   }
  // }

  // if (process.env.NODE_ENV === 'development' && debug) {
  //   /* eslint-disable-next-line */
  //   console.log('style ', debug + ' :: ', {
  //     styleFromProps,
  //     style,
  //     styledSystemProps,
  //   });
  // }

  return {
    styleSheet: {},
    styleFromProps,
    restDefaultProps,
    dataSet,
    unResolvedProps,
  };
};

// export type StyledPropConfig = typeof propConfig;
