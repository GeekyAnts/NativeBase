//@ts-ignore
import { string as toCSSString } from 'to-style';
import type {
  GetResponsiveStylesReturnType,
  Query,
  UseResponsiveQueryParams,
} from './types';
import React, { useMemo } from 'react';
import getHash from './hash';
import { StyleSheet } from 'react-native';
import { ResponsiveQueryContext } from './ResponsiveQueryProvider';
import { getResponsiveStylesImpl, useDimensionsWithEnable } from './common';
import preprocess from './preprocess';

let styleSheet: any;
let textContentMap: any = {};

const useResponsiveQuery = (
  queries: UseResponsiveQueryParams
): GetResponsiveStylesReturnType => {
  const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  const disableCSSMediaQueries =
    queries?.disableCSSMediaQueries ??
    responsiveQueryContext.disableCSSMediaQueries;

  // Only attaches listener if disableCSSMediaQueries is true
  const windowWidth = useDimensionsWithEnable({
    enable: disableCSSMediaQueries,
  }).width;

  const cssClass = queries
    ? 'responsive-' + getHash(JSON.stringify(queries))
    : undefined;

  const result = useMemo(() => {
    if (disableCSSMediaQueries) {
      const getResponsiveStyles = getResponsiveStylesImpl(windowWidth);
      if (queries) {
        const { styles } = getResponsiveStyles(queries);
        return { styles, getResponsiveStyles };
      } else {
        return { getResponsiveStyles };
      }
    } else {
      if (queries) {
        const { styles } = getResponsiveStyles(queries, cssClass);
        return { styles, getResponsiveStyles };
      } else {
        return { getResponsiveStyles };
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cssClass, disableCSSMediaQueries, windowWidth]);

  return result;
};

const getResponsiveStyles = (queries: any, cssClass?: string): any => {
  const cssClassName =
    cssClass ?? 'responsive-' + getHash(JSON.stringify(queries));

  const classSelector = `.${cssClassName}`;

  //Combining Intial Rules

  //preprocess :- Converting RN Shadow to CSS Shadow Coppied from RNW and
  //              done some modifications modification

  let CombinedIntialRules = {};
  if (Array.isArray(queries?.initial)) {
    queries?.initial?.forEach((style: any) => {
      CombinedIntialRules = { ...CombinedIntialRules, ...style };
    });
    queries.initial = preprocess(CombinedIntialRules);
  } else {
    queries.initial = preprocess(queries.initial);
  }

  //Combining Query style Rules

  queries?.query?.forEach((query: any) => {
    let CombineQueryStyle = {};
    //@ts-ignore
    if (Array.isArray(query?.style)) {
      query?.style.forEach((style: any) => {
        CombineQueryStyle = { ...CombineQueryStyle, ...style };
      });
      query.style = preprocess(CombineQueryStyle);
    } else {
      query.style = preprocess(query.style);
    }
  });

  queries?.query?.forEach((query: any) => {
    const cssString = toCSSRule(query, classSelector);
    if (cssString) {
      insert(cssString);
      textContentMap[cssString] = true;
    }
  });

  return {
    styles: [
      //@ts-ignore
      StyleSheet.create({ a: queries.initial }).a,
      { $$css: true, responsiveStyles: cssClassName },
    ],
  };
};

const toCSSRule = (query: Query, classSelector: string) => {
  const cssString = toCSSString(query.style);
  const rule = `${classSelector}{${cssString}}`;
  const cssRuleWithMediaQuery = getMediaQueryRule(query, rule);
  return cssRuleWithMediaQuery;
};

const getMediaQueryRule = (query: Query, newRule: string) => {
  if (
    typeof query.minWidth === 'number' &&
    typeof query.maxWidth === 'number'
  ) {
    return `@media only screen and (min-width: ${query.minWidth}px) and (max-width: ${query.maxWidth}px) { ${newRule} }`;
  } else if (typeof query.minWidth === 'number') {
    return `@media only screen and (min-width: ${query.minWidth}px) { ${newRule} }`;
  } else if (typeof query.maxWidth === 'number') {
    return `@media only screen and (max-width: ${query.maxWidth}px) { ${newRule} }`;
  }
  return undefined;
};

const insert = (rule: string) => {
  if (typeof window !== 'undefined') {
    if (!styleSheet) {
      const styleEl = document.createElement('style');
      styleEl.type = 'text/css';
      styleEl.appendChild(document.createTextNode(''));
      document.head.appendChild(styleEl);
      styleSheet = styleEl.sheet;
    }

    styleSheet.insertRule(rule, styleSheet.cssRules.length);
  }
};

export { useResponsiveQuery };
