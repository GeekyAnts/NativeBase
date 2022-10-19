import React from 'react';
import type {
  UseResponsiveQueryParams,
  UseResponsiveQueryReturnType,
} from './types';
import { useWindowDimensions } from 'react-native';
import { useStableMemo } from './useStableMemo';
import { getResponsiveStylesImpl } from './common';

export const useResponsiveQuery = (
  queries?: UseResponsiveQueryParams
): UseResponsiveQueryReturnType => {
  const windowWidth = useWindowDimensions().width;

  const values = useStableMemo(() => {
    const getResponsiveStyles = getResponsiveStylesImpl(windowWidth);
    if (queries) {
      const { styles } = getResponsiveStyles(queries);
      return { styles, getResponsiveStyles };
    } else {
      return { getResponsiveStyles };
    }
  }, [queries, windowWidth]);

  return values;
};
// noop, web-only. Refer useResponsiveQuery.web.tsx
export const getStyleElement = () => {
  return <></>;
};
