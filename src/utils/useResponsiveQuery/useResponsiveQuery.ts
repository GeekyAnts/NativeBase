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
      const { styles, styleFromQuery } = getResponsiveStyles(queries);

      return { styles, styleFromQuery, getResponsiveStyles };
    } else {
      return { getResponsiveStyles };
    }
  }, [queries, windowWidth]);

  return values;
};
