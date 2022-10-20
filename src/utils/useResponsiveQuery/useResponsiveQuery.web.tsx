// import { atomic } from 'react-native-web/dist/exports/StyleSheet/compiler';
import { atomic } from '../react-native-web-fucntions/atomic';
import preprocess from '../react-native-web-fucntions/preprocess';
import type {
  DataSet,
  Query,
  UseResponsiveQueryParams,
  UseResponsiveQueryReturnType,
  GetResponsiveStylesParams,
} from './types';
import { StyleSheet } from 'react-native';
// @ts-ignore
import stableHash from 'stable-hash';
import hash from './hash';
import type { GetResponsiveStylesReturnType } from './types';
import { useStableMemo } from './useStableMemo';
import { getResponsiveStylesImpl, useDimensionsWithEnable } from './common';
import { ResponsiveQueryContext } from './ResponsiveQueryProvider';
import React from 'react';

/******************** Implementation after RNW v0.18 ***********************/

/**
 * 1. preprocess:- Handles shadow/text shadow conversion from RN styles to web *                 styles
 *
 * 2. atomic:- it handles prefixing, converting RN specific styles to web styles *             and generating the CSS selector.
 *             Input {marginTop: 10}
 *             Output
 *             compiledStyle : marginTop: "r-marginTop-156q2ks"
 *             compiledOrderedRules : ".r-marginTop-156q2ks{margin-top:10px;}"
 *      a)compiledStyle:- Array it holds identifier/selector with properties
 *      b)compiledOrderedRules:- Array it holds the css rule with selector name
 *      Also from RNW v0.18 handles swapping of ltr styles if enabled by user
 * 3. createSheet:- used to grab sheet which exist already created by rnw. when we *                  call createSheet without id it will return sheet which exist. *                  cause it automatically takes a default ID  which is already in *                  use (created by rnw with default ID) so this return sheet *                  which exist with  ID doesn't create a new sheet.
 *
 * This Implementation is based on asumptions that RNW doesn't change the         * function  or doesn't re-write them. if there is any change in RNW implmentation * it we'll break and needs to be updated.
 *
 */
let textContentMap: any = {};

export const useResponsiveQuery = (
  queries?: UseResponsiveQueryParams
): UseResponsiveQueryReturnType => {
  const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  const disableCSSMediaQueries =
    queries?.disableCSSMediaQueries ??
    responsiveQueryContext.disableCSSMediaQueries;

  // Only attaches listener if disableCSSMediaQueries is true
  const windowWidth = useDimensionsWithEnable({
    enable: disableCSSMediaQueries,
  }).width;

  const values = useStableMemo(() => {
    // Use the non-media query responsive styling
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
        const { styles, dataSet } = getResponsiveStyles(queries);
        return { dataSet, styles, getResponsiveStyles };
      } else {
        return { getResponsiveStyles };
      }
    }
  }, [queries, windowWidth, disableCSSMediaQueries]);

  return values;
};

const getDataAttribute = (queryRule: Query) => {
  if (
    typeof queryRule.minWidth === 'number' &&
    typeof queryRule.maxWidth === 'number'
  ) {
    return `min-width-${queryRule.minWidth}-max-width-${queryRule.maxWidth}`;
  } else if (typeof queryRule.minWidth === 'number') {
    return `min-width-${queryRule.minWidth}`;
  } else if (typeof queryRule.maxWidth === 'number') {
    return `max-width-${queryRule.maxWidth}`;
  }

  return undefined;
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

const getResponsiveStyles = (
  queries: GetResponsiveStylesParams
): GetResponsiveStylesReturnType => {
  const queryString = stableHash(queries.query);
  const queriesHash = hash(queryString);

  const styles = queries.initial
    ? [
        StyleSheet.create({ initial: StyleSheet.flatten(queries.initial) })
          .initial,
      ]
    : undefined;

  let dataSet: DataSet = {};
  let styleSheet: any;

  /**
   * This function is copied from intergalacticspacehighway/rnw-responsive-ssr
   */
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

  if (queries.query) {
    queries.query.forEach((queryRule) => {
      const queryHash = queriesHash + hash(stableHash(queryRule));
      const dataAttribute = getDataAttribute(queryRule);

      if (dataAttribute) {
        const newIdentifier = `[data-${dataAttribute}$="${queryHash}"]`;
        dataSet[dataAttribute] = queryHash;

        let mediaRules = '';

        const flattenQueryStyle = StyleSheet.flatten(queryRule.style);
        const newStyle = preprocess(flattenQueryStyle);
        const [compiledStyle, compiledOrderedRules] = atomic(newStyle);
        //@ts-ignore
        delete compiledStyle.$$css; //removing unnecessary $$css property
        Object.keys(compiledStyle).forEach((key) => {
          const oldIdentifier = compiledStyle[key];
          compiledOrderedRules.forEach(([rules, _order]: any) => {
            // Rule returned by atomic has css selectors, so we'll replace it with data-attr selector
            const newRule = rules[0].replace(
              '.' + oldIdentifier,
              newIdentifier
            );
            mediaRules += newRule;
          });
        });
        if (mediaRules) {
          const mediaQueryRule = getMediaQueryRule(queryRule, mediaRules);
          insert(`/*${queryHash}{}*/${mediaQueryRule}`);
          textContentMap[`/*${queryHash}{}*/${mediaQueryRule}`] = true;
        }
      }
    });
  }

  return { styles, dataSet };
};

/**
 * This function is copied from intergalacticspacehighway/rnw-responsive-ssr
 */
export const getStyleElement = () => {
  return (
    <style
      type="text/css"
      dangerouslySetInnerHTML={{ __html: Object.keys(textContentMap).join('') }}
    />
  );
};
