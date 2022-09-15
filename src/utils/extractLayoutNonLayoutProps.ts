import merge from 'lodash.merge';
import { extractInObject } from '../theme/tools';

/**
 *
 * @param filterProps Filtered props array
 * @param inlineResolvedProps inline resolved props
 * @param inlineStateResolvedProps inline state props from resolved props
 * @param defaultStateThemeStyles  default state theme styles
 * @param defaultThemeStyles default theme styles
 * @returns layout and non-layout props for inline and default props
 */
export const extractFilteredProps = (
  filterProps: any = [],
  inlineResolvedProps: any = {},
  inlineStateResolvedProps: any = {},
  defaultStateThemeStyles: any = {},
  defaultThemeStyles: any = {}
) => {
  //Merge with default styles
  const [layoutStyles, nonLayoutStyles] = extractInObject(
    defaultThemeStyles,
    filterProps
  );

  //Merge with default state styles
  const [stateLayoutStyles, stateNonLayoutStyles] = extractInObject(
    {
      ...defaultStateThemeStyles,
      ...merge.apply({}, inlineStateResolvedProps?.INTERNAL_themeStyle),
    },
    filterProps
  );

  //Merge with inline props
  const [layoutProps, nonLayoutProps] = extractInObject(
    inlineResolvedProps,
    filterProps
  );

  //Merge with inline state props
  const [stateLayoutProps, stateNonLayoutProps] = extractInObject(
    inlineStateResolvedProps,
    filterProps
  );

  return {
    layoutStyles,
    nonLayoutStyles,
    stateLayoutStyles,
    stateNonLayoutStyles,
    layoutProps,
    nonLayoutProps,
    stateLayoutProps,
    stateNonLayoutProps,
  };
};
