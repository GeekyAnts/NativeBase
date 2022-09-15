import merge from 'lodash.merge';
import { extractInObject } from '../theme/tools';

export const extractLayoutNonLayoutPropsFromStateAndResolvedProps = (
  filterProps: any,
  resolvedProps: any,
  stateProps: any,
  stateStyleFromProps: any,
  styleFromProps: any
) => {
  //Merge with default styles
  const [layoutStyles, nonLayoutStyles] = extractInObject(
    styleFromProps,
    filterProps
  );

  //Merge with default state styles
  const [stateLayoutStyles, stateNonLayoutStyles] = extractInObject(
    {
      ...stateStyleFromProps,
      ...merge.apply({}, stateProps?.INTERNAL_themeStyle),
    },
    filterProps
  );

  //Merge with inline props
  const [layoutProps, nonLayoutProps] = extractInObject(
    resolvedProps,
    filterProps
  );

  //Merge with inline state props
  const [stateLayoutProps, stateNonLayoutProps] = extractInObject(
    stateProps,
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
