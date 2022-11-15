import { hasValidBreakpointFormat } from '../theme/tools';
import { getRNKeyAndStyleValue } from './getRNKeyAndStyleValue';
import type { ITheme } from '../theme';
/**
 * Common Logic Sharing between useSx and useStyledSytem
 * @param styledSystemProps
 * @param theme
 * @param currentBreakpoint
 * @returns styleFromProps, responsiveStyles
 */

export const getStyledFromProps = (
  styledSystemProps: any,
  theme: any,
  currentBreakpoint: any,
  propConfig: any
) => {
  let styleFromProps: any = {};
  let responsiveStyles: null | Record<
    keyof typeof theme.breakpoints,
    Array<any>
  > = null;
  const orderedBreakPoints = Object.entries(
    theme.breakpoints as ITheme['breakpoints']
  ).sort((a, b) => a[1] - b[1]);
  for (const key in styledSystemProps) {
    const rawValue = styledSystemProps[key];

    const config = propConfig[key as keyof typeof propConfig];

    if (hasValidBreakpointFormat(rawValue, theme.breakpoints)) {
      if (!responsiveStyles) responsiveStyles = {};

      const value = rawValue;
      if (Array.isArray(value)) {
        value.forEach((v, i) => {
          //@ts-ignore
          if (!responsiveStyles[orderedBreakPoints[i][0]]) {
            //@ts-ignore
            responsiveStyles[orderedBreakPoints[i][0]] = [];
          }
          const newStyle = getRNKeyAndStyleValue({
            config,
            value: v,
            key,
            styledSystemProps,
            theme,
            currentBreakpoint,
          });
          //@ts-ignore
          responsiveStyles[orderedBreakPoints[i][0]].push(newStyle);
        });
      } else {
        for (const k in value) {
          const newStyle = getRNKeyAndStyleValue({
            config,
            value: value[k],
            key,
            styledSystemProps,
            theme,
            currentBreakpoint,
          });
          if (!responsiveStyles[k]) {
            responsiveStyles[k] = [];
          }
          responsiveStyles[k].push(newStyle);
        }
      }
    } else {
      const value = rawValue;
      const newStyle = getRNKeyAndStyleValue({
        config,
        value,
        key,
        styledSystemProps,
        theme,
        currentBreakpoint,
      });

      styleFromProps = {
        ...styleFromProps,
        ...newStyle,
      };
    }
  }

  return { styleFromProps, responsiveStyles };
};
